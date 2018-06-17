// 首页主体部分
;(function () {
// 首页轮播图
  var indexSlideshow = document.querySelector(".index_slideshow");
  var slideshowul = document.querySelector(".index_slideshow ul");
  var slideshowlis = document.querySelectorAll(".index_slideshow ul li");
  var slideshowol = document.querySelector(".index_slideshow ol");
  var leftArrow = document.getElementById("leftArrow");
  var rightArrow = document.getElementById("rightArrow");
  //根据轮播图动态生成小圆点
  for (var i = 0; i < slideshowlis.length; i++) {
    if (i === 0) {
      var li = document.createElement("li");
      li.id = "slideshowNow";
      slideshowol.appendChild(li);
    } else {
      var li = document.createElement("li");
      slideshowol.appendChild(li);
    }
  }
//找到所有的小圆点
  var points = slideshowol.querySelectorAll("li");
//修改小圆点的定位
  slideshowol.style.marginLeft = -slideshowol.offsetWidth / 2 + "px";
//复制轮播图第一张图片放到ul最后面
  slideshowul.appendChild(slideshowul.firstElementChild.cloneNode(true));
//重新获取图片
  var slideshowimgs = document.querySelectorAll(".index_slideshow ul li");
//设置轮播图ul的宽度
  slideshowul.style.width = slideshowimgs.length * 1366 + "px";
//注册鼠标经过事件，鼠标经过显示箭头
  indexSlideshow.addEventListener("mouseover", function () {
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  });
  indexSlideshow.addEventListener("mouseout", function () {
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";
  });
//注册左右箭头点击事件
  var mark = 0;
  leftArrow.addEventListener("click", function () {
    //判断图片到了第一张的时候，瞬间返回最后一张，无缝轮播
    if (mark <= 0) {
      //瞬间返回最后一张
      mark = slideshowimgs.length - 1;
      //定位到最后一张图片
      slideshowul.style.left = -mark * 1366 + "px";
    }
    //继续点击事件，动画过度
    mark--;
    slowMoveAnimation(slideshowul, {left: -mark * 1366});
    //同步小圆点
    //排他
    for (var i = 0; i < points.length; i++) {
      //去掉所有的小圆点样式
      points[i].id = "";
    }
    //复活当前小圆点
    //判断是否到了轮播图的最后一张
    if (mark === slideshowimgs.length - 1) {
      points[0].id = "slideshowNow";
    } else {
      points[mark].id = "slideshowNow";
    }
  });
  rightArrow.addEventListener("click", function () {
    //判断图片到了最后一张的时候，瞬间返回第一张，无缝轮播
    if (mark >= slideshowimgs.length - 1) {
      //瞬间返回第一张
      mark = 0;
      //定位归零
      slideshowul.style.left = -mark * 1366 + "px";
    }
    //继续点击事件，动画过度
    mark++;
    slowMoveAnimation(slideshowul, {left: -mark * 1366});
    //同步小圆点
    //排他
    for (var i = 0; i < points.length; i++) {
      //去掉所有的小圆点样式
      points[i].id = "";
    }
    //复活当前小圆点
    //判断是否到了轮播图的最后一张
    if (mark === slideshowimgs.length - 1) {
      points[0].id = "slideshowNow";
    } else {
      points[mark].id = "slideshowNow";
    }
  });
//开启定时器，自动轮播
//自动轮播函数
  var timeId = setInterval(function () {
    //左箭头点击事件
    rightArrow.click();
  }, 2000);
//当鼠标移到轮播图上，清除定时器
  indexSlideshow.addEventListener("mouseover", function () {
    clearInterval(timeId);
  });
//鼠标移除的时候开启定时器
  indexSlideshow.addEventListener("mouseout", function () {
    timeId = setInterval(function () {
      //左箭头点击事件
      rightArrow.click();
    }, 2000);
  });
//注册小圆点点击事件
  for (var i = 0; i < points.length; i++) {
    (function (i) {
      points[i].addEventListener("click", function () {
        for (var j = 0; j < points.length; j++) {
          points[j].id = "";
        }
        points[i].id = "slideshowNow";
        slowMoveAnimation(slideshowul, {left: -i * 1366});
        mark = i;
      })
    })(i);
  }
  
  /*
  for (let i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function () {
      for (var j = 0; j < points.length; j++) {
        points[j].id = "";
      }
      points[i].id = "slideshowNow";
      slowMoveAnimation(slideshowul, {left: -i * 1366});
      mark = i;
    })
  }
  */
})();
//3D翻书效果
$(function () {
  var bookArr = [
    "upload/3Dbook_01.jpg",
    "upload/3Dbook_02.jpg",
    "upload/3Dbook_03.jpg",
    "upload/3Dbook_04.jpg",
    "upload/3Dbook_05.jpg",
    "upload/3Dbook_06.jpg",
    "upload/3Dbook_07.jpg",
    "upload/3Dbook_08.jpg",
    "upload/3Dbook_09.jpg",
    "upload/3Dbook_10.jpg",
    "upload/3Dbook_11.jpg",
    "upload/3Dbook_12.jpg",
    "upload/3Dbook_13.jpg",
    "upload/3Dbook_14.jpg",
    "upload/3Dbook_15.jpg",
    "upload/3Dbook_16.jpg",
    "upload/3Dbook_17.jpg",
    "upload/3Dbook_18.jpg"
  ];
  $('#3Dbook').onebook(bookArr, {
    skin: 'light',
    bgDark: '#222222 url(./bg.jpg)',
    flip: 'soft',
    border: 5
  });
});

