// Enable dark mode by default
document.body.classList.add("dark-mode");


function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.getElementById("toggleDark");

  // Toggle dark and light classes
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Change button icon based on mode
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️"; // Dark mode is ON, so offer light
  } else {
    toggleBtn.textContent = "🌙"; // Light mode is ON, so offer dark
  }
}

// Scroll to top button behavior
window.onscroll = () => {
  const topBtn = document.getElementById("topBtn");
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// Animate skill bars after DOM loads
window.addEventListener("load", () => {
  document.querySelectorAll(".bar").forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.1,
});

reveals.forEach(el => observer.observe(el));
