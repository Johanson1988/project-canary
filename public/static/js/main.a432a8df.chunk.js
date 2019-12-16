(this["webpackJsonpreact-auth-client-done-v2"]=this["webpackJsonpreact-auth-client-done-v2"]||[]).push([[0],{137:function(e,t,a){e.exports=a(332)},142:function(e,t,a){},163:function(e,t,a){e.exports=a.p+"static/media/plus-square.464c6dc0.svg"},164:function(e,t,a){e.exports=a.p+"static/media/exit.827d2506.svg"},165:function(e,t,a){e.exports=a.p+"static/media/edit.664c1be5.svg"},166:function(e,t,a){e.exports=a.p+"static/media/trash-2.be84ac99.svg"},329:function(e,t){},332:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),o=a(133),s=a.n(o),c=a(1),i=a(2),u=a(4),m=a(3),h=a(5),d=a(13),p=(a(142),a(10)),g=a(8),b=a(134),v=a.n(b),f=new(function(){function e(){Object(c.a)(this,e),this.auth=v.a.create({baseURL:"https://iron-canary.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){console.log(e);var t=e.username,a=e.email,n=e.password,r=e.photoUrl;return this.auth.post("/auth/signup",{username:t,email:a,password:n,photoUrl:r}).then((function(e){return e.data}))}},{key:"update",value:function(e){console.log(e);var t=e.username,a=e.email,n=e.oldpassword,r=e.password,l=e.photoUrl;return this.auth.put("/user/update",{username:t,email:a,oldpassword:n,password:r,photoUrl:l}).then((function(e){return e.data}))}},{key:"imageUpload",value:function(e){return this.auth.post("/auth/signup/image",e).then((function(e){return e.data}))}},{key:"changeImage",value:function(e){return this.auth.post("/user/update/image",e).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/login",{email:t,password:a}).then((function(e){return e.data}))}},{key:"delete",value:function(){return this.auth.delete("/user/delete",{}).then((function(e){return e.data})).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"addplayer",value:function(e){e.username,e.bootcamp,e.gameId;return this.auth.post("player/addplayer",{player:e}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"creategame",value:function(e){var t=e.numberofquestions,a=e.webdevcheck,n=e.datanylcheck,r=e.uxcheck,l=e.name;return this.auth.post("/game",{numberofquestions:t,webdevcheck:a,datanylcheck:n,uxcheck:r,name:l,gameStatus:"waitingForPlayers"}).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}},{key:"addQuestion",value:function(e){return this.auth.post("/profile/addquestion",e)}}]),e}()),E=l.a.createContext(),y=E.Consumer,w=E.Provider,k=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return l.a.createElement(y,null,(function(a){var n=a.login,r=a.signup,o=a.user,s=a.logout,c=a.update,i=a.me,u=a.isLoggedin,m=a.deletee,h=a.addQuestion,d=a.game,p=a.creategame,g=a.addplayer,b=a.player;return l.a.createElement(e,Object.assign({player:b,addplayer:g,creategame:p,deleteuser:m,login:n,signup:r,user:o,me:i,update:c,logout:s,isLoggedin:u,addQuestion:h,game:d},t.props))}))}}]),a}(l.a.Component)},O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0,game:null},a.signup=function(e){console.log(e);var t=e.username,n=e.password,r=e.photoUrl,l=e.email;f.signup({username:t,password:n,photoUrl:r,email:l}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.update=function(e){console.log("in authprovider update",e);var t=e.username,n=e.email,r=e.oldpassword,l=e.password,o=e.photoUrl;f.update({username:t,email:n,oldpassword:r,password:l,photoUrl:o}).then((function(e){return a.setState({user:e})})).catch((function(e){return console.log(e)}))},a.addQuestion=function(e){f.addQuestion(e).then()},a.login=function(e){var t=e.email,n=e.password;f.login({email:t,password:n}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){f.logout().then((function(){return a.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},a.deletee=function(){f.delete().then((function(){return a.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},a.me=function(){f.me().then((function(e){return a.setState({user:e})})).catch((function(e){return console.log(e)}))},a.addplayer=function(e){var t=e.username,n=e.bootcamp,r=e.gameId;f.addplayer({username:t,bootcamp:n,gameId:r}).then((function(e){console.log(e),a.setState({player:e})}))},a.creategame=function(e){var t=e.numberofquestions,n=e.webdevcheck,r=e.datanylcheck,l=e.uxcheck,o=e.name;f.creategame({numberofquestions:t,webdevcheck:n,datanylcheck:r,uxcheck:l,name:o}).then((function(e){console.log("this is the data in authprovider",e.data),a.setState({game:e.data})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,r=e.game,o=e.player,s=this.login,c=this.logout,i=this.signup,u=this.imageUpload,m=this.update,h=this.me,d=this.deletee,p=this.addQuestion,g=this.creategame,b=this.addplayer;return l.a.createElement(w,{value:{isLoading:t,isLoggedin:a,user:n,me:h,login:s,logout:c,signup:i,update:m,imageUpload:u,deletee:d,addQuestion:p,game:r,creategame:g,addplayer:b,player:o}},this.props.children)}}]),t}(l.a.Component),C=Object(d.g)(O),j=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",email:"",photoUrl:"",confirmpassword:"",errormessage:""},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state);var t=a.state,n=t.username,r=t.password,l=t.photoUrl,o=t.email,s=t.confirmpassword;s?r===s?l?(a.props.signup({username:n,password:r,photoUrl:l,email:o}),a.props.history.push("/home")):a.setState({errormessage:"Slow down! Wait for the photo to load"}):a.setState({errormessage:"Enter the same password for both fields"}):a.setState({errormessage:"Enter text in all fields if you want to signup"})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.fileOnchange=function(e){console.log(a.props);var t=e.target.files[0],n=new FormData;n.append("photo",t),f.imageUpload(n).then((function(e){console.log(e),a.setState({photoUrl:e})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.email,r=e.confirmpassword;return l.a.createElement("div",null,l.a.createElement("h1",{className:"canaryheader"},"Project Canary"),l.a.createElement("div",{className:"signupform"},l.a.createElement("div",null,l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),l.a.createElement("label",null,"Confirm Password:"),l.a.createElement("input",{type:"password",name:"confirmpassword",value:r,onChange:this.handleChange}),l.a.createElement("label",null,"Profile Picture:"),l.a.createElement("input",{type:"file",name:"picture",placeholder:"Picture Url",onChange:this.fileOnchange}),l.a.createElement("button",{className:"buttonn",id:"signupbutton"},"Sign Up"))),l.a.createElement("div",{className:"rightsidesignup"},l.a.createElement("label",null,"Preview:"),l.a.createElement("div",{style:{border:"2px solid black",height:"200px",width:"200px",backgroundImage:"url(".concat(this.state.photoUrl,")"),backgroundPosition:"center top",backgroundSize:"cover",marginBottom:"10px"}}),l.a.createElement("p",null,"Already have account?"),l.a.createElement(g.b,{to:"/"}," ",l.a.createElement("button",{className:"buttonn"},"Login")))),this.state.errormessage?l.a.createElement("h1",null,this.state.errormessage):null)}}]),t}(r.Component)),N=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errormessage:"",email:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.password,r=t.email;r&&n?(a.props.login({password:n,email:r}),a.props.history.push("/home")):a.setState({errormessage:"Enter text in all fields"})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.password,a=e.email;return l.a.createElement("div",{className:"logincontainer"},l.a.createElement("h1",{className:"canaryheader"},"Project Canary"),l.a.createElement("div",{className:"loginpage"},l.a.createElement("div",{className:"loginorsignup"},l.a.createElement("h1",null,"Login"),l.a.createElement("p",null,"or..."),l.a.createElement(g.b,{to:"/signup"}," ",l.a.createElement("button",{className:"buttonn"},"Signup")," ")),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:a,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:t,onChange:this.handleChange}),l.a.createElement("button",{id:"loginbutton"},"Submit"))),this.state.errormessage?l.a.createElement("p",null,this.state.errormessage):null)}}]),t}(r.Component)),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",oldpassword:"",photoUrl:"",password:"",confirmpassword:"",errormessage:"",toggleedit:a.props.toggledit,history:a.props.history},a.handleFormSubmit=function(e){e.preventDefault();for(var t=a.state,n=t.username,r=t.email,l=t.oldpassword,o=t.photoUrl,s=t.password,c=t.confirmpassword,i={username:n,email:r,oldpassword:l,photoUrl:o,password:s,confirmpassword:c,errormessage:t.errormessage},u=Object.keys(i),m=Object.values(i),h={},d=0;d<u.length;d++)""!==m[d]&&(h[u[d]]=m[d]);s===c?a.props.update(h):a.setState({errormessage:"Enter the same password for both fields"}),a.props.history.push("/home")},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.fileOnchange=function(e){var t=e.target.files[0],n=new FormData;n.append("photo",t),f.changeImage(n).then((function(e){a.setState({photoUrl:e})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("in component did mount"),console.log(this.props)}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,r=e.oldpassword,o=e.password,s=e.confirmpassword;return l.a.createElement("div",{className:"editcontainer"},l.a.createElement("div",{className:"editformwithlabel"},l.a.createElement("h1",null,"Edit Profile"),l.a.createElement("form",null,l.a.createElement("div",{className:"inputrows"},l.a.createElement("div",{className:"inputcolumn"},l.a.createElement("label",null,"New Username:"),l.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"New Email:"),l.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.handleChange}),l.a.createElement("label",null,"New Profile Picture:"),l.a.createElement("input",{type:"file",name:"picture",placeholder:"Picture Url",onChange:this.fileOnchange})),l.a.createElement("div",{className:"inputcolumn"},l.a.createElement("label",null,"Old Password:"),l.a.createElement("input",{type:"password",name:"oldpassword",value:r,onChange:this.handleChange}),l.a.createElement("label",null,"New Password:"),l.a.createElement("input",{type:"password",name:"password",value:o,onChange:this.handleChange}),l.a.createElement("label",null,"Confirm New Password:"),l.a.createElement("input",{type:"password",name:"confirmpassword",value:s,onChange:this.handleChange}))),l.a.createElement("button",{className:"buttonn",onClick:this.handleFormSubmit},"Submit"))),l.a.createElement("div",{className:"previewandicon"},l.a.createElement("div",{className:"labelwithpreview"},l.a.createElement("label",null,"Preview:"),l.a.createElement("div",{style:{border:"2px solid black",height:"200px",width:"200px",backgroundImage:"url(".concat(this.state.photoUrl,")"),backgroundPosition:"center top",backgroundSize:"cover",marginBottom:"10px"}})),l.a.createElement("a",{onClick:this.props.edittoggle,href:""},l.a.createElement("img",{src:a(46),alt:""}))))}}]),t}(r.Component),x=Object(d.g)(k(S)),U=k(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"deletecontainer"},l.a.createElement("h1",null,"Are you sure you want to delete your profile?"),l.a.createElement("div",{className:"deletebuttons"},l.a.createElement("button",{className:"buttonn",onClick:this.props.deleteuser},"Delete it!"),l.a.createElement("button",{className:"buttonn",onClick:this.props.deletetoggle},"No, go back")))}}]),t}(r.Component)),A=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={Rank:"Noob",edittoggle:!1,deletetoggle:!1},a.toggleedit=function(e){e.preventDefault();var t=!a.state.edittoggle;a.setState({edittoggle:t}),a.props.me()},a.toggledelete=function(e){e.preventDefault();var t=!a.state.deletetoggle;a.setState({deletetoggle:t})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.user.gamesWon>=5?this.setState({Rank:"Experienced"}):this.props.user.gamesWon>=10&&this.setState({Rank:"Ironhacker"})}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.edittoggle?l.a.createElement(x,{edittoggle:this.toggleedit}):null,this.state.deletetoggle?l.a.createElement(U,{deletetoggle:this.toggledelete}):null,l.a.createElement("div",{className:"topdivandlogout"},l.a.createElement("div",null,l.a.createElement(g.b,{to:"/creategame",className:"creategamediv"}," ",l.a.createElement("img",{src:a(163),alt:"",className:"plusicon"}),l.a.createElement("h1",null,"Create a Game"))),l.a.createElement("a",{onClick:this.props.logout},l.a.createElement("img",{src:a(164),alt:"",className:"exiticon"}))),l.a.createElement("div",{className:"bottomdiv"},l.a.createElement("div",{className:"profilediv"},l.a.createElement("div",{style:{borderRight:"2px solid black",height:"24.9vh",borderTop:"1px solid black",borderBottom:"1px solid black",width:"250px",backgroundImage:"url(".concat(this.props.user.photoUrl,")"),backgroundPosition:"center top",backgroundSize:"cover"}}),l.a.createElement("div",{className:"profiledivtext"},l.a.createElement("div",{className:"profiledivtextheader"},this.props.user.username,l.a.createElement("article",null,"Rank: ",this.state.Rank)),l.a.createElement("p",null,"Games Played: ",this.props.user.gamesPlayed?this.props.user.gamesPlayed.length:null),l.a.createElement("p",null,"Games Won: ",this.props.user.gamesWon?this.props.user.gamesWon.length:null)),l.a.createElement("div",{className:"icondivbottom"},l.a.createElement("a",{onClick:this.toggleedit,style:{border:"none"},href:""},l.a.createElement("img",{src:a(165),alt:"",className:"editicon"})),l.a.createElement("a",{onClick:this.toggledelete,style:{border:"none"},href:""},l.a.createElement("img",{src:a(166),alt:"",className:"trashicon"})))),l.a.createElement(g.b,{to:"/addquestion"}," ",l.a.createElement("div",{className:"addquestiondiv"},l.a.createElement("h1",null,"Add a Question")))))}}]),t}(r.Component)),q=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={question:"",questionType:"",rightAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:"",photoUrl:"",difficulty:"",errorMessage:""},a.fileOnchange=function(e){var t=e.target.files[0],n=new FormData;n.append("photo",t),f.imageUpload(n).then((function(e){a.setState({photoUrl:e})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state;t.question,t.questionType,t.rightAnswer,t.wrongAnswer1,t.wrongAnswer2,t.wrongAnswer3;if(t.photoUrl){var n=a.state;a.props.addQuestion(n),a.props.history.push("/home")}else a.setState({errorMessage:"All fields are mandatory"})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.question,n=e.questionType,r=e.rightAnswer,o=e.wrongAnswer1,s=e.wrongAnswer2,c=e.wrongAnswer3,i=e.photoUrl,u=e.difficulty;return l.a.createElement("div",null,l.a.createElement("section",{className:"addquestioncontainer"},l.a.createElement("div",{className:"addquestionheader"},l.a.createElement("h1",null,"Add Question"),l.a.createElement(g.b,{to:"/home"},l.a.createElement("img",{src:a(46),alt:""}))),l.a.createElement("div",{className:"addquestionoutterform"},l.a.createElement("div",{className:"addquestionform"},l.a.createElement("div",{className:"questioncolumn"},l.a.createElement("label",null,"Question"),l.a.createElement("input",{type:"text",name:"question",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Question Type"),l.a.createElement("select",{name:"questionType",value:n,onChange:this.handleChange},l.a.createElement("option",{value:""},"--Please choose an option--"),l.a.createElement("option",{value:"webdev"},"Webdev"),l.a.createElement("option",{value:"uxdesign"},"UX Design"),l.a.createElement("option",{value:"data"},"Data Analytics")),l.a.createElement("label",null,"Difficulty"),l.a.createElement("select",{name:"difficulty",value:u,onChange:this.handleChange},l.a.createElement("option",{value:""},"--Please choose an option--"),l.a.createElement("option",{value:"easy"},"Easy"),l.a.createElement("option",{value:"hard"},"Hard")),l.a.createElement("label",null,"Question Image"),l.a.createElement("input",{type:"file",name:"picture",placeholder:"Picture Url",onChange:this.fileOnchange})),l.a.createElement("div",{className:"questioncolumn"},l.a.createElement("label",null,"Right Answer"),l.a.createElement("input",{type:"text",name:"rightAnswer",value:r,onChange:this.handleChange}),l.a.createElement("label",null,"Wrong Answer 1"),l.a.createElement("input",{type:"text",name:"wrongAnswer1",value:o,onChange:this.handleChange}),l.a.createElement("label",null,"Wrong Answer 2"),l.a.createElement("input",{type:"text",name:"wrongAnswer2",value:s,onChange:this.handleChange}),l.a.createElement("label",null,"Wrong Answer 3"),l.a.createElement("input",{type:"text",name:"wrongAnswer3",value:c,onChange:this.handleChange}))),l.a.createElement("div",{className:"previewquestionimage"},l.a.createElement("label",null,"Preview:"),l.a.createElement("div",{style:{border:"2px solid black",height:"200px",width:"200px",backgroundImage:"url(".concat(i,")"),backgroundPosition:"center top",backgroundSize:"cover",marginBottom:"10px"}}))),l.a.createElement("button",{onClick:this.handleSubmit,className:"buttonn",id:"questionbutton"},"Submit")),this.state.errorMessage?l.a.createElement("p",null,this.state.errorMessage):null)}}]),t}(r.Component)),P=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={numberofquestions:6,webdevcheck:!1,datanylcheck:!1,uxcheck:!1,name:"",errormessage:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.handleFormSubmit=function(e){console.log(a.state),e.preventDefault();var t=a.state,n=t.numberofquestions,r=t.webdevcheck,l=t.datanylcheck,o=t.uxcheck,s=t.name;!0===r||!0===l||!0===o?s?(a.props.creategame({numberofquestions:n,webdevcheck:r,datanylcheck:l,uxcheck:o,name:s}),a.setState({errormessage:"Game Created! Press Start"})):a.setState({errormessage:"Enter a name"}):a.setState({errormessage:"Select at least one question type"})},a.startGame=function(e){e.preventDefault(),a.props.game?(a.props.history.push("/game/desktop/id=".concat(a.props.game._id)),console.log("this is the game",a.props.game)):a.setState({errormessage:"Game has not been created"})},a.multiselect=function(e){var t=e.target.value;a.setState({numberofquestions:t})},a.checkBox=function(e){var t=a.state[e.target.name];a.setState(Object(p.a)({},e.target.name,!t))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.numberofquestions,n=e.webdevcheck,r=e.datanylcheck,o=e.uxcheck,s=e.name;return l.a.createElement("div",{className:"addgamecontainer"},l.a.createElement("div",{className:"creategameheader"},l.a.createElement("h1",null,"Create Game"),l.a.createElement(g.b,{to:"/home"},l.a.createElement("img",{src:a(46),alt:""}))),l.a.createElement("form",null,l.a.createElement("label",null,"Game Title:"),l.a.createElement("input",{type:"text",name:"name",value:s,onChange:this.handleChange}),l.a.createElement("div",{className:"noquestions"},l.a.createElement("label",null,"Number of Questions:"),l.a.createElement("select",{name:"questionType",value:t,onChange:this.multiselect,className:"multiselect"},l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"12"},"12"),l.a.createElement("option",{value:"18"},"18"))),l.a.createElement("div",{className:"checkboxdiv"},l.a.createElement("label",null,"Types of questions included:"),l.a.createElement("label",null,"WebDev"),l.a.createElement("input",{type:"checkbox",name:"webdevcheck",onChange:this.checkBox,checked:n}),l.a.createElement("label",null,"Data Analysis"),l.a.createElement("input",{type:"checkbox",name:"datanylcheck",onChange:this.checkBox,checked:r}),l.a.createElement("label",null,"UI/UX"),l.a.createElement("input",{type:"checkbox",name:"uxcheck",checked:o,onChange:this.checkBox})),l.a.createElement("div",{className:"createandstartbuttons"},l.a.createElement("button",{className:"buttonn",onClick:this.handleFormSubmit},"Create Game"),l.a.createElement("button",{className:"buttonn",onClick:this.startGame},"Start Game"))),this.state.errormessage?l.a.createElement("p",null,this.state.errormessage):null)}}]),t}(r.Component)),D=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:a.props.game.players},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"waitingscreencontainer"},l.a.createElement("div",null,l.a.createElement("h1",null,"Waiting to start..."),l.a.createElement("button",null,"Start")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Players"),l.a.createElement("div",{className:"playernames"},this.state.players.map((function(e){return l.a.createElement("p",null,e.name)})))),l.a.createElement("div",{className:"qrcodediv"},l.a.createElement("h1",null,"Scan QR Code to join"),l.a.createElement("img",{src:this.props.game.qrCode}))))}}]),t}(r.Component)),L=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={waitingtoggle:!0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.state.waitingtoggle?l.a.createElement(D,null):null)}}]),t}(r.Component)),Q=(a(167),a(71)),I=a.n(Q),F="http://192.168.1.63:9000",W=function(e,t){var a=null;(n=I()(F,{autoConnect:!1})).on("connect",(function(){console.log(F),console.log("Connected"),n.emit("authentication",{_id:e,gameId:t})})),console.log(n),n.on("game-started",(function(){return console.log("game started")})),n.on("new-question",(function(){console.log("new Question"),n.emit("answer",{answer:"Respuesta"})})),n.on("unauthorized",(function(e){console.log("Unauthorized:",e),a=e.message,n.disconnect()})),n.on("disconnect",(function(e){console.log("Disconnected: ".concat(a||e)),a=null})),n.open()},G=function(){n.disconnect()},R=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",bootcamp:"other",errormessage:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.bootcamp;if(n){var l=a.props.history.location.pathname,o=l.substring(l.indexOf("=")+1,l.length);a.props.addplayer({username:n,bootcamp:r,gameId:o}),setTimeout((function(){a.props.history.push("/game/id=".concat(o)),W(a.props.player._id,o)}),3e3)}else a.setState({errormessage:"Enter a name"})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.bootcamp;return l.a.createElement("div",{className:"enternamediv"},l.a.createElement("div",{className:"playerformfields"},l.a.createElement("h1",null,"Join active game"),l.a.createElement("div",{className:"nameinput"},l.a.createElement("label",null,"Enter Name:"),l.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange})),l.a.createElement("div",{className:"selectbootcamp"},l.a.createElement("label",null,"Select Bootcamp:"),l.a.createElement("select",{name:"bootcamp",value:a,onChange:this.handleChange,className:"multiselect"},l.a.createElement("option",{value:"other"},"other"),l.a.createElement("option",{value:"webdev"},"Webdev"),l.a.createElement("option",{value:"ux"},"UI/UX"),l.a.createElement("option",{value:"data"},"Data Analysis")))),l.a.createElement("div",{className:"enterbutton"},this.state.errormessage?l.a.createElement("p",null,this.state.errormessage):null,l.a.createElement("button",{onClick:this.handleFormSubmit},"Enter Game")))}}]),t}(r.Component)),B=a(44);var T=k((function(e){var t=e.component,a=e.isLoggedin,n=Object(B.a)(e,["component","isLoggedin"]);return l.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(d.a,{to:"/home"}):l.a.createElement(t,e)}}))}));var M=k((function(e){var t=e.component,a=e.isLoggedin,n=Object(B.a)(e,["component","isLoggedin"]);return l.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,e):l.a.createElement(d.a,{to:"/"})}}))})),z=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:["Griffith","Johann","Pablo","Uros","Stephan","Sam","Jakub","Rem"]},a.quitgame=function(){G(),a.setState({players:"You have been disconnected"})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"waitingmobilediv"},l.a.createElement("h1",null,"Waiting to start..."),l.a.createElement("div",{className:"playerslist"},l.a.createElement("h2",null,"Current Players:"),l.a.createElement("ul",{className:"playersmobile"},this.state.players?this.state.players.map((function(e){return l.a.createElement("li",null,e)})):null)),l.a.createElement("button",{className:"buttonn",onClick:this.quitgame},"Quit"))}}]),t}(r.Component)),J=k(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={waitingtoggle:!0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.waitingtoggle?l.a.createElement(z,null):null)}}]),t}(r.Component)),X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.d,null,l.a.createElement(T,{exact:!0,path:"/signup",component:j}),l.a.createElement(T,{exact:!0,path:"/",component:N}),l.a.createElement(T,{exact:!0,path:"/entername/:id",component:R}),l.a.createElement(T,{exact:!0,path:"/game/:id",component:J}),l.a.createElement(M,{path:"/home",component:A}),l.a.createElement(M,{exact:!0,path:"/addquestion",component:q}),l.a.createElement(M,{exact:!0,path:"/creategame",component:P}),l.a.createElement(M,{path:"/game/desktop/:id",component:L})))}}]),t}(r.Component);s.a.render(l.a.createElement(g.a,null,l.a.createElement(C,null,l.a.createElement(X,null))),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/corner-up-left.2db0e8cf.svg"}},[[137,1,2]]]);
//# sourceMappingURL=main.a432a8df.chunk.js.map