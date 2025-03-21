document.addEventListener("DOMContentLoaded", function() {
    // 📌 Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show"); // Show/hide menu
    });

    // 📌 Cart Counter Update
    let cartCount = 0;
    const cartElement = document.getElementById("cart");
    const addToCartButtons = document.querySelectorAll(".btn");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            cartCount++; // Increase count when button is clicked
            cartElement.textContent = `Cart (${cartCount})`; // Update cart display
        });
    });
});