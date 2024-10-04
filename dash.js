document.getElementById("mobile-menu").addEventListener("click", function() {

    const navbar = document.getElementById("navbar").querySelector("ul");

    navbar.classList.toggle("active");

});

function createShipment() {

    alert('Create Shipment functionality coming soon!');

}

function trackPackage() {

    alert('Track Package functionality coming soon!');

}

function viewReports() {

    alert('View Reports functionality coming soon!');

}

function contactSupport() {

    alert('Contact Support functionality coming soon!');

}

// Chart.js integration for visual representation (using placeholder data)

const ctx = document.getElementById('orderChart').getContext('2d');

const orderChart = new Chart(ctx, {

    type: 'bar',

    data: {

        labels: ['Processed', 'Pending'],

        datasets: [{

            label: 'Order Status',

            data: [15, 7],

            backgroundColor: [

                'rgba(54, 162, 235, 0.6)',

                'rgba(255, 99, 132, 0.6)'

            ],

            borderColor: [

                'rgba(54, 162, 235, 1)',

                'rgba(255, 99, 132, 1)'

            ],

            borderWidth: 1

        }]

    },

    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: true

            }

        },

        animation: {

            duration: 1000,

            easing: 'easeInOutBounce'

        }

    }

});