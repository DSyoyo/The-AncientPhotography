/**
 * Created by 刘星 on 2018/5/3.
 */
var box1 =document.querySelector(".art-h");
function getTime(element) {
  var date =new Date();
  var hm = date.getMilliseconds();
  var second = date.getSeconds()+hm/1000;
    element.style.transform ='rotate('+second*10+'deg)';

};
//getTime(box1);
var get =setInterval(function () {
  getTime(box1)
} , 60)

//当鼠标经过img时 旋转一圈
var box2=document.querySelector(".tub");
var imgs =document.querySelectorAll(".tub img");
console.log(imgs);
for(var i =0; i < imgs.length; i++){
  imgs[i].onmouseover =function () {
    for(var i =0; i < imgs.length; i++){
      imgs[i].style.backgroundColor='#b0d4e1';
    }
     this.style.backgroundColor='pink';
     this.style.opacity='0.5';
  }
  imgs[i].onmouseout =function () {
    for(var i =0; i < imgs.length; i++){
      imgs[i].style.backgroundColor='#b0d4e1';
      imgs[i].style.opacity='1';
    }
  }
}

//轮播图区域开始
var box3 =document.querySelector(".banner");
var arrow =document.querySelector(".arrow");

//点击按钮循环图片
var right =document.querySelector(".right");
var left =document.querySelector(".left");
var ul =document.querySelector(".banner ul");
var lis = ul.children;
ul.appendChild(ul.firstElementChild.cloneNode(true));

var count =0;
right.onclick =function () {

    if(count >=lis.length-1){
      count=0;
      ul.style.left =0;
    }
    count++;
    animate(ul,{left:-count*box3.offsetWidth})
  }

left.onclick =function () {

    if(count <= 0){
      count=lis.length-1;
      ul.style.left =-count*box3.offsetWidth+'px';
    }
    count--;
    animate(ul,{left:-count*box3.offsetWidth})
  }
//当鼠标放在box3上arrow透明度变成1 开启定时器
var timeId =setInterval(function () {
  right.onclick()
} ,2000)
box3.onmouseover = function () {
  animate( arrow ,{opacity:1})
  clearInterval(timeId);
}
box3.onmouseout = function () {
  timeId =setInterval(function () {
    right.onclick();
  } ,2000)
  animate( arrow ,{opacity:0})
}


//给nian图片设置透明度 鼠标经过事件
var nian =document.querySelector(".nian");
var imgs1 =document.querySelectorAll(".nian-l img");
var imgs2 =document.querySelectorAll(".nian-r img");
var da =document.querySelector(".da");
console.log(imgs1,imgs2);
for(var i =0; i < imgs1.length; i++){
  imgs1[i].onmouseover =function () {
    for(var i =0; i < imgs1.length; i++){
      imgs1[i].style.opacity ='0.3'
    }
     this.style.opacity ='1';

  }
  document.onmouseout =function () {
    for(var i =0; i <  imgs1.length; i++){
      imgs1[i].style.opacity ='1';
      da.style.display ='none';
    }
  }
  //zhel
  imgs1[i].onclick =function () {
    for(var i =0; i <  imgs1.length; i++){
      da.style.display ='block';
      da.style.backgroundImage='url('+this.src+')'
    }
  }
};
for(var i =0; i < imgs2.length; i++){
  imgs2[i].onmouseover =function () {
    for(var i =0; i < imgs2.length; i++){
      imgs2[i].style.opacity ='0.3'
    }
    this.style.opacity ='1';
    //da.style.display ='block';
    //da.style.backgroundImage='url('+this.src+')'
  }
  imgs2[i].onmouseout =function () {
    for(var i =0; i <  imgs2.length; i++){
      imgs2[i].style.opacity ='1';
      da.style.display ='none';
    }
  }
  imgs2[i].onclick =function () {
    for(var i =0; i <  imgs1.length; i++){
      da.style.display ='block';
      da.style.backgroundImage='url('+this.src+')'
    }
  }
};

//点击显示大图

da.onmouseover =function () {
  da.style.display ='block';
}
da.onmouseout =function () {
  da.style.display ='none';
}
da.onclick=function () {
  da.style.display ='none';

}
//点击close关闭整个da
var close =document.querySelector(".close");
  close.onclick =function(){
    da.parentNode.removeChild(da);
  }

//art-z点击会显示图片
 var box4 =document.querySelector(".art-z");
var imgs4 =document.querySelectorAll(".art-z img");
console.log(imgs4);
//随机一个替换box4图片背景
for(var i =0; i < imgs4.length; i++){
  imgs4[i].onmouseover =function () {
    for(var i =0; i < imgs4.length; i++){
      box4.style.backgroundImage ='';
      imgs4[i].style.opacity = '0.5';
    }
    box4.style.backgroundImage ='url('+this.src+')';
    this.style.opacity = '1';
  }
  imgs4[i].onmouseout =function () {
    for(var i =0; i < imgs4.length; i++){
      imgs4[i].style.opacity = '1';
    }
  }
}


//对话框的显示和隐藏
var icon =document.querySelector(".icon");
var dialogue =document.querySelector(".dialogue");
console.log(icon);
console.log(dialogue);
icon.addEventListener('click',function () {
  dialogue.style.display='block';
})

var diaC =document.querySelector(".dia-c");
diaC.addEventListener('click',function () {

    animate(dialogue ,{bottom:-200},function () {
       animate(dialogue ,{right:-400})
    })
})



//手风琴区域
var shou =document.querySelector(".shou");
var liss =document.querySelectorAll(".shou li");
//给每个li 添加背景图片
for(var i =0; i < liss.length; i++){
  liss[i].style.backgroundImage ='url(icon/f'+(i+1)+'.jpg)';
  //存一个下标
  liss[i].index =i;
  liss[i].style.left = i*170+'px';
  liss[i].style.borderLeft ='1px solid red';
  //注册鼠标经过事件
  liss[i].onmouseover =function () {
    for(var i =0; i < liss.length; i++){
      //判断i的位置
      if(i <=this.index){
        animate(liss[i],{left:i*50})
      }else{
        animate(liss[i],{left:i*50+940})
      }
    }

  }
  liss[i].onmouseout =function () {
     for(var i =0; i < liss.length; i++){
       animate(liss[i],{left:i*170})
     }
  };


}