var index = window.sessionStorage.getItem("index");
var sjkxx = JSON.parse(window.sessionStorage.getItem("sjkxx"))[index];
document.getElementById("jgcid").innerHTML=sjkxx.jgcid;
document.getElementById("yhid").innerHTML=sjkxx.yhid;
document.getElementById("jgcmc").innerHTML=sjkxx.jgcmc;
document.getElementById("jgcdz").innerHTML=sjkxx.jgcdz;
document.getElementById("jgcjj").innerHTML=sjkxx.jgcjj;

function back(){
    window.location.href="./sjksj_cxjg.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}