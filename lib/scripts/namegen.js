genBtns = document.querySelectorAll('.genbtn');
for (i=0 ; i<genBtns.length ; i++) {
  genBtns[i].onclick = (e) => {
    langId = (e.target.matches(".jsbtn")) ? e.target.getAttribute("id").slice(3)
      : e.target.parentNode.getAttribute("id").slice(3);
    updateNames(eval(langId),langId+"Results");
  };
}

const Zia = {
  numSyls: {1: 2, 2: 8, 3: 10, 4: 6, 5: 1},
  syls: {"CV": 2, "CW": 1},
  cons: {"t": 3, "d": 3, "ch": 2, "j": 2, "k": 3, "'": 2,
         "s": 3, "z": 2, "h":  3, "n": 3, "r": 1, "l": 1, "w": 2},
  vows: {"i": 8, "ae": 5, "a": 12, "N": 4, "o": 8, "on": 4, "y": 4,
         "aer": 1, "ar": 2, "or": 1, "ael": 2, "al": 3, "ol": 2,
         "aeh": 1, "ah": 3, "oh": 2},
  hiatus: {"ia": 8, "io": 8, "oa": 4, "ya": 4, "yo": 4, "iae": 2,
           "iN": 3, "oN": 3, "yN": 2, "ion": 2, "yon": 2,
           "iaer": 1, "iar": 2, "ior": 2, "yar": 1, "yor": 1,
           "iael": 1, "ial": 2, "iol": 2, "yal": 1, "yol": 1, "oal": 1,
           "iah":  2, "ioh": 2, "oah": 1, "yah": 1, "yoh": 1},
  initialV: .08,
  finalC: 0,
  gemsToKeep: [],
  swapOut: ["N", "enn","lw","rw","l'","r'","h'",/^y/g,/y$/g],
  swapIn:  ["en","enh","w", "r", "l", "'", "h", "i",  "i"],
}
const Etl = {
  numSyls:  {1: 1, 2: 5, 3: 2},
  syls: {"CV": 1, "CVF": 1},
  cons: {"p": 1, "t": 3, "tz": 3, "tl": 2, "c":  3, "'": 1,
                 "s": 3, "x":  3, "lh": 1, "j":  1, "h":  2,
         "m": 1, "n": 2, "r":  2, "l":  3, "ng": 1, "y":  3, "w": 1},
  vows: {"i": 2, "e": 3, "a": 2, "o": 2, "u": 2},
  codas:  {"p": 1, "t":  2, "c": 3, "'": 1, "tz": 1, "tl": 1,
           "s": 2, "lh": 1, "x": 2, "j": 1, "h": 1,
           "m": 1, "n":  2, "r": 1, "l": 1},
  codasF: {"p": 1, "t":  4, "c": 7, "'": 1, "tz": 5, "tl": 6,
           "s": 2, "lh": 2, "x": 2, "j": 2, "h": 1,
           "m": 1, "n":  2, "r": 1, "l": 2},
  initialV: .06,
  finalC: 1,
  swapOut: ["tztz","tztl","lhlh","tzs","tzx","lhh","ngk","ts","ph","hh",
            "tltl","tltz","ngng","tll","xs","ngj","ngy","th","kh","jh",
            "pr","tr","cr","rw","wr","'r","r'",
            "'p","'t","'c","'tz","'tl","''","ci","ce","cki","cke"],
  swapIn:  ["tz",  "ttl", "lh",  "tz", "tz", "lh", "nk", "tz","pp","h",
            "tl",  "ttz", "ng",  "tl", "ss", "nj", "ny","tt","kk","h",
            "p", "t", "c", "r", "w", "r", "r",
            "pp","tt","cc","ttz","ttl","'", "ki","ke","cci","cce"]
}
const Vei = {
  numSyls: {2: 2, 3: 1},
  syls: {"CV": 1, "RV": 1},
  cons: {"p": 2, "b": 2, "t": 2, "d": 2, "k": 2, "g": 2,
         "f": 2, "v": 2, "s": 2, "z": 2, "h": 1,
         "m": 2, "n": 2, "r": 1, "y": 1},
  vows: {"i": 2, "ei": 2, "a": 4, "u": 2, "ai": 1, "au": 1},
  clusters: {         "pn": 1, "pr": 2, "py": 1,          "ps": 3,
                      "bn": 1, "br": 2, "by": 1, "bv": 3, "bz": 3,
             "tm": 1, "tn": 1, "tr": 2,                   "ts": 1,
             "dm": 2, "dn": 1, "dr": 2,          "dv": 3, "dz": 1,
                      "kn": 1, "kr": 2, "ky": 1,          "ks": 3,
                      "gn": 1, "gr": 2, "gy": 1, "gv": 2, "gz": 3,
             "fr": 2, "fy": 1, "vr": 2, "vy": 1},
  initialV: .06,
  finalC: 0,
  gemsToKeep: [],
  swapOut: ["yi"],
  swapIn:  ["yu"]
}
const Por = {
  numSyls: {1: 1, 2: 5, 3: 3},
  syls: {"CV": 3, "CVF": 3, "RV": 2, "RVF": 2},
  cons: {"p": 3, "t": 3, "T": 2, "t'": 2, "C": 1, "k": 3, "q": 2,
         "b": 1, "d": 1, "D": 1, "d'": 1, "j": 1,
         "f": 1, "H": 1, "s": 2, "s'": 2, "S": 2, "x": 1, "h": 1,
         "v": 1,         "z": 1, "z'": 1, "Z": 1,
         "m": 3, "n": 3, "G": 2, "r": 3, "l": 1, "R": 2, "y": 1},
  vows: {"i": 3, "e": 3, "a": 6, "o": 3, "u": 3,
         "ee": 1, "oo": 1, "aa": 1, "ai": 1},
  codas: {"p": 2, "t": 4, "T": 2, "k": 3, "q": 2,
          "H": 5, "s": 5, "S": 5, "x": 2,
          "m": 2, "n": 3, "G": 2, "l": 2, "r": 4,
          "ps": 1, "ts": 1, "ks": 2, "pS": 1, "kS": 2,
          "nt": 1, "nk": 1, "nH": 1, "ns": 1},
  clusters: {         "pr": 6, "tw": 4, "tr": 10, "kw": 2, "kr": 6, "qr": 2,
                      "br": 4, "dw": 2, "dr":  5,
             "mw": 1, "mr": 8, "nw": 2, "nr":  8, "Gw": 1, "Gr": 1,
             "sw": 2, "sr": 6, "Sw": 2, "Sr":  6,
             "sp":  5, "st":  5, "sk":  5, "sm":  3, "sn":  2,
             "Sp":  4, "St":  4, "Sk":  4, "Sm":  2,
             "spr": 2, "str": 2, "skr": 3, "smr": 2, "snr": 1,
             "Spr": 1, "Str": 1, "Skr": 1, "Smr": 1},
  initialV: 0,
  finalC: .4,
  voiceless: ["p","t","T","C","k","q","H","s","S","x","h"],
  voiced:    ["b","d","D","j","-","-","-","z","Z","-","-"],
  gemsToKeep: ["e","o","a"],
  swapOut: ["tT","tS","tC","Tt","TS","tC",
                 "sS","sC","Ss",     "SC",
            "rR","tR","sR","stt","mR","nR","gR","lR",
            "nG","Gk","Gx","kq","qk","ph","kh",
            "woo","wu","yee","yi",
            "T", "D", "C", "H", "S", "Z", "G", "R", /ee$/g,/oo$/g],
  swapIn:  ["T", "S", "C", "t", "S", "C",
                 "s", "C", "s",      "S",
            "r", "tr","sr","st", "mr","nr","gr","lr",
            "G", "nk","nx","k", "q", "p", "k",
            "we", "wi","ya", "yo",
            "tt","dd","ch","th","sh","zh","ng","rr","i",   "u"],
  special: function (name) {
    if (["n","m","t","k"].includes(name[0]) && !["h","'"].includes(name[1])
        && !["nr","nw","mr","mw","Gr","Gw"].includes(name.slice(0,2))
        && (Math.random()<.4))  {
      name = "h" + name;
    } //adds initial aspiration
    return name;
  }
}
const badnames = ["spamrat","allah","anal","anus","anuses","ass","asses","asshole","assholes","bastard","bastards","bitch","bitches","bimbo","bimbos","boob","boobies","booby","booger","boogers","boxers","bra","bras","briefs","bugger","buggered","buggers","bullshit","bung","bungs","butt","butts","butthole","buttholes","chinaman","chinamen","chink","chinks","christ","cock","cocks","coon","coons","crap","crapped","craps","crip","crips","cunt","cunts","damn","dammit","damnit","dick","dicks","dickhead","dickheads","dimwit","dimwits","drug","drugs","dung","dungs","dyke","dykes","fag","fags","faggot","faggots","fart","farts","fecal","feces","fuck","fucked","fucker","fucks","genital","genitals","genitalia","gimp","gimps","god","goddamn","goddamned","goddammit","goddamnit","gods","gringo","gringos","gunk","gypsies","gypsy","gypsys","hag","hags","hate","hated","hater","hates","idiot","idiots","imbecile","imbeciles","injun","injuns","jesus","kike","kikes","killer","killers","kyke","kykes","lame","lamed","lamer","lames","lamest","meth","moron","morons","motherfucker","motherfuckers","murder","murderer","murdered","murders","nazi","nazis","nig","nigga","niggas","nigger","niggers","nigs","nimrod","nimrods","oreo","oreos","panties","pee","pees","penis","penises","phlegm","piss","pissed","pisser","pisses","poop","pooped","poops","porn","porno","pornos","prick","pricks","puss","pusses","pussies","pussy","rape","raper","rapes","rapist","rectum","rectums","rectal","redskin","redskins","retard","retarded","retards","sambo","sambos","semen","shat","shemale","shemales","sheman","shit","shits","sissies","sissy","slut","sluts","snot","snots","spam","spams","spic","spics","spick","spicks","spik","spiks","spit","spits","squaw","squaws","stank","stink","stinks","suck","sucked","sucker","sucks","taint","taints","teat","testes","testicle","testicles","thong","thongs","tit","titties","titty","tranny","trannies","twat","twats","twink","twinks","underpants","underwear","urinate","urinated","urinates","urine","urines","vagina","vaginal","vaginas","vulva","vulvas","wetback","wetbacks","whore","whores","wuss","wusses","yahweh"];
//most of these could not be generated with current conlangs anyway, but quite a few could, so let's just play it safe

