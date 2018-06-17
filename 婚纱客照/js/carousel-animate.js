/**
 * Created by HUCC on 2018/4/27.
 */
function animate(element, target, num) {

  num = num || 40;
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {
    var current = element.offsetLeft;//当前位置
    var step = current < target ? num : -num;

    if (Math.abs(current - target) >= Math.abs(step)) {
      current += step;
      element.style.left = current + "px";
    } else {
      clearInterval(element.timeId);
      element.style.left = target + "px";
    }
  }, 15);

}


//需求：让任意元素能够运动到任意位置  要求：速度变化的
function animate2(element, target) {
  //1. 开启定时器
  //2. 获取当前的位置，计算step
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {
    var current = element.offsetLeft;
    var step = (target - current) / 10;
    //当step>0,对step向上取整,否则向下，保证至少走1px
    step = step > 0 ? Math.ceil(step) : Math.floor(step);

    current += step;
    element.style.left = current + "px";

    if (current == target) {
      clearInterval(element.timeId);
    }
    //console.log("代码还在执行吗");

  }, 15);
}

//1. 找对象
var carouselPics =document.querySelector(".carousel-pics");
var ul = document.querySelector(".carousel-pics ul");
var ol = document.querySelector(".carousel-pics ol");
var imgs = ul.children;
var leftArr = document.querySelector(".carousel-pics .left");
var rightArr = document.querySelector(".carousel-pics .right");

//自动播放的持续时间
var duration = 2000;


//2. 动态创建小圆点
for (var i = 0; i < imgs.length; i++) {
  //2.1 创建li
  var li = document.createElement("li");
  //2.2 添加到ol
  ol.appendChild(li);
}
//2.3 获取到小圆点
var points = ol.children;
//2.4 让第一个小圆点有now
points[0].className = "now";


//3. 克隆第一张的图片，添加到ul的最后面
ul.appendChild(ul.firstElementChild.cloneNode(true));


//4. 左右箭头功能
//4.1 点击右箭头功能

//count是用来记录左边出去了几张  0
//根据count就能够确认ul的位置  - count * box.offsetWidth
//核心变量
var count = 0;
rightArr.onclick = function () {

  //判断，如果是最后一张了，需要瞬间变成第一张
  if (count >= imgs.length - 1) {
    count = 0;
    ul.style.left = -count * carouselPics.offsetWidth + "px";
  }

  count++;
  //修改ul的位置
  animate2(ul, -count * carouselPics.offsetWidth);

  //修改小圆点同步
  //干掉所有的小圆点
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


//4.2 点击左箭头的功能
leftArr.onclick = function () {

  //需要判断，如果是第1张，需要换成最后一张
  if (count <= 0) {
    count = imgs.length - 1;
    ul.style.left = -count * carouselPics.offsetWidth + "px";
  }

  count--;
  animate2(ul, -count * carouselPics.offsetWidth);

  //同步小圆点
  //修改小圆点同步
  //干掉所有的小圆点
  for (var i = 0; i < points.length; i++) {
    points[i].className = "";
  }
  //复活count对应的小圆点
  if (count >= imgs.length - 1) {
    points[0].className = "now";
  } else {
    points[count].className = "now";
  }
}


function fn() {

}

//5. 自动播放
//5.1 开启一个定时器，每隔一段时间点击右箭头
var timeId = setInterval(rightArr.onclick, duration);
//5.2 鼠标经过box，需要清除定时器
carouselPics.onmouseover = function () {
  clearInterval(timeId);
}
//5.3 鼠标离开box，需要重新开启定时器
carouselPics.onmouseout = function () {
  timeId = setInterval(function () {
    rightArr.click();
  }, duration);
}


//6.点击小圆点
//6.1 给小圆点注册点击事件
//6.2 小圆点排他
for(var i = 0; i < points.length; i++) {
  //存储一个下标
  points[i].index = i;
  points[i].onclick = function () {

    //小圆点排他
    for(var i = 0; i < points.length; i++) {
      points[i].className = ""
    }

    //复活当前小圆点
    this.className = "now";


    //判断，如果count是最后一张
    if (count >= imgs.length - 1) {
      count = 0;
      ul.style.left = -count * carouselPics.offsetWidth + "px";
    }

    //先获取到小圆点的下标
    count = this.index;
    //根据count设置ul的位置
    animate2(ul, - this.index * carouselPics.offsetWidth);

  }
}

