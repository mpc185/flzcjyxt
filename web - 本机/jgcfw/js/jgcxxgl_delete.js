function backIndex(){
    window.location.href="../xtsy/index.html"
}
function back(){
    window.location.href = window.sessionStorage.getItem("bgLocation");
}
function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function qd(){
    var index = window.sessionStorage.getItem("index");
    var jgcxxList = JSON.parse(window.sessionStorage.getItem("jgcxxList"));
    var jgcid = jgcxxList[index].jgcid;
    // 发送请求
    var path = "http://localhost:8848/api/jgcfw/jgcxxgl/delete";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:jgcid,
        success: function(result) {
            if(result.msg=="success"){
                jgcxxList.splice(index,1);
                window.sessionStorage.setItem("jgcxxList",JSON.stringify(jgcxxList));
                tips("删除成功！","./jgcxxgl_scbg.html","加工厂服务>加工厂信息管理>删除加工厂信息")
                window.location.href="./jgcxxgl_tips.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./jgcxxgl_delete.html","加工厂服务>加工厂信息管理>删除加工厂信息")
                window.location.href="./jgcxxgl_tips.html"
            }
        },
        error: function(result) {
            tips("服务器异常!","./jgcxxgl_delete.html","加工厂服务>加工厂信息管理>删除加工厂信息")
            window.location.href="./jgcxxgl_tips.html";
        }
    });

}