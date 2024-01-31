var index = window.sessionStorage.getItem("index");
var zzxxList = JSON.parse(window.sessionStorage.getItem("zzxxList"));
var zzxx = zzxxList[index];
var zzidDom=document.getElementById("zzid");
var zzndDom=document.getElementById("zznd");
var zzsjDom=document.getElementById("zzsj");
var scsjDom=document.getElementById("scsj");
var zzgmDom=document.getElementById("zzgm");
var zzdzDom=document.getElementById("zzdz");
zzidDom.innerHTML=zzxx.zzid;
zzndDom.innerHTML=zzxx.zznd;
zzsjDom.innerHTML=zzxx.zzsj;
scsjDom.innerHTML=zzxx.scsj;
zzgmDom.innerHTML=zzxx.zzgm;
zzdzDom.innerHTML=zzxx.zzdz;

function back(){
    window.location.href=window.sessionStorage.getItem("xqLocation");
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}