//发送请求,渲染房车分类
var typedate;
var typeCon;
var state;
var imgData = "";
function addtype() {
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            'id': 0,
            'c': 'producttype',
            'a': 'select',
            "data_": 0
        },
        success: function (e) {
            typedate = e;
        }
    })
}
addtype();
//点击添加房车,渲染房车分类
$('.product_add_info').click(function () {
    $(".producttype_content").siblings().css("display", "none");
    $('#upload_btn').on('click', function () {
        var questionFile = new FormData();
        for (var i = 0; i < $('#files_list_')[0].files.length; i++) {
            questionFile.append("file" + i, $('#files_list_')[0].files[i]);
        }
        $.ajax({
            async: false,
            type: "post",
            url: './../PHPMVC/controllers/upload.php',
            data: questionFile,
            processData: false, //必须false才会避开jQuery对 formdata 的默认处理
            contentType: false, //必须false才会自动加上正确的Content-Type
            success: function (data) {
                imgData = data;
            }
        });

    })
    $("#product_type_add").html("");
    $("#product_state_add").html("");
    var e = JSON.parse(typedate);
    //根据数据库里的房车分类动态生成option
    for (var i in e) {
        var tfirst_content = $("<option></option>");
        $("#product_type_add").append(tfirst_content);
        tfirst_content.html(e[i].producttype_name);
        tfirst_content.val(e[i].producttype_id);
    }
    //根据0,1两个状态值动态生成option
    for (var i = 0; i < 2; i++) {
        var status = $("<option></option>");
        $("#product_state_add").append(status);
        status.val(i);
        if (i == 0) {
            status.html("可租赁");
        } else {
            status.html("租赁中");
        }
    }
    //监听分类select的变化
    $("#product_type_add").change(function () {
        typeCon = $(this).children('option:selected').val(); //监听option获取里面的值
    })
    //监听状态select的变化
    $("#product_state_add").change(function () {
        state = $(this).children('option:selected').val(); //监听option获取里面的值
        // console.log(state);
    })
    $(".producttype_content").css("display", "none");
    $(".product_add").css("display", "block");

    $('.product_add_btn').click(function () {
        add(imgData, state);
    })
})

//添加房车
var add_data;

function add(imgData, state) {
    // console.log(imgData);
    add_data = {
        // "product_id":null,
        "img_src": imgData,
        "product_name": $(".product_name_add").val(),
        "product_licensenum": $(".product_licensenum_add").val(),
        "product_person": $(".product_person_add").val(),
        "product_type": typeCon,
        "product_state": state,
        "product_costprice": $(".product_costprice_add").val(),
        "product_rentalprice": $(".product_rentalprice_add").val(),
        "product_cashpledge": $(".product_cashpledge_add").val()
    }
    // console.log(add_data);
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "id": -1,
            "c": "product",
            "a": "addlgg",
            "data_": add_data
        },
        success: function (e) {
            try{
                // debugger;
                $('.product_content').css('display','block');
                $('.product_add').css('display','none');
                selectProduct();
            }catch(e){
                console.log('服务器出错')
            }
            
            console.log(e);
        },
        error() {
        }
    })

}