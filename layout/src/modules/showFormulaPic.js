const showFormulaPic = () => {

    const elems = document.querySelectorAll('.formula-item__icon'),
    style = document.createElement('style');
    style.id = 'prompt';
    style.textContent = `
        .formula-item-popup-show {
            transform: translateY(5px);
            padding-top: 35px;
            top: 155px;
        }
        .formula-item-popup-show::before {
            transform: rotateZ(180deg)
        }
    `;
    document.head.append(style);

    elems.forEach(item => {
        item.addEventListener('mouseover', e => {
            const block = e.target.closest('.formula-item');
            block.classList.add('active-item');

            const blockText = block.querySelector('.formula-item-popup');
            block.style.cssText = `z-index: 1;`;

            if (blockText.getBoundingClientRect().top < 5) {
                blockText.classList.add('formula-item-popup-show');
            }
        });

        item.addEventListener('mouseout', e => {
            const blockText = e.target.closest('.formula-item');
            blockText.classList.remove('active-item');

            const blockItem = blockText.querySelector('.formula-item-popup');
            blockItem.classList.remove('formula-item-popup-show');
            blockText.removeAttribute('style');
        });

    });

};


export default showFormulaPic;
