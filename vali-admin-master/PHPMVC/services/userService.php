<?php
class UserService{
    //查询用户
    public function select(){
      $admin=new UserDao;
      return $admin->_anotherSelect();
  }
}

 