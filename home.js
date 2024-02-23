
// function createSlider(sliderId) {

//     const slider = document.getElementById(sliderId);
    
//     if(slider) {
    
//     let currentIndex = 0;
    
//     const intervalId = setInterval(nextSlide, 2000);
    
//     function nextSlide() {
//         currentIndex = (currentIndex += 1) % slider.children[0].children.length;
        
//         updateSlider();
    
//     }
    
//     function updateSlider(){
        
//         const translateValue = -currentIndex * 100 + '%';
//         slider.children[0].style.transform = 'translateX(' + translateValue + ')';
        
//     }
//     //store interval in datasel
//     slider.dataset.intervalId = intervalId;
    
//     }
//     }
    
//     function handleIntersection(entries, observer) {
//         entries.forEach(entry => {
//           const sliderId = entry.target.id;  // extracts the id of the target element
//           if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
//             createSlider(sliderId);
//            // observer.unobserve(entry.target); // Stop observing once the slider is created
//           } else {
//             stopSlider(sliderId);
//           }
//         });
//       }
    
    
      
//       // Create a function to stop sliding
//     function stopSlider(sliderId) {
//         const slider = document.getElementById(sliderId);
//         if (slider) {
//             const intervalId = slider.dataset.intervalId;  //This is the ID returned by the setInterval function 
//                                                           //when you start the slider. It uniquely identifies 
//                                                          //the interval and is stored in the dataset.
//             if (intervalId) {
//                 clearInterval(intervalId);
//                 // Optionally, reset the interval ID stored in the dataset
//                 slider.dataset.intervalId = null;
//             }
//         }
//     }
    
//       const sliderIds = ['slider1', 'slider2', 'slider3', 'slider4', 'slider5', 'slider6'];
    
//       sliderIds.forEach(sliderId => {
//         const slider = document.getElementById(sliderId);
    
//         if (slider) {
//           const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });
//           observer.observe(slider);
//         }
//       });
    
    
const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
}

function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

// Change slide every 2 seconds (adjust the interval as needed)
setInterval(nextSlide, 2000);
    
});
    
     



    
    // const hoverElements = document.querySelectorAll(".hover");
    //     // Add an event listener for the 'mouseenter' event
    //     hoverElements.forEach(element => {
    //       element.addEventListener("mouseenter", () => {
    //         element.classList.add("hovered");
    //       });
    
    //         element.addEventListener("mouseleave", () => {
    //            element.classList.remove("hovered");
    //         });
    //     });
      

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





// const sliderTwo = document.getElementById('slider2');

// const sliderThree = document.getElementById('slider3');

//       if (window.innerWidth <= 800) {
//       sliderTwo.remove();
//       sliderThree.remove();
//     }



document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.main-title');
    const arrowUp = document.querySelector('.up');
    const arrowDown = document.querySelector('.down');
    const about = document.querySelector('.about');
    function handleScroll (){
        const isAtBottom = container.scrollTop + container.offsetHeight >= container.scrollHeight;
        const isAtTop = container.scrollTop === 0;
        const quaterwayPoint = container.scrollTop + container.offsetHeight / 3;
        const isAtquaterScreen = quaterwayPoint >= container.scrollHeight / 3;
   

        if (isAtBottom){



            console.log('bottom')
            arrowUp.style.opacity = '1';
            arrowDown.style.opacity = '0';
           
            
        } else if (isAtTop){
           about.style.opacity = '0';
            arrowUp.style.opacity = '0';
            arrowDown.style.opacity = '1';

        } else if(isAtquaterScreen){
            about.style.opacity = '1';
        }

        
       }

      
        container.addEventListener('scroll', handleScroll);
   });