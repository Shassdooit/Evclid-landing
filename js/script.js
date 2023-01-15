const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  effect: "fade",
  simulateTouch: false,
});

document
  .getElementsByClassName("swiper")[0]
  .addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  }),
  document
    .getElementsByClassName("swiper")[0]
    .addEventListener("mouseout", function () {
      swiper.autoplay.start();
    });

//===============</ Slider >

let tabsBtn = document.querySelectorAll(".working__tabs-link");
let tabsItem = document.querySelectorAll(".working__tabs-info");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("working__tabs-link--active");
    });
    e.currentTarget.classList.add("working__tabs-link--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("working__tabs-info--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("working__tabs-info--active");
  });
});

//===============< / TABS >

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

//===============< / ACCORDION >

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header__menu-link");

burger.addEventListener(
  "click",

  function () {
    search.classList.remove("header__btn--active");

    ponel.classList.remove("header__search--active");

    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("no-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("no-scroll");
  });
});

//===============< / Burger >

let search = document.querySelector(".header__btn");
let ponel = document.querySelector(".header__search");
let clossearch = document.querySelectorAll(".header__form-close");

search.addEventListener(
  "click",

  function () {
    search.classList.toggle("header__btn--active");

    ponel.classList.toggle("header__search--active");
  }
);

clossearch.forEach(function (el) {
  el.addEventListener("click", function () {
    search.classList.remove("header__btn--active");

    ponel.classList.remove("header__search--active");
  });
});

//===============< / SEARCH >
