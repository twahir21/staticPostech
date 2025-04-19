function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  const iconPath = document.getElementById('icon-path');
  const iconPathMobile = document.getElementById('icon-path-mobile');

  const moonPath = "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z";
  const sunPath = "M12 3v1m0 16v1m8.66-8.66l-.71.71M4.34 4.34l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.34 19.66l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z";

  if (isDark) {
    iconPath?.setAttribute('d', moonPath);
    iconPathMobile?.setAttribute('d', moonPath);
  } else {
    iconPath?.setAttribute('d', sunPath);
    iconPathMobile?.setAttribute('d', sunPath);
  }
}

// Toggle the mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  }
  
  // Close the mobile menu when clicking outside
  function closeMenuOnOutsideClick(event) {
    const menu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector('button[onclick="toggleMobileMenu()"]'); // Mobile menu button
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.add("hidden");
    }
  }
  
  // Add event listener for clicks outside the mobile menu
  document.addEventListener("click", closeMenuOnOutsideClick);
  
  // Prevent click event from closing the menu when clicking inside the menu or the menu button
  document.getElementById("mobileMenu").addEventListener("click", function(event) {
    event.stopPropagation();
  });
  