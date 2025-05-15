document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const studentId = parseInt(urlParams.get("id"));

  fetch("students.json")
    .then((response) => response.json())
    .then((data) => {
      const student = data.find((s) => s.id === studentId);

      if (student) {
        document.getElementById("name").textContent = student.name;
        document.getElementById("id").textContent = student.id;
        document.getElementById("studentImage").src = student.image;
        document.getElementById("grade").textContent = student.grade || "N/A";

        const progressFill = document.querySelector(".progress-fill");
        const progressText = document.querySelector(".progress-text");

        if (student.progress) {
          progressFill.style.width = `${student.progress}%`;
          progressText.textContent = `${student.progress}%`;
        }
      } else {
        console.error("Student not found.");
      }
    })
    .catch((error) => {
      console.error("Error loading student data:", error);
    });

  // Feedback
  document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "preindex.html";
  });

  const subjectCards = document.querySelectorAll(".subject-card");
  const quizTableBody = document.querySelector(".quiz-table tbody");

  subjectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const subject = card.getAttribute("data-subject");
      activateCard(subject);
    });
  });

  function activateCard(subjectKey) {
    subjectCards.forEach((card) => {
      card.classList.toggle("active", card.getAttribute("data-subject") === subjectKey);
    });

    fetch(`https://student-grades-rest.onrender.com/api/grades/${subjectKey}`)
      .then((response) => response.json())
      .then((topics) => {
        quizTableBody.innerHTML = "";
        topics.forEach((item) => {
          const row = `<tr>
            <td>${item.studentName}</td>
            <td>${item.quiz}</td>
            <td>${item.midterm1}</td>
            <td>${item.midterm2}</td>
            <td>${Math.round(item.quiz * 0.2 + item.midterm1 * 0.4 + item.midterm2 * 0.4)}%</td>
          </tr>`;
          quizTableBody.innerHTML += row;
        });
      })
      .catch((error) => {
        console.error("Error fetching subject data:", error);
      });
  }

  activateCard("mechanics"); // default

  // Add new topic manually to table (local only)
  document.getElementById("newQuiz").addEventListener("input", function () {
    const value = this.value.trim();
    const percentInput = document.getElementById("newPercent");

    if (/^\d+\/\d+$/.test(value)) {
      const [score, total] = value.split("/").map(Number);
      percentInput.value = total > 0 ? Math.round((score / total) * 100) + "%" : "";
    } else {
      percentInput.value = "";
    }
  });

  const form = document.getElementById("studentForm");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ✅ prevents reload

    // ✅ Get values using updated IDs
    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const subject = document.getElementById("formSubject").value.trim();
    const quiz = parseFloat(document.getElementById("formQuiz").value);
    const midterm1 = parseFloat(document.getElementById("formMidterm1").value);
    const midterm2 = parseFloat(document.getElementById("formMidterm2").value);

    const data = {
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
      body: JSON.stringify(data)
    })
    .then(res => res.ok ? res.json() : Promise.reject("Failed to submit"))
    .then(() => {
      responseMsg.textContent = "✅ Student submitted successfully!";
      form.reset();
    })
    .catch(err => {
      responseMsg.textContent = "❌ Error submitting student.";
      console.error(err);
    });
  });
});

function submitFeedback() {
  const feedbackInput = document.getElementById('feedbackInput');
  const feedbackMessage = document.getElementById('feedbackMessage');
  
  if (feedbackInput.value.trim() === '') {
    alert('Please enter some feedback before submitting.');
    return;
  }
  
  // Here you would typically send the feedback to a server
  // For now, we'll just show the success message
  feedbackMessage.classList.remove('hidden');
  feedbackInput.value = ''; // Clear the input
  
  // Hide the success message after 3 seconds
  setTimeout(() => {
    feedbackMessage.classList.add('hidden');
  }, 3000);
}
