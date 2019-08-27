<?php
//启动  session 
class UserController
{
    /**
 * 获得随机字符串
 * @param $len             需要的长度
 * @param $special        是否需要特殊符号
 * @return string       返回随机字符串
 */
public static function getRandomStr($len, $special=false){
    $chars = array(
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
        "3", "4", "5", "6", "7", "8", "9"
    );

    if($special){
        $chars = array_merge($chars, array(
            "!", "@", "#", "$", "?", "|", "{", "/", ":", ";",
            "%", "^", "&", "*", "(", ")", "-", "_", "[", "]",
            "}", "<", ">", "~", "+", "=", ",", "."
        ));
    }

    $charsLen = count($chars) - 1;
    shuffle($chars);                            //打乱数组顺序
    $str = '';
    for($i=0; $i<$len; $i++){
        $str .= $chars[mt_rand(0, $charsLen)];    //随机取出一位
    }
    return $str;
}

    //用户查询
    public function select()
    {
        $user = new UserService;
        $res = $user->select();
        echo json_encode($res);
    }

    //用户添加
    public function useradd()
    {
        $name = $_POST['reg_input_name'];
        $phone = $_POST['reg_input_phone'];
        $iden = $_POST['reg_input_iden'];
        $pwd = $_POST['reg_input_pwd'];
        $address = $_POST['reg_input_address'];
        $userService = new UserService;
        // 数据验证
        //添加用户信息
        $dataUser = [
            "user_phone" => $phone,
            "user_password" => $pwd,
        ];

        //验证该用户是否存在
        $haveUser = $userService->ishaveUser($phone, $pwd);
        $res = count($haveUser) > 0 ? 1 : 0;

        if ($res == 1) {
            echo '1';
        } else {
            echo '0';
            $selectId = $userService->add($dataUser);
            //添加用户详细信息
            $dataUserDetail = [
                "user_id" => $selectId,
                "user_name" => $name,
                "iden_num" => $iden,
                "user_address" => $address,
            ];
            $resDetail = $userService->add_userDetail($dataUserDetail);
        }
    }




    //验证用户是否存  （用于getSession）
    public function yanzhengUserExit()
    {
        $sid = $_POST['_s_id'];
        $rand_str=$_POST['rand_str'];
        $str=md5(session_id().$rand_str);
        if ($str== $sid) {
            if (session::get('username')) {
                echo json_encode(array('username' => session::get('username'),'userid'=>session::get('userid')));
            } else {
                echo '失效';
            }
        } else {
            echo 'error';
        }
       
    }

    //登录时，验证用户是否存在
    public function login_()
    {
        $phone = $_POST['userLoginPhone'];
        $psd = $_POST['userLoginPassword'];
        $userLogin = new UserService;       
        $user = $userLogin->verificationUserLogin($phone, $psd);
        $getId= $user[0]['user_id'];
        $r = count($user) > 0 ? 1 : 0;
        if($r>0){
            session::set('username', $phone, 3600);
            session::set('password', $psd, 3600);
            session::set('userid', $getId, 3600);
            $rand_str=self::getRandomStr(6);
            $str=md5(session_id().$rand_str);
            echo json_encode(Array('_s_id'=>$str,'rand_str'=>$rand_str));  
        }else{
            echo '用户名或者密码错误';
        }
    }
}
