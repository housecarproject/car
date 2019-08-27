<?php 
//豆哥
class ProductDao extends BaseDao{
    //查询
    public function _selectAll(){
        $res=parent::table('tab_product')->select();
        return $res;
    }
    //删除
    public function _del($id_){
        $res=parent::table('tab_product')->where("product_id=$id_")->delete();
        return $res;
    }
    // //添加
    // public function _add($data){
    //     $res=parent::table('tab_product')->insert($data);
    //     return $res;
    // }
    //修改
    
    public function _update($id,$data){
        $res=parent::table('tab_product')->where("product_id=$id")->update($data);
        return $res;
    }

    //多表查询
    public function _anotherSelect(){
        $res=parent::query('select a.product_id,a.img_src,a.product_name,a.product_licensenum,a.product_person,c.producttype_name,a.product_upAnddown,a.product_state,a.product_costprice,a.product_rentalprice,a.product_cashpledge 
        from tab_producttype as c  RIGHT JOIN
        `tab_product` a  on c.producttype_id=a.product_type');
        return $res;
    }


    //老哥哥
      //查询
      public function _selectlgg(){
        $res=parent::table('tab_product')->select();
        return $res;
    }
    public function _addlgg($data){
        // var_dump($data);
        $res=parent::table('tab_product')->insert($data);
        return $res;
    }

    //多表查询
    public function _anotherSelectlgg(){
        $res=parent::query('select a.user_id,a.user_name,a.user_password,b.phone_num,b.iden_num from `tab_user` a
        left JOIN `tab_userdetailinfo` b
        on a.user_id=b.user_id');
        return $res;
    }
}



