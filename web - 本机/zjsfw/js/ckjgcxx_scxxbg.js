var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
// 显示
var tb=document.querySelector("tbody")
for(var i=0;i<scxxList.length;i++){
    var scid = scxxList[i].yzcscid;
    var scnd = scxxList[i].yzcscnd;
    var scsj = scxxList[i].yzcscsj;
    var scbj = scxxList[i].yzcscbj
    var data="<tr><td>"+scid+"</td><td>"+scnd+"</td><td>"+scsj+"</td><td>"+scbj+"</td><td>"+
        "<button class='b btn_xq' onclick='moreInfo("+i+")'>更多信息</button></td></tr>";
    tb.innerHTML += data;
}

function moreInfo(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./ckjgcxx_scxxxq.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
