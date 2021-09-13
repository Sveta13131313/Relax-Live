const sliderCarousel = () => {

    const main = document.querySelector('.companies-wrapper'),
        wrap = document.querySelector('.companies-hor'),
        slides = document.querySelector('.companies-hor').children;
    let slidesToShow = 4,
        options = {
            position: 0,
            infinity: true,
            widthSlide: Math.floor(100 / slidesToShow),
        },
        responsive = [{
            breakpoint: 1024,
            slidesToShow: 3
        },
        {
            breakpoint: 768,
            slidesToShow: 2
        },
        {
            breakpoint: 576,
            slidesToShow: 1
        }
        ];


    let prev, next;

    const init = () => {
        responseInit();
        addGloClass();
        addStyle();
        addArrow();
        controlSlider();


    }

    const addGloClass = () => {
        main.classList.add('glo-slider');
        wrap.classList.add('glo-slider__wrap');
        for (const item of slides) {
            item.classList.add('glo-slider__item');
        }
    }
    const addStyle = () => {
        let style = document.getElementById('sliderCarusel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
        }
        style.textContent = `
        .glo-slider{
            overflow:hidden !important;

        }
        .glo-slider__wrap{
            display:flex !important;
            transition:transform 0.5s !important;
            will-change:transform !important;
        }
        .glo-slider__item{
            display:flex !important;
            align-items:center;
            justify-content:center;
            flex: 0 0 ${options.widthSlide}% !important; 
            margin: auto 0 !important; 
        }
        `;
        document.head.appendChild(style);
    }

    const controlSlider = () => {
        prev.addEventListener('click', prevSlider.bind(this));
        next.addEventListener('click', nextSlider.bind(this));
    }

    const prevSlider = () => {
        if (options.infinity || options.position > 0) {
            --options.position;
            if (options.position < 0) {
                options.position = slides.length - slidesToShow;
            }
            wrap.style.transform = `translateX(-${options.position * options.widthSlide}%)`;
        }
    }

    const nextSlider = () => {
        if (options.infinity || options.position < slides.length - slidesToShow) {
            ++options.position;
            if (options.position > slides.length - slidesToShow) {
                options.position = 0;
            }
            wrap.style.transform = `translateX(-${options.position * options.widthSlide}%)`;
        }
    }

    const addArrow = () => {
        prev = document.createElement('button');
        next = document.createElement('button');

        prev.className = 'glo-slider__prev';
        next.className = 'glo-slider__next';

        main.appendChild(prev);
        main.appendChild(next);

        const style = document.createElement('style');
        style.textContent = `
        .glo-slider__prev,
        .glo-slider__next{
            margin: 0 10px;
            border:20px solid transparent;
            background: transparent;
        }

        .glo-slider__next{
            border-left-color:#19b5fe
        }

        .glo-slider__prev{
            border-right-color:#19b5fe
        }
        .glo-slider__prev:hover,
        .glo-slider__next:hover,
        .glo-slider__prev:focus,
        .glo-slider__next:focus{
            background: transparent;
            outline:transparent;
        } 
        `;
        document.head.appendChild(style);
    }

    const responseInit = () => {
        const slidesToShowDefault = slidesToShow;
        const allRespone = responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allRespone);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allRespone.length; i++) {
                    if (widthWindow < allRespone[i]) {
                        slidesToShow = responsive[i].slidesToShow;
                        options.widthSlide = Math.floor(100 / slidesToShow);
                        addStyle();
                    }
                }
            }
            else {
                slidesToShow = slidesToShowDefault;
                options.widthSlide = Math.floor(100 / slidesToShow);
                addStyle();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);

    }

    init();
}
export default sliderCarousel;