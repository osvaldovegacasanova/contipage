# === Ruta del proyecto ===
$REPO = "C:\contipage\site"

# === Ir al repo ===
try {
    Set-Location -Path $REPO -ErrorAction Stop
}
catch {
    Write-Host "[ERROR] No se pudo acceder a $REPO" -ForegroundColor Red
    exit 1
}

# === Ver si hay cambios ===
$gitStatus = git status --porcelain 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Git no responde correctamente." -ForegroundColor Red
    exit 1
}

# === Si no hay cambios, avisar y salir ===
if ([string]::IsNullOrWhiteSpace($gitStatus)) {
    Write-Host "[INFO] No hay cambios para commitear." -ForegroundColor Yellow
    Write-Host "[INFO] Haciendo push igual..." -ForegroundColor Yellow
    git push
    exit 0
}

# === Pedir mensaje de commit ===
$MSG = Read-Host "Mensaje de commit (enter para auto)"

if ([string]::IsNullOrWhiteSpace($MSG)) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $MSG = "update ($timestamp)"
}

Write-Host "[INFO] Commit: `"$MSG`"" -ForegroundColor Cyan

# === Agregar y commitear ===
git add -A
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Fallo el 'git add'. Hay archivos que Git no pudo agregar." -ForegroundColor Red
    Write-Host "[INFO] Ejecuta: git status -sb" -ForegroundColor Yellow
    Write-Host "[INFO] Si ves un archivo raro como NUL, eliminalo o agregalo al .gitignore." -ForegroundColor Yellow
    exit 1
}

git commit -m $MSG
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Fallo el commit." -ForegroundColor Red
    exit 1
}

# === Push ===
Write-Host "[INFO] Subiendo cambios a origin/main..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Fallo el push." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[OK] Cambios enviados exitosamente." -ForegroundColor Green
exit 0
