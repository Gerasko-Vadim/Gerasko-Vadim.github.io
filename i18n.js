// Localization: English lives in index.html, Russian strings are below.
// Elements are tagged with data-i18n="key" (innerHTML) or data-i18n-ph="key" (placeholder).

const I18N = {
  ru: {
    'meta.title': 'Вадим Гераско | Full-Stack разработчик — TypeScript, React, Next.js, NestJS',
    'meta.description': 'Вадим Гераско — Full-Stack разработчик с 6 годами опыта в финтехе и банкинге. TypeScript, React, Next.js, Node.js, NestJS. Бишкек, готов к удалённой работе и релокации.',
    cv: 'cv/Vadim_Gerasko_Full_Stack_Developer_CV_RU.pdf',

    'nav.about': 'Обо мне',
    'nav.fit': 'Кому полезен',
    'nav.experience': 'Опыт',
    'nav.skills': 'Навыки',
    'nav.education': 'Образование',
    'nav.contact': 'Контакты',
    'nav.hire': 'Нанять',

    'hero.badge': 'Бишкек · Готов к удалёнке и релокации',
    'hero.hello': 'Привет, я',
    'hero.name': 'Вадим Гераско',
    'hero.role': 'Full-Stack разработчик',
    'hero.desc': '6 лет создаю финтех- и банковские продукты. Основал сервисный стартап с геолокацией, который окупился за 2 месяца, руководил командой из 5 разработчиков в MBank и перестроил архитектуру B2B интернет-банкинга для Bereke Bank. Разрабатываю быстрее с помощью AI (Claude Code).',
    'hero.work': 'Смотреть опыт',
    'hero.cv': 'Скачать резюме',

    'about.title': 'Обо <span class="gradient-text">мне</span>',
    'about.p1': 'Full-Stack разработчик с 6 годами опыта создания финтех- и банковских продуктов на TypeScript: React и Next.js на фронтенде, Node.js и NestJS на бэкенде. Основал собственный стартап и с нуля построил сервисную платформу с геолокацией: Telegram Mini Apps, Telegram-боты, бэкенд на NestJS и веб-приложение на Next.js; собственный алгоритм назначает каждый заказ ближайшему мастеру — 100 пользователей и окупаемость за 2 месяца.',
    'about.p2': 'До этого руководил командой из 5 разработчиков в MBank (интернет-банкинг для юрлиц), а в Rocket Tech перестроил архитектуру B2B интернет-банкинга для Bereke Bank на Feature-Sliced Design и микрофронтенды, проектировал REST API-контракты и внедрил защиту платежей (OTP, электронная подпись).',
    'about.p3': 'Уверенно владею AI-assisted разработкой: работаю с <strong>Claude Code</strong> как с AI-напарником — так я выпустил весь стек City of Masters за 1 месяц — и интегрирую LLM в продукты (OpenAI API в MBank).',
    'stats.years': 'лет опыта',
    'stats.team': 'разработчиков в команде',
    'stats.ci': 'быстрее CI-сборка',
    'stats.paybackNum': '2 мес',
    'stats.payback': 'окупаемость стартапа',

    'exp.title': 'Опыт',
    'exp.subtitle': 'Финтех, банкинг и собственный стартап',
    'badge.startup': 'Стартап',
    'badge.current': 'Сейчас',

    'com.role': 'Основатель и Full-Stack разработчик',
    'com.company': 'City of Masters · собственный стартап',
    'com.period': 'Декабрь 2025 – настоящее время',
    'com.project': '<strong>City of Masters</strong> — сервисная платформа, которая связывает клиентов с мастерами в их городе.',
    'com.key': '<strong>Ключевой результат:</strong> запустил продукт на 100 пользователей; проект окупил затраты за 2 месяца.',
    'com.b1': 'Система использует точную геолокацию клиента и каждого мастера и <strong>собственный алгоритм подбора</strong>, чтобы назначить каждый заказ ближайшему мастеру',
    'com.b2': 'Создал весь продукт с нуля: <strong>Telegram Mini Apps</strong> для клиентов и мастеров, Telegram-боты, бэкенд API, веб-приложение и лендинг',
    'com.b3': 'Реализовал бэкенд API на <strong>NestJS и MongoDB</strong> и Telegram-ботов на Telegraf; упаковал сервисы в <strong>Docker</strong> и развернул на Railway',
    'com.b4': 'Разработал фронтенды на <strong>React 19, Vite, Next.js 16</strong>, Telegram Mini Apps SDK и Tailwind CSS',

    'com.b5': 'Ускорил разработку с помощью <strong>Claude Code</strong> как AI-напарника по всему стеку — от scaffolding до рефакторинга: бэкенд, боты, Mini Apps, веб-приложение и лендинг выпущены за <strong>1 месяц</strong>',

    'fit.title': 'Кому я могу быть <span class="gradient-text">полезен</span>',
    'fit.subtitle': 'Командам, которым мой опыт даст больше всего — full-time, удалённо или с релокацией',
    'fit.c1.title': 'Финтех и банки',
    'fit.c1.text': 'Интернет-банкинг для бизнеса, защита платежей (OTP, электронная подпись, ролевой доступ), обновления транзакций в реальном времени и сложные формы — всё это я делал в MBank и Bereke Bank.',
    'fit.c2.title': 'Стартапы и новые продукты',
    'fit.c2.text': 'Один инженер, который доведёт продукт от идеи до продакшена: фронтенд, бэкенд на NestJS, Telegram-боты и Mini Apps, деплой в Docker. Мой собственный стартап окупился за 2 месяца.',
    'fit.c3.title': 'Команды с большим фронтендом',
    'fit.c3.text': 'Feature-Sliced Design, микрофронтенды, сборка в 9 раз быстрее на Vite, культура тестирования и code review — плюс опыт руководства фронтенд-командой и проведения собеседований.',
    'fit.c4.title': 'Команды, внедряющие AI',
    'fit.c4.text': 'Компании, которые хотят разрабатывать быстрее с AI-assisted подходом (Claude Code) или добавить в продукт функции на базе LLM (OpenAI API).',

    'rt.period': 'Май 2024 – настоящее время',
    'rt.project': '<strong>BBusiness</strong> — B2B интернет-банкинг для юридических лиц в Bereke Bank (Казахстан). <em>~150 человек на проекте.</em>',
    'rt.b1': 'Спроектировал архитектуру фронтенда на <strong>Feature-Sliced Design</strong> для 5+ продуктовых модулей, задав чёткие границы слоёв: модули стало проще поддерживать, тестировать и передавать новым разработчикам',
    'rt.b2': 'Разделил монолитный фронтенд на <strong>4 независимо развёртываемых микрофронтенда</strong>, сократив время межкомандной интеграции на <strong>40%</strong>',
    'rt.b3': 'Перевёл сборку с Webpack на <strong>Vite</strong>, сократив CI-сборку с ~18 до ~2 минут (<strong>в 9 раз</strong>) и сделав возможными ежедневные релизы',
    'rt.b4': 'Совместно с бэкенд-разработчиками спроектировал <strong>12+ REST API-контрактов</strong> и задокументировал их в Swagger, чтобы фронтенд и бэкенд разрабатывались параллельно',
    'rt.b5': 'Переписал слой WebSocket, повысив надёжность соединения с ~94% до <strong>99,8%</strong> для обновлений транзакций в реальном времени',
    'rt.b6': 'Выстроил практику тестирования и увеличил покрытие с 0% до <strong>70%</strong>; перевёл тесты с Jest на Vitest, ускорив прогон на <strong>35%</strong>',
    'rt.b7': 'Реализовал <strong>защиту платежей</strong>: подтверждение по OTP, электронную подпись платежей и ролевую модель доступа для пользователей компаний',

    'mb.period': 'Декабрь 2022 – Май 2024',
    'mb.project': '<strong>Mbusiness</strong> — интернет-банкинг и CRM для юридических лиц: счета, платежи, отчётность.',
    'mb.b1': 'Руководил командой из <strong>5 frontend-разработчиков</strong> и менторил их при разработке интернет-банкинга для бизнес-клиентов; проводил собеседования кандидатов в команду',
    'mb.b2': 'Провёл ревью <strong>100+ pull request’ов</strong> и ввёл командные правила code review, сократив средний цикл PR с 3 до <strong>1,5 дня</strong>',
    'mb.b3': 'Повысил покрытие тестами с <strong>50% до 85%</strong>, что помогло снизить число багов в продакшене на 30%',
    'mb.b4': 'Запустил AI-категоризацию транзакций на базе <strong>OpenAI API</strong>, которая автоматически классифицирует операции бизнес-клиентов',
    'mb.b5': 'Автоматизировал пайплайны <strong>GitLab CI/CD</strong>, сократив ошибки при деплое на 25% и ускорив релизы',
    'mb.b6': 'Проводил планирование спринтов и ретроспективы, вместе с продуктом и дизайном разбивая фичи на поставляемые инкременты',
    'mb.b7': 'Организовывал внутренние <strong>технические митапы</strong> для обмена фронтенд-практиками между командами',

    'nb.period': 'Февраль 2022 – Декабрь 2022',
    'nb.project': '<strong>NBFit</strong> — платформа для тренировок и отслеживания результатов для 1 000+ активных спортсменов.',
    'nb.b1': 'Модернизировал <strong>15k+ строк</strong> legacy-кода на чистом JavaScript, перевёл ключевые модули на React и сократил среднее время загрузки страницы с 4,2 до <strong>3,1 с</strong>',
    'nb.b2': 'Стабилизировал legacy-кодовую базу, закрыв <strong>40% открытых багов</strong> за счёт системной отладки',
    'nb.b3': 'Выпустил новые функции: календарь тренировок, графики прогресса, таблицу лидеров',
    'nb.b4': 'Создал собственный HTML5-видеоплеер для тренировок, увеличив среднюю длительность сессии на <strong>40%</strong>',

    'c2.period': 'Сентябрь 2020 – Февраль 2022',
    'c2.project': '<strong>Cash2u</strong> — админ-панель финансовой платформы с удалённой видеоверификацией личности.',
    'c2.b1': 'Разработал <strong>с нуля</strong> фронтенд админ-панели (React, Next.js, React-admin), дав операционным сотрудникам единый инструмент для управления транзакциями и аккаунтами пользователей',
    'c2.b2': 'Интегрировал видеозвонки на <strong>WebRTC</strong> для удалённой верификации личности, вдвое сократив время ручной проверки',
    'c2.b3': 'Ускорил загрузку страниц на <strong>40%</strong> за счёт lazy loading и оптимизации управления состоянием',
    'c2.b4': 'Построил <strong>бэкенд на Firebase</strong> для синхронизации данных в реальном времени, что позволило команде обойтись без отдельного бэкенд-разработчика',

    'skills.title': 'Мои <span class="gradient-text">навыки</span>',
    'skills.subtitle': 'Стек, с которым я работаю на фронтенде, бэкенде и в delivery',
    'skills.languages': 'Языки',
    'skills.restDesign': 'Проектирование REST API',
    'skills.db': 'Базы данных и инфраструктура',
    'skills.arch': 'Архитектура',
    'skills.perf': 'Оптимизация производительности',
    'skills.aiDev': 'AI-assisted разработка',
    'skills.llm': 'Интеграция LLM',
    'skills.testing': 'Тестирование',
    'skills.tools': 'Инструменты',
    'skills.practices': 'Практики',
    'skills.mentoring': 'Менторинг',
    'skills.interviewing': 'Технические собеседования',
    'skills.patterns': 'Паттерны проектирования',

    'edu.title': 'Образование',
    'edu.subtitle': 'Образование и языки',
    'edu.degree': 'Информатика и вычислительная техника',
    'edu.school': 'Кыргызский государственный технический университет им. И. Раззакова',
    'edu.languages': 'Языки',
    'edu.english': 'Английский',
    'edu.russian': 'Русский',
    'edu.native': 'Родной',

    'contact.title': 'Давайте <span class="gradient-text">свяжемся</span>',
    'contact.subtitle': 'Открыт к full-time позициям — удалённо или с релокацией. Напишите мне!',
    'form.name': 'Ваше имя',
    'form.namePh': 'Иван Иванов',
    'form.email': 'Email',
    'form.message': 'Сообщение',
    'form.messagePh': 'Расскажите о вакансии или проекте...',
    'form.send': 'Отправить через почту',
    'form.success': 'Откроется ваш почтовый клиент с готовым письмом — просто нажмите «Отправить».',
    'form.subject': 'Сообщение с сайта-портфолио от',
    'footer': 'Вадим Гераско. Сделано с ❤️ и чистым кодом.',
  },
};

const EN = {};
let currentLang = 'en';

function captureEnglish() {
  document.querySelectorAll('[data-i18n]').forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { EN[el.dataset.i18nPh] = el.placeholder; });
  EN['meta.title'] = document.title;
  EN['meta.description'] = document.querySelector('meta[name="description"]').content;
  EN.cv = document.getElementById('cvLink').getAttribute('href');
  EN['form.subject'] = 'Portfolio message from';
}

function t(key) {
  return (currentLang !== 'en' && I18N[currentLang][key]) || EN[key];
}

function setLang(lang) {
  currentLang = I18N[lang] ? lang : 'en';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]').content = t('meta.description');
  document.getElementById('cvLink').setAttribute('href', t('cv'));
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
    b.setAttribute('aria-pressed', b.dataset.lang === currentLang);
  });
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
}

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl) return fromUrl;
  try { const saved = localStorage.getItem('lang'); if (saved) return saved; } catch (e) {}
  return (navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
  captureEnglish();
  setLang(initialLang());
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
});
