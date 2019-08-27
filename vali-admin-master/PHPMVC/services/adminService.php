<?php
class AdminService{
    //管理员添加
    public function add($parm){
       $res=$this->verification($parm['admin_phone']);
       if($res){
           return '管理员已存在';
       }else{
        $admin=new adminDao;
        $data=array("admin_phone"=>$parm['admin_phone'],"admin_name"=>$parm['admin_name'],"admin_password"=>$parm['admin_password'],"admin_type"=>$parm['admin_type']);
        $admin_data=$admin->_add($data);
        return $admin_data;
       }    
    }


    //管理员查询
    public function select(){
        $admin=new adminDao;
        return $admin->_select();
    }


    //删除管理员
    public function del($adminId){
        $admin=new adminDao;
        return $admin->_del($adminId);
    }


     // 验证
    public function verification($adminphone){
        $admin=new adminDao;
        $resPhone=$admin->table('tab_admin')->where("admin_phone=$adminphone")->select();
        $phoneFlag = count($resPhone)>0?true:false;
        return $phoneFlag;
    }


    //验证管理员是否存在
    public function haveAdmin($phone,$psd){
        $adminLogin=new adminDao;
        $resAdmin=$adminLogin->_yanzheng($phone,$psd);
        return $resAdmin;
    }
}