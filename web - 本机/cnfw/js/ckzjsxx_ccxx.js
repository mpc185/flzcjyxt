var zjsccxx = JSON.parse(window.sessionStorage.getItem("zjsccxxList"));
var yhzsxm = window.sessionStorage.getItem("yhzsxm");
// 显示
var tb=document.querySelector("tbody")
for(var i=0;i<zjsccxx.length;i++){
    var ccid = zjsccxx[i].ccid;
    var ccgs = zjsccxx[i].ccgs;
    var rngm = zjsccxx[i].rngm;
    var data="<tr><td>"+ccid+"</td><td>"+yhzsxm+"</td><td>"+ccgs+"</td><td>"+rngm+"</td><td>"+
        "<button class='b btn_xq' onclick='moreInfo("+i+")'>更多信息</button></td></tr>";
    tb.innerHTML += data;
}

function moreInfo(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./ckzjsxx_ccxxxq.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
