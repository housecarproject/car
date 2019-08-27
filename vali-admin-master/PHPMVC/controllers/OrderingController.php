<?php 
class OrderingController{
    public function selectAnother(){
        $orderingService=new OrderingService;
        $res=$orderingService->selectAnother();
        echo json_encode($res);
    }
} 
