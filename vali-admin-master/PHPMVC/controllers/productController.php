<?php 
//豆哥
class ProductController{
    public function UpdateType($data){ 
        var_dump($data);
        $arr=$data;
        $id=$arr['id'];
        $arrdata=[
            "product_name"=>$arr['name'],
            "product_licensenum"=>$arr['licensenum'],
            "product_person"=>$arr['person'],
            "product_type"=>$arr['typeid'],
            "product_state"=>$arr['state'],
            "product_costprice"=>$arr['costprice'],
            "product_rentalprice"=>$arr['rentalprice'],
            "product_cashpledge"=>$arr['cashpledge'],
        ];
               $productService=new ProductService;
               $res=$productService->update($id,$arrdata);
               echo json_encode($res);
    }
     
    public function select(){
        $productService=new ProductService;
        $res=$productService->selectAll();
        echo json_encode($res);
    }

    //删除
    public function delete($id_){
        $productService=new ProductService;
        $res=$productService->delete($id_);
        return $res;
    }



    //老哥哥
    //添加房车类型
    public function addlgg($data){
        $productService=new ProductService;
        $res=$productService->addlgg($data);
        return $res;
    }

    public function selectlgg(){
        $productService=new ProductService;
        $res=$productService->selectlgg();
        return json_encode($res);
    }
} 
