function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function cx(){
    var yhid = document.getElementById("scscnd").value;
    var path = "http://localhost:8848/api/cnfw/ckzjs/cxscxx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhid,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("zjsscxxList",JSON.stringify(result.data));
                window.location.href="./ckzjsxx_scxx.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckzjsxx_cxscxx.html","菜农服务>查看中间商信息>查询收菜信息");
                window.location.href="./ckzjsxx_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckzjsxx_cxscxx.html","菜农服务>查看中间商信息>查询收菜信息");
                window.location.href="./ckzjsxx_tips.html";
        }
    });
}


function backIndex(){
    window.location.href="../xtsy/index.html"
}