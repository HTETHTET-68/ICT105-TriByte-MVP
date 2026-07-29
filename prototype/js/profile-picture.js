document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("profilePicture");
  const form = document.getElementById("profileForm");
  const preview = document.getElementById("profileAvatarPreview");
  const hero = document.getElementById("profileAvatar");
  const welcome = document.getElementById("profileWelcomeName");
  const nameInput = document.getElementById("displayName");
  const cardName = document.getElementById("profileCardName");
  const removeButton = document.getElementById("removeProfilePicture");
  const saveStatus = document.getElementById("profileSaveStatus");
  let selectedPicture = "";
  const currentUser = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("hallpassUser") ||
        sessionStorage.getItem("hallpassUser") ||
        "null"
      );
    } catch (error) {
      return null;
    }
  })();
  const accountEmail = String(currentUser?.email || "").trim().toLowerCase();
  const profileStorageKey = `hallpassProfile:${accountEmail}`;
  const accountName = currentUser?.name || "Student";

  const paint = (element, picture, name) => {
    if (!element) return;
    if (picture) {
      element.innerHTML = `<img src="${picture}" alt="${name || "Student"} profile picture">`;
    } else {
      element.textContent = (name || "Student").trim().charAt(0).toUpperCase();
    }
  };

  const stored = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
  selectedPicture = stored.picture || "";
  paint(preview, selectedPicture, stored.name || accountName);
  paint(hero, selectedPicture, stored.name || accountName);
  if (welcome) welcome.textContent = stored.name || accountName;
  if (cardName) cardName.textContent = stored.name || accountName;

  input?.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast("Please choose an image smaller than 2 MB");
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      selectedPicture = String(reader.result || "");
      paint(preview, selectedPicture, nameInput?.value);
      if (saveStatus) saveStatus.innerHTML = '<i class="fa-regular fa-circle"></i> Unsaved changes';
    };
    reader.readAsDataURL(file);
  });

  removeButton?.addEventListener("click", () => {
    selectedPicture = "";
    input.value = "";
    paint(preview, "", nameInput?.value);
    if (saveStatus) saveStatus.innerHTML = '<i class="fa-regular fa-circle"></i> Unsaved changes';
  });

  nameInput?.addEventListener("input", () => {
    if (cardName) cardName.textContent = nameInput.value.trim() || "Student";
    if (!selectedPicture) paint(preview, "", nameInput.value);
    if (saveStatus) saveStatus.innerHTML = '<i class="fa-regular fa-circle"></i> Unsaved changes';
  });

  form?.addEventListener("submit", () => {
    setTimeout(() => {
      const profile = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
      profile.picture = selectedPicture;
      localStorage.setItem(profileStorageKey, JSON.stringify(profile));
      paint(hero, selectedPicture, profile.name);
      if (welcome) welcome.textContent = profile.name || accountName;
      if (cardName) cardName.textContent = profile.name || accountName;
      if (saveStatus) saveStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Saved';
    }, 0);
  });
});
