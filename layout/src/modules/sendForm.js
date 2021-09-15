const sendForm = () => {
//
//    document.querySelectorAll('.feedback__form').forEach(form => {
//
//
//        form.addEventListener('submit', event => {
//            event.preventDefault();
//            const formData = new FormData(form);
//
//            formData.forEach((val, key) => {
//                formData[key] = val;
//            });
//
//            postData(formData).then((response) => {
//                    if (response.status !== 200) {
//                        throw new Error('status network not 200');
//                    }
//                })
//                .catch(error => console.error(error));
//
//            event.target.reset();
//        });
//    });
//
//    //Функция запроса на сервер
//    const postData = formData => {
//        fetch('./server.php', {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify(formData)
//        });
//    };
//
//
//
};
export default sendForm;