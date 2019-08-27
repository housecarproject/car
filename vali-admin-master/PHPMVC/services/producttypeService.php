<?php
class ProducttypeService{
    //添加
    public function add($parm){
       $producttype=new producttypeDao;
       $data=array("limo_id"=>$parm['limo_id'],"producttype_name"=>$parm['producttype_name']);
       $producttype_data=$producttype->_add($data);
       return $producttype_data;
    //    var_dump($producttype_data);
    }
    //删除
    public function delete($id_){
        $producttype=new ProducttypeDao;
        $producttype_data=$producttype->_del($id_);
        return $producttype_data;
     }
     //修改
    public function updata($id_,$parm){
        $producttype=new ProducttypeDao;
        $data=array("producttype_name"=>$parm['producttype_name']);
        $producttype_data=$producttype->_update($id_,$parm);
        return $producttype_data;
     }

    public function select(){
        $producttype=new producttypeDao;
        return $producttype->_select();
    }
}