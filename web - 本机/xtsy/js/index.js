// 跳转到登录页面
function login(){
    var token=window.sessionStorage.getItem("token")
    if(token==null){
        window.location.href="../login/dl.html";
    }else{
        window.location.href="../login/tips_twoBtn.html";
    }
}
// 跳转到注册页面
function enroll(){
    window.location.href="../login/zc.html"
}
// 跳转到用户信息管理页面
function yhxxgl(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/yhxxgl";
    $.ajax({
        url: path,
        headers: {'token': token},
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        data:token,
        success: function(result) {
            if(result.msg=="success"){
                data = JSON.stringify(result.data);
                window.sessionStorage.setItem("userData",data);
                window.location.href="../yhxxgl/yhxxgl_xg.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
// 菜农服务>种植信息管理
function zzxxgl(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/cnfw/zzxxgl";
    $.ajax({
        url: path,
        headers: {'token': token},
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../cnfw/zzxxgl_sc.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
// 菜农服务>查看中间商信息
function ckzzsxx(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/cnfw/ckzjs";
    $.ajax({
        url: path,
        headers: {'token': token},
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("zjsyhxxList",JSON.stringify(result.data))
                window.location.href="../cnfw/ckzjsxx_yhxx.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}

// 中间商服务>菜场信息管理
function ccxxgl(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/zjsfw/ccxxgl";
    $.ajax({
        url: path,
        type: "post",
        headers: {'token': token},
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../zjsfw/ccxxgl_sc.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
// 中间商服务>收菜信息管理
function scscxxgl(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/zjsfw/scxxgl";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        headers: {'token': token},
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../zjsfw/scxxgl_sc.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
// 中间商服务>查看菜农信息
function ckcnxx(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/zjsfw/ckcnxx";
    $.ajax({
        url: path,
        headers: {'token': token},
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("cnyhxxList",JSON.stringify(result.data))
                window.location.href="../zjsfw/ckcnxx_bg.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
// 中间商服务>查看加工厂信息
function ckjgcxx(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/zjsfw/ckjgcxx";
    $.ajax({
        url: path,
        headers: {'token': token},
        type: "post",
        dataType: 'json',
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.sessionStorage.setItem("jgcxxList",JSON.stringify(result.data))
                window.location.href="../zjsfw/ckjgcxx_jgcyhxx.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}


// 加工厂服务>加工厂信息管理
function jgcxxgl(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/jgcfw/jgcxxgl";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        headers: {'token': token},
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../jgcfw/jgcxxgl_sc.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
// 加工厂服务>收菜信息管理
function yzcscxxgl(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/jgcfw/scxxgl";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        headers: {'token': token},
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../jgcfw/scxxgl_sc.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
// 系统维护>查看系统运行状态
function xtyxzt(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/xtwh/yxzt";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        headers: {'token': token},
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../xtwh/ckxtyxzt_cpu.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}

// 系统维护>数据备份
function sjbf(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/xtwh/sjksj";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        headers: {'token': token},
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../xtwh/sjksj_cx.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}

// 系统维护>管理用户信息
function glyhxx(){
    // 拿到前端存储的令牌
    var token=window.sessionStorage.getItem("token");
    // 发送请求
    var path = "http://localhost:8848/api/xtwh/glyhxx";
    $.ajax({
        url: path,
        type: "post",
        dataType: 'json',
        headers: {'token': token},
        contentType: "application/json;charset=utf-8", 
        success: function(result) {
            if(result.msg=="success"){
                window.location.href="../xtwh/yhxxgl_lxbgcx.html";
            }
            if(result.msg=="noLogin"){
                window.sessionStorage.setItem("tip","您未登录!");
                window.sessionStorage.setItem("location","./dl.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="noPermission"){
                window.sessionStorage.setItem("tip","您没有权限!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
            if(result.msg=="dbException"){
                window.sessionStorage.setItem("tip","数据库异常!");
                window.sessionStorage.setItem("location","../xtsy/index.html");
                window.location.href="../login/tips.html";
            }
        },
        error: function(result) {
            window.sessionStorage.setItem("tip","服务器异常!");
            window.sessionStorage.setItem("location","../xtsy/index.html");
            window.location.href="../login/tips.html";
        }
    });
}
