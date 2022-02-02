document.addEventListener('DOMContentLoaded', function() {

    var wrap1 = document.getElementById("img_wrap_1");
    var description1 = document.getElementById("img_description_1");
    var img1 = document.getElementById("img_img_1")
    
    wrap1.onmouseover = function(){
        description1.style.display = "block";
        img1.style.display = "none";
      }
    wrap1.onmouseout = function(){
        description1.style.display = "none";
        img1.style.display = "block";
      }

    var wrap2 = document.getElementById("img_wrap_2");
    var description2 = document.getElementById("img_description_2");
    var img2 = document.getElementById("img_img_2")
      
    wrap2.onmouseover = function(){
          description2.style.display = "block";
          img2.style.display = "none";
        }
    wrap2.onmouseout = function(){
          description2.style.display = "none";
          img2.style.display = "block";
        }
    
    var wrap3 = document.getElementById("img_wrap_3");
    var description3 = document.getElementById("img_description_3");
    var img3 = document.getElementById("img_img_3")
    
    wrap3.onmouseover = function(){
        description3.style.display = "block";
        img3.style.display = "none";
      }
    wrap3.onmouseout = function(){
        description3.style.display = "none";
        img3.style.display = "block";
      }
  
//    })
})