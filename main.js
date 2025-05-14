document.addEventListener("DOMContentLoaded", function () {
    const learnMoreBtn = document.querySelector(".learn-more");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            window.location.href = "learn-more.html";
        });
    }

    const getStartedBtn = document.getElementById("getStartedBtn");
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function () {
            window.location.href = "get-started.html";
        });
    }

    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.history.back();
        });
    }

    // ✨ NEW: Login button
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Existing code...

    const addStudentBtn = document.getElementById("addStudentBtn");
    if (addStudentBtn) {
        addStudentBtn.addEventListener("click", function () {
            window.location.href = "add-student1.html";
        });
    }

    // Other buttons like learn-more, get-started, back, etc...
});

document.addEventListener("DOMContentLoaded", function () {
    // Existing code...
  
    // Navigation scroll to sections
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("data-target");
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  
