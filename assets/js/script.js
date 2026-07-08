/* ============================================
   KAMPALA TAKE AWAY - MAIN JAVASCRIPT
   ============================================ */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        info: '#2196F3',
        warning: '#ff9800'
    };

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px 16px',
        borderRadius: '8px',
        color: 'white',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease-out',
        fontWeight: '600',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        maxWidth: '280px',
        backgroundColor: colors[type] || colors.success
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 2600);
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    document.addEventListener('click', event => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = this.querySelector('input[placeholder="Your Name"]')?.value.trim();
        const email = this.querySelector('input[placeholder="Your Email"]')?.value.trim();
        const subject = this.querySelector('input[placeholder="Subject"]')?.value.trim();
        const message = this.querySelector('textarea[placeholder="Your Message"]')?.value.trim();

        if (!name || !email || !subject || !message) {
            showToast('Please fill in all fields', 'warning');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('Please enter a valid email', 'error');
            return;
        }

        const mailtoLink = `mailto:kampalatakeaway@yahoo.com?subject=${encodeURIComponent(`[Contact] ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        showToast('Thank you! We will get back to you soon.', 'success');
        this.reset();
    });
}

const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputs = this.querySelectorAll('input');
        const name = inputs[0]?.value.trim();
        const email = this.querySelector('input[type="email"]')?.value.trim();
        const phone = this.querySelector('input[type="tel"]')?.value.trim();
        const date = this.querySelector('input[type="date"]')?.value;
        const time = this.querySelector('input[type="time"]')?.value;
        const guests = this.querySelector('select')?.value;
        const requests = this.querySelector('textarea')?.value.trim();

        if (!name || !email || !phone || !date || !time || !guests) {
            showToast('Please fill in all required fields', 'warning');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('Please enter a valid email', 'error');
            return;
        }

        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            showToast('Please select a future date', 'warning');
            return;
        }

        const bookingMessage = [
            'TABLE BOOKING REQUEST',
            '',
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Date: ${date}`,
            `Time: ${time}`,
            `Guests: ${guests}`,
            requests ? `Special Requests: ${requests}` : ''
        ].filter(Boolean).join('\n');

        window.open(`https://wa.me/491573080272?text=${encodeURIComponent(bookingMessage)}`, '_blank');
        showToast('Booking request sent! We will confirm via WhatsApp.', 'success');
        this.reset();
    });
}

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.45s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px'
    });

    document.querySelectorAll('.menu-card, .featured-card, .review-card, .feature, .drink-card').forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.style.boxShadow = window.scrollY > 50
        ? '0 8px 22px rgba(0, 0, 0, 0.14)'
        : 'var(--shadow)';
});

document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', event => {
        if (!event.target.closest('.btn-small')) {
            const title = card.querySelector('h4')?.textContent || 'This dish';
            showToast(`${title} is a delicious choice!`, 'info');
        }
    });

    card.querySelector('.btn-small')?.addEventListener('click', () => {
        showToast('Opening WhatsApp to order...', 'success');
    });
});

document.querySelectorAll('.btn-small').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.hero-placeholder, .image-placeholder, .gallery-item, .menu-image, .featured-image').forEach(image => {
    image.style.cursor = 'pointer';

    image.addEventListener('mouseenter', () => {
        image.style.opacity = '0.9';
    });

    image.addEventListener('mouseleave', () => {
        image.style.opacity = '1';
    });
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    if (event.key.toLowerCase() === 'o') {
        window.open('https://wa.me/491573080272', '_blank');
    }
});

function updateScrollToTop() {
    let button = document.getElementById('scrollToTopBtn');

    if (!button) {
        button = document.createElement('button');
        button.id = 'scrollToTopBtn';
        button.innerHTML = '&uarr;';
        button.setAttribute('aria-label', 'Scroll to top');

        Object.assign(button.style, {
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '42px',
            height: '42px',
            backgroundColor: '#D4AF37',
            color: '#1B5E20',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'none',
            zIndex: '999',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.25s ease-out'
        });

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.body.appendChild(button);
    }

    button.style.display = window.scrollY > 300 ? 'block' : 'none';
}

window.addEventListener('scroll', updateScrollToTop);

document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.backgroundColor = 'rgba(212, 175, 55, 0.3)';
        badge.style.transform = 'scale(1.04)';
    });

    badge.addEventListener('mouseleave', () => {
        badge.style.backgroundColor = '';
        badge.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#D4AF37';
        input.style.backgroundColor = 'rgba(212, 175, 55, 0.05)';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = '#E0D5C7';
        input.style.backgroundColor = 'white';
    });
});

window.addEventListener('load', () => {
    showToast('Welcome to Kampala Take Away! Enjoy authentic Ugandan cuisine.', 'info');
});

console.log('Kampala Take Away - Interactive Website Loaded Successfully!');
