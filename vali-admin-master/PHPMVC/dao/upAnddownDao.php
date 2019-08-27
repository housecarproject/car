<?php 
class UpAnddownDao extends BaseDao{
    //查询
    public function _selectAll(){
        $res=parent::table('tab_product')->select();
        return $res;
    }

    //修改
    public function _update($id,$data){
        $res=parent::table('tab_product')->where("product_id=$id")->update($data);
        return $res;
    }
}

// $s=new RenderTypeDao;
// echo json_encode($s->_selectAll());


