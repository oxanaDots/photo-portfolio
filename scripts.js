



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

// document.querySelector('.right').addEventListener('click', nextSlide);
// document.querySelector('.left').addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentSlide);



      
function is800pxMax() {
  // Check if the viewport matches the media query for 800px maximum width
  return window.matchMedia('(max-width: 800px)').matches;
}

// Example usage:
if (is800pxMax()) {
  // Execute code if viewport width is 800px or less

document.querySelector('#slider--1').insertAdjacentHTML('afterend', html) 

// Add event listener to the parent element using event delegation


}





const container = document.querySelector('.html');

container.addEventListener('click', function(event) {
const target = event.target;

// Check if the clicked element has the class 'left' or 'right'
if (target.classList.contains('left')) {

  console.log(target)
  prevSlide(currentSlide)
} else if (target.classList.contains('right')) {
 nextSlide(currentSlide)
}
});





  



  
 

