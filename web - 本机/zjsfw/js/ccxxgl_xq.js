var index = window.sessionStorage.getItem("index");
var ccxxList = JSON.parse(window.sessionStorage.getItem("ccxxList"));

// 显示
document.getElementById("ccid").innerHTML=ccxxList[index].ccid;
document.getElementById("yhid").innerHTML=ccxxList[index].yhid;
document.getElementById("ccgs").innerHTML=ccxxList[index].ccgs;
document.getElementById("rngm").innerHTML=ccxxList[index].rngm;
document.getElementById("ccdz").innerHTML=ccxxList[index].ccdz;
document.getElementById("img1").src=ccxxList[index].img1;
document.getElementById("img2").src=ccxxList[index].img2;
document.getElementById("img3").src=ccxxList[index].img3;


function backIndex(){
    window.location.href="../xtsy/index.html"
}
function back(){
    window.location.href = window.sessionStorage.getItem("bgLocation");
}