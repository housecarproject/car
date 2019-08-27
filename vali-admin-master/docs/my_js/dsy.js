//渲染房车分类信息列表
var type_date;
function selectProductType() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": 0,
            "c": "RenderType", "a": "select",
            "data_": 0
        },
        success: function (e) {
            // debugger
            type_date = e;
        }
    })
}
selectProductType();

//渲染房车信息
function selectProduct() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": 0,
            "c": "product", "a": "select",
            "data_": 0
        },
        success: function (e) {
            try {
                $res = JSON.parse(e);
                // console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                   var sta= $res[i]['product_state']==0?"可租赁":"租赁中";
                    str += `<tr>
                            <td>${$res[i]['product_id']}</td>
                            <td>${$res[i]['product_name']}</td>
                            <td>${$res[i]['product_licensenum']}</td>
                            <td>${$res[i]['product_person']}</td>
                            <td>${$res[i]['producttype_name']}</td>
                            <td>${sta}</td>
                            <td>${$res[i]['product_costprice']}</td>
                            <td>${$res[i]['product_rentalprice']}</td>
                            <td>${$res[i]['product_cashpledge']}</td>
                            <td><button class="btn btn-success " onclick="productUpdate(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g, '\'')})">修改</button></td>
                            <td><button class="btn btn-danger" onclick="productDel(${$res[i]['product_id']})">删除</button></td>
                        </tr>`;
                }
                $(".product_content tbody").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        }
    })
}
$(".product_info").click(function () {
    $(".product_content").siblings("div").css("display", "none");
    $(".product_content").show();
    selectProduct();
})

//删除
function productDel($id) {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": $id,
            "c": "product", "a": "delete",
            "data_": 1
        },
        success: function (e) {
            selectProduct();
        }, error() {
            console.log('服务器错误');
        }
    })
}




var str;
var typeCon;
var State;
//修改页面
function productUpdate(data) {
    $("#product_state").html("");
    $("#product_type").html("");
    var e = JSON.parse(type_date);
    str = JSON.parse(data.replace(/'/g, '"'));
    $(".product_content").css("display", "none");
    $(".product_form").css("display", "block");
    $(".product_name").val(str.product_name);
    $(".product_licensenum").val(str.product_licensenum);
    $(".product_person").val(str.product_person);
    for (var i in e) {
        var tfirst_content = $("<option></option>");
        $("#product_type").append(tfirst_content);
        tfirst_content.html(e[i].producttype_name);
        tfirst_content.val(e[i].producttype_id);
    }
    for(var i=0 ;i<2;i++){
        var status = $("<option></option>");
        $("#product_state").append(status);
        status.val(i);
        if(i==0){
            status.html("可租赁");
        }
        else{
            status.html("租赁中");
        }
    }
    $("#product_type").change(function () {
        typeCon = $(this).children('option:selected').val(); //监听option获取里面的值
    })
    $("#product_state").change(function () {
        State = $(this).children('option:selected').val(); //监听option获取里面的值
        console.log(State);
    })
    $(".product_state").val(str.product_state);
    $(".product_costprice").val(str.product_costprice);
    $(".product_rentalprice").val(str.product_rentalprice);
    $(".product_cashpledge").val(str.product_cashpledge);
    //修改后保存的点击事件
    $(".product_update_btn").click(function () {
        // console.log(typeCon);
        $(".product_content").css("display", "block");
        $(".product_form").css("display", "none");


        var update_data = {
            "id": str.product_id,
            "name": $(".product_name").val(),
            "licensenum": $(".product_licensenum").val(),
            "person": $(".product_person").val(),
            "typeid": typeCon,
            "state": State,
            "costprice": $(".product_costprice").val(),
            "rentalprice": $(".product_rentalprice").val(),
            "cashpledge": $(".product_cashpledge").val()

        }
        // console.log(JSON.stringify(update_data));
        update(update_data);
        selectProduct();
    })
}

//修改请求
function update(data) {
    // debugger
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": -1,
            "c": "product", "a": "updatetype",
            "data_": data
        },
        success: function (e) {
            try{
                selectProduct();
                selectProductType
            }catch(e){

            }
        }, error(e) {
            console.log('error');
        }
    })
}



