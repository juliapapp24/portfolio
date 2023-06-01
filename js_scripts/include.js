function includeHTML(callback) {
  var includeElements = document.querySelectorAll('[data-include]');
  var pending = includeElements.length;

  function loadHTML(element, url) {
    fetch(url)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        element.innerHTML = html;
        pending--;

        if (pending === 0 && typeof callback === 'function') {
          callback();
        }
      });
  }

  includeElements.forEach(function (element) {
    var filePath = element.getAttribute('data-include');
    loadHTML(element, filePath);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  includeHTML();
});
