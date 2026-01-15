@echo off
chcp 65001 >nul
echo ========================================
echo Деплой на GitHub
echo ========================================
echo.

echo Проверка Git...
git --version
if errorlevel 1 (
    echo ОШИБКА: Git не установлен!
    pause
    exit /b 1
)
echo.

echo Проверка статуса репозитория...
if not exist .git (
    echo Инициализация Git репозитория...
    git init
    echo Репозиторий инициализирован
) else (
    echo Git репозиторий уже инициализирован
)
echo.

echo Статус репозитория:
git status
echo.

echo Добавление всех файлов...
git add .
echo.

echo Создание коммита...
git commit -m "Deploy: Interactive TZ questionnaire app"
echo.

echo Проверка удаленного репозитория...
git remote -v >nul 2>&1
if errorlevel 1 (
    echo.
    echo ВНИМАНИЕ: Удаленный репозиторий не настроен!
    echo.
    echo Выполните следующие шаги:
    echo 1. Создайте репозиторий на GitHub: https://github.com/new
    echo 2. Выполните: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    echo 3. Выполните: git branch -M main
    echo 4. Запустите этот скрипт снова
    echo.
    pause
    exit /b 1
)

echo Удаленный репозиторий найден:
git remote -v
echo.

echo Переименование ветки в main (если нужно)...
git branch -M main
echo.

echo Отправка на GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ОШИБКА при отправке на GitHub!
    echo Проверьте:
    echo 1. Правильность URL удаленного репозитория
    echo 2. Наличие прав доступа (Personal Access Token)
    echo 3. Подключение к интернету
    echo.
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo Успешно отправлено на GitHub!
    echo ========================================
    echo.
    echo Следующие шаги для деплоя:
    echo 1. Перейдите на https://vercel.com
    echo 2. Войдите через GitHub
    echo 3. Нажмите "Add New Project"
    echo 4. Выберите ваш репозиторий
    echo 5. Нажмите "Deploy"
    echo.
)

pause
