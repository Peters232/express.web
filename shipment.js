document.getElementById("mobile-menu").addEventListener("click", function() {

    const navbar = document.getElementById("navbar").querySelector("ul");

    navbar.classList.toggle("active");

});

const shipmentForm = document.getElementById('shipmentForm');

const shipmentTable = document.getElementById('shipmentTable').getElementsByTagName('tbody')[0];

const searchInput = document.getElementById('searchInput');

const statusFilter = document.getElementById('statusFilter');

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

// Add event listener to the shipment form

shipmentForm.addEventListener('submit', function(e) {

    e.preventDefault();

    const recipient = shipmentForm[0].value;

    const address = shipmentForm[1].value;

    const date = shipmentForm[2].value;

    const status = shipmentForm[3].value;

    const newRow = shipmentTable.insertRow();

    newRow.innerHTML = `<td>${recipient}</td><td>${address}</td><td>${date}</td><td>${status}</td>`;

    newRow.classList.add('fade-in');

    shipmentForm.reset();

});

// Search functionality

searchInput.addEventListener('keyup', filterShipments);

statusFilter.addEventListener('change', filterShipments);

function filterShipments() {

    const searchValue = searchInput.value.toLowerCase();

    const statusValue = statusFilter.value;

    for (let i = 0; i < shipmentTable.rows.length; i++) {

        const row = shipmentTable.rows[i];

        const recipient = row.cells[0].innerText.toLowerCase();

        const status = row.cells[3].innerText;

        if (recipient.includes(searchValue) && (statusValue === '' || status === statusValue)) {

            row.style.display = '';

        } else {

            row.style.display = 'none';

        }

    }

}

// Image slider functionality

function changeSlide(direction) {

    slides[currentSlide].classList.remove('active');

    currentSlide += direction;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    } else if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    slides[currentSlide].classList.add('active');

}

// Auto-slide functionality

setInterval(() => {

    changeSlide(1);

}, 5000); // Change slide every 5 seconds

// Toggle menu functionality

const toggleMenu = document.getElementById('toggleMenu');

const navLinks = document.getElementById('navLinks');

toggleMenu.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});