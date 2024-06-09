const containerEle = document.querySelector('.container');

const leftEle = document.querySelector('.left');
const rightEle = document.querySelector('.right');

leftEle.addEventListener('mouseenter', ()=>{
    containerEle.classList.add("active-left")
})

leftEle.addEventListener('mouseleave', ()=>{
    containerEle.classList.remove("active-left")
})

rightEle.addEventListener('mouseenter', () => {
    containerEle.classList.add("active-right")
})

rightEle.addEventListener('mouseleave', () => {
    containerEle.classList.remove("active-right")
})