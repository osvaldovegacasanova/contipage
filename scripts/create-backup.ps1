param(
    [string]$Reason = "Manual backup"
)

$timestamp = Get-Date -Format "yyyy-MM-ddTHH-mm-ss"
$backupName = "backup_$timestamp"
$backupDir = "backups"
$backupPath = Join-Path $backupDir "$backupName.zip"

# Create backups directory
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# Exclude node_modules, dist, .astro from backup
$exclude = @("node_modules", "dist", ".astro", "backups", ".git")
$tempDir = "temp_backup_$timestamp"

Write-Host "Creating backup..." -ForegroundColor Yellow

# Copy project to temp (excluding specified directories)
Copy-Item -Path . -Destination $tempDir -Recurse -Force -Exclude $exclude

# Create ZIP
Compress-Archive -Path $tempDir -DestinationPath $backupPath

# Clean temp
Remove-Item -Path $tempDir -Recurse -Force

# Update backup log
$logEntry = @"

## $backupName
- **Timestamp**: $(Get-Date -Format "o")
- **Reason**: $Reason
- **Files to be modified**:
  - src/components/sections/areas/components/IndustryCard.astro
  - src/components/sections/areas/data.ts
  - src/pages/mineria.astro (new)
- **Backup Location**: $backupPath

---
"@

$logPath = "backup_list.md"
if (Test-Path $logPath) {
    Add-Content -Path $logPath -Value $logEntry
} else {
    "# Project Backup Log`n$logEntry" | Set-Content -Path $logPath
}

Write-Host "[OK] Backup created: $backupPath" -ForegroundColor Green
Write-Host "[LOG] Logged to backup_list.md" -ForegroundColor Green
