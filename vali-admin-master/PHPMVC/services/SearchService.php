<?php
//豆哥
class SearchService{
   
    //查找
    public function selectAll($data){
        // $res=parent::table('tab_product')->select();
        $product=new SearchDao;
        return $product->_anotherSelect($data);
    }

}

