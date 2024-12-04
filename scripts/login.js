function validateLogin() {
        const email = document.getElementById('workEmail').value;
        const password = document.getElementById('password').value;

        // Check if the email contains "@" and the password is not empty
        if (email.includes('@') && password) {
            // Redirect to main.html
            window.location.href = 'main.html';
        } else {
            // Alert the user about invalid input
            alert('Please enter a valid email with "@" and a non-empty password.');
        }
    }
