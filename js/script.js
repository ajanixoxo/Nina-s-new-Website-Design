// window.prompt('hello')

window.addEventListener('scroll', () => {
    document.querySelector('#nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
    document.querySelector("nav").style.transition = "400ms ease-out"
})
const swup = new Swup();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger= document.querySelector(".hamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");
  const aftNav = document.querySelector(".after-nav");
  // closeIcon.style.color = '#F3DEBA';
  function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        menu.style.display = "none";
        aftNav.style.zindex = "99"
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        menu.style.display = "block"
        // menu.style.transform = " translateY(10%)";
        // menu.style.transition = "transform 0.5s ease-in-out";
       
       
       
      }
      
     
  } 
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu); 
      
    }
   
  )
  hamburger.addEventListener("click", toggleMenu);

 const search = document.querySelector('.search')
const searchBtn = document.getElementById("search-btn");

const searchBox = document.getElementById("search-box");

const searchPro = () => {
  console.log('clicked')
  const searchpro = searchBox.value.toUpperCase();  
 const storeitems = document.getElementById("product-list");
  const productPage = document.querySelectorAll(".product-page");
  const proDetalis = storeitems.getElementsByTagName('h2');
 

  for(var i = 0; i < proDetalis.length; i++) {
    let match = productPage[i].getElementsByTagName('h2')[0];
    if(match){
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toUpperCase().indexOf(searchpro) > -1){
        productPage[i].style.display = "";
      } else {
        productPage[i].style.display = "none";
      }
    }
    else{
      if(textvalue.toUpperCase().indexOf(searchpro) < -1){
        productPage[i].style.display = "none";
      } else {
        productPage[i].style.display = "";
      }
    }
    }
  }


var swipers = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");


function openFullImg(pic){
  fullImgBox.style.display = "flex"; 
  fullImg.src = pic;
}

function closeFullImg(){
  fullImgBox.style.display = "none"

}
