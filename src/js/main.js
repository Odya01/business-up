// header__menu
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerMenuBtn = document.querySelector("#header__nav-link");
  const headerLogo = document.querySelector(".header__logo");

  const overlay = document.createElement("div");
  overlay.className = "header__overlay";
  document.body.appendChild(overlay);

  const toggleMenu = () => {
    if (window.innerWidth < 769) return;

    header.classList.toggle("header--open");
    if (header.classList.contains("header--open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    overlay.classList.toggle("header__overlay--active");

    if (header.classList.contains("header--open")) {
      headerLogo.src = "src/img/Logo2.svg";
    } else {
      headerLogo.src = "src/img/Logo.svg";
    }
  };

  headerMenuBtn.addEventListener("click", toggleMenu);

  overlay.addEventListener("click", () => {
    if (window.innerWidth < 769) return;

    header.classList.remove("header--open");
    if (header.classList.contains("header--open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    overlay.classList.remove("header__overlay--active");
  });
});

// header__scroll
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerLogo = document.querySelector(".header__logo");

  const scrollOffset = 50;

  const isMobile = () => window.innerWidth <= 768;

  const updateHeaderLogo = () => {
    const currentSrc = headerLogo.getAttribute("src");
    let nextSrc = "src/img/Logo.svg";

    if (isMobile()) {
      if (
        window.scrollY > scrollOffset ||
        header.classList.contains("header--open")
      ) {
        nextSrc = "src/img/Logo2.svg";
      }
    } else {
      if (header.classList.contains("header--open")) {
        nextSrc = "src/img/Logo2.svg";
      } else if (window.scrollY > scrollOffset) {
        nextSrc = "src/img/Logo3.svg";
      }
    }

    if (currentSrc !== nextSrc) {
      headerLogo.src = nextSrc;
    }
  };

  const handleScroll = () => {
    if (window.scrollY > scrollOffset) {
      header.classList.add("header--scroll");
    } else {
      header.classList.remove("header--scroll");
    }

    updateHeaderLogo();
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", updateHeaderLogo);

  const observer = new MutationObserver(updateHeaderLogo);

  observer.observe(header, {
    attributes: true,
    attributeFilter: ["class"],
  });

  handleScroll();
});

// header__menu-pc
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerMenuBtn = document.querySelector(".header__burger-menu");
  const headerLogo = document.querySelector(".header__logo");

  const overlay = document.createElement("div");
  overlay.className = "header__overlay";
  document.body.appendChild(overlay);

  const toggleMenu = () => {
    if (window.innerWidth < 769) return;

    header.classList.toggle("header--open");
    if (header.classList.contains("header--open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    overlay.classList.toggle("header__overlay--active");

    if (header.classList.contains("header--open")) {
      headerLogo.src = "src/img/Logo2.svg";
    } else {
      headerLogo.src = "src/img/Logo.svg";
    }
  };

  headerMenuBtn.addEventListener("click", toggleMenu);

  overlay.addEventListener("click", () => {
    if (window.innerWidth < 769) return;

    header.classList.remove("header--open");
    if (header.classList.contains("header--open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    overlay.classList.remove("header__overlay--active");
  });
});

// header__menu-mobile
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerBtn = document.querySelector(".header__burger-menu");
  const headerLogo = document.querySelector(".header__logo");

  headerBtn.addEventListener("click", () => {
    if (window.innerWidth > 768) return;

    header.classList.toggle("header--open");

    if (header.classList.contains("header--open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    if (header.classList.contains("header--open")) {
      headerLogo.src = "src/img/Logo2.svg";
    } else {
      headerLogo.src = "src/img/Logo.svg";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".burger__item");

  items.forEach((item) => {
    const btn = item.querySelector(".burger__link");
    const submenu = item.querySelector(".burger__submenu");

    if (!submenu) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("burger__item--open");

      items.forEach((el) => {
        const sub = el.querySelector(".burger__submenu");

        if (!sub) return;

        el.classList.remove("burger__item--open");
        sub.style.height = "0px";
      });

      if (!isOpen) {
        item.classList.add("burger__item--open");

        submenu.style.height = submenu.scrollHeight + "px";
      }
    });
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
  const progressBars = document.querySelectorAll(".hero__progress-bar");

  const swiper = new Swiper(".hero__swiper", {
    effect: "fade",
    speed: 500,

    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },

    loop: true,
  });

  const setProgress = (index) => {
    progressBars.forEach((bar) => {
      bar.classList.remove("hero__progress-bar--active");
    });

    progressBars[index].classList.add("hero__progress-bar--active");
  };

  swiper.on("init", () => {
    setProgress(swiper.realIndex);
  });

  swiper.on("slideChange", () => {
    setProgress(swiper.realIndex);
  });

  progressBars.forEach((bar, index) => {
    bar.addEventListener("click", () => {
      swiper.slideToLoop(index);
    });
  });
});

// btn scroll
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burgerBtn = document.querySelector(".header__burger-menu");
  const cta = document.querySelector(".mobile-cta");

  const isMobile = () => window.innerWidth <= 768;

  const updateCTA = () => {
    if (!isMobile()) {
      cta.classList.remove("mobile-cta--visible");
      return;
    }

    if (window.scrollY > 200 && !header.classList.contains("header--open")) {
      cta.classList.add("mobile-cta--visible");
    } else {
      cta.classList.remove("mobile-cta--visible");
    }
  };

  window.addEventListener("scroll", updateCTA);

  burgerBtn.addEventListener("click", () => {
    setTimeout(() => {
      if (header.classList.contains("header--open")) {
        cta.classList.remove("mobile-cta--visible");
      } else {
        updateCTA();
      }
    }, 10);
  });

  window.addEventListener("resize", updateCTA);
});
