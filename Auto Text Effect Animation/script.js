const containerEle = document.querySelector(".container");

const hiddentext = ["Developer", "Designer", "Dreamer"];

let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++
    containerEle.innerHTML = `
        <h1>I'm a ${hiddentext[careerIndex].slice(0,characterIndex)}.</h1>
    `;
    if(characterIndex === hiddentext[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if(careerIndex === hiddentext.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 200);
}

