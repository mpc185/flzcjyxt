function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
// 显示修改前的数据
var index = window.sessionStorage.getItem("index");
var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
var scxx = scxxList[index];
var scscidDom=document.getElementById("scscid");
var scscndDom=document.getElementById("scscnd");
var scscsjDom=document.getElementById("scscsj");
var scscbjDom=document.getElementById("scscbj");
scscidDom.value=scxx.scscid;
scscndDom.value=scxx.scscnd;
scscsjDom.value=scxx.scscsj;
scscbjDom.value=scxx.scscbj;


function xg(){
    var scscid=scscidDom.value;
    var scscnd=scscndDom.value;
    var scscsj=scscsjDom.value;
    var scscbj=scscbjDom.value;
    // 判断数据合法性
    // 有的字段未输入
    if(scscnd==""||scscsj==""||scscbj==""){
        tips("请上传完整信息！","./scxxgl_xg.html","中间商服务>收菜信息管理>修改收菜信息");
        window.location.href="./scxxgl_tips.html";
    }else{
        // 封装数据
        var scscxx={
            scscid:scscid,
            scscnd:scscnd,
            scscsj:scscsj,
            scscbj:scscbj,
        }
        var scscxx=JSON.stringify(scscxx);
        // 发送请求
        var path = "http://localhost:8848/api/zjsfw/scxxgl/xg";
        $.ajax({
            url: path,
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:scscxx,
            success: function(result) {
                if(result.msg=="success"){
                    scxxList[index] = result.data;
                    window.sessionStorage.setItem("scxxList",JSON.stringify(scxxList));
                    tips("修改成功！","./scxxgl_xg.html","中间商服务>收菜信息管理>修改收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="hasInfo"){
                    tips("已存在该种植信息!","./scxxgl_xg.html","中间商服务>收菜信息管理>修改收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./scxxgl_xg.html","中间商服务>收菜信息管理>修改收菜信息");
                    window.location.href="./scxxgl_tips.html";
                }
            },
            error: function(result) {
                tips("服务器异常!","./scxxgl_xg.html","中间商服务>收菜信息管理>修改收菜信息");
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
