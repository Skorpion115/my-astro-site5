document.addEventListener("astro:page-load", () => {
  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  document
    .getElementById("themeToggle")
    .addEventListener("click", handleToggleClick);
});
