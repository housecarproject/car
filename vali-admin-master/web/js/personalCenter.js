//点击我的订单
$(".order_form").click(function(){
    console.log(1);
    selectAllOrder();
})

//点击押金
$(".deposit").click(function(){
    console.log(2);
})

//点击个人信息
$(".person_message").click(function(){
    console.log(3);
})

//渲染个人订单
function selectAllOrder() {
    $.ajax({
        url: './../webMVC/index.php',
        type: 'post',
        data: {
            'c': 'AllOrder',
            "a": "selectAnother",
            "id": 0,
            "data_":0
        },
        success: function (e) {
            // debugger
            console.log(e);
            try {
                $res = JSON.parse(e);
                console.log(e);
                // console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                    str += `<tr>
                        <td>${i+1}</td>
                        <td>${$res[i]['user_name']}</td>
                        <td>${$res[i]['product_name']}</td>
                        <td>${$res[i]['order_num']}</td>
                        <td>${$res[i]['order_state']}</td>
                        <td>${$res[i]['rent_days']}</td>
                        <td>${$res[i]['order_time']}</td>
                        <td>${$res[i]['order_overtime']}</td>
                        <td>${$res[i]['return_time']}</td>
                        <td>${$res[i]['timeout_days']}</td>
                        <td>${$res[i]['finetype_name']}</td>
                        <td>${$res[i]['totalfine_price']}</td>
                        <td>${$res[i]['total_money']}</td>
                        <td><button class="btn btn-danger" onclick="orderDel(${$res[i]['order_id']})">删除</button> </td>
                    </tr>`;

                }
                $(".right_page").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        },
        error: function () {
            console.log("发送失败");
        }
    })
}