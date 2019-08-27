<?php
class BreadService{
    
    //查找
    public function selectAll(){
        // $res=parent::table('tab_product')->select();
        $product=new BreadDao;
        return $product->_selectAll();
    }
}