function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var index = window.sessionStorage.getItem("index");
var zjsscxx = JSON.parse(window.sessionStorage.getItem("zjsscxxList"))[index];
var yhid = zjsscxx.yhid;
console.log(zjsscxx);

// 利用yhid去数据库查用户真实姓名和联系电话
var path = "http://localhost:8848/api/cnfw/ckzjs/zmxmAndlxdh";
$.ajax({
    url: path,
    type: "post",
    dataType: 'json',
    contentType: "application/json;charset=utf-8", 
    data:yhid,
    success: function(result) {
        if(result.msg=="success"){
            // 将信息显示在页面
            document.getElementById("scscid").innerHTML=zjsscxx.scscid;
            document.getElementById("yhzsxm").innerHTML=result.data[0];
            document.getElementById("lxdh").innerHTML=result.data[1];
            document.getElementById("scscnd").innerHTML=zjsscxx.scscnd;
            document.getElementById("scscsj").innerHTML=zjsscxx.scscsj;
            document.getElementById("scscbj").innerHTML=zjsscxx.scscbj;
            
        }
        if(result.msg=="dbException"){
            tips("数据库异常!","./ckzjsxx_scxx.html","菜农服务>查看中间商信息>收菜信息");
            window.location.href="./ckzjsxx_tips.html";
        }
    },
    error: function(result) {
        tips("服务器异常!","./ckzjsxx_scxx.html","菜农服务>查看中间商信息>收菜信息");
            window.location.href="./ckzjsxx_tips.html";
    }
});

function back(){
    window.location.href="./ckzjsxx_scxx.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}