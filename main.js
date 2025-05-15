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


    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    

    const addStudentBtn = document.getElementById("addStudentBtn");
    if (addStudentBtn) {
        addStudentBtn.addEventListener("click", function () {
            window.location.href = "add-student1.html";
        });
    }

    
});

document.addEventListener("DOMContentLoaded", function () {


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
  
