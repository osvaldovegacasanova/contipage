import fs from 'node:fs';
import path from 'node:path';
import ffmpegPath from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';

const root = process.cwd();
const input = path.join(root, 'public', 'videos', 'parte1.mp4');
const outDir = path.join(root, 'public', 'videos');
const outputs = {
  webm: path.join(outDir, 'parte1.webm'),
  mp4Mobile: path.join(outDir, 'parte1-mobile.mp4'),
  webmMobile: path.join(outDir, 'parte1-mobile.webm'),
};

function exists(p) {
  try { fs.accessSync(p, fs.constants.F_OK); return true; } catch { return false; }
}

if (!exists(input)) {
  console.error(`Input video not found: ${input}`);
  process.exit(1);
}

if (!ffmpegPath) {
  console.error('ffmpeg binary not found via ffmpeg-static.');
  process.exit(1);
}

ffmpeg.setFfmpegPath(ffmpegPath);

function encodeWebm(src, dest, { width = null, crf = 32, fps = null } = {}) {
  return new Promise((resolve, reject) => {
    let cmd = ffmpeg(src)
      .noAudio()
      .videoCodec('libvpx-vp9')
      .outputOptions(['-b:v 0', `-crf ${crf}`]);
    if (width) cmd = cmd.size(`${width}x?`);
    if (fps) cmd = cmd.outputOptions([`-r ${fps}`]);
    cmd
      .on('error', reject)
      .on('end', resolve)
      .save(dest);
  });
}

function encodeMobileMp4(src, dest, { width = 1280, fps = 24, crf = 28, preset = 'veryfast' } = {}) {
  return new Promise((resolve, reject) => {
    ffmpeg(src)
      .noAudio()
      .videoCodec('libx264')
      .size(`${width}x?`)
      .outputOptions([
        `-crf ${crf}`,
        `-preset ${preset}`,
        `-r ${fps}`,
        '-movflags +faststart',
      ])
      .on('error', reject)
      .on('end', resolve)
      .save(dest);
  });
}

async function main() {
  console.log('Encoding variants from', input);

  // Desktop WebM (VP9)
  if (!exists(outputs.webm)) {
    try {
      console.log('→ Creating', outputs.webm);
      await encodeWebm(input, outputs.webm, { crf: 32 });
    } catch (e) {
      console.warn('Failed to create WebM (desktop). Skipping.', e.message || e);
    }
  } else {
    console.log('✓ Exists', outputs.webm);
  }

  // Mobile MP4 (H.264)
  if (!exists(outputs.mp4Mobile)) {
    try {
      console.log('→ Creating', outputs.mp4Mobile);
      await encodeMobileMp4(input, outputs.mp4Mobile, { width: 1280, fps: 24, crf: 28, preset: 'veryfast' });
    } catch (e) {
      console.warn('Failed to create MP4 mobile. Skipping.', e.message || e);
    }
  } else {
    console.log('✓ Exists', outputs.mp4Mobile);
  }

  // Mobile WebM (VP9)
  if (!exists(outputs.webmMobile)) {
    try {
      console.log('→ Creating', outputs.webmMobile);
      await encodeWebm(input, outputs.webmMobile, { width: 854, fps: 24, crf: 36 });
    } catch (e) {
      console.warn('Failed to create WebM mobile. Skipping.', e.message || e);
    }
  } else {
    console.log('✓ Exists', outputs.webmMobile);
  }

  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

