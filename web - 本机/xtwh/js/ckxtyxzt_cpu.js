function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
// 发送请求
var path = "http://localhost:8848/api/xtwh/yxzt/cpu";
$.ajax({
    url: path,
    type: "post",
    dataType: 'json',
    contentType: "application/json;charset=utf-8", 
    success: function(result) {
        if(result.msg=="success"){
            var cpuxx = result.data;
            document.getElementById("fwqmc").innerHTML=cpuxx[0];
            document.getElementById("ip").innerHTML=cpuxx[1];
            document.getElementById("hxs").innerHTML=cpuxx[2];
            document.getElementById("CPUsyl").innerHTML=cpuxx[3];
            document.getElementById("CPUjzsd").innerHTML=cpuxx[4];
            document.getElementById("CPUsd").innerHTML=cpuxx[5];
        }
        if(result.msg=="dbException"){
            tips("数据库异常!","./ckxtyxzt_cpu.html","系统维护>查看系统运行状态>服务器与CUP信息");
            window.location.href="./ckxtyxzt_tips.html";
        }
    },
    error: function(result) {
        tips("服务器异常!","./ckxtyxzt_cpu.html","系统维护>查看系统运行状态>服务器与CUP信息");
        window.location.href="./ckxtyxzt_tips.html";
    }
});

function getData(){
    // 发送请求
    var path = "http://localhost:8848/api/xtwh/yxzt/cpu";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                var cpuxx = result.data;
                document.getElementById("fwqmc").innerHTML=cpuxx[0];
                document.getElementById("ip").innerHTML=cpuxx[1];
                document.getElementById("hxs").innerHTML=cpuxx[2];
                document.getElementById("CPUsyl").innerHTML=cpuxx[3];
                document.getElementById("CPUjzsd").innerHTML=cpuxx[4];
                document.getElementById("CPUsd").innerHTML=cpuxx[5];
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckxtyxzt_cpu.html","系统维护>查看系统运行状态>服务器与CUP信息");
                window.location.href="./ckxtyxzt_tips.html";
            }
        },
        error: function(result) {
            tips("数据库异常!","./ckxtyxzt_cpu.html","系统维护>查看系统运行状态>服务器与CUP信息");
            window.location.href="./ckxtyxzt_tips.html";
        }
    });
}
window.setInterval(getData,1000)
