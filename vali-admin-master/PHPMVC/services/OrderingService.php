<?php
class OrderingService{
    //联查方法
    public function selectAnother(){
        // $res=parent::table('tab_admin')->select();
        $ordering=new OrderingDao;
        return $ordering->_anotherSelect();
    }
}