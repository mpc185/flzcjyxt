function backIndex(){
    window.location.href="../xtsy/index.html"
}
function tips(tip,location,locationTip){
    window.sessionStorage.setItem("tip",tip)
    window.sessionStorage.setItem("location",location)
    window.sessionStorage.setItem("locationTip",locationTip)
}
function xz(){
    var table = document.getElementById("tableName").value;
    var path = "http://localhost:8848/api/xtwh/sjksj";
    if(table=="用户信息表"){
        window.location.href=path+"/yhxx";
    }
    if(table=="种植信息表"){
        window.location.href=path+"/zzxx";
    }
    if(table=="菜场信息表"){
        window.location.href=path+"/ccxx";
    }
    if(table=="生菜收菜信息表"){
        window.location.href=path+"/scscxx";
    }
    if(table=="加工厂信息表"){
        window.location.href=path+"/jgcxx";
    }
    if(table=="腌制菜收菜信息表"){
        window.location.href=path+"/yzcscxx";
    }
}