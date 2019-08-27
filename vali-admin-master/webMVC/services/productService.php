<?php
class ProductService{
    //修改
    // public function p_update_s($parm){
    //    $product=new productDao;
    //    $data=array("product_id"=>$parm['product_id'],"product_name"=>$parm['product_name'],"product_licensenum"=>$parm['product_licensenum'],"product_person"=>$parm['product_person'],"product_type"=>$parm['product_type'],"product_state"=>$parm['product_state'],"product_costprice"=>$parm['product_costprice'],"product_rentalprice"=>$parm['product_rentalprice'],"product_cashpledge"=>$parm['product_cashpledge']);
    //    $product_data=$product->_update($id,$data);
    //    return $product_data;
    //    var_dump($product_data);
    // }

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
    //查找普通型
    public function selectNormal(){
        // $res=parent::table('tab_product')->select();
        $product=new ProductDao;
        return $product->_normalSelect();
    }
    //查找高级型
    public function selectSuper(){
        // $res=parent::table('tab_product')->select();
        $product=new ProductDao;
        return $product->_superSelect();
    }
    
    //查找豪华型
    public function selectLuxury(){
        // $res=parent::table('tab_product')->select();
        $product=new ProductDao;
        return $product->_luxurySelect();
    }
    
     //查找商品详情
     public function selectInfo($porid){
        // $res=parent::table('tab_product')->select();
        $product=new ProductDao;
        return $product->_infoSelect($porid);
    }
}