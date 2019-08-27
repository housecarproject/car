<?php 
class PayFineController{
    public function selectAnother(){
        $payService=new PayFineService;
        $res=$payService->selectAnother();
        echo json_encode($res);
    }
} 
