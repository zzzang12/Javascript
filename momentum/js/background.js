const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const targetImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${targetImage}`;
document.body.appendChild(backgroundImage);
