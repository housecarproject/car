<?php 
class ProducttypeController{
    //添加房车类型
    public function add(){
        // 数据验证
        $data=[
            "limo_id"=>$_POST['limo_id'],
            "producttype_name"=>$_POST['producttype_name']
        ];
        $producttypeService=new ProducttypeService;
        $res=$producttypeService->add($data);
        return $res;
    }
    //删除房车类型
    public function delete($id_){
        // 数据验证  
        $producttypeService=new ProducttypeService;
        $res=$producttypeService->delete($id_);
        return $res;
    }
    //修改房车类型
    public function updata($id_){
        // 数据验证  
        $data=[
            "producttype_name"=>$_POST['producttype_name']
        ];
        print_r($data);
        $producttypeService=new ProducttypeService;
        $res=$producttypeService->updata($id_,$data);
        // print_r(json_encode($res));
    }

    public function select(){
        $producttypeService=new ProducttypeService;
        $res=$producttypeService->select();
        echo json_encode($res);
    }
} 