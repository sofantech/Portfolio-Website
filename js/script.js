let menu_btn=document.querySelector(".menu-btn");
let nav_bar=document.querySelector(".navBar");
let dark_contin=document.querySelector(".dark-sun-mode");
let dark_mode=document.querySelector("#dark-mode");
let body=document.querySelector("body");
let form=document.querySelector("#form");
let userName=document.querySelector("#userName");
let email=document.querySelector("#email");
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let subject=document.querySelector("#subject");
let message=document.querySelector("#message");
let validate=false;

menu_btn.onclick=function () {
    // menu_btn.classList.toggle("");
    nav_bar.classList.toggle("active");
    
}

dark_contin.onclick=function () {
    body.classList.toggle("ligth");
    dark_mode.classList.toggle("ri-contrast-2-line");
    
    
}
form.onclick=function (e) {
    if(userName.value !=="" && email.value !="" && subject.value !=="" && message.value !=="" &  email.matches(regex))
    {
        validate =true;
    }
    if (validate ==false) {
        e.preventDefault();
        userName.classList.add("error-valid");
        
    }
}

