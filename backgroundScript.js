// backgroundScript.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'uploadImage') {
    // Example: Send the data URL to the server for upload
    const dataUrl = message.dataUrl;
    // Replace this with your actual upload logic
    // For demonstration purposes, we'll just log the data URL
    console.log('Uploading image:', dataUrl);
    
    // Simulate a successful upload
    const success = true;
    
    // Send response back to content script
    sendResponse({ success });
  }
});
