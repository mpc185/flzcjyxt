function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var index = window.sessionStorage.getItem("index")
var cnyhxx = JSON.parse(window.sessionStorage.getItem("cnyhxxList"))[index];
// 显示
document.getElementById("yhid").innerHTML=cnyhxx.yhid;
document.getElementById("yhzsxm").innerHTML=cnyhxx.yhzsxm;
document.getElementById("yhlx").innerHTML=cnyhxx.yhlx;
document.getElementById("lxdh").innerHTML=cnyhxx.lxdh;
document.getElementById("yhdz").innerHTML=cnyhxx.yhdz;
console.log(cnyhxx.yhdz);

function zzxx(){
    // 利用yhid字段请求该用户的菜场信息
    var yhid = cnyhxx.yhid;
    // 发送请求
    var path = "http://localhost:8848/api/zjsfw/ckcnxx/zzxx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhid,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("cnzzxxList",JSON.stringify(result.data));
                window.location.href="./ckcnxx_zzxx.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckcnxx_xq.html","中间商服务>查看菜农信息>用户信息详情");
                window.location.href="./ckcnxx_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckcnxx_xq.html","中间商服务>查看菜农信息>用户信息详情");
                window.location.href="./ckcnxx_tips.html";
        }
    });
}

function back(){
    window.location.href="./ckcnxx_bg.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
