document.addEventListener('click',function(event) {
  if (event.target.matches(".jsbtn") || event.target.parentNode.matches(".jsbtn")) {
    let langId = (event.target.matches(".jsbtn")) ? event.target.getAttribute("id").slice(3)
      : event.target.parentNode.getAttribute("id").slice(3);
    let divId = langId + "Results";
    updateNames(eval(langId),divId);
  };
});

const Zia = {
  numSyls: {2: 8, 3: 10, 4: 6, 5: 1},
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
  swapOut: ["N", "enn","lw","rw","l'","r'","h'"],
  swapIn:  ["en","enh","w", "r", "l", "'", "h"],
}
const Etl = {
  numSyls:  {1: 1, 2: 5, 3: 2},
  syls: {"CV": 1, "CVF": 1},
  cons: {"p": 1, "t": 3, "tz": 3, "tl": 2, "k":  3, "'": 1,
                 "s": 3, "sh": 3, "lh": 1, "j":  1, "h":  2,
         "m": 1, "n": 2, "r":  2, "l":  3, "ng": 1, "y":  3, "w": 1},
  vows: {"i": 2, "e": 3, "a": 2, "o": 2, "u": 2},
  codas:  {"p": 1, "t":  2, "k":  2, "'": 1, "tz": 1, "tl": 1,
           "s": 2, "lh": 1, "sh": 2, "j": 1, "h": 1,
           "m": 1, "n":  2, "r":  1, "l": 1},
  initialV: .06,
  finalC: 1,
  swapOut: ["tztz","tztl","lhlh","tzs","lhh","ngk","ts","ph",
            "tltl","tltz","ngng","shs","shh","ngj","ngy","th","kh","jh",
            "'p","'t","'k","'tz","'tl"],
  swapIn:  ["tz",  "ttl", "lh",  "tz", "lh", "nk", "tz","pp",
            "tl",  "ttz", "ng",  "ss", "sh", "nj", "ny","tt","kk","h",
            "pp","tt","kk","ttz","ttl"]
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
         "ee": 1, "oo": 1, "ai": 1},
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
  gemsToKeep: ["e","o"],
  swapOut: ["tT","tS","tC","Tt","TS","tC",
                 "sS","sC","Ss",     "SC",
            "rR","nG","tR","sR","stt","mR","nR","gR","lR",
            "nG","Gk","Gx","kq","qk","ph","kh",
            "woo","wu","yee","yi",
            "T", "D", "C", "H", "S", "Z", "G", "R"],
  swapIn:  ["T", "S", "C", "t", "S", "C",
                 "s", "C", "s",      "S",
            "r", "G", "tr","sr","st", "mr","nr","gr","lr",
            "G", "nk","nx","k", "q", "p", "k",
            "we", "wi","ya", "yo",
            "tt","dd","ch","th","sh","zh","ng","rr"]
}
const testing = {
  numSyls: {1: 1, 2: 2, 3: 1},
  syls: {"CV": 4, "CW": 2, "CVF": 2, "CWF": 1},
  cons: {"p": 4, "t": 6, "k":  4, "kw": 5, "'": 12, "th": 12, "h": 2,
         "b": 2, "d": 6, "g":  4, "gw": 5,          "dh":  8, 
         "m": 4, "n": 4, "ng": 2, "r":  6, "y":  4, "w":   2,
         "pr": 1, "br": 1, "tr": 1, "dr": 1, "kr": 1, "gr": 1},
  vows: {"i": 3, "e": 3, "a": 3, "o": 3, "u": 3,
         "ey": 2, "ay": 2, "oy": 1, "aw": 1, "ow": 1},
  hiatus: {"iya": 1, "iyo": 1, "eya": 1, "aya": 1, "oya": 1, "owa": 1,"uwa": 1},
  codas: {"n": 1},
  initialV: 0,
  finalC: 0,
  gemsToKeep: []
}
const Yeh = {
  numSyls: {1: 1, 2: 3, 3: 2},
  syls: {"CV": 5, "CVF": 5, "RV": 3, "RVF": 3, "V": 1, "VF": 1},
  cons: {"p'": 1, "p": 1, "t'": 1, "t": 1, "d": 1, "k'": 1, "k": 1, "g": 1,
         "ts'": 1, "ts": 1, "j": 1, "'": 1,
         "s": 1, "z": 1, "sy": 1, "zy": 1,
         "m": 1, "n": 1, "ng": 1, "r": 1, "y": 1, "w": 1, "h": 1},
  vows: {"i": 1, "e": 1, "a": 1, "o": 1, "u": 1,
         "I": 1, "A": 1, "U": 1, "e\u0303": 1, "o\u0303": 1},
  codas: {"'": 1, "h": 1},
  clusters: {"py": 8, "ty": 10, "dy": 10, "ky": 12, "gy": 12,
             "pw": 6, "tw": 10, "dw":  8, "kw":  8, "gw":  8, "sw": 6, "zw": 6,
             "my": 10, "ny": 10, "ngy": 2, "hy": 18,
             "mw":  2, "nw":  8, "ngw": 1, "hw": 18,
             "ph":  8, "th":  8, "kh":  8, "sh":  8,
             "phy": 2, "thy": 2, "khy": 2, "shy": 5,
             "phw": 2, "thw": 2, "khw": 2, "shw": 5,
             "sm": 5, "sn": 5, "smy": 2, "sny": 2, "snw": 2,
             "sp":  14, "st":  16, "sd":  4, "sk":  16, "sg":  4,
             "spy":  4, "sty":  4, "sdy": 3, "sky":  5, "sgy": 3,
             "spw":  3, "stw":  3, "sdw": 2, "skw":  3, "sgw": 2,
             "sph":  2, "sth":  2,           "skh":  3,
             "sphy": 1, "sthy": 1,           "skhy": 1,
             "sphw": 1, "sthw": 1,           "skhw": 1},
  initialV: .08,
  finalC: 0,
  gemsToKeep: [],
  swapOut: ["I", "A", "U"],
  swapIn:  ["ii","aa","uu"]
}
const Ejr = {
  numSyls: {1: 1, 2: 3, 3: 2},
  syls: {"VFC": 6, "VC": 1},
  vows: {"j": 2, "j.": 2, "j^": 2, "j`": 2, "zz^": 1, "z^z": 1,
         "z": 2, "z.": 2, "z^": 2, "z`": 2,
         "jr": 2, "jr.": 2, "jr`": 2,
         "r":  3, "r.":  3, "r`":  3,
         "i": 3, "e": 3, "a": 3, "i.": 2, "e.": 2, "a.": 2},
  codas: {"c": 2, "c.": 2, "c^": 2, "c`": 2, "ss^": 1, "s^s": 1,
          "s": 2, "s.": 2, "s^": 2, "s`": 2,
          "i_": 2, "e_": 2, "a_": 2, "i_.": 1, "e_.": 1, "a_.": 1},
  cons:  {"-": 1},
  initialV: 0,
  finalC: 0,
  swapOut: [".",     "`",     "_",     "^"],
  swapIn:  ["\u0323","\u0301","\u0331","\u030C"]
}
const badnames = ["spamrat","allah","anal","anus","ass","asses","asshole","assholes","bastard","bastards","bitch","bitches","bimbo","bimbos","boxers","bra","bras","briefs","bugger","buggered","buggers","bullshit","bung","bungs","butt","butts","butthole","buttholes","chinaman","chink","chinks","christ","cock","cocks","coon","coons","crap","crapped","craps","crip","cunt","damn","damnit","dick","dicks","dickhead","dickheads","dimwit","dimwits","drug","drugs","dung","dungs","dyke","dykes","fag","fags","faggot","faggots","fart","farts","fecal","feces","fuck","fucked","fucker","fucks","genital","genitalia","gimp","gimps","god","goddamn","goddamned","goddamnit","gods","gringo","gringos","gypsies","gypsy","gypsys","hag","hags","hate","hated","hater","hates","idiot","idiots","imbecile","imbeciles","injun","injuns","jesus","kike","kikes","killer","killers","kyke","kykes","lame","lamed","lamer","lames","lamest","meth","moron","morons","motherfucker","motherfuckers","murder","murderer","murdered","murders","nazi","nazis","nig","nigga","niggas","nigger","niggers","nigs","nimrod","nimrods","oreo","oreos","panties","pee","pees","penis","penises","piss","pissed","pisser","pisses","poop","pooped","poops","porn","prick","pricks","puss","pusses","pussies","pussy","rape","raper","rapes","rapist","rectum","rectums","rectal","redskin","redskins","retard","retarded","retards","sambo","sambos","semen","shat","shemale","shemales","sheman","shit","shits","sissies","sissy","slut","sluts","spam","spams","spic","spics","spick","spicks","spik","spiks","squaw","squaws","stank","stink","stinks","suck","sucked","sucker","sucks","tranny","trannies","twat","twats","twink","twinks","underpants","underwear","urinate","urinated","urinates","urine","vagina","vaginal","vaginas","wetback","wetbacks","whore","whores","wuss","wusses","yahweh"];
//most of these could not be generated with current conlangs anyway, but quite a few could, so let's just play it safe

