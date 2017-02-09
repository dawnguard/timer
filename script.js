//  VARIABLES ==================
var startedTimer = false;
var isPaused = true;
var timerDone = false;
var sound = new Howl({
  src: ['sound.mp3']
  , loop: true, autoSuspend: false, buffer: false
});
var minutes;
var totalSeconds;
var minsRemaining;
var secsRemaining;
var messi;
//  ========= ==================



$(function () {
  $("button").click(function(){
    $(this).blur();
  })
  
  //  'PAUSE' CLICK HANDLER ==================
  $("#pausy").click(function () {
    if (!startedTimer) {
      minutes = $('#sessionLength').val();
      totalSeconds = minutes * 60;
      startedTimer = true;
      startTimer();
    }
    if (isPaused) {
      isPaused = false;
      $('#pausy').html('<i class="pause icon"></i>')
    }
    else {
      isPaused = true;
      $('#pausy').html('<i class="play icon"></i>')
    }
    if (timerDone) {
      sound.stop();
      $('#pausy').remove();
    }
  });
  //  'REFRESH' CLICK HANDLER ==================
  $("#refresh").click(function () {
    location.reload();
  });
  //  COUNTER FUNCTION ==================
  function counter() {
    //calculate minutes and seconds remaining
    minsRemaining = Math.floor(totalSeconds / 60);
    secsRemaining = totalSeconds - (minsRemaining * 60);
    //change the HTML to show new minutes and seconds
    $("#minutes").html((minsRemaining < 10 ? '0' : '') + minsRemaining + ' ');
    $("#seconds").html((secsRemaining < 10 ? '0' : '') + secsRemaining);
    if (totalSeconds == 0) {
      timerDone = true;
      console.log('ok');
      sound.play();
      $('#pausy').html('<i class="stop icon"></i>');
      stahp();
    }
    if (!isPaused) {
      totalSeconds--;
    }
    console.log(totalSeconds);
  }
  
  function startTimer() {
    messi = setInterval(counter, 1000);
  }

  function stahp() {
    clearInterval(messi);
  }
});