function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}

var index = window.sessionStorage.getItem("index");
var ccxxList = JSON.parse(window.sessionStorage.getItem("ccxxList"));
// 显示信息
var ccidDom = document.getElementById("ccid");
var ccgsDom = document.getElementById("ccgs");
var rngmDom = document.getElementById("rngm");
var ccdzDom = document.getElementById("ccdz");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
ccidDom.value=ccxxList[index].ccid;
ccgsDom.value=ccxxList[index].ccgs;
rngmDom.value=ccxxList[index].rngm;
ccdzDom.value=ccxxList[index].ccdz;
img1.src=ccxxList[index].img1;
img2.src=ccxxList[index].img2;
img3.src=ccxxList[index].img3;

// 修改选择图片的样式
$(document).ready(function(){
    $('#img1').click(function(){
        $('#ipt1').click();
    });
});
$(document).ready(function(){
    $('#img2').click(function(){
        $('#ipt2').click();
    });
});
$(document).ready(function(){
    $('#img3').click(function(){
        $('#ipt3').click();
    });
});
// 用户选择图片并显示
var formData = new FormData();
formData.set("img1","null");
formData.set("img2","null");
formData.set("img3","null");
// 图片1
var ipt1 = document.getElementById('ipt1');
ipt1.addEventListener('change', () => {
    var file = ipt1.files[0];
    if (file.type.startsWith('image/')) {
        formData.set('img1', file);    
        img1.src = URL.createObjectURL(file);
    } else {
        tips("选择的不是图片！","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }
});
// 图片2
var ipt2 = document.getElementById('ipt2');
ipt2.addEventListener('change', () => {
    var file = ipt2.files[0];
    if (file.type.startsWith('image/')) {
        formData.set('img2', file);    
        img2.src = URL.createObjectURL(file);
    } else {
        tips("选择的不是图片！","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }
});
// 图片3
var ipt3 = document.getElementById('ipt3');
ipt3.addEventListener('change', () => {
    var file = ipt3.files[0];
    if (file.type.startsWith('image/')) {
        formData.set('img3', file);    
        img3.src = URL.createObjectURL(file);
    } else {
        tips("选择的不是图片！","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }
});

function xg(){
    // 收集其他信息
    var ccgs=ccgsDom.value;
    var rngm=rngmDom.value;
    var ccdz=ccdzDom.value;
    // 检验数据合法性
    if(ccgs==""||rngm==""||ccdz==""){
        tips("请输入完整信息！","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }else{
        // 封装数据
        formData.set("ccid",ccxxList[index].ccid);
        formData.set("ccgs",ccgs);
        formData.set("rngm",rngm);
        formData.set('ccdz',ccdz);
        // 发送请求
       var path = "http://localhost:8848/api/zjsfw/ccxxgl/xg";
       $.ajax({
           url: path,
           type: "post",
           contentType: false,
           processData: false,
           data:formData,
           success: function(result) {
               if(result.msg=="success"){
                    ccxxList[index]=result.data;
                    window.sessionStorage.setItem("ccxxList",JSON.stringify(ccxxList));
                    tips("修改成功!","./ccxxgl_bg_one.html","中间商服务>菜场信息管理>修改菜场信息");
                    window.location.href="./ccxxgl_tips.html";
               }
               if(result.msg=="hasInfo"){
                   tips("已存在该菜场信息!","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
                   window.location.href="./ccxxgl_tips.html";
               }
               if(result.data=="saveException"){
                    tips("图片上传异常!","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
                    window.location.href="./ccxxgl_tips.html";
               }
               if(result.msg=="dbException"){
                   tips("数据库异常!","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
                   window.location.href="./ccxxgl_tips.html";
               }
           },
           error: function(result) {
               tips("服务器异常!","./ccxxgl_xg.html","中间商服务>菜场信息管理>修改菜场信息");
               window.location.href="./ccxxgl_tips.html";
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