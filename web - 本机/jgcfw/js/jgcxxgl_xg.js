function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var index = window.sessionStorage.getItem("index");
var jgcxxList = JSON.parse(window.sessionStorage.getItem("jgcxxList"));
// 显示信息
var jgcidDom = document.getElementById("jgcid");
var yhidDom = document.getElementById("yhid");
var jgcmcDom = document.getElementById("jgcmc");
var jgcdzDom = document.getElementById("jgcdz");
var jgcjjDom = document.getElementById("jgcjj");
jgcidDom.value=jgcxxList[index].jgcid;
yhidDom.value=jgcxxList[index].yhid;
jgcmcDom.value=jgcxxList[index].jgcmc;
jgcdzDom.value=jgcxxList[index].jgcdz;
jgcjjDom.value=jgcxxList[index].jgcjj;


function xg(){
    // 收集其他信息
    var jgcid = jgcidDom.value;
    var jgcmc=jgcmcDom.value;
    var jgcdz=jgcdzDom.value;
    var jgcjj=jgcjjDom.value;
    // 检验数据合法性
    if(jgcmc==""||jgcdz==""||jgcjj==""){
        tips("请输入完整信息！","./jgcxxgl_xg.html","加工厂服务>加工厂信息管理>修改加工厂信息");
        window.location.href="./jgcxxgl_tips.html";
    }else{
        // 封装数据
        var jgcxx={
            jgcid:jgcid,
            jgcmc:jgcmc,
            jgcdz:jgcdz,
            jgcjj:jgcjj
        }
        jgcxx = JSON.stringify(jgcxx);
        // 发送请求
       var path = "http://localhost:8848/api/jgcfw/jgcxxgl/xg";
       $.ajax({
            url: path,
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:jgcxx,
            success: function(result) {
               if(result.msg=="success"){
                    jgcxxList[index]=result.data;
                    window.sessionStorage.setItem("jgcxxList",JSON.stringify(jgcxxList));
                    tips("修改成功!","./jgcxxgl_scbg.html","加工厂服务>加工厂信息管理>修改加工厂信息");
                    window.location.href="./jgcxxgl_tips.html";
               }
               if(result.msg=="hasInfo"){
                   tips("已存在该加工厂信息!","./jgcxxgl_xg.html","加工厂服务>加工厂信息管理>修改加工厂信息");
                   window.location.href="./jgcxxgl_tips.html";
               }
               if(result.msg=="dbException"){
                   tips("数据库异常!","./jgcxxgl_xg.html","加工厂服务>加工厂信息管理>修改加工厂信息");
                   window.location.href="./jgcxxgl_tips.html";
               }
           },
           error: function(result) {
               tips("服务器异常!","./jgcxxgl_xg.html","加工厂服务>加工厂信息管理>修改加工厂信息");
               window.location.href="./jgcxxgl_tips.html";
           }
       });
    }

}



function backIndex(){
    window.location.href="../xtsy/index.html"
}
function back(){
    window.location.href = window.sessionStorage.getItem("bgLocation");
}