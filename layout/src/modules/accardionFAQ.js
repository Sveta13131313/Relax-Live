const accardionFAQ = () => {

    const divContent = document.querySelectorAll('.msg'),
        tab = document.querySelectorAll('.title_block'),
        accordion = document.querySelector('.accordion');




//Изменение видимости блока
    const toggleAccardionFAQ = index => {
        for (let i = 0; i < divContent.length; i++) {
            if (index === i) {
                tab[i].classList.add('msg-active');
            } else {
                tab[i].classList.remove('msg-active');
            }
        }
    };


//Прослушивание кликов по блоку вопросов
    accordion.addEventListener('click', event => {
        let target = event.target;
       // if (target.classList.contains('accordion') ||
         //   target.closest('ul>li>h2')) {
                target = target.closest('.title_block');
                console.log(target)
                if (target.classList.contains('title_block')) {
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleAccardionFAQ(i);
                }
            });
        }
    });


}
export default accardionFAQ;