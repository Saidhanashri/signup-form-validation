document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');
  
    errorMsg.textContent = ''; // Clear previous errors
  
    if (!name || !email || !password) {
      errorMsg.textContent = 'All fields are required.';
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg.textContent = 'Please enter a valid email address.';
      return;
    }
  
    if (password.length < 6) {
      errorMsg.textContent = 'Password must be at least 6 characters long.';
      return;
    }
  
    alert('Form submitted successfully!');
  });
  
