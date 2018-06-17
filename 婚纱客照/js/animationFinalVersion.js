/**
 *
 * @param element
 * @param obj
 * @param fn
 */
function animation(element, obj, fn) {
  //清除定时器
  clearInterval(element.timeId);
  //设置定时器
  element.timeId = setInterval(function () {
    //设置一个标记，用来判断是不是对象中所有属性都到了目标值
    var flag = true;
    //遍历对象obj
    for (k in obj) {
      var attr = k;
      var target = obj[k];
      if (attr === "zIndex") {
        //zIndex不需要动画，直接设置就行
        element.style.zIndex = target;
      } else if (attr === "opacity") {
        //获取当前对象的属性值
        var current = window.getComputedStyle(element)[attr];
        //将数值放大1000倍
        current = current * 1000;
        target = target * 1000;
        //获取目标值和当前属性值的差
        var step = (target - current) / 10;
        //最小的值应当是1，所以正值向上取整，负值向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        var temp = current + step;
        element.style[attr] = temp / 1000;
        //当有属性值没有到达目标时，会改变这个标记为false，继续执行下去
        if (current != target) {
          flag = false;
        }
      } else {
        //获取当前对象的属性值
        var current = window.getComputedStyle(element)[attr];
        //这个值是带有px的字符串，取得数值
        current = parseInt(current);
        //获取目标值和当前属性值的差
        var step = (target - current) / 10;
        //最小的值应当是1，所以正值向上取整，负值向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        var temp = current + step;
        element.style[attr] = temp + "px";
        //当有属性值没有到达目标时，会改变这个标记为false，继续执行下去
        if (current != target) {
          flag = false;
        }
      }
    }
    //当所有的属性值到达目标后，标记不会被改为false时，清除定时器
    if (flag) {
      clearInterval(element.timeId);
      //增加回调函数判断，短与判断，如果都为真，则调用函数，没有输入回调函数，直接短路返回假值，结束
      fn && fn();
    }
  }, 15);
}