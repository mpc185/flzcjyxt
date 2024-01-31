var index = window.sessionStorage.getItem("index");
var jgcxxList = JSON.parse(window.sessionStorage.getItem("jgcxxList"));
var jgcxx = jgcxxList[index];
var jgcidDom=document.getElementById("jgcid");
var yhidDom=document.getElementById("yhid");
var jgcmcDom=document.getElementById("jgcmc");
var jgcdzDom=document.getElementById("jgcdz");
var jgcjjDom=document.getElementById("jgcjj");
jgcidDom.innerHTML=jgcxx.jgcid;
yhidDom.innerHTML=jgcxx.yhid;
jgcmcDom.innerHTML=jgcxx.jgcmc;
jgcdzDom.innerHTML=jgcxx.jgcdz;
jgcjjDom.innerHTML=jgcxx.jgcjj;

function back(){
    window.location.href=window.sessionStorage.getItem("bgLocation");
}
function backIndex(){
    window.location.href="../xtsy/index.html";
}