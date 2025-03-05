 const scrollButtons = document.querySelectorAll(".scroll-button");
 const form = document.getElementById("registration-form");


 scrollButtons.forEach(button => {
   button.addEventListener("click", () => {
   
     form.scrollIntoView({ behavior: "smooth" });

     
     let blinkCount = 0;
     const blinkInterval = setInterval(() => {
       form.style.transition = "background-color 0.3s";
       form.style.backgroundColor = blinkCount % 2 === 0 ? "#fff" : "transparent";
       blinkCount++;

       
       if (blinkCount === 4) {
         clearInterval(blinkInterval);
         form.style.backgroundColor = "transparent"; 
       }
     }, 400); 
   });
 });


 document.addEventListener("DOMContentLoaded", () => {
    const initialHeight = window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;
  
    window.visualViewport.addEventListener("resize", () => {
      const currentHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      if (initialHeight - currentHeight > 150) {
        document.body.classList.add("keyboard-open");
      } else {
        document.body.classList.remove("keyboard-open");
      }
    });
  });

  
  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  });
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  