(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(e,t,a){e.exports=a.p+"static/media/gitlab.11d38b71.png"},248:function(e,t,a){e.exports=a(674)},253:function(e,t,a){},255:function(e,t,a){},557:function(e,t,a){},559:function(e,t){var a={HPORT:Object({NODE_ENV:"production",PUBLIC_URL:""}).HPORT};e.exports=a},584:function(e,t,a){},615:function(e,t){},619:function(e,t,a){},674:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(42),r=a.n(l),c=(a(253),a(678)),i=a(680),s=a(679),u=a(67),m=a(68),d=a(70),p=a(69),h=a(71),f=a(226),b=a.n(f),E=a(55),g=a.n(E),v=(a(255),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"test",value:function(){fetch("/deploy",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:"https://github.com/ishawakankar/test2.git"}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),o.a.createElement(g.a,{className:"App-link",id:"loginButton",href:"/auth"},"LOGIN ")))}}]),t}(n.Component)),O=a(228),w=a(72),k=a(76),y=(a(200),a(235)),j=a.n(y),N=a(236),C=a.n(N),x=(a(16),a(182)),S=a(152),B=a.n(S),T=a(238),I=a.n(T),P=a(237),A=a.n(P),L=a(240),U=a.n(L),_=a(239),R=a.n(_),H=a(229),D=a.n(H),M=a(230),G=a.n(M),W=a(231),J=a.n(W),V=a(116),z=a.n(V),F=a(66),$=a.n(F),q=a(151),K=a(233),Q=a.n(K),X=a(183),Y=a.n(X),Z=a(180),ee=a.n(Z),te=a(179),ae=a.n(te),ne=a(234),oe=a.n(ne),le=a(149),re=a.n(le),ce=a(232),ie=a.n(ce),se=a(677),ue=(a(557),a(559),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={open:!1},a.handleToggle=function(){a.setState(function(e){return{open:!e.open}})},a.handleClose=function(e){a.anchorEl.contains(e.target)||a.setState({open:!1})},a.state={listdata:[],data:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;q.Observable.fromPromise(fetch("/profile").then(function(e){return e.json()})).subscribe(function(t){e.setState({data:t})},function(e){console.log("err hello"),window.location.assign("http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).HPORT,"/#/"))},function(e){})}},{key:"render",value:function(){var e=this,t=this.state.open;return o.a.createElement("div",{className:"root"},o.a.createElement(G.a,{position:"static",className:"app"},o.a.createElement(J.a,{className:"iconss"},o.a.createElement(se.a,{to:"/home",className:"lnk"},o.a.createElement(re.a,{className:"menuButton",color:"inherit","aria-label":"Menu"},o.a.createElement(ie.a,null))),o.a.createElement(se.a,{to:"/listUrl",className:"lnk"},o.a.createElement(z.a,{variant:"h6",color:"inherit",className:"grow"},"App")),o.a.createElement(se.a,{to:"/newApp",className:"lnk"},o.a.createElement(z.a,{variant:"h6",color:"inherit",className:"grow"},"NewApp")),o.a.createElement("div",{className:"root"},o.a.createElement(g.a,{buttonRef:function(t){e.anchorEl=t},"aria-owns":t?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:this.handleToggle,className:"button2",variant:"persistent"},o.a.createElement(B.a,{alt:"Thumb",src:this.state.data.avatar_url}),"\xa0\xa0",o.a.createElement("i",{class:"fa fa-chevron-down"})),o.a.createElement(Q.a,{open:t,anchorEl:this.anchorEl,transition:!0,disablePortal:!0,className:"profiledata"},function(t){var a=t.TransitionProps,n=t.placement;return o.a.createElement(ae.a,Object.assign({},a,{id:"menu-list-grow",style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),o.a.createElement($.a,null,o.a.createElement(oe.a,{onClickAway:e.handleClose},o.a.createElement(ee.a,null,o.a.createElement("h3",null,o.a.createElement("strong",null,e.state.data.name)),o.a.createElement("div",{className:"username"},"@",e.state.data.username,o.a.createElement("br",null)," ",e.state.data.email),o.a.createElement("hr",null),o.a.createElement(g.a,{href:e.state.data.web_url,target:"_blank",className:"buttonmenu"},o.a.createElement(Y.a,null,"Go to gitlab")),o.a.createElement(g.a,{href:"/logout",className:"buttonmenu",target:"_self"},o.a.createElement(Y.a,null,"Logout"))))))})))))}}]),t}(o.a.Component)),me=(a(584),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleExpandClick=function(e){a.setState({expanded:Object(O.a)({},a.state.expanded,Object(k.a)({},e,!a.state.expanded[e]))})},a.state={listdata:[],data:[],expanded:{}},a.handleExpandClick=a.handleExpandClick.bind(Object(w.a)(Object(w.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;q.Observable.fromPromise(fetch("/apps").then(function(e){return e.json()})).subscribe(function(t){console.log("data fetched",t),e.setState({data:t})})}},{key:"test",value:function(e){console.log("inside test function",e),fetch("/downloadLog/".concat(e)).then(function(e){e.blob(),console.log("data: ",e),window.open(e.url)}).then(function(e){return console.log("this is resp: ",e),e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.expanded;this.props.classes;return console.log(a),o.a.createElement("div",null,o.a.createElement(ue,null),a.map(function(t,a){return o.a.createElement("div",{className:"root"},o.a.createElement(j.a,{className:"card"},console.log("name is: ",t.app_name),o.a.createElement(C.a,{action:o.a.createElement(B.a,{"aria-label":"Deployed",className:"checkavatar",style:{color:"yellowgreen",marginRight:40,marginTop:13}},console.log("id check: ",typeof t.appId," ",t.appId),"-1"===t.appId?o.a.createElement(A.a,{style:{color:"red"}}):o.a.createElement(I.a,{style:{color:"green"}})),className:"appinfo",title:t.app_name,subheader:D()(t.timestamp).fromNow()}),o.a.createElement(g.a,{variant:"persistent",className:"download",onClick:function(){return e.test(t.app_name)}},"Download logs  "),o.a.createElement(R.a,{in:n[a],timeout:"auto",unmountOnExit:!0},o.a.createElement(U.a,null))))}))}}]),t}(o.a.Component)),de=Object(x.withStyles)(function(e){return{expand:Object(k.a)({transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},e.breakpoints.up("sm"),{marginRight:-8}),expandOpen:{transform:"rotate(180deg)"}}})(me),pe=a(178),he=a(31),fe=a(38),be=a(241),Ee=a.n(be),ge=a(155),ve=a.n(ge),Oe=a(181),we=a.n(Oe),ke=a(242),ye=a.n(ke);var je=function(e){return o.a.createElement("div",null,o.a.createElement(ye.a,{className:"progress",thickness:7}))},Ne=a(243),Ce=a.n(Ne),xe=a(244),Se=a.n(xe),Be=(a(619),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleOpen=function(){document.getElementById("webhook").checked?a.setState({open:!0}):a.setState({open:!1})},a.handleSubmitOpen=function(){a.setState({open:!1}),console.log("username:",a.state.username),console.log("pass:",a.state.password)},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.state={context:"",username:"",password:""},a.handleClickButton=a.handleClickButton.bind(Object(w.a)(Object(w.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Ee()();console.log("before rxjs"),Object(pe.a)(document.getElementById("outlined-email-input"),"click").pipe(Object(he.a)(function(){return{url:document.getElementById("outlined-email-input2").value,username:e.state.username,password:e.state.password}}),Object(fe.a)(function(e){return""!==e.url})).subscribe(function(e){console.log("THIS IS THE URL: *********** ",e),fetch("/deploy",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({collector:e})}).then(function(e){return e.json()})}),t.on("chat",function(e){document.getElementById("logger").style.display="block",document.getElementById("logger").innerHTML+="".concat(e," <br/>")})}},{key:"handleClickButton",value:function(){console.log("inside handleClickButton",this.state.loading),document.getElementById("outlined-email-input2").value&&this.setState({context:o.a.createElement(je,null),open:!1})}},{key:"render",value:function(){var e=this,t=this.state.context;return o.a.createElement("div",{className:"main"},o.a.createElement(ue,null),o.a.createElement($.a,{className:"root1",elevation:20},o.a.createElement("div",{className:"text1"},o.a.createElement(ve.a,{id:"outlined-email-input2",label:"GitURL",className:"textField1",type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"}),o.a.createElement(g.a,{variant:"outlined",color:"primary",className:"button1",id:"outlined-email-input",name:"buttonSubmit",onClick:this.handleClickButton,onPress:this.props.onClick},"Deploy"),o.a.createElement(Ce.a,{control:o.a.createElement(Se.a,{id:"webhook",onChange:this.handleOpen,value:"checkedB",color:"primary"}),label:"Use webhook"}),"*Provide your GITHUB credentials",this.state.open?o.a.createElement("div",null,o.a.createElement(ve.a,{id:"username",onChange:function(t){return e.handleChange(t)},value:this.state.username,label:"Username",type:"text",name:"username",margin:"normal"})," \xa0\xa0\xa0",o.a.createElement(ve.a,{id:"password",onChange:function(t){return e.handleChange(t)},value:this.state.password,label:"Password",type:"password",name:"password",margin:"normal"}),"\xa0\xa0\xa0",o.a.createElement(g.a,{onClick:this.handleSubmitOpen,color:"primary",margin:"normal",variant:"outlined",style:{marginTop:"5%"}},"Submit")):null,t)),o.a.createElement($.a,{id:"logger",className:"root2",style:{maxHeight:150,overflow:"auto",padding:20,background:"black",color:"white",display:"none",fontSize:"0.8rem"}},o.a.createElement(we.a,null)))}}]),t}(o.a.Component));var Te=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{path:"/",component:v,exact:!0}),o.a.createElement(s.a,null,o.a.createElement(i.a,{path:"/home",component:Be}),o.a.createElement(i.a,{path:"/listUrl",component:de}),o.a.createElement(i.a,{path:"/newApp",component:Be}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[248,2,1]]]);
//# sourceMappingURL=main.ac277470.chunk.js.map