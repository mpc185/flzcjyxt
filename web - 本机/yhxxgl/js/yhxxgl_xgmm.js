function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var data = JSON.parse(window.sessionStorage.getItem("userData"))
var oyhmm = data.yhmm
console.log(oyhmm);

function xgmm(){
    var ymm = document.getElementById("ymm").value
    var yhmm = document.getElementById("xmm").value
    var qrmm = document.getElementById("qrmm").value
    
    // 没有输入
    if(ymm==""||yhmm==""||qrmm==""){
        window.sessionStorage.setItem("tip","请输入信息！");
        window.sessionStorage.setItem("location","./yhxxgl_xgmm.html");
        window.sessionStorage.setItem("locationTip","用户信息管理>修改密码");
        window.location.href = "./tips.html";
    }
    // 原密码错误
    else {
        if(oyhmm==ymm){
           // 没有修改密码
            if(ymm != yhmm){
                // 两次密码不一致
                if(yhmm!=qrmm){
                    tips("两次密码不一致！","./yhxxgl_xgmm.html","用户信息管理>修改密码");
                    window.location.href = "./tips.html";
                }else{
                    user={
                        yhid:data.yhid,
                        yhmm:yhmm
                    }
                    user = JSON.stringify(user)
                    console.log(user);
                    // 发送请求
                    var path = "http://localhost:8848/api/yhxxgl/xgmm";
                    $.ajax({
                        url: path,
                        type: "post",
                        dataType: 'json',
                        contentType: "application/json;charset=utf-8",
                        data:user, 
                        success: function(result) {
                            // 修改成功
                            if(result.msg=="success"){
                                data = JSON.stringify(result.data)
                                window.sessionStorage.setItem("userData",data)
                                tips("修改成功!","./yhxxgl_xgmm.html","用户信息管理>修改密码");
                                window.location.href="./tips.html"
                            }
                        },
                        error: function(result) {
                            tips("服务器异常!","./yhxxgl_xgmm.html","用户信息管理>修改密码");
                            window.location.href="./tips.html"
                        }
                    });
                }
            }else{
                tips("未修改密码!","./yhxxgl_xgmm.html","用户信息管理>修改密码");
                window.location.href = "./tips.html";
            }
        }else{
            tips("原密码错误!","./yhxxgl_xgmm.html","用户信息管理>修改密码");
            window.location.href = "./tips.html";
        }
    }
    
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}

