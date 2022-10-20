const title = document.querySelector(".hello h1");
title.style.color = "black";

title.addEventListener("mouseenter", function() {
    title.style.color = "red";
    title.textContent = "here";
});

title.addEventListener("mouseleave", function() {
    title.style.color = "blue";
    title.textContent = "gone";
});

console.dir(title);