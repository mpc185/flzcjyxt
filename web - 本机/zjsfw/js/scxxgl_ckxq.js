var scxxList = JSON.parse(window.sessionStorage.getItem("scxxList"));
var tb=document.querySelector("tbody")
for(var i=0;i<scxxList.length;i++){
    var scscid = scxxList[i].scscid;
    var scscnd = scxxList[i].scscnd;
    var scscsj = scxxList[i].scscsj;
    var scscbj = scxxList[i].scscbj;
    var data="<tr><td>"+scscid+"</td><td>"+scscnd+"</td><td>"+scscsj+"</td><td>"+scscbj+"</td></tr>";
    tb.innerHTML += data;
}

function backIndex(){
    window.location.href="../xtsy/index.html"
}