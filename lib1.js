//2022~2023 Conbuproject hml.f5.si
window.addEventListener("load",function(){window.addEventListener("blur",blur,!1);window.addEventListener("focus",focu,!1)});var ms=screen.width;var mms=window.innerWidth;function blur(){mlve()} function focu(){if(ms==screen.width){ment()}else{}} window.onresize=window_load;function window_load(){if(mms==window.innerWidth){ment()}else{mlve()}} function mlve(){var a=document.createElement("blank");a.id="bm";document.body.appendChild(a)} function ment(){document.getElementById("bm").remove()} window.document.onkeydown=function(a){if(a.key=="F12"){return!1} if(a.ctrlKey&&a.key==="r"){return!1} if(a.key=="F5"){return!1} if(a.key=="K"){return!1} if(a.key=="u"){return!1} if(a.key=="s"){mlve();return!1}};document.body.oncontextmenu=function(){return!1};var title1=document.querySelector("#mtitle");var lod=document.querySelector("#lod");var img1=document.querySelector("#acover");var cpg=document.querySelector("#cpg");var ida=location.search.substr(2);if(ida==""){location.href="/g"}else{$.ajax({type:"POST",url:"https://script.google.com/macros/s/AKfycbyCAeXmOPCBwtgkvNcRWmAWI46X-UgLNyuD-nxog1f6xKv6NmVgsLm9oaFxuTBuLWL2RQ/exec",data:{p1:ida},async:!1,}).done(function(u){var r=JSON.parse(u);console.log(r);if(r[1]=="MNAME(あいう)"){location.href="404"}else{var t=r[2].substr(10,5);var j=r[5].substr(1);var q=r[5].substr(0,1);console.log(t);if(q=="c"){cpg.innerHTML="&copy"+t+" "+j}else{if(q=="p"){cpg.innerHTML="&#8471"+t+" "+j}else{cpg.style.display="none"}} img1.src=r[4];title1.innerHTML=r[1];var v=r[1];var g=location.href;var n=r[4];document.title=v;var s=document.getElementById("fav");s.href=r[4];if(r[6]=="none"){}else{var e=document.createElement("div");e.className="flxy";document.getElementById("distribox").appendChild(e);var a=document.createElement("div");a.innerHTML="表示";a.className="pbtn";e.appendChild(a);var k=document.createElement("div");k.className="sservice";e.appendChild(k);a.setAttribute("onclick","location.href='"+r[6]+"';");var h=document.createElement("div");k.innerHTML="Webサイト";k.className="ws";var l=document.createElement("span");l.innerHTML="i";l.className="infoi";k.appendChild(l);var m=document.createElement("div");m.innerHTML="このリンクは所有者が設定したものです。<br>";m.className="ovl1";k.appendChild(m)} if(r[7]=="none"){}else{var d=document.createElement("div");d.className="flxy";document.getElementById("distribox").appendChild(d);var a=document.createElement("div");a.innerHTML="再生";a.className="pbtn";d.appendChild(a);var k=document.createElement("div");k.className="sservice";d.appendChild(k);a.setAttribute("onclick","location.href='"+r[7]+"';");var h=document.createElement("img");h.src="https://cdn.glitch.global/d57cd157-4c25-421e-9090-c85e3ba6bcab/yt_logo_rgb_light.png?v=1671233609138";h.className="sservicecover";k.appendChild(h)} if(r[8]=="none"){}else{var c=document.createElement("div");c.className="flxy";document.getElementById("distribox").appendChild(c);var a=document.createElement("div");a.innerHTML="再生";a.className="pbtn";c.appendChild(a);var k=document.createElement("div");k.className="sservice";c.appendChild(k);a.setAttribute("onclick","location.href='https://haruharumusic.f5.si/#"+r[8]+"';");var h=document.createElement("img");h.src="https://cdn.glitch.global/d57cd157-4c25-421e-9090-c85e3ba6bcab/haruharumusic.png?v=1671239162169";h.className="sservicecoverh";k.appendChild(h)} if(r[9]=="none"){}else{var b=document.createElement("div");b.className="flxy";document.getElementById("distribox").appendChild(b);var a=document.createElement("div");a.innerHTML="追加";a.className="pbtn";b.appendChild(a);var k=document.createElement("div");k.className="sservice";b.appendChild(k);a.setAttribute("onclick","location.href='"+r[9]+"';");var h=document.createElement("img");h.src="https://cdn.glitch.global/d57cd157-4c25-421e-9090-c85e3ba6bcab/21_LOA_logo_JP_GR_01.png?v=1672283795815";h.className="sservicecoverl";k.appendChild(h)}if(r[11]=="none"){}else{var b=document.createElement("div");b.className="flxy";document.getElementById("distribox").appendChild(b);var a=document.createElement("div");a.innerHTML="フォロー";a.className="qbtn";b.appendChild(a);var k=document.createElement("div");k.className="sserviceinsta";b.appendChild(k);a.setAttribute("onclick","location.href='https://www.instagram.com/"+r[11].substr(1)+"';");var h=document.createElement("img");h.src="https://cdn.glitch.global/d57cd157-4c25-421e-9090-c85e3ba6bcab/Instagram_Glyph_Gradient%20copy.jpg?v=1680919551498";h.className="sservicecoveri";k.appendChild(h);var p10=document.createElement("p");p10.innerHTML="Instagram";p10.className="sservicecovertext2";k.appendChild(p10)} if(r[11]=="none"){}else{location.href="profile?/@"+ida} var f=document.head.children;for(var o=0;o<f.length;o++){var p=f[o].getAttribute("property");if(p!==null){if(p.indexOf("og:title")!=-1){f[o].setAttribute("content",v)} if(p.indexOf("og:url")!=-1){f[o].setAttribute("content",g)} if(p.indexOf("og:image")!=-1){f[o].setAttribute("content",n)}}}}}).fail(function(a,c,b){alert("読み込めませんでした",a,c,b)})} img1.crossOrigin="";var ctx=null;img1.onload=function(){lod.style.display="none";var c=document.createElement("canvas");ctx=c.getContext("2d");ctx.drawImage(img1,0,0,img1.width,img1.height);var a=ctx.getImageData(80,80,1,1).data;var b="rgb("+parseInt(a[0]-0)+","+parseInt(a[1]-0)+","+parseInt(a[2]-20)+")";document.body.style.backgroundColor=b;console.log(b)}
