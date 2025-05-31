// profile.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profile-form");
  const savedBox = document.getElementById("saved-profile");
  const displayName = document.getElementById("display-name");
  const displayEmail = document.getElementById("display-email");

  // Load saved profile
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  if (profile) {
    showProfile(profile);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const userProfile = { name, email };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    showProfile(userProfile);
  });

  window.editProfile = function () {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    if (profile) {
      document.getElementById("name").value = profile.name;
      document.getElementById("email").value = profile.email;
      savedBox.style.display = "none";
      form.style.display = "block";
    }
  };

  function showProfile(profile) {
    displayName.textContent = profile.name;
    displayEmail.textContent = profile.email;
    document.getElementById("profile-form").style.display = "none";
    savedBox.style.display = "block";
  }
});
