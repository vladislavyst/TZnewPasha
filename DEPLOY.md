# Инструкция по деплою на GitHub и Vercel

## 1. Инициализация Git репозитория

Откройте терминал в папке проекта и выполните:

```bash
git init
git add .
git commit -m "Initial commit: Interactive TZ questionnaire app"
```

## 2. Создание репозитория на GitHub

1. Перейдите на https://github.com/new
2. Создайте новый репозиторий (например, `tz-questionnaire`)
3. НЕ добавляйте README, .gitignore или лицензию (они уже есть)

## 3. Подключение к GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/tz-questionnaire.git
git branch -M main
git push -u origin main
```

Замените `YOUR_USERNAME` на ваш GitHub username.

## 4. Деплой на Vercel

### Вариант 1: Через веб-интерфейс (рекомендуется)

1. Перейдите на https://vercel.com
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите ваш репозиторий `tz-questionnaire`
5. Vercel автоматически определит Next.js
6. Нажмите "Deploy"

### Вариант 2: Через Vercel CLI

```bash
npm i -g vercel
vercel
```

## 5. Настройка переменных окружения на Vercel

После деплоя:

1. Перейдите в настройки проекта на Vercel
2. Откройте "Environment Variables"
3. Добавьте переменные для SMTP (если нужна отправка email):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
```

## 6. Автоматический деплой

После первого деплоя, каждый push в main ветку будет автоматически деплоиться на Vercel.

## Альтернативные платформы для деплоя

- **Netlify**: https://www.netlify.com (аналогично Vercel)
- **Railway**: https://railway.app
- **Render**: https://render.com
