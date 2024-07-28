// script.js

// Function to validate the entire form on submission
function validateForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let isValid = true;

  // Validate Full Name
  if (fullName.length < 5) {
      setInvalid('fullName', 'Name must be at least 5 characters long.');
      isValid = false;
  }

  // Validate Email
  if (!email.includes('@')) {
      setInvalid('email', 'Enter a valid email address.');
      isValid = false;
  }

  // Validate Phone Number
  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
      setInvalid('phone', 'Phone number must be 10 digits and not 123456789.');
      isValid = false;
  }

  // Validate Password
  if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
      setInvalid('password', 'Password must be at least 8 characters and not "password" or your name.');
      isValid = false;
  }

  // Validate Confirm Password
  if (password !== confirmPassword) {
      setInvalid('confirmPassword', 'Passwords do not match.');
      isValid = false;
  }

  return isValid;
}

// Function to validate individual fields on input change
function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const value = field.value;

  switch (fieldId) {
      case 'fullName':
          if (value.length >= 5) {
              setValid(fieldId);
          } else {
              setInvalid(fieldId, 'Name must be at least 5 characters long.');
          }
          break;

      case 'email':
          if (value.includes('@')) {
              setValid(fieldId);
          } else {
              setInvalid(fieldId, 'Enter a valid email address.');
          }
          break;

      case 'phone':
          if (value !== "123456789" && value.length === 10 && !isNaN(value)) {
              setValid(fieldId);
          } else {
              setInvalid(fieldId, 'Phone number must be 10 digits and not 123456789.');
          }
          break;

      case 'password':
          const fullName = document.getElementById('fullName').value;
          if (value.length >= 8 && value.toLowerCase() !== 'password' && value.toLowerCase() !== fullName.toLowerCase()) {
              setValid(fieldId);
          } else {
              setInvalid(fieldId, 'Password must be at least 8 characters and not "password" or your name.');
          }
          break;

      case 'confirmPassword':
          const password = document.getElementById('password').value;
          if (value === password) {
              setValid(fieldId);
          } else {
              setInvalid(fieldId, 'Passwords do not match.');
          }
          break;
  }
}

// Helper functions to set valid and invalid states
function setValid(fieldId) {
  const field = document.getElementById(fieldId);
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
}

function setInvalid(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.classList.remove('is-valid');
  field.classList.add('is-invalid');
  field.nextElementSibling.textContent = message;
}
