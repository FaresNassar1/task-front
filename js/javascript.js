document.getElementById("menuButton").addEventListener("click", function () {
  document.querySelector(".dropdown-content-lang").classList.toggle("show");
});

function setLanguage(language, flagSrc) {
  document.getElementById("selected-lang").innerHTML = `<img src="${flagSrc}" alt="" /> ${language}`;
  document.querySelector(".dropdown-content-lang").classList.remove("show");
}

window.onclick = function (event) {
  if (!event.target.matches("#menuButton") && !event.target.matches("#menuButton *")) {
    var dropdowns = document.getElementsByClassName("dropdown-content-lang");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.querySelector('.dropbtn').addEventListener('click', function () {
  this.parentElement.classList.toggle('show');
});

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};