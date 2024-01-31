function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function qd(){
    var index = window.sessionStorage.getItem("index");
    var zzxxList = JSON.parse(window.sessionStorage.getItem("zzxxList"));
    var zzid = zzxxList[index].zzid;
    // 发送请求
    var path = "http://localhost:8848/api/cnfw/zzxxgl/delete";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:zzid,
        success: function(result) {
            if(result.msg=="success"){
                zzxxList.splice(index,1);
                window.sessionStorage.setItem("zzxxList",JSON.stringify(zzxxList));
                tips("删除成功！","./zzxxgl_bg_many.html","菜农服务>种植信息管理>删除种植信息")
                window.location.href="./zzxxgl_tips.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./zzxxgl_delete.html","菜农服务>种植信息管理>删除种植信息")
                window.location.href="./zzxxgl_tips.html"
            }
        },
        error: function(result) {
            tips("服务器异常!","./zzxxgl_delete.html","菜农服务>种植信息管理>删除种植信息")
            window.location.href="./zzxxgl_tips.html";
        }
    });
}


function backIndex(){
    window.location.href="../xtsy/index.html";
}
function back(){
    window.location.href="./zzxxgl_bg_many.html";
}