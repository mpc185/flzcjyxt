function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function cx(){
    var scnd = document.getElementById("scnd").value;
    var path="http://localhost:8848/api/zjsfw/ckjgcxx/cxscxx"
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:scnd,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("scxxList",JSON.stringify(result.data));
                window.location.href="./ckjgcxx_scxxbg.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckjgcxx_cx.html","中间商服务>查看加工厂信息>查询收菜信息");
                window.location.href="./ckjgcxx_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckjgcxx_cx.html","中间商服务>查看加工厂信息>查询收菜信息");
                window.location.href="./ckjgcxx_tips.html";
        }
    });
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}