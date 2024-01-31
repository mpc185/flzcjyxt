function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
var yhxx = JSON.parse(window.sessionStorage.getItem("yhxx"));
document.getElementById("yyhlx").value=yhxx.yhlx;

function bg(){
    var xyhlx = document.getElementById("xyhlx").value;
    if(xyhlx==yhxx.yhlx){
        tips("未修改用户类型！","./yhxxgl_lxbg.html","系统维护>管理用户信息>变更用户类型")
        window.location.href="./yhxxgl_tips.html";
    }else{
        yhxx.yhlx = xyhlx;
        yhxx = JSON.stringify(yhxx);
        var path = "http://localhost:8848/api/xtwh/glyhxx/lxbg";
        $.ajax({
            url: path,
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:yhxx,
            success: function(result) {
                if(result.msg=="success"){
                    window.sessionStorage.setItem("yhxx",JSON.stringify(result.data));
                    tips("更改成功！","./yhxxgl_lxbg.html","系统维护>管理用户信息>变更用户类型");
                    window.location.href="./yhxxgl_tips.html";
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./yhxxgl_lxbg.html","系统维护>管理用户信息>变更用户类型");
                    window.location.href="./yhxxgl_tips.html";
                }
            },
            error: function(result) {
                tips("服务器异常!","./yhxxgl_lxbg.html","系统维护>管理用户信息>变更用户类型");
                window.location.href="./yhxxgl_tips.html";
            }
        });
    }
}