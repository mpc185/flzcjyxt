var cnzzxxList = JSON.parse(window.sessionStorage.getItem("cnzzxxList"));
// 显示
var tb=document.querySelector("tbody")
for(var i=0;i<cnzzxxList.length;i++){
    var zzid = cnzzxxList[i].zzid;
    var zznd = cnzzxxList[i].zznd;
    var zzsj = cnzzxxList[i].zzsj;
    var scsj = cnzzxxList[i].scsj
    var data="<tr><td>"+zzid+"</td><td>"+zznd+"</td><td>"+zzsj+"</td><td>"+scsj+"</td><td>"+
        "<button class='b btn_xq' onclick='moreInfo("+i+")'>更多信息</button></td></tr>";
    tb.innerHTML += data;
}

function moreInfo(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./ckcnxx_zzxxxq.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
