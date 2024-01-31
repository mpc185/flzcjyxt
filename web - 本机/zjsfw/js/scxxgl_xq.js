var index = window.sessionStorage.getItem("index");
var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
var scxx = scxxList[index];
var scscidDom=document.getElementById("scscid");
var yhidDom = document.getElementById("yhid");
var scscndDom=document.getElementById("scscnd");
var scscsjDom=document.getElementById("scscsj");
var scscbjDom=document.getElementById("scscbj");
scscidDom.innerHTML=scxx.scscid;
yhidDom.innerHTML=scxx.yhid;
scscndDom.innerHTML=scxx.scscnd;
scscsjDom.innerHTML=scxx.scscsj;
scscbjDom.innerHTML=scxx.scscbj;


function back(){
    window.location.href="./scxxgl_bg_many.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}