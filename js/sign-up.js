let firPassword = document.getElementById("fir-password");
let lasPassword = document.getElementById("las-password");
let submit = document.getElementById("submit");

let fun = function(){
    let firLi = document.getElementById("fir-li");
    if(firPassword.value.length > 7){
        firLi.style.cssText = "color: green !important;"
    }
    console.log(firPassword.value)
    if(firPassword.value.length > 7 && firPassword.value === lasPassword.value){
        submit.disabled = false;
        submit.style.cssText = "background-color: #278b80;"
    }else{
        submit.disabled = true;
    }
}

firPassword.addEventListener("input" , fun)
lasPassword.addEventListener("input" , fun)