/*
    Name: Kodie Fernandez
    Filename: script.js
*/

window.onload = (event) => {
    console.log('The page has fully loaded');
};

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;

    expandImg.parentElement.style.display = "block";
  }
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var imgContainer = document.querySelector(".expose"),
  imgSeq = document.querySelectorAll(".shuffle img"),
  i = 1;
  
  imgContainer.classList.remove("expose");
  imgContainer.classList.add("webanim");
  
  function rackstack() {
    Array.prototype.forEach.call(imgSeq, function(photo) { 
        setTimeout(function(){ 
          photo.style.position = "absolute";
        photo.style.width = getRandom(33,45)+"%";
        photo.style.left = getRandom(-5,65)+"%";
        photo.style.top = getRandom(-6,60)+"vh";
        var animate = photo.animate([
            { opacity: '0', transform: 'rotate('+getRandom(-11,11)+'deg) scale(1.2)', boxShadow: '0 0 12px 12px rgba(0,0,0,.3)' },
            { opacity: '1', transform: 'rotate('+getRandom(-4,5)+'deg)', boxShadow: '0 0 6px 6px rgba(0,0,0,.3)' }
          ], {
        duration: 2000,
        fill: 'forwards'
      });                    
    }, 1800*i)
    i++;
    })
   }
   
  imagesLoaded(imgSeq, rackstack);

  let myStylesheet = document.styleSheets[0],
  p = document.querySelector('.output'),
  p2 = document.querySelectorAll('.output')[1];

p.innerHTML += myStylesheet.cssRules.length;
document.styleSheets[0].insertRule('article { line-height: 1.5; font-size: 1.5em; }', myStylesheet.cssRules.length);
p2.innerHTML += myStylesheet.cssRules.length;

function myFunction2() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function handleData() {
}