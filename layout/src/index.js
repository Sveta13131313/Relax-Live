import toggleMenu from './modules/toggleMenu';
import togglePhone from './modules/togglePhone';
import showPrice from './modules/showPrice';
import showPrivacyPolicy from './modules/showPrivacyPolicy';
import showFormulaPic from './modules/showFormulaPic';
import validation from './modules/validation';
import sendForm from './modules/sendForm';

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