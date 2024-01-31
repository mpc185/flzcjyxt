function back(){
    window.location.href = "../xtsy/index.html"
}
function login(){
    // 收集输入框输入的数据
    var phoneNum = document.getElementById("lxdh").value
    var psw = document.getElementById("password").value
    // 封装数据
    var user={
        yhmm:psw,
        lxdh:phoneNum
    }
    var user=JSON.stringify(user)
    // 发送请求
    var path = "http://localhost:8848/api/login";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        data: user, 
        success: function(result) {
            // 登录成功
            if(result.msg=="success"){
                // 后端返回一个JWT令牌,保存在浏览器
                var token = result.data;
                window.sessionStorage.setItem("token", token);

                window.sessionStorage.setItem("tip","登录成功!")
                window.sessionStorage.setItem("location","../xtsy/index.html")
                window.location.href="./tips.html"
            }
            // 用户不存在
            else if(result.msg=="noInfo"){
                window.sessionStorage.setItem("tip","用户不存在!")
                window.sessionStorage.setItem("location","./dl.html")
                window.location.href="./tips.html"
            }
            // 密码错误
            else if(result.msg="pswError"){
                window.sessionStorage.setItem("tip","密码错误!")
                window.sessionStorage.setItem("location","./dl.html")
                window.location.href="./tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!")
            window.sessionStorage.setItem("location","./dl.html")
            window.location.href="./tips.html"
        }
    });
}