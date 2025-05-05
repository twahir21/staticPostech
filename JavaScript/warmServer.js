// warmServer.js

console.log("⏱️ Warm-up script loaded");

fetch("https://api.mypostech.store/", {
  method: "GET",
  mode: "cors",
  credentials: "include",
  headers: {
    "Accept-Language": "sw"
  }
})
  .then(res => {
    console.log("📡 Fetched warm-up endpoint");
    return res.json();
  })
  .then(data => {
    console.log("✅ Server response:", data);
  })
  .catch(err => {
    const msg = err.message || "Unknown";
    console.warn("⚠️ Warm-up failed:", msg);
  });