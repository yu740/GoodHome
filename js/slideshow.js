$(function(){
  $("#main_visual li").css({"position":"relative","overflow":"hidden"});
  $("#main_visual li").hide().css({"position":"absolute","top":0,"left":0});
  $("#main_visual li:first").addClass("fade").show();
  setInterval(function(){
    var $active = $("#mainvisual li.fade");
    var $next = $active.next("li").length?$active.next("li"):$("#main_visual li:first");
    $active.fadeOut(2000).removeClass("fade");
    $next.fadeIn(2000).addClass("fade");
  },3500);
});