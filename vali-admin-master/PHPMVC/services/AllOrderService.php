<?php
class AllOrderService{
    //联查方法
    public function selectAnother(){
        // $res=parent::table('tab_admin')->select();
        $allorder=new AllOrderDao;
        return $allorder->_anotherSelect();
    }
    public function delete($id){
        // $res=parent::table('tab_admin')->select();
        $allorder=new AllOrderDao;
        return $allorder->delete_($id);
    }
}