(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f7":function(t,e,a){},"16a3":function(t,e,a){"use strict";a("cd8c")},"1bf3":function(t,e,a){t.exports=a.p+"img/undraw_feeling_proud_qne1.2462d87b.svg"},2532:function(t,e,a){},"426b":function(t,e,a){},"42b2":function(t,e,a){t.exports=a.p+"img/server.bb140c63.svg"},"53d7":function(t,e,a){"use strict";a("01f7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("main",{attrs:{id:"page-wrap"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav"},[t._m(0),a("div",{ref:"hamburger",staticClass:"hamburger",on:{click:t.hamburgerToggle}},[a("span",{staticClass:"bar"}),a("span",{staticClass:"bar"}),a("span",{staticClass:"bar"})]),a("aside",{ref:"menu"},[a("div",{staticClass:"close",on:{click:t.hamburgerToggle}},[a("span"),a("span")]),a("ul",t._l(t.links,(function(e,n){return a("li",{key:n},[a("a",{attrs:{href:"#"+e.toLowerCase()}},[t._v(t._s(e))])])})),0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:"https://raw.githubusercontent.com/alifaraji64/eagle-css/eef997d938788fd69dc328ba1859da4c344640ba/Asset%202.svg",alt:"logo",width:"50"}})])}],c={components:{},methods:{hamburgerToggle:function(){var t=this.$refs.menu;t.classList.toggle("is-open")},goto:function(t){this.$router.push(t.toLowerCase())}},data:function(){return{links:["Contact","About","Projects"]}}},l=c,u=(a("16a3"),a("2877")),d=Object(u["a"])(l,i,o,!1,null,null,null),f=d.exports,h={components:{Navbar:f}},m=h,b=(a("5c0b"),Object(u["a"])(m,s,r,!1,null,null,null)),p=b.exports,g=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Main"),a("About"),a("Contact"),a("Projects"),a("Footerc")],1)},_=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[t._m(0),a("section",{staticClass:"skewed-bg"},[a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[a("h1",{ref:"main_text"})]),t._m(1)])]),a("canvas")])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"button"}},[a("a",{attrs:{href:"#contact"}},[t._v("Get in Touch")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{attrs:{src:a("1bf3"),alt:"home",width:"230"}})])}],x=(a("99af"),{methods:{toContact:function(){this.$router.push("/contact")}},mounted:function(){var t=this,e=document.querySelector("canvas"),a=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight/6;var n={y:e.height/2,length:.009,amplitude:28,frequency:200.01,lineWidth:30},s={r:216,g:27,b:96},r={r:255,g:255,b:255,a:1},i=.04;function o(){n.frequency+=i,requestAnimationFrame(o),a.fillStyle="rgba(".concat(r.r,",").concat(r.g,",").concat(r.b,",").concat(r.a,")"),a.fillRect(0,0,e.width,e.height),a.beginPath(),a.moveTo(-100,e.height/2);for(var t=0;t<e.width;t++)a.lineTo(t,n.y+Math.sin(t*n.length+n.frequency)*n.amplitude);a.strokeStyle="rgb(".concat(s.r,",").concat(s.g,",").concat(s.b,")"),a.lineWidth=n.lineWidth,a.stroke(),a.closePath()}o(),window.addEventListener("resize",(function(){e.width=window.innerWidth,e.height=window.innerHeight/6}));var c="Creativity and Interactivity are the things that I am expert in. I can create your dream website that you can enjoy and also profit.",l=0;l<c.length&&setInterval((function(){if(l<c.length){var e=document.createElement("span"),a=t.$refs.main_text;e.innerHTML=c[l]&&c[l],e.innerHTML&&a.appendChild(e),l++}}),65)}}),C=x,j=(a("69e3"),Object(u["a"])(C,y,w,!1,null,"6a138542",null)),k=j.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("h1",{staticClass:"text-xl black",attrs:{id:"about"}},[t._v("About me")]),a("hr"),a("div",{staticClass:"grid xl-3 lg-2 sm-1 center"},t._l(t.cards,(function(e,n){return a("section",{key:n},[a("input",{attrs:{type:"checkbox",id:e.id,hidden:""}}),a("label",{attrs:{for:e.id}},[a("div",{staticClass:"card"},[a("div",{class:e.class1},[a("h2",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.title))]),a("br"),a("div",[a("img",{attrs:{src:e.img,width:"200"}})])]),a("div",{class:e.class2},[a("h2",{staticClass:"bold"},[t._v(t._s(e.title))]),a("h5",{staticClass:"text-md"},[t._v(" "+t._s(e.desc)+" ")]),a("router-link",{class:e.class3,attrs:{to:"#"}},[a("span"),a("span"),a("span",{staticStyle:{"max-height":"1px !important"}}),a("span"),t._v(" get in touch ")])],1)])])])})),0)])},$=[],E={data:function(){return{cards:[{id:"flipping_card-1",title:"Who Am I?",img:"./images/face.svg",class1:"card-front bg-dpink",class2:"card-back bg-orange",class3:"btn neon-btn-lblack neon-btn bold text-md",desc:"My name is ali and I am a full-stack web developer with more than 3 years of experience as a developer. I really enjoy create Outsanding,creative and interactive apps for you"},{id:"flipping_card-2",title:"what can I build for you?",img:"./images/penguin.svg",class1:"card-front bg-dblue",class2:"card-back bg-brown",class3:"btn neon-btn-lgreen neon-btn bold text-lg",desc:"within these 3 years I've worked with many technologies but my specialities are vuejs,nodejs,mongodb,php,flutter. with these tech stacks I can build anything that you want me to build as well as small projects like bug fixing and etc"},{id:"flipping_card-3",title:"why You Should Work with Me?",img:"./images/why.svg",class1:"card-front bg-dgray",class2:"card-back bg-lred",class3:"btn neon-btn-dblue neon-btn bold text-lg",desc:"I am patient developer that you can easily tell me about your idea and get the best. your satisfaction is the most important thing for me so be sure that you will get the best result"}]}}},P=E,T=(a("6b3b"),Object(u["a"])(P,O,$,!1,null,"ce5a2b9e",null)),M=T.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("h1",{staticClass:"text-xl black",attrs:{id:"contact"}},[t._v("Contact")]),a("hr"),a("div",[a("form",{attrs:{action:"mailto:alifaraji65452@gmail.com",method:"post",enctype:"text/plain"}},[t._v("> "),a("h3",{staticClass:"text-lg bold"},[t._v("CONTACT")]),a("input",{attrs:{type:"text",placeholder:"Your Name",name:"name"}}),a("textarea",{attrs:{cols:"30",rows:"10",placeholder:"Your Message",name:"message"}}),a("button",{staticClass:"text-md bold",attrs:{type:"submit"}},[t._v("SEND")])])])])}],A={},H=A,L=(a("6afe"),Object(u["a"])(H,S,I,!1,null,"da75515c",null)),W=L.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"text-xl black",attrs:{id:"projects"}},[t._v("Projects")]),n("hr"),n("div",{staticClass:"main"},[n("div",{staticClass:"container"},[n("section",{staticClass:"one"},[n("div",[n("div",{staticClass:"images"},[n("img",{attrs:{src:a("e1b5"),alt:"game"}}),n("img",{attrs:{src:a("5d59"),alt:"front-end"}})]),n("br"),n("h1",{staticClass:"text-xl bold"},[t._v("Front-end Projects")]),n("br"),n("br"),n("p",{staticClass:"text-md"},[t._v(" for check my cool front-end pojects such as games, animations,designs take a look at my "),n("a",{attrs:{href:"https://codepen.io/ali-faraji-dev"}},[t._v("CodePen")]),t._v(" account. these animations and games have been built mainly using vanilla javascript,html5 canvas and sometimes with libraries like gsap. ")])])]),n("section",{staticClass:"two"},[n("div",[n("div",{staticClass:"images"},[n("img",{attrs:{src:a("42b2"),alt:"game"}}),n("img",{attrs:{src:a("5c97"),alt:"front-end"}})]),n("br"),n("h1",{staticClass:"text-xl bold"},[t._v("full-stack Projects")]),n("br"),n("br"),n("p",{staticClass:"text-md"},[t._v(" for check my full-stack projects like e-commerce,instagram-clone,youtube-clone,bots and also flutter projects just take a lok at my "),n("a",{attrs:{href:"https://github.com/alifaraji64"}},[t._v("Github")]),t._v(" account. also these projects have been built mainly using node.js,mongodb,firebase,php and flutter for sure ")])])])])])])}],F={mounted:function(){var t=new ScrollMagic.Controller,e=(new TimelineMax).to(".container",2,{z:-150,opacity:.5,rotateZ:"180deg"}).to(".container",2,{x:"-33.3%"}).to(".container",2,{z:0,opacity:1,rotateZ:"0deg"});new ScrollMagic.Scene({triggerElement:".main",triggerHook:"onLeave",duration:"500%"}).setPin(".main").setTween(e).addTo(t)}},z=F,Y=(a("6e93"),Object(u["a"])(z,q,N,!1,null,"73545e09",null)),G=Y.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("hr"),a("footer",[a("p",[t._v("ali faraji © all rights reserved")]),a("div",{staticClass:"links"},[a("a",{attrs:{href:"https://www.instagram.com/alibtd0"}},[a("i",{staticClass:"fab fa-instagram fa-2x"})]),a("a",{attrs:{href:"https://codepen.io/ali-faraji-dev"}},[a("i",{staticClass:"fab fa-codepen fa-2x"})]),a("a",{attrs:{href:"https://github.com/alifaraji64"}},[a("i",{staticClass:"fab fa-github fa-2x"})])])])])}],D={},R=D,B=(a("53d7"),Object(u["a"])(R,J,Z,!1,null,null,null)),K=B.exports,Q={name:"Home",components:{Main:k,About:M,Contact:W,Projects:G,Footerc:K},data:function(){return{}}},U=Q,V=Object(u["a"])(U,v,_,!1,null,null,null),X=V.exports;n["a"].use(g["a"]);var tt=[{path:"/",name:"Home",component:X}],et=new g["a"]({mode:"history",base:"/portfolio/",routes:tt}),at=et;n["a"].config.productionTip=!1,new n["a"]({router:at,render:function(t){return t(p)}}).$mount("#app")},"5b75":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5c97":function(t,e,a){t.exports=a.p+"img/database.9a9b3060.svg"},"5d59":function(t,e,a){t.exports=a.p+"img/front-end.d0616737.svg"},"69e3":function(t,e,a){"use strict";a("76c6")},"6afe":function(t,e,a){"use strict";a("426b")},"6b3b":function(t,e,a){"use strict";a("2532")},"6e93":function(t,e,a){"use strict";a("5b75")},"76c6":function(t,e,a){},"9c0c":function(t,e,a){},cd8c:function(t,e,a){},e1b5:function(t,e,a){t.exports=a.p+"img/game.cbea582e.svg"}});
//# sourceMappingURL=app.87ba7640.js.map