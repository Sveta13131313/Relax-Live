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
      target.matches('img.menu__icon')){
        handlerMenu();
      }
    });
  };
  
  export default toggleMenu;
