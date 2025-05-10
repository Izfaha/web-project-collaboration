document.addEventListener('DOMContentLoaded', function() {
  // Get the join for free button
  const joinButton = document.querySelector('a.join-free-btn');
  
  if (joinButton) {
    joinButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Redirect to the registration page
      window.location.href = '/register';
    });
  }
  
  // Regular registration form handling (if it exists on the page)
  const registrationForm = document.getElementById('registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (validateEmail(email) && password.length >= 6) {
        registerUser(email, password);
      } else {
        alert('Please enter a valid email and password (minimum 6 characters).');
      }
    });
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function registerUser(email, password) {
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Registration successful! You can now log in.');
        // Redirect to login page
        window.location.href = '/login';
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Registration failed. Please try again later.');
    });
  }
});
