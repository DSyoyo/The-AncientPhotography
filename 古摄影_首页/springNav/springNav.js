$(function () {
  
  $(".springNavBox1").click(function () {
    //判断是否展开了
    if (parseInt($(".springNavBox7").css("bottom")) > 100) {
      $(".springNav span").stop().animate({
        width: 0,
        height: 0,
        marginRight: 0,
        opacity: 0
      }, 600, function () {
        $(".springNavBox1").stop().animate({
          width: 100,
          height: 100,
          marginRight: -50,
          marginBottom: -50,
          opacity: 1
        }, 400, function () {
          $(".springNav span").css({
            width: 80,
            height: 80,
            bottom: 60,
            marginRight: -40,
            marginBottom: -40
          });
          $(".springNavBox1").stop().animate({
            width: 80,
            height: 80,
            marginRight: -40,
            marginBottom: -40
          }, 40);
        })
      });
      
      
      // $(".springNavBox1").stop().animate({
      //   width: 100,
      //   height: 100,
      //   marginRight: -50,
      //   marginBottom: -50
      // }, 40, function () {
      //   $(".springNav span").stop().animate({
      //     bottom: 60,
      //     marginBottom: -40
      //   }, 600, function () {
      //     $(".springNavBox1").stop().animate({
      //       width: 80,
      //       height: 80,
      //       marginRight: -40,
      //       marginBottom: -40
      //     }, 40, function () {
      //       $(".springNav span").css("opacity", 0);
      //       $(".springNav span").eq(0).css("opacity", 1);
      //     })
      //   })
      // });
    } else {
      $(".springNav span").css("opacity", 1);
      //第一次弹跳
      $(".springNavBox1").stop().animate({
        width: 100,
        height: 100,
        marginRight: -50,
        marginBottom: -50
      }, 100, function () {
        $(".springNavBox2").stop().animate({
          bottom: 110,
          marginBottom: 0
        }, 40)
        $(".springNavBox1").stop().animate({
          width: 80,
          height: 80,
          marginRight: -40,
          marginBottom: -40
        }, 40, function () {
          //第二次弹跳
          $(".springNavBox1").stop().animate({
            width: 100,
            height: 100,
            marginRight: -50,
            marginBottom: -50
          }, 40, function () {
            $(".springNavBox3").stop().animate({
              bottom: 200,
              marginBottom: 0
            }, 40)
            $(".springNavBox1").stop().animate({
              width: 80,
              height: 80,
              marginRight: -40,
              marginBottom: -40
            }, 40, function () {
              //第三次弹跳
              $(".springNavBox1").stop().animate({
                width: 100,
                height: 100,
                marginRight: -50,
                marginBottom: -50
              }, 40, function () {
                $(".springNavBox4").stop().animate({
                  bottom: 290,
                  marginBottom: 0
                }, 40)
                $(".springNavBox1").stop().animate({
                  width: 80,
                  height: 80,
                  marginRight: -40,
                  marginBottom: -40
                }, 40, function () {
                  //第四次弹跳
                  $(".springNavBox1").stop().animate({
                    width: 100,
                    height: 100,
                    marginRight: -50,
                    marginBottom: -50
                  }, 40, function () {
                    $(".springNavBox5").stop().animate({
                      bottom: 380,
                      marginBottom: 0
                    }, 40)
                    $(".springNavBox1").stop().animate({
                      width: 80,
                      height: 80,
                      marginRight: -40,
                      marginBottom: -40
                    }, 40, function () {
                      //第五次弹跳
                      $(".springNavBox1").stop().animate({
                        width: 100,
                        height: 100,
                        marginRight: -50,
                        marginBottom: -50
                      }, 40, function () {
                        $(".springNavBox6").stop().animate({
                          bottom: 470,
                          marginBottom: 0
                        }, 40)
                        $(".springNavBox1").stop().animate({
                          width: 80,
                          height: 80,
                          marginRight: -40,
                          marginBottom: -40
                        }, 40, function () {
                          //第六次弹跳
                          $(".springNavBox1").stop().animate({
                            width: 100,
                            height: 100,
                            marginRight: -50,
                            marginBottom: -50
                          }, 40, function () {
                            $(".springNavBox7").stop().animate({
                              bottom: 560,
                              marginBottom: 0
                            }, 40)
                            $(".springNavBox1").stop().animate({
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
  
  $(".springNav span").on("mouseenter")
});

