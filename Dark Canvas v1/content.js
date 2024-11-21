document.body.classList.add('dark-mode');

const observer = new MutationObserver(() => {
  document.body.classList.add('dark-mode');
});
observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'toggleDarkMode') {
      document.body.classList.toggle('dark-mode');
    }
  });
  