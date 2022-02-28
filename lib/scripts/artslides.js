const slideWindow = document.querySelector('#artslides');
const art = document.getElementsByClassName("thumbnail");
const slide = [];

for (i=0 ; i<3 ; i++) {
  slide[i] = document.createElement('img');
  slide[i].classList.add('slideimg');
  slideWindow.appendChild(slide[i]);
  slide[i].style.opacity = (i==0) ? '1' : '0';
}
slide[0].setAttribute('src',art[0].attributes.src.value.replace('-small',''));
setTimeout( function() {
  slide[1].setAttribute('src',art[1].attributes.src.value.replace('-small',''));
  slide[2].setAttribute('src',art[art.length-1].attributes.src.value.replace('-small',''));
}, 1000);

const btn_back = document.querySelector('#slideback');
const btn_next = document.querySelector('#slidenext');
btn_back.addEventListener('click',function() { newSlide(false,true); } );
btn_next.addEventListener('click',function() { newSlide(true,true); } );

art_ix   = 0;
slide_ix = 0;
let timer = setInterval(function() { newSlide(true,false); },7000,true);

function newSlide(forward,reset) {
  let ix_next = (slide_ix==2) ? 0 : slide_ix+1;
  let ix_last = (slide_ix==0) ? 2 : slide_ix-1;
  slide[slide_ix].style.opacity = '0';
  if (forward) {
    slide[ix_next].style.opacity = '1';
    slide_ix = (slide_ix==2) ? 0 : slide_ix+1;
    art_ix   = (art_ix==art.length-1) ? 0 : art_ix+1;
    ix_next = (slide_ix==2) ? 0 : slide_ix+1;
    art_ix_next = (art_ix==art.length-1) ? 0 : art_ix+1;
    slide[ix_next].setAttribute('src',art[art_ix_next].attributes.src.value.replace('-small',''));
  } else {
    slide[ix_last].style.opacity = '1';
    slide_ix = (slide_ix==0) ? 2 : slide_ix-1;
    art_ix   = (art_ix==0) ? art.length-1 : art_ix-1;
    ix_last = (slide_ix==0) ? 2 : slide_ix-1;
    art_ix_last = (art_ix==0) ? art.length-1 : art_ix-1;
    slide[ix_last].setAttribute('src',art[art_ix_last].attributes.src.value.replace('-small',''));
  }
  if (reset) {
    clearInterval(timer);
    timer = setInterval(function() { newSlide(true,false); },7000);
  }
}