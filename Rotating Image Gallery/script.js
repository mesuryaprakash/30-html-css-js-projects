const imgContainerEle = document.querySelector('.image-container');
const prevEle = document.getElementById('prev');
const nextEle = document.getElementById('next');
let x= 0;
let timer;
prevEle.addEventListener("click", ()=>{
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
})

nextEle.addEventListener("click", ()=>{
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
})

function updateGallery(){
    imgContainerEle.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    },3000)
    console.log(x);
}

updateGallery();


