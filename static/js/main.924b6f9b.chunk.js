(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.47dfb17d.png"},44:function(e,t,a){e.exports=a.p+"static/media/2.eebb162b.png"},46:function(e,t,a){e.exports=a(77)},54:function(e,t,a){},55:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(19),c=a.n(r),o=(a(51),a(52),a(53),a(54),a(7)),s=a(8),i=a(10),m=a(9),u=a(11),d=(a(55),a(15)),p=a(20),h=a(3),f=a(43),b=a.n(f),g=(a(16),function(e){return n.a.createElement(d.b,{to:"/",exact:!0,onClick:e.toggle("")},n.a.createElement("img",{src:b.a,alt:"samar's spcae",className:"img-fluid mx-auto d-block forLogo"}))}),E=function(e){return n.a.createElement(h.q,{className:"flex-lg-fill bd-highlight col-example"},n.a.createElement(h.r,{className:"1"===e.activeItem?"indigo-text ":"white-text ",to:"/about",exact:!0,active:"1"===e.activeItem,onClick:e.toggle("1")},n.a.createElement(h.l,{icon:"user-circle",size:"lg"}),n.a.createElement("br",null),"About"))},v=function(e){return n.a.createElement(h.q,{className:"flex-lg-fill bd-highlight col-example"},n.a.createElement(h.r,{className:"2"===e.activeItem?"indigo-text":"white-text",to:"/cv",exact:!0,active:"2"===e.activeItem,onClick:e.toggle("2")},n.a.createElement(h.l,{icon:"book-reader",size:"lg"}),n.a.createElement("br",null),"CV"))},x=function(e){return n.a.createElement(h.q,{className:"flex-lg-fill bd-highlight col-example"},n.a.createElement(h.r,{className:"3"===e.activeItem?"indigo-text ":"white-text",to:"/projects",exact:!0,active:"3"===e.activeItem,onClick:e.toggle("3")},n.a.createElement(h.l,{fab:!0,icon:"github",size:"lg"}),n.a.createElement("br",null),"Projects"))},k=function(e){return n.a.createElement(h.q,{className:"flex-lg-fill bd-highlight col-example"},n.a.createElement(h.r,{className:"4"===e.activeItem?"indigo-text":"white-text",to:"/contact",exact:!0,active:"4"===e.activeItem,onClick:e.toggle("4")},n.a.createElement(h.l,{icon:"address-book",size:"lg"}),n.a.createElement("br",null),"Contact"))},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={activeItem:""},a.toggle=function(e){return function(){a.state.activeItem!==e&&a.setState({activeItem:e})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.location.pathname){case"/about":this.setState({activeItem:"1"});break;case"/cv":this.setState({activeItem:"2"});break;case"/projects":this.setState({activeItem:"3"});break;case"/contact":this.setState({activeItem:"4"});break;default:this.setState({activeItem:""})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return n.a.createElement("div",{className:"classic-tabs"},n.a.createElement(g,{activeItem:this.state.activeItem,toggle:this.toggle}),n.a.createElement(h.k,null,n.a.createElement(h.c,{className:"text-center"},n.a.createElement(h.f,{className:"purple-gradient border border-white"},n.a.createElement(h.p,{classicTabs:!0,className:"d-flex flex-nowrap bd-highlight justify-content-center"},n.a.createElement(E,{activeItem:this.state.activeItem,toggle:this.toggle}),n.a.createElement(v,{activeItem:this.state.activeItem,toggle:this.toggle}),n.a.createElement(x,{activeItem:this.state.activeItem,toggle:this.toggle}),n.a.createElement(k,{activeItem:this.state.activeItem,toggle:this.toggle}))))))}}]),t}(n.a.Component),N=Object(p.e)(y),w=a(44),j=a.n(w),O=function(){return n.a.createElement(h.k,null,n.a.createElement(h.c,{className:"text-center "},n.a.createElement(h.d,{className:"forCards border border-white scrollbar scrollbar-secondary",style:{maxHeight:"80vh"}},n.a.createElement(h.u,null,n.a.createElement(h.i,null,n.a.createElement("h5",{style:{color:"#B273E1"},className:"border border-secondary p-3 w-responsive mt-4 mx-auto"},"Software Engineer,",n.a.createElement("br",null),"Front-end Web Developer"),n.a.createElement("br",null),n.a.createElement("p",{className:" text-left w-responsive mx-auto mb-5"},"I'm Samar, a 3rd grade Software Engineering student. ",n.a.createElement("br",null),"Good knowledge of ",n.a.createElement("span",{style:{color:"#f06ec9"}},"OOP, Java, C#,"),"and specifically ",n.a.createElement("span",{style:{color:"#f06ec9"}},"Web Development and React framework.")," ",n.a.createElement("br",null),"Enrolled in ",n.a.createElement("a",{href:"https://www.re-coded.com/",target:"blank"},"Re:coded"),"'s front-end development bootcamp, where we get a certificate from ",n.a.createElement("a",{href:"https://flatironschool.com/",target:"blank"},"Flatiron School")),n.a.createElement("img",{src:j.a,alt:"astronaut",className:"img-fluid float-left",style:{width:"100px"}}),n.a.createElement("p",{className:" lead mb-3 text-left"},"I always try to gain knowledge in different software areas as I can, and don't limit myself to what I'm confident at; because programming field is like ",n.a.createElement("strong",null,"the space:",n.a.createElement("span",{style:{color:"#f06ec9"}}," huge, full of secrets, fascinating, has no end, and will always make you curious."))))))))},I=a(45),C=a(23),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){a.setState(Object(I.a)({},e.target.name,{value:e.target.value,valid:!!e.target.value}))},a.submitForm=a.submitForm.bind(Object(C.a)(a)),a.state={status:"",email:{value:"",valid:!1},message:{value:"",valid:!1}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.status;return n.a.createElement("div",{className:"text-left md-form d-flex flex-column"},n.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xqklbjae",method:"POST"},n.a.createElement(h.n,{type:"email",name:"email",label:"Your email",value:this.state.email.value,className:this.state.email.valid?"form-control is-valid":"form-control is-invalid",onChange:this.changeHandler}),n.a.createElement(h.n,{type:"textarea",name:"message",outline:!0,label:"Your message",value:this.state.message.value,className:this.state.message.valid?"form-control is-valid":"form-control is-invalid",onChange:this.changeHandler}),"SUCCESS"===e?n.a.createElement("p",null,"Thanks! Message received"):n.a.createElement("button",{className:" btn btn-secondary"},"Send"),"ERROR"===e&&n.a.createElement("p",null,"Sorry.. There was an error. Make sure to fill all the fields")))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,l=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status&&t.state.email.valid&&t.state.message.valid?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},n.send(l)}}]),t}(n.a.Component),D=function(){return n.a.createElement("ul",{className:"list-unstyled mb-0"},n.a.createElement("li",null,n.a.createElement(h.l,{fab:!0,icon:"github-square",size:"2x",className:"purple-text"}),n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/samaromm",target:"blank"},"Github")),n.a.createElement("li",null,n.a.createElement(h.l,{icon:"phone",size:"2x",className:"purple-text mt-2"}),n.a.createElement("p",null,"+90 505 052 9560")),n.a.createElement("li",null,n.a.createElement(h.l,{icon:"envelope",size:"2x",className:"purple-text mt-2"}),n.a.createElement("p",null,"samaromm98@gmail.com")),n.a.createElement("li",null,n.a.createElement(h.l,{fab:!0,icon:"linkedin",size:"2x",className:"purple-text mt-2"}),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.linkedin.com/in/samaromm/",target:"blank"},"Linkedin")))},q=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(h.k,null,n.a.createElement(h.c,{className:"text-center "},n.a.createElement(h.d,{className:"border border-white scrollbar scrollbar-secondary forCards",style:{maxHeight:"80vh"}},n.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center text-secondary "},"Contact me"),n.a.createElement(h.u,null,n.a.createElement(h.i,{md:"9",className:"md-0 mb-5"},n.a.createElement(S,null)),n.a.createElement(h.i,{md:"3",className:"text-center"},n.a.createElement(D,null))))))}}]),t}(n.a.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(h.k,null,n.a.createElement(h.c,{className:"text-center"},n.a.createElement(h.d,{className:" border border-white forCards"},n.a.createElement(h.h,null,"Special title treatment"),n.a.createElement(h.g,null,"cv"),n.a.createElement(h.b,null))))}}]),t}(n.a.Component),H=function(e){return n.a.createElement(h.j,{id:"collapse1",isOpen:e.collapseID},n.a.createElement(h.d,{className:"rgba-white-light white-text z-depth-1"},n.a.createElement("p",{className:"p-md-4 mb-0"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.")))},F=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mb-4"},n.a.createElement(h.w,{hover:!0,onClick:this.props.toggleCollapse("collapse1"),className:" border border-dark forHover p-0 z-depth-1"},n.a.createElement("div",{className:" border border-dark float-left mr-4",style:{backgroundColor:"#eeeeee",height:"60px"}},n.a.createElement(h.l,{fab:!0,icon:"js-square",size:"2x",className:"m-3 purple-text"})),n.a.createElement(h.h,{style:{color:"#fff",fontWeight:"bold"}},"ITEM #1"),n.a.createElement(h.o,{className:"flex-center",overlay:"white-strong"})),n.a.createElement(H,{collapseID:this.props.collapseID}))}}]),t}(n.a.Component),M=function(e){return n.a.createElement(h.j,{id:"collapse2",isOpen:e.collapseID},n.a.createElement(h.d,{className:"rgba-white-light white-text z-depth-1"},n.a.createElement("p",{className:"p-md-4 mb-0"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.")))},R=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mb-4"},n.a.createElement(h.w,{hover:!0,onClick:this.props.toggleCollapse("collapse2"),className:" border border-dark forHover p-0 z-depth-1"},n.a.createElement("div",{className:" border border-dark float-left mr-4",style:{backgroundColor:"#eeeeee",height:"60px"}},n.a.createElement(h.l,{fab:!0,icon:"js-square",size:"2x",className:"m-3 purple-text"})),n.a.createElement(h.h,{style:{color:"#fff",fontWeight:"bold"}},"ITEM #1"),n.a.createElement(h.o,{className:"flex-center",overlay:"white-strong"})),n.a.createElement(M,{collapseID:this.props.collapseID}))}}]),t}(n.a.Component),A=function(e){return n.a.createElement(h.j,{id:"collapse3",isOpen:e.collapseID},n.a.createElement(h.d,{className:"rgba-white-light white-text z-depth-1"},n.a.createElement("p",{className:"p-md-4 mb-0"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.")))},W=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mb-4"},n.a.createElement(h.w,{hover:!0,onClick:this.props.toggleCollapse("collapse3"),className:" border border-dark forHover p-0 z-depth-1"},n.a.createElement("div",{className:" border border-dark float-left mr-4",style:{backgroundColor:"#eeeeee",height:"60px"}},n.a.createElement(h.l,{fab:!0,icon:"js-square",size:"2x",className:"m-3 purple-text"})),n.a.createElement(h.h,{style:{color:"#fff",fontWeight:"bold"}},"ITEM #1"),n.a.createElement(h.o,{className:"flex-center",overlay:"white-strong"})),n.a.createElement(A,{collapseID:this.props.collapseID}))}}]),t}(n.a.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={collapseID:""},a.toggleCollapse=function(e){return function(){return a.setState((function(t){return{collapseID:t.collapseID!==e?e:""}}))}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(h.k,null,n.a.createElement(h.c,{className:"card-image forProject"},n.a.createElement(h.d,{className:"rgba-black-strong py-5 px-4 border border-white scrollbar scrollbar-secondary",style:{maxHeight:"80vh"}},n.a.createElement(h.u,{className:"d-flex justify-content-center "},n.a.createElement(h.i,{md:"10",xl:"8"},n.a.createElement(h.k,null,n.a.createElement(F,{collapseID:this.state.collapseID,toggleCollapse:this.toggleCollapse}),n.a.createElement(R,{collapseID:this.state.collapseID,toggleCollapse:this.toggleCollapse}),n.a.createElement(W,{collapseID:this.state.collapseID,toggleCollapse:this.toggleCollapse})))))))}}]),t}(n.a.Component),B=function(e){return n.a.createElement(h.k,{className:"d-flex flex-column "},n.a.createElement(h.c,{className:"card-image forHome "},n.a.createElement("div",{className:" justify-content-center text-white text-center d-flex align-items-center py-5 px-4 rounded"},n.a.createElement("div",null,n.a.createElement("h6",{className:"purple-text"},n.a.createElement("strong",null," Spaceflight "),n.a.createElement(h.l,{icon:"fas fa-space-shuttle"})),n.a.createElement("h3",{className:"py-3 font-weight-bold"},n.a.createElement("strong",null,"Samar's Space")),n.a.createElement("p",{className:"pb-3"},"Want to join an adventure to my space?"),n.a.createElement(d.b,{to:"/about"},n.a.createElement(h.b,{color:"secondary",rounded:!0,size:"md",onClick:"ComponentWillMount()"},n.a.createElement(h.l,{far:!0,icon:"clone",className:"left"})," About Me"))))))},P=function(){return n.a.createElement(h.k,{className:"footer-copyright text-center pb-5"},n.a.createElement(h.c,{className:"purple-gradient"},n.a.createElement(h.e,{className:"border border-white text-white"},"Made with ",n.a.createElement("i",{class:"far fa-heart"}),n.a.createElement("br",null),"\xa9 ",(new Date).getFullYear()," Photos Copyright: ",n.a.createElement("a",{href:"http://www.freepik.com",target:"blank"}," Freepik "))))},L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"bg"},n.a.createElement(d.a,{basename:"/"},n.a.createElement(N,null),n.a.createElement(p.a,{path:"/",exact:!0,component:B}),n.a.createElement(p.a,{path:"/about",exact:!0,component:O}),n.a.createElement(p.a,{path:"/contact",exact:!0,component:q}),n.a.createElement(p.a,{path:"/cv",exact:!0,component:z}),n.a.createElement(p.a,{path:"/projects",exact:!0,component:T}),n.a.createElement(P,null)))}}]),t}(n.a.Component);c.a.render(n.a.createElement(L,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.924b6f9b.chunk.js.map