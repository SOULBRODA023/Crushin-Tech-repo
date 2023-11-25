document.addEventListener('DOMContentLoaded', function () {

  const caretDown = document.getElementById("arrowdown");
  const options = document.getElementById("options");
  let isMenuOpen = false;

  caretDown.addEventListener("click", () => {
    if (!isMenuOpen) {
      isMenuOpen = true;
      caretDown.setAttribute("src", "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg");
      options.style.display = "block";
    } else {
      isMenuOpen = false;
      caretDown.setAttribute("src", "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg");
      options.style.display = "none";
    }
  });

  let alert = document.getElementById("alert")
  alert.addEventListener("click",()=> {
  
    if (document.getElementById('modal').style.display === 'none'){
      document.getElementById('modal').style.display = 'block';
      document.getElementById('modal').focus(); 
    }
    else{
      document.getElementById('modal').style.display = 'none';
    
    }

  })

  let admin = document.getElementById("admin")
  admin.addEventListener("click", ()=>{
   if (document.getElementById('modal2').style.display ==='none'){
    document.getElementById('modal2').style.display='block';
    document.getElementById('modal2').focus();

   }
   else{
    document.getElementById('modal2').style.display = 'none'
   }
  })

 

  //get element to be clicked upon
  document.querySelectorAll('.two').forEach(function (title) {
    title.addEventListener("click", function (e) {
      const hiddenText = title.nextElementSibling;
      hiddenText.classList.toggle('top');
      hiddenText.classList.toggle('hidden__text')
    });
  });


  //ALGORITHM FOR WHEN THE BUTTON IS CHECKED 
  
  let mySvgImages = document.querySelectorAll(".mysvg");

  mySvgImages.forEach(function (eachImage) {
    eachImage.addEventListener("click", function (e) {
      eachImage.classList.add("rotate-animation");

      setTimeout(function () {
        var newImg1 = document.createElement("img");
        newImg1.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
        newImg1.classList.add("rotate-animation");
        newImg1.style.width = "24px";  // Apply the same styling as the original SVG
        newImg1.style.height = "24px";
        newImg1.style.padding = "2px";
        eachImage.parentNode.replaceChild(newImg1, eachImage);

        setTimeout(function () {
          var newImg2 = document.createElement("img");
          newImg2.src = "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
          newImg2.style.width = "24px";  // Apply the same styling as the original SVG
          newImg2.style.height = "24px";
          newImg2.style.padding = "2px";
          newImg1.parentNode.replaceChild(newImg2, newImg1);
        }, 100);

      }, 100);
    });
  });














});