(this["webpackJsonptest-thandhuran"]=this["webpackJsonptest-thandhuran"]||[]).push([[0],{128:function(e,a,t){e.exports=t(160)},159:function(e,a,t){},160:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(13),r=t.n(l),c=t(50),o=t(37),m=t(78),s=t(77),u=t(40),d=t(17),p=t(2),g=function(){return sessionStorage.getItem("token")||null};var h=function(e){var a=e.component,t=Object(p.a)(e,["component"]);return i.a.createElement(d.b,Object.assign({},t,{render:function(e){return g()?i.a.createElement(a,e):i.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var b=function(e){var a=e.component,t=Object(p.a)(e,["component"]);return i.a.createElement(d.b,Object.assign({},t,{render:function(e){return g()?i.a.createElement(d.a,{to:{pathname:"/dashboard"}}):i.a.createElement(a,e)}}))},E=t(206),v=Object(E.a)({appMain:{background:"../assets/awalmula.png",paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",alignItems:"center:",width:"100%",height:"400px"}});var y=function(e){var a=v(),t=function(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a.appMain},"Welcome to Thandhuran",i.a.createElement("br",null),i.a.createElement("input",{type:"button",value:null!==t?"Signout":"Signin",onClick:null!==t?function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("user"),e.history.push("/")}:function(){e.history.push("/Login")}})))},k=t(213),P=t(214),f=t(215),S=t(210),O=t(234),w=t(208),x=t(216),D=t(6),C=t(14),j=t(236),T=t(211),N=Object(E.a)({list:{width:250},linkText:{textDecoration:"none",textTransform:"uppercase",color:"black"}}),H=function(e){var a,t=e.navLinks,l=N(),r=Object(n.useState)({right:!1}),c=Object(C.a)(r,2),o=c[0],m=c[1],s=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&m(Object(D.a)({},e,a))}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a,{edge:"start","aria-label":"menu",onClick:s("right",!0)},i.a.createElement(T.a,{fontSize:"large",style:{color:"white"}})),i.a.createElement(j.a,{anchor:"right",open:o.right,onOpen:s("right",!0),onClose:s("right",!1)},(a="right",i.a.createElement("div",{className:l.list,role:"presentation",onClick:s(a,!1),onKeyDown:s(a,!1)},i.a.createElement(w.a,{component:"nav"},t.map((function(e){var a=e.title,t=e.path;return i.a.createElement("div",null,i.a.createElement(u.b,{to:t,className:l.linkText},a))})))))))},B=Object(E.a)({navbarDisplayFlex:{display:"flex",justifyContent:"space-between"},navDisplayFlex:{display:"flex",justifyContent:"space-between"},linkText:{textDecoration:"none",textTransform:"uppercase",color:"white"}}),A=[{title:"QR ----     |",path:"/QRReader"},{title:"Asset ----     |",path:"/AssetDistribution"},{title:"Infrastructure ----    | ",path:"/InfrastructureTransaction"},{title:"Landstructure ----     |",path:"/LandstructureTransaction"},{title:"Tree Management ----    | ",path:"/TreeManagementTransaction"},{title:"Fleet",path:"/LandstructureTransaction"}];var L=function(e){var a=B();return i.a.createElement(k.a,{position:"static"},i.a.createElement(P.a,null,i.a.createElement(f.a,{maxWidth:"md",className:a.navbarDisplayFlex},i.a.createElement(S.a,{href:"/",edge:"start",color:"inherit","aria-label":"home"},i.a.createElement(x.a,{fontSize:"large"})),i.a.createElement(O.a,{smDown:!0},i.a.createElement(w.a,{component:"nav","aria-labelledby":"main navigation",className:a.navDisplayFlex},A.map((function(e){var t=e.title,n=e.path;return i.a.createElement("div",null,i.a.createElement(u.b,{to:n,className:a.linkText},t))})))),i.a.createElement(O.a,{mdUp:!0},i.a.createElement(H,{navLinks:A})))))},R=t(104),I=t.n(R);var q=function(e){var a=Object(n.useState)(e),t=Object(C.a)(a,2),i=t[0],l=t[1];return{value:i,onChange:function(e){l(e.target.value)}}},M=function(e){var a=Object(n.useState)(!1),t=Object(C.a)(a,2),l=t[0],r=t[1],c=q(""),o=q(""),m=Object(n.useState)(null),s=Object(C.a)(m,2),u=s[0],d=s[1];return i.a.createElement("div",null,"Login",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",null,"Username",i.a.createElement("br",null),i.a.createElement("input",Object.assign({type:"text"},c,{autoComplete:"new-password"}))),i.a.createElement("div",{style:{marginTop:10}},"Password",i.a.createElement("br",null),i.a.createElement("input",Object.assign({type:"password"},o,{autoComplete:"new-password"}))),u&&i.a.createElement(i.a.Fragment,null,i.a.createElement("small",{style:{color:"red"}},u),i.a.createElement("br",null)),i.a.createElement("br",null),i.a.createElement("input",{type:"button",value:l?"Loading...":"Login",onClick:function(){d(null),r(!0),I.a.post("http://localhost:4000/users/signin",{username:c.value,password:o.value}).then((function(a){var t,n;r(!1),t=a.data.token,n=a.data.user,sessionStorage.setItem("token",t),sessionStorage.setItem("user",JSON.stringify(n)),e.history.push("/QRReader")})).catch((function(e){r(!1),401===e.response.status?d(e.response.data.message):d("Something went wrong. Please try again later.")}))},disabled:l}),i.a.createElement("br",null))},K=t(105),F=t.n(K),z=t(107),J=(Object(z.a)(),Object(E.a)({appPlanet:{paddingLeft:"2px",paddingRight:"2px",justifyContent:"center",alignItems:"center:",color:"#000000",width:"70%"}}));var G=function(e){var a=Object(n.useState)("No Result"),t=Object(C.a)(a,2),l=t[0],r=t[1],c=J();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:c.appPlanet},i.a.createElement(F.a,{delay:500,onError:function(e){console.error(e)},onScan:function(a){a&&(r(a+" result"),e.history.push("/AssetDistribution"))},style:{width:"100%",alignItems:"center",paddingLeft:"0px",paddingRight:"0px"}}),i.a.createElement("p",null,l)))},W=t(230),U=t(84),Q=t.n(U),V=t(108),Z=t.n(V),_=t(232),X=t(233),Y=t(217),$=function(e){switch(e.tableGroup[0].groupname){case"Materials":return i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Actvity"),i.a.createElement("th",null,"Material"),i.a.createElement("th",null,"Quantity"),i.a.createElement("th",null,"Unit")));case"Tools":return i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Actvity"),i.a.createElement("th",null,"Tool"),i.a.createElement("th",null,"Quantity"),i.a.createElement("th",null,"Unit")));case"Workers":return i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Actvity"),i.a.createElement("th",null,"Skill"),i.a.createElement("th",null,"Volume"),i.a.createElement("th",null,"Unit")));default:return i.a.createElement("h1",null,"No project match")}},ee=function(e){switch(e.tableGroup[0].groupname){case"Materials":var a=e.characterData.map((function(e,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,e.date),i.a.createElement("td",null,e.activity),i.a.createElement("td",null,e.material),i.a.createElement("td",null,e.quantity),i.a.createElement("td",null,e.unit))}));return i.a.createElement("tbody",null,a);case"Tools":var t=e.characterData.map((function(e,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,e.date),i.a.createElement("td",null,e.activity),i.a.createElement("td",null,e.material),i.a.createElement("td",null,e.quantity),i.a.createElement("td",null,e.unit))}));return i.a.createElement("tbody",null,t);case"Workers":var n=e.characterData.map((function(e,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,e.date),i.a.createElement("td",null,e.activity),i.a.createElement("td",null,e.material),i.a.createElement("td",null,e.quantity),i.a.createElement("td",null,e.unit))}));return i.a.createElement("tbody",null,n);default:return i.a.createElement("h1",null,"No project match")}},ae=function(e){var a=e.characterData,t=e.tableGroup;return i.a.createElement("table",null,i.a.createElement($,{tableGroup:t}),i.a.createElement(ee,{characterData:a,tableGroup:t}))},te=t(71),ne=t.n(te),ie=Object(E.a)({appDetailContent:{paddingRight:"10px",width:"100%",maxHeight:"270px",overflow:"auto",paddingTop:"5px",paddingbottom:"5px"},appDetailBar:{paddingRight:"10px",width:"100%",maxHeight:"70px"}});var le=function(e){var a=ie(),t=e.itemContent,n=e.datatheme,l=i.a.useState(0),r=Object(C.a)(l,2),c=(r[0],r[1],function(e){var a=e.characterData[0],t=Object.keys(a).map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,e),i.a.createElement("td",null,a[e]))}));return i.a.createElement("tbody",null,t)});return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{position:"static",className:a.appDetailBar},i.a.createElement(X.a,{variant:"fullWidth"},i.a.createElement(Y.a,{icon:i.a.createElement(ne.a,null),label:n}))),i.a.createElement("div",{className:a.appDetailContent},i.a.createElement(c,{characterData:t,tableGroup:[{groupname:"Materials"}]})))},re=t(239),ce=t(240),oe=t(241),me=t(218),se=t(219),ue=t(242),de=t(220),pe=t(221),ge=(t(159),re.a.BaseLayer),he=re.a.Overlay,be=[.499,101],Ee=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(ce.a,{center:be,zoom:17},i.a.createElement(re.a,{position:"topright"},i.a.createElement(ge,{name:"OpenStreetMap"},i.a.createElement(oe.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),i.a.createElement(ge,{checked:!0,name:"Satelite Imagery"},i.a.createElement(oe.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})),i.a.createElement(he,{checked:!0,name:"Asset Marker"},i.a.createElement(me.a,null,i.a.createElement(se.a,{position:[.50003,100.99896]},i.a.createElement(ue.a,null,"Pos Jaga")),i.a.createElement(se.a,{position:[.49926,100.99922]},i.a.createElement(ue.a,null,"Jembatan Timbang")),i.a.createElement(se.a,{position:[.49907,100.99971]},i.a.createElement(ue.a,null,"Pabrik Kelapa Sawit")),i.a.createElement(se.a,{position:[.49848,101.00111]},i.a.createElement(ue.a,null,"Jembatan Titian")),i.a.createElement(se.a,{position:[.4991,100.99996]},i.a.createElement(ue.a,null,"Gudang")),i.a.createElement(se.a,{position:[.49939,100.99888]},i.a.createElement(ue.a,null,"Kantor")),i.a.createElement(se.a,{position:[.49903,100.99883]},i.a.createElement(ue.a,null,"Pemukiman")),i.a.createElement(se.a,{position:[.49836,101.00091]},i.a.createElement(ue.a,null,"Penampungan Air")),i.a.createElement(se.a,{position:[.49983,101.00003]},i.a.createElement(ue.a,null,"Sawit Kebun SI 01/001")))),i.a.createElement(he,{checked:!0,name:"Asset Polyline"},i.a.createElement(me.a,null,i.a.createElement(de.a,{color:"blue",positions:[[.50045,100.99811],[.5004,100.99828],[.50031,100.99848],[.50023,100.99893],[.50019,100.99926],[.5003,100.99966],[.50044,100.99994],[.50063,101.00015]]},i.a.createElement(ue.a,null,"Jalan Utama")),i.a.createElement(de.a,{color:"blue",positions:[[.50045,100.99811],[.5004,100.99828],[.50031,100.99848],[.50023,100.99893],[.50019,100.99926],[.5003,100.99966],[.50044,100.99994],[.50063,101.00015]]},i.a.createElement(ue.a,null,"Jalan Utama")),i.a.createElement(de.a,{color:"blue",positions:[[.50023,100.99893],[.4992,100.99902],[.49804,100.99913]]},i.a.createElement(ue.a,null,"Jalan blok SI 01/001")))),i.a.createElement(he,{checked:!0,name:"Asset Polygon"},i.a.createElement(pe.a,{color:"purple",positions:[[.49926,100.99904],[.50023,100.99895],[.50017,100.99926],[.50028,100.99966],[.50042,100.99994],[.50061,101.00015],[.49926,101.00015],[.49926,100.99915]]},i.a.createElement(ue.a,null,"Block 01/001")))))}}]),t}(n.Component),ve=t(3),ye=t(19),ke=t(113),Pe=t.n(ke),fe=t(228),Se=t(229),Oe=t(224),we=t(227),xe=t(222),De=t(231),Ce=t(223),je=t(243),Te=t(225),Ne=t(163),He=t(235),Be=t(238),Ae=t(111),Le=t.n(Ae),Re=t(112),Ie=t.n(Re);function qe(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}function Me(e){var a=e.headCells,t=e.classes,n=e.onSelectAllClick,l=e.order,r=e.orderBy,c=e.numSelected,o=e.rowCount,m=e.onRequestSort;return i.a.createElement(xe.a,null,i.a.createElement(Ce.a,null,i.a.createElement(Oe.a,{padding:"checkbox"},i.a.createElement(He.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:n,inputProps:{"aria-label":"select all desserts"}})),a.map((function(e){return i.a.createElement(Oe.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&l},i.a.createElement(je.a,{active:r===e.id,direction:r===e.id?l:"asc",onClick:(a=e.id,function(e){m(e,a)})},e.label,r===e.id?i.a.createElement("span",{className:t.visuallyHidden},"desc"===l?"sorted descending":"sorted ascending"):null));var a}))))}var Ke=Object(E.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(ye.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Fe=function(e){var a=Ke(),t=e.numSelected;e.datatheme;return i.a.createElement(P.a,{className:Object(ve.a)(a.root,Object(D.a)({},a.highlight,t>0))},t>0?i.a.createElement(Te.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):i.a.createElement(Te.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Listing"),t>0?i.a.createElement(Be.a,{title:"Delete"},i.a.createElement(S.a,{"aria-label":"delete"},i.a.createElement(Le.a,null))):i.a.createElement(Be.a,{title:"Filter list"},i.a.createElement(S.a,{"aria-label":"filter list"},i.a.createElement(Ie.a,null))))},ze=Object(E.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:300,maxWidth:"100%"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},appDetailBar:{paddingRight:"10px",width:"100%",maxHeight:"70px"},appDetailContent:{paddingRight:"10px",width:"100%",maxHeight:"270px",overflow:"auto",paddingTop:"5px",paddingbottom:"5px"}}})),Je=function(e){var a=e.rows,t=e.headCells,n=e.datatheme,l=ze(),r=i.a.useState("asc"),c=Object(C.a)(r,2),o=c[0],m=c[1],s=i.a.useState("calories"),u=Object(C.a)(s,2),d=u[0],p=u[1],g=i.a.useState([]),h=Object(C.a)(g,2),b=h[0],E=h[1],v=i.a.useState(0),y=Object(C.a)(v,2),P=y[0],f=y[1],S=i.a.useState(!0),O=Object(C.a)(S,2),w=O[0],x=(O[1],i.a.useState(5)),D=Object(C.a)(x,2),j=D[0],T=D[1],N=j-Math.min(j,a.length-P*j),H=function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(a,function(e,a){return"desc"===e?function(e,t){return qe(e,t,a)}:function(e,t){return-qe(e,t,a)}}(o,d)).slice(P*j,P*j+j);return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{position:"static",className:l.appDetailBar},i.a.createElement(X.a,{variant:"fullWidth"},i.a.createElement(Y.a,{icon:i.a.createElement(Pe.a,null),label:n}))),i.a.createElement("div",{className:l.appDetailContent},i.a.createElement(Ne.a,{className:l.paper},i.a.createElement(Fe,{numSelected:b.length,datatheme:n}),i.a.createElement(we.a,null,i.a.createElement(fe.a,{className:l.appDetailContent,"aria-labelledby":"tableTitle",size:w?"small":"medium","aria-label":"enhanced table"},i.a.createElement(Me,{headCells:t,classes:l,numSelected:b.length,order:o,orderBy:d,onSelectAllClick:function(e){if(e.target.checked){var t=a.map((function(e){return e.id}));E(t)}else E([])},onRequestSort:function(e,a){m(d===a&&"asc"===o?"desc":"asc"),p(a)},rowCount:a.length}),i.a.createElement(Se.a,null,H.map((function(e,a){var t,n=(t=e.id,-1!==b.indexOf(t)),l="enhanced-table-checkbox-".concat(a),r=Object.keys(e).map((function(a,t){return i.a.createElement("td",null,e[a])}));return i.a.createElement(Ce.a,{hover:!0,onClick:function(a){return function(e,a){var t=b.indexOf(a),n=[];-1===t?n=n.concat(b,a):0===t?n=n.concat(b.slice(1)):t===b.length-1?n=n.concat(b.slice(0,-1)):t>0&&(n=n.concat(b.slice(0,t),b.slice(t+1))),E(n)}(0,e.id)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.id,selected:n},i.a.createElement(Oe.a,{padding:"checkbox"},i.a.createElement(He.a,{checked:n,inputProps:{"aria-labelledby":l}})),r)})),N>0&&i.a.createElement(Ce.a,{style:{height:(w?33:53)*N}},i.a.createElement(Oe.a,{colSpan:6}))))),i.a.createElement(De.a,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:j,page:P,onChangePage:function(e,a){f(a)},onChangeRowsPerPage:function(e){T(parseInt(e.target.value,10)),f(0)}}))))};function Ge(e,a,t,n,i){return{id:e,name:a,code:t,type:n,status:i}}var We=[Ge("1","Transport Truk KH 7777 zz","kh7777zz","transport","operational"),Ge("2","Jembatan Titian","inbrd0001","bridge","operational"),Ge("3","Pos Jaga","inpos0001","post","operational"),Ge("4","Jalan Blok SI 01/001","inrod0001","road","operational"),Ge("5","Jalan Utama","inmrd0001 ","road","operational"),Ge("6","Jembatan Timbang","inwbr0001","weightbridge","operational"),Ge("7","Fasilitas Umum","infas0001","enclave","operational"),Ge("8","Gudang","inwrh0001","enclave","operational"),Ge("9","Kantor","inoff0001","enclave","operational"),Ge("10","Pabrik Kelapa Sawit","infac0001 ","enclave","operational"),Ge("11","Pemukiman","inset0001","enclave","operational"),Ge("12","Penampungan Air","inres0001","enclave","operational"),Ge("13","Block 01/001","blksi01001","plantation","operational"),Ge("14","Block 01/002","blksi01002","plantation","operational"),Ge("15","Block 01/003","blksi01003 ","plantation","operational"),Ge("16","Block 02/001","blksi02001","plantation","operational"),Ge("17","Block 02/002","blksi02002","plantation","operational"),Ge("18","Block 02/003","blksi02003","plantation","operational"),Ge("19","Block 03/001","blksi03001","plantation","operational"),Ge("20","Block 03/002","blksi03002 ","plantation","operational"),Ge("21","Block 03/003","blksi03003","plantation","operational"),Ge("22","Division 01","divsi01","plantation","operational"),Ge("23","Division 02","divsi02","plantation","operational"),Ge("24","Division 03","divsi03","plantation","operational"),Ge("25","Kebun Sawit Inovatif","plantsi ","plantation","operational"),Ge("26","Sawit Kebun SI 01/001","Palmsi01001-00001","commodity","productive"),Ge("27","Sawit Kebun SI 01/002","Palmsi01001-00002","commodity","productive")],Ue=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],Qe=Object(E.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var Ve=function(){var e=Qe();return i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:We,headCells:Ue,datatheme:"Company Assets"})),i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(le,{itemContent:[{id:1,code:"kh7777zz",group:"Fleet Management",class:"transport",title:"Transport Truck KH 7777 ZZ",length:3,lengthunit:"meter",width:2.2,widthunit:"meter",height:2.4,heightunit:"meter",brand:"Hino",productionyear:"2018",capacity:10,capunit:"ton",dataacquisition:"06 Jun 2018",status:""}]}))),i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(Ee,null)),i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(Z.a,{highcharts:Q.a,options:{chart:{type:"spline"},title:{text:"My chart"},series:[{data:[1,2,1,4,3,6]}]}}))))},Ze=t(85),_e=t.n(Ze),Xe=t(86),Ye=t.n(Xe),$e=Object(E.a)({appDetailContent:{paddingRight:"10px",width:"100%",maxHeight:"270px",overflow:"auto",paddingTop:"5px",paddingbottom:"5px"},appDetailBar:{paddingRight:"10px",width:"100%",maxHeight:"70px"}});function ea(e){var a=e.children,t=e.value,n=e.index,l=Object(p.a)(e,["children","value","index"]);return i.a.createElement("div",l,t===n&&i.a.createElement(_.a,{p:3},a))}var aa=function(e){var a=$e(),t=e.materials,n=e.tools,l=e.workers,r=i.a.useState(0),c=Object(C.a)(r,2),o=c[0],m=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{position:"static",className:a.appDetailBar},i.a.createElement(X.a,{value:o,onChange:function(e,a){m(a)},variant:"fullWidth"},i.a.createElement(Y.a,{icon:i.a.createElement(ne.a,null),label:"Materials"}),i.a.createElement(Y.a,{icon:i.a.createElement(_e.a,null),label:"Tools"}),i.a.createElement(Y.a,{icon:i.a.createElement(Ye.a,null),label:"Workers"}))),i.a.createElement("div",{className:a.appDetailContent},i.a.createElement(ea,{value:o,index:0},i.a.createElement(ae,{characterData:t,tableGroup:[{groupname:"Materials"}]})),i.a.createElement(ea,{value:o,index:1},i.a.createElement(ae,{characterData:n,tableGroup:[{groupname:"Tools"}]})),i.a.createElement(ea,{value:o,index:2},i.a.createElement(ae,{characterData:l,tableGroup:[{groupname:"Workers"}]}))))};function ta(e,a,t,n,i){return{id:e,name:a,code:t,type:n,status:i}}var na=[ta("1","Gudang","inwrh0001","enclave","operational"),ta("2","Kantor","inoff0001","enclave","operational"),ta("3","Pabrik Kelapa Sawit","infac0001 ","enclave","operational"),ta("4","Pemukiman","inset0001","enclave","operational"),ta("5","Penampungan Air","inres0001","enclave","operational")],ia=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],la=[ta("1","2 Oct 2020","Penjarangan","Selesai"),ta("2","3 Oct 2020","Pembersihan Gulma","Selesai"),ta("3","4 Oct 2020","Pemetikan Sawit","Selesai"),ta("4","5 Oct 2020","Pemupukan","Selesai"),ta("5","5 Oct 2020","Perlindungan HaPe","Selesai"),ta("6","8 Oct 2020","Penyiraman","Batal"),ta("7","11 Oct 2020","Pemetikan Sawit","Selesai"),ta("8","18 Oct 2020","Pemetikan Sawit","Rencana")],ra=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"date",numeric:!1,disablePadding:!0,label:"Date"},{id:"activity",numeric:!1,disablePadding:!0,label:"Activity"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],ca=Object(E.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var oa=function(){var e=ca(),a=[{objcetcode:"Palmsi01001-00001",id:"1",group:"Tree Management",title:"Gudang",Commodity:"Sawit",Variety:"dxpsimalungun",Planted:"29 Jul 2008",Status:"Production",Total:"120 tbs",Activity:"Pemupukan",Date:"5 Oct 2020",COntractor:"Pegawai Perusahaan"}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:na,headCells:ia,datatheme:"Infrastructure"})),i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:la,headCells:ra,datatheme:"Infrastructure(Gudang) Activities"}))),i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(le,{itemContent:a,datatheme:"Infrastructure Activity Detail"})),i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(aa,{materials:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk Bokasi",quantity:"1",unit:"kg"},{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk NPK",quantity:"0.1",unit:"kg"}],tools:[{date:"none",activity:"none",material:"none",quantity:"none",unit:"none"}],workers:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Buruh Harian",quantity:"1",unit:"hari"}]}))))};function ma(e,a,t,n,i){return{id:e,name:a,code:t,type:n,status:i}}var sa=[ma("1","Block 01/001","blksi01001","plantation","operational"),ma("2","Block 01/002","blksi01002","plantation","operational"),ma("3","Block 01/003","blksi01003 ","plantation","operational"),ma("4","Block 02/001","blksi02001","plantation","operational"),ma("5","Block 02/002","blksi02002","plantation","operational"),ma("6","Block 02/003","blksi02003","plantation","operational"),ma("7","Block 03/001","blksi03001","plantation","operational"),ma("8","Block 03/002","blksi03002 ","plantation","operational"),ma("9","Block 03/003","blksi03003","plantation","operational"),ma("10","Division 01","divsi01","plantation","operational"),ma("11","Division 02","divsi02","plantation","operational"),ma("12","Division 03","divsi03","plantation","operational"),ma("13","Kebun Sawit Inovatif","plantsi ","plantation","operational")],ua=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],da=[ma("1","2 Oct 2020","Penjarangan","Selesai"),ma("2","3 Oct 2020","Pembersihan Gulma","Selesai"),ma("3","4 Oct 2020","Pemetikan Sawit","Selesai"),ma("4","5 Oct 2020","Pemupukan","Selesai"),ma("5","5 Oct 2020","Perlindungan HaPe","Selesai"),ma("6","8 Oct 2020","Penyiraman","Batal"),ma("7","11 Oct 2020","Pemetikan Sawit","Selesai"),ma("8","18 Oct 2020","Pemetikan Sawit","Rencana")],pa=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"date",numeric:!1,disablePadding:!0,label:"Date"},{id:"activity",numeric:!1,disablePadding:!0,label:"Activity"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],ga=Object(E.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var ha=function(){var e=ga(),a=[{objcetcode:"Palmsi01001-00001",id:"1",group:"Tree Management",title:"Block 01/001",Commodity:"Sawit",Variety:"dxpsimalungun",Planted:"29 Jul 2008",Status:"Production",Total:"120 tbs",Activity:"Pemupukan",Date:"5 Oct 2020",COntractor:"Pegawai Perusahaan"}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:sa,headCells:ua,datatheme:"Landstructure"})),i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:da,headCells:pa,datatheme:"Landstructure(Block 01/001) Activities"}))),i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(le,{itemContent:a,datatheme:"Landstructure Activity Detail"})),i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(aa,{materials:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk Bokasi",quantity:"1",unit:"kg"},{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk NPK",quantity:"0.1",unit:"kg"}],tools:[{date:"none",activity:"none",material:"none",quantity:"none",unit:"none"}],workers:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Buruh Harian",quantity:"1",unit:"hari"}]}))))};function ba(e,a,t,n,i){return{id:e,name:a,code:t,type:n,status:i}}var Ea=[ba("1","Sawit Kebun SI 01/001","Palmsi01001-00001","commodity","productive"),ba("2","Sawit Kebun SI 01/002","Palmsi01001-00002","commodity","productive")],va=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],ya=[ba("1","2 Oct 2020","Penjarangan","Selesai"),ba("2","3 Oct 2020","Pembersihan Gulma","Selesai"),ba("3","4 Oct 2020","Pemetikan Sawit","Selesai"),ba("4","5 Oct 2020","Pemupukan","Selesai"),ba("5","5 Oct 2020","Perlindungan HaPe","Selesai"),ba("6","8 Oct 2020","Penyiraman","Batal"),ba("7","11 Oct 2020","Pemetikan Sawit","Selesai"),ba("8","18 Oct 2020","Pemetikan Sawit","Rencana")],ka=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"date",numeric:!1,disablePadding:!0,label:"Date"},{id:"activity",numeric:!1,disablePadding:!0,label:"Activity"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],Pa=Object(E.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var fa=function(){var e=Pa(),a=[{objcetcode:"Palmsi01001-00001",id:"1",group:"Tree Management",title:"Sawit Kebun SI 01/001",Commodity:"Sawit",Variety:"dxpsimalungun",Planted:"29 Jul 2008",Status:"Production",Total:"120 tbs",Activity:"Pemupukan",Date:"5 Oct 2020",COntractor:"Pegawai Perusahaan"}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:Ea,headCells:va,datatheme:"Tree Management"})),i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:ya,headCells:ka,datatheme:"Tree Management(Sawit Kebun SI 01/001) Activities"}))),i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(le,{itemContent:a,datatheme:"Tree Management Activity Detail"})),i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(aa,{materials:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk Bokasi",quantity:"1",unit:"kg"},{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk NPK",quantity:"0.1",unit:"kg"}],tools:[{date:"none",activity:"none",material:"none",quantity:"none",unit:"none"}],workers:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Buruh Harian",quantity:"1",unit:"hari"}]}))))};function Sa(e,a,t,n,i){return{id:e,name:a,code:t,type:n,status:i}}var Oa=[Sa("1","Transport Truk KH 7777 zz","kh7777zz","transport","operational")],wa=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],xa=[Sa("1","2 Oct 2020","Penjarangan","Selesai"),Sa("2","3 Oct 2020","Pembersihan Gulma","Selesai"),Sa("3","4 Oct 2020","Pemetikan Sawit","Selesai"),Sa("4","5 Oct 2020","Pemupukan","Selesai"),Sa("5","5 Oct 2020","Perlindungan HaPe","Selesai"),Sa("6","8 Oct 2020","Penyiraman","Batal"),Sa("7","11 Oct 2020","Pemetikan Sawit","Selesai"),Sa("8","18 Oct 2020","Pemetikan Sawit","Rencana")],Da=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"date",numeric:!1,disablePadding:!0,label:"Date"},{id:"activity",numeric:!1,disablePadding:!0,label:"Activity"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],Ca=Object(E.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var ja=function(){var e=Ca(),a=[{objcetcode:"Palmsi01001-00001",id:"1",group:"Tree Management",title:"Transport Truk KH 7777 zz",Commodity:"Sawit",Variety:"dxpsimalungun",Planted:"29 Jul 2008",Status:"Production",Total:"120 tbs",Activity:"Pemupukan",Date:"5 Oct 2020",COntractor:"Pegawai Perusahaan"}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:Oa,headCells:wa,datatheme:"Fleet"})),i.a.createElement(W.a,{className:e.appHeader,sm:6},i.a.createElement(Je,{rows:xa,headCells:Da,datatheme:"Fleet(Transport Truk KH 7777 zz) Activities"}))),i.a.createElement(W.a,{container:!0,className:e.appDetail},i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(le,{itemContent:a,datatheme:"Fleet Activity Detail"})),i.a.createElement(W.a,{className:e.appHeader,item:!0,sm:6},i.a.createElement(aa,{materials:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk Bokasi",quantity:"1",unit:"kg"},{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk NPK",quantity:"0.1",unit:"kg"}],tools:[{date:"none",activity:"none",material:"none",quantity:"none",unit:"none"}],workers:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Buruh Harian",quantity:"1",unit:"hari"}]}))))},Ta=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,{basename:"/"},i.a.createElement("div",null,i.a.createElement(L,null)),i.a.createElement("div",null,i.a.createElement(d.b,{exact:!0,path:"/",component:y}),i.a.createElement(b,{path:"/Login",component:M}),i.a.createElement(h,{path:"/QRReader",component:G}),i.a.createElement(h,{path:"/AssetDistribution",component:Ve}),i.a.createElement(h,{path:"/InfrastructureTransaction",component:oa}),i.a.createElement(h,{path:"/LandstructureTransaction",component:ha}),i.a.createElement(h,{path:"/TreeManagementTransaction",component:fa}),i.a.createElement(h,{path:"/FleetTransaction",component:ja})))}}]),t}(n.Component);r.a.render(i.a.createElement(Ta,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.4f5b486c.chunk.js.map