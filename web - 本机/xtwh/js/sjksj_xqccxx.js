var index = window.sessionStorage.getItem("index");
var sjkxx = JSON.parse(window.sessionStorage.getItem("sjkxx"))[index];

document.getElementById("ccid").innerHTML=sjkxx.ccid;
document.getElementById("yhid").innerHTML=sjkxx.yhid;
document.getElementById("ccgs").innerHTML=sjkxx.ccgs;
document.getElementById("rngm").innerHTML=sjkxx.rngm;
document.getElementById("ccdz").innerHTML=sjkxx.ccdz;
document.getElementById("img1").src=sjkxx.img1;
document.getElementById("img2").src=sjkxx.img2;
document.getElementById("img3").src=sjkxx.img3;


function back(){
    window.location.href="./sjksj_cxjg.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}

