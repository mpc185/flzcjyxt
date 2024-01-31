var index = window.sessionStorage.getItem("index");
var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
var scxx = scxxList[index];
var scidDom=document.getElementById("yzcscid");
var yhidDom = document.getElementById("yhid");
var scndDom=document.getElementById("yzcscnd");
var scsjDom=document.getElementById("yzcscsj");
var scbjDom=document.getElementById("yzcscbj");
scidDom.innerHTML=scxx.yzcscid;
yhidDom.innerHTML=scxx.yhid;
scndDom.innerHTML=scxx.yzcscnd;
scsjDom.innerHTML=scxx.yzcscsj;
scbjDom.innerHTML=scxx.yzcscbj;


function back(){
    window.location.href="./scxxgl_bg_many.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}