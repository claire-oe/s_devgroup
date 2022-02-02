
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


//Read More Button 
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}




//Vehicle CO2 emission calculator tab
function CO2calculator(){  
    var litres=document.getElementById("litre").value; 
    var val = document.getElementById('option').value 
            if (val == "Petrol (average biofuel blend)"){
                   var petrolemission= litres*2.19585;
                   document.getElementById('result').innerHTML = petrolemission +"  Kg of CO<sub>2</sub>";
            } else if(val == "Diesel (average biofuel blend)"){
                var petrolemission= litres*2.55956;
                document.getElementById('result').innerHTML = petrolemission +"  Kg of CO<sub>2</sub>";
                    }

    } 


//slideshow
let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;
  
  // Clear all images
  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }
  
  // Initialise slides
  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }
  
  // Show prev
  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }
  
  // Show next
  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }
  
  // Left arrow click
  arrowLeft.addEventListener("click", function() {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });
  
  // Right arrow click
  arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });
  
  startSlide();

