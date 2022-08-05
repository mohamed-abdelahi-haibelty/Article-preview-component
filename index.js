let shareBtn = document.querySelector(".share");
let profil = document.querySelector(".profil");
let imageSrc = ["images/icon-facebook.svg","images/icon-twitter.svg","images/icon-pinterest.svg"];
let user = document.getElementById("userId");
let shareImg = document.querySelector(".share-img");
let clickedBefore = false;
let clickedBeforeDs = false;
let active = document.querySelector(".active");


console.log(active);


shareBtn.addEventListener("click",()=>{
    let mobileSize = window.matchMedia("(max-width:599px)");
    if(mobileSize.matches){
        if(clickedBefore === false){
            let div = document.createElement("div");
            div.classList.add("active-sm");
            let share = document.createElement("h4");
            let text = document.createTextNode("SHARE");
            share.appendChild(text);
            div.appendChild(share);
            for(let i = 0; i<imageSrc.length;i++){
                let img = document.createElement("img");
                img.setAttribute("src",imageSrc[i]);
                div.appendChild(img);
            }
            profil.insertBefore(div, user);
            user.classList.add("d-sm");
            profil.classList.add("profil-active-sm");
            clickedBefore = true;
        }
        else{
            document.querySelector(".active-sm").remove();
            user.classList.remove("d-sm");
            profil.classList.remove("profil-active-sm");
            profil.style.transition = "ease 0.4s";
            clickedBefore = false;
        }
        
    }
    else{
        if(clickedBeforeDs){
            active.classList.remove("d-large");
            clickedBeforeDs = false;
        }
        else{
            active.classList.add("d-large");
            clickedBeforeDs = true;
        }
    }
})