const sendForm = () => {

    document.querySelectorAll('form').forEach(form => {

        form.querySelector('button').disabled = true;

        //проверка ввода полей формы
        form.querySelectorAll('input').forEach(item => {
            item.addEventListener('input', () => {
                if (form.querySelector('input[type="checkbox"]').checked && form.querySelector('input[name="phone"]').value.length === 18) {
                    if (form.querySelector('.feedback-block__form-input_name')) {
                        form.querySelector('.feedback-block__form-input_name').setAttribute('novalidate', 'novalidate');
                    }
                    form.querySelector('button').disabled = false;
                } else {
                    form.querySelector('button').disabled = true;
                }
            });
        });

        //Отправка формы
        form.addEventListener('submit', e => {
            e.preventDefault();

            const formData = new FormData(form);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            // eslint-disable-next-line no-use-before-define
            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200.');
                    }
                })
                .catch(error => console.error(error));

            //через 3 секунды очищаем инпуты и открываем модальное окно
            setTimeout(() => {
                form.querySelectorAll('input').forEach(item => {
                    item.value = '';
                });
                form.querySelector('input[type="checkbox"]').checked = false;
                document.querySelector('.popup-consultation').style.visibility = 'hidden';
                //открытие модального окна
                document.querySelector('.popup-thank').style.visibility = 'visible';
                document.querySelector('.popup-thank').classList.add('openPopUp');
            }, 3000);


        });
    });

    //функция запроса на сервер
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

};


export default sendForm;