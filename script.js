document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const roleInputs = document.querySelectorAll('input[name="role"]');
//   const rememberMeCheckbox = document.getElementById('rememberMe');
  const messageDisplay = document.getElementById('message');

  usernameInput.addEventListener('input', () => {
      console.log('Username:', usernameInput.value);
  });

  passwordInput.addEventListener('input', () => {
      console.log('Password:', passwordInput.value);
  });

  roleInputs.forEach(input => {
      input.addEventListener('change', (event) => {
          console.log('Selected role:', event.target.value);
      });
  });

//   rememberMeCheckbox.addEventListener('change', () => {
//       console.log('Remember Me:', rememberMeCheckbox.checked);
//   });

  loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;
      const selectedRole = document.querySelector('input[name="role"]:checked')?.value;
    //   const rememberMe = rememberMeCheckbox.checked;

      if (!username || !password || !selectedRole) {
          messageDisplay.textContent = "Please fill out all fields and select a role!";
          return;
      }

      messageDisplay.textContent = `Welcome ${username}, you logged in as ${selectedRole}.`;
      messageDisplay.style.color = 'green';
  });
});
