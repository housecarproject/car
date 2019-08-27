<?php
class Session{  
      
        /** 
         * 设置session 
         * @param String $name   session name 
         * @param Mixed  $data   session data 
         * @param Int    $expire 超时时间(秒) 
         */   
       
        public static function set($name, $data, $expire=600){  
            
            $session_data = array();  
            $session_data['data'] = $data;  
            $session_data['expire'] = time()+$expire;  
            $_SESSION[$name] = $session_data;  
        }  
      
        /** 
         * 读取session 
         * @param  String $name  session name 
         * @return Mixed 
         */  
        public static function get($name=""){  
            // print_r($_SESSION);
            // echo '<hr>';
            if($name!==""){
                if(isset($_SESSION[$name])){  
                    if($_SESSION[$name]['expire']>time()){ 
                            return $_SESSION[$name]['data'];    
                    }else{  
                        self::clear($name);  
                    }  
                }
                return false;
                
            }else{
                $arr=[];
               
                foreach($_SESSION as $k=>$v){ 
                    if($v['expire']>time()){ 
                        $arr[$k]=$v['data'];
                        // array_push($arr,$v['data']);  
                    }else{  
                        self::clear($k);  
                    }  
                }
                return $arr;
            }
           
            
            // return false;  
        }  
      
        /** 
         * 清除session 
         * @param  String  $name  session name 
         */  
        private static function clear($name){  
            
            unset($_SESSION[$name]);  
        }  
      
    }  
    session_id('7d7c77e5cb4b1b9ecb14e7d56918f298');
    session_start();  
    var_dump(session::get());
    // var_dump(session::get('password'));
    echo '<hr>';
    var_dump(session::get('username'));
    // var_dump(session::get());
    // var_dump( session::get('username')); // 已过期  