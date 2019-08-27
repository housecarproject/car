<?php 
class UserDao extends BaseDao{
    //用户查询
    public function _select(){
        $res=parent::table('tab_user')->select();
        return $res;
    }
    //用户删除
    public function _del($id){
        $res=parent::table('tab_user')->where("user_id=$id")->delete();
        return $res;
    }
    //用户添加
    public function _add($data){
        $res=parent::table('tab_user')->insert($data);
        return $res;
    }
    //用户添加修改
    public function _update($id,$data){
        $res=parent::table('tab_user')->where("user_id=$id")->update($data);
        return $res;
    }
    //用户的多表查询
    public function _anotherSelect(){
        $res=parent::query('select a.user_id,a.user_name,a.user_password,b.phone_num,b.iden_num from `tab_user` a
        left JOIN `tab_userdetailinfo` b
        on a.user_id=b.user_id');
        return $res;
    }
}


