var data = JSON.parse(window.sessionStorage.getItem("userData"))
var yhid = document.getElementById("yhid")
var yhzsxm = document.getElementById("yhzsxm")
var lxdh = document.getElementById("lxdh")
var yhlx = document.getElementById("yhlx")
var yhdz =document.getElementById("yhdz")

yhid.innerHTML=data.yhid
yhzsxm.innerHTML=data.yhzsxm
lxdh.innerHTML=data.lxdh
yhlx.innerHTML=data.yhlx
yhdz.innerHTML=data.yhdz


function zx(){
    window.location.href="yhxxgl_qrzx.html"
}

function backIndex(){
    window.location.href="../xtsy/index.html"
} 