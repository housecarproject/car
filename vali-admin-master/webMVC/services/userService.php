<?php
// $path=dirname(dirname(__FILE__)); 
// require_once($path.'/db/db_sql.php');
class UserService{
    //查询用户
    public function select(){
      $admin=new UserDao;
      return $admin->_anotherSelect();
  }
  //添加用户
    public function add($parm){
      $user=new UserDao;
    //   $res=$this->yanzhengUser($parm['reg_input_name'],$parm['reg_input_pwd']);
    //   if($res){
    //     return '用户已存在，请登录';
    // }else{
      $data=array("user_name"=>$parm['user_name'],"user_password"=>$parm['user_password']);

      //"reg_input_pwd"=>$parm['reg_input_pwd'],"reg_input_iden"=>$parm['reg_input_iden']

      $userData=$user->_add($data);
      // var_dump($userData);
       return $userData;
      }

      //添加用户详情
      public function add_userDetail($data){
        $user=new UserDao;
        $userData=$user->_addDetail($data);
        // return $userData;
      }
      

  //验证管理员是否存在
  public function verificationUserLogin($n, $p)
  {
    $userLogin = new UserDao;
    $resUser = $userLogin->_yanzheng($n, $p);
    return $resUser;
  }
   
}

 