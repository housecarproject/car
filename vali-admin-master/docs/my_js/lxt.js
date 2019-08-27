//渲染用户信息
function selectUser() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": 0,
            "c": "user",
            "a": "select",
            "data_":0
        },
        success: function (e) {
            try {
                $res = JSON.parse(e);
                console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                    str += `
                    <tr>
                        <td>${$res[i]['user_id']}</td>
                        <td>${$res[i]['user_name']}</td>
                        <td>${$res[i]['user_password']}</td>
                        <td>${$res[i]['phone_num']}</td>
                        <td>${$res[i]['iden_num']}</td>
                    </tr>`;
                }
                $(".user_content tbody").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        }
    })
}
$(".user_info").click(function () {
    $(".user_content").siblings("div").css("display", "none");
    $(".user_content").show();
    selectUser();
})


//渲染管理员信息
function selectAdmin() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": 0,
            "c": "admin",
            "a": "select",
            "data_":0
        },
        success: function (e) {
            try {
                $res = JSON.parse(e);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                    str += `<tr>
                            <td>${$res[i]['admin_phone']}</td>
                            <td>${$res[i]['admin_name']}</td>
                            <td>${$res[i]['admin_password']}</td>
                            <td><button class="btn btn-danger" onclick="dele(${$res[i]['admin_id']})">删除</button></td>
                        </tr>`;
                }
                $(".admin_content tbody").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        }
    })
}
$(".admin_info").click(function () {
    $(".admin_content").siblings("div").css("display", "none");
    $(".admin_content").show();
    selectAdmin();
})

//删除管理员
function dele(id) {
    var r = confirm("是否删除该信息？");
    if (r == true) {
        $.ajax({
            url: './../PHPMVC/index.php',
            type: 'post',
            data: {
                "id": id,
                "c": "admin",
                "a": "del",
                "data_":0
            },
            success: function (e) {
                try {
                    selectAdmin();
                } catch (e) {

                }
            },
            error() {
                console.log('error');
            }
        })
    } else {

    }

}



//管理员添加
$(".add_admin").click(function () {
    $(".admin_add").siblings('div').css("display", "none");
    $(".admin_add").show();
})

//点击
$(".admin_add_btn").click(function () {
    add_admin();
})

//添加发送的请求
var falg = false;
//核对电话号码
function checkPhone() {
    var phone = $(".admin_phone").val();
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
        alert("手机号码有误，请重填");
        flag = false;
    } else {
        flag = true;
    }
    return flag;
}
//添加管理员
function add_admin() {
    var result = checkPhone();
    // console.log(result);
    if (result) {
        $.ajax({
            url: './../PHPMVC/index.php',
            type: 'post',
            data: {
                "id": 0,
                "c": "admin",
                "a": "add",
                "data_":0,
                "adminName": $('.admin_name').val(),
                "adminPassword": $('.admin_pw').val(),
                "adminPhone": $(".admin_phone").val(),
                "adminType": 1
            },
            success: function (e) {
                try {
                    console.log(e);
                    $(".admin_content").show();
                    selectAdmin();
                    $(".admin_content").siblings().css('display', 'none');

                } catch (e) {
                    console.log('服务器错误！');
                }
            },
            error() {
                console.log('error');
            }
        })
    }
}

//取到用户的人数
function getUserNum(){
    $.ajax({
        url:"./../PHPMVC/index.php",
        type:'post',
        data:{
            "id":0,
            "c":"user",
            "a":"getUserNum",
            "data_":0
        },
        success:function(e){
            try{

            }catch(e){
                console.log('服务器错误');
            }
        },
        error:function(e){
            console.log('error');
        }
    })
}


//点击营业信息
$('.business_info').click(function(){
    location.href='index.html';
    $('.default_index').css('display','block');
    $('.default_index').siblings('div').css('display','block');
})