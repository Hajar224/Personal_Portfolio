//////////////SET CURRENT YEAR//////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
/* console.log(currentYear) */
yearEl.textContent = currentYear;


document.addEventListener("DOMContentLoaded", function () {
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = e.currentTarget.getAttribute("href");

      // Check if it's an internal link
      if (href.startsWith("#")) {
        e.preventDefault();

        // SCROLL BACK TO TOP
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } else {
          // SCROLL TO OTHER LINKS
          const sectionEl = document.querySelector(href);
          if (sectionEl) {
            sectionEl.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      }
    });
  });
});
 
/////////////////////STICKY NAVIGATION////////////////////////////
const aboutSectionEl = document.querySelector(".about-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true ) {
      document.body.classList.remove("sticky");
    }
  },
  {
    ////////////////In the viewport//////////////////
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(aboutSectionEl);
