// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about, .education, .experience, .portfolio, .blog, .contact');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', formObject);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Future: Consultation Booking Form Handler
/*
const consultationForm = document.querySelector('#consultation form');
if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const bookingData = {};
        formData.forEach((value, key) => {
            bookingData[key] = value;
        });
        
        // Validate booking data
        if (!bookingData.date || !bookingData.time) {
            alert('Please select both date and time for your consultation.');
            return;
        }
        
        // Here you would integrate with a booking system
        console.log('Consultation booked:', bookingData);
        
        alert('Your consultation has been booked! You will receive a confirmation email shortly.');
        this.reset();
    });
}
*/

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Typing Effect for Hero Section (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Future: Client Portal Integration
/*
function initializeClientPortal() {
    // This would integrate with a secure client portal system
    const portalLogin = document.getElementById('client-portal-login');
    
    if (portalLogin) {
        portalLogin.addEventListener('click', () => {
            // Redirect to secure client portal
            window.location.href = '/client-portal';
        });
    }
}
*/

// Future: Live Chat Integration
/*
function initializeLiveChat() {
    // Integration with live chat services like Tawk.to or Intercom
    const chatButton = document.getElementById('live-chat');
    
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            // Open chat widget
            if (window.Tawk_API) {
                window.Tawk_API.toggle();
            }
        });
    }
}
*/

// Future: Payment Integration for Consultation Fees
/*
function initializePaymentGateway() {
    // Integration with payment gateways like Razorpay for Indian market
    const paymentButtons = document.querySelectorAll('.payment-btn');
    
    paymentButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const amount = button.getAttribute('data-amount');
            const options = {
                key: 'your_razorpay_key',
                amount: amount * 100, // Amount in paise
                currency: 'INR',
                name: 'Legal Consultation',
                description: 'Legal Consultation Fee',
                handler: function(response) {
                    // Handle successful payment
                    console.log('Payment successful:', response);
                    alert('Payment successful! Your consultation is confirmed.');
                }
            };
            
            const rzp = new Razorpay(options);
            rzp.open();
        });
    });
}
*/

// Performance Optimization: Lazy Loading for Images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Search Functionality for Blog Posts (Future Enhancement)
/*
function initializeBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const blogPosts = document.querySelectorAll('.blog-card');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            blogPosts.forEach(post => {
                const title = post.querySelector('h3').textContent.toLowerCase();
                const content = post.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
}
*/
