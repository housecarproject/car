// 注册
//点击注册按钮
$(".user_reg_btn").click(function () {
  //姓名
  reg_input_name = $(".user_reg_name").val();
  //手机号码
  reg_input_phone = $(".user_reg_phone").val();
  //身份证号码
  reg_input_iden = $(".user_reg_iden").val();
  //密码
  reg_input_pwd = $(".user_reg_pwd").val();
  //添加用户
  user_reg_add();

})

//注册验证用户的输入框
var regFlag = false;

function checkReg() {
  var phone = $(".user_reg_phone").val();
  var password = $('.user_reg_pwd').val();
  var user_reg_iden = $('.user_reg_pwd').val();
  if (!(/^1[3456789]\d{9}$/.test(phone))) {
    $(".user_reg_phone").css('border', '1px solid red');
    if (!(/[a-zA-z1-9]{6-12}/.test(password))) {
      $(".user_reg_pwd").css('border', '1px solid red');
      if (!(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/).test(user_reg_iden)) {
        $(".user_reg_iden").css('border', '1px solid red');
      }
      regFlag = false;
    }
  } else {
    regFlag = true;
    $(".user_reg_phone").css('border', '1px solid gray');
    $(".user_reg_pwd").css('border', '1px solid gray');
    $(".user_reg_iden").css('border', '1px solid gray');
  }
  return regFlag;
}
//注册用户
function user_reg_add() {
  var res = checkReg();
  if (res) {
    $.ajax({
      url: "./../webMVC/index.php",
      type: 'post',
      data: {
        "id": 0,
        "data": 0,
        "c": 'user',
        "a": 'useradd',
        "reg_input_name": $('.user_reg_name').val(),
        "reg_input_phone": $('.user_reg_phone').val(),
        "reg_input_iden": $('.user_reg_iden').val(),
        "reg_input_pwd": $('.user_reg_pwd').val(),
        "reg_input_address": $('.user_reg_address').val(),
      },
      success: function (e) {
        debugger
        try {
          if(e=='1'){
            $('.user_reg_tip').html('您已经注册过了，请直接登录！');
          }else{
            $('.user_reg_tip').html('注册成功，请前去登录！');
          }
         
        } catch (e) {
          console.log('服务器出错！')
        }

      },
      error: function (e) {
        $('.user_reg_tip').html('该用户已经存在');
        console.log('error')
      }
    })
  }
}

//点击注册，注册页面显示
$(".user_reg_show_btn").click(function () {
  $('.user_reg_show_btn').css('color', 'red');
  $('.user_login_show_btn').css('color', 'blue');
  $('.user_reg_div').show();
  $('.user_login_div').hide();
})

//点击登录，登录页面显示
$(".user_login_show_btn").click(function () {
  $('.user_login_show_btn').css('color', 'red');
  $('.user_reg_show_btn').css('color', 'blue');
  $('.user_reg_div').hide();
  $('.user_login_div').show();
})


//登录的时候验证格式
//验证手机号码是否符合规则
$(".user_login_phone").focus(function(){
  $(this).css('border', '1px solid #blue');
})
$(".user_login_password").focus(function(){
  $(this).css('border', '1px solid #blue');
})
$('.user_login_phone').blur(function(){
  $(this).css('border', '1px solid gray');
})
$(".user_login_password").blur(function(){
  $(this).css('border', '1px solid gary');
})

var flag = false;
function checkPhone() {
  var phone = $(".user_login_phone").val();
  var password = $('.user_login_password').val();
  if (!(/^1[3456789]\d{9}$/.test(phone))) {
    $(".user_login_phone").css('border', '1px solid red');
    if (!(/[a-zA-z1-9]{6-12}/.test(password))) {
      flag = false;
      $(".user_login_password").css('border', '1px solid red');
    }
  } else {
   
    flag = true;
  }
  return flag;
}
//重置
$('.user_login_reset_btn').click(function () {
  $(".user_login_phone").val('')
  $(".user_login_password").val('')
})


















//登录用户
$(".user_login_btn").click(function () {
  // var res=checkPhone();
  // if(res){
  $.ajax({
    url: './../webMVC/index.php',
    type: 'post',
    data: {
      "a": "login_",
      "c": "user",
      "id": 0,
      "data": 0,
      // '_s_id':getCookie('_s_id'),
      "userLoginPhone": $(".user_login_phone").val(),
      "userLoginPassword": $(".user_login_password").val()
    },
    success: function (e) {
   debugger
      var res=JSON.parse(e);
      // {"_s_id":"2e6a53965129faf0e223628af2738391","rand_str":"fxV7Eh"}
      setCookie('_s_id', res['_s_id']);
      setCookie('rand_str', res['rand_str']);
      // location.href = "login.html";
      history.back();
    },
    error: function (e) {
      console.log('error');
    }
  })
  // }

})