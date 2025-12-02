@echo off
setlocal ENABLEDELAYEDEXPANSION

REM === Ruta del proyecto ===
set "REPO=C:\contipage\site"

REM === Ir al repo ===
cd /d "%REPO%" || (
  echo [ERROR] No se pudo acceder a %REPO%
  exit /b 1
)

REM === Ver si hay cambios ===
git status --porcelain >nul
if %ERRORLEVEL% neq 0 (
  echo [ERROR] Git no responde correctamente.
  exit /b 1
)

REM === Si no hay cambios, avisar y salir ===
git status --porcelain | findstr . >nul
if %ERRORLEVEL% neq 0 (
  echo [INFO] No hay cambios para commitear.
  echo [INFO] Haciendo push igual...
  git push
  exit /b 0
)

REM === Pedir mensaje de commit ===
set /p MSG=Mensaje de commit (enter para auto): 

if "!MSG!"=="" (
  set "MSG=update (%date% %time%)"
)

echo [INFO] Commit: "!MSG!"

REM === Agregar y commitear ===
git add -A
git commit -m "!MSG!" || (
  echo [ERROR] Fallo el commit.
  exit /b 1
)

REM === Push ===
echo [INFO] Subiendo cambios a origin/main...
git push -u origin main
if %ERRORLEVEL% neq 0 (
  echo [ERROR] Fallo el push.
  exit /b 1
)

echo.
echo [OK] Cambios enviados exitosamente.
exit /b 0
