const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        const targetId = this.dataset.target;

        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });

    });
}); 