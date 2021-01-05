const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('.nav_ul');
const navLi = document.querySelectorAll('.cta_links');

// Toggle On & Off Nav
function btnClick() {
    hamburgerBtn.classList.toggle('close');
    hamburgerBtn.classList.toggle('open');
    nav.classList.toggle('site-nav-open');
}

// Btn EventListener
hamburgerBtn.addEventListener("click", () => {
    btnClick();
});

// Close Nav When Click On Menu "li a"
for(let i = 0; i < navLi.length; i++) {
    navLi[i].onclick = () => {
        btnClick();
    }
}