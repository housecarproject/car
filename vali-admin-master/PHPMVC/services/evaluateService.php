<?php
class EvaluateService{
    // public function a_add_s($parm){
    //    $admin=new evaluateDao;
    //    $data=array("admin_name"=>$parm['admin_name'],"admin_password"=>$parm['admin_password'],"admin_type"=>$parm['admin_type']);
    //    $admin_data=$admin->_add($data);
    //    return $admin_data;
    //    var_dump($admin_data);
    // }
    public function selectAll(){
        // $res=parent::table('tab_admin')->select();
        $evaluate=new EvaluateDao;
        return $evaluate->_selectAll();
    }
    public function _delete($id_){
        $evaluate=new EvaluateDao;
        $evaluatedata=$evaluate->_del($id_);
        return $evaluatedata;
    }
}