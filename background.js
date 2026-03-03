chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    if (details.frameId === 0) {
      chrome.tabs.update(details.tabId, {
        url: "https://claude.ai"
      });
    }
  },
  {
    url: [
      { hostContains: "chatgpt.com" }
    ]
  }
);
