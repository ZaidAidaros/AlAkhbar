import{_ as b,R as y,L as C,r as h,o as i,c as n,w as a,f as d,a as s,V as I,b as t,t as k,l as f,e as u,x as P,y as T,i as m,j as p,k as g,B as F,m as $,z as q,q as M}from"./index-50d0d424.js";import{s as L,a as c}from"./authController-fcbce260.js";import{V as S}from"./VCheckbox-a3894c96.js";import{V}from"./VContainer-1d22aa7d.js";const U={name:"LogIn",components:{ResMsg:y,LogoComp:C},data:()=>({pageTitle:"Log In",passwordVisible:!1,loading:!1,forgetloading:!1,error:!1,msg:null,usePhone:!1,email:null,phone:null,password:null,rules:{required:e=>!!e||"Required.",password:e=>e.length>=6&&e.length<=20||"Max 20 characters , Min 6",phone:e=>(e==null?void 0:e.length)<=10?!0:"Name must be less than 10 characters.",email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Invalid e-mail."}}),methods:{logIn:async function(){if((await this.$refs.logInForm.validate()).valid){this.loading=!0,this.error=!1,this.msg=null;const l=await L({phoneEmail:this.usePhone?this.phone:this.email,password:this.password});console.log(l),this.loading=!1,this.msg=l.message,this.error=!l.state,l.state&&l.isVerified&&(this.$store.dispatch("logIn",l),setTimeout(()=>{this.$router.push("/")},1e3))}else this.msg="Must Fill All Fields Correctly",this.error=!0},foregetPassword:async function(){if(this.usePhone)if((await this.$refs.pho.validate()).valid){this.forgetloading=!0,this.error=!1,this.msg=null;const l=await c(this.phone);this.msg=l.message,this.error=!l.state,setTimeout(()=>{this.msg=null,this.error=!1},1e3)}else this.error=!0,this.msg="Must provide phone number";else if((await this.$refs.em.validate()).valid){this.forgetloading=!0,this.error=!1,this.msg=null;const l=await c(this.email);this.forgetloading=!1,this.msg=l.message,this.error=!l.state,setTimeout(()=>{this.msg=null,this.error=!1},1e3)}else this.error=!0,this.msg="Must provide email"}}};function z(e,l,R,A,B,r){const w=h("logo-comp"),v=h("res-msg");return i(),n(d,{class:"mx-auto py-4 px-8",elevation:"8","max-width":"448",rounded:"lg"},{default:a(()=>[s(u,null,{default:a(()=>[s(I,null,{default:a(()=>[t(k(e.pageTitle),1)]),_:1}),s(f)]),_:1}),s(w,{size:"150"}),s(V,null,{default:a(()=>[s(P,{ref:"logInForm",onSubmit:T(r.logIn,["prevent"])},{default:a(()=>[s(S,{class:"my-0",modelValue:e.usePhone,"onUpdate:modelValue":l[0]||(l[0]=o=>e.usePhone=o),color:"secondary",label:"Use Phone Number"},null,8,["modelValue"]),e.usePhone?(i(),n(d,{key:0,flat:""},{default:a(()=>[s(m,{class:"text-subtitle-1 text-medium-emphasis"},{default:a(()=>[t("Phone ")]),_:1}),s(p,{modelValue:e.phone,"onUpdate:modelValue":l[1]||(l[1]=o=>e.phone=o),ref:"pho",rules:[e.rules.required],density:"compact",placeholder:"Phone","prepend-inner-icon":"mdi-phone-outline",variant:"outlined"},null,8,["modelValue","rules"])]),_:1})):(i(),n(d,{key:1,flat:""},{default:a(()=>[s(m,{class:"text-subtitle-1 text-medium-emphasis"},{default:a(()=>[t("Email ")]),_:1}),s(p,{modelValue:e.email,"onUpdate:modelValue":l[2]||(l[2]=o=>e.email=o),ref:"em",rules:[e.rules.required,e.rules.email],density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue","rules"])]),_:1})),s(u,null,{default:a(()=>[s(m,{class:"text-subtitle-1 text-medium-emphasis"},{default:a(()=>[t("Passwrod ")]),_:1}),s(g,{flat:"",onClick:r.foregetPassword,loading:e.forgetloading,class:"text-caption text-decoration-none text-blue",rel:"noopener noreferrer"},{default:a(()=>[t(" Forgot login password?")]),_:1},8,["onClick","loading"])]),_:1}),s(p,{modelValue:e.password,"onUpdate:modelValue":l[3]||(l[3]=o=>e.password=o),rules:[e.rules.required,e.rules.password],"append-inner-icon":e.passwordVisible?"mdi-eye-off":"mdi-eye",type:e.passwordVisible?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":l[4]||(l[4]=o=>e.passwordVisible=!e.passwordVisible)},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1},8,["onSubmit"]),s(v,{msg:e.msg,error:e.error},null,8,["msg","error"]),s(F),s($,null,{default:a(()=>[s(g,{loading:e.loading,block:"",color:"green",size:"large",type:"submit",variant:"elevated",onClick:r.logIn},{default:a(()=>[t(" Log In ")]),_:1},8,["loading","onClick"])]),_:1}),s(V,{class:"px-0"},{default:a(()=>[s(u,{"align-content":"center"},{default:a(()=>[s(q,null,{default:a(()=>[t("You have an account "),s(g,{end:"",flat:"",class:"text-decoration-none text-blue",to:{name:"SignUp"}},{default:a(()=>[t(" signup"),s(M,{icon:"mdi-chevron-right"})]),_:1})]),_:1}),s(f)]),_:1})]),_:1})]),_:1})]),_:1})}const Z=b(U,[["render",z]]);export{Z as default};
