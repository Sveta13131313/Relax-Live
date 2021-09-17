import toggleMenu from './modules/toggleMenu';
import togglePhone from './modules/togglePhone';
import showPrice from './modules/showPrice';
import showPrivacyPolicy from './modules/showPrivacyPolicy';
import showFormulaPic from './modules/showFormulaPic';
import validation from './modules/validation';
import sendForm from './modules/sendForm';
import accardionFAQ from './modules/accardionFAQ';
import sliderCarousel from './modules/sliderCarousel';
import sliderPortfolio from './modules/sliderPortfolio';
import sliderDocument from './modules/sliderDocument';
import dowlandData from './modules/dowlandData';





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
sliderCarousel();

//Слайдер портфолио
sliderPortfolio();

//Слайдер документов при их открытии
sliderDocument();

//Подгрузка данных
dowlandData();