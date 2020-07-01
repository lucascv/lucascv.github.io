// Evento do botao limpar pixels
const btn = document.querySelector('#clear-board');
btn.addEventListener('click', function () {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

// Evento que troca classe selected para cor clicada
const cores = document.querySelectorAll('.color');

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function (event) {
  const corEscolhida = event.target;
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].classList.remove('selected');
  }
  corEscolhida.classList.add('selected');
});

// Evento que colore o pixel clicado com a cor selecionada
const colorir = document.querySelector('table');
colorir.addEventListener('click', function (event) {
  const corEscolhida = document.querySelector('.selected').style.backgroundColor;
  const pixelEscolhido = event.target;
  pixelEscolhido.style.backgroundColor = corEscolhida;
});

// Função do botão que cria Pixels
function createPixels() {
  let quantidadePixels = document.querySelector('#board-size').value;
  if (quantidadePixels === '') {
    alert('Board inválido!');
  }
  if (quantidadePixels < 5) {
    quantidadePixels = 5;
  }
  if (quantidadePixels > 50) {
    quantidadePixels = 50;
  }
  while (document.querySelectorAll('.linha').length) {
    const itemRemovido = document.querySelectorAll('.linha')[0];
    document.querySelector('#pixel-board').removeChild(itemRemovido);
  }
  for (let i = 0; i < quantidadePixels; i += 1) {
    const linha = document.createElement('tr');
    linha.className = 'linha';
    document.querySelector('#pixel-board').appendChild(linha);
  }
  for (let i = 0; i < document.querySelectorAll('.linha').length; i += 1) {
    for (let n = 0; n < quantidadePixels; n += 1) {
      const novoPixel = document.createElement('td');
      novoPixel.className = 'pixel';
      novoPixel.style.backgroundColor = 'white';
      document.querySelectorAll('.linha')[i].appendChild(novoPixel);
    }
  }
}

// Função que cria quadro de pixels inicial
function buildPixels(j) {
  for (let i = 0; i < j; i += 1) {
    const linha = document.createElement('tr');
    linha.className = 'linha';
    document.querySelector('#pixel-board').appendChild(linha);
  }
  for (let i = 0; i < document.querySelectorAll('.linha').length; i += 1) {
    for (let n = 0; n < j; n += 1) {
      const novoPixel = document.createElement('td');
      novoPixel.className = 'pixel';
      novoPixel.style.backgroundColor = 'white';
      document.querySelectorAll('.linha')[i].appendChild(novoPixel);
    }
  }
}
buildPixels(5);

// Gera cores aleatórias
function generateColor() {
  for (let i = 1; i < document.querySelectorAll('.color').length; i += 1) {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const corAleatoria = document.querySelectorAll('.color')[i];
    corAleatoria.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
generateColor();
