$(function(){
  window.onload = choosePic;
  function choosePic() {
    var img = document.querySelectorAll(".circle");
       for (i=0; i < img.length; i++){
        const myPix = new Array("./img/letter_A.png", "./img/Letter_b.png", "./img/letter_c.png", 
            "./img/letter_d.png", "./img/letter_e.png", "./img/letter_f.png", "img/letter_g.png", 
            "img/letter_h.png", "img/letter_i.png", "img/letter_j.png", "img/letter_k.png", 
            "img/letter_l.png", "img/letter_m.png", "img/letter_n.png", "img/letter_o.png", 
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

