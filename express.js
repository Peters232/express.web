const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
document.querySelector('.learn-more').addEventListener('click', function() {
    window.scrollTo({ top: document.querySelector('#services').offsetTop, behavior: 'smooth' });
});

// Animation for stats (optional)
const stats = document.querySelectorAll('.stat h3');
let hasAnimated = false;

window.addEventListener('scroll', () => {
    const sectionPos = document.querySelector('#home').offsetTop;
    if (window.scrollY >= sectionPos && !hasAnimated) {
        stats.forEach(stat => {
            let count = 0;
            const target = parseInt(stat.textContent.replace(/\D/g, ''));
            const increment = Math.ceil(target / 100);
            const interval = setInterval(() => {
                count += increment;
                stat.textContent = count + (target === 24 ? "/7" : target === 500 ? "+" : "%");
                if (count >= target) clearInterval(interval);
            }, 50);
        });
        hasAnimated = true;
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will contact you soon.');
});

document.addEventListener('DOMContentLoaded', function () {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const modal = document.getElementById('serviceModal');
    const closeModal = document.querySelector('.close');
    const serviceTitle = document.getElementById('serviceTitle');
    const serviceDescription = document.getElementById('serviceDescription');

    const serviceDetails = {
        'Express Delivery': 'Our Express Delivery ensures your time-sensitive packages reach their destination on the same day. Fast, efficient, and reliable service.',
        'Scheduled Delivery': 'With Scheduled Delivery, you choose when your package should be delivered. Perfect for regular, recurring deliveries with flexibility.',
        'Medical STAT Delivery': 'Medical STAT Delivery is designed for emergency medical shipments. We offer immediate dispatch and tracking, ensuring critical supplies arrive on time.',
        'Dedicated Fleet': 'Our Dedicated Fleet service provides you with exclusive access to a delivery team that caters specifically to your business logistics.'
    };

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const service = this.getAttribute('data-service');
            serviceTitle.textContent = service;
            serviceDescription.textContent = serviceDetails[service];
            modal.style.display = 'block';
        });
    });
    document.querySelector('.about-btn').addEventListener('click', function() {
        window.location.href = 'about-more.html';
    });
    
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
document.querySelector('#newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for subscribing! You will receive updates shortly.');
});
