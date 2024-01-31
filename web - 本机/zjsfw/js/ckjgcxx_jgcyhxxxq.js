function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}


var index = window.sessionStorage.getItem("index");
var jgcxx = JSON.parse(window.sessionStorage.getItem("jgcxxList"))[index];

var yhid = jgcxx.yhid;
var path="http://localhost:8848/api/zjsfw/ckjgcxx/jgcxq"
$.ajax({
    url: path,
    type: "post",
    dataType: 'json',
    contentType: "application/json;charset=utf-8", 
    data:yhid,
    success: function(result) {
        if(result.msg=="success"){
            document.getElementById("jgcid").innerHTML=jgcxx.jgcid;
            document.getElementById("yhzsxm").innerHTML=result.data;
            document.getElementById("jgcmc").innerHTML=jgcxx.jgcmc;
            document.getElementById("jgcdz").innerHTML=jgcxx.jgcdz;
            document.getElementById("jgcjj").innerHTML=jgcxx.jgcjj ;
        }
        if(result.msg=="dbException"){
            tips("数据库异常!","./ckjgcxx_jgcyhxxxq.html","中间商服务>查看加工厂信息>加工厂信息详情");
            window.location.href="./ckjgcxx_tips.html";
        }
    },
    error: function(result) {
        tips("服务器异常!","./ckjgcxx_jgcyhxxxq.html","中间商服务>查看加工厂信息>加工厂信息详情");
            window.location.href="./ckjgcxx_tips.html";
    }
});


function scxx(){
    // 利用yhid字段请求该用户的收菜信息
    var path = "http://localhost:8848/api/zjsfw/ckjgcxx/scxx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhid,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("scxxList",JSON.stringify(result.data));
                window.location.href="./ckjgcxx_scxxbg.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckjgcxx_jgcyhxxxq.html","中间商服务>查看加工厂信息>加工厂信息详情");
                window.location.href="./ckjgcxx_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckjgcxx_jgcyhxxxq.html","中间商服务>查看加工厂信息>加工厂信息详情");
                window.location.href="./ckjgcxx_tips.html";
        }
    });
}

function back(){
    window.location.href="./ckjgcxx_jgcyhxx.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}

