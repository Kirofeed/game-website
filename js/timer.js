document.addEventListener("DOMContentLoaded", (event) => {
  let timerElement = document.getElementById("timer");
  let timeLeft = 10; // 10 seconds timer

  let timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      window.location.href = "index.html"; // Redirect to the main page
    } else {
      timerElement.textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
      timeLeft--;
    }
  }, 1000);
});
