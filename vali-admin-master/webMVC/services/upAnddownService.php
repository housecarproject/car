<?php
class ChangeStateService{
    
    //查找
    public function selectAll(){
        // $res=parent::table('tab_product')->select();
        $product=new ChangeStateDao;
        return $product->_selectAll();
    }
    
    //修改
    public function update($id,$data){
        $product=new ChangeStateDao;
        return $product->_update($id,$data);
    }

}