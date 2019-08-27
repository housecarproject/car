<?php 
class ProducttypeDao extends BaseDao{
    //查询
    public function _select(){
        $res=parent::table('tab_producttype')->select();
        return $res;
    }
    //删除
    public function _del($id_){
        $res=parent::table('tab_producttype')->where("producttype_id=$id_")->delete();
        return $res;
    }
    //添加
    public function _add($data){
        $res=parent::table('tab_producttype')->insert($data);
        return $res;
    }
    //修改
    public function _update($id_,$data){
        $res=parent::table('tab_producttype')->where("producttype_id=$id_")->update($data);
        return $res;
    }
    //多表查询
    public function _anotherSelect(){
        $res=parent::query('select a.user_id,a.user_name,a.user_password,b.phone_num,b.iden_num from `tab_user` a
        left JOIN `tab_userdetailinfo` b
        on a.user_id=b.user_id');
        return $res;
    }
}


