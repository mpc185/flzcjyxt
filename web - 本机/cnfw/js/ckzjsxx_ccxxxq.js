var index = window.sessionStorage.getItem("index");
var zjsccxx = JSON.parse(window.sessionStorage.getItem("zjsccxxList"))[index];
var yhzsxm = window.sessionStorage.getItem("yhzsxm");

document.getElementById("ccid").innerHTML=zjsccxx.ccid;
document.getElementById("yhzsxm").innerHTML=yhzsxm;
document.getElementById("ccgs").innerHTML=zjsccxx.ccgs;
document.getElementById("rngm").innerHTML=zjsccxx.rngm;
document.getElementById("ccdz").innerHTML=zjsccxx.ccdz;
document.getElementById("img1").src=zjsccxx.img1;
document.getElementById("img2").src=zjsccxx.img2;
document.getElementById("img3").src=zjsccxx.img3;


function back(){
    window.location.href="./ckzjsxx_ccxx.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}

