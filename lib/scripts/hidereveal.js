document.addEventListener('click',function(event) {
  if (event.target.matches(".hidebtn")) {
    let spanbtn = event.target;
    let btnId = "#" + spanbtn.getAttribute("id");
    let target = document.querySelector("#div" + btnId.slice(5));
    hideOrReveal(spanbtn,btnId,target);
  };
})

function hideOrReveal(spanbtn,btnId,target) {
  (btnId=="#hideIntro") ? text1 = "See more..." : text1 = "+";
  (btnId=="#hideIntro") ? text2 = "Hide"        : text2 = "-";
  if (spanbtn.textContent==text1) {
    target.style.display = "block";
    spanbtn.textContent = text2;
    (btnId=="#hideIntro" || btnId=="#hideQuant") ?
      spanbtn.parentNode.classList.remove("finalp") : 0;
  } else if (spanbtn.textContent==text2) {
    target.style.display = "none";
    spanbtn.textContent = text1;
    (btnId=="#hideIntro" || btnId=="#hideQuant") ?
      spanbtn.parentNode.classList.add("finalp") : 0;
  }
}