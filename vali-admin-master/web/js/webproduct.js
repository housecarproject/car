function renderProduct(){
    $.ajax({
        url:'./../webMVC/index.php',
        type:'post',
        data:{
            "id":0,
            "c":"product",
            "a":"select",
            "data":0
        },
        success:function(e){
            try{
                $res=JSON.parse(e);
                console.log($res);

                var str='';
                for(var i=0;i<$res.length;i++){
                    $srcArr=JSON.parse($res[i]['img_src']);
                    // console.log($srcArr)
                    var pathArr=[];
                    for(var j=0;j<$srcArr.length;j++){
                        pathArr.push($srcArr[j].substring(1));
                    }

                    // console.log(pathArr[0]);
                    str+=` 
                        <div class="proimg" onclick="enterProduct(${$res[i]['product_id']})">
                        <div><img style="width:100%" src="http://localhost/XAH190402/car/vali-admin-master/PHPMVC/${pathArr[0]}" alt="图片路径出错哦"></div>
                        <div style="font-size:20px;padding:10px;color:grey">${$res[i]['product_name']}</div>
                        <div style="font-size:14px;padding:10px;color:darkred">¥${$res[i]['product_rentalprice']}</div>
                        </div>`
                }
                // console.log(str)
                $('.productlist').html(str);


            }catch(e){
                console.log("error")

            }
        }
    })
}
renderProduct();

function enterProduct(id_){
    location.href='proinfo.html?proId='+id_;
}