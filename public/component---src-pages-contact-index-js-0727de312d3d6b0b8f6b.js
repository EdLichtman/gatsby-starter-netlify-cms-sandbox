(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{CgSh:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));a("91GP"),a("f3/d"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("q1tI"),l=a.n(n),r=a("+ZDr"),c=a("7oih");var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t,n=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":n.getAttribute("name")},a.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return Object(r.navigate)(n.getAttribute("action"))})).catch((function(e){return alert(e)}))},a.state={isValidated:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement(c.a,null,l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Contact"),l.a.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),l.a.createElement("div",{hidden:!0},l.a.createElement("label",null,"Don’t fill this out:"," ",l.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",name:"message",onChange:this.handleChange,id:"message",required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},n}(l.a.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-0727de312d3d6b0b8f6b.js.map