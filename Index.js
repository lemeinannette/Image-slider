let counter = 1;
const numSlides = 7; 
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > numSlides) {
        counter = 1;
    }
}, 5000);
