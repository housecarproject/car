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

var checkedBox;
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
                   var updown= $res[i]['product_upAnddown']==0?"已下架":"上架中";

                   $srcArr=JSON.parse($res[i]['img_src']);
                   var pathArr=[];
                    for(var j=0;j<$srcArr.length;j++){
                        pathArr.push($srcArr[j].substring(1));
                    }
                    
                    str += `<tr>
                            <td><input  class="sub"  data-state="1" type="checkbox" onchange="change(this,${$res[i]['product_id']})"></td>
                            <td>${$res[i]['product_id']}</td>
                            <td style="cursor: pointer;" onclick="enterProduct_(${$res[i]['product_id']})">
                            <img style="width:50px" src="./../PHPMVC/${pathArr[0]}" alt="图片路径出错哦">
                            ${$res[i]['product_name']}</td>
                            <td>${$res[i]['product_licensenum']}</td>
                            <td>${$res[i]['product_person']}</td>
                            <td>${$res[i]['producttype_name']}</td>
                            <td>${sta}</td>
                            <td>${updown}</td>
                            <td>${$res[i]['product_costprice']}</td>
                            <td>${$res[i]['product_rentalprice']}</td>
                            <td>${$res[i]['product_cashpledge']}</td>
                            <td><button class="btn btn-success " onclick="productUpdate(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g, '\'')})">修改</button></td>
                            <td><button class="btn btn-danger" onclick="productDel(${$res[i]['product_id']})">删除</button></td>
                            <td><button class="btn btn-info" onclick="standup(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g, '\'')})">上架</button></td>
                            <td><button class="btn btn-info" onclick="standdown(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g, '\'')})">下架</button></td>
                        </tr>`;
                }
                $(".product_content tbody").html(str);
                // checkedBox=document.getElementsByClassName("sub");
                // getChecked(checkedBox);
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
    // var checkedBox=document.getElementsByClassName("sub");
    // console.log(checkedBox);
})

