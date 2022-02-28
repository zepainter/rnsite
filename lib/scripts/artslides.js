const slideWindow = document.querySelector('#artslides');
const slides = document.getElementsByClassName("thumbnail");
const slide = [];

for (i=0 ; i<2 ; i++) {
  slide[i] = document.createElement('img');
  slide[i].classList.add('slideimg');
  slideWindow.appendChild(slide[i]);
}

const btn_back = document.querySelector('#slideback');
const btn_next = document.querySelector('#slidenext');
btn_back.addEventListener('click',function() { moveSlide(false); } );
btn_next.addEventListener('click',function() { moveSlide(true); } );

ix=0;
slide_ix = 0;
slide[0].setAttribute('src',slides[0].attributes.src.value.replace('-small',''));
newSlide();
let timer = setInterval(newSlide,7000);

function newSlide() {
  let temp = (slide_ix==1) ? 0 : 1;
  slide[slide_ix].style.opacity = '1';
  slide[temp].style.opacity = '0';
  ix = (ix==slides.length-1) ? 0 : ix+1;
  setTimeout( function() {
    slide[temp].setAttribute('src',slides[ix].attributes.src.value.replace('-small',''));
  }, 1000);
  slide_ix = temp;
}

function moveSlide(forward) {
  if (!forward) { ix -= 2; }
  if (ix<0) { ix += slides.length; }
  newSlide();
  clearInterval(timer);
  timer = setInterval(newSlide,7000);
}