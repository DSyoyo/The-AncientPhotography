/**
 * Created by HUCC on 2018/5/2.
 */
function animate(element, obj, fn) {
  //开启定时器,先清除
  clearInterval(element.timeId);
  //假设所有人的动画都完成

  element.timeId = setInterval(function () {
    var flag = true;

    for (var k in obj) {
      var attr = k;
      var target = obj[k];
      if(attr === "zIndex") {
        //处理zIndex
        element.style.zIndex = target;
      } else if (attr === "opacity") {

        //1. 获取到当前的opacity
        var current = window.getComputedStyle(element).opacity;

        //需要把target和current扩大1000倍
        current *= 1000;
        target *= 1000;

        //2. 计算step
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        //3. 在原来的基础上加上step
        current += step;
        element.style.opacity = current/1000;

        //4. 如果没到终点，需要把flag改成false
        if(target != current) {
          flag = false;
        }

      } else {
        //1. 获取元素当前样式
        var current = window.getComputedStyle(element)[attr];
        current = parseInt(current);

        //2. 计算step, 保证step最少都是1px
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        //3. 在current的基础上增加step
        current += step;
        element.style[attr] = current + "px";

        //4. 如果到达了终点，需要清除定时器
        if (current != target) {
          flag = false;
        }
      }
    }
    if (flag) {
      clearInterval(element.timeId);
      fn && fn();//fn存在，才调用fn
    }

  }, 15);
}


//存储了5个li的位置
var datas = [
  {
    "width": 200,
    "top": 220,
    "left": 0,
    "opacity": 0.2,
    "zIndex": 1
  },
  {
    "width": 400,
    "top": 160,
    "left": 50,
    "opacity": 0.2,
    "zIndex": 2
  },//0
  {
    "width": 600,
    "top": 100,
    "left": 120,
    "opacity": 0.8,
    "zIndex": 3
  },//1
  {
    "width": 800,
    "top": 45,
    "left": 200,
    "opacity": 1,
    "zIndex": 4
  },//2
  {
    "width": 600,
    "top": 100,
    "left": 480,
    "opacity": 0.8,
    "zIndex": 3
  },//3
  {
    "width": 400,
    "top": 160,
    "left": 750,
    "opacity": 0.2,
    "zIndex": 2
  },//4
  {
    "width": 200,
    "top": 220,
    "left": 1000,
    "opacity": 0.2,
    "zIndex": 1
  }
];
var rotate = document.querySelector(".rotate");
var rotatePic=document.querySelectorAll(".rotate-pic li");
var rotateArrow = document.querySelector(".rotate-arrow");
var arrLeft = document.querySelector("#left");
var arrRight = document.querySelector("#right");


for(var i = 0; i < rotatePic.length; i++) {
  animate(rotatePic[i], datas[i]);
}

// 点击右箭头
arrRight.onclick = function () {
  //把数组中的位置进行交换，把数组的最后一个放到第一个
  datas.unshift( datas.pop() );
  //重新分配位置
  for(var i = 0; i < rotatePic.length; i++) {
    animate(rotatePic[i], datas[i]);
  }
}

//点击左箭头
arrLeft.onclick = function () {
  //把数组中的位置进行交换，把数组的最后一个放到第一个
  datas.push( datas.shift() );
  //重新分配位置
  for(var i = 0; i < rotatePic.length; i++) {
    animate(rotatePic[i], datas[i]);
  }
}
//定时器
var timeId=setInterval(arrRight.onclick,2000)
rotate.onmouseover=function(){
  clearInterval(timeId);
  animate(rotateArrow, {opacity: 1});
}
rotate.onmouseout=function(){
  animate(rotateArrow, {opacity: 0});
  timeId=setInterval(function(){
    arrRight.onclick();
  },2000);
}

