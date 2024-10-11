import DOMPurify from "isomorphic-dompurify";

document.addEventListener("DOMContentLoaded", function () {
  // Populate inputs with saved data on page load
  const savedTitle = localStorage.getItem("title");
  const savedDescription = localStorage.getItem("description");
  const savedContent = localStorage.getItem("content");

  if (savedTitle) {
    document.getElementById("title").value = savedTitle;
  }

  if (savedDescription) {
    document.getElementById("description").value = savedDescription;
  }

  if (savedContent) {
    document.getElementById("content").value = savedContent;
  }

  // Update live view on page load
  updateLiveView();
});

function updateLiveView() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const content = document.getElementById("content").value;

  document.getElementById("live-title").innerHTML = title;
  document.getElementById("live-description").innerHTML = description;
  // document.getElementById("live-content").innerHTML = content;
  document.getElementById("live-content").innerHTML = DOMPurify.sanitize(content);

  // Save data to localStorage
  localStorage.setItem("title", title);
  localStorage.setItem("description", description);
  localStorage.setItem("content", content);
}

document.getElementById("content").addEventListener("input", updateLiveView);
