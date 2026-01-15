@echo off
chcp 65001 >nul
echo ========================================
echo Быстрый деплой на GitHub
echo ========================================
echo.

REM Инициализация git если нужно
if not exist .git (
    echo [1/5] Инициализация Git репозитория...
    git init
)

REM Добавление файлов
echo [2/5] Добавление файлов...
git add .

REM Коммит
echo [3/5] Создание коммита...
git commit -m "Deploy: Interactive TZ questionnaire app" 2>nul
if errorlevel 1 (
    echo Нет изменений для коммита или коммит уже создан
)

REM Проверка remote
echo [4/5] Проверка удаленного репозитория...
git remote show origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo ========================================
    echo ВНИМАНИЕ: Нужно настроить удаленный репозиторий!
    echo ========================================
    echo.
    echo Выполните следующие команды:
    echo.
    echo 1. Создайте репозиторий на GitHub:
    echo    https://github.com/new
    echo.
    echo 2. Затем выполните:
    echo    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    echo    git branch -M main
    echo.
    echo 3. Запустите этот скрипт снова
    echo.
    pause
    exit /b 0
)

REM Переименование ветки
git branch -M main 2>nul

REM Push
echo [5/5] Отправка на GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ОШИБКА при отправке. Проверьте настройки доступа.
) else (
    echo.
    echo ========================================
    echo Успешно отправлено на GitHub!
    echo ========================================
    echo.
    echo Для деплоя на Vercel:
    echo 1. Перейдите на https://vercel.com
    echo 2. Войдите через GitHub
    echo 3. Нажмите "Add New Project"
    echo 4. Выберите ваш репозиторий
    echo 5. Нажмите "Deploy"
    echo.
)

pause
