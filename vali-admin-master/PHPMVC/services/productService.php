<?php
//豆哥
class ProductService{
    //修改
    public function update($id,$data){
        $product=new ProductDao;
        return $product->_update($id,$data);
    }
    //查找
    public function selectAll(){
        // $res=parent::table('tab_product')->select();
        $product=new ProductDao;
        return $product->_anotherSelect();
    }
    //删除
    public function delete($id_){
        $product=new ProductDao;
        $product_data=$product->_del($id_);
        return $product_data;
    }

    //老哥哥
     //添加
     public function addlgg($data){
        $product=new ProductDao;
        $product_data=$product->_addlgg($data);
        
        return $product_data;
     //    var_dump($producttype_data);
     }
 
     public function selectlgg(){
         $product=new ProductDao;
         return $product->_selectlgg();
     }
}

