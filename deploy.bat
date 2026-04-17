@echo off
setlocal ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

cd /d "%~dp0"

echo.
echo ============================================================
echo  DEPLOY - Continental Andes Blowers
echo ============================================================
echo.

REM -- 1. GIT STATUS --
set "HAS_CHANGES="
for /f "delims=" %%s in ('git status --porcelain 2^>nul') do set "HAS_CHANGES=1"

if not defined HAS_CHANGES (
    echo [INFO] No hay cambios para commitear.
    echo [INFO] Haciendo push de todas formas...
    git push -u origin main
    goto :done
)

REM -- 2. COMMIT --
echo Cambios detectados:
git status -sb
echo.
set /p MSG=Mensaje de commit (Enter para auto):
if "!MSG!"=="" (
    for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set "HOY=%%c-%%b-%%a"
    for /f "tokens=1-2 delims=:, " %%a in ("%time%") do set "HORA=%%a:%%b"
    set "MSG=update (!HOY! !HORA!)"
)

echo.
echo [INFO] Commit: "!MSG!"

git add -A
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Fallo git add.
    pause
    exit /b 1
)

git commit -m "!MSG!"
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Fallo el commit.
    pause
    exit /b 1
)

REM -- 3. PUSH --
echo.
echo [INFO] Subiendo a origin/main...
git push -u origin main
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Fallo el push.
    pause
    exit /b 1
)

:done
echo.
echo ============================================================
echo  [OK] Cambios enviados exitosamente.
echo ============================================================
echo.
pause
exit /b 0
