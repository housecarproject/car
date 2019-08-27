//渲染房车分类信息列表
// var res;
function selectProductType() {
    $.ajax({
        url: './../webMVC/index.php',
        type: 'post',
        data: {
            "id": 0,
            "c": "bread", "a": "select",
            "data": 0
        },
        success: function (e) {
            // debugger
            try{
                $res = JSON.parse(e);
                // console.log($res);
                var str='';
                
                for(var i = 0; i < $res.length; i++){
                    // console.log($res[i]['producttype_name']);
                    str+=`<ul><li>
                    <span id="type${$res[i]['producttype_id']}" onclick="choicetype(${$res[i]['producttype_id']})">${$res[i]['producttype_name']}</span>
                    </li>
                    </ul>`;
                }
                // console.log()
                // console.log(str)
                $(".bread").html(str);
            }catch(e){
                console.log('sorry啊,404了');
            }
        }
    })
    
}
selectProductType();


function choicetype(id_){
    if(id_==1){
        $(".productlist").css("display","none");
        $(".normaltype").css("display","block");
        $(".supertype").css("display","none");
        $(".luxurytype").css("display","none");
    }else if(id_==2){
        $(".productlist").css("display","none");
        $(".normaltype").css("display","none");
        $(".luxurytype").css("display","none");
        $(".supertype").css("display","block");
    }else if(id_==3){
        $(".productlist").css("display","none");
        $(".normaltype").css("display","none");
        $(".supertype").css("display","none");
        $(".luxurytype").css("display","block");
    }

}




