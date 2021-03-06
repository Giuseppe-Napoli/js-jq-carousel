$(function(){

  //creo due azioni che si verificano al click in avanti o indietro
  $('.arrow_dx').click(nextImg);
  
  $('.arrow_sx').click(precImg);
  
  //<<<<<<BONUS>>>>>>//
 // creo una var per stabilire la lunghezza della mia lista d'immagini
  var listImg = $('.album img');
 
//creo un ciclo che aggiunge un 'i' al contenitore 'indicator' per ogni immagine fino a quando il ciclo termina 
  for (var i = 0; i < listImg.length; i++) {
    if (i == 0) {
      $('.indicator').append('<i class="active far fa-circle"></i>');
    } else {
      $('.indicator').append('<i class="far fa-circle"></i>');
    }
  }
  //<<<<<<BONUS>>>>>>//
  ///////////////////////////////////////
  //funzione avanti
  function nextImg(){
    //creo 2 var per richiamare i punti di aggancio
    var imgActive = $('.album img.active');
    var circleActive = $('.indicator i.active');

    //rimuovo la classe active
    imgActive.removeClass('active');
    circleActive.removeClass('active');

    //se il valore length della mia img è===0
    if(imgActive.next('img').length===0){
      //vorrà dire che sono arrivato all'ultima img per tanto assegno il tag '.active' al primo elemento
      $('.album img').first().addClass('active');
      $('.indicator i').first().addClass('active');
      //altrimenti
    }else{
      //continuo ad aggiungere la classe '.active' all'elemento successivo
      imgActive.next('img').addClass('active');
      circleActive.next('i').addClass('active');
    };
  };
  //////////////////////////////////////
  //funzione indietro
  function precImg(){
    //creo 2 var per richiamare i punti di aggancio
    var imgActive = $('.album img.active');
    var circleActive = $('.indicator i.active');
    //rimuovo la classe active
    imgActive.removeClass('active');
    circleActive.removeClass('active');

    //se il valore length della mia img è===0
    if(imgActive.prev('img').length===0){
      //vorrà dire che sono arrivato alla prima img per tanto assegno il tag '.active' all'ultimo elemento  
      $('.album img').last().addClass('active');
      $('.indicator i').last().addClass('active');
      //altrimenti
    }else{
      //continuo ad aggiungere la classe '.active' all'elemento precedente
      imgActive.prev('img').addClass('active');
      circleActive.prev('i').addClass('active');
    }
  };

});