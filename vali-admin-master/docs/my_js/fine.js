//查询待缴纳罚金记录，当前台缴纳成功时，删除该条待缴纳记录，插入缴纳记录里

// $(".needpay").click(function(){
// console.log(1);
// $("main").html("");
// })



// $(".needpay").click(function(){
//     $(".needpay_content").siblings().css("display","none");
//     $(".needpay_content").show();
//     selectNeedPay();
// })

//渲染待缴纳罚金列表
function selectNeedPay(){
    $.ajax({
        url:'./../PHPMVC/index.php',
        type:'post',
        data:{'c':'admin',"a":"select"},
        success:function(e){
            console.log(e);
            // try{
            //     $res=JSON.parse(e);
            //     console.log($res);
            //     var str='';
            //     for(var i=0;i<$res.length;i++){
            //         // debugger;
            //         str+=`<tr>
            //                 <td>${$res[i]['admin_id']}</td>
            //                 <td>${$res[i]['admin_name']}</td>
            //                 <td>${$res[i]['admin_password']}</td>
            //                 <td><button class="btn btn-danger">删除</button></td>
            //             </tr>`;
            //     }
            //     $(".admin_content tbody").html(str);
            // }catch(e){
            //     console.log('服务器出错！');
            // }
        },
        error:function(){
            console.log("发送失败");
        }
    })
}