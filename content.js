// Selectors that match LeetCode difficulty labels (Easy / Medium / Hard)
const DIFFICULTY_SELECTORS = [
  // Problem list page
  'span[class*="difficulty"]',
  'div[class*="difficulty"]',
  // Problem detail page
  'div[class*="Difficulty__"]',
  'div[class*="DifficultyLabel"]',
];

function hideDifficulty() {
  DIFFICULTY_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.visibility = "hidden";
    });
  });
}

// Run once on load
hideDifficulty();

// LeetCode is a SPA -- observe DOM mutations to catch dynamically rendered content
const observer = new MutationObserver(hideDifficulty);
observer.observe(document.body, { childList: true, subtree: true });
