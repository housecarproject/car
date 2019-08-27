<?php 
class PayFineDao extends BaseDao{
    //多表查询
    public function _anotherSelect(){
        $res=parent::query('SELECT b.fine_id,c.order_num,f.user_name,a.finetype_name,e.fine,b.timeout_days,b.loss_price,b.totalfine_price
        FROM  tab_finetype AS a RIGHT JOIN  tab_fine AS b ON a.finetype_id=b.finetype_id
       LEFT JOIN tab_orderform AS c ON b.fine_id=c.fine_id
       LEFT JOIN tab_user AS f ON c.user_id=f.user_id
       LEFT JOIN tab_product AS d ON c.product_id=d.product_id
       LEFT JOIN tab_producttype AS e ON d.product_type=e.producttype_id WHERE c.order_state=3');
        return $res;
    }
}
// $s=new adminDao;
// echo json_encode($s->_selectAll());


