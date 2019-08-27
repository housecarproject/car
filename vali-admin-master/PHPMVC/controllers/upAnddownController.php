<?php 
class UpAnddownController{
    public function select(){
        $typeService=new ChangeStateService;
        $res=$typeService->selectAll();
        echo json_encode($res);
    }


        public function updateState($data){ 
            var_dump($data);
            $arr=$data;
            $id=$arr['id'];
            $arrdata=[
                "product_upAnddown"=>$arr['upAnddown']
            ];
                   $productService=new UpAnddownService;
                   $res=$productService->update($id,$arrdata);
                   echo json_encode($res);
        }

} 
