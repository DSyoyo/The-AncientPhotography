/**
 * Created by Administrator on 2018/5/15.
 */
$(function () {
  /*二楼 旋转木马*/
  $(".fl2-carrousel").on("mouseenter", function () {
    $("#arrow").css("opacity", 1);
  }).on("mouseleave", function () {
    $("#arrow").css("opacity", 0);
  });
  var flag = true;//表示可以执行动画

  //5个li对应的类
  var arr = ["carrousel1", "carrousel2", "carrousel3", "carrousel4", "carrousel5"];
  //点击右箭头：
  $("#arrowLeft").on("click", function () {
    if (flag) {
      // flag = false;
      //将数组的第一项添加到最后一项
      //push()最后一项添加，返回新的长度
      //pop()删除最后一项，返回删除
      //unshift()：添加到最前面，返回新的长度
      //shift():删除第一个，返回删除的元素
      arr.push(arr.shift());

      $("#fl2-carrousel>ul>li").each(function (i) {
        //重新分配类
        $(this).removeClass().addClass(arr[i]);
      });

    }
  });

  $("#arrowRight").on("click", function () {
    if (flag) {
      // flag = false;

      //把数组最后一项放到第一项
      arr.unshift(arr.pop());

      $("#fl2-carrousel>ul>li").each(function (i) {
        //重新分配类
        $(this).removeClass().addClass(arr[i]);
      });
    }

  });
  //过渡结束事件  transitionend  css3新增
  $("#fl2-carrousel>ul>li").on("transitionend", function () {
    flag = true;
  });
  /*三楼 轮播图*/
  $("#sowingMap").on("mouseenter", function () {
    $("#swmArrow").css("opacity", 1);
    clearInterval(autoChange);
  }).on("mouseleave", function () {
    $("#swmArrow").css("opacity", 0);
    autoChange = setInterval(function () {
      if (count < $swmLis.length - 1) {
        count++;
      } else {
        count = 0;
      }
      //调用变换处理函数
      pointsSwm(count);
    }, duration);
  });

  var count = 0;
  var $swmLis = $("#sowingMap>ul>li");
  for (var i = 0; i < $swmLis.length; i++) {
    var $point = $("<li></li>");
    $point.addClass("swmPoints");
    $point.appendTo($("#sowingMap>ol"));
  }
  $("#sowingMap>ol>li:first").css("backgroundColor", "#f40");
  var $points = $("#sowingMap>ol>li");

  $("#swmArrRight").click(function () {
    count++;
    if (count > $swmLis.length - 1) {
      count = 0;
    }
    $swmLis.eq(count).fadeIn().siblings().fadeOut();
    $points.eq(count).css("backgroundColor", "#f40").siblings().css("backgroundColor", "#fff");
  });

  $("#swmArrLeft").click(
    function () {
      count--;
      if (count < 0) {
        count = $swmLis.length - 1;
      }
      $swmLis.eq(count).fadeIn().siblings().fadeOut();
      $points.eq(count).css("backgroundColor", "#f40").siblings().css("backgroundColor", "#fff");
    }
  );

  /*小圆点 点击事件*/
  $points.click(function () {
    var index = $(this).index();
    $(this).css("backgroundColor", "#f40").siblings().css("backgroundColor", "#fff");
    $swmLis.eq(index).fadeIn().siblings().fadeOut();
  });

  //自动播放的持续时间
  function pointsSwm(num) {
    num--;
    if (num < 0) {
      num = $swmLis.length - 1;
    }
    $swmLis.eq(num).fadeIn().siblings().fadeOut();
    $points.eq(num).css("backgroundColor", "#f40").siblings().css("backgroundColor", "#fff");
  }

  var duration = 2000;
  var autoChange = setInterval(function () {
    if (count < $swmLis.length - 1) {
      count++;
    } else {
      count = 0;
    }
    //调用变换处理函数
    pointsSwm(count);
  }, duration);

  /*四楼 手风琴*/
  var $arnLis = $("#accordion>ul>li");
  for (var j = 0; j < $arnLis.length; j++) {
    $arnLis.eq(j).css("backgroundImage", "url(upload/bi-exteriorBase/" + (j + 1) + ".jpg)");
  }
  $arnLis.mouseenter(function () {
    $(this).stop(true).animate({width: 530}).siblings().stop(true).animate({width: 134});
  });

//离开整个大盒子，让所有的li变成240
  $("#accordion").mouseleave(function () {
    $arnLis.stop(true).animate({width: 200});
  });

});


