const scrollButtons = document.querySelectorAll(".scroll-button");
const form = document.getElementById("registration-form");

scrollButtons.forEach((button) => {
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
  const initialHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  window.visualViewport.addEventListener("resize", () => {
    const currentHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    if (initialHeight - currentHeight > 150) {
      document.body.classList.add("keyboard-fixed");
      document.querySelector(".app-container").scrollTop = 0;
    } else {
      document.body.classList.remove("keyboard-fixed");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerHeight < 500) {
    document.body.style.paddingBottom = "200px";
  } else {
    document.body.style.paddingBottom = "0px";
  }
});

document.querySelector("input").addEventListener("focus", function () {
  this.scrollIntoView({ behavior: "smooth", block: "center" });
});

const languageSelector = document.getElementById("language-selector");
const ruElements = document.querySelectorAll(".ru");
const uzElements = document.querySelectorAll(".uz");

languageSelector.addEventListener("change", () => {
  const selectedLanguage = languageSelector.value;

  if (selectedLanguage === "ru") {
    toggleLanguage(ruElements, uzElements);
  } else if (selectedLanguage === "uz") {
    toggleLanguage(uzElements, ruElements);
  }
});

function toggleLanguage(showElements, hideElements) {
  showElements.forEach((el) => (el.style.display = "block"));
  hideElements.forEach((el) => (el.style.display = "none"));
}

const nameRu = document.getElementById("name-ru");
const nameUz = document.getElementById("name-uz");
const numberRu = document.getElementById("number-ru");
const numberUz = document.getElementById("number-uz");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUzbek = document.querySelector(".uz").style.display !== "none";

  if (isUzbek) {
    nameRu.removeAttribute("required");
    numberRu.removeAttribute("required");
    nameUz.setAttribute("required", "required");
    numberUz.setAttribute("required", "required");
  } else {
    nameUz.removeAttribute("required");
    numberUz.removeAttribute("required");
    nameRu.setAttribute("required", "required");
    numberRu.setAttribute("required", "required");
  }

  const name = isUzbek ? nameUz.value : nameRu.value;
  const number = isUzbek ? numberUz.value : numberRu.value;

  if (!name || !number) {
    alert("Заполните все поля!");
    return;
  }

  const newUserRef = ref(database, "users/" + Date.now());
  set(newUserRef, { name, number })
    .then(() => {
      alert("Ваши данные успешно отправлены!");
      form.reset();
    })
    .catch((error) => {
      alert("Ошибка при отправке данных: " + error.message);
    });
});
