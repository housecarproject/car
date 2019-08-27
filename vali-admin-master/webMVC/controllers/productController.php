<?php 
class ProductController{
    //修改

    public function UpdateType($data){ 
        $arr=$data;
                //  "product_id"=>$_POST['product_id'],
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
     //查找
    public function select(){
        $productService=new ProductService;
        $res=$productService->selectAll();
        echo json_encode($res);
    }
    //查找普通型
    public function selectnormal(){
        $productService=new ProductService;
        $res=$productService->selectNormal();
        echo json_encode($res);
    }
    //查找高级型
    public function selectsuper(){
        $productService=new ProductService;
        $res=$productService->selectSuper();
        echo json_encode($res);
    }
     //查找豪华型
     public function selectluxury(){
        $productService=new ProductService;
        $res=$productService->selectLuxury();
        echo json_encode($res);
    }

    //删除
    public function delete($id_){
        $productService=new ProductService;
        $res=$productService->delete($id_);
        return $res;
    }
    //商品详情查询
    public function selectinfo(){
        $porid=$_REQUEST["pid"];
        $productService=new ProductService;
        $res=$productService->selectInfo($porid);
        echo json_encode($res);
    }



} 

// $a=new ProductController();
// $a->UpdateType();
