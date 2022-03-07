
let profile_details=document.querySelector(".profile-details");
let prof_img=document.querySelector("#prof_img");
let inputfile=document.querySelector("#in-file");
let changeimgbtn=document.querySelector("#changeimgbtn");
let toggle_list=document.querySelector("#toggle-list");
let toggle_icon=document.querySelector("#toggle-icon");
toggle_icon.onclick=function () {
  // menu_btn.classList.toggle("");
  toggle_list.classList.toggle("active");
  
}
profile_details.addEventListener('mouseenter',()=>{
  changeimgbtn.style.display="block";
});

profile_details.addEventListener('mouseleave',()=>{
  changeimgbtn.style.display="none";
});
inputfile.addEventListener('change',()=>{
  const chosefile=this.files[0];
  if(chosefile)
  {
    const reader=new FileReader();

    reader.addEventListener('load',()=>{
      prof_img.setAttribute('src',reader.result);
      
    });
    reader.readAsDataURL(chosefile);
  }
  
  
});

