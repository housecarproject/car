<?php
$controlName=$_REQUEST["c"];
$actionName=$_REQUEST["a"];
/**加载配置文件等* */
function require_file(){
    global $controlName;
    require_once('./config/db_config.php');
    require_once('./db/db_pdo.php');
    require_once('./db/db_sql.php');  
    include('./controllers/'.strtolower($controlName)."Controller.php");
    include('./services/'.strtolower($controlName)."Service.php");
    include('./dao/'.strtolower($controlName)."Dao.php");
};
require_file();
$controllerName=ucfirst(strtolower($controlName))."Controller";
$controller=new $controllerName();
echo $controller->$actionName();