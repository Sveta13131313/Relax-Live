const showPrice = () => {

    //Скрытие и открытие диалогого окна Полный список услуг
    let modDiv = document.querySelector('.popup-repair-types'),
        style = document.createElement('style');

    style.textContent = `
    .popup-repair-types_open {
        visibility: visible;
    }
      `;
    style.id = '.popupRepairTypesOpen';
    document.head.append(style);


    document.addEventListener('click', e => {
        const target = e.target;
        if (target.matches('.no-overflow') ||
            (target.closest('.link-list-repair ')&&target.matches('.mobile-hide'))||
            target.closest('.link-list-repair ')||
            (modDiv.matches('.popup-repair-types_open') && !target.closest('.popup-dialog-repair-types'))) {
            modDiv.classList.toggle('popup-repair-types_open');
        }
    });

};

export default showPrice;