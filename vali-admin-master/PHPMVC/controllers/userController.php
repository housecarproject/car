<?php

$path=dirname(dirname(__FILE__)); 
include_once($path.'/services/userService.php');
class UserController{
    //添加
    public function register(){
        // 数据验证
        $data=["user_name"=>$_GET['username'],
        "pass_word"=>$_GET['password'],
        "phone_num"=>$_GET['phonenum'],
        "qq"=>$_GET['qq']
        ];
        $userService=new userService;
        $res=$userService->add($data);
       echo json_encode($res);
    }

   
}

// $action=$_POST['action'];
// $userCon=new UserController;
// if($action=='select'){
//     $userCon->select();
// }