<?php 
class EvaluateDao extends BaseDao{
    //查询
    public function _selectAll(){
        $res=parent::table('tab_evaluate')->select();
        return $res;
    }
    //删除
    public function _del($id_){
        $res=parent::table('tab_evaluate')->where("evaluate_id=".$id_)->delete();
        return $res;
    }
    //添加
    public function _add($data){
        $res=parent::table('tab_evaluate')->insert($data);
        return $res;
    }
    //修改
    public function _update($id,$data){
        $res=parent::table('tab_evaluate')->where("evaluate_id=$id")->update($data);
        return $res;
    }
    //多表查询
    // public function _anotherSelect(){
    //     $res=parent::query('select a.evaluate_id,a.user_name,a.user_password,b.phone_num,b.iden_num from `tab_user` a
    //     left JOIN `tab_userdetailinfo` b
    //     on a.evaluate_id=b.evaluate_id');
    //     return $res;
    // }
}