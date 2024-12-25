document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');

    mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navList.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggle) {
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Navigation Indicator
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');

    function handleIndicator(el) {
        items.forEach(item => {
            item.classList.remove('is-active');
            item.style.color = '';
        });

        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.backgroundColor = el.getAttribute('active-color');

        el.classList.add('is-active');
        el.style.color = el.getAttribute('active-color');
    }

    items.forEach((item) => {
        item.addEventListener('click', (e) => handleIndicator(e.target));
    });

    // Form Validation
    const form = document.querySelector('form');
    const nameInput = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const errorNodes = document.querySelectorAll(".error");

    function validateForm() {
        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === "") {
            errorNodes[0].innerText = "Name cannot be blank";
            nameInput.classList.add("error-border");
            isValid = false;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorNodes[1].innerText = "Invalid email address";
            email.classList.add("error-border");
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully');
            // Add form submission logic
        }
    });
});
