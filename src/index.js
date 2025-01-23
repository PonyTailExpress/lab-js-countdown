const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  console.log("startCountdown called!");

  setInterval(function () {
    remainingTime--;
    if (remainingTime >= 0) {
      document.getElementById("time").innerText = remainingTime;
    } else {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

let timeout;

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
const closeToast = document.getElementById("close-toast");
closeToast.addEventListener("click", () => {
  toast.classList.remove("show");
  clearTimeout(timeout);
});
