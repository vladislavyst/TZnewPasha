import { Section } from './types';

export const sections: Section[] = [
  {
    id: 'content',
    title: 'Контент и медиа',
    description: 'Логотипы, тексты, фото, видео',
    questions: [
      {
        id: 'content-1',
        sectionId: 'content',
        text: 'Есть ли у вас готовый логотип?',
        answers: [
          { id: 'yes', text: 'Да, есть готовый логотип' },
          { id: 'no', text: 'Нет, нужна разработка логотипа' },
          { id: 'partial', text: 'Есть, но нужна доработка' }
        ]
      },
      {
        id: 'content-2',
        sectionId: 'content',
        text: 'Какие тексты будут на сайте?',
        answers: [
          { id: 'ready', text: 'Все тексты готовы' },
          { id: 'partial', text: 'Частично готовы' },
          { id: 'need', text: 'Нужна помощь с текстами' }
        ]
      },
      {
        id: 'content-3',
        sectionId: 'content',
        text: 'Какие фотографии будут использоваться?',
        answers: [
          { id: 'own', text: 'Собственные фотографии' },
          { id: 'stock', text: 'Стоковые фотографии' },
          { id: 'photo', text: 'Нужна фотосъемка' }
        ]
      },
      {
        id: 'content-4',
        sectionId: 'content',
        text: 'Будут ли использоваться видео?',
        answers: [
          { id: 'yes', text: 'Да, будут видео' },
          { id: 'no', text: 'Нет видео' },
          { id: 'maybe', text: 'Возможно в будущем' }
        ]
      },
      {
        id: 'content-5',
        sectionId: 'content',
        text: 'Нужна ли мультиязычность?',
        answers: [
          { id: 'ru', text: 'Только русский' },
          { id: 'en', text: 'Русский + английский' },
          { id: 'multi', text: 'Несколько языков' }
        ]
      },
      {
        id: 'content-6',
        sectionId: 'content',
        text: 'Какой объем контента планируется?',
        answers: [
          { id: 'small', text: 'Небольшой (до 10 страниц)' },
          { id: 'medium', text: 'Средний (10-30 страниц)' },
          { id: 'large', text: 'Большой (более 30 страниц)' }
        ]
      },
      {
        id: 'content-7',
        sectionId: 'content',
        text: 'Нужен ли блог или новости?',
        answers: [
          { id: 'yes', text: 'Да, нужен блог' },
          { id: 'no', text: 'Нет, не нужен' },
          { id: 'maybe', text: 'Возможно в будущем' }
        ]
      },
      {
        id: 'content-8',
        sectionId: 'content',
        text: 'Будут ли использоваться инфографика или схемы?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'content-9',
        sectionId: 'content',
        text: 'Нужна ли галерея изображений?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'content-10',
        sectionId: 'content',
        text: 'Как часто будет обновляться контент?',
        answers: [
          { id: 'daily', text: 'Ежедневно' },
          { id: 'weekly', text: 'Еженедельно' },
          { id: 'monthly', text: 'Ежемесячно' },
          { id: 'rarely', text: 'Редко' }
        ]
      }
    ]
  },
  {
    id: 'catalog',
    title: 'Структура каталога',
    description: 'Количество товаров, категории, фильтры',
    questions: [
      {
        id: 'catalog-1',
        sectionId: 'catalog',
        text: 'Сколько товаров будет в каталоге?',
        answers: [
          { id: 'small', text: 'До 100 товаров' },
          { id: 'medium', text: '100-1000 товаров' },
          { id: 'large', text: 'Более 1000 товаров' }
        ]
      },
      {
        id: 'catalog-2',
        sectionId: 'catalog',
        text: 'Как организованы категории?',
        answers: [
          { id: 'flat', text: 'Плоская структура' },
          { id: 'tree', text: 'Древовидная структура' },
          { id: 'tags', text: 'Теги и метки' }
        ],
        multiple: true
      },
      {
        id: 'catalog-3',
        sectionId: 'catalog',
        text: 'Какие фильтры нужны?',
        answers: [
          { id: 'price', text: 'По цене' },
          { id: 'brand', text: 'По бренду' },
          { id: 'rating', text: 'По рейтингу' },
          { id: 'availability', text: 'По наличию' }
        ],
        multiple: true
      },
      {
        id: 'catalog-4',
        sectionId: 'catalog',
        text: 'Нужен ли поиск по каталогу?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'catalog-5',
        sectionId: 'catalog',
        text: 'Нужна ли корзина покупок?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'catalog-6',
        sectionId: 'catalog',
        text: 'Нужны ли сравнение товаров?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'catalog-7',
        sectionId: 'catalog',
        text: 'Нужны ли отзывы на товары?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'catalog-8',
        sectionId: 'catalog',
        text: 'Нужны ли рекомендации товаров?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'catalog-9',
        sectionId: 'catalog',
        text: 'Как будет обновляться каталог?',
        answers: [
          { id: 'manual', text: 'Вручную' },
          { id: 'import', text: 'Импорт из файла' },
          { id: 'api', text: 'Через API' }
        ]
      },
      {
        id: 'catalog-10',
        sectionId: 'catalog',
        text: 'Нужны ли варианты товаров (размер, цвет)?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  },
  {
    id: 'forms',
    title: 'Функционал форм',
    description: 'Типы форм, валидация, обработка',
    questions: [
      {
        id: 'forms-1',
        sectionId: 'forms',
        text: 'Какие формы нужны на сайте?',
        answers: [
          { id: 'contact', text: 'Форма обратной связи' },
          { id: 'order', text: 'Форма заказа' },
          { id: 'callback', text: 'Форма заказа звонка' },
          { id: 'subscribe', text: 'Форма подписки' }
        ],
        multiple: true
      },
      {
        id: 'forms-2',
        sectionId: 'forms',
        text: 'Нужна ли валидация форм?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'forms-3',
        sectionId: 'forms',
        text: 'Куда отправлять данные форм?',
        answers: [
          { id: 'email', text: 'На email' },
          { id: 'crm', text: 'В CRM систему' },
          { id: 'both', text: 'И email, и CRM' }
        ]
      },
      {
        id: 'forms-4',
        sectionId: 'forms',
        text: 'Нужна ли защита от спама (CAPTCHA)?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'forms-5',
        sectionId: 'forms',
        text: 'Нужно ли сохранение данных форм?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'forms-6',
        sectionId: 'forms',
        text: 'Нужны ли файловые загрузки в формах?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'forms-7',
        sectionId: 'forms',
        text: 'Нужна ли многошаговая форма?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'forms-8',
        sectionId: 'forms',
        text: 'Нужны ли уведомления пользователю после отправки?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  },
  {
    id: 'integrations',
    title: 'Интеграции',
    description: 'CRM, 1С, Telegram, аналитика',
    questions: [
      {
        id: 'integrations-1',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с CRM?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' },
          { id: 'maybe', text: 'Возможно в будущем' }
        ]
      },
      {
        id: 'integrations-2',
        sectionId: 'integrations',
        text: 'Какая CRM система используется?',
        answers: [
          { id: 'amo', text: 'AmoCRM' },
          { id: 'bitrix', text: 'Битрикс24' },
          { id: 'other', text: 'Другая' }
        ]
      },
      {
        id: 'integrations-3',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с 1С?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'integrations-4',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с Telegram?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'integrations-5',
        sectionId: 'integrations',
        text: 'Какие системы аналитики нужны?',
        answers: [
          { id: 'google', text: 'Google Analytics' },
          { id: 'yandex', text: 'Яндекс.Метрика' },
          { id: 'both', text: 'Обе' }
        ],
        multiple: true
      },
      {
        id: 'integrations-6',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с платежными системами?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'integrations-7',
        sectionId: 'integrations',
        text: 'Какие платежные системы?',
        answers: [
          { id: 'yandex', text: 'Яндекс.Касса' },
          { id: 'sber', text: 'Сбербанк' },
          { id: 'tinkoff', text: 'Тинькофф' },
          { id: 'other', text: 'Другие' }
        ],
        multiple: true
      },
      {
        id: 'integrations-8',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с соцсетями?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'integrations-9',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с email-рассылками?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  },
  {
    id: 'admin',
    title: 'Административная панель',
    description: 'Права доступа, функции админки',
    questions: [
      {
        id: 'admin-1',
        sectionId: 'admin',
        text: 'Сколько администраторов будет?',
        answers: [
          { id: 'one', text: 'Один' },
          { id: 'few', text: 'Несколько (2-5)' },
          { id: 'many', text: 'Много (более 5)' }
        ]
      },
      {
        id: 'admin-2',
        sectionId: 'admin',
        text: 'Нужны ли разные уровни доступа?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'admin-3',
        sectionId: 'admin',
        text: 'Какие функции нужны в админке?',
        answers: [
          { id: 'content', text: 'Управление контентом' },
          { id: 'orders', text: 'Управление заказами' },
          { id: 'users', text: 'Управление пользователями' },
          { id: 'settings', text: 'Настройки сайта' }
        ],
        multiple: true
      },
      {
        id: 'admin-4',
        sectionId: 'admin',
        text: 'Нужна ли статистика в админке?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'admin-5',
        sectionId: 'admin',
        text: 'Нужны ли уведомления администраторам?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'admin-6',
        sectionId: 'admin',
        text: 'Нужна ли история изменений?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'admin-7',
        sectionId: 'admin',
        text: 'Нужно ли резервное копирование?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'admin-8',
        sectionId: 'admin',
        text: 'Нужен ли мобильный доступ к админке?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  },
  {
    id: 'design',
    title: 'Дизайн и брендинг',
    description: 'Цвета, стиль, анимации',
    questions: [
      {
        id: 'design-1',
        sectionId: 'design',
        text: 'Есть ли фирменный стиль?',
        answers: [
          { id: 'yes', text: 'Да, есть брендбук' },
          { id: 'partial', text: 'Частично' },
          { id: 'no', text: 'Нет, нужна разработка' }
        ]
      },
      {
        id: 'design-2',
        sectionId: 'design',
        text: 'Какая цветовая схема предпочтительна?',
        answers: [
          { id: 'light', text: 'Светлая' },
          { id: 'dark', text: 'Темная' },
          { id: 'both', text: 'Обе (переключение)' }
        ]
      },
      {
        id: 'design-3',
        sectionId: 'design',
        text: 'Какой стиль дизайна?',
        answers: [
          { id: 'minimal', text: 'Минималистичный' },
          { id: 'corporate', text: 'Корпоративный' },
          { id: 'creative', text: 'Креативный' },
          { id: 'modern', text: 'Современный' }
        ]
      },
      {
        id: 'design-4',
        sectionId: 'design',
        text: 'Нужны ли анимации?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'design-5',
        sectionId: 'design',
        text: 'Нужна ли адаптивность под мобильные?',
        answers: [
          { id: 'yes', text: 'Да, обязательно' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'design-6',
        sectionId: 'design',
        text: 'Нужна ли версия для планшетов?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'design-7',
        sectionId: 'design',
        text: 'Нужны ли иконки?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'design-8',
        sectionId: 'design',
        text: 'Нужны ли иллюстрации?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'design-9',
        sectionId: 'design',
        text: 'Нужна ли типографика?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'design-10',
        sectionId: 'design',
        text: 'Нужны ли интерактивные элементы?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  },
  {
    id: 'technical',
    title: 'Технические требования',
    description: 'Домен, хостинг, SEO',
    questions: [
      {
        id: 'technical-1',
        sectionId: 'technical',
        text: 'Есть ли доменное имя?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет, нужно выбрать' }
        ]
      },
      {
        id: 'technical-2',
        sectionId: 'technical',
        text: 'Есть ли хостинг?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет, нужно выбрать' }
        ]
      },
      {
        id: 'technical-3',
        sectionId: 'technical',
        text: 'Нужен ли SSL сертификат?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'technical-4',
        sectionId: 'technical',
        text: 'Нужна ли SEO оптимизация?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'technical-5',
        sectionId: 'technical',
        text: 'Нужна ли карта сайта (sitemap)?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'technical-6',
        sectionId: 'technical',
        text: 'Нужна ли скорость загрузки?',
        answers: [
          { id: 'critical', text: 'Критически важна' },
          { id: 'important', text: 'Важна' },
          { id: 'normal', text: 'Обычная' }
        ]
      },
      {
        id: 'technical-7',
        sectionId: 'technical',
        text: 'Нужна ли защита от DDoS?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'technical-8',
        sectionId: 'technical',
        text: 'Нужно ли резервное копирование?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  },
  {
    id: 'budget',
    title: 'Сроки и бюджет',
    description: 'Дедлайны, оплата, поддержка',
    questions: [
      {
        id: 'budget-1',
        sectionId: 'budget',
        text: 'Какой срок разработки?',
        answers: [
          { id: 'urgent', text: 'Срочно (до 1 месяца)' },
          { id: 'normal', text: 'Обычный (1-3 месяца)' },
          { id: 'flexible', text: 'Гибкий (3+ месяца)' }
        ]
      },
      {
        id: 'budget-2',
        sectionId: 'budget',
        text: 'Какой бюджет?',
        answers: [
          { id: 'small', text: 'До 100 000 руб' },
          { id: 'medium', text: '100 000 - 500 000 руб' },
          { id: 'large', text: 'Более 500 000 руб' }
        ]
      },
      {
        id: 'budget-3',
        sectionId: 'budget',
        text: 'Какой способ оплаты?',
        answers: [
          { id: 'full', text: 'Полная предоплата' },
          { id: 'partial', text: 'Частичная оплата' },
          { id: 'stages', text: 'Поэтапная оплата' }
        ]
      },
      {
        id: 'budget-4',
        sectionId: 'budget',
        text: 'Нужна ли техническая поддержка?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'budget-5',
        sectionId: 'budget',
        text: 'Какой период поддержки?',
        answers: [
          { id: 'month', text: '1 месяц' },
          { id: 'quarter', text: '3 месяца' },
          { id: 'year', text: '1 год' }
        ]
      },
      {
        id: 'budget-6',
        sectionId: 'budget',
        text: 'Нужна ли гарантия?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'budget-7',
        sectionId: 'budget',
        text: 'Нужно ли обучение работе с сайтом?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  },
  {
    id: 'legal',
    title: 'Юридические аспекты',
    description: 'Документы, политика конфиденциальности',
    questions: [
      {
        id: 'legal-1',
        sectionId: 'legal',
        text: 'Нужна ли политика конфиденциальности?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'legal-2',
        sectionId: 'legal',
        text: 'Нужны ли пользовательское соглашение?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'legal-3',
        sectionId: 'legal',
        text: 'Нужна ли обработка персональных данных?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'legal-4',
        sectionId: 'legal',
        text: 'Нужны ли документы для интернет-магазина?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'legal-5',
        sectionId: 'legal',
        text: 'Нужна ли интеграция с ФНС?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'legal-6',
        sectionId: 'legal',
        text: 'Нужны ли документы для онлайн-оплаты?',
        answers: [
          { id: 'yes', text: 'Да' },
          { id: 'no', text: 'Нет' }
        ]
      }
    ]
  }
];

export const getAllQuestions = () => {
  return sections.flatMap(section => section.questions);
};

export const getTotalQuestionsCount = () => {
  return sections.reduce((total, section) => total + section.questions.length, 0);
};
