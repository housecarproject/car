$(".AllOrder").click(function () {
    $(".AllOrder_content").siblings().css("display", "none");
    $(".AllOrder_content").show();
    selectAllOrder();
})

$(".Ordering").click(function () {
    $(".Ordering_content").siblings().css("display", "none");
    $(".Ordering_content").show();
    selectOrdering();
})

$(".finishOrder").click(function () {
    $(".finishOrder_content").siblings().css("display", "none");
    $(".finishOrder_content").show();
    selectfinishOrder();
})

//所有订单
function selectAllOrder() {
    $.ajax({
        url: './../PHPMVC/index.php',
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
                $(".AllOrder_content1").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        },
        error: function () {
            console.log("发送失败");
        }
    })
}

//删除订单的方法
function orderDel(id) {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            'c': 'AllOrder',
            "a": "delete",
            "id": id,
            "data_":0
        },
        success: function (e) {
            console.log(e);
            selectAllOrder();
        },
        error: function () {
            console.log("发送失败");
        }
    })
}

//正在进行订单
function selectOrdering() {
    console.log(1)
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            'c': 'Ordering',
            "a": "selectAnother",
            "id": 0,
            "data_":0
        },
        success: function (e) {
            // console.log(1);
            // console.log(e);
            try {
                $res = JSON.parse(e);
                console.log($res);
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
                    </tr>`;

                }
                $(".Ordering_content1").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        },
        error: function () {
            console.log("发送失败");
        }
    })
}

//已完成订单
function selectfinishOrder() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            'c': 'finishOrder',
            "a": "selectAnother",
            "id": 0,
            "data_":0
        },
        success: function (e) {
            console.log(1);
            console.log(e);
            try {
                $res = JSON.parse(e);
                console.log($res);
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
                    </tr>`;

                }
                $(".finishOrder_content1").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        },
        error: function () {
            console.log("发送失败");
        }
    })
}