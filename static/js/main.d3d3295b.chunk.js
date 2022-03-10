(this["webpackJsonpteashop-client"]=this["webpackJsonpteashop-client"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),s=n.n(r),c=(n(78),n(51)),i=n(5),o=n(7),u=n(110),l=(n(79),n(54)),d=n(1);var j,m,b,p=function(e){var t=e.variant,n=e.heading,r=e.message,s=Object(a.useState)(!0),c=Object(i.a)(s,2),o=c[0],u=c[1],j=Object(a.useState)(null),m=Object(i.a)(j,2),b=m[0],p=m[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return u(!1)}),5e3);return p(e),function(){clearTimeout(b)}}),[]),Object(d.jsx)(l.a,{variant:t,onClose:function(){return u(!1)},dismissible:!0,show:o,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(l.a.Heading,{children:n}),Object(d.jsx)("p",{className:"alert-body",children:r})]})})},h=n(73),x=n(42),O=n(69),g=n(11),f=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g.c,{to:"/myaccount",className:"nav-link",children:"My Account"}),Object(d.jsx)(g.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),v=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(d.jsx)(g.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),w=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g.c,{to:"/",className:"nav-link",children:"Explore"}),Object(d.jsx)(g.c,{to:"/community",className:"nav-link",children:"Community"}),Object(d.jsx)(g.c,{to:"/about",className:"nav-link",children:"About"})]}),y=function(e){var t=e.user;return Object(d.jsx)(x.a,{style:{backgroundColor:"#89C889"},expand:"md",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(x.a.Brand,{children:Object(d.jsx)(g.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"TeaBlog"})}),Object(d.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(h.a,{className:"ms-auto",children:[w,t?f:v]})})]})})},S=n(10),k=n.n(S),C=n(13),A="https://morning-garden-24553.herokuapp.com",F="http://localhost:4741",q="localhost"===window.location.hostname?F:A,N=n(23),P=n.n(N),I=function(e,t,n,a){return P.a.post(q+"/sign-up/",{credentials:{email:e,password:n,password_confirmation:a,username:t}})},M=function(e,t){return P.a.post(q+"/sign-in/",{credentials:{email:e,password:t}})},T=function(e){return P.a.delete(q+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},D=function(e,t,n){return P.a.patch(q+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(n.token)}})},B=n(9),E=n(33),G=function(e){var t=e.msgAlert,n=e.setUser,r=Object(a.useState)(""),s=Object(i.a)(r,2),c=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),m=j[0],b=j[1],p=Object(a.useState)(""),h=Object(i.a)(p,2),x=h[0],O=h[1],g=Object(a.useState)(!1),f=Object(i.a)(g,2),v=f[0],w=f[1],y=Object(a.useState)(""),S=Object(i.a)(y,2),A=S[0],F=S[1],q=function(){var e=Object(C.a)(k.a.mark((function e(a){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,I(c,A,m,x);case 4:return e.next=6,M(c,m);case 6:r=e.sent,n(r.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),w(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),u(""),b(""),O(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return v?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign Up"}),Object(d.jsxs)(B.a,{onSubmit:q,children:[Object(d.jsxs)(B.a.Group,{controlId:"email",children:[Object(d.jsx)(B.a.Label,{children:"Email address"}),Object(d.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(B.a.Group,{children:[Object(d.jsx)(B.a.Label,{children:"Username"}),Object(d.jsx)(B.a.Control,{required:!0,name:"username",value:A,type:"username",placeholder:"Choose a username",onChange:function(e){return F(e.target.value)}})]}),Object(d.jsxs)(B.a.Group,{controlId:"password",children:[Object(d.jsx)(B.a.Label,{children:"Password"}),Object(d.jsx)(B.a.Control,{required:!0,name:"password",value:m,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)(B.a.Group,{controlId:"passwordConfirmation",children:[Object(d.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(B.a.Control,{required:!0,name:"passwordConfirmation",value:x,type:"password",placeholder:"Confirm Password",onChange:function(e){return O(e.target.value)}})]}),Object(d.jsx)(E.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},U=function(e){var t=e.msgAlert,n=e.setUser,r=Object(a.useState)(""),s=Object(i.a)(r,2),c=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),m=j[0],b=j[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),x=h[0],O=h[1],g=function(){var e=Object(C.a)(k.a.mark((function e(a){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,M(c,m);case 4:r=e.sent,n(r.data.user),console.log("the response from sign in call is",r),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),O(!0),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),u(""),b(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(B.a,{onSubmit:g,children:[Object(d.jsxs)(B.a.Group,{controlId:"email",children:[Object(d.jsx)(B.a.Label,{children:"Email address"}),Object(d.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(B.a.Group,{controlId:"password",children:[Object(d.jsx)(B.a.Label,{children:"Password"}),Object(d.jsx)(B.a.Control,{required:!0,name:"password",value:m,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)(E.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},L=function(e){var t=e.msgAlert,n=e.clearUser,r=e.user,s=Object(a.useState)(!1),c=Object(i.a)(s,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(r);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),n(),l(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!r||u?Object(d.jsx)(o.a,{to:"/"}):""},H=function(e){var t=e.msgAlert,n=e.user,r=Object(a.useState)(""),s=Object(i.a)(r,2),c=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),m=j[0],b=j[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),x=h[0],O=h[1],g=function(){var e=Object(C.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,D(c,m,n);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),O(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),u(""),b(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!n||x?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Change Password"}),Object(d.jsxs)(B.a,{onSubmit:g,children:[Object(d.jsxs)(B.a.Group,{controlId:"oldPassword",children:[Object(d.jsx)(B.a.Label,{children:"Old password"}),Object(d.jsx)(B.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(B.a.Group,{controlId:"newPassword",children:[Object(d.jsx)(B.a.Label,{children:"New Password"}),Object(d.jsx)(B.a.Control,{required:!0,name:"newPassword",value:m,type:"password",placeholder:"New Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)(E.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},_=function(e,t,n){return console.log("the token is",e.token),P.a.post(q+"/community/",{post:{title:t,text:n}},{headers:{Authorization:"Bearer ".concat(e.token)}})},z=function(e,t){return P.a.get("".concat(q,"/community/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},W=function(e,t,n,a){return P.a.patch("".concat(q,"/community/").concat(t),{post:{title:n,text:a}},{headers:{Authorization:"Bearer ".concat(e.token)}})},V=function(e,t){return P.a.delete("".concat(q,"/community/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},Y=n(34),R=n(35),J=R.a.button(j||(j=Object(Y.a)(["\n    background-color: green;\n    width: 150px;\n    height: 40px;\n    border: none;\n    border-radius: 10px;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n"]))),Q=R.a.div(m||(m=Object(Y.a)(["\n\n.community__header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 40px auto;\n\n\n}\n\n"]))),K=R.a.div(b||(b=Object(Y.a)(["\n    display: flex;\n    align-items: center;\n    background-color: #fff;\n    border-radius: 15px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n    margin: 40px auto;\n    padding: 60px; \n    flex-direction: 'column';\n\n\n    // img { \n    //     width: 20rem;        \n    //     height: 20rem;\n    //     justify-content: center;\n    //     align-items: center;\n    // }\n\n    & > div {\n        flex: 1;\n        justify-content: center;\n        align-items: center;\n\n    }\n\n    @media(max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),X=function(e){var t=e.user,n=e.posts,a=e.msgAlert,r=function(){var e=Object(C.a)(k.a.mark((function e(n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n._id,e.next=4,V(t,r);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g.b,{to:"/community/".concat(e._id),children:Object(d.jsx)("button",{children:"Edit"})}),Object(d.jsx)("button",{onClick:function(){return r(e)},children:"Delete"})]})};return n.map((function(e){return Object(d.jsx)(K,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("div",{children:e.owner===(null===t||void 0===t?void 0:t._id)&&s(e)})]})},e._id)}))},Z=function(e){var t=e.user,n=e.msgAlert,r=Object(a.useState)([]),s=Object(i.a)(r,2),c=s[0],o=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get(q+"/community/");case 3:t=e.sent,o(t.data.posts),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({heading:"Failed to load posts",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Q,{children:Object(d.jsxs)("div",{className:"community__header",children:[Object(d.jsx)("h1",{children:"Messages from the community"}),Object(d.jsx)("div",{children:t?Object(d.jsx)(g.b,{to:"/community/post",user:t,children:Object(d.jsx)(J,{children:"Write a post"})}):"Sign in or sign up to post about your experience!"})]})}),Object(d.jsx)("div",{children:Object(d.jsx)(X,{user:t,posts:c})})]})},$=function(e){var t=e.handleSubmit,n=e.title,a=e.text,r=e.setTitle,s=e.setText;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)("input",{placeholder:"Title of your post",name:"title",type:"text",value:n,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("textarea",{placeholder:"Text of your post",name:"text",type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Post"})]})})},ee=function(e){var t=e.user,n=e.msgAlert,r=Object(o.h)().postId,s=Object(a.useState)(""),c=Object(i.a)(s,2),u=c[0],l=c[1],j=Object(a.useState)(""),m=Object(i.a)(j,2),b=m[0],p=m[1],h=Object(a.useState)(!1),x=Object(i.a)(h,2),O=x[0],g=x[1];if(!t)return Object(d.jsx)(o.a,{to:"/"});Object(a.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t,r);case 3:a=e.sent,l(a.data.post.title),p(a.data.post.text),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(C.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,W(t,r,u,b);case 4:g(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return O?Object(d.jsx)(o.a,{to:"/community"}):Object(d.jsx)("div",{children:Object(d.jsx)($,{handleSubmit:f,title:u,text:b,setTitle:l,setText:p})})},te=function(e){var t=e.user,n=e.setRenderPage,r=e.msgAlert,s=Object(a.useState)(""),c=Object(i.a)(s,2),u=c[0],l=c[1],j=Object(a.useState)(""),m=Object(i.a)(j,2),b=m[0],p=m[1],h=Object(a.useState)(null),x=Object(i.a)(h,2),O=x[0],g=x[1],f=function(){var e=Object(C.a)(k.a.mark((function e(n){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,_(t,u,b);case 4:a=e.sent,g(a.data.post._id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return O?Object(d.jsx)(o.a,{to:"/community"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Write a post "}),Object(d.jsx)($,{title:u,text:b,setTitle:l,setText:p,handleSubmit:f,setRenderPage:n})]})},ne=[{ref:"Tea Photo, first explore",id:1,title:"Lorem ipsum",text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",urlImg:"https://images.unsplash.com/photo-1610643625267-aee6dae3ca22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",alt:"Tea Photo"},{ref:"Second explore",id:2,title:"Orci ac auctor augue mauris.",text:"Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Gravida arcu ac tortor dignissim. Enim facilisis gravida neque convallis a cras semper. Mi proin sed libero enim sed faucibus turpis. Duis convallis convallis tellus id. Massa eget egestas purus viverra accumsan in nisl nisi.",urlImg:"https://images.unsplash.com/photo-1554675427-1d637bdb5a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80",alt:"Tea Photo"},{ref:"Third explore",id:3,title:"Etiam erat velit scelerisque in dictum.",text:"Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Massa eget egestas purus viverra accumsan. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Suspendisse interdum consectetur libero id faucibus.",urlImg:"https://images.unsplash.com/photo-1552841847-0e031d33a283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",alt:"Tea Photo"}],ae=function(e){var t=e.item;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(K,{layout:t.id%2===0&&"row-reverse",children:Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("h1",{children:t.title}),Object(d.jsx)("p",{children:t.text})]})})})},re=function(){var e=ne.map((function(e){return Object(d.jsx)(ae,{item:e},e.id)}));return Object(d.jsx)("div",{children:e})},se=function(e){var t=e.user,n=e.msgAlert;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(H,{msgAlert:n,user:t}),t.username&&Object(d.jsxs)("h1",{children:["Username: ",t.username]})]})},ce=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(K,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Meet the founder"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti ad porro officia? Quas nostrum ex modi unde, error asperiores id placeat delectus, facilis ratione quia laudantium qui eius repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique cum et asperiores, reiciendis facilis aspernatur, dicta ipsa adipisci error sunt numquam saepe ullam iusto doloremque consequuntur nam labore accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ab, consectetur laborum expedita ipsam eligendi quasi illum voluptatibus dolorem explicabo esse voluptates est quos minus in sunt? Quo, maiores illo."})]})})})},ie=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),j=l[0],m=l[1],b=function(e){var t=e.heading,n=e.message,a=e.variant,r=Object(u.a)();m((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:n,variant:a,id:r}])}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{user:n}),j.map((function(e){return Object(d.jsx)(p,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(d.jsx)("main",{className:"container",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/sign-up",element:Object(d.jsx)(G,{msgAlert:b,setUser:r})}),Object(d.jsx)(o.b,{path:"/sign-in",element:Object(d.jsx)(U,{msgAlert:b,setUser:r})}),Object(d.jsx)(o.b,{path:"/sign-out",element:Object(d.jsx)(L,{msgAlert:b,clearUser:function(){return r(null)},user:n})}),Object(d.jsx)(o.b,{path:"/myaccount",element:Object(d.jsx)(se,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/change-password",element:Object(d.jsx)(H,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/",element:Object(d.jsx)(re,{msgAlert:b})}),Object(d.jsx)(o.b,{path:"/community",element:Object(d.jsx)(Z,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/community/:postId",element:Object(d.jsx)(ee,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/community/post",element:Object(d.jsx)(te,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/about",element:Object(d.jsx)(ce,{})})]})})]})},oe=Object(d.jsx)(g.a,{basename:"/teashop-client",children:Object(d.jsx)(ie,{})});s.a.render(oe,document.getElementById("root"))},78:function(e,t,n){},79:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.d3d3295b.chunk.js.map