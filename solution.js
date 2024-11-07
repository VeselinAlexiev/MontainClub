
// JavaScript to toggle the display of the contact section
document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact");
    const contactSection = document.getElementById("contact-section");

    contactButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle visibility of the contact section
        if (contactSection.style.display === "none" || contactSection.style.display === "") {
            contactSection.style.display = "flex"; // Show section
        } else {
            contactSection.style.display = "none"; // Hide section
        }
    });
});
