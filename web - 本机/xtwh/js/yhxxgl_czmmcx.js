function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}

function cx(){
    var yhid = document.getElementById("yhid").value;
    var path = "http://localhost:8848/api/xtwh/glyhxx/czmmcx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhid,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("yhxx",JSON.stringify(result.data))
                window.location.href="./yhxxgl_czmm.html";
            }
            if(result.msg=="noInfo"){
                tips("不存在该用户!","./yhxxgl_czmmcx.html","系统维护>管理用户信息>查询用户");
                window.location.href="./yhxxgl_tips.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./yhxxgl_czmmcx.html","系统维护>管理用户信息>查询用户");
                window.location.href="./yhxxgl_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./yhxxgl_czmmcx.html","系统维护>管理用户信息>查询用户");
            window.location.href="./yhxxgl_tips.html";
        }
    });

}