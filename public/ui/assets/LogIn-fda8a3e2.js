import{s as y,a as g}from"./authController-bddc9050.js";import{s as _}from"./signin-f5c2ab3a.js";import{s as S,g as C,a as R,b as F}from"./getCurrentUser-7f2d7e76.js";import{_ as k,R as N,L as B,C as D,r as n,o as m,c as p,w as t,f as h,a,V as M,b as l,t as U,l as c,e as I,x as v,y as T,j as E,k as f,B as w,i as O,q}from"./index-ab7e0d88.js";import{V as L}from"./VCheckbox-15b1e4e9.js";import{V as $}from"./VContainer-f66e3747.js";async function K(e){return await S(C(),{url:"https:alakhbar.onrender.com"+e,handleCodeInApp:!0}).then(()=>({state:!0,result:null})).catch(s=>({state:!1,result:s}))}async function z(e,s){return await R(F,e,{url:"https:alakhbar.onrender.com"+s,handleCodeInApp:!0}).then(r=>({state:!0,result:r})).catch(r=>({state:!1,result:r}))}const G={name:"LogIn",components:{ResMsg:N,LogoComp:B,VueTelInput:D},data:()=>({pageTitle:"Log In",passwordVisible:!1,loading:!1,forgetloading:!1,error:!1,msg:null,usePhone:!1,email:null,phone:null,password:null,rules:{required:e=>!!e||"Required.",password:e=>e.length>=6&&e.length<=20||"Max 20 characters , Min 6",phone:e=>(e==null?void 0:e.length)<=10?!0:"Name must be less than 10 characters.",email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Invalid e-mail."}}),async mounted(){const e=this.$route.query;this.email=e.email,this.phone=e.phone,this.phone&&(this.usePhone=!0)},methods:{logIn:async function(){if((await this.$refs.logInForm.validate()).valid){this.loading=!0,this.error=!1,this.msg=null;const s=await y({phoneEmail:this.usePhone?this.phone:this.email,password:this.password});if(this.loading=!1,this.error=!s.state,this.error&&(this.msg=s.message),s.state&&s.isVerified&&(this.msg=s.message,this.$store.dispatch("logIn",s),this.$router.push({name:"Home"})),s.state&&!s.isVerified)if(this.usePhone)this.$router.push({name:"Verification",query:{mode:"phoneVerify",phone:this.phone,continueUrl:"/login"}});else{this.loading=!0;const{state:r,result:i}=await _(this.email,this.password);if(r){const d=await K("/login");d.state?this.msg=s.message:(this.error=!0,this.msg=d.result.message)}else this.error=!0,this.msg=i.message;this.loading=!1}}else this.msg="Must Fill All Fields Correctly",this.error=!0},foregetPassword:async function(){if(this.usePhone)if(this.phone){this.forgetloading=!0,this.error=!1,this.msg=null;const e=await g(this.phone);this.forgetloading=!1,this.error=!e.state,this.msg=e.message,e.state&&this.$router.push({name:"Verification",query:{mode:"phoneVerify",phone:this.phone,continueUrl:"/resetpassword"}})}else this.error=!0,this.msg="Must provide phone number";else if(await this.$refs.em.validate()){this.forgetloading=!0,this.error=!1,this.msg=null;const s=await g(this.email);if(this.error=!s.state,this.msg=s.message,s.state){const{state:r,result:i}=await z(this.email,"/resetpassword");r?this.msg="We Sent You Email To Reset Password":(this.error=!0,this.msg=i.message)}this.forgetloading=!1}else this.error=!0,this.msg="Must provide email"}}};function Y(e,s,r,i,d,u){const b=n("router-link"),A=n("logo-comp"),V=n("vue-tel-input"),P=n("res-msg");return m(),p(h,{class:"mx-auto py-4 px-8",elevation:"8","max-width":"448",rounded:"lg",align:"center"},{default:t(()=>[a(I,null,{default:t(()=>[a(M,null,{default:t(()=>[l(U(e.pageTitle),1)]),_:1}),a(c),a(b,{to:{name:"Home"}},{default:t(()=>[l("Home")]),_:1})]),_:1}),a(A,{size:"150"}),a($,null,{default:t(()=>[a(v,{ref:"logInForm",onSubmit:T(u.logIn,["prevent"])},{default:t(()=>[a(L,{class:"my-0",modelValue:e.usePhone,"onUpdate:modelValue":s[0]||(s[0]=o=>e.usePhone=o),color:"secondary",label:"Use Phone Number"},null,8,["modelValue"]),e.usePhone?(m(),p(h,{key:0,flat:""},{default:t(()=>[a(V,{modelValue:e.phone,"onUpdate:modelValue":s[1]||(s[1]=o=>e.phone=o),mode:"international",defaultCountry:"Ye",autoFormat:""},null,8,["modelValue"])]),_:1})):(m(),p(h,{key:1,flat:""},{default:t(()=>[a(E,{modelValue:e.email,"onUpdate:modelValue":s[2]||(s[2]=o=>e.email=o),ref:"em",rules:[e.rules.required,e.rules.email],color:"primary",label:"Email",placeholder:"Enter Your Email",variant:"underlined"},null,8,["modelValue","rules"])]),_:1})),a(E,{modelValue:e.password,"onUpdate:modelValue":s[3]||(s[3]=o=>e.password=o),rules:[e.rules.required,e.rules.password],"append-inner-icon":e.passwordVisible?"mdi-eye-off":"mdi-eye",type:e.passwordVisible?"text":"password","onClick:appendInner":s[4]||(s[4]=o=>e.passwordVisible=!e.passwordVisible),class:"mt-4",color:"primary",label:"Password",placeholder:"Enter your password",variant:"underlined"},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1},8,["onSubmit"]),a(I,null,{default:t(()=>[a(c),a(f,{flat:"",onClick:u.foregetPassword,loading:e.forgetloading,class:"text-caption text-decoration-none text-blue justify-end",rel:"noopener noreferrer"},{default:t(()=>[l("forgot login password?")]),_:1},8,["onClick","loading"])]),_:1}),a(w,{class:"my-2"}),a(P,{msg:e.msg,error:e.error},null,8,["msg","error"]),a(w,{class:"my-2"}),a(f,{loading:e.loading,disabled:e.loading,block:"",color:"primary",size:"large",type:"submit",variant:"elevated",onClick:u.logIn},{default:t(()=>[l(" Log In ")]),_:1},8,["loading","disabled","onClick"]),a(O,null,{default:t(()=>[l("Do Not You have an account "),a(f,{end:"",flat:"",class:"text-decoration-none text-secondary",to:{name:"SignUp"}},{default:t(()=>[l(" signup"),a(q,{icon:"mdi-chevron-right",color:"secondary"})]),_:1})]),_:1})]),_:1})]),_:1})}const X=k(G,[["render",Y]]);export{X as default};
