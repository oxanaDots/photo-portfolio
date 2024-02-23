

function play(){
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(function(slider){
    const playBtn = slider.querySelector('.play-button');
    const pauseBtn = slider.querySelector('.pause-button');

    slider.addEventListener('mouseenter', function(){
  playBtn.style.opacity = '0.5'
  pauseBtn.style.opacity = '0' 
  })
  
  slider.addEventListener('mouseleave', function() {
    playBtn.style.opacity = '0';
    pauseBtn.style.opacity = '0' 
  });
  
  })
};



function noBtn (){
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(function(slider){
    const playBtn = slider.querySelector('.play-button');
    const pauseBtn = slider.querySelector('.pause-button');

    slider.addEventListener('mouseenter', function(){
  playBtn.style.opacity = '0'
  pauseBtn.style.opacity = '0' 
  })
  
  slider.addEventListener('mouseleave', function() {
    playBtn.style.opacity = '0';
    pauseBtn.style.opacity = '0' 
  });
  
  })
};





function pause(){
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(function(slider){
    const playBtn = slider.querySelector('.play-button');
    const pauseBtn = slider.querySelector('.pause-button');

    slider.addEventListener('mouseenter', function(){
      playBtn.style.opacity = '0'
      pauseBtn.style.opacity = '0.5' 
      })
  
  slider.addEventListener('mouseleave', function() {
    playBtn.style.opacity = '0';
    pauseBtn.style.opacity = '0' 
  });
  
  })
};



function createSlider(sliderId) {
  
  const slider = document.getElementById(sliderId); //here sliderId is a parameter

  if (slider) {
   
    let currentIndex = 0;
    const intervalId = setInterval(nextSlide, 3000);
   

    function nextSlide() {
    

      currentIndex = (currentIndex + 1) % slider.children[0].children.length;
      updateSlider();
    }

    function updateSlider() {
      const translateValue = -currentIndex * 100 + '%';
      slider.children[0].style.transform = 'translateX(' + translateValue + ')';
    }
    
    // Store interval in dataset
    slider.dataset.intervalId = intervalId;

   
    slider.classList.add('slider-container-transformed');
    slider.classList.remove("slider-container-darken");
   



    }
    isSlideshowActive = true;
}



    
// slider.addEventListener('click', () => {

//   if(isSlideshowActive) {
//   clearInterval(intervalId);
//   play();
//   isSlideshowActive = false;
//   } 
// })

let isSlideshowActive = false;

// Iterate over all elements with the class "slider-container2" and an id starting with "slider--"
const sliderContainers = document.querySelectorAll('.slider-container[id^="slider--"]');
sliderContainers.forEach(sliderContainer => {
  sliderContainer.addEventListener('click', () => {
    if(!isSlideshowActive){

    const sliderId = sliderContainer.id;
    createSlider(sliderId);
    stopOtherSliders(sliderId);
  
    
    }
  })
 
  });


// Create a function to stop sliding for all sliders except the specified one
function stopOtherSliders(currentSliderId) {
  const allSliders = document.querySelectorAll('.slider-container[id^="slider--"]');
  allSliders.forEach(slider => {
    const intervalId = slider.dataset.intervalId;
    const isClicked = slider.classList.contains('slider-container-transformed');
   


    if (slider.id !== currentSliderId && intervalId || !isClicked) {
    
     
      clearInterval(intervalId);
      slider.dataset.intervalId = null;
      slider.classList.remove('slider-container-transformed');
      slider.classList.add("slider-container-darken");
     

    } else {

 
  
    }

  });
  
  
}


function stopSlider(slider) {
  const intervalId = slider.dataset.intervalId;
  clearInterval(intervalId);
  slider.dataset.intervalId = null;
  slider.classList.remove('slider-container-transformed');
  slider.classList.remove("slider-container-darken");
  slider.classList.add("slider-smooth-transition");

  isSlideshowActive = false; 
  // play();
}



  

  
// Add a click event listener to the document to stop all sliders when clicked outside of sliders

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const isSlider = clickedElement.closest('.slider-container[id^="slider--"]');
  if (!isSlider) {
    sliderContainers.forEach(sliderContainer => {
      stopSlider(sliderContainer);
    });
   
  }
});
 
  






let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container');

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.right').addEventListener('click', nextSlide);
document.querySelector('.left').addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentSlide);








  



  
 


function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  // Toggle the 'is-active' class
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
   mobileNav.classList.toggle('show');
  })
}
toggleMenu();