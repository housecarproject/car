function selectEvaluate() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
             "id": 0,
             "c": "evaluate", 
             "a": "select",
             "data_":0
             },
        success: function (e) {
            try {
                // console.log(e);
                $res = JSON.parse(e);
                console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                    str += `
                    <tr>
                        <td>${$res[i]['evaluate_id']}</td>
                        <td>${$res[i]['user_id']}</td>
                        <td>${$res[i]['product_id']}</td>
                        <td>${$res[i]['evaluate_content']}</td>
                        <td>${$res[i]['reply_content']}</td>
                        <td><button type="button" class="btn btn-success replybtn" style="margin:0 15px" onclick='replyEvalu(${$res[i]['evaluate_id']})'>回复</button><button type="button" class="btn btn-danger delbtn" onclick='delEvalu(${$res[i]['evaluate_id']})'>删除</button></td>
                    </tr>`;

                }
                $(".evaluate_content tbody").html(str);

            } catch (e) {
                console.log("error");
            }
        }
    })
}
$(".evalu_info").click(function () {
    $(".evaluate_content").siblings("div").css("display", "none");
    $(".evaluate_content").show();
    selectEvaluate();
})

function delEvalu($id) {
    console.log($id);
    $.ajax({
        url: "./../PHPMVC/index.php",
        type: 'post',
        data: { 
            "id": $id, 
            "c": "evaluate",
             "a": "deletec",
             "data_":0
            },
        success: function (e) {
            debugger
            try {
                selectEvaluate();
            } catch (e) {
                console.log("系统出错");
            }
        }
    })
}