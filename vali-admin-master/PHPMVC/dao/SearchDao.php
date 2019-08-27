<?php 
//豆哥
class SearchDao extends BaseDao{
    //查询
    // public function _selectAll(){
    //     $res=parent::table('tab_product')->select();
    //     return $res;
    // }

    //多表查询
    public function _anotherSelect($data){
        $res=parent::query("SELECT * FROM `tab_product` WHERE product_name LIKE '%$data%'");
        return $res;
    }

}