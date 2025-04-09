document.addEventListener('click', (e) => {
  if (e.target.matches(".hidebtn")) {
    let spanbtn = e.target;
    let btnId = "#" + spanbtn.getAttribute("id");
    let target = document.querySelector("#div" + btnId.slice(5));
    hideOrReveal(spanbtn,btnId,target);
  };
})

function hideOrReveal(spanbtn,btnId,target) {
  text1 = (btnId=="#hideIntro") ? "See more..." : "+";
  text2 = (btnId=="#hideIntro") ? "Hide"        : "-";
  if (spanbtn.textContent==text1) {
    target.style.display = "block";
    spanbtn.textContent = text2;
    if (btnId=="#hideIntro" || btnId=="#hideQuant") {
      spanbtn.parentNode.classList.remove("finalp");
    }
  } else if (spanbtn.textContent==text2) {
    target.style.display = "none";
    spanbtn.textContent = text1;
    if (btnId=="#hideIntro" || btnId=="#hideQuant") {
      spanbtn.parentNode.classList.add("finalp");
    }
  }
}