//批量删除,批量上架，下架
var checkedBoxArr=[];
var upArr=[];
var update_up;
function change(t,a){ 
    // debugger
   if(t.checked==true){
    upArr.push(a);
    checkedBoxArr.push(a);
    // return checkedBoxArr;
   }
   if(t.checked==false){
    upArr.pop();
    checkedBoxArr.pop();
    // return checkedBoxArr;
   }
}
$("#alldel").click(function(){
    console.log(checkedBoxArr);
    layer.confirm('确认删除', {
        btn: ['确认', '取消'] //按钮
        }, function () {
        // console.log($id)
        layer.msg('删除成功', {
        time: 1000, //20s后自动关闭
        });
    for(var i=0;i<checkedBoxArr.length;i++){
        // debugger
        console.log(checkedBoxArr[i]);
        checkedDel(checkedBoxArr[i]);
    }
    });
    
})
//批量删除请求
function checkedDel($id) {
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

//上架
$("#batch_up").click(function(){
    console.log(upArr);
    for(var i=0;i<upArr.length;i++){
        // productDel(upArr[i]);
        update_up={
            "id": upArr[i],
            "upAnddown":1
        }
        update_upAnddown(update_up);
    }
    upArr.pop();
    // update_upAnddown(update_up);
    $(".product_content").siblings("div").css("display", "none");
    $(".product_content").show();
    selectProduct();
})
//下架
$("#batch_down").click(function(){
    console.log(upArr);
    for(var i=0;i<upArr.length;i++){
        // productDel(upArr[i]);
        update_up={
            "id": upArr[i],
            "upAnddown":0
        }
        update_upAnddown(update_up);
    }
    upArr.pop();
    // update_upAnddown(update_up);
    $(".product_content").siblings("div").css("display", "none");
    $(".product_content").show();
    selectProduct();
})



//删除
function productDel($id) {
    layer.confirm('确认删除', {
    btn: ['确认', '取消'] //按钮
    }, function () {
    // console.log($id)
    layer.msg('删除成功', {
    time: 1000, //20s后自动关闭
    });
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
});
}





//修改商品上下架状态
var up;
//上架
function standup(data){
    // console.log('成功');
    up = JSON.parse(data.replace(/'/g, '"'));
    var update_up={
        "id": up.product_id,
        "upAnddown":1
    }
    update_upAnddown(update_up);
    $(".product_content").siblings("div").css("display", "none");
    $(".product_content").show();
    selectProduct();
}
var down;
//下架
function standdown(data){
    // console.log('成功');
    down = JSON.parse(data.replace(/'/g, '"'));
    var update_down={
        "id": down.product_id,
        "upAnddown":0
    }
    update_upAnddown(update_down);
    $(".product_content").siblings("div").css("display", "none");
    $(".product_content").show();
    selectProduct();
}

//发送修改商品上下架状态的请求
function update_upAnddown(data){
    // debugger
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": -1,
            "c": "upAnddown", "a": "updateState",
            "data_": data
        },
        success: function (e) {
            try{
                console.log('成功');
                // selectProduct();
                // selectProductType
                console.log(e);
            }catch(e){

            }
        }, error(e) {
            console.log('error');
        }
    })
}

//点击进去前端商品详情页面
function enterProduct_(id_){
    location.href='http://localhost/XAH190402/car/vali-admin-master/web/proinfo.html?proId='+id_;
}


//模糊搜索框
$('.search_btn').on("click",function(){
    // debugger
    $(".product_content tbody").html("");
    // $(".product_content").siblings("div").css("display", "none");
    // $(".product_content").show();
    $v=$('.search_val').val();
    console.log($v);
    // selectSearch($v);
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": 0,
            "c": "search", "a": "select",
            "data_": {'val':$v}
        },
        success: function (e) {
            try{
                // debugger
                console.log('成功');
                // selectProduct();
                // selectProductType
                console.log(e);
                $res = JSON.parse(e);
                // console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                   var sta= $res[i]['product_state']==0?"可租赁":"租赁中";
                   var updown= $res[i]['product_upAnddown']==0?"已下架":"上架中";

                   $srcArr=JSON.parse($res[i]['img_src']);
                   var pathArr=[];
                    for(var j=0;j<$srcArr.length;j++){
                        pathArr.push($srcArr[j].substring(1));
                    }

                    str += `<tr>
                            <td><input  class="sub"  data-state="1" type="checkbox" onclick="change(${$res[i]['product_id']})"></td>
                            <td>${$res[i]['product_id']}</td>
                            <td style="cursor: pointer;" onclick="enterProduct_(${$res[i]['product_id']})">
                            <img style="width:50px" src="./../PHPMVC/${pathArr[0]}" alt="图片路径出错哦">
                            ${$res[i]['product_name']}</td>
                            <td>${$res[i]['product_licensenum']}</td>
                            <td>${$res[i]['product_person']}</td>
                            <td>${$res[i]['producttype_name']}</td>
                            <td>${sta}</td>
                            <td>${updown}</td>
                            <td>${$res[i]['product_costprice']}</td>
                            <td>${$res[i]['product_rentalprice']}</td>
                            <td>${$res[i]['product_cashpledge']}</td>
                            <td><button class="btn btn-success " onclick="productUpdate(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g, '\'')})">修改</button></td>
                            <td><button class="btn btn-danger" onclick="productDel(${$res[i]['product_id']})">删除</button></td>
                            <td><button class="btn btn-info" onclick="standup(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g, '\'')})">上架</button></td>
                            <td><button class="btn btn-info" onclick="standdown(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g, '\'')})">下架</button></td>
                        </tr>`;
                }
                $(".product_content tbody").html(str);
            }catch(e){

            }
        }, error(e) {
            console.log('error');
        }
    })
})






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
    layer.confirm('确认修改', {
        btn: ['确认', '取消'] //按钮
        }, function () {
        // console.log($id)
        layer.msg('修改成功', {
        time: 1000, //20s后自动关闭
        });
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
    });
}



