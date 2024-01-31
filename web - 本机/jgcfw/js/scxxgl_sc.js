function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function sc(){
    var yzcscnd=document.getElementById("yzcscnd").value
    var yzcscsj=document.getElementById("yzcscsj").value
    var yzcscbj=document.getElementById("yzcscbj").value

    // 检查数据合法性
    if(yzcscnd==""||yzcscsj==""||yzcscbj==""){
        tips("请录入完整信息!","./scxxgl_sc.html","加工厂服务>收菜信息管理>上传收菜信息")
        window.location.href="./scxxgl_tips.html"
    }else{
        // 拿到前端存储的令牌
        var token=window.sessionStorage.getItem("token");
        // 封装数据
        var yzcscxx={
            yzcscid:null,
            yhid:token,
            yzcscnd:yzcscnd,
            yzcscsj:yzcscsj,
            yzcscbj:yzcscbj
        }
        var yzcscxx = JSON.stringify(yzcscxx)
        // 发送请求
        var path = "http://localhost:8848/api/jgcfw/scxxgl/sc";
        $.ajax({
            url: path,
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:yzcscxx,
            success: function(result) {
                if(result.msg=="success"){
                    data = JSON.stringify(result.data);
                    window.sessionStorage.setItem("scxxList",data);
                    tips("上传成功!","./scxxgl_bg_many.html","加工厂服务>收菜信息管理>上传收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="hasInfo"){
                    tips("已存在该收菜信息!","./scxxgl_sc.html","加工厂服务>收菜信息管理>上传收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./scxxgl_sc.html","加工厂服务>收菜信息管理>上传收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
            },
            error: function(result) {
                tips("服务器异常!","./scxxgl_sc.html","加工厂服务>收菜信息管理>上传收菜信息");
                window.location.href="./scxxgl_tips.html";
            }
        });
    }
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}