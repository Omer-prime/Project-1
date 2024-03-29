const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
function firstpageAnim() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
    .to(".boundingelem", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      stagger: .2,
      delay: -1,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
    })
}
var timeout;
function minicircleFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  })
}
function circlemove() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);
    xprev = dets.clientX;
    yprev = dets.clientY;

    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
    minicircleFollower(xscale, yscale);
   timeout = this.setTimeout(function(){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
   },100);
  });
}
circlemove();
minicircleFollower();
firstpageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});





//document.querySelectorAll(".elem").forEach(function(elem){
//elem.addEventListener("mousemove", function (dets){
   
   //var diff = dets.clientY - elem.getBoundingClientRect().top;
    
   // gsap.to(elem.querySelector("img"),{
    // opacity:1,
 //    ease: "Power1.inOut",
  //   top: diff,
  //    left: dets.clientX
  // });
//  });
//});