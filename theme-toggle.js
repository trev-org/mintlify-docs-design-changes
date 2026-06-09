(function () {
  var storageKey = "isDarkMode";
  var themeClasses = ["dark", "light", "true", "false", "system"];
  var originalToggleSelector =
    '.almond-nav-bottom-section button[aria-label="Toggle dark mode"]';
  var mountedToggleSelector = 'button[data-xbox-theme-toggle="true"]';
  var toggleItemSelector = 'li[data-xbox-theme-toggle-item="true"]';
  var navbarListSelector = '#navbar nav[aria-label="Main"] > ul';

  function getButton() {
    return (
      document.querySelector(mountedToggleSelector) ||
      document.querySelector(originalToggleSelector)
    );
  }

  function mountToggleInNavbar() {
    var button = getButton();
    var list = document.querySelector(navbarListSelector);

    if (!button || !list) return false;

    var item = document.querySelector(toggleItemSelector);
    if (!item) {
      item = document.createElement("li");
      item.setAttribute("data-xbox-theme-toggle-item", "true");
      item.className = "xbox-theme-toggle-item whitespace-nowrap hidden lg:flex";
    }

    button.setAttribute("data-xbox-theme-toggle", "true");
    button.classList.add("xbox-theme-toggle-button");

    if (button.parentElement !== item) item.appendChild(button);
    if (item.parentElement !== list) list.appendChild(item);

    return true;
  }

  function getCurrentTheme() {
    var root = document.documentElement;

    if (root.classList.contains("dark")) return "dark";
    if (root.classList.contains("light")) return "light";

    try {
      var storedTheme = localStorage.getItem(storageKey);
      if (storedTheme === "light" || storedTheme === "false") return "light";
    } catch (error) {}

    return "dark";
  }

  function applyTheme(theme) {
    var root = document.documentElement;

    root.classList.remove.apply(root.classList, themeClasses);
    root.classList.add(theme);
    root.style.colorScheme = theme;

    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {}

    var button = getButton();
    if (button) {
      button.type = "button";
      button.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  function toggleTheme() {
    applyTheme(getCurrentTheme() === "dark" ? "light" : "dark");
  }

  function isInsideButton(event, button) {
    if (!button || typeof event.clientX !== "number") return false;

    var rect = button.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  }

  document.addEventListener(
    "click",
    function (event) {
      var button = getButton();
      if (!isInsideButton(event, button)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      toggleTheme();
    },
    true,
  );

  document.addEventListener(
    "keydown",
    function (event) {
      var button = getButton();
      if (
        event.target !== button ||
        (event.key !== "Enter" && event.key !== " ")
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      toggleTheme();
    },
    true,
  );

  function initializeButtonState() {
    mountToggleInNavbar();

    var button = getButton();
    if (!button) return;

    button.type = "button";
    button.setAttribute("aria-pressed", String(getCurrentTheme() === "dark"));
  }

  function initializeWithRetry() {
    var attempts = 0;

    function tick() {
      initializeButtonState();
      if (getButton() && document.querySelector(toggleItemSelector)) return;

      attempts += 1;
      if (attempts < 40) window.setTimeout(tick, 100);
    }

    tick();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeWithRetry);
  } else {
    initializeWithRetry();
  }
})();
