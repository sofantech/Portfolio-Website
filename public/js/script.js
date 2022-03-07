let menu_btn=document.querySelector(".menu-btn");
let nav_bar=document.querySelector(".navBar");
let dark_contin=document.querySelector(".dark-sun-mode");
let dark_mode=document.querySelector("#dark-mode");
let body=document.querySelector("body");
let form=document.querySelector("#form");
let userName=document.querySelector("#userName");
let email=document.querySelector("#email");
let subject=document.querySelector("#subject");
let message=document.querySelector("#message");
let validate=false;
let home=document.querySelector("#home");
let errortxt=document.querySelector(".errortxt");

menu_btn.onclick=function () {
    // menu_btn.classList.toggle("");
    nav_bar.classList.toggle("active");
    
}

dark_contin.onclick=function () {
    body.classList.toggle("ligth");
    // home.style.background=`../images/`;
    dark_mode.classList.toggle("ri-contrast-2-line");
   
    
    
}
form.onsubmit=function (e) {
    e.preventDefault();
    email.onkeyup=()=>{checkemail()};
    function checkemail() {
        let emailpatern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        console.log(emailpatern);
        email.oukeyup=function () {
            checkemail();
            
        }
        if (!email.value.match(emailpatern)) {
            email.classList.add("error-valid");
            email.classList.remove("valid");
            errortxt.innerText="enter valid email address";
            
        }
        else
        {
            email.classList.remove("error-valid");
            email.classList.add("valid");
        }
        
    }
    
}




let section=document.querySelectorAll("section");
let navlinks=document.querySelectorAll("header .navBar ul li");
window.onscroll=function(){
    nav_bar.classList.remove('active');
    section.forEach(e=>{
        let top=window.scrollY;
        let height=e.offsetHeight;
        let offset=e.offsetTop - 150;
        let id=e.getAttribute('id');
        if(top >=offset && top <offset + height)
        {
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header .navBar li[data-hr*='+id+']').classList.add('active');

            });
        };
    });
}
var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('myInput')


// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

