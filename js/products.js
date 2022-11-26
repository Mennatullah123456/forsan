let cancelIcon = document.querySelector(".cancel");
let ulMenu = document.querySelector(".links");
let icon = document.querySelector(".icon")

icon.onclick = function(){
    ulMenu.classList.toggle("active");
}

cancelIcon.onclick = function(){
    ulMenu.classList.toggle("active");
};


let toTopBtn = document.querySelector(".to-top");

window.onscroll = function(){
    if(this.scrollY >= 400){
        toTopBtn.classList.add("show")
    }else{
        toTopBtn.classList.remove("show")
    }
}

toTopBtn.onclick = function(){
    window.scrollTo(0 , 0);
}

let ulMenuTwo = document.querySelector(".links-two");
let userDiv = document.querySelector(".user");

userDiv.onclick = function(){
    ulMenuTwo.classList.toggle("block");
}

let heart = document.querySelectorAll(".heart-two");
heart.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        e.target.classList.toggle('heart');
        let productEle = item.parentElement.parentElement;
        let img = productEle.querySelector('.img').src;
        console.log(img);
        let price = productEle.querySelector('.money').textContent;
        let productDetails = {
            image : img,
            price,
        }
        addToFav(productDetails);
    })
})


function addToFav(product){
    localStorage.setItem('product',JSON.stringify(product));
}



let item = `



`;