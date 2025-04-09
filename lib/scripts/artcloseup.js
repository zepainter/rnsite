const artimgs = document.getElementsByClassName("artimg");
for (i=0 ; i<artimgs.length ; i++) {
  let art = artimgs[i];
  artimgs[i].onclick = () => { closeUp(art); };
  artimgs[i].onkeydown = (e) => {
    if (e.key==="Enter") { closeUp(art); }
  };
}

function closeUp() {
  let bg = document.createElement("div");
  document.getElementById("maskparent").appendChild(bg);
  bg.id = "mask";
  let artNew = document.createElement('img');
  let artOld = arguments[0];
  artNew.setAttribute('src',artOld.attributes.src.value);
  artNew.classList.add("closeupimg");
  bg.appendChild(artNew);
  artNew.tabIndex = "0";
  artNew.focus();
  setTimeout(function() {
    bg.onclick = () => { exitCloseUp(bg,artOld); };
    bg.onkeydown = (e) => {
      if (e.key==="Enter") { exitCloseUp(bg,artOld); }
    };
    artNew.onblur = () => { exitCloseUp(bg,artOld); };
  },100)
}

function exitCloseUp(bg,artOld) {
  bg.remove();
  artOld.focus();
}