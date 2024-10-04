document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation
    if (fullname && email && password && confirmPassword) {
        if (password === confirmPassword) {
            const userDetails = {
                fullname: fullname,
                email: email,
                password: password
            };

            // Save user details in local storage
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            alert('Sign Up Successful! You can now log in.');

            // Redirect to login page
            window.location.href = 'login.html';
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});
