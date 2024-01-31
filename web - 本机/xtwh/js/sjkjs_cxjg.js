var table = window.sessionStorage.getItem("tableName");
function setTitle(zd1,zd2,zd3,zd4){
    document.getElementById("zd1").innerHTML=zd1;
    document.getElementById("zd2").innerHTML=zd2;
    document.getElementById("zd3").innerHTML=zd3;
    document.getElementById("zd4").innerHTML=zd4;
}
var sjkxx = JSON.parse(window.sessionStorage.getItem("sjkxx"));
var tb=document.querySelector("tbody")
if(table=="用户信息表"){
    setTitle("用户账号","真实姓名","联系电话","用户类型");
    for(var i=0;i<sjkxx.length;i++){
        var yhid = sjkxx[i].yhid;
        var yhzsxm = sjkxx[i].yhzsxm;
        var yhlx = sjkxx[i].yhlx;
        var lxdh = sjkxx[i].lxdh;
        var data="<tr><td>"+yhid+"</td><td>"+yhzsxm+"</td><td>"+lxdh+"</td><td>"+yhlx+"</td><td>"+
            "<button class='b btn_xq' onclick='moreInfo1("+i+")'>更多信息</button></td></tr>";
        tb.innerHTML += data;
    }
}
if(table=="种植信息表"){
    setTitle("种植编号","种植年度","种植时间","收菜时间");
    for(var i=0;i<sjkxx.length;i++){
        var zzid = sjkxx[i].zzid;
        var zznd = sjkxx[i].zznd;
        var zzsj = sjkxx[i].zzsj;
        var scsj = sjkxx[i].scsj
        var data="<tr><td>"+zzid+"</td><td>"+zznd+"</td><td>"+zzsj+"</td><td>"+scsj+"</td><td>"+
            "<button class='b btn_xq' onclick='moreInfo2("+i+")'>更多信息</button></td></tr>";
        tb.innerHTML += data;
    }
}
if(table=="菜场信息表"){
    setTitle("菜场编号","用户账号","菜池个数","容纳规模");
    for(var i=0;i<sjkxx.length;i++){
        var ccid = sjkxx[i].ccid;
        var yhid = sjkxx[i].yhid;
        var ccgs = sjkxx[i].ccgs;
        var rngm = sjkxx[i].rngm;
        var data="<tr><td>"+ccid+"</td><td>"+yhid+"</td><td>"+ccgs+"</td><td>"+rngm+"</td><td>"+
            "<button class='b btn_xq' onclick='moreInfo3("+i+")'>更多信息</button></td></tr>";
        tb.innerHTML += data;
    }
}
if(table=="生菜收菜信息表"){
    setTitle("收菜编号","收菜年度","收菜时间","收菜报价");
    for(var i=0;i<sjkxx.length;i++){
        var zzid = sjkxx[i].scscid;
        var zznd = sjkxx[i].scscnd;
        var zzsj = sjkxx[i].scscsj;
        var scsj = sjkxx[i].scscbj;
        var data="<tr><td>"+zzid+"</td><td>"+zznd+"</td><td>"+zzsj+"</td><td>"+scsj+"</td><td>"+
            "<button class='b btn_xq' onclick='moreInfo4("+i+")'>更多信息</button></td></tr>";
        tb.innerHTML += data;
    }
}
if(table=="加工厂信息表"){
    var th = document.getElementById("th");

    th.removeChild(th.childNodes[9])
    setTitle("加工厂编号","用户账号","加工厂名称","操作");
    for(var i=0;i<sjkxx.length;i++){
        var zzid = sjkxx[i].jgcid;
        var zznd = sjkxx[i].yhid;
        var zzsj = sjkxx[i].jgcmc;
        var data="<tr><td>"+zzid+"</td><td>"+zznd+"</td><td>"+zzsj+"</td><td>"+
            "<button class='b btn_xq' onclick='moreInfo5("+i+")'>更多信息</button></td></tr>";
        tb.innerHTML += data;
    }
}
if(table=="腌制菜收菜信息表"){
    setTitle("收菜编号","收菜年度","收菜时间","收菜报价");
    for(var i=0;i<sjkxx.length;i++){
        var zzid = sjkxx[i].yzcscid;
        var zznd = sjkxx[i].yzcscnd;
        var zzsj = sjkxx[i].yzcscsj;
        var scsj = sjkxx[i].yzcscbj;
        var data="<tr><td>"+zzid+"</td><td>"+zznd+"</td><td>"+zzsj+"</td><td>"+scsj+"</td><td>"+
            "<button class='b btn_xq' onclick='moreInfo6("+i+")'>更多信息</button></td></tr>";
        tb.innerHTML += data;
    }
}

function moreInfo1(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./sjksj_xqyhxx.html";
}
function moreInfo2(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./sjksj_xqzzxx.html";
}
function moreInfo3(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./sjksj_xqccxx.html";
}
function moreInfo4(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./sjksj_xqscscxx.html";
}
function moreInfo5(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./sjksj_xqjgcxx.html";
}
function moreInfo6(index){
    window.sessionStorage.setItem("index",index);
    window.location.href="./sjksj_xqyzcscxx.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}