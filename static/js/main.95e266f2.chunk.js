(this["webpackJsonpexam-portal"]=this["webpackJsonpexam-portal"]||[]).push([[0],{115:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},191:function(e,t){},192:function(e,t,n){"use strict";n.r(t);var a,i=n(0),o=n.n(i),c=n(17),r=n.n(c),s=(n(159),n(79)),l=n(80),d=n(93),j=n(91),u=(n.p,n(160),n(241)),b=n(242),m=n(64),p=n(223),h=n(229),x=n(230),g=n(8),O=n(9),f=n(221),v=n(225),y=n(227),w=n(226),S=n(228),C=n(15),k="https://myexamportal-backend.herokuapp.com/",T=(n(115),n(1));var q=Object(f.a)({root:(a={width:"80%",maxWidth:"400px",boxShadow:"1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45)",transition:"0.25s ease-in-out",justifyContent:"space-around",alignItems:"center",margin:"20px",spacing:20,borderRadius:15},Object(O.a)(a,"@media (max-width:600px)",{margin:"auto",marginTop:20}),Object(O.a)(a,"&:hover",{boxShadow:"2.2px 4.0px 4.0px hsl(0deg 0% 0% / 0.45)",transform:"scale(1.1)",transition:"0.25s ease-in-out"}),a),title:{fontSize:14}}),N=[{id:1,topic:"Java Basics",description:"Test your basic understanding of java in this test.",no_of_ques:5,total_marks:100},{id:2,topic:"Spring Boot",description:"Test your basic understanding of Spring Boot in this test",no_of_ques:10,total_marks:50},{id:3,topic:"Python",description:"Test your basic understanding of Python in this test",no_of_ques:10,total_marks:50},{id:4,topic:"C++",description:"Test your understanding of C++ in this test",no_of_ques:10,total_marks:50}];function W(){var e=q(),t=o.a.useState(1),n=Object(g.a)(t,2),a=(n[0],n[1]),c=o.a.useState(!1),r=Object(g.a)(c,2),s=(r[0],r[1]),l=o.a.useState(N),d=Object(g.a)(l,2),j=d[0],u=d[1],b=o.a.useState(!1),h=Object(g.a)(b,2),x=(h[0],h[1]);Object(i.useEffect)((function(){fetch("".concat(k,"/api/getQuiz")).then((function(e){return e.json()})).then((function(e){s(!0),u(e.concat(j))}),(function(e){s(!0),x(e)}))}),[]);var O=Object(C.g)();return Object(T.jsx)(p.a,{style:{margin:"auto"},children:Object(T.jsx)(p.a,{item:!0,xs:12,children:j.length<=4?Object(T.jsx)(p.a,{xs:12,children:Object(T.jsx)("loader",{})}):Object(T.jsx)(p.a,{container:!0,item:!0,m:3,children:[1,2,3].map((function(t){return j.map((function(t){return Object(T.jsxs)(v.a,{variant:"outlined",m:3,className:e.root,style:{display:"inline-block"},children:[Object(T.jsxs)(w.a,{children:[Object(T.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:t.topic}),Object(T.jsxs)(m.a,{variant:"body2",component:"p",children:[t.desc,Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(T.jsxs)("div",{children:[t.no_of_ques," Questions"]}),Object(T.jsxs)("div",{children:[t.total_marks," Marks"]})]})]})]}),Object(T.jsx)(y.a,{children:Object(T.jsx)(S.a,{variant:"contained",color:"primary",onClick:function(e){return n=t.id,a(n),void O.push({pathname:"/quiz",state:{quizId:n}});var n},children:"Start"})})]})}))}))})})})}var z=Object(f.a)({root:{padding:"10px"},title:{fontSize:14}}),I=[{topic:"Java Basics",description:"Test your basic understanding of java here",noOfQues:5,marks:100,solved:3,marksObtained:"60%"},{topic:"Python",description:"Test your basic understanding of Python in this test",noOfQues:10,marks:50,solved:6,marksObtained:"60%"}];function _(){var e=z(),t=o.a.useState(1),n=Object(g.a)(t,2);n[0],n[1];return Object(T.jsx)(p.a,{children:Object(T.jsx)(p.a,{item:!0,xs:12,children:Object(T.jsx)(p.a,{container:!0,children:I.map((function(t){return Object(T.jsxs)(v.a,{variant:"outlined",className:e.root,style:{display:"block",margin:"10px",width:"275px",borderRadius:"15px"},children:[Object(T.jsxs)(w.a,{children:[Object(T.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:t.topic}),Object(T.jsxs)(m.a,{variant:"body2",component:"p",children:[t.description,Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"No of Questions: ",t.noOfQues,Object(T.jsx)("br",{}),"Total Marks: ",t.marks,Object(T.jsx)("br",{}),"Solved: ",t.solved,Object(T.jsx)("br",{}),"Marks Obtained: ",t.marksObtained]})]}),Object(T.jsx)(y.a,{children:Object(T.jsx)(S.a,{variant:"contained",color:"primary",children:"View"})})]})}))})})})}var A=Object(f.a)((function(e){return{root:Object(O.a)({},"@media (max-width:600px)",{margin:"auto",marginTop:5})}}));function P(e){var t,n=A();return console.log("Prop.index is "+e.index),2===e.index?(console.log("getting attempted quizes..."),t=Object(T.jsx)(_,{})):(console.log("getting all quizes..."),t=Object(T.jsx)(W,{})),Object(T.jsx)(p.a,{className:n.root,container:!0,children:t})}var Q=n(232),R=n(231),B=Object(f.a)((function(e){return{root:Object(O.a)({width:"100%",maxWidth:360,marginTop:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:5}),listItem:{"&:hover":{background:""}}}}));function F(e){var t=B(),n=o.a.useState(0),a=Object(g.a)(n,2),i=a[0],c=a[1],r=function(t,n){c(n),console.log("index selected = "+n),e.onSelectOption(n)};return Object(T.jsxs)("div",{className:t.root,children:[Object(T.jsxs)(h.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(T.jsx)(x.a,{className:t.listItem,button:!0,selected:0===i,onClick:function(e){return r(0,0)},children:"Available Quizes"}),Object(T.jsx)(x.a,{className:t.listItem,button:!0,selected:2===i,onClick:function(e){return r(0,2)},children:"Attempted Quiz"})]}),Object(T.jsx)(R.a,{}),Object(T.jsx)(h.a,{component:"nav","aria-label":"secondary mailbox folder",children:Object(T.jsx)(x.a,{className:t.listItem,button:!0,selected:3===i,onClick:function(e){return r(0,2)},children:Object(T.jsx)(Q.a,{primary:"Others"})})})]})}var E=Object(f.a)((function(e){var t;return{root:Object(O.a)({width:"100%"},"@media (max-width:600px)",{margin:"auto",marginTop:0,padding:2,borderRadius:10}),mainscreen:Object(O.a)({display:"flex",borderRadius:10},"@media (max-width:600px)",(t={margin:"auto",marginTop:0,display:"block"},Object(O.a)(t,"margin","auto"),Object(O.a)(t,"justifyContent","center"),Object(O.a)(t,"alignItems","center"),t)),sidebar:Object(O.a)({width:"25%",backgroundColor:"#8da683",borderRadius:10,borderRight:"2px solid grey"},"@media (max-width:600px)",{margin:"auto",marginTop:0,width:"98%"}),mainbar:Object(O.a)({width:"75%",backgroundColor:"#E0C9A6",minHeight:"100vh",height:"100%",borderLeft:"2px solid grey",borderRadius:10},"@media (max-width:600px)",{margin:"auto",marginTop:0,width:"98%"})}}));function D(){var e=E(),t=o.a.useState({id:0}),n=Object(g.a)(t,2),a=n[0],i=n[1];return Object(T.jsx)(p.a,{children:Object(T.jsxs)("div",{className:e.mainscreen,children:[Object(T.jsx)(p.a,{item:!0,className:e.sidebar,m:3,height:"100vh",children:Object(T.jsx)(F,{onSelectOption:function(e){console.log("found Value "+e),i({id:e})}})}),Object(T.jsx)(p.a,{className:e.mainbar,m:9,children:Object(T.jsx)(P,{index:a.id})})]})})}var M=n(14),L=n(237),V=Object(f.a)((function(e){return{root:Object(O.a)({width:"100%",maxWidth:360,backgroundColor:"#ffffff",marginTop:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:20})}}));function H(e){var t=V(),n=o.a.useState(0),a=Object(g.a)(n,2),i=a[0],c=a[1],r=function(t,n){c(n),console.log("index selected = "+n),e.onSelectOption(n)};return Object(T.jsxs)("div",{className:t.root,children:[Object(T.jsxs)(h.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(T.jsx)(x.a,{button:!0,selected:0===i,onClick:function(e){return r(0,0)},children:"Add Quiz"}),Object(T.jsx)(x.a,{button:!0,selected:1===i,onClick:function(e){return r(0,1)},children:"Your quizes"})]}),Object(T.jsx)(R.a,{})]})}var J=n(236),U=n(234),Y=n(244),G=n(243),K=n(238),X=n(92),Z=n(249),$=Object(f.a)((function(e){return{paper:{display:"flex",width:"100%",flexDirection:"column",alignItems:"left"},formControl:{margin:e.spacing(1),minWidth:120},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},buttonAdd:Object(O.a)({margin:e.spacing(3,0,2),position:"relative",display:"flex",float:"right",width:100},"@media (max-width:600px)",{}),card:Object(O.a)({marginTop:10,width:"500px"},"@media (max-width:900px)",{width:"100%"}),header:{borderBottom:"2px grey solid"}}}));var ee=function(e){var t=e.onClose,n=e.selectedValue,a=e.open,c=e.onSave,r=e.count,s=e.questionToEdit,l=e.isEditing,d=o.a.useState(e.open),j=Object(g.a)(d,2),u=j[0],b=j[1];console.log(a+" "+r+" "+l),console.log(s);var m=$(),h=o.a.useState({category:e.category,topic:e.topic,ques:[]}),x=Object(g.a)(h,2),O=x[0],f=(x[1],o.a.useState({questionText:"",option1:"",option2:"",option3:null,option4:null,answer:"",id:""})),y=Object(g.a)(f,2),C=y[0],k=y[1];console.log("isOpen "+u),!0===l&&!1===u&&b(!0),Object(i.useEffect)((function(){console.log("inside use effect"),l?(console.log("editing question"),k({questionText:s.questionText,option1:s.option1,option2:s.option2,option3:s.option3,option4:s.option4,answer:s.answer,id:s.id})):(console.log("not editting"),k({questionText:"",option1:"",option2:"",option3:null,option4:null,answer:"",id:""}))}),[u]);var q=o.a.useState(!1),N=Object(g.a)(q,2),W=N[0],z=N[1],I=o.a.useState(!1),_=Object(g.a)(I,2),A=_[0],P=_[1],Q={questionText:"",option1:"",option2:"",option3:null,option4:null,answer:"",id:""},R=function(e){if(console.log(C),function(e){return""===e.questionText||""===e.option1||""===e.option2||""===e.answer?(console.log(e.questionText+" "+e.option1+" "+e.option2+" "+e.answer),P(!1),z(!0),!1):e.answer!=e.option1&&e.answer!=e.option2&&e.answer!=e.option3&&e.answer!=e.option4?(P(!0),z(!1),!1):(P(!1),z(!1),!0)}(C)){z(!1),P(!1);var t=C;k({}),b(!1),c(t,r)}else console.log(W+" "+A)},B=function(){b(!1),t(n)};return Object(T.jsx)(Z.a,{onClose:B,open:a,children:Object(T.jsx)(v.a,{className:m.card,children:Object(T.jsx)(w.a,{children:Object(T.jsxs)(U.a,{onSubmit:R,style:{width:"100%"},children:[!0===W?Object(T.jsx)("p",{style:{color:"red"},children:"Some inputs are invalid."}):"",!0===A?Object(T.jsx)("p",{style:{color:"red"},children:"Answer is not matching to any of the options."}):"",Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"question",label:"question",id:"question",value:C.questionText,onChange:function(e){!function(e){console.log(e.target.value),Q.questionText=e.target.value,console.log(O.ques.length+1),k(Object(M.a)(Object(M.a)({},C),{},{questionText:e.target.value,id:r}))}(e)}}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"option1",label:"option1",id:"option1",value:C.option1,onChange:function(e){!function(e){Q.option1=e.target.value,console.log(Q.option1),k(Object(M.a)(Object(M.a)({},C),{},{option1:e.target.value,id:r}))}(e)}}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"option2",label:"option2",id:"option2",value:C.option2,onChange:function(e){!function(e){Q.option2=e.target.value,console.log(Q.option2),k(Object(M.a)(Object(M.a)({},C),{},{option2:e.target.value,id:r}))}(e)}}),Object(T.jsx)(S.a,{variant:"text",children:"+ Add more options"}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"answer",label:"answer",id:"answer",value:C.answer,onChange:function(e){!function(e){Q.answer=e.target.value,console.log(Q.answer),k(Object(M.a)(Object(M.a)({},C),{},{answer:e.target.value,id:r}))}(e)}}),Object(T.jsxs)(p.a,{container:!0,item:!0,md:12,display:"flex",children:[Object(T.jsx)(S.a,{type:"Add",variant:"contained",color:"primary",onClick:R,style:{width:"50px",margin:"auto"},children:!0===l?"Save":"Add"}),Object(T.jsx)(S.a,{type:"Add",variant:"contained",color:"red",onClick:B,style:{width:"50px",margin:"auto"},children:"Cancel"})]})]})})})})},te=n(132),ne=n.n(te),ae=n(133),ie=n.n(ae),oe=n(16),ce=Object(f.a)((function(e){return{paper:{display:"block",margin:"auto",padding:"auto"},formControl:{margin:e.spacing(1),minWidth:120},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},buttonAdd:Object(O.a)({margin:e.spacing(3,0,2),position:"relative",display:"flex",float:"right",width:100},"@media (max-width:600px)",{}),card:Object(O.a)({marginTop:10,width:"100%"},"@media (max-width:900px)",{width:"100%"}),header:{borderBottom:"2px grey solid"},icons:Object(O.a)({display:"block",margin:"auto",padding:"auto"},"@media (max-width:600px)",{display:"flex"})}}));function re(e){var t=ce(),n=o.a.useState({category:e.category,topic:e.topic,ques:[]}),a=Object(g.a)(n,2),i=a[0],c=a[1],r=o.a.useState(0),s=Object(g.a)(r,2),l=s[0],d=s[1],j=o.a.useState([]),u=Object(g.a)(j,2),b=(u[0],u[1],o.a.useState(!1)),h=Object(g.a)(b,2),x=h[0],O=h[1],f=o.a.useState("user02@gmail.com"),y=Object(g.a)(f,2),C=y[0],k=y[1],q=o.a.useState({isTrue:!1,index:0}),N=Object(g.a)(q,2),W=N[0],z=N[1],I=o.a.useState(!1),_=Object(g.a)(I,2),A=_[0],P=_[1];return A?Object(T.jsxs)(p.a,{className:t.root,container:!0,item:!0,xs:12,alignItems:"center",justifyContent:"center",children:[Object(T.jsx)(p.a,{container:!0,item:!0,xs:12,alignItems:"center",justifyContent:"center",children:"There was some problem adding this quiz."}),Object(T.jsx)(p.a,{children:Object(T.jsx)(oe.b,{to:"/",children:"Go Home."})})]}):Object(T.jsxs)("div",{children:[Object(T.jsx)(L.a,{component:"main",children:Object(T.jsxs)("div",{className:t.paper,children:[Object(T.jsxs)(p.a,{item:!0,container:!0,sm:12,style:{display:"flex",margin:"auto",borderBottom:"2px solid grey",marginTop:"20px"},children:[Object(T.jsx)(p.a,{container:!0,item:!0,sm:6,style:{justify:"space-between"},children:Object(T.jsxs)(m.a,{variant:"h6",component:"div",children:["Category: ",e.category]})}),Object(T.jsx)(p.a,{container:!0,item:!0,sm:6,style:{float:"right"},children:Object(T.jsxs)(m.a,{variant:"h6",component:"div",children:["Topic: ",e.topic]})})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("br",{}),Object(T.jsx)(S.a,{variant:"outlined",onClick:function(){O(!0)},children:"Add Question"}),Object(T.jsx)(ee,{selectedValue:C,open:x,onClose:function(e){O(!1),k(e),z({isTrue:!1,index:null})},onSave:!0===W.isTrue?function(e,t){var n=i.ques;console.log("updating..."),console.log(n[t]),n[t]=e,console.log(e),console.log(),c(Object(M.a)(Object(M.a)({},i),{},{ques:n})),z(Object(M.a)(Object(M.a)({},W),{},{isTrue:!1})),O(!1)}:function(e){console.log("found"),d(l+1),console.log(l),console.log(e),c(Object(M.a)(Object(M.a)({},i),{},{ques:[].concat(Object(X.a)(i.ques),[e])})),O(!1)},count:!0===W.isTrue?W.index:l,questionToEdit:!0===W.isTrue?i.ques[W.index]:{},isEditing:W.isTrue})]}),i.ques.map((function(e,n){return Object(T.jsxs)(p.a,{container:!0,item:!0,sm:12,style:{display:"flex"},children:[Object(T.jsx)(p.a,{container:!0,item:!0,sm:9,children:Object(T.jsx)(v.a,{style:{margin:"5px",maxWidth:"100%",width:"600px"},children:Object(T.jsxs)(w.a,{children:[Object(T.jsxs)("h5",{children:[n+1,". ",e.questionText]}),"a. ",e.option1,Object(T.jsx)("br",{}),"b. ",e.option2,Object(T.jsx)("br",{}),"ans: ",e.answer]})})}),Object(T.jsxs)(p.a,{container:!0,item:!0,sm:3,className:t.icons,children:[Object(T.jsx)(p.a,{children:Object(T.jsx)(S.a,{onClick:function(e){return function(e,t){console.log("index to edit "+t),console.log(i.ques[t]),z({isTrue:!0,index:t}),O(!0),console.log("editing")}(0,n)},children:Object(T.jsx)(ne.a,{fontSize:"large"})})}),Object(T.jsx)(p.a,{children:Object(T.jsx)(S.a,{onClick:function(e){return function(e,t){console.log("Deleting "+t);var n=i.ques;console.log(n),n.splice(t,1),console.log(n),c(Object(M.a)(Object(M.a)({},i),{},{ques:n}))}(0,n)},children:Object(T.jsx)(ie.a,{fontSize:"large"})})})]})]})}))]})}),i.ques.length>0?Object(T.jsx)(p.a,{container:!0,item:!0,xs:12,justify:"center",style:{marginTop:"50px"},children:Object(T.jsx)(S.a,{variant:"contained",color:"primary",className:t.SubmitButton,onClick:function(){P(!0)},children:"Submit"})}):""]})}var se=[{title:"Computer Science",value:"cse"},{title:"Science",value:"science"},{title:"Maths",value:"maths"},{title:"General Knowledge",value:"gk"},{title:"Other",value:"other"}],le=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formControl:{margin:e.spacing(1),minWidth:120},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:Object(O.a)({margin:e.spacing(3,0,2),position:"relative",display:"flex",float:"right",width:100},"@media (max-width:600px)",{})}}));function de(e){var t=le(),n=o.a.useState({category:e.category,topic:e.topic}),a=Object(g.a)(n,2),i=a[0],c=a[1],r=function(t){t.preventDefault(),console.log("sending back category and topic "+i.category+" "+i.topic),e.handleNext(i.category,i.topic)};return Object(T.jsxs)(L.a,{component:"main",children:[Object(T.jsx)(K.a,{}),Object(T.jsx)("div",{className:t.paper,children:Object(T.jsx)(v.a,{className:t.card,children:Object(T.jsx)(w.a,{children:Object(T.jsxs)(U.a,{onSubmit:r,children:[Object(T.jsx)(G.a,{id:"category",options:se,getOptionLabel:function(e){return e.title},style:{width:300},required:!0,renderInput:function(e){return Object(T.jsx)(Y.a,Object(M.a)(Object(M.a)({},e),{},{label:"Catergory",variant:"outlined"}))},onChange:function(e,t){console.log(t),c({category:t.title,topic:i.topic},(function(){console.log("category is "+i.category)}))}}),Object(T.jsx)(J.a,{}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"topic",label:"Topic",id:"topic",onChange:function(e){var t;t=e,console.log("setting topic to "+t.target.value),c({category:i.category,topic:t.target.value})}}),Object(T.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:r,style:{margin:"auto"},children:"Next"})]})})})})]})}var je=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={id:0,page:0,category:"",topic:""},e.handleCategoryChange=function(t){console.log("changing category "+t.target.value),e.setState({category:t.target.value})},e.handleTopicChange=function(t){console.log("setting topic to "+t.target.value),e.setState({topic:t.target.value})},e.handleNext=function(t,n){console.log("found category and topic "+t+" "+n),e.setState({category:t,topic:n,id:1},(function(){console.log("id".concat(e.state.id))}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(T.jsx)(p.a,{style:{width:"95%",maxWidth:"1000px"},width:"100%",children:Object(T.jsx)("div",{className:"main-screen",children:0===this.state.id?Object(T.jsx)(de,{handleNext:this.handleNext,category:this.state.category,topic:this.state.topic}):Object(T.jsx)(re,{category:this.state.category,topic:this.state.topic})})})}}]),n}(o.a.Component),ue=Object(f.a)({root:{padding:"10px"},title:{fontSize:14}}),be=[{topic:"Java Basics",description:"Test your basic understanding of java here",noOfQues:5,marks:100,solved:3,marksObtained:"60%"},{topic:"Python",description:"Test your basic understanding of Python in this test",noOfQues:10,marks:50,solved:6,marksObtained:"60%"}];function me(){var e=ue(),t=o.a.useState(1),n=Object(g.a)(t,2);n[0],n[1];return Object(T.jsx)(p.a,{children:Object(T.jsx)(p.a,{item:!0,xs:12,children:Object(T.jsx)(p.a,{container:!0,children:be.map((function(t){return Object(T.jsxs)(v.a,{variant:"outlined",className:e.root,style:{display:"block",margin:"10px",width:"275px"},children:[Object(T.jsxs)(w.a,{children:[Object(T.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:t.topic}),Object(T.jsxs)(m.a,{variant:"body2",component:"p",children:[t.description,Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"No of Questions: ",t.noOfQues,Object(T.jsx)("br",{}),"Total Marks: ",t.marks,Object(T.jsx)("br",{}),"Solved: ",t.solved,Object(T.jsx)("br",{}),"Marks Obtained: ",t.marksObtained]})]}),Object(T.jsx)(y.a,{children:Object(T.jsx)(S.a,{variant:"contained",color:"primary",children:"View"})})]})}))})})})}Object(f.a)({root:Object(O.a)({width:"100%",margin:"20px"},"@media (max-width:600px)",{margin:"auto",marginTop:20}),title:{fontSize:14}});var pe=Object(f.a)((function(e){return{root:Object(O.a)({width:"100%"},"@media (max-width:600px)",{margin:"auto",marginTop:20})}}));function he(e){var t,n=pe();return console.log("Prop.index is "+e.index),2===e.index?(console.log("getting attempted quizes..."),t=Object(T.jsx)(me,{})):(console.log("getting all quizes..."),t=Object(T.jsx)(je,{})),Object(T.jsx)(p.a,{className:n.root,container:!0,children:t})}var xe=Object(f.a)((function(e){var t;return{root:Object(O.a)({width:"90%"},"@media (max-width:600px)",{margin:"auto",marginTop:20}),mainscreen:Object(O.a)({display:"flex"},"@media (max-width:600px)",(t={margin:"auto",marginTop:20,display:"block"},Object(O.a)(t,"margin","auto"),Object(O.a)(t,"justifyContent","center"),Object(O.a)(t,"alignItems","center"),t)),sidebar:Object(O.a)({width:"25%",margin:10},"@media (max-width:600px)",{margin:"auto",marginTop:20,width:"100%"}),mainbar:Object(O.a)({width:"75%",minHeight:"100vh"},"@media (max-width:600px)",{margin:"auto",marginTop:20,width:"100%"})}}));function ge(){var e=xe(),t=o.a.useState({id:0}),n=Object(g.a)(t,2),a=n[0],i=n[1];return Object(T.jsxs)("div",{className:e.mainscreen,children:[Object(T.jsx)(p.a,{item:!0,className:e.sidebar,m:3,height:"100vh",children:Object(T.jsx)(H,{onSelectOption:function(e){console.log("found Value "+e),i({id:e})}})}),Object(T.jsx)(p.a,{className:e.mainbar,m:9,style:{backgroundColor:"#cce6ff",height:"auto"},children:Object(T.jsx)(he,{index:a.id})})]})}var Oe=n(250),fe=n(240),ve=n(248),ye=n(239),we=n(245),Se=n(88),Ce=n.n(Se),ke=n(87),Te=n.n(ke);n(191);function qe(){return Object(T.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(T.jsx)(ye.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Ne=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function We(){var e=Ne(),t=Object(C.g)(),n=Object(i.useState)(""),a=Object(g.a)(n,2),o=a[0],c=a[1],r=Object(i.useState)(""),s=Object(g.a)(r,2),l=s[0],d=s[1],j=Object(i.useState)(""),u=Object(g.a)(j,2),b=u[0],p=u[1],h=Object(i.useState)(""),x=Object(g.a)(h,2),O=x[0],f=x[1],v=function(e){e.preventDefault(),console.log("registering..."+o),Te.a.post("https://myexamportal-backend.herokuapp.com/user/register",{first_name:o,last_name:l,username:b,password:O}).then((function(e){return console.log(e),t.push("/"),Object(T.jsx)(C.a,{to:"/"})}),(function(e){console.log(e)}))};return Object(T.jsxs)(L.a,{component:"main",maxWidth:"xs",children:[Object(T.jsx)(K.a,{}),Object(T.jsxs)("div",{className:e.paper,children:[Object(T.jsx)(Oe.a,{className:e.avatar,children:Object(T.jsx)(Ce.a,{})}),Object(T.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(T.jsxs)("form",{className:e.form,onSubmit:function(e){v(e)},noValidate:!0,children:[Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"first_name",label:"First Name",name:"first_name",autoComplete:"first_name",autoFocus:!0,onChange:function(e){!function(e){console.log("setting first name to "+e.value),c(e.target.value)}(e)}}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"last_name",label:"Last Name",name:"last_name",autoComplete:"last_name",autoFocus:!0,onChange:function(e){!function(e){d(e.target.value)}(e)}}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){!function(e){p(e.target.value)}(e)}}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){!function(e){f(e.target.value)}(e)}}),Object(T.jsx)(fe.a,{control:Object(T.jsx)(ve.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(T.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){v(e)},children:"Register"})]})]}),Object(T.jsx)(we.a,{mt:8,children:Object(T.jsx)(qe,{})})]})}function ze(){return Object(T.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(T.jsx)(oe.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Ie=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function _e(){var e=Ie(),t=(Object(C.g)(),Object(i.useState)("")),n=Object(g.a)(t,2),a=(n[0],n[1]),o=Object(i.useState)(""),c=Object(g.a)(o,2),r=(c[0],c[1]);return Object(T.jsxs)(L.a,{component:"main",maxWidth:"xs",children:[Object(T.jsx)(K.a,{}),Object(T.jsxs)("div",{className:e.paper,children:[Object(T.jsx)(Oe.a,{className:e.avatar,children:Object(T.jsx)(Ce.a,{})}),Object(T.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(T.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){!function(e){a(e.target.value)}(e)}}),Object(T.jsx)(Y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){!function(e){r(e.target.value)}(e)}}),Object(T.jsx)(fe.a,{control:Object(T.jsx)(ve.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(T.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(T.jsxs)(p.a,{container:!0,children:[Object(T.jsx)(p.a,{item:!0,xs:!0,children:Object(T.jsx)(oe.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(T.jsx)(p.a,{item:!0,children:Object(T.jsx)(oe.b,{to:{pathname:"/signup"},variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(T.jsx)(we.a,{mt:8,children:Object(T.jsx)(ze,{})})]})}var Ae=n(247),Pe=n(251),Qe=n(235),Re=n(135),Be=n.n(Re),Fe=n(136),Ee=n.n(Fe),De=[{id:1,questionText:"What is your name?",option1:"Rahul",option2:"Shivesh",option3:"Ashish",option4:"Raju",answer:"Rahul"},{id:2,questionText:"What is your age?",option1:"300",option2:"12",option3:"23",option4:"-19",answer:"23"},{id:3,questionText:"Where do you live?",option1:"Usa",option2:"Hyd",option3:"Patna",option4:"England",answer:"Patna"}],Me=Object(f.a)({root:Object(O.a)({height:"100vh",justifyContent:"center",alignItems:"center",borderRadius:5,backgroundColor:"#E0C9A6"},"@media (max-width:600px)",{margin:5}),box:Object(O.a)({margin:"auto",width:"500px",borderRadius:"15px",boxShadow:"1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45)",padding:20,justifyContent:"center"},"@media (max-width:600px)",{margin:10}),window:{display:"flex",paddingTop:"20px"},SubmitButton:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}});function Le(){var e=Me(),t=Object(C.h)(),n=o.a.useState(0),a=Object(g.a)(n,2),c=a[0],r=a[1],s=o.a.useState([]),l=Object(g.a)(s,2),d=(l[0],l[1],o.a.useState(1)),j=Object(g.a)(d,2),u=(j[0],j[1],o.a.useState(!1)),b=Object(g.a)(u,2),h=(b[0],b[1],o.a.useState([])),x=Object(g.a)(h,2),f=x[0],y=x[1],w=o.a.useState(!1),q=Object(g.a)(w,2),N=q[0],W=q[1],z=o.a.useState(!1),I=Object(g.a)(z,2),_=I[0],A=I[1],P=o.a.useState({questions:[],isLoaded:!1}),Q=Object(g.a)(P,2),R=(Q[0],Q[1]),B=o.a.useState(),F=Object(g.a)(B,2),E=F[0],D=F[1],V=o.a.useState(!1),H=Object(g.a)(V,2),J=H[0],Y=H[1];Object(i.useEffect)((function(){console.log(t);return fetch("".concat(k,"/api/questionsOfQuiz/").concat(t.state.quizId)).then((function(e){return e.json()})).then((function(e){0===e.length?W(!0):(R({questions:e||[],isLoaded:!0}),y(e||[]))}),(function(e){console.log("error loading quiz"),y(De),W(!0)})),function(){return!1}}),[]);return!0===N?Object(T.jsxs)(p.a,{className:e.root,container:!0,item:!0,xs:12,alignItems:"center",justifyContent:"center",children:[Object(T.jsx)(p.a,{container:!0,item:!0,xs:12,alignItems:"center",justifyContent:"center",children:"There was some problem loading questions of this quiz."}),Object(T.jsx)(p.a,{children:Object(T.jsx)(oe.b,{to:"/",children:" Go Home"})})]}):!0===_?(console.log("submitted is true"),console.log(E),J?Object(T.jsx)(p.a,{className:e.root,container:!0,item:!0,xs:12,children:"Uh oh. There was a problem fetching your result."}):"undefined"===typeof E?Object(T.jsx)(L.a,{children:"Calculating your result..."}):Object(T.jsx)(p.a,{className:e.root,container:!0,item:!0,xs:12,children:Object(T.jsxs)(v.a,{className:e.box,children:[Object(T.jsx)(m.a,{variant:"h5",component:"div",children:"Result"}),Object(T.jsxs)("li",{style:{display:"flex"},children:["You have scored ",Object(T.jsxs)("b",{children:["\xa0",E.marksScored,"\xa0 "]})," marks out of ",Object(T.jsxs)("b",{children:[" \xa0",E.totalMarks,"\xa0 "]})," marks."]}),Object(T.jsxs)("li",{children:["Total Questions: ",E.noOfQues]}),Object(T.jsxs)("li",{children:["Correct Answers: ",E.correctAnswers]}),Object(T.jsxs)("li",{children:["Total Marks: ",E.totalMarks]}),Object(T.jsxs)("li",{children:["Marks Scored: ",E.marksScored]}),Object(T.jsx)("br",{})]})})):Object(T.jsx)(T.Fragment,{children:0===f.length?Object(T.jsx)(L.a,Object(O.a)({className:e.root},"className","loader")):Object(T.jsx)(p.a,{className:e.root,container:!0,item:12,children:Object(T.jsxs)(p.a,{container:!0,display:"block",children:[Object(T.jsxs)(p.a,{container:!0,item:12,justifyContent:"center",children:[Object(T.jsx)(p.a,{container:!0,item:!0,md:3,justifyContent:"center",alignItems:"center",children:c>0?Object(T.jsx)(Be.a,{onClick:function(e){return function(e,t,n){console.log(t+" "+f.length);var a=t;t<f.length&&r(a-1)}(0,c,f[c].id)},fontSize:"large",style:{float:"right"}}):""}),Object(T.jsx)(p.a,{item:!0,md:6,children:Object(T.jsx)(v.a,{className:e.box,children:Object(T.jsxs)(U.a,{children:[Object(T.jsxs)(Qe.a,{component:"legend",children:[c+1,". ",f[c].questionText]}),Object(T.jsxs)(Pe.a,{"aria-label":"gender",name:"radio-buttons-group",onChange:function(e){return function(e,t){console.log(f),console.log(f[t]),console.log(f[t].questionText);var n=f;n[t]=Object(M.a)(Object(M.a)({},n[t]),{},{answer:e.target.value}),console.log(n[t]),y(n),console.log(f),console.log(f[t]),console.log(e.target.value,t)}(e,c)},children:[Object(T.jsx)(fe.a,{value:f[c].option1,control:Object(T.jsx)(Ae.a,{}),label:f[c].option1}),Object(T.jsx)(fe.a,{value:f[c].option2,control:Object(T.jsx)(Ae.a,{}),label:f[c].option2}),null===f[c].option3||""===f[c].option3?"":Object(T.jsx)(fe.a,{value:f[c].option3,control:Object(T.jsx)(Ae.a,{}),label:f[c].option3}),null===f[c].option4||""===f[c].option4?"":Object(T.jsx)(fe.a,{value:f[c].option4,control:Object(T.jsx)(Ae.a,{}),label:f[c].option4})]}),Object(T.jsx)("br",{})]})})}),Object(T.jsx)(p.a,{container:!0,item:!0,md:3,justifyContent:"center",alignItems:"center",children:c<f.length-1?Object(T.jsx)(Ee.a,{onClick:function(e){return function(e,t,n){console.log(t+" "+f.length);var a=t;t<f.length&&r(a+1)}(0,c,f[c].id)},fontSize:"large",style:{float:"left"}}):""})]}),Object(T.jsx)(p.a,{container:!0,item:!0,xs:12,justify:"center",children:Object(T.jsx)(S.a,{variant:"contained",color:"primary",className:e.SubmitButton,onClick:function(e){return function(e,t,n){console.log(t+" "+f.length);var a=[];for(var i in console.log(f),f){var o=f[i];console.log(o);var c={quizId:o.quiz.id,questionId:o.id,answer:o.answer||null};a=[].concat(Object(X.a)(a),[c])}console.log(a),JSON.stringify({answers:a}),fetch("".concat(k,"/api/getResult"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){D(e),A(!0)}),(function(e){Y(!0)}))}(0,c,f[c].id)},children:"Submit"})})]})})})}var Ve=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={id:"0",admin:!1},e.handleOptionSelect=function(t){console.log("found Value "+t),e.setState({id:t})},e.changeProfile=function(t){e.setState({admin:!e.state.admin})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(T.jsxs)(oe.a,{children:[Object(T.jsx)(p.a,{m:2,children:Object(T.jsx)(u.a,{position:"static",style:{backgroundColor:"#5C4033"},children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(m.a,{variant:"title",color:"inherit",children:"Exam Portal"}),Object(T.jsxs)(h.a,{style:{display:"flex",float:"right",color:"white",height:"50px"},children:[this.state.admin?Object(T.jsx)(x.a,{children:Object(T.jsx)(oe.b,{to:"/admin",children:"Home"})}):Object(T.jsx)(x.a,{children:Object(T.jsx)(oe.b,{to:"/",children:"Home"})}),Object(T.jsx)(x.a,{children:Object(T.jsx)(oe.b,{to:"/login",children:"Login"})}),Object(T.jsx)(x.a,{children:Object(T.jsx)(oe.b,{to:"/signup",children:"Signup"})}),!0===this.state.admin?Object(T.jsx)(x.a,{children:Object(T.jsx)(oe.b,{to:"/",onClick:this.changeProfile,children:"User Login"})}):Object(T.jsx)(x.a,{children:Object(T.jsx)(oe.b,{to:"/admin",onClick:this.changeProfile,children:"Admin Login"})})]})]})})}),Object(T.jsxs)(C.d,{children:[Object(T.jsx)(C.b,{path:"/signup",children:Object(T.jsx)(We,{})}),Object(T.jsx)(C.b,{path:"/login",children:Object(T.jsx)(_e,{})}),Object(T.jsx)(C.b,{path:"/admin",children:Object(T.jsx)(ge,{})}),Object(T.jsx)(C.b,{path:"/quiz",children:Object(T.jsx)(Le,{})}),Object(T.jsx)(C.b,{path:"/",children:Object(T.jsx)(D,{})})]})]})}}]),n}(o.a.Component),He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};r.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(Ve,{})}),document.getElementById("root")),He()}},[[192,1,2]]]);
//# sourceMappingURL=main.95e266f2.chunk.js.map