# Скрипт для деплоя на GitHub
# Использование: .\deploy-github.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Деплой на GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Проверка наличия git
Write-Host "Проверка Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "Git найден: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ОШИБКА: Git не установлен!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Проверка, инициализирован ли репозиторий
if (-not (Test-Path .git)) {
    Write-Host "Инициализация Git репозитория..." -ForegroundColor Yellow
    git init
    Write-Host "Репозиторий инициализирован" -ForegroundColor Green
} else {
    Write-Host "Git репозиторий уже инициализирован" -ForegroundColor Green
}

Write-Host ""

# Проверка статуса
Write-Host "Проверка статуса репозитория..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Добавление всех файлов..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Создание коммита..." -ForegroundColor Yellow
$commitMessage = "Deploy: Interactive TZ questionnaire app"
git commit -m $commitMessage

Write-Host ""
Write-Host "Проверка удаленного репозитория..." -ForegroundColor Yellow
$remote = git remote -v

if (-not $remote) {
    Write-Host ""
    Write-Host "ВНИМАНИЕ: Удаленный репозиторий не настроен!" -ForegroundColor Red
    Write-Host "Выполните следующие команды вручную:" -ForegroundColor Yellow
    Write-Host "1. Создайте репозиторий на GitHub: https://github.com/new" -ForegroundColor Cyan
    Write-Host "2. Выполните: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git" -ForegroundColor Cyan
    Write-Host "3. Выполните: git branch -M main" -ForegroundColor Cyan
    Write-Host "4. Запустите этот скрипт снова" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

Write-Host "Удаленный репозиторий найден:" -ForegroundColor Green
Write-Host $remote -ForegroundColor Cyan

Write-Host ""
Write-Host "Переименование ветки в main (если нужно)..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Отправка на GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "Успешно отправлено на GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Следующие шаги для деплоя:" -ForegroundColor Yellow
    Write-Host "1. Перейдите на https://vercel.com" -ForegroundColor Cyan
    Write-Host "2. Войдите через GitHub" -ForegroundColor Cyan
    Write-Host "3. Нажмите 'Add New Project'" -ForegroundColor Cyan
    Write-Host "4. Выберите ваш репозиторий" -ForegroundColor Cyan
    Write-Host "5. Нажмите 'Deploy'" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "ОШИБКА при отправке на GitHub!" -ForegroundColor Red
    Write-Host "Проверьте:" -ForegroundColor Yellow
    Write-Host "1. Правильность URL удаленного репозитория" -ForegroundColor Cyan
    Write-Host "2. Наличие прав доступа (Personal Access Token)" -ForegroundColor Cyan
    Write-Host "3. Подключение к интернету" -ForegroundColor Cyan
    Write-Host ""
}
