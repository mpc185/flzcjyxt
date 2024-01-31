function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function cx(){
    var yhzsxm = document.getElementById("yhzsxm").value;
    var path="http://localhost:8848/api/zjsfw/ckcnxx/cxzzxx"
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhzsxm,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("cnzzxxList",JSON.stringify(result.data));
                window.location.href="./ckcnxx_zzxx.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ckcnxx_cx.html","中间商服务>查看菜农信息>查询种植信息");
                window.location.href="./ckcnxx_tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./ckcnxx_cx.html","中间商服务>查看菜农信息>查询种植信息");
                window.location.href="./ckcnxx_tips.html";
        }
    });
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}