function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}


// 拿到前端存储的令牌
var token=window.sessionStorage.getItem("token");
// 发送请求
var path = "http://localhost:8848/api/zjsfw/ccxxgl/bg";
$.ajax({
    url: path,
    type: "post",
    dataType: 'json',
    contentType: "application/json;charset=utf-8", 
    data:token,
    success: function(result) {
        if(result.msg=="success"){
            var ccxxList = result.data;
            // 显示菜场信息
            var tb = document.querySelector("tbody");
            for(var i=0;i<ccxxList.length;i++){
                var ccid = ccxxList[i].ccid;
                var ccgs = ccxxList[i].ccgs;
                var rngm = ccxxList[i].rngm;
                var data="<tr><td>"+ccid+"</td><td>"+ccgs+"</td><td>"+rngm+"</td><td>"+
                    "<button class='b btn_xg' onclick='xg("+i+")'>修改</button>"+
                    "<button class='b btn_sc' onclick='sc("+i+")'>删除</button>"+
                    "<button class='b btn_xq' onclick='xq("+i+")'>详情</button></td></tr>";
                tb.innerHTML+=data;
            }
            window.sessionStorage.setItem("ccxxList",JSON.stringify(ccxxList));
        }
        if(result.msg=="dbException"){
            tips("数据库异常!","./ccxxgl_bg_many.html","中间商服务>菜场信息管理>删除菜场信息")
            window.location.href="./ccxxgl_tips.html"
        }
    },
    error: function(result) {
        tips("服务器异常!","./ccxxgl_bg_many.html","中间商服务>菜场信息管理>删除菜场信息")
        window.location.href="./ccxxgl_tips.html";
    }
});

function backIndex(){
    window.location.href="../xtsy/index.html"
}
function xg(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./ccxxgl_bg_many.html")
    window.location.href="./ccxxgl_xg.html" 
}
function sc(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./ccxxgl_bg_many.html")
    window.location.href="./ccxxgl_delete.html"
}
function xq(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./ccxxgl_bg_many.html")
    window.location.href="./ccxxgl_xq.html"
}
