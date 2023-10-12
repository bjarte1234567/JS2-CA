/**
 * A function to handle user sign-up form validation and display validation messages.
 * @param {Event} event - The event object for the "DOMContentLoaded" event.
 */

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
    const isEmailValid =
      email === "bjarteeoliversenloken@noroff.no" || email.includes("@");
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
      password
    );

    // Oppdater valideringsmeldinger og tekstfarger
    emailValidation.textContent = isEmailValid
      ? "Valid Email ✅"
      : "❌ Already in use, or check for symbols";
    emailValidation.style.color = isEmailValid ? "green" : "red";
    passwordValidation.textContent = isPasswordValid
      ? "Valid password ✅"
      : "❌ Do not meet the requirement. Add a uppercase letter and a number";
    passwordValidation.style.color = isPasswordValid ? "green" : "red";

    if (isEmailValid && isPasswordValid) {
      window.location.href = "/login.html";
    }
  });
});
