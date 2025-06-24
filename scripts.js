
function validateForm(form) {
    let valid = true;
    let messages = [];

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    if (name && name.value.trim() === '') {
        valid = false;
        messages.push('Name is required.');
    }

    if (email) {
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            valid = false;
            messages.push('Email is required.');
        } else if (!emailPattern.test(emailValue)) {
            valid = false;
            messages.push('Please enter a valid email address.');
        }
    }

    if (message && message.value.trim() === '') {
        valid = false;
        messages.push('Message is required.');
    }

    return { valid, messages };
}
// Toggle navigation menu visibility on hamburger icon click
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
    });
    // Optional: Hide nav when clicking outside
    document.addEventListener('click', function(e) {
        if (
            window.innerWidth <= 900 &&
            !hamburger.contains(e.target) &&
            !navUl.contains(e.target)
        ) {
            navUl.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple gallery modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = 0;
            modal.style.left = 0;
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.background = 'rgba(0,0,0,0.7)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = 1000;
            modal.innerHTML = `
                <div style="background:#fff;padding:2rem 3rem;border-radius:12px;max-width:90vw;max-height:80vh;overflow:auto;position:relative;">
                    <span style="position:absolute;top:10px;right:18px;font-size:2rem;cursor:pointer;color:#4e54c8;" id="close-modal">&times;</span>
                    <h3>${this.textContent}</h3>
                    <p>Project details and images can go here.</p>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector('#close-modal').onclick = () => modal.remove();
            modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        });
    });

    // Contact form feedback
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out! I will get back to you soon.');
            form.reset();
        });
    }
});