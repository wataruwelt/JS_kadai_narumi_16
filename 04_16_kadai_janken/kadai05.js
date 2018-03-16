$(".gu").on('click',function(){
  var com = Math.floor(Math.random()*2);

  if (com == 0) {
    $(".box1").html("<p>相手の手：グー</p>");
  $(".box1").append("<p>引き分け</p>");
}else if (com == 1) {
  $(".box1").html("<p>相手の手：チョキ</p>");
$(".box1").append("<p>勝ち</p>");
}else {
  $(".box1").html("<p>相手の手：パー</p>");
$(".box1").append("<p>負け</p>");
}
})

$(".tyoki").on('click',function(){
  var com = Math.floor(Math.random()*2);

  if (com == 0) {
    $(".box1").html("<p>相手の手：グー</p>");
  $(".box1").append("<p>負け</p>");
}else if (com == 1) {
  $(".box1").html("<p>相手の手：チョキ</p>");
$(".box1").append("<p>引き分け</p>");
}else {
  $(".box1").html("<p>相手の手：パー</p>");
$(".box1").append("<p>勝ち</p>");
}
})

$(".pa").on('click',function(){
  var com = Math.floor(Math.random()*2);

  if (com == 0) {
    $(".box1").html("<p>相手の手：グー</p>");
  $(".box1").append("<p>勝ち</p>");
}else if (com == 1) {
  $(".box1").html("<p>相手の手：チョキ</p>");
$(".box1").append("<p>負け</p>");
}else {
  $(".box1").html("<p>相手の手：パー</p>");
$(".box1").append("<p>引き分け</p>");
}
})

// // 数字
//
// // カウント
// var countUpValue = 0;
// $(".pick").on('click',function(){
//   countUpValue++;
// })
//
// $(".pick").on('click',function(){
//   var card = Math.floor(Math.random()*2);
//   $(".box3").html('<div class="card+ countUpValue+"></div>');
//   alart();
//   $(".card+ countUpValue+").css("width","30px");
//   $(".card+ countUpValue+").css("height","60px");
//   $(".card+ countUpValue+").css("background-color","yellow");
//   $(".card+ countUpValue+").html(card);
// })
