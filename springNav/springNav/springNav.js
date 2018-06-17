$(function () {
  
  $(".springNavBox1").click(function () {
    //判断是否展开了
    if (parseInt($(".springNavBox7").css("bottom")) > 100) {
      
      
      $(".springNav span").animate({
        bottom: 60,
        marginBottom: -40
      },600,function () {
        $(".springNav span").css("opacity", 0);
        $(".springNav span").eq(0).css("opacity", 1);
      });
    } else {
      $(".springNav span").css("opacity", 1);
      //第一次弹跳
      $(".springNavBox1").animate({
        width: 100,
        height: 100,
        marginRight: -50,
        marginBottom: -50
      }, 100, function () {
        $(".springNavBox2").animate({
          bottom: 110,
          marginBottom: 0
        }, 40)
        $(".springNavBox1").animate({
          width: 80,
          height: 80,
          marginRight: -40,
          marginBottom: -40
        }, 40, function () {
          //第二次弹跳
          $(".springNavBox1").animate({
            width: 100,
            height: 100,
            marginRight: -50,
            marginBottom: -50
          }, 40, function () {
            $(".springNavBox3").animate({
              bottom: 200,
              marginBottom: 0
            }, 40)
            $(".springNavBox1").animate({
              width: 80,
              height: 80,
              marginRight: -40,
              marginBottom: -40
            }, 40, function () {
              //第三次弹跳
              $(".springNavBox1").animate({
                width: 100,
                height: 100,
                marginRight: -50,
                marginBottom: -50
              }, 40, function () {
                $(".springNavBox4").animate({
                  bottom: 290,
                  marginBottom: 0
                }, 40)
                $(".springNavBox1").animate({
                  width: 80,
                  height: 80,
                  marginRight: -40,
                  marginBottom: -40
                }, 40, function () {
                  //第四次弹跳
                  $(".springNavBox1").animate({
                    width: 100,
                    height: 100,
                    marginRight: -50,
                    marginBottom: -50
                  }, 40, function () {
                    $(".springNavBox5").animate({
                      bottom: 380,
                      marginBottom: 0
                    }, 40)
                    $(".springNavBox1").animate({
                      width: 80,
                      height: 80,
                      marginRight: -40,
                      marginBottom: -40
                    }, 40, function () {
                      //第五次弹跳
                      $(".springNavBox1").animate({
                        width: 100,
                        height: 100,
                        marginRight: -50,
                        marginBottom: -50
                      }, 40, function () {
                        $(".springNavBox6").animate({
                          bottom: 470,
                          marginBottom: 0
                        }, 40)
                        $(".springNavBox1").animate({
                          width: 80,
                          height: 80,
                          marginRight: -40,
                          marginBottom: -40
                        }, 40, function () {
                          //第六次弹跳
                          $(".springNavBox1").animate({
                            width: 100,
                            height: 100,
                            marginRight: -50,
                            marginBottom: -50
                          }, 40, function () {
                            $(".springNavBox7").animate({
                              bottom: 560,
                              marginBottom: 0
                            }, 40)
                            $(".springNavBox1").animate({
                              width: 80,
                              height: 80,
                              marginRight: -40,
                              marginBottom: -40
                            }, 40)
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      });
    }
  })
});