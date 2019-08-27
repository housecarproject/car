<?php 
class BreadController{
    public function select(){
        $typeService=new BreadService;
        $res=$typeService->selectAll();
        return json_encode($res);
    }
}