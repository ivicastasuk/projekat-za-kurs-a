// izdvajanje naziva ucitane stranice
var path = window.location.pathname;
var page = path.split("/").pop();

// provera da li je index.html ili neka druga stranica aktivna
if (page == "index.html") {
  var putanja = "slike/";
} else {
  var putanja = "../slike/";
}

// ==================================
// funkcija za promenu social ikonica
// by Me
// ==================================
function changeIcon(id, ikonica){
  document.getElementById(id).src = putanja + ikonica + ".png";
}

// =======================
// random slika u footer-u
// by Me
// =======================
function randomSlika() {
  var i = Math.floor(Math.random() * 6);
  var p = Math.floor(Math.random() * 6);
  // niz za nazive slika
  var slike = [];
  slike[0] = "1.jpg";
  slike[1] = "2.jpg";
  slike[2] = "3.jpg";
  slike[3] = "4.jpg";
  slike[4] = "5.jpg";
  slike[5] = "6.jpg";
  // postavljanje slike po slucajnom izboru u footer i body bg
  document.getElementsByClassName('random_img')[0].src = putanja + "galerija/" + slike[i];
  document.getElementById('klizac').value = i+1;
  // document.getElementById('random_img_link').href = putanja + slike[i];
  // document.body.style.backgroundImage = "url('" + putanja + slike[p] + "')"
}

// ======================================
// funkcije za pomeranje slika u galeriji
// by Me
// ======================================
function imgLeft(){
  var sledeca = 0;
  var slika = document.getElementById('prikaz');
  var link = document.getElementById('link');
  var broj = slika.src.split("/").pop();
  broj = broj.split(".");
  var redni = Number(broj[0]);
  if(redni == 1){
    sledeca = 6;
    slika.src = putanja + "galerija/" + sledeca + ".jpg";
    link.href = putanja + "galerija/" + sledeca + ".jpg";
  } else {
    redni -= 1;
    slika.src = putanja + "galerija/" + redni + ".jpg";
    link.href = putanja + "galerija/" + redni + ".jpg";
  }
}
function imgRight(){
  var sledeca = 0;
  var slika = document.getElementById('prikaz');
  var link = document.getElementById('link');
  var broj = slika.src.split("/").pop();
  broj = broj.split(".");
  var redni = Number(broj[0]);
  if(redni == 6){
    sledeca = 1;
    slika.src = putanja + "galerija/" + sledeca + ".jpg";
    link.href = putanja + "galerija/" + sledeca + ".jpg";
  } else {
    redni += 1;
    slika.src = putanja + "galerija/" + redni + ".jpg";
    link.href = putanja + "galerija/" + redni + ".jpg";
  }
}

// =====================
// img lightbox funkcija
// by Me
// =====================
function imgLightBox(img){
  // var img = document.getElementById('lbslika');
  var name = img.src;
  var box = document.getElementsByClassName('lightbox');
  var boximg = document.getElementById('boximg');
  var naslov = document.getElementById('naslov');
  box[0].style.display = "block";
  boximg.src = name;
  naslov.innerHTML = img.alt;

}

function zatvoriLB() {
  var box = document.getElementsByClassName('lightbox');
  box[0].style.display = "none";
}
// ===============================
// back to top listener i funkcija
// ===============================
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if (document.documentElement.scrollTop > 20){
    document.getElementById('back_to_top').style.display = "block";
  } else {
    document.getElementById('back_to_top').style.display = "none";
  }
}
function topFunction(){
  document.documentElement.scrollTop = 0;
}

// ===================
// animacija po skrolu
// copy/pasted :)
// ===================
var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight + 50 <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

// ==================
// funkcija za klizac
// by Me
// ==================
function klizac(vrednost) {
  var slike = [];
  slike[0] = "1.jpg";
  slike[1] = "2.jpg";
  slike[2] = "3.jpg";
  slike[3] = "4.jpg";
  slike[4] = "5.jpg";
  slike[5] = "6.jpg";
  document.getElementsByClassName('random_img')[0].src = putanja + "galerija/" + slike[vrednost.value-1];

}


// ===========================================================
// pokretanje funkcija koje se startuju po ucitavanju stranice
// ===========================================================
window.onload = function() {
  randomSlika();
}
