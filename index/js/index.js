// 导航页面动画
$(function () {
  var timeId;
  $(".navBoxUl li a").mouseenter(function () {
    //清除字体图标颜色定时器
    clearInterval(timeId);
    //获取a的父级
    var $that = $(this).parent();
    
    //高亮展示
    $that.stop().animate({opacity: 1}, 1000).siblings().stop().animate({opacity: 0.1}, 1000);
    
    //高亮动画效果
    $(".slowAction001").eq($that.index()).stop().animate({
      opacity: 1,
      width: 1200,
      marginLeft: -600
    }, 800, function () {
      //$(this)指向当前对象$(".slowAction001").eq($that.index())
      $(this).stop().animate({
        height: 60,
        marginTop: -30,
      }, 400, function () {
        $(this).children().css("display", "block");
        $(this).stop().animate({
          width: 800,
          marginLeft: -400,
          borderRadius: 30
        }, 500, function () {
          //开启字体图标颜色变化定时器
          timeId = setInterval(function () {
            $(".slowAction001").eq($that.index()).find("i").toggleClass("lime");
          }, 300);
          $(this).children().eq(0).stop().animate({left: 80});
          $(this).children().eq(1).stop().animate({right: 80});
        });
      })
    });
  });
  
  $(".navBoxUl li a").mouseleave(function () {
    //清除字体图标颜色定时器
    clearInterval(timeId);
    
    //获取a的父级
    var $that = $(this).parent();
    
    //高亮移除
    $that.stop().animate({opacity: 0.8}, 1000).siblings().stop().animate({opacity: 0.8}, 1000);
    
    //箭头消失，归位
    $(".slowAction001").eq($that.index()).children().eq(0).css({left: 10});
    $(".slowAction001").eq($that.index()).children().eq(1).css({right: 10});
    $(".slowAction001").eq($that.index()).children().css("display", "none");
    //高亮移除动画效果
    $(".slowAction001").eq($that.index()).stop().animate({
      height: 2,
      marginTop: -1
    }, 300, function () {
      //$(this)指向当前对象$(".slowAction001").eq($that.index())
      $(this).stop().animate({
        width: 2,
        marginLeft: -1
      }, 300, function () {
        $(this).css("opacity", 0);
      })
    });
  });
  
});
