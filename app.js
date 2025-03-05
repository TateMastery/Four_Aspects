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
  let scrollY = 0;
  const initialHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  window.visualViewport.addEventListener("resize", () => {
    const currentHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    if (initialHeight - currentHeight > 150) {
      scrollY = window.scrollY;
      document.body.classList.add("keyboard-fixed");
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      document.body.classList.remove("keyboard-fixed");
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }
  });
});
