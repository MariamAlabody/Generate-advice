// التبديل بين الوضع الداكن والفاتح
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// جلب النصيحة من API
document.getElementById("generateBtn").addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      document.getElementById("adviceText").textContent = data.slip.advice;
    })
    .catch(error => {
      document.getElementById("adviceText").textContent = "Oops! Something went wrong.";
      console.error(error);
    });
});
// استعادة الثيم عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
});
