function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var data=JSON.parse(window.sessionStorage.getItem("userData"));
var yhidDOM = document.getElementById("yhid");
var yhzsxmDOM = document.getElementById("yhzsxm");
var lxdhDOM = document.getElementById("lxdh");
var yhdzDOM = document.getElementById("yhdz")

yhidDOM.value=data.yhid
yhzsxmDOM.value=data.yhzsxm
lxdhDOM.value=data.lxdh
yhdzDOM.value=data.yhdz

function xg(){
    // 获取输入框数据
    var yhid = yhidDOM.value
    var yhzsxm=yhzsxmDOM.value
    var lxdh=lxdhDOM.value
    var yhdz=yhdzDOM.value
    // 检查数据合法性
    // 判断用户是否输入
    if(yhzsxm==""||lxdh==""){
        tips("请输入完整信息！","./yhxxgl_xg.html","用户信息管理>修改用户信息")
        window.location.href = "./tips.html"
    }
    // 电话号码不对
    else if(!(/^1[3456789]\d{9}$/.test(lxdh))){ 
        tips("电话号码不正确！","./yhxxgl_xg.html","用户信息管理>修改用户信息")
        window.location.href = "./tips.html"
    }
    // 封装数据
    user={
        yhid:yhid,
        yhzsxm:yhzsxm,
        lxdh:lxdh,
        yhdz:yhdz
    }
    var user=JSON.stringify(user)
    // 发出请求
    var path = "http://localhost:8848/api/yhxxgl/xg";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        data: user, 
        success: function(result) {
            // 修改成功
            if(result.msg=="success"){
                data = JSON.stringify(result.data)
                window.sessionStorage.setItem("userData",data)
                tips("修改成功！","./yhxxgl_xg.html","用户信息管理>修改用户信息")
                window.location.href="./tips.html"
            }
            // 用户信息存在
            else if(result.msg=="hasInfo"){
                tips("已存在该用户信息！","./yhxxgl_xg.html","用户信息管理>修改用户信息")
                window.location.href="./tips.html"
            }
            else if(result.msg=="noUpdate"){
                tips("未作任何修改！","./yhxxgl_xg.html","用户信息管理>修改用户信息")
                window.location.href="./tips.html"
            }else{
                tips("数据库异常！","./yhxxgl_xg.html","用户信息管理>修改用户信息")
            }
        },
        error: function(result) {
            tips("服务器异常！","./yhxxgl_xg.html","用户信息管理>修改用户信息")
            window.location.href="./tips.html"
        }
    });
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
