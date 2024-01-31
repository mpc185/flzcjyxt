function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function sc(){
    var scscnd=document.getElementById("scscnd").value
    var scscsj=document.getElementById("scscsj").value
    var scscbj=document.getElementById("scscbj").value+"元/斤"

    // 检查数据合法性
    if(scscnd==""||scscsj==""||scscbj==""){
        tips("请录入完整信息!","./scxxgl_sc.html","中间商服务>收菜信息管理>上传收菜信息")
        window.location.href="./scxxgl_tips.html"
    }else{
        // 封装数据
        scscxx={
            scscnd:scscnd,
            scscsj:scscsj,
            scscbj:scscbj
        }
        var scscxx = JSON.stringify(scscxx)
        // 拿到前端存储的令牌
        var token=window.sessionStorage.getItem("token");
        // 发送请求
        var path = "http://localhost:8848/api/zjsfw/scxxgl/sc";
        $.ajax({
            url: path,
            headers: {'token': token},
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:scscxx,
            success: function(result) {
                if(result.msg=="success"){
                    data = JSON.stringify(result.data);
                    window.sessionStorage.setItem("scxxList",data);
                    tips("上传成功!","./scxxgl_bg_many.html","中间商服务>收菜信息管理>上传收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="hasInfo"){
                    tips("已存在该种植信息!","./scxxgl_sc.html","中间商服务>收菜信息管理>上传收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./scxxgl_sc.html","中间商服务>收菜信息管理>上传收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
            },
            error: function(result) {
                tips("服务器异常!","./scxxgl_sc.html","中间商服务>收菜信息管理>上传收菜信息");
                window.location.href="./scxxgl_tips.html";
            }
        });
    }
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}