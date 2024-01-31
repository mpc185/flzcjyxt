function cx(){
    var scnd = document.getElementById("yzcscnd").value;
    // 发送请求
    var path = "http://localhost:8848/api/jgcfw/scxxgl/cx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:scnd,
        success: function(result) {
            if(result.msg=="success"){
                data = JSON.stringify(result.data);
                window.sessionStorage.setItem("scxxList",data);
                window.location.href="./scxxgl_bg_many.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./scxxgl_cx.html","加工厂服务>收菜信息管理>查询收菜信息")
                window.location.href="./scxxgl_tips.html"
            }
        },
        error: function(result) {
            tips("服务器异常!","./scxxgl_cx.html","加工厂服务>收菜信息管理>查询收菜信息")
            window.location.href="./scxxgl_tips.html";
        }
    });
}


function backIndex(){
    window.location.href="../xtsy/index.html";
}