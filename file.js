
const mainContOne = document.querySelector('#main-container--one');
const sliders = document.querySelectorAll('.slider-container');

// function is800pxMax() {
//   return window.matchMedia('(max-width: 800px)').matches;
// }



const html =`
<div class='html'>
<div class="left"></div>
<div class="right"></div>
</div>
`

const screenWidth = window.innerWidth;
if (screenWidth <= 800) {

  document.querySelector('#slider--1').insertAdjacentHTML('afterend', html) 
  
  
  
  }




mainContOne.addEventListener('click', function (e){

    const clicked = e.target.closest('.slider-container');
    const notClicked = Array.from(sliders).filter(s => s !== clicked);
    const isActive = clicked.classList.contains('slider-container-transformed');
    if(!isActive || screenWidth <= 800 ){
    createSlider(clicked, 3000);
   
   


    notClicked.forEach(slider => {
        slider.style.filter = 'brightness(0.2)';
        stopSlider(slider);   
    
    });
    document.querySelector('.html').style.opacity = '0'; // Remove the dynamically inserted HTML

    }
})



  


document.addEventListener('click', function (e){
    
    const clicked = e.target.closest('.slider-container');
    if (!clicked  ){

      sliders.forEach(slider => {
      slider.style.filter = 'brightness(1)';
     
   
      slider.classList.add("slider-smooth-transition");
      slider.classList.remove('slider-container-transformed');
      stopSlider(slider)
     
      })
      document.querySelector('.html').style.opacity = '1';

    }
   
    
})



function stopSlider(slider) {
  let intervalId = slider.dataset.intervalId;
  clearInterval(intervalId);
  slider.dataset.intervalId = null;
  slider.classList.remove('slider-container-transformed');
  slider.classList.add("slider-container-darken");
  slider.classList.add("slider-smooth-transition");


}


function createSlider(slider, time) {
  
      let currentIndex = 0;
      const intervalId = setInterval(nextSlide, time);
     
  
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
      slider.style.filter = 'brightness(1)';
 
     
  
      }







      let currentSlide = 0;
      const slides = document.querySelectorAll('.slider-container');
      
      function showSlide(n) {
        slides.forEach((slide, index) => {
          if (index === n ) {
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
  
 



  



  
 


