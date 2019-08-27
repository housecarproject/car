<?php 
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
        $res=parent::query('select a.product_id,a.product_type,a.img_src,a.product_name,a.product_licensenum,a.product_person,c.producttype_name,a.product_state,a.product_costprice,a.product_rentalprice,a.product_cashpledge 
        from tab_producttype as c  RIGHT JOIN
        `tab_product` a  on c.producttype_id=a.product_type');
        return $res;
    }
    //普通型查找
    public function _normalSelect(){
        $res=parent::query('select a.product_id,a.img_src,a.product_name,a.product_licensenum,a.product_person,c.producttype_name,a.product_state,a.product_costprice,a.product_rentalprice,a.product_cashpledge 
        from tab_producttype as c  RIGHT JOIN
        `tab_product` a  on c.producttype_id=a.product_type where product_type=1');
        return $res;
    }
    //高级型查找
    public function _superSelect(){
        $res=parent::query('select a.product_id,a.img_src,a.product_name,a.product_licensenum,a.product_person,c.producttype_name,a.product_state,a.product_costprice,a.product_rentalprice,a.product_cashpledge 
        from tab_producttype as c  RIGHT JOIN
        `tab_product` a  on c.producttype_id=a.product_type where product_type=2');
        return $res;
    }

    //豪华型查找
    public function _luxurySelect(){
        $res=parent::query('select a.product_id,a.img_src,a.product_name,a.product_licensenum,a.product_person,c.producttype_name,a.product_state,a.product_costprice,a.product_rentalprice,a.product_cashpledge 
        from tab_producttype as c  RIGHT JOIN
        `tab_product` a  on c.producttype_id=a.product_type where product_type=3');
        return $res;
    }
    //商品详情查找
    public function _infoSelect($porid){
        $res=parent::query("select a.product_id,a.img_src,a.product_name,a.product_licensenum,a.product_person,c.producttype_name,a.product_state,a.product_costprice,a.product_rentalprice,a.product_cashpledge 
        from tab_producttype as c  RIGHT JOIN
        `tab_product` a  on c.producttype_id=a.product_type where product_id=$porid");
        return $res;
    }


}
// $s=new adminDao;
// echo json_encode($s->_selectAll());


