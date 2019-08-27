 
//写cookies 

function setCookie(name,value) 
{

    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

//读取cookies 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} 

//删除cookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 

function getSession(){
    // debugger
    if(getCookie("_s_id")===null){
        if(location.href.indexOf('login.html')!=-1){ 

        }else{
            location.href="http://localhost/XAH190402/car/vali-admin-master/web/login.html";
        }
        console.log(getCookie("_s_id"));
       
    }else{
        
        // alert('可能扥路');
        // if(getCookie('_s_id'))
        $.ajax({ 
            url:"./../webMVC/index.php",
            type:'post',
            data:{
                'id':0,
                'data':0,
                'c':'user',
                'a':'yanzhengUserExit',
                '_s_id':getCookie('_s_id'), 
                'rand_str':getCookie('rand_str'),
            },
                success:function(e){ 
                    debugger 
                if(e=='error'){
                    delCookie('_s_id');
                    location.href="http://localhost/XAH190402/car/vali-admin-master/web/login.html";
                }else{
                    console.log(e);
                    // if(location.href.indexOf('supIndex.html')!=-1){ 
                    // }else{
                    //     location.href='./supIndex.html';
                    // }
                }
            }
        })
    }
}
getSession();

