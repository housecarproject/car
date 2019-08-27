//发送ajax请求获取订单数据
var state_data;
function changeState() {
    $.ajax({
        url: './../webMVC/index.php',
        type: 'post',
        data: {
            "id": 0,
            "c": "changeState", "a": "select",
            "data_": 0
        },
        success: function (e) {
            // debugger
            try{
                // $res = JSON.parse(e);
                state_data=JSON.parse(e);
                console.log(state_data);
            }catch(e){
                console.log('sorry啊,404了');
            }
        }
    })
}
changeState();




$(".change2").click(function(){
    // console.log(1);
    var update_state={
        "id":2,
        "state":2
    };
    updateState(update_state);
})
$(".change3").click(function(){
    var update_state={
        "id":2,
        "state":3
    };
    updateState(update_state);
})

//修改订单状态请求
function updateState(data) {
    // debugger
    $.ajax({
        url: './../webMVC/index.php',
        type: 'post',
        data: {
            "id": -1,
            "c": "changeState", "a": "updateState",
            "data_": data
        },
        success: function (e) {
            try{
                console.log('成功');
                // selectProduct();
                // selectProductType
                console.log(e)
            }catch(e){

            }
        }, error(e) {
            console.log('error');
        }
    })
}