<?php
class EvaluateController{
    public function select(){
        $evaluateService=new EvaluateService;
        $res=$evaluateService->selectAll();
        echo json_encode($res);
    }
    public function deletec($id_){
        $evaluateService=new EvaluateService;
        $res=$evaluateService->_delete($id_);
        return $res;
    }
}