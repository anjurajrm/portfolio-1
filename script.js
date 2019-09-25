/*---------hamburger menu-----------*/
function hamburgerMenu() {
  $("#menu").click(function() {
    $(".site-nav").toggleClass("site-nav-open", 500);
    $(this).toggleClass("open");
  });
}
/*---------starting of the page-----------*/
function startPage() {
  $(".image-desc p").on("click", function(e) {
    e.preventDefault();

    $("body, html").animate(
      {
        scrollTop: $(".projects-section").offset().top
      },
      1000
    );
  });
}
/*---------projects-----------*/
function myProject() {
  $(".btn1").on("click", function(e) {
    window.open(" https://github.com/anjurajrm/Batman-quiz-app");
  });

  $(".btn2").on("click", function(e) {
    window.open("https://anjurajrm.github.io/Batman-quiz-app/");
  });

  $(".project-1-image").on("click", function(e) {
    window.open("https://anjurajrm.github.io/Batman-quiz-app/");
  });

  $(".btn3").on("click", function(e) {
    window.open(" https://github.com/anjurajrm/Gamestead");
  });

  $(".btn4").on("click", function(e) {
    window.open("https://anjurajrm.github.io/Gamestead/");
  });

  $(".project-2-image").on("click", function(e) {
    window.open("https://anjurajrm.github.io/Gamestead/");
  });
}

/*------------site navigation--------*/
function docNavigation() {
  $(".scroll-around").on("click", function(e) {
    e.preventDefault();

    $("body, html").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1000
    );
  });

  $("#myBtn").on("click", function(e) {
    e.preventDefault();

    $("body, html").animate(
      {
        scrollTop: $("header").offset().top
      },
      1000
    );
  });
}

$(function() {
  startPage();
  hamburgerMenu();
  myProject();
  docNavigation();
});
