(function () {
  var form = document.getElementById("contact-form");
  if (form && typeof URL !== "undefined") {
    try {
      var next = document.createElement("input");
      next.type = "hidden";
      next.name = "_next";
      next.value = new URL("thank-you.html", window.location.href).href;
      form.appendChild(next);
    } catch (e) {}
  }

  var nav = document.getElementById("nav");
  var toggle = document.getElementById("nav-toggle");
  var links = nav ? nav.querySelectorAll("a[href^='#']") : [];

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var sections = document.querySelectorAll("section[id]");
  var navAnchors = document.querySelectorAll('.nav-list a[href^="#"]');

  function setActive() {
    var y = window.scrollY + 120;
    var current = "";
    sections.forEach(function (sec) {
      if (sec.offsetTop <= y) {
        current = sec.getAttribute("id") || "";
      }
    });
    navAnchors.forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === "#" + current) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced) {
    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
