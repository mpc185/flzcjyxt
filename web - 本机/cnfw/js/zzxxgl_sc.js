function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function sc(){
    var zznd=document.getElementById("zznd").value
    var zzsj=document.getElementById("zzsj").value
    var zzgm=document.getElementById("zzgm").value
    var scsj=document.getElementById("scsj").value
    var zzdz=document.getElementById("zzdz").value

    // 检查数据合法性
    if(zznd==""||zzsj==""||zzgm==""||zzdz==""||scsj==""){
        tips("请录入完整信息!","./zzxxgl_sc.html","菜农服务>种植信息管理>上传种植信息")
        window.location.href="./zzxxgl_tips.html"
    }else{
        // 封装数据
        zzxx={
            zznd:zznd,
            zzsj:zzsj,
            zzgm:zzgm,
            scsj:scsj,
            zzdz:zzdz
        }
        var zzxx = JSON.stringify(zzxx)
        // 拿到前端存储的令牌
        var token=window.sessionStorage.getItem("token");
        // 发送请求
        var path = "http://localhost:8848/api/cnfw/zzxxgl/sc";
        $.ajax({
            url: path,
            headers: {'token': token},
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:zzxx,
            success: function(result) {
                if(result.msg=="success"){
                    window.sessionStorage.setItem("zzxxList",JSON.stringify(result.data));
                    tips("上传成功!","./zzxxgl_bg_many.html","菜农服务>种植信息管理>上传种植信息")
                    window.location.href="./zzxxgl_tips.html";
                }
                if(result.msg=="hasInfo"){
                    tips("已存在该种植信息!","./zzxxgl_sc.html","菜农服务>种植信息管理>上传种植信息")
                    window.location.href="./zzxxgl_tips.html"
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./zzxxgl_sc.html","菜农服务>种植信息管理>上传种植信息")
                    window.location.href="./zzxxgl_tips.html"
                }
            },
            error: function(result) {
                tips("服务器异常!","./zzxxgl_sc.html","菜农服务>种植信息管理>上传种植信息")
                window.location.href="./zzxxgl_tips.html";
            }
        });
    }
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}