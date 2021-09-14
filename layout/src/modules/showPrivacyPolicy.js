const showPrivacyPolicy = () => {

    //Скрытие и открытие диалогого окна Политика конфиденциальности
    let modDiv = document.querySelector('.popup-privacy'),
        style = document.createElement('style');

    style.textContent = `
.popup-privacy_open {
 visibility: visible;
}
`;
    style.id = '.popupPrivacyOpen';
    document.head.append(style);


    document.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.link-privacy')||
        (target.closest('.link-privacy')&&target.matches('.mobile-hide'))||
        //target.closest('.link-list-repair ')||
        (modDiv.matches('.popup-privacy_open') && !target.closest('.popup-dialog-privacy')))
        {
            modDiv.classList.toggle('popup-privacy_open');
        }
    });

};

export default showPrivacyPolicy;