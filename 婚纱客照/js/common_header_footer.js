//找对象
var navTopLis = document.querySelectorAll(".navList-001 li");
var navJDY = document.querySelector(".navJDY");
//声明一个储存left的变量
var navJDYLeft = navJDY.offsetLeft;
//筋斗云特效
for (var i = 0; i < navTopLis.length; i++) {
  navTopLis[i].onmousemove = function () {
    //img比li要窄，+7调整位置到中间
    animation(navJDY, {left: this.offsetLeft + 7});
  }
  navTopLis[i].onmouseout = function () {
    animation(navJDY, {left: navJDYLeft});
  }
  navTopLis[i].onclick = function () {
    navJDYLeft = this.offsetLeft + 7;
  }
}
