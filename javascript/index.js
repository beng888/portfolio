// document.body.scrollTop = document.documentElement.scrollTop = 0;

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

//Fade in
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".skewElem", {
//   ScrollTrigger: {
//     trigger: ".skewElem",
//     toggleActions: "restart none none none",
//   },
//   y: -100,
//   opacity: 1,
//   duration: 1,
//   stagger: 1,
// });

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

// gsap.utils.toArray(".projectName").forEach((box) => {
//   gsap.fromTo(
//     box,
//     {
//       autoAlpha: 0,
//       x: -50,
//     },
//     {
//       scrollTrigger: {
//         trigger: box,
//         once: true,
//       },
//       duration: 1,
//       autoAlpha: 1,
//       stagger: 0.5,
//       x: 0,
//     }
//   );
// });

// //Skewing
// let proxy = { skew: 0 },
//   skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
//   clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

// ScrollTrigger.create({
//   onUpdate: (self) => {
//     let skew = clamp(self.getVelocity() / -1500);
//     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
//     if (Math.abs(skew) > Math.abs(proxy.skew)) {
//       proxy.skew = skew;
//       gsap.to(proxy, {
//         skew: 0,
//         duration: 0.8,
//         ease: "power3",
//         overwrite: true,
//         onUpdate: () => skewSetter(proxy.skew),
//       });
//     }
//   },
// });

// // make the right edge "stick" to the scroll bar. force3D: true improves performance
// gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' })
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
// gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%' })
// gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 })
// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })

// const timeline = gsap.timeline({ defaults: { duration: 1 }})
// timeline
//   .from('.header', { y: '-100%', ease: 'bounce' })
//   .from('.link', { opacity: 0, stagger: .5 })
//   .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
//   .from('.left', { x: '-100%' }, '<.5')
//   .to('.footer', {  y: 0, ease: 'elastic' })
//   .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

// const button = document.querySelector('.button')

// button.addEventListener('click', () => {
//   timeline.timeScale(3)
//   timeline.reverse()
// })

// const popContainer = document.querySelector(".infoContainer");

// const popover = new bootstrap.Popover(
//   document.querySelector(".infoContainer"),
//   {
//     container: ".skewElem",
//     // trigger: "focus",
//     template:
//       '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header">HELLOW</h3><div class="popover-body">WORLD</div></div>',
//   }
// );

// popover.toggleEnabled();

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-70px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// window.onscroll = function () {
//   if (window.scrollY < 200) {
//     document.getElementById("navbar").style.top = "0";
//   }
//   document.getElementById("navbar").style.top = "-70px";
// };

// // classList.add("activetab")

// nav.addEventListener("scroll", () => {
//   const target = document.getElementById("navbar");
//   if (window.scrollY > 100) {
//     document.getElementById("navbar").style.top = "0";
//   } else document.getElementById("navbar").style.top = "-70px";
// });

// var popoverTriggerList = [].slice.call(
//   document.querySelectorAll('[data-toggle="popover"]')
// );
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl, {
//     container: ".infoContainer",
//     // sanitize: false,
//     animation: true,
//     template:
//       '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
//   });
// });

// add tab

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

// focus project

// [...document.querySelectorAll(".skewElem")].forEach(function (item) {
//   item.addEventListener("focus", function () {
//     item.classList.add("showImages");
//   });
//   item.addEventListener("blur", function () {
//     item.classList.remove("showImages");
//   });
// });

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

//image

// function my_function() {
//   alert(this.src);
// }

// var class_names = document.getElementsByClassName("popImg");

// for (var i = 0; i < class_names.length; i++) {
//   class_names[i].addEventListener("click", my_function, false);
// }

//modal

// Get the modal

// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// collapse
// var myCollapse = document.getElementById("myCollapse");
// var bsCollapse = new bootstrap.Collapse(myCollapse, {
//   toggle: false,
// });

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
