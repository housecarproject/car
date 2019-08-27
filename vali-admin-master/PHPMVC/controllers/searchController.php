<?php 
//豆哥
class SearchController{
     
    public function select($data){
        $list=$data['val'];
        $productService=new SearchService;
        $res=$productService->selectAll($list);
        echo json_encode($res);
        // echo '1';
    }

} 
