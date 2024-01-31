var zzxxList = JSON.parse(window.sessionStorage.getItem("zzxxList"));
var tb=document.querySelector("tbody")
for(var i=0;i<zzxxList.length;i++){
    var zzid = zzxxList[i].zzid;
    var zznd = zzxxList[i].zznd;
    var zzsj = zzxxList[i].zzsj;
    var scsj = zzxxList[i].scsj;
    var data="<tr><td>"+zzid+"</td><td>"+zznd+"</td><td>"+zzsj+"</td><td>"+scsj+
        "</td><td><button class='b btn_xg' onclick='xg("+i+")'>修改</button>"+
        "<button class='b btn_sc' onclick='sc("+i+")'>删除</button>"+
        "<button class='b btn_xq' onclick='xq("+i+")'>详情</button></td></tr>";
    tb.innerHTML += data;
}
function xg(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./zzxxgl_xg.html";
}
function sc(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./zzxxgl_delete.html";
}  
function xq(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("xqLocation","./zzxxgl_bg_many.html")
    window.location.href="./zzxxgl_xq.html";
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}