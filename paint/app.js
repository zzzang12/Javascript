const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
context.lineWidth = 2;

const colors = [
  '#ff3838',
  '#ffb8b8',
  '#c56cf0',
  '#ff9f1a',
  '#fff200',
  '#32ff7e',
  '#7efff5',
  '#18dcff',
  '#7d5fff',
];

let isPainting = false;

canvas.addEventListener('mousemove', (event) => {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
  }
  context.moveTo(event.offsetX, event.offsetY);
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
