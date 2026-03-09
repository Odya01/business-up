// header__menu
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerMenuBtn = document.querySelector("#header__nav-link");
  const headerLogo = document.querySelector(".header__logo");
  const body = document.body;

  const overlay = document.createElement("div");
  overlay.className = "header__overlay";
  document.body.appendChild(overlay);

  const toggleMenu = () => {
    if (window.innerWidth < 1200) return;

    header.classList.toggle("header--open");
    body.classList.toggle("body--lock");
    overlay.classList.toggle("header__overlay--active");

    if (header.classList.contains("header--open")) {
      headerLogo.src = "src/img/Logo2.svg";
    } else {
      headerLogo.src = "src/img/Logo.svg";
    }
  };

  headerMenuBtn.addEventListener("click", toggleMenu);

  overlay.addEventListener("click", () => {
    if (window.innerWidth < 1200) return;

    header.classList.remove("header--open");
    body.classList.remove("body--lock");
    overlay.classList.remove("header__overlay--active");
  });
});

// header__services
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".header__services-item");
  const subs = document.querySelectorAll(".header__services-sub");

  items.forEach((el) => {
    el.classList.remove("header__services-item--active");
  });

  subs.forEach((el) => {
    el.classList.remove("header__services-sub--active");
  });

  if (items[0]) items[0].classList.add("header__services-item--active");
  if (subs[0]) subs[0].classList.add("header__services-sub--active");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const category = item.dataset.category;

      items.forEach((el) => {
        el.classList.remove("header__services-item--active");
      });

      subs.forEach((sub) => {
        sub.classList.remove("header__services-sub--active");
      });

      item.classList.add("header__services-item--active");

      document
        .querySelector(`.header__services-sub[data-category="${category}"]`)
        .classList.add("header__services-sub--active");
    });
  });
});

// hero__services
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".hero__service");

  const setActive = (index) => {
    services.forEach((el) => el.classList.remove("hero__service--active"));

    services[index].classList.add("hero__service--active");
  };

  const swiper = new Swiper(".hero__swiper", {
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 4500,
    },
    allowTouchMove: false,
  });

  swiper.on("slideChange", () => {
    setActive(swiper.realIndex);
  });

  services.forEach((service, index) => {
    service.addEventListener("click", () => {
      swiper.slideTo(index);
    });
  });
});
