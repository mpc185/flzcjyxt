var jgcxxList = JSON.parse(window.sessionStorage.getItem("jgcxxList"));
// 显示
var tb=document.querySelector("tbody")
for(var i=0;i<jgcxxList.length;i++){
    var jgcid = jgcxxList[i].jgcid;
    var jgcmc = jgcxxList[i].jgcmc;
    var jgcdz = jgcxxList[i].jgcdz;
    var data="<tr><td>"+jgcid+"</td><td>"+jgcmc+"</td><td>"+jgcdz+"</td><td>"+
        "<button class='b btn_xq' onclick='moreInfo("+i+")'>更多信息</button></td></tr>";
    tb.innerHTML += data;
}

function moreInfo(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./ckjgcxx_jgcyhxxxq.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}