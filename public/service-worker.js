self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated!");
  clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SHOW_POPUP") {
    self.registration.showNotification("Hello!", {
      body: "This is a notification from your service worker.",
      icon: "/logo192.png", // Ensure this file exists
    });
  }
});
