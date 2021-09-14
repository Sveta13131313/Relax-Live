const togglePhone = () => {

    //Открытие и закрытие доп телефона 
    let divNumber = document.querySelector('.header-contacts__phone-number-accord'),
    aNumber=document.querySelector('.header-contacts__phone-number-accord>.header-contacts__phone-number'),  
    imgNumber=document.querySelector('.header-contacts__arrow > img'),

    style = document.createElement('style');

    style.textContent = `
    .header-contacts_number_div_open {
        position: relative;
    }
    .header-contacts_number_a_open
    {
        opacity: 1 !important;;
    }
    .header-contacts_arrow_img {
        transform: rotate(180deg);
    }
      `;
    style.id = 'phoneNumbers';
    document.head.append(style);

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.header-contacts__arrow')) {
            divNumber.classList.toggle('header-contacts_number_div_open');
            aNumber.classList.toggle('header-contacts_number_a_open');
            imgNumber.classList.toggle('header-contacts_arrow_img');
        }
    });
};



export default togglePhone;