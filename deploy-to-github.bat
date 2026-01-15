@echo off
chcp 65001 >nul
echo ========================================
echo Деплой на GitHub: vladislavyst/TZnewPasha
echo ========================================
echo.

REM Инициализация git если нужно
if not exist .git (
    echo [1/6] Инициализация Git репозитория...
    git init
    if errorlevel 1 (
        echo ОШИБКА: Git не установлен!
        pause
        exit /b 1
    )
    echo Готово!
) else (
    echo [1/6] Git репозиторий уже инициализирован
)
echo.

REM Добавление файлов
echo [2/6] Добавление всех файлов...
git add .
echo Готово!
echo.

REM Коммит
echo [3/6] Создание коммита...
git commit -m "Deploy: Interactive TZ questionnaire app"
if errorlevel 1 (
    echo Предупреждение: Нет изменений для коммита или коммит уже создан
)
echo.

REM Настройка remote
echo [4/6] Настройка удаленного репозитория...
git remote remove origin 2>nul
git remote add origin https://github.com/vladislavyst/TZnewPasha.git
if errorlevel 1 (
    echo ОШИБКА при настройке remote!
    pause
    exit /b 1
)
echo Удаленный репозиторий настроен: https://github.com/vladislavyst/TZnewPasha.git
echo.

REM Переименование ветки
echo [5/6] Переименование ветки в main...
git branch -M main
echo Готово!
echo.

REM Push
echo [6/6] Отправка на GitHub...
echo.
echo ВНИМАНИЕ: Если запросит авторизацию, используйте Personal Access Token!
echo Создайте токен: GitHub -^> Settings -^> Developer settings -^> Personal access tokens
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo ========================================
    echo ОШИБКА при отправке на GitHub!
    echo ========================================
    echo.
    echo Возможные причины:
    echo 1. Неправильные учетные данные (используйте Personal Access Token)
    echo 2. Нет прав доступа к репозиторию
    echo 3. Проблемы с интернет-соединением
    echo.
    echo Попробуйте выполнить команду вручную:
    echo git push -u origin main
    echo.
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo УСПЕШНО! Код отправлен на GitHub!
    echo ========================================
    echo.
    echo Репозиторий: https://github.com/vladislavyst/TZnewPasha
    echo.
    echo Следующие шаги для деплоя на Vercel:
    echo 1. Перейдите на https://vercel.com
    echo 2. Войдите через GitHub
    echo 3. Нажмите "Add New Project"
    echo 4. Выберите репозиторий "TZnewPasha"
    echo 5. Нажмите "Deploy"
    echo.
)

pause
