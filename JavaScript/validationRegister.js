document.addEventListener("DOMContentLoaded", function () {
   
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const signUpButton = document.getElementById("signUpButton");
    const emailValidation = document.getElementById("emailValidation");
    const passwordValidation = document.getElementById("passwordValidation");
   
  
    signUpButton.addEventListener("click", function () {
      
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Tilpassede valideringsbetingelser
      const isEmailValid = email === "bjarteeoliversenloken@noroff.no" || email.includes("@"); 
      const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
     
  
      // Oppdater valideringsmeldinger og tekstfarger
      emailValidation.textContent = isEmailValid ? "Valid email" : "Invalid email, check for @";
      emailValidation.style.color = isEmailValid ? "green" : "red";
      passwordValidation.textContent = isPasswordValid ? "Valid password" : "Invalid password";
      passwordValidation.style.color = isPasswordValid ? "green" : "red";
      
  
      if (isEmailValid && isPasswordValid) {
        
        window.location.href = "/login.html";
      }
    });
  });
  
  
  
  
  
  