function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function qd(){
    var yhid = JSON.parse(window.sessionStorage.getItem("userData")).yhid
    var path = "http://localhost:8848/api/yhxxgl/zx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yhid,
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.clear();
                tips("注销成功!","/","用户信息管理>注销账户");
                window.location.href="./tips.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./yhxxgl_zxzh.html","用户信息管理>注销账户");
                window.location.href="./tips.html";
            }
        },
        error: function(result) {
            tips("服务器异常!","./yhxxgl_zxzh.html","用户信息管理>注销账户");
            window.location.href="./tips.html";
        }
    });
}



function back(){
    window.location.href="./yhxxgl_zxzh.html"
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}