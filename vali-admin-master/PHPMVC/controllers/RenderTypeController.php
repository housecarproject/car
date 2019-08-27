<?php 
class RenderTypeController{
    public function select(){
        $typeService=new RenderTypeService;
        $res=$typeService->selectAll();
        echo json_encode($res);
    }

} 
