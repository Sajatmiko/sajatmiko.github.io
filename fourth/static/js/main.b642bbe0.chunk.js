(this["webpackJsonptest-publish"]=this["webpackJsonptest-publish"]||[]).push([[0],{108:function(e,a,t){e.exports=t(124)},121:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(12),r=t.n(i),c=t(34),o=t(29),m=t(51),d=t(50),p=t(41),s=t(15),u=t(85),h=t.n(u),g=t(165),E=(Object(g.a)({appPlanet:{paddingLeft:"10px",paddingRight:"10px",justifyContent:"left",alignItems:"left:",color:"#000000",width:"50%",height:"200px"}}),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleScan=function(e){e&&n.setState({result:e})},n.handleError=function(e){console.error(e)},n.state={result:"No result"},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%",alignItems:"center",paddingLeft:"0px",paddingRight:"0px"}}),l.a.createElement("p",null,this.state.result))}}]),t}(n.Component)),b=t(184),v=t(74),f=t.n(v),k=t(90),y=t.n(k),x=t(19),w=t(2),P=t(186),S=t(167),D=t(187),C=t(169),O=function(e){switch(e.tableGroup[0].groupname){case"Materials":return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Actvity"),l.a.createElement("th",null,"Material"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Unit")));case"Tools":return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Actvity"),l.a.createElement("th",null,"Tool"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Unit")));case"Workers":return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Actvity"),l.a.createElement("th",null,"Skill"),l.a.createElement("th",null,"Volume"),l.a.createElement("th",null,"Unit")));default:return l.a.createElement("h1",null,"No project match")}},T=function(e){switch(e.tableGroup[0].groupname){case"Materials":var a=e.characterData.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.activity),l.a.createElement("td",null,e.material),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.unit))}));return l.a.createElement("tbody",null,a);case"Tools":var t=e.characterData.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.activity),l.a.createElement("td",null,e.material),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.unit))}));return l.a.createElement("tbody",null,t);case"Workers":var n=e.characterData.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.activity),l.a.createElement("td",null,e.material),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.unit))}));return l.a.createElement("tbody",null,n);default:return l.a.createElement("h1",null,"No project match")}},H=function(e){var a=e.characterData,t=e.tableGroup;return l.a.createElement("table",null,l.a.createElement(O,{tableGroup:t}),l.a.createElement(T,{characterData:a,tableGroup:t}))},N=t(64),j=t.n(N),B=Object(g.a)({appDetailContent:{paddingRight:"10px",width:"100%",maxHeight:"270px",overflow:"auto",paddingTop:"5px",paddingbottom:"5px"},appDetailBar:{paddingRight:"10px",width:"100%",maxHeight:"70px"}});var A=function(e){var a=B(),t=e.itemContent,n=e.datatheme,i=l.a.useState(0),r=Object(x.a)(i,2),c=(r[0],r[1],function(e){var a=e.characterData[0],t=Object.keys(a).map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e),l.a.createElement("td",null,a[e]))}));return l.a.createElement("tbody",null,t)});return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{position:"static",className:a.appDetailBar},l.a.createElement(D.a,{variant:"fullWidth"},l.a.createElement(C.a,{icon:l.a.createElement(j.a,null),label:n}))),l.a.createElement("div",{className:a.appDetailContent},l.a.createElement(c,{characterData:t,tableGroup:[{groupname:"Materials"}]})))},M=t(191),L=t(192),I=t(193),R=t(170),K=t(171),z=t(194),F=t(172),q=t(173),J=(t(121),M.a.BaseLayer),G=M.a.Overlay,W=[.499,101],Z=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(L.a,{center:W,zoom:17},l.a.createElement(M.a,{position:"topright"},l.a.createElement(J,{name:"OpenStreetMap"},l.a.createElement(I.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),l.a.createElement(J,{checked:!0,name:"Satelite Imagery"},l.a.createElement(I.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})),l.a.createElement(G,{checked:!0,name:"Asset Marker"},l.a.createElement(R.a,null,l.a.createElement(K.a,{position:[.50003,100.99896]},l.a.createElement(z.a,null,"Pos Jaga")),l.a.createElement(K.a,{position:[.49926,100.99922]},l.a.createElement(z.a,null,"Jembatan Timbang")),l.a.createElement(K.a,{position:[.49907,100.99971]},l.a.createElement(z.a,null,"Pabrik Kelapa Sawit")),l.a.createElement(K.a,{position:[.49848,101.00111]},l.a.createElement(z.a,null,"Jembatan Titian")),l.a.createElement(K.a,{position:[.4991,100.99996]},l.a.createElement(z.a,null,"Gudang")),l.a.createElement(K.a,{position:[.49939,100.99888]},l.a.createElement(z.a,null,"Kantor")),l.a.createElement(K.a,{position:[.49903,100.99883]},l.a.createElement(z.a,null,"Pemukiman")),l.a.createElement(K.a,{position:[.49836,101.00091]},l.a.createElement(z.a,null,"Penampungan Air")),l.a.createElement(K.a,{position:[.49983,101.00003]},l.a.createElement(z.a,null,"Sawit Kebun SI 01/001")))),l.a.createElement(G,{checked:!0,name:"Asset Polyline"},l.a.createElement(R.a,null,l.a.createElement(F.a,{color:"blue",positions:[[.50045,100.99811],[.5004,100.99828],[.50031,100.99848],[.50023,100.99893],[.50019,100.99926],[.5003,100.99966],[.50044,100.99994],[.50063,101.00015]]},l.a.createElement(z.a,null,"Jalan Utama")),l.a.createElement(F.a,{color:"blue",positions:[[.50045,100.99811],[.5004,100.99828],[.50031,100.99848],[.50023,100.99893],[.50019,100.99926],[.5003,100.99966],[.50044,100.99994],[.50063,101.00015]]},l.a.createElement(z.a,null,"Jalan Utama")),l.a.createElement(F.a,{color:"blue",positions:[[.50023,100.99893],[.4992,100.99902],[.49804,100.99913]]},l.a.createElement(z.a,null,"Jalan blok SI 01/001")))),l.a.createElement(G,{checked:!0,name:"Asset Polygon"},l.a.createElement(q.a,{color:"purple",positions:[[.49926,100.99904],[.50023,100.99895],[.50017,100.99926],[.50028,100.99966],[.50042,100.99994],[.50061,101.00015],[.49926,101.00015],[.49926,100.99915]]},l.a.createElement(z.a,null,"Block 01/001")))))}}]),t}(n.Component),U=t(7),Q=t(3),V=t(17),_=t(95),X=t.n(_),Y=t(182),$=t(183),ee=t(176),ae=t(181),te=t(174),ne=t(185),le=t(175),ie=t(195),re=t(178),ce=t(179),oe=t(126),me=t(188),de=t(177),pe=t(190),se=t(93),ue=t.n(se),he=t(94),ge=t.n(he);function Ee(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}function be(e){var a=e.headCells,t=e.classes,n=e.onSelectAllClick,i=e.order,r=e.orderBy,c=e.numSelected,o=e.rowCount,m=e.onRequestSort;return l.a.createElement(te.a,null,l.a.createElement(le.a,null,l.a.createElement(ee.a,{padding:"checkbox"},l.a.createElement(me.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:n,inputProps:{"aria-label":"select all desserts"}})),a.map((function(e){return l.a.createElement(ee.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&i},l.a.createElement(ie.a,{active:r===e.id,direction:r===e.id?i:"asc",onClick:(a=e.id,function(e){m(e,a)})},e.label,r===e.id?l.a.createElement("span",{className:t.visuallyHidden},"desc"===i?"sorted descending":"sorted ascending"):null));var a}))))}var ve=Object(g.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(V.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),fe=function(e){var a=ve(),t=e.numSelected;e.datatheme;return l.a.createElement(re.a,{className:Object(Q.a)(a.root,Object(U.a)({},a.highlight,t>0))},t>0?l.a.createElement(ce.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):l.a.createElement(ce.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Listing"),t>0?l.a.createElement(pe.a,{title:"Delete"},l.a.createElement(de.a,{"aria-label":"delete"},l.a.createElement(ue.a,null))):l.a.createElement(pe.a,{title:"Filter list"},l.a.createElement(de.a,{"aria-label":"filter list"},l.a.createElement(ge.a,null))))},ke=Object(g.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:300,maxWidth:"100%"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},appDetailBar:{paddingRight:"10px",width:"100%",maxHeight:"70px"},appDetailContent:{paddingRight:"10px",width:"100%",maxHeight:"270px",overflow:"auto",paddingTop:"5px",paddingbottom:"5px"}}})),ye=function(e){var a=e.rows,t=e.headCells,n=e.datatheme,i=ke(),r=l.a.useState("asc"),c=Object(x.a)(r,2),o=c[0],m=c[1],d=l.a.useState("calories"),p=Object(x.a)(d,2),s=p[0],u=p[1],h=l.a.useState([]),g=Object(x.a)(h,2),E=g[0],b=g[1],v=l.a.useState(0),f=Object(x.a)(v,2),k=f[0],y=f[1],w=l.a.useState(!0),P=Object(x.a)(w,2),O=P[0],T=(P[1],l.a.useState(5)),H=Object(x.a)(T,2),N=H[0],j=H[1],B=N-Math.min(N,a.length-k*N),A=function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(a,function(e,a){return"desc"===e?function(e,t){return Ee(e,t,a)}:function(e,t){return-Ee(e,t,a)}}(o,s)).slice(k*N,k*N+N);return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{position:"static",className:i.appDetailBar},l.a.createElement(D.a,{variant:"fullWidth"},l.a.createElement(C.a,{icon:l.a.createElement(X.a,null),label:n}))),l.a.createElement("div",{className:i.appDetailContent},l.a.createElement(oe.a,{className:i.paper},l.a.createElement(fe,{numSelected:E.length,datatheme:n}),l.a.createElement(ae.a,null,l.a.createElement(Y.a,{className:i.appDetailContent,"aria-labelledby":"tableTitle",size:O?"small":"medium","aria-label":"enhanced table"},l.a.createElement(be,{headCells:t,classes:i,numSelected:E.length,order:o,orderBy:s,onSelectAllClick:function(e){if(e.target.checked){var t=a.map((function(e){return e.id}));b(t)}else b([])},onRequestSort:function(e,a){m(s===a&&"asc"===o?"desc":"asc"),u(a)},rowCount:a.length}),l.a.createElement($.a,null,A.map((function(e,a){var t,n=(t=e.id,-1!==E.indexOf(t)),i="enhanced-table-checkbox-".concat(a),r=Object.keys(e).map((function(a,t){return l.a.createElement("td",null,e[a])}));return l.a.createElement(le.a,{hover:!0,onClick:function(a){return function(e,a){var t=E.indexOf(a),n=[];-1===t?n=n.concat(E,a):0===t?n=n.concat(E.slice(1)):t===E.length-1?n=n.concat(E.slice(0,-1)):t>0&&(n=n.concat(E.slice(0,t),E.slice(t+1))),b(n)}(0,e.id)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.id,selected:n},l.a.createElement(ee.a,{padding:"checkbox"},l.a.createElement(me.a,{checked:n,inputProps:{"aria-labelledby":i}})),r)})),B>0&&l.a.createElement(le.a,{style:{height:(O?33:53)*B}},l.a.createElement(ee.a,{colSpan:6}))))),l.a.createElement(ne.a,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:N,page:k,onChangePage:function(e,a){y(a)},onChangeRowsPerPage:function(e){j(parseInt(e.target.value,10)),y(0)}}))))};function xe(e,a,t,n,l){return{id:e,name:a,code:t,type:n,status:l}}var we=[xe("1","Transport Truk KH 7777 zz","kh7777zz","transport","operational"),xe("2","Jembatan Titian","inbrd0001","bridge","operational"),xe("3","Pos Jaga","inpos0001","post","operational"),xe("4","Jalan Blok SI 01/001","inrod0001","road","operational"),xe("5","Jalan Utama","inmrd0001 ","road","operational"),xe("6","Jembatan Timbang","inwbr0001","weightbridge","operational"),xe("7","Fasilitas Umum","infas0001","enclave","operational"),xe("8","Gudang","inwrh0001","enclave","operational"),xe("9","Kantor","inoff0001","enclave","operational"),xe("10","Pabrik Kelapa Sawit","infac0001 ","enclave","operational"),xe("11","Pemukiman","inset0001","enclave","operational"),xe("12","Penampungan Air","inres0001","enclave","operational"),xe("13","Block 01/001","blksi01001","plantation","operational"),xe("14","Block 01/002","blksi01002","plantation","operational"),xe("15","Block 01/003","blksi01003 ","plantation","operational"),xe("16","Block 02/001","blksi02001","plantation","operational"),xe("17","Block 02/002","blksi02002","plantation","operational"),xe("18","Block 02/003","blksi02003","plantation","operational"),xe("19","Block 03/001","blksi03001","plantation","operational"),xe("20","Block 03/002","blksi03002 ","plantation","operational"),xe("21","Block 03/003","blksi03003","plantation","operational"),xe("22","Division 01","divsi01","plantation","operational"),xe("23","Division 02","divsi02","plantation","operational"),xe("24","Division 03","divsi03","plantation","operational"),xe("25","Kebun Sawit Inovatif","plantsi ","plantation","operational"),xe("26","Sawit Kebun SI 01/001","Palmsi01001-00001","commodity","productive"),xe("27","Sawit Kebun SI 01/002","Palmsi01001-00002","commodity","productive")],Pe=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],Se=Object(g.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var De=function(){var e=Se();return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:we,headCells:Pe,datatheme:"Company Assets"})),l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(A,{itemContent:[{id:1,code:"kh7777zz",group:"Fleet Management",class:"transport",title:"Transport Truck KH 7777 ZZ",length:3,lengthunit:"meter",width:2.2,widthunit:"meter",height:2.4,heightunit:"meter",brand:"Hino",productionyear:"2018",capacity:10,capunit:"ton",dataacquisition:"06 Jun 2018",status:""}]}))),l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(Z,null)),l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(y.a,{highcharts:f.a,options:{chart:{type:"spline"},title:{text:"My chart"},series:[{data:[1,2,1,4,3,6]}]}}))))},Ce=t(75),Oe=t.n(Ce),Te=t(76),He=t.n(Te),Ne=Object(g.a)({appDetailContent:{paddingRight:"10px",width:"100%",maxHeight:"270px",overflow:"auto",paddingTop:"5px",paddingbottom:"5px"},appDetailBar:{paddingRight:"10px",width:"100%",maxHeight:"70px"}});function je(e){var a=e.children,t=e.value,n=e.index,i=Object(w.a)(e,["children","value","index"]);return l.a.createElement("div",i,t===n&&l.a.createElement(P.a,{p:3},a))}var Be=function(e){var a=Ne(),t=e.materials,n=e.tools,i=e.workers,r=l.a.useState(0),c=Object(x.a)(r,2),o=c[0],m=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{position:"static",className:a.appDetailBar},l.a.createElement(D.a,{value:o,onChange:function(e,a){m(a)},variant:"fullWidth"},l.a.createElement(C.a,{icon:l.a.createElement(j.a,null),label:"Materials"}),l.a.createElement(C.a,{icon:l.a.createElement(Oe.a,null),label:"Tools"}),l.a.createElement(C.a,{icon:l.a.createElement(He.a,null),label:"Workers"}))),l.a.createElement("div",{className:a.appDetailContent},l.a.createElement(je,{value:o,index:0},l.a.createElement(H,{characterData:t,tableGroup:[{groupname:"Materials"}]})),l.a.createElement(je,{value:o,index:1},l.a.createElement(H,{characterData:n,tableGroup:[{groupname:"Tools"}]})),l.a.createElement(je,{value:o,index:2},l.a.createElement(H,{characterData:i,tableGroup:[{groupname:"Workers"}]}))))};function Ae(e,a,t,n,l){return{id:e,name:a,code:t,type:n,status:l}}var Me=[Ae("1","Gudang","inwrh0001","enclave","operational"),Ae("2","Kantor","inoff0001","enclave","operational"),Ae("3","Pabrik Kelapa Sawit","infac0001 ","enclave","operational"),Ae("4","Pemukiman","inset0001","enclave","operational"),Ae("5","Penampungan Air","inres0001","enclave","operational")],Le=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],Ie=Object(g.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var Re=function(){var e=Ie(),a=[{id:1,code:"kh7777zz",group:"Fleet Management",class:"transport",title:"Transport Truck KH 7777 ZZ",length:3,lengthunit:"meter",width:2.2,widthunit:"meter",height:2.4,heightunit:"meter",brand:"Hino",productionyear:"2018",capacity:10,capunit:"ton",dataacquisition:"06 Jun 2018",status:""}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:Me,headCells:Le,datatheme:"Infrastructure"})),l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:Me,headCells:Le,datatheme:"Infrastructure Activities"}))),l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(A,{itemContent:a,datatheme:"Infrastructure Activity Detail"})),l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(Be,{itemContent:a}))))};function Ke(e,a,t,n,l){return{id:e,name:a,code:t,type:n,status:l}}var ze=[Ke("1","Block 01/001","blksi01001","plantation","operational"),Ke("2","Block 01/002","blksi01002","plantation","operational"),Ke("3","Block 01/003","blksi01003 ","plantation","operational"),Ke("4","Block 02/001","blksi02001","plantation","operational"),Ke("5","Block 02/002","blksi02002","plantation","operational"),Ke("6","Block 02/003","blksi02003","plantation","operational"),Ke("7","Block 03/001","blksi03001","plantation","operational"),Ke("8","Block 03/002","blksi03002 ","plantation","operational"),Ke("9","Block 03/003","blksi03003","plantation","operational"),Ke("10","Division 01","divsi01","plantation","operational"),Ke("11","Division 02","divsi02","plantation","operational"),Ke("12","Division 03","divsi03","plantation","operational"),Ke("13","Kebun Sawit Inovatif","plantsi ","plantation","operational")],Fe=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],qe=Object(g.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var Je=function(){var e=qe(),a=[{id:1,code:"kh7777zz",group:"Fleet Management",class:"transport",title:"Transport Truck KH 7777 ZZ",length:3,lengthunit:"meter",width:2.2,widthunit:"meter",height:2.4,heightunit:"meter",brand:"Hino",productionyear:"2018",capacity:10,capunit:"ton",dataacquisition:"06 Jun 2018",status:""}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:ze,headCells:Fe,datatheme:"Landstructure"})),l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:ze,headCells:Fe,datatheme:"Landstructure Activities"}))),l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(A,{itemContent:a,datatheme:"Landstructure Activity Detail"})),l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(Be,{itemContent:a}))))};function Ge(e,a,t,n,l){return{id:e,name:a,code:t,type:n,status:l}}var We=[Ge("1","Sawit Kebun SI 01/001","Palmsi01001-00001","commodity","productive"),Ge("2","Sawit Kebun SI 01/002","Palmsi01001-00002","commodity","productive")],Ze=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],Ue=[Ge("1","2 Oct 2020","Penjarangan","Selesai"),Ge("2","3 Oct 2020","Pembersihan Gulma","Selesai"),Ge("3","4 Oct 2020","Pemetikan Sawit","Selesai"),Ge("4","5 Oct 2020","Pemupukan","Selesai"),Ge("5","5 Oct 2020","Perlindungan HaPe","Selesai"),Ge("6","8 Oct 2020","Penyiraman","Batal"),Ge("7","11 Oct 2020","Pemetikan Sawit","Selesai"),Ge("8","18 Oct 2020","Pemetikan Sawit","Rencana")],Qe=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"date",numeric:!1,disablePadding:!0,label:"Date"},{id:"activity",numeric:!1,disablePadding:!0,label:"Activity"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],Ve=Object(g.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var _e=function(){var e=Ve(),a=[{objcetcode:"Palmsi01001-00001",id:"1",group:"Tree Management",title:"Sawit Kebun SI 01/001",Commodity:"Sawit",Variety:"dxpsimalungun",Planted:"29 Jul 2008",Status:"Production",Total:"120 tbs",Activity:"Pemupukan",Date:"5 Oct 2020",COntractor:"Pegawai Perusahaan"}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:We,headCells:Ze,datatheme:"Tree Management"})),l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:Ue,headCells:Qe,datatheme:"Tree Management(Sawit Kebun SI 01/001) Activities"}))),l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(A,{itemContent:a,datatheme:"Tree Management Activity Detail"})),l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(Be,{materials:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk Bokasi",quantity:"1",unit:"kg"},{date:"5 Oct 2020",activity:"Pemupukan",material:"Pupuk NPK",quantity:"0.1",unit:"kg"}],tools:[{date:"none",activity:"none",material:"none",quantity:"none",unit:"none"}],workers:[{date:"5 Oct 2020",activity:"Pemupukan",material:"Buruh Harian",quantity:"1",unit:"hari"}]}))))};var Xe,Ye,$e,ea,aa,ta=[(Xe="1",Ye="Transport Truk KH 7777 zz",$e="kh7777zz",ea="transport",aa="operational",{id:Xe,name:Ye,code:$e,type:ea,status:aa})],na=[{id:"id",numeric:!1,disablePadding:!0,label:"Sequence"},{id:"name",numeric:!1,disablePadding:!0,label:"Commodity"},{id:"code",numeric:!1,disablePadding:!0,label:"Code"},{id:"type",numeric:!1,disablePadding:!0,label:"Type"},{id:"status",numeric:!1,disablePadding:!0,label:"Status"}],la=Object(g.a)({appHeader:{paddingLeft:"10px",paddingRight:"10px",width:"100%",paddingTop:"5px"},appMaster:{paddingLeft:"10px",paddingRight:"10px",width:"100%",maxHeight:"500px"},appDetail:{paddingLeft:"10px",width:"100%",verticalAlign:"top"}});var ia=function(){var e=la(),a=[{id:1,code:"kh7777zz",group:"Fleet Management",class:"transport",title:"Transport Truck KH 7777 ZZ",length:3,lengthunit:"meter",width:2.2,widthunit:"meter",height:2.4,heightunit:"meter",brand:"Hino",productionyear:"2018",capacity:10,capunit:"ton",dataacquisition:"06 Jun 2018",status:""}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:ta,headCells:na,datatheme:"Fleet"})),l.a.createElement(b.a,{className:e.appHeader,sm:6},l.a.createElement(ye,{rows:ta,headCells:na,datatheme:"Fleet Activities"}))),l.a.createElement(b.a,{container:!0,className:e.appDetail},l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(A,{itemContent:a,datatheme:"Fleet Activity Detail"})),l.a.createElement(b.a,{className:e.appHeader,item:!0,sm:6},l.a.createElement(Be,{itemContent:a}))))},ra=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/AssetDistribution"},"AssetDistribution")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/InfrastructureTransaction"},"InfrastructureTransaction")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/LandstructureTransaction"},"LandstructureTransaction")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/TreeManagementTransaction"},"TreeManagementTransaction")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/FleetTransaction"},"FleetTransaction"))),l.a.createElement("hr",null),l.a.createElement(s.a,{exact:!0,path:"/",component:E}),l.a.createElement(s.a,{path:"/AssetDistribution",component:De}),l.a.createElement(s.a,{path:"/InfrastructureTransaction",component:Re}),l.a.createElement(s.a,{path:"/LandstructureTransaction",component:Je}),l.a.createElement(s.a,{path:"/TreeManagementTransaction",component:_e}),l.a.createElement(s.a,{path:"/FleetTransaction",component:ia})))}}]),t}(n.Component);r.a.render(l.a.createElement(ra,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.b642bbe0.chunk.js.map