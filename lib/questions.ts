import { Section } from './types';

export const sections: Section[] = [
  {
    id: 'content',
    title: 'Контент и медиа',
    description: 'Информация о компании, контакты, регионы работы, цели сайта',
    questions: [
      {
        id: 'content-1',
        sectionId: 'content',
        text: 'Как называется компания (полное/краткое), есть ли слоган?',
        answers: [
          { id: 'full', text: 'Есть полное и краткое название' },
          { id: 'only-full', text: 'Только полное название' },
          { id: 'need-slogan', text: 'Нужна разработка слогана' }
        ]
      },
      {
        id: 'content-2',
        sectionId: 'content',
        text: 'Какие контакты нужны на сайте: телефоны, почта, адрес(а), график, мессенджеры?',
        answers: [
          { id: 'all', text: 'Все контакты (телефон, почта, адрес, график, мессенджеры)' },
          { id: 'basic', text: 'Базовые (телефон, почта, адрес)' },
          { id: 'minimal', text: 'Минимальные (телефон, почта)' }
        ],
        multiple: true
      },
      {
        id: 'content-3',
        sectionId: 'content',
        text: 'В каких городах/регионах работаете? Нужны ли отдельные страницы/контакты по филиалам?',
        answers: [
          { id: 'one-region', text: 'Один регион, отдельные страницы не нужны' },
          { id: 'multi-region', text: 'Несколько регионов, нужны отдельные страницы' },
          { id: 'multi-region-contacts', text: 'Несколько регионов с отдельными контактами' }
        ]
      },
      {
        id: 'content-4',
        sectionId: 'content',
        text: 'Кто будет наполнять сайт контентом после запуска?',
        answers: [
          { id: 'client', text: 'Ваш сотрудник' },
          { id: 'developer', text: 'Разработчик (мы)' },
          { id: 'both', text: 'Совместно' }
        ]
      },
      {
        id: 'content-5',
        sectionId: 'content',
        text: 'Зачем нужен сайт?',
        answers: [
          { id: 'sales', text: 'Продажи' },
          { id: 'requests', text: 'Заявки' },
          { id: 'image', text: 'Имидж' },
          { id: 'support', text: 'Поддержка клиентов' },
          { id: 'parts', text: 'Подбор запчастей' },
          { id: 'service', text: 'Сервис' },
          { id: 'popularization', text: 'Популяризация' }
        ],
        multiple: true
      },
      {
        id: 'content-6',
        sectionId: 'content',
        text: 'Какие 1–3 главные цели на 3–6 месяцев после запуска?',
        answers: [
          { id: 'coverage', text: 'Охваты целевой аудитории' },
          { id: 'recognition', text: 'Узнаваемость' },
          { id: 'requests', text: 'Увеличение заявок' },
          { id: 'calls', text: 'Увеличение звонков' },
          { id: 'traffic', text: 'Рост посещаемости' }
        ],
        multiple: true
      },
      {
        id: 'content-7',
        sectionId: 'content',
        text: 'Какой KPI важен?',
        answers: [
          { id: 'requests', text: 'Заявки' },
          { id: 'calls', text: 'Звонки' },
          { id: 'messengers', text: 'Переходы в WhatsApp/Telegram' },
          { id: 'downloads', text: 'Скачивания прайс-листа' },
          { id: 'traffic', text: 'Посещаемость' }
        ],
        multiple: true
      },
      {
        id: 'content-8',
        sectionId: 'content',
        text: 'Есть ли сезонность спроса (пики/спады), которую нужно учесть на главной/акциях?',
        answers: [
          { id: 'yes', text: 'Да, есть сезонность' },
          { id: 'no', text: 'Нет сезонности' },
          { id: 'maybe', text: 'Возможно, нужно учесть' }
        ]
      },
      {
        id: 'content-9',
        sectionId: 'content',
        text: 'Кто ваши клиенты?',
        answers: [
          { id: 'agroholdings', text: 'Агрохолдинги' },
          { id: 'farmers', text: 'Фермеры' },
          { id: 'dealers', text: 'Дилеры' },
          { id: 'service', text: 'Сервисные компании' },
          { id: 'private', text: 'Частники' }
        ],
        multiple: true
      },
      {
        id: 'content-10',
        sectionId: 'content',
        text: 'Что клиент должен понять за 5 секунд на главной?',
        answers: [
          { id: 'who', text: 'Куда он попал' },
          { id: 'benefit', text: 'Чем ему может быть полезен сайт' },
          { id: 'both', text: 'И то, и другое' },
          { id: 'other', text: 'Другое' }
        ]
      }
    ]
  },
  {
    id: 'catalog',
    title: 'Структура каталога',
    description: 'Бренды, цены, наличие, доставка, оплата, гарантия',
    questions: [
      {
        id: 'catalog-1',
        sectionId: 'catalog',
        text: 'Какие бренды/производители представлены? Есть ли "приоритетные" бренды?',
        answers: [
          { id: 'claas', text: 'CLAAS' },
          { id: 'john-deere', text: 'John Deere' },
          { id: 'cnh', text: 'CNH' },
          { id: 'jcb', text: 'JCB' },
          { id: 'manitou', text: 'Manitou' },
          { id: 'bourgault', text: 'Bourgault' },
          { id: 'other', text: 'Другие бренды' }
        ],
        multiple: true
      },
      {
        id: 'catalog-2',
        sectionId: 'catalog',
        text: 'Наличие и цены: показываем цены публично или "цена по запросу"?',
        answers: [
          { id: 'public', text: 'Публично показываем цены' },
          { id: 'request', text: 'Цена по запросу' },
          { id: 'mixed', text: 'Смешанно (часть публично, часть по запросу)' }
        ]
      },
      {
        id: 'catalog-3',
        sectionId: 'catalog',
        text: 'Есть ли разные склады/остатки? Нужно ли отображать "в наличии/под заказ"?',
        answers: [
          { id: 'yes-show', text: 'Да, есть склады, нужно отображать наличие' },
          { id: 'yes-no-show', text: 'Есть склады, но отображать не нужно' },
          { id: 'no', text: 'Нет, номенклатуры отображать не будем' }
        ]
      },
      {
        id: 'catalog-4',
        sectionId: 'catalog',
        text: 'Доставка: по РФ/региону, сроки, ТК, самовывоз?',
        answers: [
          { id: 'russia', text: 'По всей РФ' },
          { id: 'region', text: 'По региону' },
          { id: 'pickup', text: 'Самовывоз' },
          { id: 'supplier', text: 'Доставка за счет поставщика' }
        ],
        multiple: true
      },
      {
        id: 'catalog-5',
        sectionId: 'catalog',
        text: 'Оплата: безнал/нал/картой, НДС, документы?',
        answers: [
          { id: 'cashless', text: 'Безналичный расчет' },
          { id: 'cash', text: 'Наличный расчет' },
          { id: 'card', text: 'Оплата картой' },
          { id: 'vat', text: 'С НДС 22%' },
          { id: 'no-vat', text: 'Без НДС' }
        ],
        multiple: true
      },
      {
        id: 'catalog-6',
        sectionId: 'catalog',
        text: 'Гарантия/возвраты — есть ли правила и нужно ли размещать?',
        answers: [
          { id: 'yes-rules', text: 'Да, есть правила, нужно разместить' },
          { id: 'yes-individual', text: 'Гарантия индивидуальна, размещать не нужно' },
          { id: 'no', text: 'Нет правил' }
        ]
      },
      {
        id: 'catalog-7',
        sectionId: 'catalog',
        text: 'Что именно нужно показать на сайте?',
        answers: [
          { id: 'equipment', text: 'Техника (комбайны/прочее)' },
          { id: 'parts', text: 'Запчасти' },
          { id: 'service', text: 'Сервис/ремонт' },
          { id: 'consumables', text: 'Расходники/масла/фильтры' },
          { id: 'rental', text: 'Аренда/лизинг/трейд-ин' },
          { id: 'services-goods', text: 'Услуги и товары которые можем предоставить и реализовать' }
        ],
        multiple: true
      },
      {
        id: 'catalog-8',
        sectionId: 'catalog',
        text: 'Каталог нужен для: "показать ассортимент" или "давать возможность оформить заказ"?',
        answers: [
          { id: 'show', text: 'Показать ассортимент' },
          { id: 'order', text: 'Давать возможность оформить заказ' },
          { id: 'both', text: 'И то, и другое' }
        ]
      },
      {
        id: 'catalog-9',
        sectionId: 'catalog',
        text: 'Нужна ли выгрузка прайса (PDF/Excel) или "скачать прайс" после заявки?',
        answers: [
          { id: 'yes-public', text: 'Да, публичная выгрузка' },
          { id: 'yes-after-request', text: 'Да, после заявки' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'catalog-10',
        sectionId: 'catalog',
        text: 'Нужен ли поиск по артикулу (обязательно для запчастей)?',
        answers: [
          { id: 'yes', text: 'Да, обязательно' },
          { id: 'no', text: 'Нет, не нужен' },
          { id: 'maybe', text: 'Возможно в будущем' }
        ]
      }
    ]
  },
  {
    id: 'forms',
    title: 'Функционал форм',
    description: 'Типы форм, поля, куда отправлять, Telegram/WhatsApp',
    questions: [
      {
        id: 'forms-1',
        sectionId: 'forms',
        text: 'Какие формы нужны?',
        answers: [
          { id: 'request', text: 'Оставить заявку' },
          { id: 'price', text: 'Запросить цену/КП' },
          { id: 'parts', text: 'Подобрать запчасть' },
          { id: 'callback', text: 'Заказать обратный звонок' },
          { id: 'service', text: 'Записаться в сервис' }
        ],
        multiple: true
      },
      {
        id: 'forms-2',
        sectionId: 'forms',
        text: 'Какие поля обязательны?',
        answers: [
          { id: 'name', text: 'Имя' },
          { id: 'phone', text: 'Телефон' },
          { id: 'city', text: 'Город' },
          { id: 'model', text: 'Модель техники' },
          { id: 'article', text: 'Артикул' },
          { id: 'comment', text: 'Комментарий' }
        ],
        multiple: true
      },
      {
        id: 'forms-3',
        sectionId: 'forms',
        text: 'Куда падают заявки?',
        answers: [
          { id: 'email', text: 'Почта' },
          { id: 'crm', text: 'CRM' },
          { id: 'telegram', text: 'Telegram-бот/чат' },
          { id: 'whatsapp', text: 'WhatsApp' },
          { id: 'multiple', text: 'Несколько каналов одновременно' }
        ],
        multiple: true
      },
      {
        id: 'forms-4',
        sectionId: 'forms',
        text: 'Нужны ли быстрые кнопки: WhatsApp, Telegram, звонок в 1 клик?',
        answers: [
          { id: 'whatsapp', text: 'WhatsApp' },
          { id: 'telegram', text: 'Telegram' },
          { id: 'call', text: 'Звонок в 1 клик' },
          { id: 'all', text: 'Все варианты' },
          { id: 'no', text: 'Не нужны' }
        ],
        multiple: true
      },
      {
        id: 'forms-5',
        sectionId: 'forms',
        text: 'Нужен ли онлайн-чат (Jivo/LiveTex/другое)?',
        answers: [
          { id: 'yes-jivo', text: 'Да, Jivo' },
          { id: 'yes-livetex', text: 'Да, LiveTex' },
          { id: 'yes-other', text: 'Да, другой' },
          { id: 'no', text: 'Нет, не нужен' }
        ]
      },
      {
        id: 'forms-6',
        sectionId: 'forms',
        text: 'Нужны ли автоответы клиентам после отправки формы?',
        answers: [
          { id: 'yes-email', text: 'Да, на email' },
          { id: 'yes-sms', text: 'Да, SMS' },
          { id: 'yes-both', text: 'Да, и email, и SMS' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'forms-7',
        sectionId: 'forms',
        text: 'Нужна ли валидация форм (проверка корректности данных)?',
        answers: [
          { id: 'yes', text: 'Да, обязательно' },
          { id: 'basic', text: 'Базовая валидация' },
          { id: 'no', text: 'Не нужна' }
        ]
      },
      {
        id: 'forms-8',
        sectionId: 'forms',
        text: 'Нужны ли многошаговые формы (для сложных заявок)?',
        answers: [
          { id: 'yes', text: 'Да, нужны' },
          { id: 'no', text: 'Нет, простые формы достаточно' }
        ]
      }
    ]
  },
  {
    id: 'integrations',
    title: 'Интеграции',
    description: 'CRM, 1С, Telegram, аналитика, микроразметка',
    questions: [
      {
        id: 'integrations-1',
        sectionId: 'integrations',
        text: 'Есть ли CRM (Bitrix24/amoCRM/другая)? Нужна интеграция заявок?',
        answers: [
          { id: 'bitrix24', text: 'Bitrix24, нужна интеграция' },
          { id: 'amocrm', text: 'amoCRM, нужна интеграция' },
          { id: 'other', text: 'Другая CRM, нужна интеграция' },
          { id: 'no', text: 'Нет CRM, интеграция не нужна' }
        ]
      },
      {
        id: 'integrations-2',
        sectionId: 'integrations',
        text: 'Есть ли 1С/МойСклад/ERP — нужна синхронизация каталога/остатков/цен?',
        answers: [
          { id: '1c', text: '1С, нужна синхронизация' },
          { id: 'moysklad', text: 'МойСклад, нужна синхронизация' },
          { id: 'erp', text: 'ERP система, нужна синхронизация' },
          { id: 'no', text: 'Нет, синхронизация не нужна' }
        ]
      },
      {
        id: 'integrations-3',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с Telegram-ботом/чатом для заявок?',
        answers: [
          { id: 'yes-bot', text: 'Да, Telegram-бот' },
          { id: 'yes-chat', text: 'Да, Telegram-чат' },
          { id: 'yes-both', text: 'Да, и бот, и чат' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'integrations-4',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с WhatsApp?',
        answers: [
          { id: 'yes', text: 'Да, нужна' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'integrations-5',
        sectionId: 'integrations',
        text: 'Нужны ли email-рассылки?',
        answers: [
          { id: 'yes', text: 'Да, нужны' },
          { id: 'no', text: 'Нет, не нужны' },
          { id: 'maybe', text: 'Возможно в будущем' }
        ]
      },
      {
        id: 'integrations-6',
        sectionId: 'integrations',
        text: 'Установка аналитики: Яндекс.Метрика/GA4? Какие цели настроить?',
        answers: [
          { id: 'yandex', text: 'Яндекс.Метрика' },
          { id: 'ga4', text: 'Google Analytics 4' },
          { id: 'both', text: 'Обе системы' },
          { id: 'no', text: 'Аналитика не нужна' }
        ],
        multiple: true
      },
      {
        id: 'integrations-7',
        sectionId: 'integrations',
        text: 'Нужна ли схема микроразметки (товары, организация, хлебные крошки)?',
        answers: [
          { id: 'yes-products', text: 'Да, для товаров' },
          { id: 'yes-organization', text: 'Да, для организации' },
          { id: 'yes-breadcrumbs', text: 'Да, хлебные крошки' },
          { id: 'yes-all', text: 'Да, все варианты' },
          { id: 'no', text: 'Нет, не нужна' }
        ],
        multiple: true
      },
      {
        id: 'integrations-8',
        sectionId: 'integrations',
        text: 'Нужна ли интеграция с социальными сетями (публикация новостей, кнопки "Поделиться")?',
        answers: [
          { id: 'yes', text: 'Да, нужна' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'integrations-9',
        sectionId: 'integrations',
        text: 'Нужны ли другие интеграции (API, вебхуки, сторонние сервисы)?',
        answers: [
          { id: 'yes', text: 'Да, есть специфические требования' },
          { id: 'no', text: 'Нет, стандартных интеграций достаточно' }
        ]
      }
    ]
  },
  {
    id: 'admin',
    title: 'Административная панель',
    description: 'Кто админит, функции, права, обучение',
    questions: [
      {
        id: 'admin-1',
        sectionId: 'admin',
        text: 'Кто будет админить каталог: сколько товаров примерно (100 / 1 000 / 10 000+)?',
        answers: [
          { id: '100', text: 'До 100 товаров' },
          { id: '1000', text: '100-1 000 товаров' },
          { id: '10000', text: '1 000-10 000 товаров' },
          { id: '10000plus', text: 'Более 10 000 товаров' },
          { id: 'no-catalog', text: 'Каталога не будет, только услуги' }
        ]
      },
      {
        id: 'admin-2',
        sectionId: 'admin',
        text: 'Нужно ли разграничение прав в админке (несколько сотрудников)?',
        answers: [
          { id: 'yes', text: 'Да, нужно разграничение прав' },
          { id: 'no', text: 'Нет, один администратор' },
          { id: 'maybe', text: 'Возможно в будущем' }
        ]
      },
      {
        id: 'admin-3',
        sectionId: 'admin',
        text: 'Какие функции нужны в админке?',
        answers: [
          { id: 'content', text: 'Управление контентом (тексты, фото)' },
          { id: 'catalog', text: 'Управление каталогом товаров' },
          { id: 'requests', text: 'Просмотр и обработка заявок' },
          { id: 'users', text: 'Управление пользователями' },
          { id: 'settings', text: 'Настройки сайта' },
          { id: 'stats', text: 'Статистика и отчеты' }
        ],
        multiple: true
      },
      {
        id: 'admin-4',
        sectionId: 'admin',
        text: 'Нужна ли статистика и отчеты в админке?',
        answers: [
          { id: 'yes-detailed', text: 'Да, детальная статистика' },
          { id: 'yes-basic', text: 'Да, базовая статистика' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'admin-5',
        sectionId: 'admin',
        text: 'Нужна ли история изменений (кто и когда что изменил)?',
        answers: [
          { id: 'yes', text: 'Да, нужна' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'admin-6',
        sectionId: 'admin',
        text: 'Нужно ли резервное копирование данных?',
        answers: [
          { id: 'yes-auto', text: 'Да, автоматическое' },
          { id: 'yes-manual', text: 'Да, ручное' },
          { id: 'no', text: 'Нет, не нужно' }
        ]
      },
      {
        id: 'admin-7',
        sectionId: 'admin',
        text: 'Нужно ли обучение сотрудников работе с админкой?',
        answers: [
          { id: 'yes-video', text: 'Да, видео-инструкции' },
          { id: 'yes-live', text: 'Да, живое обучение' },
          { id: 'yes-both', text: 'Да, и видео, и живое обучение' },
          { id: 'no', text: 'Нет, не нужно' }
        ]
      },
      {
        id: 'admin-8',
        sectionId: 'admin',
        text: 'Нужен ли мобильный доступ к админке?',
        answers: [
          { id: 'yes', text: 'Да, нужен' },
          { id: 'no', text: 'Нет, только с компьютера' }
        ]
      }
    ]
  },
  {
    id: 'design',
    title: 'Дизайн и брендинг',
    description: 'Референс kompleksagro.ru, что понравилось/не понравилось',
    questions: [
      {
        id: 'design-1',
        sectionId: 'design',
        text: 'Что именно понравилось в сайте-референсе kompleksagro.ru?',
        answers: [
          { id: 'structure', text: 'Структура и разделы' },
          { id: 'appearance', text: 'Внешний вид (цвета/стиль)' },
          { id: 'catalog', text: 'Подача каталога/карточек' },
          { id: 'blocks', text: 'Блоки на главной' },
          { id: 'navigation', text: 'Удобство меню/навигации' },
          { id: 'forms', text: 'Формы/кнопки/CTA' },
          { id: 'all', text: 'Все, хочу полностью повторить' }
        ],
        multiple: true
      },
      {
        id: 'design-2',
        sectionId: 'design',
        text: 'Какие страницы/разделы точно хотите "как там" (ссылки на конкретные страницы)?',
        answers: [
          { id: 'home', text: 'Главная страница' },
          { id: 'catalog', text: 'Страница каталога' },
          { id: 'product', text: 'Карточка товара' },
          { id: 'contacts', text: 'Страница контактов' },
          { id: 'about', text: 'О компании' },
          { id: 'all', text: 'Все страницы' }
        ],
        multiple: true
      },
      {
        id: 'design-3',
        sectionId: 'design',
        text: 'Что НЕ нравится в референсе и точно не хотим повторять?',
        answers: [
          { id: 'colors', text: 'Цветовая схема' },
          { id: 'layout', text: 'Расположение элементов' },
          { id: 'navigation', text: 'Навигация' },
          { id: 'forms', text: 'Формы' },
          { id: 'nothing', text: 'Все нравится, ничего не менять' }
        ],
        multiple: true
      },
      {
        id: 'design-4',
        sectionId: 'design',
        text: 'Есть ли другие сайты-примеры (2–5 ссылок): "нравится/не нравится" и почему?',
        answers: [
          { id: 'yes', text: 'Да, есть примеры' },
          { id: 'no', text: 'Нет, только референс' }
        ]
      },
      {
        id: 'design-5',
        sectionId: 'design',
        text: 'Есть ли фирменный стиль и брендбук?',
        answers: [
          { id: 'yes-full', text: 'Да, полный брендбук' },
          { id: 'yes-partial', text: 'Да, частично' },
          { id: 'no', text: 'Нет, нужна разработка' }
        ]
      },
      {
        id: 'design-6',
        sectionId: 'design',
        text: 'Какая цветовая гамма предпочтительна?',
        answers: [
          { id: 'corporate', text: 'Корпоративная (из брендбука)' },
          { id: 'agricultural', text: 'Агротематика (зеленый, желтый)' },
          { id: 'neutral', text: 'Нейтральная (серый, белый)' },
          { id: 'bright', text: 'Яркая' },
          { id: 'reference', text: 'Как в референсе' }
        ]
      },
      {
        id: 'design-7',
        sectionId: 'design',
        text: 'Нужны ли анимации и интерактивные элементы?',
        answers: [
          { id: 'yes-many', text: 'Да, много анимаций' },
          { id: 'yes-minimal', text: 'Да, минимальные' },
          { id: 'no', text: 'Нет, статичный дизайн' }
        ]
      },
      {
        id: 'design-8',
        sectionId: 'design',
        text: 'Нужна ли адаптивность под мобильные устройства?',
        answers: [
          { id: 'yes-critical', text: 'Да, критически важна' },
          { id: 'yes-important', text: 'Да, важна' },
          { id: 'no', text: 'Нет, только десктоп' }
        ]
      },
      {
        id: 'design-9',
        sectionId: 'design',
        text: 'Нужны ли иконки и иллюстрации?',
        answers: [
          { id: 'yes-icons', text: 'Да, иконки' },
          { id: 'yes-illustrations', text: 'Да, иллюстрации' },
          { id: 'yes-both', text: 'Да, и то, и другое' },
          { id: 'no', text: 'Нет' }
        ],
        multiple: true
      },
      {
        id: 'design-10',
        sectionId: 'design',
        text: 'Какой стиль дизайна предпочтителен?',
        answers: [
          { id: 'corporate', text: 'Корпоративный' },
          { id: 'modern', text: 'Современный' },
          { id: 'minimal', text: 'Минималистичный' },
          { id: 'reference', text: 'Как в референсе kompleksagro.ru' }
        ]
      }
    ]
  },
  {
    id: 'technical',
    title: 'Технические требования',
    description: 'Домен, хостинг, SEO, аналитика, регионы продвижения',
    questions: [
      {
        id: 'technical-1',
        sectionId: 'technical',
        text: 'Есть ли доменное имя?',
        answers: [
          { id: 'yes', text: 'Да, есть' },
          { id: 'no', text: 'Нет, нужно выбрать и зарегистрировать' }
        ]
      },
      {
        id: 'technical-2',
        sectionId: 'technical',
        text: 'Есть ли хостинг?',
        answers: [
          { id: 'yes', text: 'Да, есть' },
          { id: 'no', text: 'Нет, нужно выбрать' },
          { id: 'vercel', text: 'Будем использовать Vercel/другой облачный хостинг' }
        ]
      },
      {
        id: 'technical-3',
        sectionId: 'technical',
        text: 'Нужен ли SSL-сертификат?',
        answers: [
          { id: 'yes', text: 'Да, обязательно' },
          { id: 'auto', text: 'Автоматически (входит в хостинг)' },
          { id: 'no', text: 'Нет' }
        ]
      },
      {
        id: 'technical-4',
        sectionId: 'technical',
        text: 'Нужна ли SEO-оптимизация "под ключ" или базовая подготовка?',
        answers: [
          { id: 'full', text: 'Полная SEO-оптимизация "под ключ"' },
          { id: 'basic', text: 'Базовая подготовка' },
          { id: 'no', text: 'Не нужна' }
        ]
      },
      {
        id: 'technical-5',
        sectionId: 'technical',
        text: 'Основные запросы/направления (пример: "запчасти на комбайн X", "ремонт комбайнов", "оригинальные фильтры")?',
        answers: [
          { id: 'parts', text: 'Запчасти на технику' },
          { id: 'service', text: 'Ремонт и сервис' },
          { id: 'equipment', text: 'Агротехника' },
          { id: 'brands', text: 'По брендам (CLAAS, John Deere и др.)' },
          { id: 'other', text: 'Другие запросы' }
        ],
        multiple: true
      },
      {
        id: 'technical-6',
        sectionId: 'technical',
        text: 'Регионы продвижения: один город или несколько?',
        answers: [
          { id: 'one', text: 'Один регион/город' },
          { id: 'few', text: 'Несколько регионов' },
          { id: 'russia', text: 'Вся Россия' },
          { id: 'regions', text: 'Краснодарский, Ставропольский край, Белгородская область' }
        ]
      },
      {
        id: 'technical-7',
        sectionId: 'technical',
        text: 'Установка аналитики: Яндекс.Метрика/GA4? Какие цели настроить?',
        answers: [
          { id: 'yandex', text: 'Яндекс.Метрика' },
          { id: 'ga4', text: 'Google Analytics 4' },
          { id: 'both', text: 'Обе системы' },
          { id: 'goals-requests', text: 'Цель: заявки' },
          { id: 'goals-calls', text: 'Цель: звонки' },
          { id: 'goals-messengers', text: 'Цель: переходы в мессенджеры' }
        ],
        multiple: true
      },
      {
        id: 'technical-8',
        sectionId: 'technical',
        text: 'Нужна ли схема микроразметки (товары, организация, хлебные крошки)?',
        answers: [
          { id: 'yes-products', text: 'Да, для товаров' },
          { id: 'yes-organization', text: 'Да, для организации' },
          { id: 'yes-breadcrumbs', text: 'Да, хлебные крошки' },
          { id: 'yes-all', text: 'Да, все варианты' },
          { id: 'no', text: 'Нет, не нужна' }
        ],
        multiple: true
      }
    ]
  },
  {
    id: 'budget',
    title: 'Сроки и бюджет',
    description: 'Сроки, бюджет, оплата, поддержка',
    questions: [
      {
        id: 'budget-1',
        sectionId: 'budget',
        text: 'Желаемый срок запуска?',
        answers: [
          { id: 'urgent', text: 'Срочно (до 1 месяца)' },
          { id: 'normal', text: 'Обычный (1-3 месяца)' },
          { id: 'flexible', text: 'Гибкий (3-6 месяцев)' },
          { id: 'no-rush', text: 'Без спешки (6+ месяцев)' }
        ]
      },
      {
        id: 'budget-2',
        sectionId: 'budget',
        text: 'Бюджетные рамки?',
        answers: [
          { id: 'small', text: 'До 150 000 руб' },
          { id: 'medium', text: '150 000 - 300 000 руб' },
          { id: 'large', text: '300 000 - 500 000 руб' },
          { id: 'premium', text: 'Более 500 000 руб' }
        ]
      },
      {
        id: 'budget-3',
        sectionId: 'budget',
        text: 'Этапы оплаты?',
        answers: [
          { id: 'full', text: 'Полная предоплата' },
          { id: 'stages', text: 'Поэтапная оплата (30/30/40 или другая схема)' },
          { id: 'after', text: 'Оплата после завершения' }
        ]
      },
      {
        id: 'budget-4',
        sectionId: 'budget',
        text: 'Приоритеты функций (что важно сделать в первую очередь)?',
        answers: [
          { id: 'mvp', text: 'MVP (минимальный функционал для запуска)' },
          { id: 'catalog', text: 'Каталог и формы заявок' },
          { id: 'design', text: 'Дизайн и контент' },
          { id: 'integrations', text: 'Интеграции (CRM, Telegram)' }
        ],
        multiple: true
      },
      {
        id: 'budget-5',
        sectionId: 'budget',
        text: 'Нужна ли техническая поддержка после запуска?',
        answers: [
          { id: 'yes', text: 'Да, нужна' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'budget-6',
        sectionId: 'budget',
        text: 'Период поддержки?',
        answers: [
          { id: 'month', text: '1 месяц' },
          { id: 'quarter', text: '3 месяца' },
          { id: 'half-year', text: '6 месяцев' },
          { id: 'year', text: '1 год' }
        ]
      },
      {
        id: 'budget-7',
        sectionId: 'budget',
        text: 'Нужно ли обучение работе с сайтом?',
        answers: [
          { id: 'yes-video', text: 'Да, видео-инструкции' },
          { id: 'yes-live', text: 'Да, живое обучение' },
          { id: 'yes-both', text: 'Да, и видео, и живое обучение' },
          { id: 'no', text: 'Нет, не нужно' }
        ]
      }
    ]
  },
  {
    id: 'legal',
    title: 'Юридические аспекты',
    description: 'Политики, реквизиты, оферта',
    questions: [
      {
        id: 'legal-1',
        sectionId: 'legal',
        text: 'Нужны ли страницы: Политика конфиденциальности, обработка персональных данных, cookies?',
        answers: [
          { id: 'yes-all', text: 'Да, все страницы' },
          { id: 'yes-some', text: 'Да, частично' },
          { id: 'no', text: 'Нет, не нужны' }
        ]
      },
      {
        id: 'legal-2',
        sectionId: 'legal',
        text: 'Нужны ли реквизиты компании на сайте?',
        answers: [
          { id: 'yes', text: 'Да, обязательно' },
          { id: 'no', text: 'Нет, не нужны' }
        ]
      },
      {
        id: 'legal-3',
        sectionId: 'legal',
        text: 'Нужна ли оферта (публичная оферта)?',
        answers: [
          { id: 'yes', text: 'Да, нужна' },
          { id: 'no', text: 'Нет, не нужна' }
        ]
      },
      {
        id: 'legal-4',
        sectionId: 'legal',
        text: 'Нужны ли условия доставки/оплаты как отдельные страницы?',
        answers: [
          { id: 'yes', text: 'Да, нужны' },
          { id: 'no', text: 'Нет, достаточно информации в контактах' }
        ]
      },
      {
        id: 'legal-5',
        sectionId: 'legal',
        text: 'Нужны ли документы для интернет-магазина (если есть продажи)?',
        answers: [
          { id: 'yes', text: 'Да, нужны' },
          { id: 'no', text: 'Нет, только заявки' }
        ]
      },
      {
        id: 'legal-6',
        sectionId: 'legal',
        text: 'Нужны ли сертификаты, дилерские письма, лицензии на сайте?',
        answers: [
          { id: 'yes', text: 'Да, нужно разместить' },
          { id: 'no', text: 'Нет, не нужны' }
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
