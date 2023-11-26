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
  alert.addEventListener("click", () => {

    if (document.getElementById('modal').style.display === 'none') {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('modal').focus();
    }
    else {
      document.getElementById('modal').style.display = 'none';

    }

  })

  let admin = document.getElementById("admin")
  admin.addEventListener("click", () => {
    if (document.getElementById('modal2').style.display === 'none') {
      document.getElementById('modal2').style.display = 'block';
      document.getElementById('modal2').focus();

    }
    else {
      document.getElementById('modal2').style.display = 'none'
    }
  })



  //get element to be clicked upon
  document.querySelectorAll('.toggle__hidden').forEach(function (title) {
    title.addEventListener("click", function (e) {
      const hiddenText = title.nextElementSibling;

      // Toggle classes
      hiddenText.classList.toggle('tops');
      hiddenText.classList.toggle('hidden__text');

      // Check if the div contains the 'top' class
      const hasTopClass = hiddenText.classList.contains('tops');

      // Update background color based on the presence of 'top' class
      title.closest('.wrapper').style.backgroundColor = hasTopClass ? '#F3F3F3' : '';

      // Additional logic if needed when 'top' class is present
      if (hasTopClass) {

      }
    });
  });



  //ALGORITHM FOR WHEN THE BUTTON IS CHECKED 
  let mySvgImages = document.querySelectorAll(".dashed");
  let rangeInput = document.querySelector("input[type='range']");
  let progressText = document.getElementById("progressText");

  mySvgImages.forEach(function (eachImage, index) {
    eachImage.addEventListener("click", function (e) {
      // Check if the image is already checked
      if (eachImage.src === "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg") {
        // Hide the current hidden text container
        const currentHiddenText = eachImage.closest('.wrapper').querySelector('.hidden__text');
        currentHiddenText.style.display = 'none';

        // Reset the image to its original state
        eachImage.src = "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
        eachImage.classList.remove("rotate-animation");
      } else {
        eachImage.classList.add("rotate-animation");

        setTimeout(function () {
          var newImg1 = document.createElement("img");
          newImg1.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
          newImg1.classList.add("rotate-animation");
          newImg1.classList.add("dashed");
          eachImage.parentNode.replaceChild(newImg1, eachImage);

          setTimeout(function () {
            var newImg2 = document.createElement("img");
            newImg2.src = "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
            newImg1.parentNode.replaceChild(newImg2, newImg1);

            // Update the range value
            rangeInput.value = index + 2;
            progressText.textContent = `${index + 1}/${mySvgImages.length} completed`;


            // Show the next hidden text container
            const nextHiddenText = newImg2.closest('.wrapper').querySelector('.hidden__text');
            nextHiddenText.style.display = 'block';
          }, 100);

        }, 100);
      }
    });
  });

  let moreInfo = document.getElementById("more__info")
  let plan = document.getElementById("closebutton")
  plan.addEventListener("click", () => {
    if (moreInfo.style.display === "block") {
      moreInfo.style.display = "none"
    }
    else {
      moreInfo.style.display = "block"
    }
  })


});