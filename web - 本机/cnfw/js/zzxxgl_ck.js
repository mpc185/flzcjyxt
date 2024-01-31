// 发送请求
var path = "http://localhost:8848/api/cnfw/zzxxgl/ck";
$.ajax({
    url: path,
    type: "post",
    dataType: 'json',
    contentType: "application/json;charset=utf-8", 
    success: function(result) {
        if(result.msg=="success"){
            var zzxxList = result.data
            window.sessionStorage.setItem("zzxxList",JSON.stringify(zzxxList));
            // 显示在页面
            var tb=document.querySelector("tbody")
            for(var i=0;i<zzxxList.length;i++){
                var zzid = zzxxList[i].zzid;
                var zznd = zzxxList[i].zznd;
                var zzsj = zzxxList[i].zzsj;
                var scsj = zzxxList[i].scsj;
                var data="<tr><td>"+zzid+"</td><td>"+zznd+"</td><td>"+zzsj+"</td><td>"+scsj+"</td><td>"+
                    "<button class='b btn_xq' onclick='xq("+i+")'>详情信息</button></td></tr>";
                tb.innerHTML += data;
            }
        }
        if(result.msg=="dbException"){
            tips("数据库异常!","./zzxxgl_xg.html","菜农服务>种植信息管理>修改种植信息");
            window.location.href="./zzxxgl_tips.html";
        }
    },
    error: function(result) {
        tips("服务器异常!","./zzxxgl_xg.html","菜农服务>种植信息管理>修改种植信息");
        window.location.href="./zzxxgl_tips.html";
    }
});

function xq(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("xqLocation","./zzxxgl_ck.html")
    window.location.href="./zzxxgl_xq.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}