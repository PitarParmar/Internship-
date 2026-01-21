const container = document.getElementById("container");
const curveText = document.getElementById("curveText");

function toggleMode() {
  container.classList.toggle("signup-active");

  if (container.classList.contains("signup-active")) {
    curveText.textContent = "Join with us";
  } else {
    curveText.textContent = "Welcome";
  }
}
