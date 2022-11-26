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