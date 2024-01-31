var index = window.sessionStorage.getItem("index");
var sjkxx = JSON.parse(window.sessionStorage.getItem("sjkxx"))[index];
document.getElementById("scscid").innerHTML=sjkxx.scscid;
document.getElementById("yhid").innerHTML=sjkxx.yhid;
document.getElementById("scscnd").innerHTML=sjkxx.scscnd;
document.getElementById("scscsj").innerHTML=sjkxx.scscsj;
document.getElementById("scscbj").innerHTML=sjkxx.scscbj;

function back(){
    window.location.href="./sjksj_cxjg.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}