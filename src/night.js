let btn =document.querySelector(".nightbtn");
let main =document.querySelector(".main");
let toggle=true;
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