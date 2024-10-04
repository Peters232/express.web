// Save and load profile name and picture using localStorage
window.onload = function() {
    // Load stored profile name and picture on page load
    document.getElementById('username').innerText = localStorage.getItem('profileName') || 'John Doe';
    const storedPic = localStorage.getItem('profilePic');
    if (storedPic) {
        document.getElementById('profilePic').src = storedPic;
    } else {
        document.getElementById('profilePic').src = 'default-profile.jpg'; // Set default picture
    }

    // Handle image upload and store it in localStorage
    document.getElementById('uploadPic').addEventListener('change', function(event) {
        const reader = new FileReader();
        reader.onload = function() {
            const imageData = reader.result;
            document.getElementById('profilePic').src = imageData;
            localStorage.setItem('profilePic', imageData); // Store image data in localStorage
        }
        reader.readAsDataURL(event.target.files[0]);
    });
};

// Edit profile
function editProfile() {
    const newName = prompt('Enter your new name:', document.getElementById('username').innerText);
    if (newName) {
        document.getElementById('username').innerText = newName;
    }
}

// Save profile
function saveProfile() {
    const profileName = document.getElementById('username').innerText;
    localStorage.setItem('profileName', profileName);
    alert('Profile saved successfully!');
}
