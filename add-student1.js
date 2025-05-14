document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("authForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const quiz = parseFloat(document.getElementById("quiz").value);
    const midterm1 = parseFloat(document.getElementById("midterm1").value);
    const midterm2 = parseFloat(document.getElementById("midterm2").value);

    if (!name || !email || !subject || isNaN(quiz) || isNaN(midterm1) || isNaN(midterm2)) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const studentData = {
      name,
      email,
      grades: [
        {
          subject,
          quiz,
          midterm1,
          midterm2
        }
      ]
    };

    fetch("https://student-grades-rest.onrender.com/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to add student");
      return response.json();
    })
    .then(data => {
      alert("✅ Student added successfully!");
      form.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      alert("❌ Failed to add student. Try again.");
    });
  });

  const backButton = document.querySelector(".back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      history.back();
    });
  }

  const backBtn = document.querySelector(".back-to-main");
  if (backBtn) {
    backBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "preindex.html";
    });
  }
});
