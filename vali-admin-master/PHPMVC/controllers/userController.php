<?php
 
class UserController{
    //用户查询
    public function select(){
        $user=new UserService;
        $res = $user->select();
        echo json_encode($res);
    }
    //多表查询
    public function anotherSelect(){
        $user=new UserService;
        $res= $user->anotherSelect();
        echo json_encode($res);
    }
}
