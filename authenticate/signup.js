document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Password pattern validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    // Validate required fields
    if (!fullName || !email || !username || !password || !confirmPassword) {
        alert('All fields are required.');
        return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password format
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Store user data (for testing)
    localStorage.setItem('user', JSON.stringify({ fullName, email, username }));

    // Redirect to login page after successful signup
    alert('Signup successful! Redirecting to login page...');
    window.location.href = './login.html';
});
