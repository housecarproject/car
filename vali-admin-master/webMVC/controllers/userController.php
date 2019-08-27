<?php
class UserController{
    //用户查询
    public function select(){
        $user=new UserService;
        $res = $user->select();
        echo json_encode($res);
    }

    //用户添加
    public function useradd(){
        $name=$_POST['reg_input_name'];
        $phone=$_POST['reg_input_phone'];
        $iden=$_POST['reg_input_iden'];
        $pwd=$_POST['reg_input_pwd'];
        $userService=new UserService;
         // 数据验证
         $dataUser=[
            "user_name"=>$name,
            "user_password"=>$pwd,
        ];
        $selectId=$res=$userService->add($dataUser);
        $dataUserDetail=[
            "user_id"=>$selectId,
            "phone_num"=>$phone,
            "iden_num"=>$iden,
        ];
        // var_dump($dataUserDetail);
        $resDetail=$userService->add_userDetail($dataUserDetail);
        
        // var_dump($resDetail);
    }

     //登录时，验证用户是否存在
     public function yanzhengUserExit(){
        $n=$_POST['userLoginName'];
        $p=$_POST['userLoginPassword'];
        // var_dump($n,$p);
        $userLogin=new UserService;
        $user=$userLogin->verificationUserLogin($n,$p);
        echo json_decode($user);
    }  
}
