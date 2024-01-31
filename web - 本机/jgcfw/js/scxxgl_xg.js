function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
// 显示修改前的数据
var index = window.sessionStorage.getItem("index");
var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
var scxx = scxxList[index];
var scidDom=document.getElementById("yzcscid");
var scndDom=document.getElementById("yzcscnd");
var scsjDom=document.getElementById("yzcscsj");
var scbjDom=document.getElementById("yzcscbj");
scidDom.value=scxx.yzcscid;
scndDom.value=scxx.yzcscnd;
scsjDom.value=scxx.yzcscsj;
scbjDom.value=scxx.yzcscbj;


function xg(){
    var scid=scidDom.value;
    var scnd=scndDom.value;
    var scsj=scsjDom.value;
    var scbj=scbjDom.value;
    // 判断数据合法性
    if(scnd==""||scsj==""||scbj==""){
        tips("请上传完整信息！","./scxxgl_xg.html","加工厂服务>收菜信息管理>修改收菜信息");
        window.location.href="./scxxgl_tips.html";
    }else{
        // 封装数据
        var yzcscxx={
            yzcscid:scid,
            yzcscnd:scnd,
            yzcscsj:scsj,
            yzcscbj:scbj,
        }
        var yzcscxx=JSON.stringify(yzcscxx);
        // 发送请求
        var path = "http://localhost:8848/api/jgcfw/scxxgl/xg";
        $.ajax({
            url: path,
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:yzcscxx,
            success: function(result) {
                if(result.msg=="success"){
                    scxxList[index] = result.data;
                    window.sessionStorage.setItem("scxxList",JSON.stringify(scxxList));
                    tips("修改成功！","./scxxgl_xg.html","加工厂服务>收菜信息管理>修改收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="hasInfo"){
                    tips("已存在该收菜信息!","./scxxgl_xg.html","加工厂服务>收菜信息管理>修改收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./scxxgl_xg.html","加工厂服务>收菜信息管理>修改收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
            },
            error: function(result) {
                tips("服务器异常!","./scxxgl_xg.html","加工厂服务>收菜信息管理>修改收菜信息");
                window.location.href="./scxxgl_tips.html";
            }
        });
    }
}



function back(){
    window.location.href="./scxxgl_bg_many.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}
