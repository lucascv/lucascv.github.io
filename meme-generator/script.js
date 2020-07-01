// Função que adiciona texto digitado no meme
function addMemeText() {
  const memeText = document.getElementById('text-input').value;
  document.querySelector('#meme-text').innerText = memeText;
}

// Evento do input do texto do meme
const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', addMemeText);

// Função que troca imagem do meme
function changeImg(event) {
  if (event.target.files && event.target.files[0]) {
    const file = new FileReader();
    file.onload = function (e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }
}

const memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', changeImg, false);

// Evento do botão fire
const btnFire = document.querySelector('#fire');
btnFire.addEventListener('click', function () {
  const areaMeme = document.querySelector('#meme-image-container');
  areaMeme.classList.remove('water');
  areaMeme.classList.remove('earth');
  areaMeme.classList.add('fire');
});

// Evento do botão Water
const btnWater = document.querySelector('#water');
btnWater.addEventListener('click', function () {
  const areaMeme = document.querySelector('#meme-image-container');
  areaMeme.classList.remove('fire');
  areaMeme.classList.remove('earth');
  areaMeme.classList.add('water');
});

// Evento do botão Earth
const btnEarth = document.querySelector('#earth');
btnEarth.addEventListener('click', function () {
  const areaMeme = document.querySelector('#meme-image-container');
  areaMeme.classList.remove('fire');
  areaMeme.classList.remove('water');
  areaMeme.classList.add('earth');
});

// Evento do botão sem borda
const btnDel = document.querySelector('#deleta');
btnDel.addEventListener('click', function () {
  const areaMeme = document.querySelector('#meme-image-container');
  areaMeme.classList.remove('fire');
  areaMeme.classList.remove('water');
  areaMeme.classList.remove('earth');
});

// Evento que troca image-meme pelo meme pronto
const memePronto = document.querySelector('.memes-prontos');
memePronto.addEventListener('click', function (event) {
  const trocaMeme = event.target.src;
  document.getElementById('meme-image').src = trocaMeme;
});
