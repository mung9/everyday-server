(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(337)},160:function(e,t,a){},231:function(e,t){},233:function(e,t){},267:function(e,t){},268:function(e,t){},333:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),s=a.n(o),c=a(342),l=(a(160),a(15)),i=a(16),u=a(18),p=a(17),m=a(19),d=a(340),h=a(341),f=a(339),v=function(e){e.onEnterSignup;return r.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm top-most"},r.a.createElement("h3",{className:"my-0 mr-md-auto font-weight-bold "},r.a.createElement(f.a,{to:"/todo",style:{color:"black"}},"TODO")),r.a.createElement(f.a,{to:"/signup",className:"btn btn-outline-primary absoulte"},"Sign up"))},b=a(48),g=a(67),y=a(5),E=a.n(y),w=a(11),x=a(41),C=a(42),O=a.n(C),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.items,n=e.onClickItem,o=e.onDelete,s=e.nameProperty,c=e.valueProperty,l=e.stateProperty,i=e.onAllowModif;return r.a.createElement("div",{className:"list mx-auto"},r.a.createElement("h4",{className:"list-title"},t),r.a.createElement("ul",{className:"list-group"},a.map(function(e){return r.a.createElement("li",{onClick:function(){return n&&n(e)},key:e[c],value:e,className:"list-group-item text-center text-break mb-1 "+(e[l]?"list-group-item-checked":null)},e[s],r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"list-item-nav ml-3"},r.a.createElement("i",{onClick:function(){return o(e)},className:"list-item-nav-btn fas fa-minus fa-lg"}),r.a.createElement("i",{onClick:function(){return i(e)},className:"list-item-nav-btn fas fa-pencil-alt fa-lg"})))})))}}]),t}(n.Component);k.defaultProps={valueProperty:"_id",nameProperty:"title",stateProperty:"isCompleted"};var j=k;var N=[31,28,31,30,31,30,31,31,30,31,30,31];var D=function(e){var t=e.date,a=e.onChange,n=e.onPrev,o=e.onNext,s=(e.className,t.getFullYear()),c=t.getMonth()+1,l=t.getDate(),i=function(e,t){return 2!==t?N[t-1]:function(e){return e%4===0&&e%100!==0||e%400===0}(e)?29:28}(s,c),u=function(e){var t=e.currentTarget;console.log("handleUpdateDate called!");var n=t.name,r=t.value,o={year:s,month:c,dateOfTheMonth:l};o[n]=r,a(new Date(o.year,o.month-1,o.dateOfTheMonth))};return r.a.createElement("div",{className:"input-group mb-3 ml-auto"},r.a.createElement("button",{onClick:n,className:"btn btn-light ml-auto mr-2"},r.a.createElement("i",{className:"fas fa-caret-left fa-large px"})),r.a.createElement("button",{onClick:o,className:"btn btn-light mr-2"},r.a.createElement("i",{className:"fas fa-caret-right fa-large px"})),r.a.createElement("button",{onClick:function(){return a(new Date)},className:"btn btn-light mr-2"},"Today"),r.a.createElement("select",{value:s,name:"year",onChange:u,className:"custom-select col",id:"inputGroupSelect04","aria-label":"Example select with button addon"},O.a.range(s-40,s+40).map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-sm"},"\ub144")),r.a.createElement("select",{value:c,name:"month",onChange:u,className:"custom-select col",id:"inputGroupSelect04","aria-label":"Example select with button addon"},O.a.range(1,12).map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-sm"},"\uc6d4")),r.a.createElement("select",{value:l,name:"dateOfTheMonth",onChange:u,className:"custom-select col",id:"inputGroupSelect04","aria-label":"Example select with button addon"},O.a.range(1,i).map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-sm"},"\uc77c")))},S=a(66),M=function(e){var t=e.name,a=e.inputText,n=(e.buttonText,e.onChange),o=e.onButtonClick,s=Object(S.a)(e,["name","inputText","buttonText","onChange","onButtonClick"]);return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{onClick:o,className:"btn btn-dark"},r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement("input",Object.assign({type:"text",value:a,onChange:n,onKeyUp:function(e){13===e.keyCode&&o()},className:"form-control my-form-control-dark",name:t,"aria-label":"","aria-describedby":"basic-addon1"},s)))},T=a(29),P=a.n(T),A=a(44),B=a.n(A),I=a(151),U=a.n(I),F=a(152),_=a.n(F),G=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){var t=e.currentTarget;a.setState({value:t.value})},a.handleConfirm=function(){var e=a.props,t=e.item,n=e.propertyName;(0,e.onConfirm)(O.a.set(t,n,a.state.value))},a.formControl=r.a.createRef();var n=e.item?e.item[e.propertyName]:"";return a.state={value:n},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.item,r=a.propertyName;if(n!==e.item){this.formControl.current.focus();var o=n?n[r]:"";this.setState({value:o})}}},{key:"render",value:function(){var e=this.state.value,t=this.props,a=t.show,n=t.propertyName,o=t.placeholder,s=t.onClose;return r.a.createElement(P.a,{show:a,onHide:s},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,null,"Type new title.")),r.a.createElement(P.a.Body,null,r.a.createElement(U.a,{className:"mb-3"},r.a.createElement(_.a,{ref:this.formControl,value:e,onChange:this.handleChange,name:n,placeholder:o,"aria-label":"Username","aria-describedby":"basic-addon1"}))),r.a.createElement(P.a.Footer,null,r.a.createElement(B.a,{variant:"secondary",onClick:s},"Close"),r.a.createElement(B.a,{variant:"primary",onClick:this.handleConfirm},"Save Changes")))}}]),t}(n.Component),q=a(45),z=a.n(q);z.a.interceptors.response.use(null,function(e){return e.response&&e.response.status>=400&&e.response.status<500||alert("An unexpected error occurred."),Promise.reject(e)});var H={get:z.a.get,post:z.a.post,patch:z.a.patch,put:z.a.put,delete:z.a.delete},J=a(57),R=J.apiUrl+"/todos";function W(e,t,a){return Y.apply(this,arguments)}function Y(){return(Y=Object(w.a)(E.a.mark(function e(t,a,n){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("".concat(R,"/").concat(t,"/").concat(a,"/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function K(e){return $.apply(this,arguments)}function $(){return($=Object(w.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.delete("".concat(R,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(w.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.post("".concat(R),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(e){return X.apply(this,arguments)}function X(){return(X=Object(w.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.put("".concat(R,"/").concat(t._id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Z(e){return{year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate()}}var ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selectedDate:new Date,todos:[],titleInput:"",isModifAllowed:!1,todoBeingModif:null},a.handleChange=function(e){var t=e.currentTarget;a.setState(Object(x.a)({},t.name,t.value))},a.handleDelete=function(){var e=Object(w.a)(E.a.mark(function e(t){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.todos,r=a.state.todos.filter(function(e){return e._id!==t._id}),a.setState({todos:r}),e.prev=3,e.next=6,K(t._id);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response&&400===e.t0.response.status&&alert("The todo has been already deleted."),a.setState({todos:n});case 12:case"end":return e.stop()}},e,null,[[3,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleAddTodo=Object(w.a)(E.a.mark(function e(){var t,n,r,o,s,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,n=t.titleInput,r=t.selectedDate,n){e.next=3;break}return e.abrupt("return");case 3:return o={date:r,title:n},e.next=6,L(o);case 6:s=e.sent,o=s.data,c=[o].concat(Object(g.a)(a.state.todos)),a.setState({todos:c,titleInput:""});case 10:case"end":return e.stop()}},e)})),a.handleCompletionToggling=function(){var e=Object(w.a)(E.a.mark(function e(t){var n,r,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.todos,r=Object(g.a)(a.state.todos),o=r.indexOf(t),r[o]=Object(b.a)({},t),r[o].isCompleted=!r[o].isCompleted,r[o].completedDate=null,a.setState({todos:r}),e.prev=7,e.next=10,V(r[o]);case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(7),e.t0.response&&400===e.t0.response.status&&alert("400 Error!"),a.setState({todos:n});case 16:case"end":return e.stop()}},e,null,[[7,12]])}));return function(t){return e.apply(this,arguments)}}(),a.handleDateChange=function(){var e=Object(w.a)(E.a.mark(function e(t){var n,r,o,s,c,l;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.toDateString()!==a.state.selectedDate.toDateString()){e.next=2;break}return e.abrupt("return");case 2:return n=Z(t),r=n.year,o=n.month,s=n.date,e.next=5,W(r,o,s);case 5:c=e.sent,l=c.data,a.setState({selectedDate:t,todos:l});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handlePrevDate=function(){var e=new Date(a.state.selectedDate);e.setDate(e.getDate()-1),a.handleDateChange(e)},a.handleNextDate=function(){var e=new Date(a.state.selectedDate);e.setDate(e.getDate()+1),a.handleDateChange(e)},a.toggleModifModal=function(e){var t=!a.state.isModifAllowed,n=t?e:null;a.setState({isModifAllowed:t,todoBeingModif:n})},a.handleConfirmModif=function(){var e=Object(w.a)(E.a.mark(function e(t){var n,r,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.todos,r=Object(g.a)(a.state.todos),r.find(function(e){return e._id===t._id}),o=Object(b.a)({},t),a.setState({todos:r,isModifAllowed:!1,todoBeingModif:null}),e.prev=5,e.next=8,V(o);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(5),e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<500&&alert("".concat(e.t0.response.status," Error.")),a.setState({todos:n});case 14:case"end":return e.stop()}},e,null,[[5,10]])}));return function(t){return e.apply(this,arguments)}}(),a.renderDate=function(){a.state.selectedDate},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(E.a.mark(function e(){var t,a,n,r,o,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Z(this.state.selectedDate),a=t.year,n=t.month,r=t.date,e.next=3,W(a,n,r);case 3:o=e.sent,s=o.data,this.setState({todos:s});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.titleInput,n=e.selectedDate,o=e.isModifAllowed,s=e.todoBeingModif;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 pt-5 col-sm-8 mx-auto"},r.a.createElement(D,{date:n,onChange:this.handleDateChange,onPrev:this.handlePrevDate,onNext:this.handleNextDate}),r.a.createElement(M,{name:"titleInput",inputText:a,buttonText:"Add",onChange:this.handleChange,onButtonClick:this.handleAddTodo,placeholder:"Input the todo title you want to add."}),r.a.createElement(j,{onClickItem:this.handleCompletionToggling,items:t,onDelete:this.handleDelete,onAllowModif:this.toggleModifModal})),r.a.createElement(G,{item:s,show:o,propertyName:"title",placeholder:"Type the string to be set as the title of the item.",onClose:this.toggleModifModal,onConfirm:this.handleConfirmModif}),";")}}]),t}(n.Component),te=function(e){var t=e.name,a=e.label,n=e.value,o=e.error,s=e.type,c=e.placeholder,l=e.onChange,i=Object(S.a)(e,["name","label","value","error","type","placeholder","onChange"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t,className:"text-white"},a),r.a.createElement("input",Object.assign({value:n,name:t,id:t,type:s,className:"form-control",placeholder:c,onChange:l},i)),o&&r.a.createElement("div",{className:"alert alert-danger"},o))},ae=a(89),ne=a.n(ae),re=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{},errors:{}},a.schema={},a.validate=function(){return ne.a.validate(a.state.data,a.schema,{abortEarly:!1})},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(x.a)({},t,n),o=Object(x.a)({},t,a.schema[t]);return ne.a.validate(r,o)},a.handleChange=function(e){var t=e.currentTarget,n=Object(b.a)({},a.state.errors),r=a.validateProperty(t).error;if(r){var o=r.details[0];n[t.name]=o.message}else n[t.name]&&delete n[t.name];console.log(n);var s=Object(b.a)({},a.state.data);s[t.name]=t.value,a.setState({data:s,errors:n})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderButton",value:function(e){return r.a.createElement("button",{className:"btn btn-primary"},e)}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4?arguments[4]:void 0,s=this.state,c=s.errors,l=s.data;return r.a.createElement(te,{onChange:this.handleChange,name:e,label:t,value:l[e],type:a,placeholder:n,error:c[e],autoFocus:o})}}]),t}(n.Component),oe=a(63),se=a.n(oe),ce=J.apiUrl+"/users";function le(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(w.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.post(ce,{username:t.username,password:t.password});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ue=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:""},errors:{}},a.schema={username:se.a.string().email().label("Username").required(),password:se.a.string().min(5).max(255).label("Password").required()},a.handleSubmit=function(){var e=Object(w.a)(E.a.mark(function e(t){var n,r,o,s,c,l,i,u,p;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.validate(a.state.data),!(r=n.error)){e.next=25;break}for(alert(r.details[0].message),o=r.details,s=!0,c=!1,l=void 0,e.prev=8,i=o[Symbol.iterator]();!(s=(u=i.next()).done);s=!0)p=u.value,console.log(p.message);e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),c=!0,l=e.t0;case 16:e.prev=16,e.prev=17,s||null==i.return||i.return();case 19:if(e.prev=19,!c){e.next=22;break}throw l;case 22:return e.finish(19);case 23:return e.finish(16);case 24:return e.abrupt("return");case 25:return e.prev=25,e.next=28,le(a.state.data);case 28:e.next=34;break;case 30:return e.prev=30,e.t1=e.catch(25),alert(e.t1.response.data),e.abrupt("return");case 34:a.props.history.replace("/todo");case 35:case"end":return e.stop()}},e,null,[[8,12,16,24],[17,,19,23],[25,30]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-5 pt-5 col-sm-5 mx-auto align-content-center align-middle"},r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username","email","name@example.com",!0),this.renderInput("password","Password","password","q1w2e3r4"),this.renderButton("Register")))}}]),t}(re),pe=(a(333),a(334),a(335),a(43)),me=(r.a.Component,function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleEnterSignup=function(){},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onEnterSignup:this.handleEnterSignup}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/todo",component:ee}),r.a.createElement(h.a,{path:"/signup",component:ue}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(c.a,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e){e.exports={apiUrl:"http://localhost:2000/api"}}},[[155,1,2]]]);
//# sourceMappingURL=main.a00fc910.chunk.js.map