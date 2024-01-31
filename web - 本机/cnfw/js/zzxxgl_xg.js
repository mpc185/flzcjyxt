function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
// 显示修改前的数据
var index = window.sessionStorage.getItem("index");
var zzxxList = JSON.parse(window.sessionStorage.getItem("zzxxList"));
var zzxx = zzxxList[index];
var zzidDom=document.getElementById("zzid");
var zzndDom=document.getElementById("zznd");
var zzsjDom=document.getElementById("zzsj");
var scsjDom=document.getElementById("scsj");
var zzgmDom=document.getElementById("zzgm");
var zzdzDom=document.getElementById("zzdz");
zzidDom.value=zzxx.zzid;
zzndDom.value=zzxx.zznd;
zzsjDom.value=zzxx.zzsj;
scsjDom.value=zzxx.scsj;
zzgmDom.value=zzxx.zzgm;
zzdzDom.value=zzxx.zzdz;

function xg(){
    var zzid=zzidDom.value;
    var zznd=zzndDom.value;
    var zzsj=zzsjDom.value;
    var scsj=scsjDom.value;
    var zzgm=zzgmDom.value;
    var zzdz=zzdzDom.value;
    // 判断数据合法性
    // 有的字段未输入
    if(zznd==""||zzsj==""||zzgm==""||zzdz==""){
        tips("请上传完整信息！","./zzxxgl_xg.html","菜农服务>种植信息管理>修改种植信息");
        window.location.href="./zzxxgl_tips.html";
    }else{
        // 封装数据
        zzxx={
            zzid:zzid,
            zznd:zznd,
            zzsj:zzsj,
            scsj:scsj,
            zzgm:zzgm,
            zzdz:zzdz
        }
        var zzxx=JSON.stringify(zzxx);
        // 发送请求
        var path = "http://localhost:8848/api/cnfw/zzxxgl/xg";
        $.ajax({
            url: path,
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:zzxx,
            success: function(result) {
                if(result.msg=="success"){
                    zzxxList[index] = result.data;
                    window.sessionStorage.setItem("zzxxList",JSON.stringify(zzxxList));
                    tips("修改成功！","./zzxxgl_xg.html","菜农服务>种植信息管理>修改种植信息");
                    window.location.href="./zzxxgl_tips.html";
                }
                if(result.msg=="hasInfo"){
                    tips("已存在该种植信息!","./zzxxgl_xg.html","菜农服务>种植信息管理>修改种植信息");
                    window.location.href="./zzxxgl_tips.html";
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./zzxxgl_xg.html","菜农服务>种植信息管理>修改种植信息");
                    window.location.href="./zzxxgl_tips.html";
                }
            },
            error: function(result) {
                tips("服务器异常!","./zzxxgl_xg.html","菜农服务>种植信息管理>修改种植信息");
                window.location.href="./zzxxgl_tips.html";
            }
        });
    }
}



function back(){
    window.location.href="./zzxxgl_bg_many.html";
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}
