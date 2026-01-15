# Инструкция по деплою на GitHub

## Быстрый старт

### Вариант 1: Использовать готовый скрипт (рекомендуется)

Просто запустите файл `quick-deploy.bat` двойным кликом или выполните в командной строке:

```bash
quick-deploy.bat
```

### Вариант 2: Выполнить команды вручную

Откройте командную строку (CMD) или Git Bash в папке проекта и выполните команды по порядку:

#### Шаг 1: Инициализация Git (если еще не сделано)

```bash
git init
```

#### Шаг 2: Добавление всех файлов

```bash
git add .
```

#### Шаг 3: Создание коммита

```bash
git commit -m "Deploy: Interactive TZ questionnaire app"
```

#### Шаг 4: Создание репозитория на GitHub

1. Перейдите на https://github.com/new
2. Введите название репозитория (например: `tz-questionnaire`)
3. **НЕ** ставьте галочки на "Add README", ".gitignore" или "license"
4. Нажмите "Create repository"

#### Шаг 5: Подключение к GitHub

Замените `YOUR_USERNAME` и `YOUR_REPO` на ваши данные:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
```

#### Шаг 6: Отправка на GitHub

```bash
git push -u origin main
```

**Если запросит авторизацию:**
- Используйте **Personal Access Token** (не пароль!)
- Создайте токен: GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic)
- Выберите scope: `repo` (полный доступ к репозиториям)
- Скопируйте токен и используйте его как пароль

#### Шаг 7: Деплой на Vercel

1. Перейдите на https://vercel.com
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите ваш репозиторий
5. Vercel автоматически определит Next.js
6. Нажмите "Deploy"

Готово! Ваш сайт будет доступен по адресу типа: `https://your-repo.vercel.app`

## Автоматический деплой

После первого деплоя на Vercel, каждый push в ветку `main` будет автоматически деплоиться.

## Проблемы?

### Ошибка: "remote origin already exists"

Если удаленный репозиторий уже настроен, но нужно изменить URL:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Ошибка: "failed to push some refs"

Попробуйте:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Ошибка авторизации

Убедитесь, что используете Personal Access Token, а не пароль GitHub.
