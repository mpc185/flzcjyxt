function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

function qd(){
    var index = window.sessionStorage.getItem("index");
    var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
    var yzcscid = scxxList[index].yzcscid; 
    // 发送请求
    var path = "http://localhost:8848/api/jgcfw/scxxgl/delete";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:yzcscid,
        success: function(result) {
            if(result.msg=="success"){
                scxxList.splice(index,1);
                window.sessionStorage.setItem("scxxList",JSON.stringify(scxxList));
                tips("删除成功！","./scxxgl_bg_many.html","加工厂服务>收菜信息管理>删除收菜信息")
                window.location.href="./scxxgl_tips.html";
            }
            if(result.msg=="dbException"){
                tips("数据库异常!","./scxxgl_bg_many.html","加工厂服务>收菜信息管理>删除收菜信息")
                window.location.href="./scxxgl_tips.html"
            }
        },
        error: function(result) {
            tips("服务器异常!","./scxxgl_bg_many.html","加工厂服务>收菜信息管理>删除收菜信息")
            window.location.href="./scxxgl_tips.html";
        }
    });
}


function backIndex(){
    window.location.href="../xtsy/index.html";
}
function back(){
    window.location.href="./scxxgl_bg_many.html";
}