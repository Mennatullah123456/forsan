let cancelIcon = document.querySelector(".cancel");
let ulMenu = document.querySelector(".links");
let icon = document.querySelector(".icon")
let toTopBtn = document.querySelector(".to-top");

icon.onclick = function(){
    ulMenu.classList.toggle("active");
}

cancelIcon.onclick = function(){
    ulMenu.classList.toggle("active");
};

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