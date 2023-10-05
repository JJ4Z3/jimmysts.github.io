$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});

$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

ScrollReveal().reveal("nav", {
  origin: "top",
  delay: 100,
  distance: "100px",
});

// home
//#region
ScrollReveal().reveal("#home h2, #course h1, #contact-home h2", {
  origin: "left",
  delay: 200,
  distance: "100px",
});

ScrollReveal().reveal("#home p, #course p, #course .courses", {
  origin: "right",
  delay: 300,
  distance: "100px",
});

ScrollReveal().reveal("#home .btn", {
  origin: "bottom",
  delay: 400,
  distance: "100px",
});

// course

// SCROLL REVEAL REGISTRATION
ScrollReveal().reveal("#registration .reminder .date", {
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal("#registration .reminder", {
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal("#registration .kiryu", {
  origin: "left",
  delay: 500,
  distance: "500px",
});

ScrollReveal().reveal("#registration .gaiden-text", {
  origin: "top",
  delay: 800,
  distance: "500px",
});

// piple

ScrollReveal().reveal("#experts h1", {
  origin: "left",
  delay: 400,
  distance: "100px",
});

ScrollReveal().reveal("#experts p", {
  origin: "right",
  delay: 600,
  distance: "100px",
});

ScrollReveal().reveal("#experts .expert-box .profile.ex1", {
  origin: "left",
  delay: 200,
  distance: "100px",
});
ScrollReveal().reveal("#experts .expert-box .profile.ex2", {
  origin: "left",
  delay: 400,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.ex3", {
  origin: "left",
  delay: 600,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.ex4", {
  origin: "left",
  delay: 800,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.ex5", {
  origin: "left",
  delay: 1000,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.ex6", {
  origin: "left",
  delay: 1200,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.ex7", {
  origin: "left",
  delay: 1400,
  distance: "50px",
});

// wawancara
ScrollReveal().reveal("#experts .expert-box .profile.cool1", {
  origin: "lright",
  delay: 200,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.cool2", {
  origin: "right",
  delay: 400,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.cool3", {
  origin: "right",
  delay: 600,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.cool4", {
  origin: "right",
  delay: 800,
  distance: "50px",
});
ScrollReveal().reveal("#experts .expert-box .profile.cool5", {
  origin: "right",
  delay: 1000,
  distance: "100px",
});

// wawancara end

// footer
ScrollReveal().reveal("footer", {
  origin: "bottom",
  delay: 500,
  distance: "50px",
});

// about scroll reveal
ScrollReveal().reveal("#about-home h2, #about-container h2, #blog-home h2", {
  origin: "left",
  delay: 200,
  distance: "100px",
});

ScrollReveal().reveal("#about-container p", {
  origin: "left",
  delay: 400,
  distance: "100px",
});

ScrollReveal().reveal("#about-container .about-img", {
  origin: "left",
  delay: 600,
  distance: "100px",
});

ScrollReveal().reveal("#about-container p", {
  origin: "left",
  delay: 400,
  distance: "100px",
});

// BLOGS
ScrollReveal().reveal("#blog-container .post img", {
  origin: "left",
  delay: 400,
  distance: "200px",
});

ScrollReveal().reveal("#blog-container .post h3, #blog-container .post p", {
  origin: "right",
  delay: 500,
  distance: "100px",
});

ScrollReveal().reveal("#blog-container .post .yutub", {
  origin: "left",
  delay: 500,
  distance: "100px",
});

// COURSES
ScrollReveal().reveal("#course-home h2, #coursein p", {
  origin: "right",
  delay: 500,
  distance: "100px",
});

ScrollReveal().reveal("#coursein h1, #coursein #sort", {
  origin: "left",
  delay: 500,
  distance: "100px",
});

ScrollReveal().reveal("#coursein .course-box.active", {
  delay: 500,
});

// INCOURSE
ScrollReveal().reveal("#course-inner .overview .course-img", {
  origin: "left",
  delay: 500,
  distance: "100px",
});
ScrollReveal().reveal("#course-inner .overview .course-img", {
  origin: "left",
  delay: 500,
  distance: "100px",
});
ScrollReveal().reveal(
  "#course-inner p, #course-inner h2, #course-inner h3, #course-inner span  ",
  {
    origin: "right",
    delay: 800,
    distance: "100px",
  }
);

ScrollReveal().reveal("#contact .getin", {
  origin: "left",
  delay: 400,
  distance: "100px",
});

ScrollReveal().reveal("#contact .form", {
  origin: "bottom",
  delay: 1000,
  distance: "100px",
});
// #endregion

// SORT GAME
//#region

let yakuza = document.getElementById("Yakuza");
let dragon = document.getElementById("Dragon");
let judgment = document.getElementById("Judgment");
let sortYakuza = document.getElementById("yakuza-sort");
let sortDragon = document.getElementById("dragon-sort");
let sortJudgment = document.getElementById("judgment-sort");

yakuza.onclick = function sort() {
  yakuza.classList.add("active");
  sortYakuza.classList.add("active");

  sortDragon.classList.remove("active");
  sortJudgment.classList.remove("active");

  dragon.classList.remove("active");
  judgment.classList.remove("active");
};

dragon.onclick = function sort() {
  dragon.classList.add("active");
  sortDragon.classList.add("active");

  sortYakuza.classList.remove("active");
  sortJudgment.classList.remove("active");

  yakuza.classList.remove("active");
  judgment.classList.remove("active");
};

judgment.onclick = function sort() {
  judgment.classList.add("active");
  sortJudgment.classList.add("active");

  sortDragon.classList.remove("active");
  sortYakuza.classList.remove("active");
  yakuza.classList.remove("active");
  dragon.classList.remove("active");
};
//#endregion
