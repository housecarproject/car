<?php
// $path=dirname(dirname(__FILE__)); 
// require_once($path.'/db/db_sql.php');
class UserService
{
  //查询用户
  public function select()
  {
    $admin = new UserDao;
    return $admin->_anotherSelect();
  }

  //添加用户
  public function add($parm)
  {
    $user = new UserDao;
    $data = array("user_phone" => $parm['user_phone'], "user_password" => $parm['user_password']);
    $userData = $user->_add($data);
    // return $userData;
  }

  //添加用户详情
  public function add_userDetail($data)
  {
    $user = new UserDao;
    $userData = $user->_addDetail($data);
    // return $userData;
  }

  //用户注册时候，判断该用户是否存在
  public function ishaveUser($phone,$psd){
    $user = new UserDao;
    $userData = $user->ishaveUser($phone,$psd);
    return $userData;
  }


  //验证用户是否存在
  public function verificationUserLogin($phone, $psd)
  {
    $userLogin = new UserDao;
    $resUser = $userLogin->_yanzheng($phone, $psd);
    return $resUser;
    
   
  }
  
  //获取用户id的查询方法
  public function selectID($phone)
  {
    $user = new UserDao;
    $getuserid=$user->_selectID($phone);
    return $getuserid;
  }
}
