import toggleMenu from './modules/toggleMenu';
import togglePhone from './modules/togglePhone';
import showPrice from './modules/showPrice';
import showPrivacyPolicy from './modules/showPrivacyPolicy';
import showFormulaPic from './modules/showFormulaPic';
import validation from './modules/validation';
import sendForm from './modules/sendForm';
import accardionFAQ from './modules/accardionFAQ';
import sliderCarouselReviews from './modules/sliderCarouselReviews';
import sliderDocumentModal from './modules/sliderDocumentModal';
import sliderDocument from './modules/sliderDocument';
import dowlandData from './modules/dowlandData';
import sliderPortfolio from './modules/sliderPortfolio';
import portfolioPopUp from './modules/portfolioPopUp.js';
import portfolioMobiel from './modules/portfolioMobiel';
import repair from './modules/repair';

// Открытие меню
toggleMenu();

//Открытие доп телефона
togglePhone();

//Открытие политики конфиденциальности
showPrivacyPolicy();

//Показ модального окна
showPrice();

//Показ подсказок формулы успеха
showFormulaPic();

//Проверка номеров
validation();

//Отправка формы
sendForm();

//Аккардеон для блока вопросов
accardionFAQ();

//слайдер с отзывами
sliderCarouselReviews();

//Слайдер Документов при адаптиве
sliderDocumentModal();

//Слайдер документов при их открытии
sliderDocument();

//Подгрузка данных
dowlandData();

//Слайдер портфолио работ
sliderPortfolio();

//Пролистывание открытого слайдера с работами
portfolioPopUp();

//Мобильная версия слайдера с работами
portfolioMobiel();

//Виды работ Табы
repair();