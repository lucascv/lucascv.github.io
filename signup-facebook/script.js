const btn = document.querySelector('#button-login');
btn.addEventListener('click', function () {
  const email = document.querySelector('#user-email-phone').value;
  alert(email);
});

const btn2 = document.querySelector('#facebook-register');
btn2.addEventListener('click', function () {
  const entradas = document.querySelectorAll('input');
  let alerta = true;
  for (let i = 2; i < entradas.length; i += 1) {
    if (entradas[i].value === '') {
      alerta = false;
      alert('Dados Inválidos');
      return;
    }
  }
  if (alerta === true) {
    const entradas1 = document.querySelectorAll('.genero');
    let sexo = '';
    for (let i = 1; i < entradas1.length; i += 1) {
      if (entradas1[i].checked) {
        sexo = entradas1[i].value;
      }
    }
    alert(`${entradas[2].value} ${entradas[3].value} - ${sexo}`);
  }
});
