function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}
function cx(){
    var table = document.getElementById("tableName").value;
    window.sessionStorage.setItem("tableName",table);
    var path = "http://localhost:8848/api/xtwh/sjksj/cx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:table,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("sjkxx",JSON.stringify(result.data))
                window.location.href="./sjksj_cxjg.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./sjksj_cx.html","系统维护>查看数据库数据>查询数据");
                window.location.href="./sjksj_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./sjksj_cx.html","系统维护>查看数据库数据>查询数据");
            window.location.href="./sjksj_tips.html";
        }
    });
}