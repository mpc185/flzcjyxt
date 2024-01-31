
var jgcxxList = JSON.parse(window.sessionStorage.getItem("jgcxxList"));
// 显示加工厂信息
var tb = document.querySelector("tbody");
for(var i=0;i<jgcxxList.length;i++){
    var jgcid = jgcxxList[i].jgcid;
    var jgcmc = jgcxxList[i].jgcmc;
    var jgcdz = jgcxxList[i].jgcdz;
    var data="<tr><td>"+jgcid+"</td><td>"+jgcmc+"</td><td>"+jgcdz+"</td><td>"+
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
    window.sessionStorage.setItem("bgLocation","./jgcxxgl_scbg.html")
    window.location.href="./jgcxxgl_xg.html" 
}
function sc(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./jgcxxgl_scbg.html")
    window.location.href="./jgcxxgl_delete.html"
}
function xq(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./jgcxxgl_scbg.html")
    window.location.href="./jgcxxgl_xq.html"
}
