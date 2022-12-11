const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const lineWidthInput = document.querySelector('#lineWidthInput');
const colorInput = document.querySelector('#colorInput');
const fileInput = document.querySelector('#fileInput');
const textInput = document.querySelector('#textInput');
const modeButton = document.querySelector('#modeButton');
const eraseButton = document.querySelector('#eraseButton');
const saveButton = document.querySelector('#saveButton');
const colorOptions = Array.from(
  document.querySelectorAll('#colorOptions:nth-child(n+2)')
);
let isPainting = false;
let isFilling = false;

canvas.width = 800;
canvas.height = 800;
context.lineWidth = lineWidthInput.value;
context.lineCap = 'round';

function changeColor(color) {
  context.strokeStyle = color;
  context.fillStyle = color;
  colorInput.value = color;
}

canvas.addEventListener('dblclick', (event) => {
  context.save();
  context.lineWidth = 1;
  context.font = '48px sans-serif';
  context.fillText(textInput.value, event.offsetX, event.offsetY);
  context.restore();
});

canvas.addEventListener('mousemove', (event) => {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
  }
  context.beginPath();
  context.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener('click', (event) => {
  if (isFilling) {
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener('mousedown', (event) => {
  isPainting = true;
});

canvas.addEventListener('mouseup', (event) => {
  isPainting = false;
});

canvas.addEventListener('mouseleave', (event) => {
  isPainting = false;
});

lineWidthInput.addEventListener('change', (event) => {
  context.lineWidth = event.target.value;
});

colorInput.addEventListener('change', (event) => {
  changeColor(event.target.value);
});

colorOptions.forEach((color) =>
  color.addEventListener('click', (event) => {
    changeColor(event.target.dataset.color);
  })
);

modeButton.addEventListener('click', (event) => {
  if (isFilling) {
    isFilling = false;
    modeButton.innerText = 'Draw';
  } else {
    isFilling = true;
    modeButton.innerText = 'Fill';
  }
});

eraseButton.addEventListener('click', (event) => {
  changeColor('#ffffff');
  context.fillRect(0, 0, canvas.width, canvas.height);
});

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = () => {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
  console.log('url', url);
});

saveButton.addEventListener('click', (event) => {
  const a = document.createElement('a');
  a.href = canvas.toDataURL();
  a.download = 'myDrawing.png';
  a.click();
});
