function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function qd(){
    var index = window.sessionStorage.getItem("index");
    var ccxxList = JSON.parse(window.sessionStorage.getItem("ccxxList"));
    var ccid = ccxxList[index].ccid;
    // 发送请求
    var path = "http://localhost:8848/api/zjsfw/ccxxgl/delete";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:ccid,
        success: function(result) {
            if(result.msg=="success"){
                ccxxList.splice(index,1);
                window.sessionStorage.setItem("ccxxList",JSON.stringify(ccxxList));
                tips("删除成功！","./ccxxgl_bg_one.html","中间商服务>菜场信息管理>删除菜场信息")
                window.location.href="./ccxxgl_tips.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./ccxxgl_delete.html","中间商服务>菜场信息管理>删除菜场信息")
                window.location.href="./ccxxgl_tips.html"
            }
        },
        error: function(result) {
            tips("服务器异常!","./ccxxgl_delete.html","中间商服务>菜场信息管理>删除菜场信息")
            window.location.href="./ccxxgl_tips.html";
        }
    });

}

function backIndex(){
    window.location.href="../xtsy/index.html"
}
function back(){
    window.location.href = window.sessionStorage.getItem("bgLocation");
}