;(function () {
//旋转木马
  var merryGoRoundData = [
    {
      "width": 900,
      "height": 500,
      "bottom": 0,
      "left": window.innerWidth / 2,
      "margin-left": -450,
      "zIndex": 5,
      "opacity": 1
    },
    {
      "width": 680,
      "height": 360,
      "bottom": 100,
      "left": 30,
      "margin-left": 0,
      "zIndex": 4,
      "opacity": 0.6
    },
    {
      "width": 500,
      "height": 260,
      "bottom": 320,
      "left": window.innerWidth / 10,
      "margin-left": 0,
      "zIndex": 3,
      "opacity": 0.3
    },
    {
      "width": 500,
      "height": 260,
      "bottom": 320,
      "left": window.innerWidth / 10 * 9 - 500,
      "margin-left": 0,
      "zIndex": 3,
      "opacity": 0.3
    },
    {
      "width": 680,
      "height": 360,
      "bottom": 100,
      "left": window.innerWidth - 680 - 30,
      "right": 0,
      "margin-left": 0,
      "zIndex": 4,
      "opacity": 0.6
    }
  ];
  var merryGoRound = document.getElementById("merryGoRound");
  var merryGoRoundimgs = document.querySelectorAll("#merryGoRound li");
  var leftArrow02 = document.getElementById("leftArrow02");
  var righAarrow02 = document.getElementById("righAarrow02");
  //初始化页面
  for (var i = 0; i < merryGoRoundimgs.length; i++) {
    slowMoveAnimation(merryGoRoundimgs[i], merryGoRoundData[i]);
  }
  //鼠标点击事件
  leftArrow02.addEventListener("click", function () {
    merryGoRoundData.unshift(merryGoRoundData.pop());
    for (var i = 0; i < merryGoRoundimgs.length; i++) {
      slowMoveAnimation(merryGoRoundimgs[i], merryGoRoundData[i]);
    }
  });
  righAarrow02.addEventListener("click", function () {
    merryGoRoundData.push(merryGoRoundData.shift());
    for (var i = 0; i < merryGoRoundimgs.length; i++) {
      slowMoveAnimation(merryGoRoundimgs[i], merryGoRoundData[i]);
    }
  });
  //自点击事件
  var timeId = setInterval(function () {
    righAarrow02.click();
  }, 2000);
  merryGoRound.addEventListener("mouseover", function () {
    clearInterval(timeId);
    leftArrow02.style.display = "block";
    righAarrow02.style.display = "block";
  });
  merryGoRound.addEventListener("mouseout", function () {
    timeId = setInterval(function () {
      righAarrow02.click();
    }, 2000);
    leftArrow02.style.display = "none";
    righAarrow02.style.display = "none";
  })
})();