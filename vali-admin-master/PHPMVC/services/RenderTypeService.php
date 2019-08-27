<?php
class RenderTypeService{
    
    //查找
    public function selectAll(){
        // $res=parent::table('tab_product')->select();
        $product=new RenderTypeDao;
        return $product->_selectAll();
    }

}