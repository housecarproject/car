<?php 
class AdminController{

    //添加管理员
    public function add(){
        $name=$_POST['adminName'];
        $pw=$_POST['adminPassword'];
        $phone=$_POST['adminPhone'];
        $adminService=new AdminService;
         // 数据验证
         $data=[
            "admin_name"=>$name,
            "admin_password"=>$pw,
            "admin_phone"=>$phone,
            "admin_type"=>$_POST['adminType'],
        ];
        $res=$adminService->add($data);
        return $res;
    }
    //管理员查询
    public function select(){
        $adminService=new AdminService;
        $res=$adminService->select();
        echo json_encode($res);
    }
    //删除管理员
    public function del($adminId){
        $adminService=new AdminService;
        $res=$adminService->del($adminId);
        return $res;
    }
    //登录时，验证管理员是否存在
    public function verificationAdminController(){
        $p=$_POST['loginAdminPhone'];
        $w=$_POST['loginAdminPassword'];
        $adminLogin=new AdminService;
        $admin=$adminLogin->verificationAdminLogin($p,$w);
        return $admin;
    }  
    //取到用户人数
    function getUserNum(){
        

    }

} 
