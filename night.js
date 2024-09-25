let btn =document.querySelector(".nightbtn");
let main =document.querySelector(".main");
let burger =document.querySelector(".burger");
let list =document.querySelector(".list");
let toggle=true;
let flag=true;
//night mode
btn.addEventListener('click',()=>{
        if(toggle)
        {
            btn.innerHTML='<i class="ri-sun-line"></i>';
            toggle=false;
            main.classList.add("dark");
        }
        else
        {btn.innerHTML='<i class="ri-moon-fill"></i>';
            toggle=true ;
            main.classList.remove("dark");

        }
});

burger.addEventListener('click',()=>{
        if(flag)
        {
            burger.innerHTML='<i class="ri-close-line"></i>';
            flag=false;
        }
        else{
            burger.innerHTML='<i class="ri-menu-line"></i>';
            flag=true;

        }
});