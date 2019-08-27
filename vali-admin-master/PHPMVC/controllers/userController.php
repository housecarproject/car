<?php
 
class UserController{
    //用户查询
    public function select(){
        $user=new UserService;
        $res = $user->select();
        echo json_encode($res);
    }
}
