var index = window.sessionStorage.getItem("index");
var sjkxx = JSON.parse(window.sessionStorage.getItem("sjkxx"))[index];
document.getElementById("zzid").innerHTML=sjkxx.zzid;
document.getElementById("zznd").innerHTML=sjkxx.zznd;
document.getElementById("zzsj").innerHTML=sjkxx.zzsj;
document.getElementById("zzgm").innerHTML=sjkxx.zzgm;
document.getElementById("scsj").innerHTML=sjkxx.scsj;
document.getElementById("zzdz").innerHTML=sjkxx.zzdz;

function back(){
    window.location.href="./sjksj_cxjg.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}