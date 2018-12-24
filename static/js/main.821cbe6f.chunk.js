(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),p=(a(36),a(38),a(11)),h=a.n(p),d=a(29),f=a(17),b=a(14),v=a(12),E=a.n(v),y=r.a.createContext(),g=function(){var e=Object(b.a)(h.a.mark(function e(t,a){var n,r,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=a.type,e.next="DELETE_CONTACT"===e.t0?3:"ADD_CONTACT"===e.t0?11:"UPDATE_CONTACT"===e.t0?15:20;break;case 3:return e.prev=3,e.next=6,E.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a.payload));case 6:e.next=10;break;case 8:e.prev=8,e.t1=e.catch(3);case 10:return e.abrupt("return",Object(f.a)({},t,{contacts:t.contacts.filter(function(e){return e.id!==a.payload})}));case 11:return e.next=13,E.a.post("https://jsonplaceholder.typicode.com/users",a.payload);case 13:return n=e.sent,e.abrupt("return",Object(f.a)({},t,{contacts:[n.data].concat(Object(d.a)(t.contacts))}));case 15:return r=a.payload.id,e.next=18,E.a.put("https://jsonplaceholder.typicode.com/users/".concat(r),a.payload);case 18:return o=e.sent,e.abrupt("return",Object(f.a)({},t,{contacts:t.contacts.map(function(e){return e.id+""===r+""?e=o.data:e})}));case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}},e,this,[[3,8]])}));return function(t,a){return e.apply(this,arguments)}}(),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(a.state,t);case 2:n=e.sent,a.setState(n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),j=y.Consumer,C=a(65),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDelete=function(e,t){e({type:"DELETE_CONTACT",payload:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({showContactInfo:!this.state.showContactInfo})}},{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.email,o=t.phone,c=t.id,l=this.state.showContactInfo,s=function(e){return e?"fas fa-angle-down":"fas fa-angle-right"};return r.a.createElement(j,null,function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a,"\xa0",r.a.createElement("i",{onClick:e.toggle.bind(e),className:s(l),style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDelete.bind(e,i,c)}),r.a.createElement(C.a,{to:"contact/edit/".concat(c)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",fontSize:"18px",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",n),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(e){return r.a.createElement(O,{key:e.id,contact:e})}))})}}]),t}(n.Component),w=function(e){var t=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")))))))};w.defaultProps={branding:"My App"};var S=w,x=a(13),A=a(27),D=a.n(A),T=function(e){var t=e.label,a=e.name,n=e.value,o=e.placeholder,c=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{value:n,onChange:l,type:c,name:a,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:o}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};T.defaultProps={type:"text"};var P=T,I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onInputChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.onSubmit=function(e,t){t.preventDefault();var n=a.state,r=n.name,o=n.email,c=n.phone;""!==r?""!==o?""!==c?(e({type:"ADD_CONTACT",payload:{name:r,email:o,phone:c}}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")):a.setState({errors:{phone:"Phone is Required"}}):a.setState({errors:{email:"Email is Required"}}):a.setState({errors:{name:"Name is Required"}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,o=t.phone,c=t.errors;return r.a.createElement(j,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{value:a,onChange:e.onInputChange.bind(e),name:"name",label:"Name",className:"form-control form-control-lg",error:c.name,placeholder:"Enter Name..."}),r.a.createElement(P,{value:n,onChange:e.onInputChange.bind(e),type:"email",name:"email",className:"form-control form-control-lg",placeholder:"Enter Email...",error:c.email,label:"Email"}),r.a.createElement(P,{value:o,onChange:e.onInputChange.bind(e),type:"phone",name:"phone",className:"form-control form-control-lg",placeholder:"Enter Phone...",error:c.phone,label:"Phone"}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),R=a(66),U=a(67),M=a(68);function W(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manager contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function q(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist."))}var _=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){var a=t.title,n=t.body;return e.setState({title:a,body:n})})}},{key:"componentWillMount",value:function(){console.log("componentWillMount...")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate...")}},{key:"componentWillUpdate",value:function(){console.log("componentWillUpdate...")}},{key:"componentWillReceiveProps",value:function(e,t){console.log("componentWillReceiveProps...")}},{key:"getSnapshotBeforeUpdate",value:function(e,t){console.log("getSnapshotBeforeUpdate...")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Test Component"),r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null,this.state.body))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{test:"something"}}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onInputChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.onSubmit=function(e,t){t.preventDefault();var n=a.state,r=n.name,o=n.email,c=n.phone;""!==r?""!==o?""!==c?(e({type:"UPDATE_CONTACT",payload:{name:r,email:o,phone:c,id:a.props.match.params.id}}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")):a.setState({errors:{phone:"Phone is Required"}}):a.setState({errors:{email:"Email is Required"}}):a.setState({errors:{name:"Name is Required"}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,E.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState(n);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,o=t.phone,c=t.errors;return r.a.createElement(j,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{value:a,onChange:e.onInputChange.bind(e),name:"name",label:"Name",className:"form-control form-control-lg",error:c.name,placeholder:"Enter Name..."}),r.a.createElement(P,{value:n,onChange:e.onInputChange.bind(e),type:"email",name:"email",className:"form-control form-control-lg",placeholder:"Enter Email...",error:c.email,label:"Email"}),r.a.createElement(P,{value:o,onChange:e.onInputChange.bind(e),type:"phone",name:"phone",className:"form-control form-control-lg",placeholder:"Enter Phone...",error:c.phone,label:"Phone"}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(R.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(U.a,null,r.a.createElement(M.a,{exact:!0,path:"/",component:k}),r.a.createElement(M.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(M.a,{exact:!0,path:"/contact/edit/:id",component:B}),r.a.createElement(M.a,{exact:!0,path:"/about",component:W}),r.a.createElement(M.a,{exact:!0,path:"/test",component:_}),r.a.createElement(M.a,{component:q}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.821cbe6f.chunk.js.map