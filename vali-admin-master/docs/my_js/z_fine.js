//查询待缴纳罚金记录，当前台缴纳成功时，删除该条待缴纳记录，插入缴纳记录里
$(".needpay").click(function () {
    $(".needpay_content").siblings().css("display", "none");
    $(".needpay_content").show();
    selectNeedPay();
})
$(".payFine").click(function () {
    $(".payFine_content").siblings().css("display", "none");
    $(".payFine_content").show();
    selectpayFine();
})

//渲染待缴纳罚金列表
function selectNeedPay() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            'c': 'NeedPayFine',
            "a": "selectAnother",
            "id": 0,
            "data_":0
        },
        success: function (e) {
            // debugger
            // console.log(e);
            try {
                $res = JSON.parse(e);
                // console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                    //         // debugger;
                    str += `<tr>
                    <td>${i + 1}</td>
                            <td>${$res[i]['user_name']}</td>
                            <td>${$res[i]['product_name']}</td>
                            <td>${$res[i]['order_num']}</td>
                            <td>${$res[i]['order_state']}</td>
                            <td>${$res[i]['rent_days']}</td>
                            <td>${$res[i]['order_time']}</td>
                            <td>${$res[i]['order_overtime']}</td>
                            <td>${$res[i]['return_time']}</td>
                            <td>${$res[i]['timeout_days']}</td>
                            <td>${$res[i]['totalfine_price']}</td>
                            <td>${$res[i]['total_money']}</td>
                        </tr>`;
                }
                $(".needpay_content1").html(str);
            } catch (e) {
                // console.log(e);
                console.log('服务器出错！');
            }
        },
        error: function () {
            console.log("发送失败");
        }
    })
}

//缴纳罚金记录
function selectpayFine() {
    // console.log(1);
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            'c': 'PayFine',
            "a": "selectAnother",
            "id": 0,
            "data_":0
        },
        success: function (e) {
            // debugger
            // console.log(e);
            try {
                $res = JSON.parse(e);
                // console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                    //         // debugger;
                    str += `<tr>
                    <td>${i + 1}</td>
                            <td>${$res[i]['order_num']}</td>
                            <td>${$res[i]['user_name']}</td>
                            <td>${$res[i]['finetype_name']}</td>
                            <td>${$res[i]['fine']}</td>
                            <td>${$res[i]['timeout_days']}</td>
                            <td>${$res[i]['loss_price']}</td>
                            <td>${$res[i]['totalfine_price']}</td>
                        </tr>`;
                }
                $(".payFine_content1").html(str);
            } catch (e) {
                // console.log(e);
                console.log('服务器出错！');
            }
        },
        error: function () {
            console.log("发送失败");
        }
    })
}