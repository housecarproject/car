<?php 
class adminDao extends BaseDao{


    //查询
    public function _select(){
        $res=parent::table('tab_admin')->select();
        return $res;
    }


    //删除
    public function _del($adminId){
        $res=parent::table('tab_admin')->where("admin_id=$adminId")->delete();
        return $res;
    }


    //添加
    public function _add($data){
        $res=parent::table('tab_admin')->insert($data);
        return $res;
    }


    //修改
    public function _update($id,$data){
        $res=parent::table('tab_admin')->where("user_id=$id")->update($data);
        return $res;
    }


    //多表查询
    public function _anotherSelect(){
        $res=parent::query('select a.user_id,a.user_name,a.user_password,b.phone_num,b.iden_num from `tab_user` a
        left JOIN `tab_userdetailinfo` b
        on a.user_id=b.user_id');
        return $res;
    }

    
    //验证管理员登录收的信息
    public function _yanzheng($phone,$psd){
        $res=parent::query("select * from `tab_admin` where admin_phone=$phone AND admin_password='$psd'");
        // var_dump($res);
        return $res;
    }
}


