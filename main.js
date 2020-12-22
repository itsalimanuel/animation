
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const title = intro.querySelector('h1');
const bounds = intro.getBoundingClientRect();
const section = document.querySelector('section');
const end = section.querySelector('h1');


const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: "400%",
    triggerElemnt: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro, {pushFllowers: false})
    .addTo(controller);


const textAnimation = TweenMax.fromTo(title, 3, { opacity: 1 }, { opacity: 0 });
let scenenew = new ScrollMagic.Scene({
    duration: '100%',
    triggerElemnt: intro,
    triggerHook: 0
})
    .setTween(textAnimation)
    .addTo(controller);

let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = scrollpos;
}, 16.6);
var Scrollbar = window.Scrollbar;

  Scrollbar.init(document.querySelector('video'), options);
  var options = {
      'damping': 0.05,
      'alwaysShowTracks': false
  }

// let scroller = {
//     wheelMultiplier: getLineHeight(),
//     ease: 0.03,
//     speed: 0,
//     minY: 0,
//     maxY: bounds.height - window.innerHeight,
//     y: 0
// };

// window.scrollTo("wheel", onwheel);
// onFrame();
// function onFrame() {

//     scroller.speed += -scroller.speed * scroller.ease;
//     scroller.y -= Math.round(scroller.speed * 1000) / 1000;

//     if (scroller.y < scroller.minY) {
//         scroller.y = scroller.minY;
//         scroller.speed = 0;
//       } else if (scroller.y > scroller.maxY) {
//         scroller.y = scroller.maxY;
//         scroller.speed = 0;
//       }
//     let progress = scroller.y / scroller.minY;

//     requestAnimationFrame(onFrame)
// }