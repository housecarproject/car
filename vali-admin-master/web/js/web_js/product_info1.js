



var val = $("#num1").val();
$(".add1").click(function () {
    //加
    val++;
    $("#num1").val(val);
    //获取单价
    $needpayPrice1 = $('#getprice1').html();
    $getpledge = $('#getpledge').html();
    // console.log($getpledge);
    //计算总价:租赁天数*单价
    $needallPrice1 = parseInt(val * $needpayPrice1) + parseInt($getpledge);
    //把总价放进合计的内容里
    $('.totalpayPrice111').html($needallPrice1);
    $('#showtotalprice').html($needallPrice1)
});
$(".reduce1").click(function () {
    if (val == 0) return;
    val--;
    $("#num1").val(val);
    $needpayPrice1 = $('#getprice1').html();
    $getpledge = $('#getpledge').html();
    $needallPrice1 = parseInt(val * $needpayPrice1) + parseInt($getpledge);
    $('.totalpayPrice111').html($needallPrice1);
    $('#showtotalprice').html($needallPrice1)
});

var val1 = $("#num1").val();
var val2=Number(val1);
console.log(val1);
$statime = $('#statime').html();
console.log($statime);
function addDate(date, days) {
    var d = new Date(date);
    d.setDate(d.getDate() + days);
    var m = d.getMonth() + 1;
    var ExpirationDate=d.getFullYear() + '-' + m + '-' + d.getDate();
    $('#duetime').html(ExpirationDate);
    console.log(d.getFullYear() + '-' + m + '-' + d.getDate())
}
addDate($statime,val2);





