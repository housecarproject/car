<?php 
class AdminController{
    //添加管理员
    public function a_add_c(){
        // 数据验证
        $data=[
            "admin_name"=>$_POST['adminName'],
            "admin_password"=>$_POST['adminPassword'],
            "admin_type"=>$_POST['adminType'],
        ];
        // var_dump($data);
        $adminService=new AdminService;
        $res=$adminService->a_add_s($data);
        var_dump($res);
    }
    public function select(){
        $adminService=new AdminService;
        $res=$adminService->selectAll();
        echo json_encode($res);
    }
} 
