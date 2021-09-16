const toggleMenu = () => {

  //Плавный скролл
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchors) {
    const blockID = anchor.getAttribute('href');

    anchor.addEventListener('click', e => {
      e.preventDefault();
    });

    if (blockID === '#') continue;

    if (document.querySelector(blockID)) {
      anchor.addEventListener('click', () => {
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  }


  //Открытие и закрытие меню
  const menu = document.querySelector('.popup-dialog-menu'),
    style = document.createElement('style');
  style.textContent = `
        .active-menu {
            transform: translate3d(0px, 0px, 0px);
        }
    `;
  style.id = 'toggleStyle';
  document.head.append(style);

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.close-menu') ||
      target.closest('.popup-dialog-menu') ||
      target.matches('img.menu__icon') ||
      (menu.matches('.active-menu') && !target.closest('.active-menu'))) {
      handlerMenu();
    }
    else if (target.matches('.close-thank') || (target.closest('.popup-thank') && !target.closest('.feedback-wrap.popup-thank-bg') && target.closest('.openPopUp'))) {
      document.querySelector('.popup-thank').style.visibility = 'hidden';
      document.querySelector('.popup-thank').classList.remove('openPopUp');
    }
    //открытие окна "консультация"
    else if (target.closest('button.button.button_wide')) {
      document.querySelector('.popup-consultation').style.visibility = 'visible';
      document.querySelector('.popup-consultation').classList.add('openPopUp');
    }
      //закрытие окна "консультация"
     else if (target.closest('.close.close-consultation') || (target.closest('.openPopUp') && target.closest('.popup-consultation') && !target.closest('.feedback-wrap'))) {
      document.querySelector('.popup-consultation').style.visibility = 'hidden';
      document.querySelector('.popup-consultation').classList.remove('openPopUp');
    } 
 
  });
};

export default toggleMenu;
