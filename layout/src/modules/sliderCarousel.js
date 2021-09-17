const sliderCarousel = () => {
//слайдер с отзывами
    const reviews = document.getElementById('reviews'),
        slides = reviews.querySelectorAll('.reviews-slider__slide');

    const style = document.createElement('style');
    style.id = 'reviewsSlider-style';
    style.textContent = `
        .reviewsSingle-slider {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
            transition: transform 0.5s !important;
        }
    `;
    document.head.append(style);

    let currentSlide = 0;

    reviews.querySelector('#reviews-arrow_left').style.display = 'none';

    reviews.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('#reviews-arrow_right')) {
            if(currentSlide>0){
                slides[currentSlide-1].classList.toggle('reviewsSingle-slider');
            }
        
            slides[currentSlide].classList.toggle('reviewsSingle-slider');
            currentSlide++;
        
            console.log(reviews.querySelector('.reviewsSingle-slider'))
            reviews.querySelector('.reviewsSingle-slider').style.transform = `translateX(-${currentSlide * 494}px)`;
            slides.forEach(elem => {
                elem.style.transform = `translateY(-${currentSlide * 314}px)`;
            })
        } else if (target.closest('#reviews-arrow_left')) {
            if(currentSlide<slides.length-1){
                slides[currentSlide+1].classList.toggle('reviewsSingle-slider');
            }
            slides[currentSlide].classList.toggle('reviewsSingle-slider');
            currentSlide--;
            reviews.querySelector('.reviewsSingle-slider').style.transform = `translateX(-${currentSlide * 494}px)`;
               slides.forEach(elem => {
                elem.style.transform = `translateY(-${currentSlide * 314}px)`;
            })
        }

        if (currentSlide === slides.length - 1) {
            reviews.querySelector('#reviews-arrow_right').style.display = 'none';
        } else {
            reviews.querySelector('#reviews-arrow_right').style.display = 'flex';
        }

        if (currentSlide === 0) {
            reviews.querySelector('#reviews-arrow_left').style.display = 'none';
        } else {
            reviews.querySelector('#reviews-arrow_left').style.display = 'flex';
        }

    });
};


export default sliderCarousel;