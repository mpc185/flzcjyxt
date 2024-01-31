var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
var tb=document.querySelector("tbody")
for(var i=0;i<scxxList.length;i++){
    var scscid = scxxList[i].scscid;
    var scscnd = scxxList[i].scscnd;
    var scscsj = scxxList[i].scscsj;
    var scscbj = scxxList[i].scscbj;
    var data="<tr><td>"+scscid+"</td><td>"+scscnd+"</td><td>"+scscsj+"</td><td>"+scscbj+
        "</td><td><button class='b btn_xg' onclick='xg("+i+")'>修改</button>"+
        "<button class='b btn_sc' onclick='sc("+i+")'>删除</button>"+
        "<button class='b btn_xq' onclick='xq("+i+")'>详情</button></td></tr>";
    tb.innerHTML += data;
}
function xg(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./scxxgl_xg.html";
}
function sc(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./scxxgl_delete.html";
}  
function xq(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./scxxgl_xq.html";
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}