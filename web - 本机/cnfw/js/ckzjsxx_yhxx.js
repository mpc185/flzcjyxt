var zjsyhxx = JSON.parse(window.sessionStorage.getItem("zjsyhxxList"));
// 显示
var tb=document.querySelector("tbody")
for(var i=0;i<zjsyhxx.length;i++){
    var yhid = zjsyhxx[i].yhid;
    var yhzsxm = zjsyhxx[i].yhzsxm;
    var yhlx = zjsyhxx[i].yhlx;
    var lxdh = zjsyhxx[i].lxdh;
    var data="<tr><td>"+yhid+"</td><td>"+yhzsxm+"</td><td>"+yhlx+"</td><td>"+lxdh+"</td><td>"+
        "<button class='b btn_xq' onclick='moreInfo("+i+")'>更多信息</button></td></tr>";
    tb.innerHTML += data;
}

function moreInfo(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./ckzjsxx_yhxxxq.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}