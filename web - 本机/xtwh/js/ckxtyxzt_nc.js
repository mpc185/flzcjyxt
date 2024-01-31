function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
// 发送请求
var path = "http://localhost:8848/api/xtwh/yxzt/nc";
$.ajax({
    url: path,
    type: "post",
    dataType: 'json',
    contentType: "application/json;charset=utf-8", 
    success: function(result) {
        if(result.msg=="success"){
            var ncxx = result.data;
            document.getElementById("znc").innerHTML=ncxx[0];
            document.getElementById("sync").innerHTML=ncxx[1];
            document.getElementById("ysync").innerHTML=ncxx[2];
            document.getElementById("ncsyl").innerHTML=ncxx[3];
        }
        if(result.msg=="dbException"){
            tips("数据库异常!","./ckxtyxzt_nc.html","系统维护>查看系统运行状态>内存信息");
            window.location.href="./ckxtyxzt_tips.html";
        }
    },
    error: function(result) {
        tips("服务器异常!","./ckxtyxzt_nc.html","系统维护>查看系统运行状态>内存信息");
            window.location.href="./ckxtyxzt_tips.html";
    }
});

function getData(){
    // 发送请求
    var path = "http://localhost:8848/api/xtwh/yxzt/nc";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                var ncxx = result.data;
                document.getElementById("znc").innerHTML=ncxx[0];
                document.getElementById("sync").innerHTML=ncxx[1];
                document.getElementById("ysync").innerHTML=ncxx[2];
                document.getElementById("ncsyl").innerHTML=ncxx[3];
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckxtyxzt_nc.html","系统维护>查看系统运行状态>内存信息");
                window.location.href="./ckxtyxzt_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckxtyxzt_nc.html","系统维护>查看系统运行状态>内存信息");
                window.location.href="./ckxtyxzt_tips.html";
        }
    });
}
window.setInterval(getData,1000)
