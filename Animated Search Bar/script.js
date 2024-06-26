const searchBarEle = document.querySelector('.search-bar-container');

const magnifierEle = document.querySelector('.magnifier');

magnifierEle.addEventListener("click", ()=>{
    searchBarEle.classList.toggle('active');
})