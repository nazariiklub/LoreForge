// змінні для обєктів з html через id
const toggle = document.getElementById("toggle");
const newButton = document.getElementById("new-btn");
const closeBtn = document.getElementById('close-btn');
const sing = document.getElementById("sing-up")
const create = document.getElementById("create-account-btn")
const signText = document.getElementById("sign-text")
const subscribeForm = document.getElementById("subscribe-form");
const overlay = document.getElementById("overlay")
const worldinfo = document.getElementById("world")
const worldbtn = document.getElementById("box")
const racesbtn = document.getElementById("box2");
const boxes = document.querySelectorAll('[id^="box"]');
const pages = document.querySelectorAll('.page');
// робить мторінку "світ" по дефолту відкритою
document.addEventListener("DOMContentLoaded", () => {
    worldbtn.classList.add("active"); 
    pages[0].classList.add("active"); 
});


// перемикач теми
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
// висвітлює повідомлення
newButton.addEventListener("click", () => {
    document.body.classList.toggle("importnt");
});
// прибирає повідомлення
closeBtn.addEventListener('click', function() {
    const elements = document.querySelectorAll('.importnt');
    elements.forEach(function(element) {
        element.classList.remove('importnt');
    });
});
// додає сторінку входу
sing.addEventListener("click", ()=>{
    document.body.classList.toggle("sing");
});
// змінює текст в кнопці на введений в формі
create.addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    if (firstName && lastName) {
      signText.textContent = `${firstName} ${lastName}`;
    }
    document.body.classList.remove("sing");
});
// не перезавантажує сайт після відправки пошти, повідомляє про розсилку
subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = subscribeForm.querySelector('input[type="email"]').value;
    if (email) {
        alert(`Підписка на розсилку для ${email} успішно виконана!`);
        overlay.style.display = "none";
    }
});

// перемикання між боксами(кнопками з інформацією)
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const pageToShow = pages[index];
        if (pageToShow) {
            pageToShow.classList.add('active');
        }
    });
});