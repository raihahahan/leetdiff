# LeetDiff

A Chrome extension that hides the difficulty label (Easy / Medium / Hard) on LeetCode so you can practice problems without anchoring on the rating.

## What it does

Removes difficulty badges from the problem list and the problem detail page. Works on LeetCode's single-page app by watching for DOM changes.

## Tech stack

- Manifest V3 Chrome extension
- Vanilla JavaScript content script
- MutationObserver for SPA compatibility

## Prerequisites

- Google Chrome (or any Chromium-based browser)

## Installation

1. Clone the repo:
   ```
   git clone <your-remote-url>
   ```
2. Open Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" (top-right toggle).
4. Click "Load unpacked" and select the cloned folder.
5. Navigate to leetcode.com -- difficulty labels will be hidden.
