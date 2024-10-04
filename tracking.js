document.getElementById("mobile-menu").addEventListener("click", function() {

    const navbar = document.getElementById("navbar").querySelector("ul");

    navbar.classList.toggle("active");

});
function trackPackage() {

    const trackingNumber = document.getElementById('trackingNumber').value;

    const tableBody = document.querySelector('#historyTable tbody');

    if (trackingNumber) {

        const trackingHistory = [

            { date: '2024-10-01', location: 'New York', status: 'In Transit' },

            { date: '2024-10-03', location: 'Chicago', status: 'Out for Delivery' }

        ];

        tableBody.innerHTML = '';

        trackingHistory.forEach(item => {

            const row = `<tr>

                            <td>${item.date}</td>

                            <td>${item.location}</td>

                            <td>${item.status}</td>

                         </tr>`;

            tableBody.innerHTML += row;

        });

        document.getElementById('trackingLink').value = `https://e-express.com/track/${trackingNumber}`;

    } else {

        alert('Please enter a tracking number');

    }

}

function shareLink() {

    const link = document.getElementById('trackingLink');

    link.select();

    document.execCommand('copy');

    alert('Tracking link copied!');

}

// Google Maps integration

function initMap() {

    const map = new google.maps.Map(document.getElementById('map'), {

        center: { lat: 40.7128, lng: -74.0060 },

        zoom: 10

    });

}

window.onload = function() {

    initMap();

}