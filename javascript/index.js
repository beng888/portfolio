// Nav animation

var scrollpos = window.scrollY;
var header = document.getElementById("logo");

function add_class_on_scroll() {
  header.classList.add("logoAnimate");
}

function remove_class_on_scroll() {
  header.classList.remove("logoAnimate");
}

window.addEventListener("scroll", function () {
  //Here you forgot to update the value
  scrollpos = window.scrollY;

  if (scrollpos >= 10) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
  // console.log(scrollpos);
});

//Home Parallax
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});

//Entrance
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  // .from("nav", { y: "-100%", ease: "bounce" })
  .from(".dots", { opacity: 0, x: "50vw", scale: 0, ease: "power2" })
  .from("#scene img", { scale: 0, stagger: 0.5 }, "<")
  .from("#scene h1", { opacity: 0, x: "-20px", stagger: 0.5 }, "<");

// Projects Fade in
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".skewElem").forEach((box) => {
  gsap.fromTo(
    box,
    {
      autoAlpha: 0,
      y: 200,
    },
    {
      scrollTrigger: {
        trigger: box,
        once: true,
      },
      duration: 1,
      autoAlpha: 1,
      stagger: 0.5,
      y: 0,
    }
  );
});

// add tab-index

var divs = document.getElementsByClassName("tabbable");
for (var i = 0, len = divs.length; i < len; i++) {
  divs[i].setAttribute("tabindex", "0");
}

// show img modal

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("popImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", my_function, false);
}

function my_function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//image modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//scrollspy

let menuSection = document.querySelectorAll("menu a");

// for clickable event
menuSection.forEach((v) => {
  v.onclick = () => {
    setTimeout(() => {
      menuSection.forEach((j) => j.classList.remove("active"));
      v.classList.add("active");
    }, 300);
  };
});

// for window scrolldown event

window.onscroll = () => {
  let mainSection = document.querySelectorAll("body section");

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;
    if (rect < window.innerHeight - 200) {
      menuSection.forEach((v) => v.classList.remove("active"));
      menuSection[i].classList.add("active");
    }
  });
};

//darkmode

function darkMode() {
  var element = document.getElementById("body");
  element.classList.toggle("switch");
}

// footer animation

var footer = document.getElementById("body");
window.addEventListener("scroll", function () {
  footer.classList.toggle(
    "footerAnimation",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
});
