function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var index = window.sessionStorage.getItem("index")
var zjsyhxx = JSON.parse(window.sessionStorage.getItem("zjsyhxxList"))[index];
// 显示
document.getElementById("yhid").innerHTML=zjsyhxx.yhid;
document.getElementById("yhzsxm").innerHTML=zjsyhxx.yhzsxm;
document.getElementById("yhlx").innerHTML=zjsyhxx.yhlx;
document.getElementById("lxdh").innerHTML=zjsyhxx.lxdh;
document.getElementById("yhdz").innerHTML=zjsyhxx.yhdz;

function ccxx(){
    // 利用yhid字段请求该用户的菜场信息
    var yhid = zjsyhxx.yhid;
    // 发送请求
    var path = "http://localhost:8848/api/cnfw/ckzjs/ccxx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhid,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("zjsccxxList",JSON.stringify(result.data));
                window.sessionStorage.setItem("yhzsxm",zjsyhxx.yhzsxm)
                window.location.href="../cnfw/ckzjsxx_ccxx.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckzjsxx_yhxxxq.html","菜农服务>查看中间商信息>用户信息详情");
                window.location.href="./ckzjsxx_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckzjsxx_yhxxxq.html","菜农服务>查看中间商信息>用户信息详情");
                window.location.href="./ckzjsxx_tips.html";
        }
    });
}

function scxx(){
    // 利用yhid字段请求该用户的收菜信息
    var yhid = zjsyhxx.yhid;
    // 发送请求
    var path = "http://localhost:8848/api/cnfw/ckzjs/scxx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhid,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("zjsscxxList",JSON.stringify(result.data));
                window.location.href="../cnfw/ckzjsxx_scxx.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckzjsxx_yhxxxq.html","菜农服务>查看中间商信息>用户信息详情");
                window.location.href="./ckzjsxx_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckzjsxx_yhxxxq.html","菜农服务>查看中间商信息>用户信息详情");
                window.location.href="./ckzjsxx_tips.html";
        }
    });
}

function back(){
    window.location.href="./ckzjsxx_yhxx.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
