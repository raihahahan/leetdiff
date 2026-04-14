const DIFFICULTY_SELECTORS = [
  'span[class*="difficulty"]',
  'div[class*="difficulty"]',
  'div[class*="Difficulty__"]',
  'div[class*="DifficultyLabel"]',
];

function setVisibility(visible) {
  DIFFICULTY_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.visibility = visible ? "" : "hidden";
    });
  });
}

// Read initial state (default: enabled)
chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
  setVisibility(!enabled);
});

// React to toggle changes without needing a page reload
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled !== undefined) {
    setVisibility(!changes.enabled.newValue);
  }
});

// Watch for SPA navigation re-renders
const observer = new MutationObserver(() => {
  chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
    if (enabled) setVisibility(false);
  });
});
observer.observe(document.body, { childList: true, subtree: true });
