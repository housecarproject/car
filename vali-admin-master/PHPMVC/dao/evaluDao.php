<?php
$path=dirname(dirname(__FILE__));
// require_once($path.'/db/db_sql.php');
class evaluDao extends BaseDao{
    //查询
    public function _selectAll(){
        $res=parent::table('tab_evaluate')->select();
        return $res;
    }
    //删除
    public function _del($id){
        $res=parent::table('tab_evaluate')->where("evaluate_id=$id")->delete();
        return $res;
    }
    //添加
    public function _add($data){
        $res=parent::table('tab_evaluate')->insert($data);
        return $res;
    }
    //修改
    public function _update($id,$data){
        $res=parent::table('tab_evaluate')->where("user_id=$id")->update($data);
        return $res;
    }
    //多表查询
    // public function _anotherSelect(){
    //     $res=parent::query('select a.user_id,a.user_name,a.user_password,b.phone_num,b.iden_num from `tab_evaluate` a
    //     left JOIN `tab_product` b
    //     on a.product_id=b.product_id');
    //     return $res;
    // }
}
$s=new evaluDao;
echo json_encode($s->_selectAll());
// echo json_encode($s->_del());