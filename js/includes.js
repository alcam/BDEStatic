// Function to include HTML components
async function includeHTML() {
    // Include header
    const headerElement = document.querySelector('[data-include="header"]');
    if (headerElement) {
        try {
            const response = await fetch('/components/header.html');
            const html = await response.text();
            headerElement.innerHTML = html;
            
            // Initialize mobile menu after header is loaded
            initializeMobileMenu();
            
            // Highlight current page in navigation
            highlightCurrentPage();
        } catch (error) {
            console.error('Error loading header:', error);
        }
    }

    // Include footer
    const footerElement = document.querySelector('[data-include="footer"]');
    if (footerElement) {
        try {
            const response = await fetch('/components/footer.html');
            const html = await response.text();
            footerElement.innerHTML = html;
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }
}

// Function to initialize mobile menu
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Function to highlight current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.remove('text-bde-brown');
            link.classList.add('text-bde-orange');
        }
    });
}

// Call includeHTML when the document is loaded
document.addEventListener('DOMContentLoaded', includeHTML); 