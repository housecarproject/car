//渲染用户信息
function selectUser(){
    $.ajax({
        url:'./../PHPMVC/controllers/userController.php',
        type:'post',
        data:{'action':'select'},
        success:function(e){
            try{
                $res=JSON.parse(e);
                console.log($res);
                var str='';
                for(var i=0;i<$res.length;i++){
                    // debugger;
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
        url:'./../PHPMVC/controllers/adminController.php',
        type:'post',
        data:{'action':'select'},
        success:function(e){
            try{
                $res=JSON.parse(e);
                console.log($res);
                var str='';
                for(var i=0;i<$res.length;i++){
                    // debugger;
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
    $(".admin_content").siblings().css("display","none");
    $(".admin_content").show();
    selectAdmin();
})
