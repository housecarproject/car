//点击后的商品的id

function get(key){
    var a=location.search;
    var b=a.substr(1);
    var str=b.split("&");
    var obj={};
    for(var i=0;i<str.length;i++){
    obj[str[i].split('=')[0]]=str[i].split('=')[1];
    }
    return obj[key];
    }

    var idvalue=get('proId');

//渲染商品信息
function renderInfo(){
    console.log(idvalue);
    $.ajax({
        url:'./../webMVC/index.php',
        type:'post',
        data:{
            "id":0,
            "c":"product",
            "a":"selectinfo",
            "data":0,
            "pid":idvalue,
        },
        success:function(e){
            try{
                $res=JSON.parse(e);
                console.log($res);

                for(var i=0;i<$res.length;i++){
                    $srcArr=JSON.parse($res[i]['img_src']);
                    // console.log($srcArr)
                    var pathArr=[];
                    for(var j=0;j<$srcArr.length;j++){
                        pathArr.push($srcArr[j].substring(1));
                    }
              
                    $(".small").css({"background":`url(http://localhost/XAH190402/car/vali-admin-master/PHPMVC/${pathArr[0]})`,"background-size":"100% 100%"});
                    $(".bigone").css({"background":`url(http://localhost/XAH190402/car/vali-admin-master/PHPMVC/${pathArr[0]})`,"background-size":"100% 100%"});
                    $(".simg").css({"background":`url(http://localhost/XAH190402/car/vali-admin-master/PHPMVC/${pathArr[0]})`,"background-size":"100% 100%"});
                    $(".typename").html(`${$res[i]['product_name']}`);
                    $(".price").html(`${$res[i]['product_rentalprice']}`);
                   
                    // console.log(pathArr[0]);
                    // str+=` 
                    //     <div class="proimg" onclick="enterProduct(${$res[i]['product_id']})">
                    //     <div><img style="width:100%" src="./../PHPMVC/${pathArr[0]}" alt="图片路径出错哦"></div>
                    //     <div style="font-size:20px;padding:10px;color:grey">${$res[i]['product_name']}</div>
                    //     <div style="font-size:14px;padding:10px;color:darkred">¥${$res[i]['product_rentalprice']}</div>
                    //     </div>`
                }
                // $('.productlist').html(str);


            }catch(e){
                console.log("error")

            }
        }
    })
}
renderInfo();


