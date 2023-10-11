document.addEventListener("DOMContentLoaded", function () {
    const validEmail = "bjarteeoliversenloken@noroff.no";
    const validPassword = "oWiiHoo17h543gggg";
  
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const loginButton = document.querySelector("button.btn-success");
  
    const emailErrorMessage = document.getElementById("emailErrorMessage");
    const passwordErrorMessage = document.getElementById("passwordErrorMessage");
  
    loginButton.addEventListener("click", function () {
      const enteredEmail = emailInput.value;
      const enteredPassword = passwordInput.value;
  
      let isEmailValid = false;
      let isPasswordValid = false;
  
      if (enteredEmail === validEmail) {
        isEmailValid = true;
        emailErrorMessage.textContent = "✅ Correct!";
        emailErrorMessage.style.color = "green";
      } else {
        emailErrorMessage.textContent = "❌ Email is invalid. check for symbols and spelling";
        emailErrorMessage.style.color = "red";
      }
  
      if (enteredPassword === validPassword) {
        isPasswordValid = true;
        passwordErrorMessage.textContent = "✅ Correct";
        passwordErrorMessage.style.color = "green";
      } else {
        passwordErrorMessage.textContent = "❌ Password is invalid. caps turned on?";
        passwordErrorMessage.style.color = "red";
      }
  
      if (isEmailValid && isPasswordValid) {
       
        window.location.href = "posts.html";
      } else {
        
      }
    });
  });
  
  
  
  