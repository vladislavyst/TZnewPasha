const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('========================================');
console.log('Деплой на GitHub: vladislavyst/TZnewPasha');
console.log('========================================');
console.log('');

const repoUrl = 'https://github.com/vladislavyst/TZnewPasha.git';

try {
    // 1. Инициализация git
    if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
        console.log('[1/6] Инициализация Git репозитория...');
        execSync('git init', { stdio: 'inherit' });
        console.log('Готово!\n');
    } else {
        console.log('[1/6] Git репозиторий уже инициализирован\n');
    }

    // 2. Добавление файлов
    console.log('[2/6] Добавление всех файлов...');
    execSync('git add .', { stdio: 'inherit' });
    console.log('Готово!\n');

    // 3. Коммит
    console.log('[3/6] Создание коммита...');
    try {
        execSync('git commit -m "feat: Add modern design with Sparkles and Evervault Card effects\n\n- Add Sparkles particle effect to homepage\n- Add Evervault Card interactive effect to features card\n- Improve overall design with gradients and animations\n- Add Inter font from Google Fonts\n- Full mobile responsive design\n- Fix CSS compilation errors\n- Restore all application files (app/, components/, lib/)\n- Add all 76 questions across 9 sections\n- Implement section-based navigation (1 section = 1 page)"', { stdio: 'inherit' });
    } catch (e) {
        console.log('Предупреждение: Нет изменений для коммита или коммит уже создан\n');
    }

    // 4. Настройка remote
    console.log('[4/6] Настройка удаленного репозитория...');
    try {
        execSync('git remote remove origin', { stdio: 'ignore' });
    } catch (e) {
        // Игнорируем ошибку, если remote не существует
    }
    execSync(`git remote add origin ${repoUrl}`, { stdio: 'inherit' });
    console.log(`Удаленный репозиторий настроен: ${repoUrl}\n`);

    // 5. Переименование ветки
    console.log('[5/6] Переименование ветки в main...');
    execSync('git branch -M main', { stdio: 'inherit' });
    console.log('Готово!\n');

    // 6. Push
    console.log('[6/6] Отправка на GitHub...');
    console.log('');
    console.log('ВНИМАНИЕ: Если запросит авторизацию, используйте Personal Access Token!');
    console.log('Создайте токен: GitHub → Settings → Developer settings → Personal access tokens\n');
    execSync('git push -u origin main', { stdio: 'inherit' });

    console.log('');
    console.log('========================================');
    console.log('УСПЕШНО! Код отправлен на GitHub!');
    console.log('========================================');
    console.log('');
    console.log(`Репозиторий: https://github.com/vladislavyst/TZnewPasha`);
    console.log('');
    console.log('Следующие шаги для деплоя на Vercel:');
    console.log('1. Перейдите на https://vercel.com');
    console.log('2. Войдите через GitHub');
    console.log('3. Нажмите "Add New Project"');
    console.log('4. Выберите репозиторий "TZnewPasha"');
    console.log('5. Нажмите "Deploy"');
    console.log('');

} catch (error) {
    console.error('');
    console.error('========================================');
    console.error('ОШИБКА при выполнении деплоя!');
    console.error('========================================');
    console.error('');
    console.error('Возможные причины:');
    console.error('1. Git не установлен');
    console.error('2. Неправильные учетные данные (используйте Personal Access Token)');
    console.error('3. Нет прав доступа к репозиторию');
    console.error('4. Проблемы с интернет-соединением');
    console.error('');
    console.error('Попробуйте выполнить команды вручную (см. PUSH_COMMANDS.txt)');
    console.error('');
    process.exit(1);
}
