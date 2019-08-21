//渲染用户信息
function selectUser(){
    $.ajax({
        url:'./../PHPMVC/index.php',
        type:'post',
        data:{"c":"user","a":""},
        success:function(e){
            try{
                $res=JSON.parse(e);
                console.log($res);
                var str='';
                for(var i=0;i<$res.length;i++){
                    str+=`
                    <tr>
                        <td>${$res[i]['user_id']}</td>
                        <td>${$res[i]['user_name']}</td>
                        <td>${$res[i]['user_password']}</td>
                        <td>${$res[i]['phone_num']}</td>
                        <td>${$res[i]['iden_num']}</td>
                    </tr>`;
                }
                $(".user_content tbody").html(str);
            }catch(e){
                console.log('服务器出错！');
            }
        }
    })
}
$(".user_info").click(function(){
    $(".user_content").siblings("div").css("display","none");
    $(".user_content").show();
    selectUser();
})


//渲染管理员信息
function selectAdmin(){
    $.ajax({
        url:'./../PHPMVC/index.php',
        type:'post',
        data:{"c":"admin","a":"select"},
        success:function(e){
            // debugger
            try{
                // debugger
                $res=JSON.parse(e);
                // console.log(e);
                var str='';
                for(var i=0;i<$res.length;i++){
                    str+=`<tr>
                            <td>${$res[i]['admin_id']}</td>
                            <td>${$res[i]['admin_name']}</td>
                            <td>${$res[i]['admin_password']}</td>
                            <td><button class="btn btn-danger">删除</button></td>
                        </tr>`;
                }
                $(".admin_content tbody").html(str);
            }catch(e){
                console.log('服务器出错！');
            }
        }
    })
}
$(".admin_info").click(function(){
    $(".admin_content").siblings("div").css("display","none");
    $(".admin_content").show();
    selectAdmin();
})


//管理员添加
$(".add_admin").click(function(){
    $(".admin_add").siblings('div').css("display","none");
    $(".admin_add").show();
})
//点击
$(".admin_add_btn").click(function(){
    add();
})
//添加发送的请求
function add(){
    $.ajax({
        url:'./../PHPMVC/index.php',
        // type:'post',
        // data:{"c":"admin","a":"select"}, 
        type:'post',
        data:{
            "c":"admin","a":"a_add_c",
            "adminName":$('.admin_name').val(),
            "adminPassword":$('.admin_pw').val(),
            "adminType":1
        },
        success:function(e){
            debugger
            // console.log(e);
            // try{
            //     console.log(e);
            // }catch(e){
            //     console.log('服务器出错！');
            // }
        },error(){
            console.log('error');
        }
    })
}
