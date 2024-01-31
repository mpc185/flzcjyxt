function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
var yhxx = JSON.parse(window.sessionStorage.getItem("yhxx"));
document.getElementById("yyhmm").value=yhxx.yhmm;

function cz(){
    var xmm = document.getElementById("xmm").value;
    var qrmm = document.getElementById("qrmm").value;
    // 判断是否为空
    if(xmm!=""){
        if(xmm==yhxx.yhmm){
            tips("未修改密码！","./yhxxgl_czmm.html","系统维护>管理用户信息>重置用户密码")
            window.location.href="./yhxxgl_tips.html";
        }else{
            if(xmm!=qrmm){
                tips("两次密码不一致!","./yhxxgl_czmm.html","系统维护>管理用户信息>重置用户密码")
                window.location.href="./yhxxgl_tips.html";
            }else{
                yhxx.yhmm = xmm;
                yhxx = JSON.stringify(yhxx)
                var path = "http://localhost:8848/api/xtwh/glyhxx/czmm";
                $.ajax({
                    url: path,
                    type: "post",
                    dataType: 'json',
                    contentType: "application/json;charset=utf-8", 
                    data:yhxx,
                    success: function(result) {
                        if(result.msg=="success"){
                            window.sessionStorage.setItem("yhxx",JSON.stringify(result.data));
                            tips("重置成功！","./yhxxgl_czmm.html","系统维护>管理用户信息>重置用户密码");
                            window.location.href="./yhxxgl_tips.html";
                        }
                        if(result.msg=="dbException"){
                            tips("数据库异常!","./yhxxgl_czmm.html","系统维护>管理用户信息>重置用户密码");
                            window.location.href="./yhxxgl_tips.html";
                        }
                    },
                    error: function(result) {
                        tips("服务器异常!","./yhxxgl_czmm.html","系统维护>管理用户信息>重置用户密码");
                        window.location.href="./yhxxgl_tips.html";
                    }
                });
            }
        }
    }else{
        tips("请设置新密码！","./yhxxgl_czmm.html","系统维护>管理用户信息>重置用户密码")
            window.location.href="./yhxxgl_tips.html";
    }
    
}