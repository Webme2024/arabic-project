
/* JavaScript (in script.js file) */
document.addEventListener("DOMContentLoaded", function() {
    const videosBtn = document.getElementById("videos-btn");
    const pdfsBtn = document.getElementById("pdfs-btn");
    const videosContainer = document.getElementById("videos-container");
    const pdfsContainer = document.getElementById("pdfs-container");
  
    videosBtn.addEventListener("click", function() {
      videosContainer.style.display = "block";
      pdfsContainer.style.display = "none";
    });
  
    pdfsBtn.addEventListener("click", function() {
      videosContainer.style.display = "none";
      pdfsContainer.style.display = "block";
    });