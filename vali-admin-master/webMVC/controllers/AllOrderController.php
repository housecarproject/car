<?php 
class AllOrderController{
    public function selectAnother(){
        $aorderService=new AllOrderService;
        $res=$aorderService->selectAnother();
        echo json_encode($res);
    }

    public function delete($id){
        $aorderService=new AllOrderService;
        $res=$aorderService->delete($id);
        echo json_encode($res);
    }
} 