function updateNames(lang,divId) {
  console.log('#btn' + divId.slice(0,3));
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
    while (badnames.indexOf(name)>-1) {
      name = generateOneName(lang);
    }
    name = (lang==Yeh||lang==Ejr) ? name :
      name.charAt(0).toUpperCase() + name.slice(1);
    names.push(name);
  }
  return names;
}

function generateOneName(lang) {
  let shape = getShape(lang);
  let name = getLetters(shape,lang);
  (name[0]=="'") ? name = name.slice(1) : 0;
  (name[name.length-1]=="-") ? name = name.slice(0,name.length-1) : 0;
  lang.voiceless  ? name = checkVoicing(name,lang.voiceless,lang.voiced) : 0;
  lang.gemsToKeep ? name = removeGems(name,lang.gemsToKeep) : 0;
  lang.swapOut    ? name = swapSequences(name,lang.swapOut,lang.swapIn) : 0;
  if (lang==Zia) {
    if (name[0]=="y") { name = "i" + name.slice(1); }
    if (name.slice(-1)=="y") { name = name.slice(0,name.length-1) + "i"; }
  } else if (lang==Por) {
    if (["n","m","t","k"].indexOf(name[0])>-1 && ["h","'"].indexOf(name[1])==-1
      && (["n","m"].indexOf(name[0])==-1 || ["r","w"].indexOf(name[1])==-1)
      && (Math.random()<.4)) { name = "h" + name; } //adds aspiration
    if (name.slice(-2)=="ee") { name = name.slice(0,name.length-2) + "i"; }
    if (name.slice(-2)=="oo") { name = name.slice(0,name.length-2) + "u"; }
  }
  return name;
}

