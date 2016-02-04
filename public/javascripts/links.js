document.addEventListener("DOMContentLoaded", function () {
  // Finds the first multiselect and sets the active if matches the path of the browser
  var links = document.querySelectorAll('.multiselect__item__link');
  for (var i = 0; i < links.length; i++) {
    var element = links[i];
    if (element.pathname == location.pathname) {
      element.classList.add('multiselect__item__link--active');
    }
  }
});
