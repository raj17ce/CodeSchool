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