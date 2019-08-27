<?php
class UserService{
    //查询用户
    public function select(){
      $user=new UserDao;
      return $user->_select();
  }
  //多表查询
  public function anotherSelect(){
    $user=new UserDao;
    return $user->_anotherSelect();
  }
}

 