$(function(){
  window.onload = choosePic;
  function choosePic() {
    var img = document.querySelectorAll(".circle");
       for (i=0; i < img.length; i++){
        const myPix = new Array("./img/letter_A.png", "./img/Letter_B.png", "./img/letter_C.png", 
            "./img/letter_D.png", "./img/letter_E.png", "./img/letter_F.png", "img/letter_G.png", 
            "img/letter_H.png", "img/letter_I.png", "img/letter_J.png", "img/letter_K.png", 
            "img/letter_L.png", "img/letter_M.png", "img/letter_N.png", "img/letter_O.png", 
            "img/letter_percy.png", "img/letter_q.png", "img/letter_r.png", "img/letter_s.png");
        var randomNum = Math.floor(Math.random() * myPix.length);
        img[i].src = myPix[randomNum];
      }
  }
  $(".cover").fadeIn(10000);

  function total(){
     var quantity = 0;
     $("bookNum").val = el ;
     console.log ("this");
  }
});

