import checkInputs from "./checkInputs";

const clearAndClose = () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(input => input.value = '');
  document.querySelector('.modal__header').dataset.id = '';
  checkInputs();
  document.querySelector('.modal__overlay').classList.remove('.active');
}

export default clearAndClose;