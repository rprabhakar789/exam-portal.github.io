(this["webpackJsonpexam-portal"]=this["webpackJsonpexam-portal"]||[]).push([[0],{145:function(e,t,a){},146:function(e,t,a){},176:function(e,t){},181:function(e,t,a){"use strict";a.r(t);var n,i=a(0),o=a.n(i),r=a(15),c=a.n(r),s=(a(145),a(69)),l=a(70),d=a(81),j=a(80),u=(a.p,a(146),a(228)),b=a(229),m=a(60),p=a(210),h=a(216),x=a(217),g=a(8),O=a(11),f=a(208),v=a(212),y=a(214),w=a(213),C=a(215),k=a(14),S=a(1),T=Object(f.a)({root:(n={width:"95%",boxShadow:"1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45)",transition:"0.25s ease-in-out",backgroundColor:"#fafad2",margin:"10px",borderRadius:15},Object(O.a)(n,"@media (max-width:600px)",{margin:"auto",marginTop:20}),Object(O.a)(n,"&:hover",{boxShadow:"2.2px 4.0px 4.0px hsl(0deg 0% 0% / 0.45)",transform:"scale(1.1)",transition:"0.25s ease-in-out"}),n),title:{fontSize:14}}),q=[{id:1,topic:"Java Basics",description:"Test your basic understanding of java in this test.",no_of_ques:5,total_marks:100},{id:2,topic:"Spring Boot",description:"Test your basic understanding of Spring Boot in this test",no_of_ques:10,total_marks:50},{id:3,topic:"Python",description:"Test your basic understanding of Python in this test",no_of_ques:10,total_marks:50},{id:4,topic:"C++",description:"Test your understanding of C++ in this test",no_of_ques:10,total_marks:50}];function N(){var e=T(),t=o.a.useState(1),a=Object(g.a)(t,2),n=(a[0],a[1]),r=o.a.useState(!1),c=Object(g.a)(r,2),s=(c[0],c[1]),l=o.a.useState(q),d=Object(g.a)(l,2),j=d[0],u=d[1],b=o.a.useState(!1),h=Object(g.a)(b,2),x=(h[0],h[1]);Object(i.useEffect)((function(){fetch("".concat("http://127.0.0.1:8586","/api/getQuiz")).then((function(e){return e.json()})).then((function(e){s(!0),u(j.concat(e))}),(function(e){s(!0),x(e)}))}),[]);var O=Object(k.g)();return Object(S.jsx)(p.a,{style:{margin:"auto"},children:Object(S.jsx)(p.a,{item:!0,xs:12,children:Object(S.jsx)(p.a,{style:{display:"flex"},container:!0,children:[1,2,3].map((function(t){return j.map((function(t){return Object(S.jsxs)(v.a,{variant:"outlined",className:e.root,style:{display:"block",width:"275px"},children:[Object(S.jsxs)(w.a,{children:[Object(S.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:t.topic}),Object(S.jsxs)(m.a,{variant:"body2",component:"p",children:[t.desc,Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(S.jsxs)("div",{children:[t.no_of_ques," Questions"]}),Object(S.jsxs)("div",{children:[t.total_marks," Marks"]})]})]})]}),Object(S.jsx)(y.a,{children:Object(S.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(e){return a=t.id,n(a),void O.push("/quiz");var a},children:"Start"})})]})}))}))})})})}var W=Object(f.a)({root:{padding:"10px"},title:{fontSize:14}}),_=[{topic:"Java Basics",description:"Test your basic understanding of java here",noOfQues:5,marks:100,solved:3,marksObtained:"60%"},{topic:"Python",description:"Test your basic understanding of Python in this test",noOfQues:10,marks:50,solved:6,marksObtained:"60%"}];function P(){var e=W(),t=o.a.useState(1),a=Object(g.a)(t,2);a[0],a[1];return Object(S.jsx)(p.a,{children:Object(S.jsx)(p.a,{item:!0,xs:12,children:Object(S.jsx)(p.a,{container:!0,children:_.map((function(t){return Object(S.jsxs)(v.a,{variant:"outlined",className:e.root,style:{display:"block",margin:"10px",width:"275px"},children:[Object(S.jsxs)(w.a,{children:[Object(S.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:t.topic}),Object(S.jsxs)(m.a,{variant:"body2",component:"p",children:[t.description,Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"No of Questions: ",t.noOfQues,Object(S.jsx)("br",{}),"Total Marks: ",t.marks,Object(S.jsx)("br",{}),"Solved: ",t.solved,Object(S.jsx)("br",{}),"Marks Obtained: ",t.marksObtained]})]}),Object(S.jsx)(y.a,{children:Object(S.jsx)(C.a,{variant:"contained",color:"primary",children:"View"})})]})}))})})})}var z=Object(f.a)((function(e){return{root:Object(O.a)({width:"98%",margin:"10px"},"@media (max-width:600px)",{margin:"auto",marginTop:5})}}));function I(e){var t,a=z();return console.log("Prop.index is "+e.index),2===e.index?(console.log("getting attempted quizes..."),t=Object(S.jsx)(P,{})):(console.log("getting all quizes..."),t=Object(S.jsx)(N,{})),Object(S.jsx)(p.a,{className:a.root,container:!0,children:t})}var Q=a(219),R=a(218),A=Object(f.a)((function(e){return{root:Object(O.a)({width:"98%",maxWidth:360,margin:10,marginTop:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:5}),listItem:{"&:hover":{background:""}}}}));function F(e){var t=A(),a=o.a.useState(0),n=Object(g.a)(a,2),i=n[0],r=n[1],c=function(t,a){r(a),console.log("index selected = "+a),e.onSelectOption(a)};return Object(S.jsxs)("div",{className:t.root,children:[Object(S.jsxs)(h.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(S.jsx)(x.a,{className:t.listItem,button:!0,selected:0===i,onClick:function(e){return c(0,0)},children:"Available Quizes"}),Object(S.jsx)(x.a,{className:t.listItem,button:!0,selected:1===i,onClick:function(e){return c(0,1)},children:"Take Quiz"}),Object(S.jsx)(x.a,{className:t.listItem,button:!0,selected:2===i,onClick:function(e){return c(0,2)},children:"Attempted Quiz"})]}),Object(S.jsx)(R.a,{}),Object(S.jsx)(h.a,{component:"nav","aria-label":"secondary mailbox folder",children:Object(S.jsx)(x.a,{className:t.listItem,button:!0,selected:3===i,onClick:function(e){return c(0,2)},children:Object(S.jsx)(Q.a,{primary:"Others"})})})]})}var B=Object(f.a)((function(e){var t;return{root:Object(O.a)({width:"95%",margin:"10px",padding:"10px"},"@media (max-width:600px)",{margin:"auto",marginTop:0,padding:2,borderRadius:10}),mainscreen:Object(O.a)({display:"flex",borderRadius:10},"@media (max-width:600px)",(t={margin:"auto",marginTop:0,display:"block"},Object(O.a)(t,"margin","auto"),Object(O.a)(t,"justifyContent","center"),Object(O.a)(t,"alignItems","center"),t)),sidebar:Object(O.a)({width:"25%",backgroundColor:"#8da683",borderRadius:10,margin:"10px"},"@media (max-width:600px)",{margin:"auto",marginTop:0,width:"98%"}),mainbar:Object(O.a)({width:"75%",backgroundColor:"#E0C9A6",minHeight:"100vh",height:"100%",borderRadius:10,marginTop:"10px",marginRight:"10px"},"@media (max-width:600px)",{margin:"auto",marginTop:0,width:"98%"})}}));function D(){var e=B(),t=o.a.useState({id:0}),a=Object(g.a)(t,2),n=a[0],i=a[1];return Object(S.jsx)(p.a,{children:Object(S.jsxs)("div",{className:e.mainscreen,children:[Object(S.jsx)(p.a,{item:!0,className:e.sidebar,m:3,height:"100vh",children:Object(S.jsx)(F,{onSelectOption:function(e){console.log("found Value "+e),i({id:e})}})}),Object(S.jsx)(p.a,{className:e.mainbar,m:9,children:Object(S.jsx)(I,{index:n.id})})]})})}var L=a(94),M=a(220),V=Object(f.a)((function(e){return{root:Object(O.a)({width:"100%",maxWidth:360,backgroundColor:"#ffffff",marginTop:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:20})}}));function E(e){var t=V(),a=o.a.useState(0),n=Object(g.a)(a,2),i=n[0],r=n[1],c=function(t,a){r(a),console.log("index selected = "+a),e.onSelectOption(a)};return Object(S.jsxs)("div",{className:t.root,children:[Object(S.jsxs)(h.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(S.jsx)(x.a,{button:!0,selected:0===i,onClick:function(e){return c(0,0)},children:"Add Quiz"}),Object(S.jsx)(x.a,{button:!0,selected:1===i,onClick:function(e){return c(0,1)},children:"Your quizes"})]}),Object(S.jsx)(R.a,{})]})}var H=a(224),J=a(221),U=a(230),Y=a(231),G=a(225),K=a(121),X=Object(f.a)((function(e){return{paper:{display:"flex",width:"100%",flexDirection:"column",alignItems:"left"},formControl:{margin:e.spacing(1),minWidth:120},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},buttonAdd:Object(O.a)({margin:e.spacing(3,0,2),position:"relative",display:"flex",float:"right",width:100},"@media (max-width:600px)",{}),card:Object(O.a)({marginTop:10,width:"100%"},"@media (max-width:900px)",{width:"100%"}),header:{borderBottom:"2px grey solid"}}}));function Z(e){var t=X(),a=o.a.useState({category:e.category,topic:e.topic,ques:[]}),n=Object(g.a)(a,2),i=n[0],r=n[1],c=o.a.useState(0),s=Object(g.a)(c,2),l=(s[0],s[1],o.a.useState({questionText:"",option1:"",option2:"",answer:"",id:""})),d=Object(g.a)(l,2),j=d[0],u=d[1],b=o.a.useState(!1),m=Object(g.a)(b,2),p=m[0],h=m[1],x=o.a.useState(!1),O=Object(g.a)(x,2),f=O[0],y=O[1],k={questionText:"",option1:"",option2:"",answer:"",id:"",marks:0},T=function(e){var t;(""===(t=j).questionText||""===t.option1||""===t.option2||""===t.answer?(console.log(t.questionText+" "+t.option1+" "+t.option2+" "+t.answer),y(!1),h(!0),0):t.answer!=t.option1&&t.answer!=t.option2?(console.log(t.questionText+" "+t.option1+" "+t.option2+" "+t.answer),y(!0),h(!1),0):(y(!1),h(!1),1))?(h(!1),y(!1),console.log(j),k.id=i.ques.length+1,r({ques:[].concat(Object(K.a)(i.ques),[j])},(function(){console.log(i.ques)})),k={questionText:"",option1:"",option2:"",answer:"",id:"",marks:0},u({questionText:"",option1:"",option2:"",answer:""})):console.log(p+" "+f)};return Object(S.jsx)("div",{children:Object(S.jsx)(M.a,{component:"main",children:Object(S.jsxs)("div",{className:t.paper,children:[Object(S.jsxs)("div",{className:t.header,children:[Object(S.jsxs)("h3",{children:["Category: ",e.category]}),Object(S.jsxs)("h3",{children:["Topic: ",e.topic]})]}),i.ques.map((function(e){return Object(S.jsx)(v.a,{style:{margin:"10px"},children:Object(S.jsxs)(w.a,{children:[Object(S.jsxs)("h5",{children:[e.id,". ",e.questionText]}),"a. ",e.option1,Object(S.jsx)("br",{}),"b. ",e.option2,Object(S.jsx)("br",{}),"ans: ",e.answer]})})})),Object(S.jsx)(v.a,{className:t.card,children:Object(S.jsx)(w.a,{children:Object(S.jsxs)(J.a,{onSubmit:T,style:{width:"100%"},children:[!0===p?Object(S.jsx)("p",{style:{color:"red"},children:"Some inputs are invalid."}):"",!0===f?Object(S.jsx)("p",{style:{color:"red"},children:"Answer is not matching to any of the options."}):"",Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"question",label:"question",id:"question",value:j.questionText,onChange:function(e){!function(e){console.log(e.target.value),k.questionText=e.target.value,console.log(i.ques.length+1),u({questionText:e.target.value,option1:j.option1,option2:j.option2,answer:j.answer,id:i.ques.length+1})}(e)}}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"option1",label:"option1",id:"option1",value:j.option1,onChange:function(e){!function(e){k.option1=e.target.value,console.log(k.option1),u({questionText:j.questionText,option1:e.target.value,option2:j.option2,answer:j.answer,id:i.ques.length+1})}(e)}}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"option2",label:"option2",id:"option2",value:j.option2,onChange:function(e){!function(e){k.option2=e.target.value,console.log(k.option2),u({questionText:j.questionText,option1:j.option1,option2:e.target.value,answer:j.answer,id:i.ques.length+1})}(e)}}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"answer",label:"answer",id:"answer",value:j.answer,onChange:function(e){!function(e){k.answer=e.target.value,console.log(k.answer),u({questionText:j.questionText,option1:j.option1,option2:j.option2,answer:e.target.value,id:i.ques.length+1})}(e)}}),Object(S.jsx)(C.a,{type:"Add",variant:"contained",color:"primary",onClick:T,style:{width:"50px",margin:"auto"},children:"+"})]})})})]})})})}var $=[{title:"Computer Science",value:"cse"},{title:"Science",value:"science"},{title:"Maths",value:"maths"},{title:"General Knowledge",value:"gk"},{title:"Other",value:"other"}],ee=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formControl:{margin:e.spacing(1),minWidth:120},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:Object(O.a)({margin:e.spacing(3,0,2),position:"relative",display:"flex",float:"right",width:100},"@media (max-width:600px)",{})}}));function te(e){var t=ee(),a=o.a.useState({category:e.category,topic:e.topic}),n=Object(g.a)(a,2),i=n[0],r=n[1],c=function(t){t.preventDefault(),console.log("sending back category and topic "+i.category+" "+i.topic),e.handleNext(i.category,i.topic)};return Object(S.jsxs)(M.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(G.a,{}),Object(S.jsx)("div",{className:t.paper,children:Object(S.jsx)(v.a,{className:t.card,children:Object(S.jsx)(w.a,{children:Object(S.jsxs)(J.a,{onSubmit:c,children:[Object(S.jsx)(Y.a,{id:"category",options:$,getOptionLabel:function(e){return e.title},style:{width:300},required:!0,renderInput:function(e){return Object(S.jsx)(U.a,Object(L.a)(Object(L.a)({},e),{},{label:"Catergory",variant:"outlined"}))},onChange:function(e,t){console.log(t),r({category:t.title,topic:i.topic},(function(){console.log("category is "+i.category)}))}}),Object(S.jsx)(H.a,{}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"topic",label:"Topic",id:"topic",onChange:function(e){var t;t=e,console.log("setting topic to "+t.target.value),r({category:i.category,topic:t.target.value})}}),Object(S.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:c,style:{margin:"auto"},children:"Next"})]})})})})]})}var ae=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={id:0,page:0,category:"",topic:""},e.handleCategoryChange=function(t){console.log("changing category "+t.target.value),e.setState({category:t.target.value})},e.handleTopicChange=function(t){console.log("setting topic to "+t.target.value),e.setState({topic:t.target.value})},e.handleNext=function(t,a){console.log("found category and topic "+t+" "+a),e.setState({category:t,topic:a,id:1},(function(){console.log("id".concat(e.state.id))}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(S.jsx)(p.a,{style:{width:"100%",maxWidth:"600px"},width:"100%",children:Object(S.jsx)("div",{className:"main-screen",children:0===this.state.id?Object(S.jsx)(te,{handleNext:this.handleNext,category:this.state.category,topic:this.state.topic}):Object(S.jsx)(Z,{category:this.state.category,topic:this.state.topic})})})}}]),a}(o.a.Component),ne=Object(f.a)({root:{padding:"10px"},title:{fontSize:14}}),ie=[{topic:"Java Basics",description:"Test your basic understanding of java here",noOfQues:5,marks:100,solved:3,marksObtained:"60%"},{topic:"Python",description:"Test your basic understanding of Python in this test",noOfQues:10,marks:50,solved:6,marksObtained:"60%"}];function oe(){var e=ne(),t=o.a.useState(1),a=Object(g.a)(t,2);a[0],a[1];return Object(S.jsx)(p.a,{children:Object(S.jsx)(p.a,{item:!0,xs:12,children:Object(S.jsx)(p.a,{container:!0,children:ie.map((function(t){return Object(S.jsxs)(v.a,{variant:"outlined",className:e.root,style:{display:"block",margin:"10px",width:"275px"},children:[Object(S.jsxs)(w.a,{children:[Object(S.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:t.topic}),Object(S.jsxs)(m.a,{variant:"body2",component:"p",children:[t.description,Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"No of Questions: ",t.noOfQues,Object(S.jsx)("br",{}),"Total Marks: ",t.marks,Object(S.jsx)("br",{}),"Solved: ",t.solved,Object(S.jsx)("br",{}),"Marks Obtained: ",t.marksObtained]})]}),Object(S.jsx)(y.a,{children:Object(S.jsx)(C.a,{variant:"contained",color:"primary",children:"View"})})]})}))})})})}Object(f.a)({root:Object(O.a)({width:"100%",margin:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:20}),title:{fontSize:14}});var re=Object(f.a)((function(e){return{root:Object(O.a)({width:"100%",margin:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:20})}}));function ce(e){var t,a=re();return console.log("Prop.index is "+e.index),2===e.index?(console.log("getting attempted quizes..."),t=Object(S.jsx)(oe,{})):(console.log("getting all quizes..."),t=Object(S.jsx)(ae,{})),Object(S.jsx)(p.a,{className:a.root,container:!0,children:t})}var se=Object(f.a)((function(e){var t;return{root:Object(O.a)({width:"100%",margin:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:20}),mainscreen:Object(O.a)({display:"flex"},"@media (max-width:600px)",(t={margin:"auto",marginTop:20,display:"block"},Object(O.a)(t,"margin","auto"),Object(O.a)(t,"justifyContent","center"),Object(O.a)(t,"alignItems","center"),t)),sidebar:Object(O.a)({width:"25%",margin:10},"@media (max-width:600px)",{margin:"auto",marginTop:20,width:"100%"}),mainbar:Object(O.a)({width:"75%",minHeight:"100vh",margin:10},"@media (max-width:600px)",{margin:"auto",marginTop:20,width:"100%"})}}));function le(){var e=se(),t=o.a.useState({id:0}),a=Object(g.a)(t,2),n=a[0],i=a[1];return Object(S.jsx)(p.a,{children:Object(S.jsxs)("div",{className:e.mainscreen,children:[Object(S.jsx)(p.a,{item:!0,className:e.sidebar,m:3,height:"100vh",children:Object(S.jsx)(E,{onSelectOption:function(e){console.log("found Value "+e),i({id:e})}})}),Object(S.jsx)(p.a,{className:e.mainbar,m:9,style:{backgroundColor:"#cce6ff",height:"auto"},children:Object(S.jsx)(ce,{index:n.id})})]})})}var de=a(235),je=a(227),ue=a(234),be=a(226),me=a(232),pe=a(77),he=a.n(pe),xe=a(76),ge=a.n(xe);a(176);function Oe(){return Object(S.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(S.jsx)(be.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var fe=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ve(){var e=fe(),t=Object(k.g)(),a=Object(i.useState)(""),n=Object(g.a)(a,2),o=n[0],r=n[1],c=Object(i.useState)(""),s=Object(g.a)(c,2),l=s[0],d=s[1],j=Object(i.useState)(""),u=Object(g.a)(j,2),b=u[0],p=u[1],h=Object(i.useState)(""),x=Object(g.a)(h,2),O=x[0],f=x[1],v=function(e){e.preventDefault(),console.log("registering..."+o),ge.a.post("https://myexamportal-backend.herokuapp.com/user/register",{first_name:o,last_name:l,username:b,password:O}).then((function(e){return console.log(e),t.push("/"),Object(S.jsx)(k.a,{to:"/"})}),(function(e){console.log(e)}))};return Object(S.jsxs)(M.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(G.a,{}),Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)(de.a,{className:e.avatar,children:Object(S.jsx)(he.a,{})}),Object(S.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(S.jsxs)("form",{className:e.form,onSubmit:function(e){v(e)},noValidate:!0,children:[Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"first_name",label:"First Name",name:"first_name",autoComplete:"first_name",autoFocus:!0,onChange:function(e){!function(e){console.log("setting first name to "+e.value),r(e.target.value)}(e)}}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"last_name",label:"Last Name",name:"last_name",autoComplete:"last_name",autoFocus:!0,onChange:function(e){!function(e){d(e.target.value)}(e)}}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){!function(e){p(e.target.value)}(e)}}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){!function(e){f(e.target.value)}(e)}}),Object(S.jsx)(je.a,{control:Object(S.jsx)(ue.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(S.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){v(e)},children:"Register"})]})]}),Object(S.jsx)(me.a,{mt:8,children:Object(S.jsx)(Oe,{})})]})}var ye=a(16);function we(){return Object(S.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(S.jsx)(ye.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Ce=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ke(){var e=Ce(),t=(Object(k.g)(),Object(i.useState)("")),a=Object(g.a)(t,2),n=(a[0],a[1]),o=Object(i.useState)(""),r=Object(g.a)(o,2),c=(r[0],r[1]);return Object(S.jsxs)(M.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(G.a,{}),Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)(de.a,{className:e.avatar,children:Object(S.jsx)(he.a,{})}),Object(S.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(S.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){!function(e){n(e.target.value)}(e)}}),Object(S.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){!function(e){c(e.target.value)}(e)}}),Object(S.jsx)(je.a,{control:Object(S.jsx)(ue.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(S.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(S.jsxs)(p.a,{container:!0,children:[Object(S.jsx)(p.a,{item:!0,xs:!0,children:Object(S.jsx)(ye.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(S.jsx)(p.a,{item:!0,children:Object(S.jsx)(ye.b,{to:{pathname:"/signup"},variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(S.jsx)(me.a,{mt:8,children:Object(S.jsx)(we,{})})]})}var Se=a(233),Te=a(236),qe=a(222),Ne=[{id:1,quesText:"What is your name?",option1:"Rahul",option2:"Shivesh",option3:"Ashish",option4:"Raju",answer:"Rahul"},{id:2,quesText:"What is your age?",option1:"300",option2:"12",option3:"23",option4:"-19",answer:"23"},{id:3,quesText:"Where do you live?",option1:"Usa",option2:"Hyd",option3:"Patna",option4:"England",answer:"Patna"}],We=Object(f.a)({root:Object(O.a)({width:"98%",height:"100vh",margin:"10px",borderRadius:5,backgroundColor:"#E0C9A6"},"@media (max-width:600px)",{margin:5}),box:Object(O.a)({margin:"auto",width:"500px",padding:20,backgroundColor:"#fafad2",flexDirection:"column",justifyContent:"center"},"@media (max-width:600px)",{width:"80%",margin:10})});function _e(){var e=We(),t=i.useState(0),a=Object(g.a)(t,2),n=a[0],o=a[1],r=i.useState([]),c=Object(g.a)(r,2),s=(c[0],c[1],function(e,t,a){console.log(t),t<Ne.length-1&&o(t+1)});return Object(S.jsxs)(p.a,{className:e.root,children:[Object(S.jsx)(v.a,{className:e.box,children:Object(S.jsxs)(J.a,{children:[Object(S.jsxs)(qe.a,{component:"legend",children:[Ne[n].id,". ",Ne[n].quesText]}),Object(S.jsxs)(Te.a,{"aria-label":"gender",name:"radio-buttons-group",onChange:function(e){return function(e,t){console.log(e.target.value,t)}(e,Ne[n].id)},children:[Object(S.jsx)(je.a,{value:Ne[n].option1,control:Object(S.jsx)(Se.a,{}),label:Ne[n].option1}),Object(S.jsx)(je.a,{value:Ne[n].option2,control:Object(S.jsx)(Se.a,{}),label:Ne[n].option2}),Object(S.jsx)(je.a,{value:Ne[n].option3,control:Object(S.jsx)(Se.a,{}),label:Ne[n].option3}),Object(S.jsx)(je.a,{value:Ne[n].option4,control:Object(S.jsx)(Se.a,{}),label:Ne[n].option4})]}),Object(S.jsx)("br",{}),n<Ne.length-1?Object(S.jsx)(C.a,{variant:"contained",color:"primary",style:{display:"flex",float:"right"},onClick:function(e){return s(0,n,Ne[n].id)},children:"Next"}):Object(S.jsx)("div",{})]})}),Object(S.jsx)(C.a,{variant:"contained",color:"primary",style:{display:"flex",float:"right"},onClick:function(e){return s(0,n,Ne[n].id)},children:"Submit"})]})}var Pe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={id:"0",admin:!1},e.handleOptionSelect=function(t){console.log("found Value "+t),e.setState({id:t})},e.changeProfile=function(t){e.setState({admin:!e.state.admin})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(S.jsxs)(ye.a,{children:[Object(S.jsx)(p.a,{m:2,children:Object(S.jsx)(u.a,{position:"static",style:{backgroundColor:"#5C4033"},children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(m.a,{variant:"title",color:"inherit",children:"Exam Portal"}),Object(S.jsxs)(h.a,{style:{display:"flex",float:"right",color:"white",height:"50px"},children:[this.state.admin?Object(S.jsx)(x.a,{children:Object(S.jsx)(ye.b,{to:"/admin",children:"Home"})}):Object(S.jsx)(x.a,{children:Object(S.jsx)(ye.b,{to:"/",children:"Home"})}),Object(S.jsx)(x.a,{children:Object(S.jsx)(ye.b,{to:"/login",children:"Login"})}),Object(S.jsx)(x.a,{children:Object(S.jsx)(ye.b,{to:"/signup",children:"Signup"})}),!0===this.state.admin?Object(S.jsx)(x.a,{children:Object(S.jsx)(ye.b,{to:"/",onClick:this.changeProfile,children:"User Login"})}):Object(S.jsx)(x.a,{children:Object(S.jsx)(ye.b,{to:"/admin",onClick:this.changeProfile,children:"Admin Login"})})]})]})})}),Object(S.jsxs)(k.d,{children:[Object(S.jsx)(k.b,{path:"/signup",children:Object(S.jsx)(ve,{})}),Object(S.jsx)(k.b,{path:"/login",children:Object(S.jsx)(ke,{})}),Object(S.jsx)(k.b,{path:"/admin",children:Object(S.jsx)(le,{})}),Object(S.jsx)(k.b,{path:"/quiz",children:Object(S.jsx)(_e,{})}),Object(S.jsx)(k.b,{path:"/",children:Object(S.jsx)(D,{})})]})]})}}]),a}(o.a.Component),ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,239)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),o(e),r(e)}))};c.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(Pe,{})}),document.getElementById("root")),ze()}},[[181,1,2]]]);
//# sourceMappingURL=main.8e9c79d2.chunk.js.map