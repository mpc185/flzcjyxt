function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function backIndex(){
    window.location.href="../xtsy/index.html"
}

function sc(){
    var jgcmc = document.getElementById("jgcmc").value;
    var jgcdz = document.getElementById("jgcdz").value;
    var jgcjj = document.getElementById("jgcjj").value;
    // 判断数据是否为空
    if(jgcmc==""||jgcdz==""||jgcjj==""){
        tips("请录入完整信息!","./jgcxxgl_sc.html","加工厂服务>加工厂信息管理>上传加工厂信息")
        window.location.href="./jgcxxgl_tips.html"
    }else{
        // 拿到前端存储的令牌
        var token=window.sessionStorage.getItem("token");
        // 封装数据
        var jgcxx={
            jgcid:null,
            yhid:token,
            jgcmc:jgcmc,
            jgcdz:jgcdz,
            jgcjj:jgcjj
        }
        var jgcxx = JSON.stringify(jgcxx)
        var path = "http://localhost:8848/api/jgcfw/jgcxxgl/sc";
        $.ajax({
            url: path,
            type: "post",
            dataType: 'json',
            contentType: "application/json;charset=utf-8", 
            data:jgcxx,
            success: function(result) {
                if(result.msg=="success"){
                    data = JSON.stringify(result.data);
                    window.sessionStorage.setItem("jgcxxList",data);
                    tips("上传成功!","./jgcxxgl_scbg.html","加工厂服务>加工厂信息管理>上传加工厂信息")
                    window.location.href="./jgcxxgl_tips.html";
                }
                if(result.msg=="hasInfo"){
                    tips("已存在该种植信息!","./jgcxxgl_sc.html","加工厂服务>加工厂信息管理>上传加工厂信息")
                    window.location.href="./jgcxxgl_tips.html"
                }
                if(result.msg=="dbException"){
                    tips("数据库异常!","./jgcxxgl_sc.html","加工厂服务>加工厂信息管理>上传加工厂信息")
                    window.location.href="./jgcxxgl_tips.html"
                }
            },
            error: function(result) {
                tips("服务器异常!","./jgcxxgl_sc.html","加工厂服务>加工厂信息管理>上传加工厂信息")
                window.location.href="./jgcxxgl_tips .html";
            }
        });
    }
}