function getShape(lang) {
  let shape = "";
  let numSyls = sample(lang.numSyls);
  let numCodas    = 0;
  let numClusters = 0;
  let numHiatus   = 0;
  for (j=0; j<numSyls; j++) {
    let nextsyl = sample(lang.syls);
    let chance = Math.random();
    while ((j==numSyls-1 && nextsyl.indexOf("W")>-1) ||
        (numSyls==1 && ["V"].indexOf(nextsyl)>-1) ||
        (nextsyl.indexOf("F")>-1 && chance<numCodas/numSyls) ||
        (nextsyl.indexOf("R")>-1 && chance<numClusters/numSyls) ||
        (nextsyl.indexOf("W")>-1 && chance<numHiatus/numSyls) ||
        (j>0 && nextsyl.indexOf("R")>-1 && shape[shape.length-1]=="F")) {
      nextsyl = sample(lang.syls);
    }
    nextsyl.indexOf("F")>-1 ? numCodas++ : 0;
    nextsyl.indexOf("R")>-1 ? numClusters++ : 0;
    nextsyl.indexOf("W")>-1 ? numHiatus++ : 0;
    nextsyl.indexOf("W")>-1 ? j++ : 0;
    shape = shape + nextsyl;
  }
  let chance = Math.random();
  (shape[0]=="C" && chance<lang.initialV) ? shape = shape.slice(1) : 0;
  (!(shape[shape.length-1]=="F") && chance<lang.finalC) ? shape += "F" : 0;
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
      letter.length>1 ? digraphsC++ : 0;
    } else if (shape[j]=="V") {
      letter = sample(lang.vows);
      if (letter.length>1 && digraphsV) {
        letter = sample(lang.vows);
      } //reduces likelihood of multiple long vowels/diphthongs & Zia codas
      letter.length>1 ? digraphsV++ : 0;
    } else if (shape[j]=="F") {
      letter = sample(lang.codas);
      if (digraphsC && (letter.length>1||
          (letter==letter.toUpperCase && !(letter=="'")) )) {
        letter = sample(lang.codas);
      } //reduces likelihood of multiple consonantal digraphs & complex codas
      letter.length>1 || (letter==letter.toUpperCase && !(letter=="'")) ?
        digraphsC++ : 0;
    } else if (shape[j]=="R") {
      letter = sample(lang.clusters);
    } else if (shape[j]=="W") {
      letter = sample(lang.hiatus);
      letter.length>2 ? digraphsV++ : 0;
    }
    name += letter;
  }
  return name;
}


function checkVoicing(name,voiceless,voiced) {
  for (n=0; n<name.length-1; n++) {
    if (voiceless.indexOf(name[n])>-1 && voiced.indexOf(name[n+1])>-1) {
      name = name.slice(0,n+1) + voiceless[voiced.indexOf(name[n+1])] +
        name.slice(n+2);
    }
  }
  return name;
}

function removeGems(name,keep) {
  for (n=0; n<name.length-2; n++) {
    if (name[n]==name[n+1] && keep.indexOf(name[n])==-1) {
      name = name.slice(0,n) + name.slice(n+1);
      n -= 1;
    }
  }
  return name;
}

function swapSequences(name,swapOut,swapIn) {
  for (n=0; n<swapOut.length; n++) {
    while (name.indexOf(swapOut[n])>-1) {
      name = name.replace(swapOut[n],swapIn[n]);
    }
  }
  return name;
}


function sample(arr) {
  if (!(Array.isArray(arr))) {
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