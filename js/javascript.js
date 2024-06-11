


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


$(document).ready(function () {
  $(".home-slider").owlCarousel({
    rtl: true,
    margin: 10,
    loop: true,
    autoplay: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
$(document).ready(function () {
  $(".category-slider").owlCarousel({
    rtl: true,
    margin: 30,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 2,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 7,
      },

    },
  });
});
$(document).ready(function () {
  $(".product-slider").owlCarousel({
    rtl: true,
    margin: 15,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: { items: 3 },
      1200: {
        items: 5,
      },
    },
  });
});