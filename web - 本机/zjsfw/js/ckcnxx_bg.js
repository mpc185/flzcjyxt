var cnyhxxList = JSON.parse(window.sessionStorage.getItem("cnyhxxList"));
// 显示
var tb=document.querySelector("tbody")
for(var i=0;i<cnyhxxList.length;i++){
    var yhid = cnyhxxList[i].yhid;
    var yhzsxm = cnyhxxList[i].yhzsxm;
    var yhlx = cnyhxxList[i].yhlx;
    var lxdh = cnyhxxList[i].lxdh;
    var data="<tr><td>"+yhid+"</td><td>"+yhzsxm+"</td><td>"+yhlx+"</td><td>"+lxdh+"</td><td>"+
        "<button class='b btn_xq' onclick='moreInfo("+i+")'>更多信息</button></td></tr>";
    tb.innerHTML += data;
}

function moreInfo(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./ckcnxx_xq.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}