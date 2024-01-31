var ccxxList = JSON.parse(window.sessionStorage.getItem("ccxxList"));
// 显示菜场信息
var tb = document.querySelector("tbody");
for(var i=0;i<ccxxList.length;i++){
    var ccid = ccxxList[i].ccid;
    var ccgs = ccxxList[i].ccgs;
    var rngm = ccxxList[i].rngm;
    var data="<tr><td>"+ccid+"</td><td>"+ccgs+"</td><td>"+rngm+"</td><td>"+
        "<button class='b btn_xg' onclick='xg("+i+")'>修改</button>"+
        "<button class='b btn_sc' onclick='sc("+i+")'>删除</button>"+
        "<button class='b btn_xq' onclick='xq("+i+")'>详情</button></td></tr>";
    tb.innerHTML+=data;
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}
function xg(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./ccxxgl_bg_one.html")
    window.location.href="./ccxxgl_xg.html" 
}
function sc(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./ccxxgl_bg_one.html")
    window.location.href="./ccxxgl_delete.html"
}
function xq(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./ccxxgl_bg_one.html")
    window.location.href="./ccxxgl_xq.html"
}
