function rendersuper(){
    $.ajax({
        url:'./../webMVC/index.php',
        type:'post',
        data:{
            "id":0,
            "c":"product",
            "a":"selectsuper",
            "data":0
        },
        success:function(e){
            try{
                $res=JSON.parse(e);
                console.log($res);

                var str='';
                for(var i=0;i<$res.length;i++){
                    $srcArr=JSON.parse($res[i]['img_src']);
                    var pathArr=[];
                    for(var j=0;j<$srcArr.length;j++){
                        pathArr.push($srcArr[j].substring(1));
                    }

                    str+=` 
                        <div class="proimg"  onclick="enterProduct(${$res[i]['product_id']})">
                        <div><img style="width:100%" src="./../PHPMVC/${pathArr[0]}" alt="图片路径出错哦"></div>
                        <div style="font-size:20px;padding:10px;color:grey">${$res[i]['product_name']}</div>
                        <div style="font-size:14px;padding:10px;color:darkred">¥${$res[i]['product_rentalprice']}</div>
                        </div>`
                }
                $('.supertype').html(str);


            }catch(e){
                console.log("服务器出错啦")

            }
        }
    })
}
rendersuper()

function enterProduct(id_){
    location.href='proinfo.html?proId='+id_;
}