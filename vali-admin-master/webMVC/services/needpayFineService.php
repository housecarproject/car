<?php
class needpayFineService{
    // public function a_add_s($parm){
    //    $admin=new adminDao;
    //    $data=array("admin_name"=>$parm['admin_name'],"admin_password"=>$parm['admin_password'],"admin_type"=>$parm['admin_type']);
    //    $admin_data=$admin->_add($data);
    //    return $admin_data;
    //    var_dump($admin_data);
    // }
    // public function selectAll(){
    //     // $res=parent::table('tab_admin')->select();
    //     $admin=new adminDao;
    //     return $admin->_selectAll();
    // }

    //联查方法
    public function selectAnother(){
        // $res=parent::table('tab_admin')->select();
        $pay=new needpayFineDao;
        return $pay->_anotherSelect();
    }
}