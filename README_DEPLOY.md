# Инструкция по деплою

## Быстрый деплой на GitHub

Репозиторий: **https://github.com/vladislavyst/TZnewPasha.git**

### Способ 1: Использовать готовый скрипт

Запустите файл `deploy-to-github.bat` двойным кликом.

### Способ 2: Выполнить команды вручную

Откройте командную строку (CMD) или Git Bash в папке проекта и выполните:

```bash
# 1. Инициализация (если нужно)
git init

# 2. Добавление файлов
git add .

# 3. Коммит
git commit -m "Deploy: Interactive TZ questionnaire app"

# 4. Настройка remote
git remote remove origin
git remote add origin https://github.com/vladislavyst/TZnewPasha.git

# 5. Переименование ветки
git branch -M main

# 6. Push на GitHub
git push -u origin main
```

**Важно:** При запросе авторизации используйте **Personal Access Token**, а не пароль!

### Создание Personal Access Token

1. Перейдите на GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Нажмите "Generate new token (classic)"
3. Выберите scope: `repo` (полный доступ к репозиториям)
4. Скопируйте токен и используйте его как пароль при push

## Деплой на Vercel

После успешного push:

1. Перейдите на https://vercel.com
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите репозиторий **TZnewPasha**
5. Vercel автоматически определит Next.js
6. Нажмите "Deploy"

Готово! Ваш сайт будет доступен по адресу типа: `https://tznewpasha.vercel.app`

## Автоматический деплой

После первого деплоя на Vercel, каждый push в ветку `main` будет автоматически деплоиться.
