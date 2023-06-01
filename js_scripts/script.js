// Get the current page URL
var currentPage = window.location.href;

// Get all the anchor elements within the header
var navLinks = document.querySelectorAll('header a');

// Loop through the anchor elements
navLinks.forEach(function (link) {
  // Check if the anchor's href matches the current page URL
  if (link.href === currentPage) {
    // Add the 'active' class to the parent <li> element
    link.parentNode.classList.add('active');
  }
});

function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const activeLink = document.querySelector(`a[href="${currentPage}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}