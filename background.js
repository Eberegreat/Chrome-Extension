// background.js
chrome.runtime.onInstalled.addlistener (function () {
    // Initialize storage with an empty array if it's not already instalized
chrome.storage.sync.get('savedItems',function (data) {
    if (!data.savedItems) {
        chrome.storage.sync.set ({ SavedItems: []  });
        }
});
});
