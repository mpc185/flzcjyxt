var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
var tb=document.querySelector("tbody")
for(var i=0;i<scxxList.length;i++){
    var scid = scxxList[i].yzcscid;
    var scnd = scxxList[i].yzcscnd;
    var scsj = scxxList[i].yzcscsj;
    var scbj = scxxList[i].yzcscbj;
    var data="<tr><td>"+scid+"</td><td>"+scnd+"</td><td>"+scsj+"</td><td>"+scbj+"</td></tr>";
    tb.innerHTML += data;
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}