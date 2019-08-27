<?php 
$files=$_FILES; 

$result_arr=[];

//获取唯一序列号
function generateNum() {
    //strtoupper转换成全大写的
    $charid = strtoupper(md5(uniqid(mt_rand(), true)));
    $uuid = substr($charid, 0, 8).substr($charid, 8, 4).substr($charid,12, 4).substr($charid,16, 4).substr($charid,20,12);
    return $uuid;
}
// var_dump($file_tmpname);
foreach($files as $k=>$v){
    global $result_arr;
    $file=$v;
    $file_name=$file['name'];
    // $files_name=$v['name'];
    $file_type=$file['type'];
    $file_tmpname=$file['tmp_name'];
    $file_error=$file['error'];
    $file_size=$file['size'];
    $f_type='';
    $file_path='';
    if($file_type=="image/jpeg"){
        $f_type=".jpeg"; 
       
    }
    else if($file_type=="image/jpg"){
        $f_type=".jpg";  
    }
    else if($file_type=="image/png"){
        $f_type=".png";  
    }
    else if($file_type=="image/gif"){
        $f_type=".gif";  
    }
    $file_path="/uploads/goods/".generateNum().$f_type ;




    $res=move_uploaded_file($file_tmpname,'./..'.$file_path);
    if($res){
        array_push($result_arr,$file_path);
    }
}
echo json_encode($result_arr);