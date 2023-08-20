const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");
slide2.classList.add("hide");
const select = ()=>{
    if(slide2.classList.contains("hide")){
        slide2.classList.remove("hide");
        slide1.classList.add("hide");
    }
    else if(slide1.classList.contains("hide")){
        slide1.classList.remove("hide");
        slide2.classList.add("hide");
    }
    else{
        slide2.classList.add("hide");
    }
}

prev.forEach(item => item.addEventListener("click",select));
next.forEach(item => item.addEventListener("click",select));
    
