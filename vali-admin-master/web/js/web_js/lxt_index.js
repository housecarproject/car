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

var usn=get('user');
console.log(usn);
//如果用户登陆进去  登录注册隐藏    
if(usn!=undefined){
    $(".reg_login").hide();  
}else if(usn==undefined){
    $(".person_center").hide(); 
    $(".reg_login").show();   
}
