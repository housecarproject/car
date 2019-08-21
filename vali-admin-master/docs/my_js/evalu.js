//渲染评论信息
function selectEvalu() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: { 'c':'evalu','a':'select' },
        success: function (e) {
            debugger
            try {
                $res = JSON.parse(e);
                console.log($res);
                var str='';
                for(var i=0;i<$res.length;i++){
                    str+=`
                    <tr>
                        <td>${$res[i]['evaluate_id']}</td>
                        <td>${$res[i]['user_id']}</td>
                        <td>${$res[i]['product_id']}</td>
                        <td>${$res[i]['evaluate_content']}</td>
                        <td>${$res[i]['reply_content']}</td>
                        <td><button class="replybtn btn-success" onclick='replyEvalu(${$res[i]['evaluate_id']})'>回复</button><button class="delbtn btn-danger" onclick='delEvalu(${$res[i]['evaluate_id']})'>删除</button></td>
                    </tr>`;
                }
                $(".evaluate_content tbody").html(str);
            }catch(e){
                console.log('服务器出错!');
            }
        }
    })
}
$(".evalu_info").click(function(){
    $(".evaluate_content").siblings("div").css("display","none");
    $(".evaluate_content").show();
    selectEvalu();
})
//删除评论信息

function delEvalu() {
    $.ajax({
        url: './../PHPMVC/controllers/evaluController.php',
        method: 'post',
        data: {
            'action': 'select' 
        },
        success: function (e) {
            // console.log(111);
            try {
                $res = JSON.parse(e);
                console.log($res);
                // location.reload();
            }catch(e){
                console.log('服务器出错!');
            }
        }
      
    })
}