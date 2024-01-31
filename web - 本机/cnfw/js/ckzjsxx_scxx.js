var zjsscxx = JSON.parse(window.sessionStorage.getItem("zjsscxxList"));
// 显示
var tb=document.querySelector("tbody")
for(var i=0;i<zjsscxx.length;i++){
    var scscid = zjsscxx[i].scscid;
    var scscnd = zjsscxx[i].scscnd;
    var scscbj = zjsscxx[i].scscbj;
    var data="<tr><td>"+scscid+"</td><td>"+scscnd+"</td><td>生菜头</td><td>"+scscbj+"</td><td>"+
        "<button class='b btn_xq' onclick='moreInfo("+i+")'>更多信息</button></td></tr>";
    tb.innerHTML += data;
}

function moreInfo(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./ckzjsxx_scxxxq.html";
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}