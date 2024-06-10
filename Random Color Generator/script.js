const containerEle = document.querySelector('.container')
const root = document.documentElement;

for(let index = 0; index < 29; index++){
    const newColorEle = document.createElement('div');
    newColorEle.classList.add('color-container');
    containerEle.appendChild(newColorEle);
    // newColorEle.innerText = '#' + randomColor();
}

const colorEle = document.querySelectorAll('.color-container');
// console.log(colorEle);

function generateColor(){
    colorEle.forEach((color) => {
        const randColor = randomColor();
        color.innerText = '#' + randColor;
        color.style.backgroundColor = '#' + randColor;
        // root.style.setProperty('--hex-code', '#' + randColor);
    })
}

function randomColor(){
    const chars = '0123456789ABCDEF';
    const colorCodeLength = 6;
    let color = "";

    for(let index = 0; index < colorCodeLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars[randomNum];
    }
    return color;
    // console.log(color);
}

generateColor();
