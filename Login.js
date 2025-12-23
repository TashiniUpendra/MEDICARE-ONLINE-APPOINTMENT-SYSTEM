// Handle Login Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!role || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // Login logic (temporary)
    if (role === "admin") {
      alert("Welcome Admin!");
      window.location.href = "admin-dashboard.html";
    } 
    else if (role === "doctor") {
      alert("Welcome Doctor!");
      window.location.href = "doctor-dashboard.html";
    } 
    else {
      alert("Welcome Patient!");
      window.location.href = "patient-dashboard.html";
    }
  });
});
