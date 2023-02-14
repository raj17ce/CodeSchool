// Window Scroll fixed NavBar

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// Show/Hide FAQs

const faqs = document.querySelectorAll('.faq-card');

faqs.forEach(x => {
    x.addEventListener('click', () => {
        x.classList.toggle('open');

        //change icon
        const icon = x.querySelector(".faq-icon i");

        if(icon.className == "uil uil-plus") {
            icon.className = "uil uil-minus"
        }
        else{
            icon.className = "uil uil-plus"
        }
    })
})

// Nav Bar Toggle

{
    const navbar = document.querySelector(".navbar");
    const menuOpenBtn = document.getElementById("menu-open-button");
    const nav = document.querySelector("nav");

    menuOpenBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');

        const icon = menuOpenBtn.querySelector('i');

        if(icon.className == "uil uil-bars") {
            icon.className = "uil uil-multiply"
        }
        else{
            icon.className = "uil uil-bars"
        }

        nav.classList.toggle("active");
    })
}