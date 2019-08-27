<?php
$controlName = $_REQUEST["c"];
$actionName = $_REQUEST["a"];
$adminId=$_REQUEST['id'];
$data=$_REQUEST['data_'];

/**加载配置文件等* */
function require_file()
{
    global $controlName;
    require_once('./config/db_config.php');
    require_once('./db/db_pdo.php');
    require_once('./db/db_sql.php');
    include('./controllers/'.strtolower($controlName)."Controller.php");
    include('./services/'.strtolower($controlName)."Service.php");
    include('./dao/'.strtolower($controlName)."Dao.php");
};
require_file();
if($adminId==0){
    $controllerName = ucfirst(strtolower($controlName))."Controller";
    $controller = new $controllerName();
    $controller->$actionName($data);
}else if($adminId>0){
    $controllerName = ucfirst(strtolower($controlName))."Controller";
    $controller = new $controllerName();
    $controller->$actionName($adminId);
}else if($data!=0){
    $controllerName = ucfirst(strtolower($controlName))."Controller";
    $controller = new $controllerName();
    $controller->$actionName($data);
}

