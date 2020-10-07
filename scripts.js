$(function(){
  window.onload = choosePic;
  function choosePic() {
    var img = document.querySelectorAll(".circle");
       for (i=0; i < img.length; i++){
        const myPix = new Array("img/Letter_A.png", "img/Letter_B.png", "img/Letter_C.png", 
            "img/Letter_D.png", "img/Letter_E.png", "img/Letter_F.png", "img/Letter_G.png", 
            "img/Letter_H.png", "img/Letter_I.png", "img/Letter_J.png", "img/Letter_K.png", 
            "img/Letter_L.png", "img/Letter_M.png", "img/Letter_N.png", "img/Letter_O.png", 
            "img/Letter_Percy.png", "img/Letter_Q.png", "img/Letter_R.png", "img/Letter_S.png");
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

