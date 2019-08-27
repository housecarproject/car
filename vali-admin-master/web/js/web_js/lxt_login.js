// 注册
//点击注册按钮
$(".user_reg_btn").click(function(){
    //姓名
    reg_input_name=$(".user_reg_name").val();
    //手机号码
    reg_input_phone=$(".user_reg_phone").val();
    //身份证号码
    reg_input_iden=$(".user_reg_iden").val();
    //密码
    reg_input_pwd=$(".user_reg_pwd").val();
    //添加用户
    user_reg_add();
    
})

//注册用户
function user_reg_add(){
    $.ajax({
        url:"./../webMVC/index.php",
        type:'post',
        data:{
            "id":0,
            "data":0,
            "c":'user',
            "a":'useradd',
            "reg_input_name":reg_input_name,
            "reg_input_phone":reg_input_phone,
            "reg_input_iden":reg_input_iden,
            "reg_input_pwd":reg_input_pwd,
        },
        success:function(e){
           
            try{
              
            }catch(e){
                console.log('服务器出错！')
            }
            
        },
        error:function(e){
            console.log('error')
        }
    })

}

//登录用户
$(".user_login_btn").click(function () {
  // console.log($(".user_login_name").val());
  // console.log($(".user_login_password").val());
  // debugger
      $.ajax({
      url: './../webMVC/index.php',
      type: 'post',
      data: {
        "a": "yanzhengUserExit",
        "c": "user",
        "id": 0,
        "data":0,
        "userLoginName": $(".user_login_name").val(),
        "userLoginPassword": $(".user_login_password").val()
      },
      success: function (e) {
        // debugger
        
       console.log($(".user_login_name").val());
       console.log($(".user_login_password").val());
       debugger
        try {
          // debugger
          var res=JSON.parse(e);
          console.log(res[0]);
          debugger
          if($(".user_login_name").val()==res[0]['user_name']){
            // console.log("ok");

            if($(".user_login_password").val()==res[0]['user_password']){
              // console.log("ok");
              location.href = "supindex.html?user="+res[0]['user_name'];
            }
          }
        } catch (e) {
          $(".user_login_pwd").css('border','1px solid red');
          $(".user_login_name").css('border','1px solid red');
          $('.tip').html('姓名或者密码错误')
        }
      },
      error: function (e) {
        console.log('error');
      }
    })
  })


