const thumbnails = document.getElementsByClassName("thumbnail");
for (i=0 ; i<thumbnails.length ; i++) {
  let art = thumbnails[i];
  eventtype = (window.innerWidth<=800) ? 'dblclick' : 'click';
  thumbnails[i].addEventListener(eventtype, function() {
    closeUp(art);
  });
}

function closeUp() {
  let bg = document.createElement("div");
  document.querySelector("body").appendChild(bg);
  bg.id = "mask";
  let artNew = document.createElement('img');
  artNew.setAttribute('src',arguments[0].attributes.src.value.replace('-small',''));
  artNew.classList.add("closeupimg");
  bg.appendChild(artNew);
  setTimeout(function() {
    bg.addEventListener('click', function() {
      bg.remove();
    });
  },100)
  let protection = document.createElement('div');
  protection.classList.add("copydiv");
  bg.appendChild(protection);
}