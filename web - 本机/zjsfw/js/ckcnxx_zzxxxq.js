var index = window.sessionStorage.getItem("index");
var cnzzxx = JSON.parse(window.sessionStorage.getItem("cnzzxxList"))[index];

document.getElementById("zzid").innerHTML=cnzzxx.zzid;
document.getElementById("zznd").innerHTML=cnzzxx.zznd;
document.getElementById("zzsj").innerHTML=cnzzxx.zzsj;
document.getElementById("zzgm").innerHTML=cnzzxx.zzgm;
document.getElementById("scsj").innerHTML=cnzzxx.scsj ;
document.getElementById("zzdz").innerHTML=cnzzxx.zzdz;


function back(){
    window.location.href="./ckcnxx_zzxx.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}

