// Display the current year in the footer.
document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact button interaction.
    const contactButton = document.getElementById("contactBtn");

    if (contactButton) {
        contactButton.addEventListener("click", function () {
            alert(
                "Thank you for your interest in CloudSite! " +
                "Contact functionality can be added separately."
            );
        });
    }

    // Smooth scrolling for navigation links.
    const navigationLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});