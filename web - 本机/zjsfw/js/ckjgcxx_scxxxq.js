function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var index = window.sessionStorage.getItem("index");
var jgcscxx = JSON.parse(window.sessionStorage.getItem("scxxList"))[index];
var yhid = jgcscxx.yhid;

// 利用yhid去数据库查用户真实姓名和联系电话
var path = "http://localhost:8848/api/zjsfw/ckjgcxx/zmxmAndlxdh";
$.ajax({
    url: path,
    type: "post",
    dataType: 'json',
    contentType: "application/json;charset=utf-8", 
    data:yhid,
    success: function(result) {
        if(result.msg=="success"){
            // 将信息显示在页面
            document.getElementById("scid").innerHTML=jgcscxx.yzcscid;
            document.getElementById("yhzsxm").innerHTML=result.data[0];
            document.getElementById("lxdh").innerHTML=result.data[1];
            document.getElementById("scnd").innerHTML=jgcscxx.yzcscnd;
            document.getElementById("scsj").innerHTML=jgcscxx.yzcscsj;
            document.getElementById("scbj").innerHTML=jgcscxx.yzcscbj;
            
        }
        if(result.msg=="dbException"){
            tips("数据库异常!","./ckjgcxx_scxxbg.html","中间商服务>查看加工厂信息>加工厂收菜信息");
            window.location.href="./ckjgcxx_tips.html";
        }
    },
    error: function(result) {
        tips("服务器异常!","./ckjgcxx_scxxbg.html","中间商服务>查看加工厂信息>加工厂收菜信息");
            window.location.href="./ckjgcxx_tips.html";
    }
});

function back(){
    window.location.href="./ckjgcxx_scxxbg.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}