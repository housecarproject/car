<?php 
class AllOrderDao extends BaseDao{
    
    //多表查询
    public function _anotherSelect(){
        $res=parent::query('SELECT 
        b.order_id,a.user_name,c.product_name,b.order_num,b.rent_days,b.order_time,b.order_overtime,b.order_state,b.return_time,
        d.timeout_days,e.finetype_name, d.totalfine_price,b.total_money
        FROM tab_user as a 
        RIGHT JOIN tab_orderform as b ON a.user_id=b.user_id 
        LEFT JOIN tab_product as c ON b.product_id=c.product_id 
        LEFT JOIN tab_fine as d ON b.fine_id=d.fine_id
        LEFT JOIN tab_finetype as e ON d.finetype_id=e.finetype_id');
        return $res;
    }

    //删除
    public function delete_($id){
        $res=parent::table('tab_orderform')->where("order_id=$id")->delete();
        return $res;
    }
}


