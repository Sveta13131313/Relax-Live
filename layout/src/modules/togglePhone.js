const togglePhone = () => {

    //Открытие и закрытие доп телефона
    let divNumber = document.querySelector('.header-contacts__phone-number-accord');

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.header-contacts__arrow')) {

        }
    });
};



export default togglePhone;