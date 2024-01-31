var index = window.sessionStorage.getItem("index");
var sjkxx = JSON.parse(window.sessionStorage.getItem("sjkxx"))[index];
document.getElementById("yhid").innerHTML=sjkxx.yhid;
document.getElementById("yhzsxm").innerHTML=sjkxx.yhzsxm;
document.getElementById("yhmm").innerHTML=sjkxx.yhmm;
document.getElementById("lxdh").innerHTML=sjkxx.lxdh;
document.getElementById("yhlx").innerHTML=sjkxx.yhlx;
document.getElementById("yhdz").innerHTML=sjkxx.yhdz;

function back(){
    window.location.href="./sjksj_cxjg.html";
}


function backIndex(){
    window.location.href="../xtsy/index.html"
}