document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const formTitle = document.getElementById("formTitle");
  const toggleText = document.getElementById("toggleText");
  const btn = document.querySelector(".btn");
  const authForm = document.getElementById("authForm");
  const nameField = document.getElementById("nameField");
  const emailField = document.getElementById("emailField");

  let isLogin = true;

  toggleButton.addEventListener("click", () => {
    isLogin = !isLogin;

    if (isLogin) {
      formTitle.textContent = "Welcome to your website!";
      toggleText.textContent = "Don't have an account?";
      toggleButton.textContent = "SIGN UP";
      btn.textContent = "Log In";
      emailField.style.display = "block";
    } else {
      formTitle.textContent = "Welcome!";
      toggleText.textContent = "Already have an account?";
      toggleButton.textContent = "LOG IN";
      btn.textContent = "Sign Up";
      emailField.style.display = "none";
    }
  });

  authForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !password || (!isLogin && emailField.style.display !== "none" && !email)) {
      alert("❌ Please fill in all fields.");
      return;
    }

    if (isLogin) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;

      if (!emailRegex.test(email)) {
        alert("❌ Please enter a valid email address.");
        return;
      }
    }

    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters.");
      return;
    }

    // Redirect to teacher profile page
    window.location.href = "/Users/ailananariman/final project/welcome page/index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector(".back-button");
  if (backButton) {
      backButton.addEventListener("click", function (event) {
          event.preventDefault();
          window.history.back(); // This will go back to the previous page
      });
  }
});
