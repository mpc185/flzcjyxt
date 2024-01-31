var index = window.sessionStorage.getItem("index");
var sjkxx = JSON.parse(window.sessionStorage.getItem("sjkxx"))[index];
document.getElementById("yzcscid").innerHTML=sjkxx.yzcscid;
document.getElementById("yhid").innerHTML=sjkxx.yhid;
document.getElementById("yzcscnd").innerHTML=sjkxx.yzcscnd;
document.getElementById("yzcscsj").innerHTML=sjkxx.yzcscsj;
document.getElementById("yzcscbj").innerHTML=sjkxx.yzcscbj;

function back(){
    window.location.href="./sjksj_cxjg.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}