<?php
class PayFineService{


    //联查方法
    public function selectAnother(){
        // $res=parent::table('tab_admin')->select();
        $pay=new PayFineDao;
        return $pay->_anotherSelect();
    }
}