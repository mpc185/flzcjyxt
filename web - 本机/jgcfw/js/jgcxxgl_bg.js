function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
// 拿到前端存储的令牌
 var token=window.sessionStorage.getItem("token");
// 发送请求
var path = "http://localhost:8848/api/jgcfw/jgcxxgl/bg";
$.ajax({
url: path,
type: "post",
dataType: 'json',
contentType: "application/json;charset=utf-8", 
data:token,
success: function(result) {
    if(result.msg=="success"){
        var jgcxxList=result.data;
        window.sessionStorage.setItem("jgcxxList",JSON.stringify(jgcxxList));
        // 显示加工厂信息
        var tb = document.querySelector("tbody");
        for(var i=0;i<jgcxxList.length;i++){
            var jgcid = jgcxxList[i].jgcid;
            var jgcmc = jgcxxList[i].jgcmc;
            var jgcdz = jgcxxList[i].jgcdz;
            var data="<tr><td>"+jgcid+"</td><td>"+jgcmc+"</td><td>"+jgcdz+"</td><td>"+
                "<button class='b btn_xg' onclick='xg("+i+")'>修改</button>"+
                "<button class='b btn_sc' onclick='sc("+i+")'>删除</button>"+
                "<button class='b btn_xq' onclick='xq("+i+")'>详情</button></td></tr>";
            tb.innerHTML+=data;
        }
    }
    if(result.msg=="dbException"){
        tips("数据库异常!","./jgcxxgl_delete.html","加工厂服务>加工厂信息管理>维护加工厂信息")
        window.location.href="./jgcxxgl_tips.html"
    }
},
error: function(result) {
    tips("服务器异常!","./jgcxxgl_delete.html","加工厂服务>加工厂信息管理>维护加工厂信息")
    window.location.href="./jgcxxgl_tips.html";
}
});

function xg(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./jgcxxgl_bg.html")
    window.location.href="./jgcxxgl_xg.html" 
}
function sc(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./jgcxxgl_bg.html")
    window.location.href="./jgcxxgl_delete.html"
}
function xq(index){
    window.sessionStorage.setItem("index",index);
    window.sessionStorage.setItem("bgLocation","./jgcxxgl_bg.html")
    window.location.href="./jgcxxgl_xq.html"
}



function backIndex(){
    window.location.href="../xtsy/index.html"
}

