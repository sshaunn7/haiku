// main.js


functionrandomNumber(min, max) {
    returnMath.floor(Math.random() * (max - min + 1)) + min;
}


letdivs = document.querySelectorAll(".grid-container div");


functionrandomize() {
    console.log(divs.length, "randomize!");


    divs.forEach( function (div) {
        letscale = randomNumber(.5, 1.2);
        lettranslateX = randomNumber(0, 50);
        lettranslateY = randomNumber(0, 20);
        letrotate = randomNumber(0, 360);

    
        if (Math.random() > .5) {
            scale = 1; // don't affect scale
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80);
        }

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    })
}


document.addEventListener("click", randomize);
