/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

    // Load the Lottie animation
    document.addEventListener("DOMContentLoaded", function() {
      lottie.loadAnimation({
        container: document.getElementById('coding-person'), // the DOM element where you want to render the animation
        renderer: 'svg', // render as SVG
        loop: true, // loop the animation
        autoplay: true, // autoplay the animation
        path: './assets/codingPerson.json' // path to the JSON animation file
      });
    });


    document.addEventListener("DOMContentLoaded", function() {
      // Load the Lottie animation for email
      var emailAnimation = lottie.loadAnimation({
          container: document.getElementById('lottie-animation'), // the DOM element where you want to render the animation
          renderer: 'svg', // render as SVG
          loop: true, // loop the animation
          autoplay: true, // autoplay the animation
          path: './assets/myemail.json' // path to the email JSON animation file
      });
  });
  
    document.addEventListener("DOMContentLoaded", function() {
      const galleryItems = document.querySelectorAll('.gallery-item');
      const galleryImg = document.getElementById('gallery-img');
    
      galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          const imgPath = this.getAttribute('data-image');
          galleryImg.classList.add('hidden');
    
          setTimeout(() => {
            galleryImg.src = imgPath;
            galleryImg.classList.remove('hidden');
          }, 500);
        });
      });
    
      // galleryItems.forEach(item => {
      //   item.addEventListener('mouseleave', function() {
      //     galleryImg.classList.add('hidden');
    
      //     setTimeout(() => {
      //       galleryImg.src = './assets/img/Gallery/3.png';
      //       galleryImg.classList.remove('hidden');
      //     }, 500);
      //   });
      // });
    });
    
    

// Load the Skills selection animation

document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { skillName: "HTML", iconClass: "fab fa-html5" },
    { skillName: "CSS", iconClass: "fab fa-css3-alt" },
    { skillName: "JavaScript", iconClass: "fab fa-js" },
    { skillName: "React", iconClass: "fab fa-react" },
    { skillName: "Node.js", iconClass: "fab fa-node" },
    { skillName: "npm", iconClass: "fab fa-npm" },
    { skillName: "SQL/MariaDB", iconClass: "fas fa-database" },
    { skillName: "GitHub", iconClass: "fab fa-github" },
    { skillName: "Python", iconClass: "fab fa-python" },
    { skillName: "C++", iconClass: "fab fa-c" },
    { skillName: "Java", iconClass: "fab fa-java" },
    { skillName: "Linux", iconClass: "fab fa-linux" },
    { skillName: "AWS", iconClass: "fab fa-aws" },



  ];

  const skillsContainer = document.getElementById("skillsContainer");
  console.log("Skills container:", skillsContainer);


  // Ensure skillsContainer exists
  if (skillsContainer) {
    skills.forEach((skill) => {
      console.log("Adding skill:", skill.skillName);

      const li = document.createElement("li");
      li.classList.add("software-skill-inline");

      const icon = document.createElement("i");
      icon.className = skill.iconClass; // FontAwesome icon class
      li.appendChild(icon);

      const skillText = document.createElement("p");
      skillText.textContent = skill.skillName;
      li.appendChild(skillText);

      skillsContainer.appendChild(li);
    });
  } else {
    console.error("Skills container not found");
  }
});

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();



  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();