function updateNames(lang,divId) {
  const genbtn = document.querySelector('#btn' + divId.slice(0,3));
  genbtn.style.marginBottom = '10px';
  const gendiv = document.querySelector("#" + divId);
  while (gendiv.firstChild) {
    gendiv.removeChild(gendiv.firstChild);
  }
  let names = generateNames(lang,10);
  for (i=0; i<names.length; i++) {
    const p = document.createElement("div");
    gendiv.appendChild(p);
    p.textContent = names[i];
    p.classList.add("genp");
    p.style.gridColumn    = i%2==0 ? "1/2" : "2/3";
    p.style.paddingBottom = (i>=names.length-2) ? "0" : "5px";
  }
}

function generateNames(lang,howMany) {
  let names = [];
  for (i=0; i<howMany; i++) {
    let name = generateOneName(lang);
    while (badnames.includes(name)) {
      name = generateOneName(lang);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1);
    names.push(name);
  }
  return names;
}

function generateOneName(lang) {
  let shape = getShape(lang);
  let name = getLetters(shape,lang);
  if (name[0]=="'") { name = name.slice(1); }
  if (name[name.length-1]=="-") { name = name.slice(0,name.length-1); }
  if (lang.voiceless)  { name = checkVoicing(name,lang.voiceless,lang.voiced); }
  if (lang.gemsToKeep) { name = removeGeminates(name,lang.gemsToKeep); }
  if (lang.special)    { name = lang.special(name); }
  if (lang.swapOut)    { name = swapSequences(name,lang.swapOut,lang.swapIn); }
  return name;
}

