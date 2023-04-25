window.addEventListener('scroll', () => {
    document.querySelector('#nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
    document.querySelector("nav").style.transition = "400ms ease-out"
})


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
      
     
  } menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu); 
      
    }
   
  )
  hamburger.addEventListener("click", toggleMenu);

 const search = document.querySelector('.search')
const searchBtn = document.getElementById("search-btn");
const searchBtn2 = document.getElementById("search-btn2");
const searchBox = document.getElementById("search-box");
searchBtn.onclick = function() {
   
   searchBox.style.display= "flex";
   searchBtn.style.display="none";
   searchBtn2.style.display="flex";
}
searchBtn2.onclick = function() {
  searchBox.style.display = "none";
  searchBtn.style.display = "flex"
  searchBtn2.style.display = "none"

  
}