//2022 conbuproject hml.f5.si
   window.addEventListener('load', function(){
window.addEventListener("blur", blur, false);
window.addEventListener("focus", focu, false);
});
var ms = screen.width;
    var mms = window.innerWidth;
function blur(){
  mlve();
}
function focu(){
  if(ms==screen.width){
    ment();
  }else{
    debugger;
  }

}
    window.onresize = window_load;
function window_load() {
	 if(mms == window.innerWidth){
       ment();
  }else{
    mlve();
  }

}
function mlve(){
  var belement = document.createElement("blank");
  belement.id="bm";
  document.body.appendChild(belement); 
}
function ment(){
 document.getElementById("bm").remove();
}
window.document.onkeydown = function(event){
  if(event.key == "F12"){
    return false;
  };
  if(event.ctrlKey && event.key === "r"){
    return false;
  };
  if(event.key == "F5"){
    return false;
  };
  if(event.key == "K"){
    return false;
  };
    if(event.key == "u"){
    return false;
  };
      if(event.key == "s"){
        mlve();
    return false;
  };
  
};
document.body.oncontextmenu = function(){
 return false;
}
    var title1 = document.querySelector("#mtitle");
    var lod = document.querySelector("#lod");
    var img1 = document.querySelector("#acover");
    var cpg = document.querySelector("#cpg");
    var ida = location.search.substr(2);
    if (ida == "") {
      location.href = "/g";
    } else {
    }
    $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbzKO3RzIpPyGWdkPwJujDO-aF3AuH0q6NxRo_kqLVmRssRAgYNCvS28oWxtMlJ2NpNWLw/exec",
      data: { p1: ida },
    })
      .done(function (data) {
        var dd = JSON.parse(data);
      
      console.log(dd);
        if (dd[1] == "MNAME(あいう)") {
          location.href = "404";
        } else {
          var er = dd[2].substr(10,5);
          var author1 = dd[5].substr(1);
          var type1 = dd[5].substr(0,1);
          console.log(er);
          if(type1 == "c"){
          cpg.innerHTML="&copy"+er+" "+author1;
          }else if(type1 == "p"){
          cpg.innerHTML="&#8471"+er+" "+author1;
          }else{
            cpg.style.display="none";
          }
          img1.src = dd[4];
          title1.innerHTML = dd[1];
          var title = dd[1];
          var url = location.href;
          var image = dd[4];
          document.title = title;
          var fav = document.getElementById("fav");
          fav.href = dd[4];
          if(dd[6] == "none"){}else{
            var y2 = document.createElement("div");
            y2.className="flxy";
            document.getElementById("distribox").appendChild(y2);
            var pb = document.createElement("div");
            pb.innerHTML="表示";
            pb.className="pbtn";
            y2.appendChild(pb);
            var spp = document.createElement("div");
            spp.className="sservice";
            y2.appendChild(spp);
            pb.setAttribute("onclick","location.href='"+dd[6]+"';");
            var exp = document.createElement("div");
            spp.innerHTML="Webサイト";
            spp.className="ws";
            var infom2 = document.createElement("span");
            infom2.innerHTML="i";
            infom2.className="infoi";
            spp.appendChild(infom2);
            var infom1 = document.createElement("div");
            infom1.innerHTML="このリンクは所有者が設定したものです。<br>";
            infom1.className="ovl1";
            spp.appendChild(infom1);
          }
          if(dd[7] == "none"){}else{
            var y3 = document.createElement("div");
            y3.className="flxy";
            document.getElementById("distribox").appendChild(y3);
            var pb = document.createElement("div");
            pb.innerHTML="再生";
            pb.className="pbtn";
            y3.appendChild(pb);
            var spp = document.createElement("div");
            spp.className="sservice";
            y3.appendChild(spp);
            pb.setAttribute("onclick","location.href='"+dd[7]+"';");
            var exp = document.createElement("img");
            exp.src = "https://cdn.glitch.global/d57cd157-4c25-421e-9090-c85e3ba6bcab/yt_logo_rgb_light.png?v=1671233609138";
            exp.className="sservicecover";
            spp.appendChild(exp);
          }
            if(dd[8] == "none"){}else{
            var y4 = document.createElement("div");
            y4.className="flxy";
            document.getElementById("distribox").appendChild(y4);
            var pb = document.createElement("div");
            pb.innerHTML="再生";
            pb.className="pbtn";
            y4.appendChild(pb);
            var spp = document.createElement("div");
            spp.className="sservice";
            y4.appendChild(spp);
            pb.setAttribute("onclick","location.href='https://haruharumusic.netlify.app/?/"+dd[8]+"';");
            var exp = document.createElement("img");
            exp.src = "https://cdn.glitch.global/d57cd157-4c25-421e-9090-c85e3ba6bcab/haruharumusic.png?v=1671239162169";
            exp.className="sservicecoverh";
            spp.appendChild(exp);
          }
          var headData = document.head.children;
          for (var i = 0; i < headData.length; i++) {
            var propertyVal = headData[i].getAttribute("property");
            if (propertyVal !== null) {
              if (propertyVal.indexOf("og:title") != -1) {
                headData[i].setAttribute("content", title);
              }
              if (propertyVal.indexOf("og:url") != -1) {
                headData[i].setAttribute("content", url);
              }
              if (propertyVal.indexOf("og:image") != -1) {
                headData[i].setAttribute("content", image);
              }
            }
          }
        }
      })
      .fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert("読み込めませんでした", XMLHttpRequest, textStatus, errorThrown);
      });
    img1.crossOrigin = "";
    var ctx = null;
    img1.onload = function () {
      lod.style.display="none";
      var canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");
      ctx.drawImage(img1, 0, 0, img1.width, img1.height);
      var rrgb = ctx.getImageData(80, 80, 1, 1).data;
      var rgb =
        "rgb(" +
        parseInt(rrgb[0] - 0) +
        "," +
        parseInt(rrgb[1] - 0) +
        "," +
        parseInt(rrgb[2] - 20) +
        ")";
      document.body.style.backgroundColor = rgb;
      console.log(rgb);
    };
    