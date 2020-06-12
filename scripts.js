window.onload = choosePic;
function choosePic() {
  img = document.querySelectorAll(".rounded-circle");
    for(i=0; i < img.length; i++){
      const myPix = new Array("imgs/letter_A.png", "imgs/Letter_b.png", "imgs/letter_c.png", "imgs/letter_d.png", "imgs/letter_e.png", "imgs/letter_f.png", "imgs/letter_g.png", "imgs/letter_h.png", "imgs/letter_i.png", "imgs/letter_j.png", "imgs/letter_k.png", "imgs/letter_l.png", "imgs/letter_m.png", "imgs/letter_n.png");
      let randomNum = Math.floor(Math.random() * myPix.length);
      img[i].src = myPix[randomNum];
    }
}


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}