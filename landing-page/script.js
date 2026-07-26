(function () {
  "use strict";

  const keys = {
    views: "hallpassLab12PageViews",
    primaryClicks: "hallpassLab12PrimaryCtaClicks",
    featureClicks: "hallpassLab12FeatureClicks"
  };

  function increment(key) {
    const current = Number.parseInt(localStorage.getItem(key) || "0", 10);
    localStorage.setItem(key, String(current + 1));
  }

  increment(keys.views);

  document.querySelectorAll(".js-cta").forEach((link) => {
    link.addEventListener("click", () => increment(keys.primaryClicks));
  });

  document.querySelectorAll(".js-secondary-cta").forEach((link) => {
    link.addEventListener("click", () => increment(keys.featureClicks));
  });
})();