function getShape(lang) {
  let shape = "";
  let numSyls = sample(lang.numSyls);
  let numCodas    = 0;
  let numClusters = 0;
  let numHiatus   = 0;
  for (j=0; j<numSyls; j++) {
    let nextSyl = sample(lang.syls);
    let chance = Math.random();
    while ((numSyls==1 && ["V"].includes(nextSyl)) ||
        (nextSyl.includes("F") && chance<numCodas/numSyls) ||
        (nextSyl.includes("R") && chance<numClusters/numSyls) ||
        (nextSyl.includes("W") && (chance<numHiatus/numSyls || j==numSyls-1)) ||
        (j>0 && nextSyl.includes("R") && shape[shape.length-1]=="F")) {
      nextSyl = sample(lang.syls);
    }
    if (nextSyl.includes("F")) { numCodas++; }
    if (nextSyl.includes("R")) { numClusters++; }
    if (nextSyl.includes("W")) { numHiatus++;  j++; }
    shape = shape + nextSyl;
  }
  let chance = Math.random();
  if (shape[0]=="C" && chance<lang.initialV) { shape = shape.slice(1); }
  if (!(shape[shape.length-1]=="F") && chance<lang.finalC) { shape += "f"; }
  return shape;
}

function getLetters(shape,lang) {
  let name = "";
  let letter = "";
  let digraphsC = 0;
  let digraphsV = 0;
  for (j=0; j<shape.length; j++) {
    if (shape[j]=="C") {
      letter = sample(lang.cons);
      if (digraphsC && (letter.length>1||
          (letter==letter.toUpperCase && !(letter=="'")) )) {
        letter = sample(lang.cons);
      } //reduces likelihood of multiple consonantal digraphs
      if (letter.length>1) { digraphsC++; }
    } else if (shape[j]=="V") {
      letter = sample(lang.vows);
      if (letter.length>1 && digraphsV) {
        letter = sample(lang.vows);
      } //reduces likelihood of multiple long vowels/diphthongs (& Zia codas)
      if (letter.length>1) { digraphsV++; }
    } else if (shape[j]=="F" || shape[j]=="f") {
      letter = (shape[j]=="f" && lang.codasF) ? sample(lang.codasF)
        : sample(lang.codas);
      if (digraphsC && (letter.length>1||
          (letter==letter.toUpperCase && !(letter=="'")) ) ) {
        letter = sample(lang.codas);
      } //reduces likelihood of multiple consonantal digraphs & complex codas
      if (letter.length>1 || (letter==letter.toUpperCase && !(letter=="'"))) {
        digraphsC++;
      }
    } else if (shape[j]=="R") {
      letter = sample(lang.clusters);
    } else if (shape[j]=="W") {
      letter = sample(lang.hiatus);
      if (letter.length>2) { digraphsV++; }
    }
    name += letter;
  }
  return name;
}


function checkVoicing(name,voiceless,voiced) {
  for (n=0; n<name.length-1; n++) {
    if (voiceless.includes(name[n]) && voiced.includes(name[n+1])) {
      name = name.slice(0,n+1) + voiceless[voiced.indexOf(name[n+1])] +
        name.slice(n+2);
    }
  }
  return name;
}

function removeGeminates(name,keep) {
  for (n=0; n<name.length-2; n++) {
    if (name[n]==name[n+1] && !keep.includes(name[n])) {
      name = name.slice(0,n) + name.slice(n+1);
      n -= 1;
    }
  }
  return name;
}

function swapSequences(name,swapOut,swapIn) {
  for (n=0; n<swapOut.length; n++) {
    name = name.replaceAll(swapOut[n],swapIn[n]);
  }
  return name;
}


function sample(arr) {
  if (!Array.isArray(arr)) {
    let obj = arr;
    arr = [];
    for (let key in obj) {
      for (k=0; k<obj[key]; k++) {
        arr.push(key);
      }
    }
  }
  let randomIndex = Math.floor(Math.random()*arr.length);
  let item = arr[randomIndex];
  return item;
}