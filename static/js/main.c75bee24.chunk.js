(this["webpackJsonpteashop-client"]=this["webpackJsonpteashop-client"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),s=n.n(r),c=(n(78),n(51)),i=n(5),o=n(7),u=n(110),l=(n(79),n(54)),d=n(1);var j,m,b,p,h,x=function(e){var t=e.variant,n=e.heading,r=e.message,s=Object(a.useState)(!0),c=Object(i.a)(s,2),o=c[0],u=c[1],j=Object(a.useState)(null),m=Object(i.a)(j,2),b=m[0],p=m[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return u(!1)}),5e3);return p(e),function(){clearTimeout(b)}}),[]),Object(d.jsx)(l.a,{variant:t,onClose:function(){return u(!1)},dismissible:!0,show:o,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(l.a.Heading,{children:n}),Object(d.jsx)("p",{className:"alert-body",children:r})]})})},O=n(73),g=n(42),f=n(69),v=n(11),w=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v.c,{to:"/myaccount",className:"nav-link",children:"My Account"}),Object(d.jsx)(v.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),y=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(d.jsx)(v.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),S=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v.c,{to:"/",className:"nav-link",children:"Explore"}),Object(d.jsx)(v.c,{to:"/community",className:"nav-link",children:"Community"}),Object(d.jsx)(v.c,{to:"/about",className:"nav-link",children:"About"})]}),k=function(e){var t=e.user;return Object(d.jsx)(g.a,{style:{backgroundColor:"#89C889"},expand:"md",children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)(g.a.Brand,{children:Object(d.jsx)(v.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"TeaBlog"})}),Object(d.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(O.a,{className:"ms-auto",children:[S,t?w:y]})})]})})},C=n(10),A=n.n(C),F=n(13),N="https://morning-garden-24553.herokuapp.com",P="http://localhost:4741",q="localhost"===window.location.hostname?P:N,I=n(23),M=n.n(I),T=function(e,t,n,a){return M.a.post(q+"/sign-up/",{credentials:{email:e,password:n,password_confirmation:a,username:t}})},D=function(e,t){return M.a.post(q+"/sign-in/",{credentials:{email:e,password:t}})},B=function(e){return M.a.delete(q+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},E=function(e,t,n){return M.a.patch(q+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(n.token)}})},G=n(9),L=n(35),U=function(e){var t=e.msgAlert,n=e.setUser,r=Object(a.useState)(""),s=Object(i.a)(r,2),c=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),m=j[0],b=j[1],p=Object(a.useState)(""),h=Object(i.a)(p,2),x=h[0],O=h[1],g=Object(a.useState)(!1),f=Object(i.a)(g,2),v=f[0],w=f[1],y=Object(a.useState)(""),S=Object(i.a)(y,2),k=S[0],C=S[1],N=function(){var e=Object(F.a)(A.a.mark((function e(a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,T(c,k,m,x);case 4:return e.next=6,D(c,m);case 6:r=e.sent,n(r.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),w(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),u(""),b(""),O(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return v?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign Up"}),Object(d.jsxs)(G.a,{onSubmit:N,children:[Object(d.jsxs)(G.a.Group,{controlId:"email",children:[Object(d.jsx)(G.a.Label,{children:"Email address"}),Object(d.jsx)(G.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(G.a.Group,{children:[Object(d.jsx)(G.a.Label,{children:"Username"}),Object(d.jsx)(G.a.Control,{required:!0,name:"username",value:k,type:"username",placeholder:"Choose a username",onChange:function(e){return C(e.target.value)}})]}),Object(d.jsxs)(G.a.Group,{controlId:"password",children:[Object(d.jsx)(G.a.Label,{children:"Password"}),Object(d.jsx)(G.a.Control,{required:!0,name:"password",value:m,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)(G.a.Group,{controlId:"passwordConfirmation",children:[Object(d.jsx)(G.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(G.a.Control,{required:!0,name:"passwordConfirmation",value:x,type:"password",placeholder:"Confirm Password",onChange:function(e){return O(e.target.value)}})]}),Object(d.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},H=function(e){var t=e.msgAlert,n=e.setUser,r=Object(a.useState)(""),s=Object(i.a)(r,2),c=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),m=j[0],b=j[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),x=h[0],O=h[1],g=function(){var e=Object(F.a)(A.a.mark((function e(a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,D(c,m);case 4:r=e.sent,n(r.data.user),console.log("the response from sign in call is",r),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),O(!0),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),u(""),b(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(G.a,{onSubmit:g,children:[Object(d.jsxs)(G.a.Group,{controlId:"email",children:[Object(d.jsx)(G.a.Label,{children:"Email address"}),Object(d.jsx)(G.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(G.a.Group,{controlId:"password",children:[Object(d.jsx)(G.a.Label,{children:"Password"}),Object(d.jsx)(G.a.Control,{required:!0,name:"password",value:m,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},_=function(e){var t=e.msgAlert,n=e.clearUser,r=e.user,s=Object(a.useState)(!1),c=Object(i.a)(s,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(F.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(r);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),n(),l(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!r||u?Object(d.jsx)(o.a,{to:"/"}):""},z=function(e){var t=e.msgAlert,n=e.user,r=Object(a.useState)(""),s=Object(i.a)(r,2),c=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),m=j[0],b=j[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),x=h[0],O=h[1],g=function(){var e=Object(F.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,E(c,m,n);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),O(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),u(""),b(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!n||x?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Change Password"}),Object(d.jsxs)(G.a,{onSubmit:g,children:[Object(d.jsxs)(G.a.Group,{controlId:"oldPassword",children:[Object(d.jsx)(G.a.Label,{children:"Old password"}),Object(d.jsx)(G.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(G.a.Group,{controlId:"newPassword",children:[Object(d.jsx)(G.a.Label,{children:"New Password"}),Object(d.jsx)(G.a.Control,{required:!0,name:"newPassword",value:m,type:"password",placeholder:"New Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},Y=function(e,t,n){return console.log("the token is",e.token),M.a.post(q+"/community/",{post:{title:t,text:n}},{headers:{Authorization:"Bearer ".concat(e.token)}})},R=function(e,t){return M.a.get("".concat(q,"/community/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},V=function(e,t,n,a){return M.a.patch("".concat(q,"/community/").concat(t),{post:{title:n,text:a}},{headers:{Authorization:"Bearer ".concat(e.token)}})},W=function(e,t){return M.a.delete("".concat(q,"/community/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},J=n(26),Q=n(27),K=Q.a.button(j||(j=Object(J.a)(["\n    background-color: green;\n    width: 150px;\n    height: 40px;\n    border: none;\n    border-radius: 10px;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n"]))),X=(Q.a.div(m||(m=Object(J.a)(["\n    font-size: 30px;\n    color: grey;\n"]))),Q.a.div(b||(b=Object(J.a)(["\n\n.community__header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 40px auto;\n\n\n}\n\n"])))),Z=Q.a.div(p||(p=Object(J.a)(["\n    display: flex;\n    align-items: center;\n    background-color: #fff;\n    border-radius: 15px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n    margin: 40px auto;\n    padding: 40px; \n    flex-direction: 'column';\n    max-width: 700px;\n\n\n    // img { \n    //     width: 20rem;        \n    //     height: 20rem;\n    //     justify-content: center;\n    //     align-items: center;\n    // }\n\n    & > div {\n        flex: 1;\n        justify-content: center;\n        align-items: center;\n\n    }\n\n    @media(max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),$=function(e){var t=e.user,n=e.posts,a=e.msgAlert,r=e.setRender,s=function(){var e=Object(F.a)(A.a.mark((function e(n){var s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=n._id,e.next=4,W(t,s);case 4:r(!0),a({heading:"Post deleted",variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),c=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v.b,{to:"/community/".concat(e._id),children:Object(d.jsx)("button",{children:"Edit"})}),Object(d.jsx)("button",{onClick:function(){return s(e)},children:"Delete"})]})};return n.map((function(e){return Object(d.jsx)(Z,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("div",{children:e.owner===(null===t||void 0===t?void 0:t._id)&&c(e)})]})},e._id)}))},ee=function(e){var t=e.user,n=e.msgAlert,r=Object(a.useState)([]),s=Object(i.a)(r,2),c=s[0],o=s[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),j=l[0],m=l[1];return Object(a.useEffect)((function(){(function(){var e=Object(F.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get(q+"/community/");case 3:t=e.sent,o(t.data.posts),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({heading:"Failed to load posts",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[j]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(X,{children:Object(d.jsxs)("div",{className:"community__header",children:[Object(d.jsx)("h1",{children:"Messages from the community"}),Object(d.jsx)("div",{children:t?Object(d.jsx)(v.b,{to:"/community/post",user:t,children:Object(d.jsx)(K,{children:"Leave a comment"})}):"Sign in or sign up to post about your experience!"})]})}),Object(d.jsx)("div",{children:Object(d.jsx)($,{user:t,posts:c,msgAlert:n,setPosts:o,setRender:m})})]})},te=Q.a.div(h||(h=Object(J.a)(["\ninput, textarea {\n\nmargin-top: 20px;\n    display: flex;\n    align-items: flex-start;\njustify-content: center;\nflex-direction: column;\nwidth: 90%;\n\n}\n\ninput {\nborder: none;\n}\nbutton {\nmargin: 10px;\n}\n\ntextarea:focus {\n\n}\n\ntextarea {\nheight: 200px\n}\n\n.container {\n// margin: 40px auto;\n// max-width: 700px;\n// border: 3px solid grey;\n}\n"]))),ne=function(e){var t=e.handleSubmit,n=e.title,a=e.text,r=e.setTitle,s=e.setText;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(te,{children:Object(d.jsx)(Z,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)("input",{placeholder:"Title of your post",name:"title",type:"text",value:n,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("textarea",{placeholder:"Text of your post...",name:"text",type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Post"})]})})})})})},ae=function(e){var t=e.user,n=e.msgAlert,r=Object(o.h)().postId,s=Object(a.useState)(""),c=Object(i.a)(s,2),u=c[0],l=c[1],j=Object(a.useState)(""),m=Object(i.a)(j,2),b=m[0],p=m[1],h=Object(a.useState)(!1),x=Object(i.a)(h,2),O=x[0],g=x[1];if(!t)return Object(d.jsx)(o.a,{to:"/"});Object(a.useEffect)((function(){(function(){var e=Object(F.a)(A.a.mark((function e(){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t,r);case 3:a=e.sent,l(a.data.post.title),p(a.data.post.text),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(F.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,V(t,r,u,b);case 4:g(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return O?Object(d.jsx)(o.a,{to:"/community"}):Object(d.jsx)("div",{children:Object(d.jsx)(ne,{handleSubmit:f,title:u,text:b,setTitle:l,setText:p})})},re=function(e){var t=e.user,n=(e.setRenderPage,e.msgAlert),r=Object(a.useState)(""),s=Object(i.a)(r,2),c=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),m=j[0],b=j[1],p=Object(a.useState)(null),h=Object(i.a)(p,2),x=h[0],O=h[1],g=function(){var e=Object(F.a)(A.a.mark((function e(a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,Y(t,c,m);case 4:r=e.sent,O(r.data.post._id),n({heading:"Your post was added",message:"Created ".concat(c," successfully."),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({heading:"Failed to load",message:e.t0.message,variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(o.a,{to:"/community"}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(ne,{title:c,text:m,setTitle:u,setText:b,handleSubmit:g})})},se=[{ref:"Tea Photo, first explore",id:1,title:"Lorem ipsum",text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",urlImg:"https://images.unsplash.com/photo-1610643625267-aee6dae3ca22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",alt:"Tea Photo"},{ref:"Second explore",id:2,title:"Orci ac auctor augue mauris.",text:"Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Gravida arcu ac tortor dignissim. Enim facilisis gravida neque convallis a cras semper. Mi proin sed libero enim sed faucibus turpis. Duis convallis convallis tellus id. Massa eget egestas purus viverra accumsan in nisl nisi.",urlImg:"https://images.unsplash.com/photo-1554675427-1d637bdb5a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80",alt:"Tea Photo"},{ref:"Third explore",id:3,title:"Etiam erat velit scelerisque in dictum.",text:"Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Massa eget egestas purus viverra accumsan. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Suspendisse interdum consectetur libero id faucibus.",urlImg:"https://images.unsplash.com/photo-1552841847-0e031d33a283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",alt:"Tea Photo"}],ce=function(e){var t=e.item;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Z,{layout:t.id%2===0&&"row-reverse",children:Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("h1",{children:t.title}),Object(d.jsx)("p",{children:t.text})]})})})},ie=function(){var e=se.map((function(e){return Object(d.jsx)(ce,{item:e},e.id)}));return Object(d.jsx)("div",{children:e})},oe=function(e){var t=e.user,n=e.msgAlert;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(z,{msgAlert:n,user:t}),t.username&&Object(d.jsxs)("h1",{children:["Username: ",t.username]})]})},ue=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Z,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Meet the founder"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti ad porro officia? Quas nostrum ex modi unde, error asperiores id placeat delectus, facilis ratione quia laudantium qui eius repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique cum et asperiores, reiciendis facilis aspernatur, dicta ipsa adipisci error sunt numquam saepe ullam iusto doloremque consequuntur nam labore accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ab, consectetur laborum expedita ipsam eligendi quasi illum voluptatibus dolorem explicabo esse voluptates est quos minus in sunt? Quo, maiores illo."})]})})})},le=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),j=l[0],m=l[1],b=function(e){var t=e.heading,n=e.message,a=e.variant,r=Object(u.a)();m((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:n,variant:a,id:r}])}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{user:n}),j.map((function(e){return Object(d.jsx)(x,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(d.jsx)("main",{className:"container",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/sign-up",element:Object(d.jsx)(U,{msgAlert:b,setUser:r})}),Object(d.jsx)(o.b,{path:"/sign-in",element:Object(d.jsx)(H,{msgAlert:b,setUser:r})}),Object(d.jsx)(o.b,{path:"/sign-out",element:Object(d.jsx)(_,{msgAlert:b,clearUser:function(){return r(null)},user:n})}),Object(d.jsx)(o.b,{path:"/myaccount",element:Object(d.jsx)(oe,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/change-password",element:Object(d.jsx)(z,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/",element:Object(d.jsx)(ie,{msgAlert:b})}),Object(d.jsx)(o.b,{path:"/community",element:Object(d.jsx)(ee,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/community/:postId",element:Object(d.jsx)(ae,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/community/post",element:Object(d.jsx)(re,{msgAlert:b,user:n})}),Object(d.jsx)(o.b,{path:"/about",element:Object(d.jsx)(ue,{})})]})})]})},de=Object(d.jsx)(v.a,{basename:"/teashop-client",children:Object(d.jsx)(le,{})});s.a.render(de,document.getElementById("root"))},78:function(e,t,n){},79:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.c75bee24.chunk.js.map