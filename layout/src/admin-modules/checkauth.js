import initAdmin from './initAdmin';

const checkauth = () => {

  const checkData = (value, name) => {
    if (name === "login" && value === 'admin') return true;
    if (name === "password" && value === '123') return true;
  }


  const checkCookie = () => {
    const cookieData = document.cookie.split('; ');
    if (checkData(cookieData[0].split('=')[1], cookieData[0].split('=')[0]) && checkData(cookieData[1].split('=')[1], cookieData[1].split('=')[0]) ) {
      return true;
    } else {
      window.location = window.location.href.replace(/(?!\/)\w+\.\w+/, '');
    }
  }
  if (checkCookie()) initAdmin();
}

export default checkauth;