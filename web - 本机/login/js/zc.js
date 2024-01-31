// 返回按钮
function back(){
    window.location.href="../xtsy/index.html"
}

// 注册按钮
function enroll(){
    // 收集表单信息
    var yhzsxm = document.getElementById("yhzsxm").value
    var yhlx = document.getElementById("yhlx").value
    var lxdh = document.getElementById("lxdh").value
    var yhmm = document.getElementById("yhmm").value
    var qrmm = document.getElementById("qrmm").value
    // 判断数据合法性
    if(yhzsxm==""||yhlx==""||lxdh==""||yhmm==""||qrmm==""){
        window.sessionStorage.setItem("tip","请输入全部信息！")
        window.sessionStorage.setItem("location","./zc.html")
        window.location.href = "./tips.html"
    }else{
        if(!(/^1[3456789]\d{9}$/.test(lxdh))){ 
            window.sessionStorage.setItem("tip","电话号码不正确！")
            window.sessionStorage.setItem("location","./zc.html")
            window.location.href = "./tips.html"
        }else{
            if(yhmm!=qrmm){
                window.sessionStorage.setItem("tip","两次密码不一致！")
                window.sessionStorage.setItem("location","./zc.html")
                window.location.href = "./tips.html"
            }else{
                // 封装数据
                user={
                    yhzsxm:yhzsxm,
                    yhmm:yhmm,
                    lxdh:lxdh,
                    yhlx:yhlx,
                    yhdz:""
                }
                var user=JSON.stringify(user)
                // 发出请求
                var path = "http://localhost:8848/api/enroll";
                $.ajax({
                    url: path,
                    type: "post",
                    dataType: 'json',
                    contentType: "application/json;charset=utf-8",
                    data: user, 
                    success: function(result) {
                        // 注册成功
                        if(result.msg=="success"){
                            window.sessionStorage.setItem("tip","注册成功!")
                            window.sessionStorage.setItem("location","./dl.html")
                            window.location.href="./tips.html"
                        }
                        // 用户已存在
                        else if(result.msg=="hasInfo"){
                            window.sessionStorage.setItem("tip","该用户已注册!")
                            window.sessionStorage.setItem("location","./zc.html")
                            window.location.href="./tips.html"
                        }
                    },
                    error: function(result) {
                        window.sessionStorage.setItem("tip","服务器异常!")
                        window.sessionStorage.setItem("location","./zc.html")
                        window.location.href="./tips.html"
                    }
                });
            }
        }   
    }
}