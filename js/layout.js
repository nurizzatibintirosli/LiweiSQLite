
document.addEventListener("DOMContentLoaded", function () {
  fetch("layout/sidebar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("sidebar-container").innerHTML = html;
    });
  fetch("layout/header-tabs.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-tabs-container").innerHTML = html;
    });
});
