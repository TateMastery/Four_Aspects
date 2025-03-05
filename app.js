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