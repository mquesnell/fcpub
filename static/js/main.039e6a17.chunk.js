(this["webpackJsonpfind-count-self-cont"]=this["webpackJsonpfind-count-self-cont"]||[]).push([[0],{110:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(10),s=a.n(o),i=(a(110),a(182)),d=a(181),l=a(91),u=(a(111),a(186)),b=a(172),j=a(173),m=a(171),f=a(92),h=a(169),x=a(83),g=a.n(x),p=a(66),O=a.n(p),y=a(84),v=a.n(y),k=a(82),N=a.n(k),w=a(62),F=a(11),C="".concat("1",".").concat("6",".").concat("0").concat(""),T=function(e){return"".concat("https://young-stream-78694.herokuapp.com","/api/").concat(e,"?key=").concat("mEuqAh6oKH")},D=a(42),S=a.n(D),R=[7,14,21,30],I=function(e){var t=Object(c.useState)(e),a=Object(F.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){var e=window.localStorage.getItem("days");e&&r(e)}),[]),[n,function(e){!function(e){window.localStorage.setItem("days",e),r(e)}(e)}]},q=a(31),B=a.n(q),_=a(58),L=a.n(_),W=a(81),M=a.n(W),A=a(12),G=a.n(A),E=a(52),P=a.n(E),J={name:"Green",primary:{light:"#6abf69",main:"#388e3c",dark:"#00600f",headerText:"#fff"},background:{default:B.a[100]},find:{noneReq:B.a[400],someReq:L.a[500]},today:{border:B.a[700],background:P.a[200],number:G.a[500]},holiday:{border:"#1a237e"},day:{normBkgnd:"white",altBkgnd:M.a[50],number:G.a[500],altNumber:G.a[500]},summary:{text:"rgba(0, 0, 0, 0.87)",background:"#white"},type:"light"},z={name:"Teal",primary:{light:"#52c7b8",main:"#009688",dark:"#00675b",headerText:"#fff"},background:{default:"#b2dfdb"},find:{noneReq:B.a[400],someReq:L.a[500]},today:{border:"#009688",background:"white",number:G.a[500]},holiday:{border:"#f50057"},day:{normBkgnd:"white",altBkgnd:"#fce4ec",number:G.a[500],altNumber:G.a[500]},summary:{text:"rgba(0, 0, 0, 0.87)",background:"#white"},type:"light"},H={name:"Dark",primary:{light:"#484848",main:"#000a12",dark:"#000000",headerText:"#fff"},background:{default:"#263238"},find:{noneReq:B.a[400],someReq:"#fff59d"},today:{border:"#eceff1",background:"#819ca9",number:"#eceff1"},holiday:{border:"#00e676"},day:{normBkgnd:"#4f5b62",altBkgnd:"#718792",number:G.a[500],altNumber:"black"},summary:{text:"#eceff1",background:"#4f5b62"},type:"dark"},U={name:"Gray",primary:{light:"#6abf69",main:"#3c3c3c",dark:"#00600f",headerText:"#8a8a8a"},background:{default:"#1e1e1e"},find:{noneReq:G.a[500],someReq:"#e65100",altNoneReq:G.a[300],altSomeReq:"#3c3c3c"},today:{border:P.a[400],background:"#5c5c5c",number:G.a[500]},holiday:{border:"#03a9f4"},day:{normBkgnd:"#5c5c5c",altBkgnd:P.a[400],number:G.a[500],altNumber:G.a[900]},summary:{text:"#8a8a8a",background:"#3c3c3c"},type:"dark"},V={name:"Blue",primary:{light:"#6abf69",main:"#3f51b5",dark:"#00600f",headerText:"#76ff03"},background:{default:"#3e3e3e"},find:{noneReq:G.a[600],someReq:"#b0ff57",altNoneReq:G.a[500],altSomeReq:"#3c3c3c"},holiday:{border:"#f50057"},today:{border:"#b2ff59",background:"#aab6fe",number:G.a[800]},day:{normBkgnd:"#aab6fe",altBkgnd:"#b2ff59",number:G.a[800],altNumber:G.a[900]},summary:{text:"#1a1a1a",background:"#909090"},type:"dark"},K=a(32),Z=a(89);function Y(e){return Object(Z.a)({palette:Object(K.a)({},e)})}var Q={Blue:Y(V),Green:Y(J),Teal:Y(z),Dark:Y(H),Gray:Y(U)},X=(Object.keys(Q).map((function(e){return Q[e].palette.name})),Object.keys(Q).map((function(e){return Q[e]}))),$=function(e){var t=Object(c.useState)(e),a=Object(F.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(!1),s=Object(F.a)(o,2),i=s[0],d=s[1];return Object(c.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&r(Q[e]),d(!0)}),[]),[n,function(e){var t;t=e,window.localStorage.setItem("theme",t.palette.name),r(t)},i]},ee=a(132).DateTime;function te(e,t,a){var n={startDate:e,number:t,status:"fail",dates:[],goal:0},c=parseInt(t,10);if(isNaN(c))return n;var r=a.dates.length;c>r&&(c=r,n.number=c);var o=function(e,t,a){for(var n=[],c=ee.local(),r=ee.local(c.year,function(e){var t=e.substring(0,2),a=parseInt(t,10);if(isNaN(a))return 0;return a}(e),ce(e)),o=0;o<t;o++){var s=r.toFormat("MM-dd");if(!(s in a.dateIndex))return[];n.push(a.dateIndex[s]),r=r.plus({days:1})}return n}(e,n.number,a);if(o.length<1)return n;for(var s=function(e,t){for(var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=[],c=(new Date).getFullYear().toString(),r=new Date(e+"-"+c).getDay(),o=0;o<t;o++){var s=(r+o)%a.length;n.push(a[s])}return n}(e,n.number),i=0;i<c;i++){var d=o[i],l=a.dates[d];l.dayname=s[i],n.dates.push(l)}return n.goal=a.goal,n.status="ok",n}function ae(e,t){return te(function(e){return t=e.getMonth()+1,a=e.getDate(),t.toString().padStart(2,"0")+"-"+a.toString().padStart(2,"0");var t,a}(new Date),e,t)}function ne(e,t){var a=0,n=0;if(e.length<7||t<1)return a;for(var c=0;c<7;c++)e[c].total_finds<t&&(a+=t-e[c].total_finds,n++);return 0!==a?"".concat(a," -- (").concat(n," day").concat(n>1?"s":"",")"):a}function ce(e){var t=e.substring(3),a=parseInt(t,10);return isNaN(a)?0:a}function re(e){return oe(e,!0)}function oe(e,t){var a=parseInt(e.substring(0,2),10),n=[{short:"dummy",long:"dummy"},{short:"Jan",long:"January"},{short:"Feb",long:"February"},{short:"Mar",long:"March"},{short:"Apr",long:"April"},{short:"May",long:"May"},{short:"Jun",long:"June"},{short:"Jul",long:"July"},{short:"Aug",long:"August"},{short:"Sep",long:"September"},{short:"Oct",long:"October"},{short:"Nov",long:"November"},{short:"Dec",long:"December"}];return isNaN(a)||a<1||a>12?"":t?n[a].short:n[a].long}function se(e){return e?"".concat(ce(e)," ").concat(oe(e)):""}function ie(e){return ee.local().plus({days:e}).toFormat("yyyy-MM-dd")}var de=Object(w.a)((function(){var e=$(Q.Green),t=Object(F.a)(e,3),a=t[0],n=t[1],r=t[2],o=Object(c.useState)(!1),s=Object(F.a)(o,2),i=s[0],d=s[1],l=Object(c.useState)({dates:[],goal:0,number:0}),u=Object(F.a)(l,2),b=u[0],j=u[1],m=Object(c.useState)(!1),f=Object(F.a)(m,2),h=f[0],x=f[1],g=Object(c.useState)(""),p=Object(F.a)(g,2),O=p[0],y=p[1],v=I(21),k=Object(F.a)(v,2),N=k[0],w=k[1],D=Object(c.useState)(!1),R=Object(F.a)(D,2),q=R[0],B=R[1],_=Object(c.useState)({}),L=Object(F.a)(_,2),W=L[0],M=L[1],A=Object(c.useState)({}),G=Object(F.a)(A,2),E=G[0],P=G[1],J=Object(c.useState)("0.0.0"),z=Object(F.a)(J,2),H=z[0],U=z[1],V=Object(c.useState)({pq_time:"",update_time:"",goal:4}),K=Object(F.a)(V,2),Z=K[0],Y=K[1],X=Object(c.useState)({status:"fail",latitude:0,longitude:0}),ee=Object(F.a)(X,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(C),ce=Object(F.a)(ne,2),re=ce[0],oe=ce[1],se=Object(c.useState)({results:{sunrise:"",sunset:""},status:"fail"}),de=Object(F.a)(se,2),le=de[0],ue=de[1],be=Object(c.useState)(!1),je=Object(F.a)(be,2),me=je[0],fe=je[1],he=Object(c.useState)(!1),xe=Object(F.a)(he,2),ge=xe[0],pe=xe[1],Oe=Object(c.useState)({}),ye=Object(F.a)(Oe,2),ve=ye[0],ke=ye[1];return Object(c.useEffect)((function(){S.a.get(T("version")).then((function(e){U(e.data.version)}))}),[]),Object(c.useEffect)((function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){ae({status:"ok",latitude:e.coords.latitude,longitude:e.coords.longitude})}))}),[]),Object(c.useEffect)((function(){var e="lat=".concat(te.latitude,"&lon=").concat(te.longitude),t=ie(O.offset),a="".concat(T("sun"),"&").concat(e,"&date=").concat(t);S.a.get(a).then((function(e){ue(e.data),fe(!0)}))}),[te,O.offset]),Object(c.useEffect)((function(){S.a.get(T("hday/all")).then((function(e){P(e.data)}))}),[]),Object(c.useEffect)((function(){S.a.get(T("config")).then((function(e){Y(e.data)}))}),[]),Object(c.useEffect)((function(){S.a.get(T("fc")).then((function(e){M(e.data),B(!0)}))}),[]),Object(c.useEffect)((function(){var e="loc=".concat(te.latitude,",").concat(te.longitude),t=ie(O.offset),a="".concat(T("weather"),"&").concat(e,"&dt=").concat(t);S.a.get(a).then((function(e){ke(e.data),pe(!0)}))}),[te,O.offset]),{dataLoaded:q,findData:W,setFindData:M,holidays:E,serverVersion:H,config:Z,position:te,appVersion:re,setAppVersion:oe,days:N,setDays:w,theme:a,setTheme:n,componentMounted:r,toDoOpen:i,setToDoOpen:d,toDoWeek:b,setToDoWeek:j,detailIsOpen:h,setDetailIsOpen:x,clickedDate:O,setClickedDate:y,sunTimes:le,sunTimesLoaded:me,weather:ve,weatherIsLoaded:ge}})),le=Object(w.a)((function(){var e=de.useContainer(),t=function(){return e.config.goal},a=function(t){if(t in e.findData.dateIndex)return e.findData.dateIndex[t]},n=function(t){var n=a(t);return""===n?-1:e.findData.dates[n].total_finds},c=function(t){var n=a(t);return""===n?-1:e.findData.dates[n].lab_finds},r=function(t){var n=a(t);return""===n?-1:e.findData.dates[n].norm_finds},o=function(e){var a=t()-n(e);return a<0?"0":a};return{getGoal:t,getTotalFinds:n,getLabFinds:c,getNormalFinds:r,getNumToFind:o,getDayFindData:function(e){return e?{numToFind:o(e),totalFinds:n(e),normalFinds:r(e),labFinds:c(e),goal:t()}:{numToFind:0,totalFinds:0,normalFinds:0,labFinds:0,goal:0}},getFindCountData:function(a){var n=ae(a,e.findData);return{data:n,summary:{generated:new Date(e.config.pq_time).toLocaleString(),goal:t(),next7days:ne(n.dates,t())}}}}}));function ue(e){return"".concat((a=e.latitude,"".concat(a>=0?"N":"S"," ").concat(be(a))),", ").concat((t=e.longitude,"".concat(t>=0?"E":"W"," ").concat(be(t))));var t,a}function be(e){var t=0|e,a=60*Math.abs(e-t);return a>=60&&(t++,a-=60),"".concat(Math.abs(t),"\xb0 ").concat(a.toFixed(3))}function je(e){var t="origin="+e.replace(/\s/g,"+");return"".concat("https://www.geocaching.com/play/search","?").concat(t,"&").concat("nfb[0]=llenseuqm","&").concat("f=2","&").concat("o=2","&").concat("utr=false")}function me(e){var t="ll=".concat(function(e){return"".concat(e.latitude.toFixed(6),",").concat(e.longitude.toFixed(6))}(e));return"".concat("https://www.geocaching.com/map/#","?").concat(t,"&").concat("z=14")}function fe(e){return new Date(e).toLocaleTimeString()}var he=function(){var e=de.useContainer(),t=le.useContainer(),a=e.clickedDate.day,c=t.getDayFindData(a),r=Object(h.a)((function(e){return{root:{},content:{minWidth:"300px",backgroundColor:e.palette.day.normBkgnd,padding:"10px"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.day.number,padding:"5px"},paper:{padding:"10px"},spacer:{height:"10px"},apilink:{display:"flex",justifyContent:"flex-end"},finds:{paddingLeft:"10px",color:c.numToFind>0?e.palette.find.someReq:e.palette.find.noneReq},numtofind:{display:"flex"},gclinksdiv:{display:"flex",justifyContent:"flex-end"},gclink:{color:e.palette.day.altBkgnd,paddingLeft:"20px"},weatherFact:{paddingLeft:"15px"},sun:{display:"flex",alignItems:"center"},suntime:{paddingLeft:"10px"},holiday:{color:e.palette.holiday.border}}}))(),o=function(){e.setDetailIsOpen(!1)},s=function(){if(e.clickedDate.today){var t=e.weather,a="".concat(t.current.temp_f.toFixed(0),", feels like: ").concat(t.current.feelslike_f.toFixed(0)," \xb0F"),c="https:".concat(t.current.condition.icon),o="".concat(t.current.wind_mph.toFixed(0),", gust: ").concat(t.current.gust_mph.toFixed(0)," MPH");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:r.spacer}),Object(n.jsxs)(l.a,{children:["Current weather in ",t.location.name,":"]}),Object(n.jsxs)(l.a,{className:r.weatherFact,children:["Temp: ",a]}),Object(n.jsxs)(l.a,{className:r.weatherFact,children:["Wind: ",o]}),Object(n.jsx)(l.a,{className:r.weatherFact,children:t.current.condition.text}),Object(n.jsx)("div",{className:r.weatherFact,children:Object(n.jsx)("img",{src:c,alt:"weather"})})]})}return Object(n.jsx)(n.Fragment,{})},i=function(){try{if(e.weather.forecast.forecastday.length>0)return!0}catch(t){}return!1},d=function(){if(!i())return Object(n.jsx)(n.Fragment,{});var t=e.weather.forecast.forecastday[0],a="High/Low: ".concat(t.day.maxtemp_f.toFixed(0),"/").concat(t.day.mintemp_f.toFixed(0)," \xb0F"),c=(new Date).getHours();c<23&&c++;var o=e.weather.forecast.forecastday[0].hour[c],s="".concat(o.condition.text),d="https:".concat(o.condition.icon),u="Chance Precip: ".concat(t.day.daily_chance_of_rain,"%"),b="Chance Snow: ".concat(t.day.daily_chance_of_snow,"%"),j="Max. Wind: ".concat(t.day.maxwind_mph.toFixed(0)," MPH"),m="UV Index: ".concat(t.day.uv);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{children:"Forecast:"}),Object(n.jsx)(l.a,{className:r.weatherFact,children:a}),Object(n.jsx)(l.a,{className:r.weatherFact,children:j}),Object(n.jsx)(l.a,{className:r.weatherFact,children:u}),Object(n.jsx)(l.a,{className:r.weatherFact,children:b}),Object(n.jsx)(l.a,{className:r.weatherFact,children:m}),Object(n.jsx)(l.a,{className:r.weatherFact,children:s}),Object(n.jsx)("div",{className:r.weatherFact,children:Object(n.jsx)("img",{src:d,alt:"weather"})})]})},x=function(){var t,a="",c="";return i()?(a=e.weather.forecast.forecastday[0].astro.sunrise,c=e.weather.forecast.forecastday[0].astro.sunset):e.sunTimesLoaded?(a="OK"!==(t=e.sunTimes).status?"UNKNOWN":fe(t.results.sunrise),c=function(e){return"OK"!==e.status?"UNKNOWN":fe(e.results.sunset)}(e.sunTimes)):(a="N/A",c="N/A"),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:r.sun,children:[Object(n.jsx)(N.a,{fontSize:"small"}),Object(n.jsx)(l.a,{className:r.suntime,children:"Sunrise: ".concat(a)})]}),Object(n.jsxs)("div",{className:r.sun,children:[Object(n.jsx)(g.a,{fontSize:"small"}),Object(n.jsx)(l.a,{className:r.suntime,children:"Sunset: ".concat(c)})]})]})},p=function(){var e="",t="";return i()?(e="https://www.weatherapi.com/",t="WeatherAPI.com"):(e="https://sunrise-sunset.org/api",t="Sunrise/Sunset API"),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:r.spacer}),Object(n.jsx)("div",{className:r.spacer}),Object(n.jsx)(m.a,{className:r.apilink,href:e,target:"_blank",rel:"noreferrer",color:"textSecondary",variant:"body2",underline:"always",children:t})]})};return e.weatherIsLoaded?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u.a,{onClose:o,open:e.detailIsOpen,className:r.root,children:Object(n.jsxs)("div",{className:r.content,children:[Object(n.jsxs)(b.a,{id:"daydetailtitle",children:["".concat(se(a)),Object(n.jsx)(j.a,{className:r.closeButton,onClick:o,children:Object(n.jsx)(O.a,{})})]}),Object(n.jsxs)(f.a,{elevation:3,className:r.paper,children:[Object(n.jsxs)(l.a,{children:["Total finds: ","".concat(c.totalFinds)]}),Object(n.jsxs)(l.a,{children:["Normal finds: ","".concat(c.normalFinds)]}),Object(n.jsxs)(l.a,{children:["Lab finds: ","".concat(c.labFinds)]}),Object(n.jsxs)(l.a,{children:["Goal: ","".concat(c.goal)]}),Object(n.jsxs)("div",{className:r.numtofind,children:[Object(n.jsx)(l.a,{children:"Number to find: "}),Object(n.jsx)(l.a,{className:r.finds,children:"".concat(c.numToFind)})]}),e.clickedDate.holiday?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:r.spacer}),Object(n.jsx)(l.a,{className:r.holiday,children:"".concat(e.clickedDate.holidayName)})]}):"",function(){if("ok"===e.position.status){var t=ue(e.position);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:r.spacer}),Object(n.jsxs)("div",{className:r.sun,children:[Object(n.jsx)(v.a,{fontSize:"small"}),Object(n.jsxs)(l.a,{className:r.suntime,children:["Location: ","".concat(t)]})]}),Object(n.jsxs)("div",{className:r.gclinksdiv,children:[Object(n.jsx)(m.a,{className:r.gclink,href:"".concat(je(t)),target:"_blank",rel:"nonreferrer",underline:"always",children:"Search"}),Object(n.jsx)(m.a,{className:r.gclink,href:me(e.position),underline:"always",target:"_blank",rel:"nonreferrer",children:"GC Map"})]}),Object(n.jsx)("div",{className:r.spacer}),x(),Object(n.jsx)("div",{className:r.spacer}),e.weather?Object(n.jsxs)(n.Fragment,{children:[s(),d()]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{children:"Weather Not Available"})}),p()]})}return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{children:"Location: unavailable"})})}()]})]})})}):Object(n.jsx)("div",{children:"Loading..."})},xe=a(178),ge=a(175),pe=a(176),Oe=a(187),ye=a(174),ve=a(188),ke=a(177),Ne=a(183),we=a(87),Fe=a.n(we),Ce=a(86),Te=a.n(Ce),De=a(85),Se=a.n(De),Re=Object(Oe.a)((function(e){var t=de.useContainer(),a=Object(ye.a)(e.theme.breakpoints.down("sm")),c=a?"Finds":"Cache Find Counts",r=Object(h.a)((function(){return{text:{flex:1,color:e.theme.palette.primary.headerText},spacer:{height:"10px"},formControl:{paddingRight:"10px",paddingLeft:"5px"},selectText:{color:e.theme.palette.primary.headerText},nextText:{color:e.theme.palette.primary.headerText,paddingLeft:"7px",paddingRight:"7px"},barText:{color:e.theme.palette.primary.headerText,paddingLeft:"5px",paddingRight:"15px"},icon:{color:e.theme.palette.primary.headerText},weekIcon:{paddingRight:"10px",cursor:"pointer"}}}))();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ge.a,{position:"fixed",children:Object(n.jsxs)(pe.a,{children:[Object(n.jsx)(l.a,{className:r.text,children:c}),Object(n.jsx)(Se.a,{className:"".concat(r.icon," ").concat(r.weekIcon),onClick:function(){var e=function(e){var t=ee.local(),a=t.weekday;return te((7===a?t:t.minus({days:a})).toFormat("MM-dd"),7,e)}(t.findData);t.setToDoWeek(Object(K.a)(Object(K.a)({},e),{},{goal:t.config.goal})),t.setToDoOpen(!0)}}),Object(n.jsx)(l.a,{className:r.barText,children:"|"}),Object(n.jsx)(Te.a,{className:r.icon}),a?"":Object(n.jsx)(l.a,{className:r.nextText,children:"Next:"}),Object(n.jsx)(ke.a,{className:r.formControl,children:Object(n.jsx)(Ne.a,{disableUnderline:!0,classes:{icon:r.selectText,root:r.selectText},labelId:"rangeLabel",id:"rangeSelect",value:t.days,onChange:function(e){t.setDays(e.target.value)},children:R.map((function(e){return Object(n.jsx)(ve.a,{value:e,children:"".concat(e," days")},e)}))})}),Object(n.jsx)(l.a,{className:r.barText,children:"|"}),Object(n.jsx)(Fe.a,{className:r.icon}),Object(n.jsx)(ke.a,{className:r.formControl,children:Object(n.jsx)(Ne.a,{disableUnderline:!0,classes:{icon:r.selectText,root:r.selectText},labelId:"themeLabel",id:"themeSelect",value:e.theme,onChange:function(e){t.setTheme(e.target.value)},children:X.map((function(e){return Object(n.jsx)(ve.a,{value:e,children:e.palette.name},e.palette.name)}))})})]})}),Object(n.jsx)("div",{className:r.spacer})]})})),Ie=Object(h.a)((function(e){return{dayRoot:{textAlign:"center",color:e.palette.primary.headerText}}})),qe=function(e){var t=Ie(),a=e.text;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{className:t.dayRoot,children:a})})},Be=Object(h.a)((function(e){return{headerRoot:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"},cell:{borderStyle:"solid",borderWidth:"2px",borderColor:e.palette.background.default,backgroundColor:e.palette.primary.main,paddingTop:"10px",paddingBottom:"10px"}}})),_e=function(e){var t=Be(),a=e.values;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(xe.a,{item:!0,container:!0,className:t.headerRoot,children:a.map((function(e){return function(e){return Object(n.jsx)(xe.a,{item:!0,className:t.cell,xs:12,children:Object(n.jsx)(qe,{text:e})},e)}(e)}))})})},Le=a(16),We=a(88),Me=a.n(We),Ae=Object(Oe.a)((function(e){var t=e.value,a=t.number,c=t.text,r=t.subtext,o=t.status,s=t.today,i=t.monthFlag,d=e.theme,u=d.palette.day.normBkgnd,b=d.palette.day.number,j=d.palette.find.someReq,m=d.palette.find.noneReq;i&&(u=d.palette.day.altBkgnd,b=d.palette.day.altNumber,d.palette.find.altNoneReq&&(m=d.palette.find.altNoneReq),d.palette.find.altSomeReq&&(j=d.palette.find.altSomeReq));var f={unused:{backgroundColor:d.palette.background.default,numberColor:d.palette.background.default,findColor:d.palette.background.default},ok:{backgroundColor:u,numberColor:b,findColor:m},low:{backgroundColor:u,numberColor:b,findColor:j},today:{backgroundColor:d.palette.today.background,numberColor:d.palette.today.number}},x=f.today.backgroundColor,g=f.today.numberColor;s||(x=f[o].backgroundColor,g=f[o].numberColor);var p=Object(h.a)((function(e){var t,a;return{cellRoot:(t={display:"flex",backgroundColor:x,height:"100px"},Object(Le.a)(t,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(Le.a)(t,e.breakpoints.down("sm"),{justifyContent:"space-between"}),Object(Le.a)(t,e.breakpoints.up("md"),{flexDirection:"row"}),Object(Le.a)(t,"cursor","pointer"),t),cellNumber:{color:g,paddingLeft:"4px"},cellText:{},cellSubText:{},finds:(a={color:f[o].findColor},Object(Le.a)(a,e.breakpoints.up("md"),{paddingTop:"15px"}),Object(Le.a)(a,e.breakpoints.down("sm"),{paddingLeft:"7px"}),Object(Le.a)(a,"textAlign","center"),Object(Le.a)(a,"justifyContent","center"),Object(Le.a)(a,"alignContent","center"),a),checkPad:Object(Le.a)({},e.breakpoints.up("md"),{paddingTop:"10px"})}}))();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(xe.a,{item:!0,container:!0,className:p.cellRoot,children:[Object(n.jsx)(xe.a,{item:!0,sm:12,md:4,children:Object(n.jsx)(l.a,{variant:"subtitle1",className:p.cellNumber,children:a})}),Object(n.jsx)(xe.a,{item:!0,className:p.finds,sm:12,md:8,children:"ok"===o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:p.checkPad}),Object(n.jsx)(Me.a,{fontSize:"large"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{variant:"h4",className:p.cellText,children:c}),Object(n.jsx)(l.a,{variant:"subtitle2",className:p.cellSubText,children:r})]})})]})})})),Ge=function(e,t,a){try{if(a)return Ee(t,e)in a}catch(n){console.log("Error in isHoliday():"),console.log(n.message)}return!1},Ee=function(e,t){return"".concat(e,"-").concat(t)},Pe=function(e){var t=de.useContainer(),a=e.values,c=Object(h.a)((function(e){return{weekRoot:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"},day:{borderColor:e.palette.background.default},today:{borderColor:e.palette.today.border},holiday:{borderColor:e.palette.holiday.border},unused:{borderColor:e.palette.background.default},commonBorder:{borderStyle:"solid",borderWidth:"3px"}}}))(),r=function(e){var a=e.status,r=e.today,o=e.rawDate,s=e.index,i=e.year,d={day:o,offset:s,today:r,year:i,holiday:!1,holidayName:""},l=r?c.today:c.day;return!r&&Ge(o,i,t.holidays)&&(l=c.holiday,d.holiday=!0,d.holidayName=function(e,t,a){return Ge(e,t,a)?a[Ee(t,e)]:""}(o,i,t.holidays)),"unused"===a&&(l=c.unused),Object(n.jsx)(xe.a,{item:!0,className:"".concat(c.commonBorder," ").concat(l),xs:12,onClick:function(){!function(e){""!==e.day&&(t.setClickedDate(e),t.setDetailIsOpen(!0))}(d)},children:Object(n.jsx)(Ae,{value:e},Math.random())},Math.random())};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(xe.a,{item:!0,container:!0,className:c.weekRoot,children:a.map((function(e){return r(e)}))})})};function Je(e){return function(e){for(var t=[],a=0,n=e.length;a<n;a+=7)t.push(e.slice(a,a+7));return t}(function(e){for(var t=e.dates,a=e.goal,n=[],c=new Date,r=c.getDay(),o=c.getDate(),s=0;s<r;s++)n.push(He(""));for(var i=0;i<t.length;i++)n.push(ze(t[i],a,o,i));var d=7-n.length%7;7===d&&(d=0);for(var l=0;l<d;l++)n.push(He(""));for(var u=!1,b=c.getFullYear(),j=0,m=n.length;j<m;j++)j>0&&n[j].first&&(u=!u,"01-01"===n[j].rawDate&&b++),n[j].monthFlag=u,n[j].year=b,n[j].today=n[j].today&&!u;return n}(e))}function ze(e,t,a,n){var c=ce(e.date);return{number:1===c?re(e.date)+" "+c:c,text:e.total_finds,subtext:"Finds",status:e.total_finds<t?"low":"ok",today:c===a,first:1===c,rawDate:e.date,index:n}}function He(e){return{number:e,text:"",subtext:"",status:"unused",today:!1,first:!1,rawDate:"",index:-1}}var Ue=a(179),Ve=a(180),Ke=a(184),Ze=Object(h.a)((function(e){return{root:{borderRadius:"7px",backgroundColor:e.palette.summary.background},box:{display:"flex",justifyContent:"space-between",alignItems:"center"},zeroReq:{color:e.palette.find.noneReq},moreThanZero:{color:e.palette.find.someReq},summaryFigs:{textAlign:"center"},text:{color:e.palette.summary.text}}}));function Ye(e){var t=Ze(),a=e.summary,c=a.generated,r=a.goal,o=a.next7days;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(Ue.a,{className:t.root,variant:"outlined",children:Object(n.jsx)(Ve.a,{children:Object(n.jsxs)(Ke.a,{className:t.box,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(l.a,{className:t.text,children:"Updated:"}),Object(n.jsx)(l.a,{className:t.text,children:"Goal per day:"}),Object(n.jsx)(l.a,{className:t.text,children:"Next 7 days:"})]}),Object(n.jsxs)("div",{className:t.summaryFigs,children:[Object(n.jsx)(l.a,{className:t.text,children:c}),Object(n.jsx)(l.a,{className:t.text,children:r}),Object(n.jsx)(l.a,{className:0===o?t.zeroReq:t.moreThanZero,children:o})]})]})})})})}var Qe=Object(h.a)((function(){return{g7root:{flexGrow:1,padding:"10px"},summary:{paddingBottom:"16px"}}})),Xe=function(){var e=de.useContainer(),t=le.useContainer(),a=t.getFindCountData(e.days),c=Je(Object(K.a)(Object(K.a)({},a.data),{},{goal:t.getGoal()})),r=Qe(),o=0;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(xe.a,{container:!0,className:r.g7root,spacing:0,children:[Object(n.jsx)(xe.a,{item:!0,xs:12,className:r.summary,children:Object(n.jsx)(Ye,{summary:a.summary})}),Object(n.jsx)(_e,{values:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}),c.map((function(e){return Object(n.jsx)(Pe,{values:e},o++)}))]})})},$e=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(xe.a,{container:!0,direction:"column",children:[Object(n.jsx)(xe.a,{item:!0,children:Object(n.jsx)(Re,{})}),Object(n.jsx)(pe.a,{}),Object(n.jsx)(Xe,{})]})})};var et=Object(Oe.a)((function(e){var t=de.useContainer(),a=Object(ye.a)(e.theme.breakpoints.down("sm")),c=Object(h.a)((function(e){return{root:{},content:{minWidth:"300px",padding:"10px",backgroundColor:e.palette.background.default},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.day.normBkgnd,padding:"5px"},spacer:{height:"10px"},gridRoot:{display:"flex",flexDirection:"column"},summary:{padding:"10px",color:e.palette.day.number,backgroundColor:e.palette.day.normBkgnd},weekGrid:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"},dayCell:{},dayText:{padding:"5px",color:e.palette.day.number},findText:{paddingBottom:"7px",textAlign:"center",color:e.palette.find.someReq},findZero:{color:"transparent"},dayPaper:{backgroundColor:e.palette.day.normBkgnd}}}))(),r=function(){t.setToDoOpen(!1)},o=function(e){var t=a?2:3,n=e.dayname.slice(0,t),c=ce(e.date);return"".concat(c," ").concat(n)},s=function(e){var a,r=(a=e.total_finds)<t.toDoWeek.goal?t.toDoWeek.goal-a:0,s="".concat(c.findText);return 0===r&&(s="".concat(c.findText," ").concat(c.findZero)),Object(n.jsx)(xe.a,{item:!0,className:c.dayCell,children:Object(n.jsxs)(f.a,{className:c.dayPaper,children:[Object(n.jsx)(l.a,{className:c.dayText,variant:"overline",noWrap:!0,children:o(e)}),Object(n.jsx)(l.a,{className:s,variant:"h5",children:r})]})},e.date)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u.a,{onClose:r,open:t.toDoOpen,className:c.root,children:Object(n.jsxs)("div",{className:c.content,children:[Object(n.jsxs)(b.a,{id:"nextweek",children:["Number To Find This Week",Object(n.jsx)(j.a,{className:c.closeButton,onClick:r,children:Object(n.jsx)(O.a,{})})]}),Object(n.jsxs)(xe.a,{container:!0,className:c.gridRoot,children:[Object(n.jsx)(xe.a,{container:!0,item:!0,className:c.weekGrid,spacing:1,xs:12,children:t.toDoWeek.dates.map((function(e){return s(e)}))}),Object(n.jsx)("div",{className:c.spacer}),function(){for(var e=0,a=0,r=t.toDoWeek,o=0;o<r.dates.length;o++){var s=r.dates[o];s.total_finds<r.goal&&(a++,e+=r.goal-s.total_finds)}return Object(n.jsxs)(f.a,{className:c.summary,children:[Object(n.jsxs)(l.a,{children:["Daily Goal: ",r.goal]}),Object(n.jsxs)(l.a,{children:["Total Finds Needed This Week: ",e]}),Object(n.jsxs)(l.a,{children:["Days Needing Finds: ",a]})]})}()]})]})})})})),tt=function(){var e=de.useContainer();return e.componentMounted&&e.dataLoaded?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(le.Provider,{children:Object(n.jsxs)(d.a,{theme:e.theme,children:[Object(n.jsx)(i.a,{}),Object(n.jsx)($e,{}),Object(n.jsxs)(l.a,{align:"right",variant:"subtitle2",style:{paddingRight:"10px"},children:[e.appVersion,"/",e.serverVersion]}),Object(n.jsx)(he,{}),Object(n.jsx)(et,{})]})})}):Object(n.jsx)("div",{children:"Loading..."})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(de.Provider,{children:Object(n.jsx)(tt,{})})}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.039e6a17.chunk.js.map