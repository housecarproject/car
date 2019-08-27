//渲染房车分类
function selectProducttype() {
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
            
            try {
                // debugger;
                $res = JSON.parse(e);
                // console.log($res);
                var str = '';
                for (var i = 0; i < $res.length; i++) {
                    // debugger;
                    str += `<tr>
                            <td>${$res[i]['producttype_id']}</td>
                            <td>${$res[i]['producttype_name']}</td>
                            <td><button class="btn btn-success producttype_updata_btn" style="margin-left:20px" onclick="updataProducttype(${JSON.stringify(JSON.stringify($res[i])).replace(/\"/g,'\'')})">修改</button><button class="btn btn-danger producttype_delete_btn" style="margin-left:20px" onclick="deleteProducttype(${$res[i]['producttype_id']})">删除</button></td>                         
                        </tr>`;
                }
                $(".producttype_content tbody").html(str);
            } catch (e) {
                console.log('服务器出错！');
            }
        }
    })
}
// 点击房车分类隐藏其他页面渲染,显示房车分类的渲染
$(".producttype_info").click(function () {
    // debugger
    $(".producttype_content").siblings().css("display", "none");
    $(".producttype_content").show();
    selectProducttype();
})
// 点击房车类型添加按钮隐藏分类渲染,显示添加类型的页面
$(".btn_add").click(function () {
    $(".producttype_content").css("display", "none");
    $(".producttype_add").css("display", "block");
    selectProducttype();

})
// 点击添加类型页面的添加按钮,隐藏添加页面,重新渲染分类
$(".producttype_add_btn").click(function () {
    // debugger;
    $(".producttype_content").css("display", "block");
    $(".producttype_add").css("display", "none");
    selectProducttype();
})


// 添加房车类型到数据库里
$('.producttype_add_btn').on('click', addProducttype);

function addProducttype() {
    // console.log($('.producttype_name').val());
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "data_": 0,
            'id': 0,
            "c": 'producttype',
            "a": 'add',
            "limo_id": $('.limo_id').val(),
            "producttype_name": $('.producttype_name').val()
        },
        success: function (e) {
            // debugger
            // debugger;
            $(".producttype_content").siblings().css("display", "none");
            $(".producttype_content").show();
            selectProducttype();
            // console.log(e);
        },
        error() {
            console.log('error');
        }
    })
}


//删除房车类型
// $('.producttype_delete_btn').on('click',deleteProducttype);
function deleteProducttype($id) {
    // debugger;
    console.log($id);
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            'id': $id,
            "c": 'producttype',
            "a": 'delete',
            "data_": 0
            // "producttype_name":$('.producttype_name').val()
        },
        success: function (e) {
            // debugger;
            // console.log(e);
            selectProducttype();
        },
        error() {
            console.log('error');
        }
    })
}

//修改房车类型
var str;

function updataProducttype(data) {

    str = JSON.parse(data.replace(/'/g, '"'));
    // console.log(str);
    $(".producttype_content").css("display", "none");
    $(".producttype_updata").css("display", "block");
    $(".producttype_name_update").val(str['producttype_name']);
    $(".producttype_updata_btn").click(function () {
        updatetype(str['producttype_id']);
    })
}

// 点击修改类型页面的修改按钮,隐藏修改页面,重新渲染分类
// console.log(1);
function updatetype(id) {
    debugger;
    $(".producttype_content").css("display", "block");
    $(".producttype_updata").css("display", "none");
    // selectProducttype();
    $.ajax({
        url: './../PHPMVC/index.php',
        type: 'post',
        data: {
            "data_": 0,
            'id': id,
            "c": 'producttype',
            "a": 'updata',
            "producttype_name": $('.producttype_name_update').val()
        },
        success: function (e) {
            // debugger
            try {
                $('.producttype_content').css('display','block')
                selectProducttype()
            } catch (e) {

            }
            selectProducttype();
        },
        error() {
            console.log('error');
        }
    })
}