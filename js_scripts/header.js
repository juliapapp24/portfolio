

// header.js

function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const activeLink = document.querySelector(`a[href="${currentPage}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

export { setActiveLink };
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the header HTML file
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      // Insert the header into the appropriate location
      document.getElementById('header').innerHTML = data;
    });
});



