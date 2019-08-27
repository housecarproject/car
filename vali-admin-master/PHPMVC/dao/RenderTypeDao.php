<?php 
class RenderTypeDao extends BaseDao{
    //查询
    public function _selectAll(){
        $res=parent::table('tab_producttype')->select();
        return $res;
    }
}

// $s=new RenderTypeDao;
// echo json_encode($s->_selectAll());


