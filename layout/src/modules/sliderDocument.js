const sliderDocument = () => {

    const section = document.querySelector('.popup-transparency-slider-wrap'),
    slider = document.querySelector('.popup-transparency-slider');

  const removeActiveClass = (parentEl) => {
    [...parentEl.children].forEach(item => item.classList.remove('active'));
  }

  const currentSlide = (slider) => {
    for (let i = 0; i < slider.children.length; i++) {
      if (slider.children[i].classList.contains('active')) return i;
    }
  }

  const changeCounter = (slider) => {
    const currSlide = currentSlide(slider),
      countSlides = slider.children.length,
      contentCurrent = section.querySelector('.slider-counter-content__current'),
      contentTotal = section.querySelector('.slider-counter-content__total');
    contentCurrent.textContent = currSlide + 1;
    contentTotal.textContent = countSlides;
  }

  const changeSlide = (slider, direction = 0) => {
    if (direction === 0) {
      slider.children[0].classList.add('active');
    }
    const currSlide = currentSlide(slider),
      countSlides = slider.children.length;

    removeActiveClass(slider);
    switch (true) {
      case (direction === -1 && currSlide === 0): {
        slider.children[countSlides - 1].classList.add('active');
        break;
      }
      case (direction === 1 && currSlide === countSlides - 1): {
        slider.children[0].classList.add('active');
        break;
      }
      default: {
        slider.children[currSlide + direction].classList.add('active');
      }
    }
  }
  changeSlide(slider);
  changeCounter(slider);

  section.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('#transparency_left')) {
      changeSlide(slider, -1);
      changeCounter(slider);
    }
    if (target.closest('#transparency_right')) {
      changeSlide(slider, 1);
      changeCounter(slider);
    }
  })

  const transparency = document.getElementById('transparency'),
    slide = transparency.querySelector('.transparency-slider');
   const windowWidth = screen.width;
    if (windowWidth > 1100) {
        slide.style.transform = `translateX(-0px)`;
        transparency.querySelector('#transparency-arrow_right').style.display = 'none';
        transparency.querySelector('#transparency-arrow_left').style.display = 'none';
 
    } else {
        transparency.querySelector('#transparency-arrow_right').style.display = 'flex';
    }

};


export default sliderDocument;