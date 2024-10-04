document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    // Check if user details are valid
    if (userDetails && userDetails.email === email && userDetails.password === password) {
        alert('Login Successful!');
        // Redirect to a welcome or dashboard page
        window.location.href = 'dash.html'; // Create this page as needed
    } else {
        alert('Invalid email or password.');
    }
});
