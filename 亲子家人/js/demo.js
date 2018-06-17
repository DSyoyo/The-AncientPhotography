/**
 * Created by 90380 on 2018/4/29.
 */

function imgScoll() {
//banner轮播图开始
//1.找对象banner , ul, imgs,ol ,left,right
  var banner = document.querySelector(".banner");
  var ul = document.querySelector(".banner ul");
  var imgs = ul.children;
  var ol = document.querySelector(".banner ol");

//创建小圆点li，添加到ol
  for (var i = 0; i < imgs.length; i++) {
    var li = document.createElement("li");
    ol.appendChild(li)
  }
//找到小圆点
  var points = ol.children;
  points[0].className = "now";
//克隆ul的第一个子元素并添加到ul的最后面
  ul.appendChild(ul.firstElementChild.cloneNode(true));

//给右箭头注册点击事件
  var rightArr = document.querySelector(".arrow .right");
  var leftArr = document.querySelector(".arrow .left");

//核心变量，记录出去的图片的张数
  var count = 0;
  rightArr.onclick = function () {
    //判断，如果是最后一张了，需要瞬间变成第一张
    if (count >= imgs.length - 1) {
      count = 0;
      //ul.style.left = 0;
      ul.style.left = -count * banner.offsetWidth + "px";
    }
    count++;
    //ul.style.left = -count * banner.offsetWidth + "px";
    //animate(ul,-count*banner.offsetWidth);
    animate(ul, {left: -count * banner.offsetWidth});

    //同步小圆点
    for (var i = 0; i < points.length; i++) {
      points[i].className = "";
    }
    //复活count对应的小圆点
    if (count >= imgs.length - 1) {
      points[0].className = "now";
    } else {
      points[count].className = "now";
    }
  };

//给左箭头注册点击事件
  leftArr.onclick = function () {
    if (count <= 0) {
      count = imgs.length - 1;
      ul.style.left = -count * banner.offsetWidth + "px";
    }
    count--;
    //ul.style.left = -count * banner.offsetWidth + "px";
    //animate(ul, -count * banner.offsetWidth);
    animate(ul, {left: -count * banner.offsetWidth});

    //同步小圆点
    for (var i = 0; i < points.length; i++) {
      points[i].className = "";
    }
    //复活count对应的小圆点
    if (count >= imgs.length - 1) {
      points[0].className = "now";
    } else {
      points[count].className = "now";
    }
  };

//给小圆点注册点击事件
  for (var i = 0; i < points.length; i++) {
    points[i].index = i;
    points[i].onclick = function () {
      for (var i = 0; i < points.length; i++) {
        points[i].className = "";
      }
      //复活当前小圆点
      this.className = "now";
      //判断，如果count是最后一张
      if (count >= imgs.length - 1) {
        count = 0;
        ul.style.left = -count * banner.offsetWidth + "px";
      }
      //先获取到小圆点的下标
      count = this.index;
      //根据count设置ul的位置
      //animate(ul, -count * banner.offsetWidth);
      animate(ul, {left: -count * banner.offsetWidth});
    }
  }

//设置定时器
  var duration = 2000;
  var timeId = setInterval(function () {
    rightArr.click();
  }, duration);

  banner.onmouseover = function () {
    clearInterval(timeId);
  };
  banner.onmouseout = function () {
    timeId = setInterval(function () {
      rightArr.click();
    }, duration);
  };

//banner轮播图结束


//拍照的意义开始
  var meaning = document.querySelector(".meaning");
  var ps = document.querySelector(".meaning .ps");
  //var timerId = null;
//给meaning注册onmouseover事件，ps显示
//  meaning.onmouseover = function () {
//    clearInterval(timerId);
//    ps.className = "show";
//    var opacity = 0;  //设置透明度
//    timerId = setInterval(function () {
//      opacity += 10;
//      if (opacity > 60) {
//        clearInterval(timerId);  //清除定时器
//      }
//      ps.style.backgroundColor = "rgba(0, 0, 0," + opacity / 100 + ")";
//    }, 200)
//  };
//
//  meaning.onmouseout = function () {
//    clearInterval(timeId);
//    ps.className = "hide";
//    var opacity = 60;
//    timeId = setInterval(function () {
//      opacity -= 10;
//      if (opacity = 0) {
//        clearInterval(timeId);
//      }
//      ps.style.backgroundColor = "rgba(0,0,0," + opacity / 100 + ")";
//    }, 200)
//
//  }
//拍照的意义结束
//用样式表实现

  //引入新封装的函数，鼠标移到meaning上透明度变为0.6
  meaning.onmouseover = function () {
    animate(ps, {opacity: 0.7});
  };
  meaning.onmouseout = function () {
    animate(ps, {opacity: 0});
  };


//婴儿照开始
//鼠标移到盒子上，图片旋转360deg
  var infantPic = document.querySelector(".infant .infant-pic");
  var infantPs = infantPic.querySelectorAll("li");

//给每个Li设置onmonseover事件
  for (var i = 0; i < infantPs.length; i++) {
    infantPs[i].onmouseover = function () {
      this.style.transform = 'perspective(700px) rotateY(360deg)';
      //过渡效果的时间
      this.style.transition = "10s";
    };
  }
//perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。当为元素定义 perspective 属性时，其子元素会获得透视效果
//婴儿照结束


//周岁照手风琴效果开始
//1.找对象
  var accordion = document.querySelector(".accordion");
  var lisYear = accordion.querySelectorAll(".accordion li");
//把所有的图片放入数组中
  var imgList = ["pure-1.jpg", "art-2.jpg", "simple-3.jpg", "sweet-4.jpg", "princess-5.jpg", "prince-6.jpg", "light-7.jpg", "classic-8.jpg"];
  for (var i = 0; i < lisYear.length; i++) {
    lisYear[i].style.backgroundImage = "url(upload/oney/" + imgList[i] + ")";

    //定位板手风琴 第一张图片显示出来
    if (i != 0) {
      lisYear[i].style.left = i * 130 + 220 +"px";
    }
    lisYear[i].index = i;

    //鼠标移上去事件
    lisYear[i].onmouseover = function () {
      for (var i = 0; i < lisYear.length; i++) {
        if (i <= this.index) {
          //lisYear[i].style.left = i * 130 + "px";
          animate(lisYear[i],{left:i*130});
        } else {
          //lisYear[i].style.left = i * 136 + 220 + "px";
          animate(lisYear[i], {left: i * 130 + 220});
        }
      }
    }
  }

//周岁照手风琴效果结束

//点击照片列表Li,显示对应的图片
  var imgContent = document.querySelectorAll(".ph-list li");
  //设置默认第一个背景色为天蓝色
  imgContent[0].style.background = "skyblue";
  var imgList = document.querySelectorAll(".photoContentList > div");

  for (var i = 0; i < imgContent.length; i++) {
    //给每个li注册点击事件
    imgContent[i].onclick = function () {
      //先把下标存起来
      var currIndex = this.getAttribute("index");

      //每个li对应的下拉图片,并设置背景色
      for (var j = 0; j < imgList.length; j++) {
        imgList[j].style.display = j == currIndex ? "block" : "none";
        imgContent[j].style.backgroundColor = j == currIndex ? "skyblue" : "#EDEDED";
      }
    }

  }


  //1-3岁照旋转木马开始
  //存储5个li的位置
  var datas = [
    {
      "width": 442,
      "top": 20,
      "left": 50,
      "opacity": 0.2,
      "zIndex": 2
    },//0
    {
      "width": 640,
      "top": 70,
      "left": 0,
      "opacity": 0.8,
      "zIndex": 3
    },//1
    {
      "width": 800,
      "top": 100,
      "left": 200,
      "opacity": 1,
      "zIndex": 4
    },//2
    {
      "width": 640,
      "top": 70,
      "left": 640,
      "opacity": 0.8,
      "zIndex": 3
    },//3
    {
      "width": 442,
      "top": 20,
      "left": 788,
      "opacity": 0.2,
      "zIndex": 2
    }//4
  ];

  var wrap = document.getElementById("wrap");
  var slide = document.getElementById("slide");
  var lisThr = document.querySelectorAll("#wrap li");

  //遍历每张图片，给每张图片存一个对象属性
  for (var i = 0; i < lisThr.length; i++) {
    animate(lisThr[i], datas[i]);
  }

  //给wrap注册onmouseover事件，左右箭头显示

  var arrow = document.querySelector("#wrap #arrow");
  var arrLeft = document.querySelector("#wrap #arrLeft");
  var arrRight = document.querySelector("#wrap #arrRight");

  //鼠标移上去，左右箭头透明度为1
  wrap.onmouseover = function () {
    animate(arrow, {opacity: 1});
  }
  //鼠标离开，左右箭头透明度为0
  wrap.onmouseout = function () {
    animate(arrow, {opacity: 0});
  }

  //给左箭头注册点击事件
  var flag = true;
  arrLeft.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //删除第一个添加到数组最后一个
      datas.push(datas.shift());
      for (var i = 0; i < lisThr.length; i++) {
        animate(lisThr[i], datas[i], function () {
          flag = true;
        });
      }
    }
  })

  //给右箭头注册点击事件
  arrRight.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //删除最后一个添加到数组第一个
      datas.unshift(datas.pop());
      for (var i = 0; i < lisThr.length; i++) {
        animate(lisThr[i], datas[i], function () {
          flag = true;
        });
      }
    }
  })


  //1-3岁照旋转木马结束






}