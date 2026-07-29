(function () {
  "use strict";

  const keys = {
    views: "hallpassLab14PageViews",
    primaryClicks: "hallpassLab14PrimaryCtaClicks",
    featureClicks: "hallpassLab14FeatureClicks"
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
