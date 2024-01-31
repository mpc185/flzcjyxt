function cx(){
    var zznd = document.getElementById("zznd").value;
    // 发送请求
    var path = "http://localhost:8848/api/cnfw/zzxxgl/cx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:zznd,
        success: function(result) {
            if(result.msg=="success"){
                data = JSON.stringify(result.data);
                window.sessionStorage.setItem("zzxxList",data);
                window.location.href="./zzxxgl_bg_many.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./zzxxgl_cx.html","菜农服务>种植信息管理>查询种植信息")
                window.location.href="./zzxxgl_tips.html"
            }
        },
        error: function(result) {
            tips("服务器异常!","./zzxxgl_cx.html","菜农服务>种植信息管理>查询种植信息")
            window.location.href="./zzxxgl_tips.html";
        }
    });
}


function backIndex(){
    window.location.href="../xtsy/index.html";
}