/*===================================================== nav bar ===========================================================================*/

function togglecheck() {
    var screenWidth = window.innerWidth;
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
  
    if (screenWidth > 900) {
      menuList.style.display = "none";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    togglecheck(); 
  });
  
  window.addEventListener("resize", function() {
    togglecheck(); 
  });
  
  
  function toggleMenu() {
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
    if (menuList.style.display === "none") {
      menuList.style.display = "block";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "block";
      }
    } else {
      menuList.style.display = "none";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
      }
    }
  }
  
  function Menuoff() {
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
    if (menuList.style.display === "block") {
      menuList.style.display = "none";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
      }
    }
  }

  

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom <= 0 || 
      rect.top >= window.innerHeight || 
      rect.right <= 0 || 
      rect.left >= window.innerWidth
    );
  }
  
  function handleScroll() {
    const elements = document.querySelectorAll('.abt_me_2, .serviceimg, .revimg, .map-container');

    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('zoomanimation');
        element.classList.remove('zoomanimation');
        element.style.visibility = 'visible';
      } else {
        element.classList.remove('zoomanimation');
        element.classList.add('zoomanimation');
      }
    });

  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);