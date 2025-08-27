document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".theme-toggle");

  // Saat load, cek preferensi user
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Kalau tombol ada, pasang event listener
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});
