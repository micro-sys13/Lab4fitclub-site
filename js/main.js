document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".scroll-top");

    if (scrollButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 350) {
                scrollButton.classList.add("show");
            } else {
                scrollButton.classList.remove("show");
            }
        });

        scrollButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const forms = document.querySelectorAll(".needs-validation");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add("was-validated");
            }
        });
    });
});
