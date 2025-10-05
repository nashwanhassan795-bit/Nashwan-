// تعيين تاريخ ووقت المباراة القادمة
var matchDate = new Date("OCT 5, 2025 17:15:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = matchDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + " يوم " + hours + " ساعة " + minutes + " دقيقة " + seconds + " ثانية ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "المباراة بدأت!";
  }
}, 1000);