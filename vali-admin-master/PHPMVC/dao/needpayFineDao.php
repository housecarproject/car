<?php 
class needpayFineDao extends BaseDao{
    //查询
    // public function _selectAll(){
    //     $res=parent::table('tab_admin')->select();
    //     return $res;
    // }
    // //删除
    // public function _del($id){
    //     $res=parent::table('tab_admin')->where("user_id=$id")->delete();
    //     return $res;
    // }
    // //添加
    // public function _add($data){
    //     $res=parent::table('tab_admin')->insert($data);
    //     return $res;
    // }
    // //修改
    // public function _update($id,$data){
    //     $res=parent::table('tab_user')->where("user_id=$id")->update($data);
    //     return $res;
    // }
    //多表查询
    public function _anotherSelect(){
        $res=parent::query('SELECT 
        b.order_id,a.user_name,c.product_name,b.order_num,b.rent_days,b.order_time,b.order_overtime,b.order_state,b.return_time,d.timeout_days,d.totalfine_price,b.total_money
        FROM  tab_user as a LEFT JOIN  tab_orderform as b ON a.user_id=b.user_id 
       LEFT JOIN tab_product as c ON b.product_id=c.product_id 
        LEFT JOIN tab_fine as d ON b.fine_id=d.fine_id  WHERE b.order_state=2');
        return $res;
    }
}
// $s=new adminDao;
// echo json_encode($s->_selectAll());


