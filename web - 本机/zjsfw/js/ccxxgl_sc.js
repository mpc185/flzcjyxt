function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}

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
// 图片1
var ipt1 = document.getElementById('ipt1');
var img1 = document.getElementById('img1');
ipt1.addEventListener('change', () => {
    var file = ipt1.files[0];
    if (file.type.startsWith('image/')) {
        formData.set('img1', file);    
        img1.src = URL.createObjectURL(file);
    } else {
        tips("选择的不是图片！","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }
});
// 图片2
var ipt2 = document.getElementById('ipt2');
var img2 = document.getElementById('img2');
ipt2.addEventListener('change', () => {
    var file = ipt2.files[0];
    if (file.type.startsWith('image/')) {
        formData.set('img2', file);    
        img2.src = URL.createObjectURL(file);
    } else {
        tips("选择的不是图片！","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }
});
// 图片3
var ipt3 = document.getElementById('ipt3');
var img3 = document.getElementById('img3');
ipt3.addEventListener('change', () => {
    var file = ipt3.files[0];
    if (file.type.startsWith('image/')) {
        formData.set('img3', file);    
        img3.src = URL.createObjectURL(file);
    } else {
        tips("选择的不是图片！","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }
});

function sc(){
    // 收集其他表单的数据
    var ccgs = document.getElementById("ccgs").value;
    var rngm = document.getElementById("rngm").value;
    var ccdz = document.getElementById("ccdz").value;
    // 判断数据合法性
    if (ccgs==""||rngm==""||ccdz==""||formData.get("img1")==null||formData.get("img2")==null||formData.get("img3")==null){
        tips("请输入完整信息！","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
        window.location.href="./ccxxgl_tips.html";
    }else{
        // 封装数据
        formData.set("ccgs",ccgs);
        formData.set("rngm",rngm);
        formData.set("ccdz",ccdz);
        // 拿到前端存储的令牌
        var token=window.sessionStorage.getItem("token");
        formData.set("token",token);
       // 发送请求
       var path = "http://localhost:8848/api/zjsfw/ccxxgl/sc";
       $.ajax({
           url: path,
           type: "post",
           contentType: false,
           processData: false,
           data:formData,
           success: function(result) {
               if(result.msg=="success"){
                    data = JSON.stringify(result.data);
                    window.sessionStorage.setItem("ccxxList",data);
                    tips("上传成功!","./ccxxgl_bg_one.html","中间商服务>菜场信息管理>上传菜场信息");
                    window.location.href="./ccxxgl_tips.html";
               }
               if(result.msg=="hasInfo"){
                   tips("已存在该菜场信息!","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
                   window.location.href="./ccxxgl_tips.html";
               }
               if(result.data=="saveException"){
                    tips("图片上传异常!","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
                    window.location.href="./ccxxgl_tips.html";
               }
               if(result.msg=="dbException"){
                   tips("数据库异常!","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
                   window.location.href="./ccxxgl_tips.html";
               }
           },
           error: function(result) {
               tips("服务器异常!","./ccxxgl_sc.html","中间商服务>菜场信息管理>上传菜场信息");
               window.location.href="./ccxxgl_tips.html";
           }
       });

    }
}
