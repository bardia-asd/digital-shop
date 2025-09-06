// Select mobile menu button and navigation elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

// Toggle mobile navigation and icons on button click
if (mobileMenuBtn && mobileNav && menuIcon && closeIcon) {
    mobileMenuBtn.addEventListener("click", () => {
        // Check if mobile nav is currently open
        const isOpen = !mobileNav.classList.contains("hidden");
        if (isOpen) {
            // Hide mobile nav and show menu icon
            mobileNav.classList.add("hidden");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        } else {
            // Show mobile nav and show close icon
            mobileNav.classList.remove("hidden");
            menuIcon.classList.add("hidden");
            closeIcon.classList.remove("hidden");
        }
    });
}
