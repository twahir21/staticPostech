tailwind.config = {
    darkMode: 'class'
  };
  const userPref = localStorage.getItem("theme");
  if (userPref === "dark") document.documentElement.classList.add("dark");
  else if (userPref === "light") document.documentElement.classList.remove("dark");
