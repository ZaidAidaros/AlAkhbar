import{J as U,a as P,m as V,T as k,D as R,bb as x,bc as I,bd as T,be as W,bf as B,bg as K,aj as w,ak as b,aR as j,N as q,bh as N,b4 as X,P as D,Q as H,b8 as Y,aP as J,b5 as Q,U as z,X as G,aF as Z,aN as _,bi as ee,W as te,bj as M,bk as ne,$}from"./index-41c6c65a.js";import{m as ae,a as S,V as L}from"./VOverlay-2cbcb0a3.js";const re=R({target:[Object,Array]},"v-dialog-transition"),oe=U()({name:"VDialogTransition",props:re(),setup(e,r){let{slots:n}=r;const i={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,g){var y;await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),o.style.visibility="";const{x:f,y:s,sx:a,sy:d,speed:m}=F(e.target,o),h=x(o,[{transform:`translate(${f}px, ${s}px) scale(${a}, ${d})`,opacity:0},{}],{duration:225*m,easing:I});(y=O(o))==null||y.forEach(c=>{x(c,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*m,easing:T})}),h.finished.then(()=>g())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,g){var y;await new Promise(c=>requestAnimationFrame(c));const{x:f,y:s,sx:a,sy:d,speed:m}=F(e.target,o);x(o,[{},{transform:`translate(${f}px, ${s}px) scale(${a}, ${d})`,opacity:0}],{duration:125*m,easing:W}).finished.then(()=>g()),(y=O(o))==null||y.forEach(c=>{x(c,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*m,easing:T})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?P(k,V({name:"dialog-transition"},i,{css:!1}),n):P(k,{name:"dialog-transition"},n)}});function O(e){var n;const r=(n=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:n.children;return r&&[...r]}function F(e,r){const n=B(e),i=K(r),[o,g]=getComputedStyle(r).transformOrigin.split(" ").map(u=>parseFloat(u)),[f,s]=getComputedStyle(r).getPropertyValue("--v-overlay-anchor-origin").split(" ");let a=n.left+n.width/2;f==="left"||s==="left"?a-=n.width/2:(f==="right"||s==="right")&&(a+=n.width/2);let d=n.top+n.height/2;f==="top"||s==="top"?d-=n.height/2:(f==="bottom"||s==="bottom")&&(d+=n.height/2);const m=n.width/i.width,h=n.height/i.height,y=Math.max(1,m,h),c=m/y||0,A=h/y||0,t=i.width*i.height/(window.innerWidth*window.innerHeight),l=t>.12?Math.min(1.5,(t-.12)*10+1):1;return{x:a-(o+i.left),y:d-(g+i.top),sx:c,sy:A,speed:l}}const se="/writter/profile",ie="/writter/w-articles",C="/writter/article";async function le(){try{return await w.get(se)}catch(e){return b(e)}}async function ce(e){try{return await w.get(e)}catch(r){return b(r)}}async function ue(e,r){try{return await w.get(ie,{params:{published:e,page:r}})}catch(n){return b(n)}}async function fe(e,r,n){return r?await me(n,e):await de(e)}async function de(e){try{return await w.post(C,e,{headers:{"Content-Type":"multipart/form-data"}})}catch(r){return b(r)}}async function me(e,r){try{return await w.put(C+"/"+e,r)}catch(n){return b(n)}}async function ye(e){try{return await w.delete(C+"/"+e)}catch(r){return b(r)}}const we={getWritterProfile:le,loadWritterArticles:ue,loadArticleImage:ce,submitArticleForm:fe,deleteArticle:ye};const ve=R({id:String,...j(ae({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:oe}}),["absolute"])},"VMenu"),be=U()({name:"VMenu",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:n}=r;const i=q(e,"modelValue"),{scopeId:o}=N(),g=X(),f=D(()=>e.id||`v-menu-${g}`),s=H(),a=Y(S,null),d=J(0);Q(S,{register(){++d.value},unregister(){--d.value},closeParents(t){setTimeout(()=>{!d.value&&!e.persistent&&(t==null||t&&!ee(t,s.value.contentEl))&&(i.value=!1,a==null||a.closeParents())},40)}});async function m(t){var v,p,E;const l=t.relatedTarget,u=t.target;await te(),i.value&&l!==u&&((v=s.value)!=null&&v.contentEl)&&((p=s.value)!=null&&p.globalTop)&&![document,s.value.contentEl].includes(u)&&!s.value.contentEl.contains(u)&&((E=M(s.value.contentEl)[0])==null||E.focus())}z(i,t=>{t?(a==null||a.register(),document.addEventListener("focusin",m,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",m))});function h(t){a==null||a.closeParents(t)}function y(t){var l,u,v;if(!e.disabled)if(t.key==="Tab"||t.key==="Enter"&&!e.closeOnContentClick){if(t.key==="Enter"&&t.target instanceof HTMLTextAreaElement)return;t.key==="Enter"&&t.preventDefault(),ne(M((l=s.value)==null?void 0:l.contentEl,!1),t.shiftKey?"prev":"next",E=>E.tabIndex>=0)||(i.value=!1,(v=(u=s.value)==null?void 0:u.activatorEl)==null||v.focus())}else["Enter"," "].includes(t.key)&&e.closeOnContentClick&&(i.value=!1,a==null||a.closeParents())}function c(t){var u;if(e.disabled)return;const l=(u=s.value)==null?void 0:u.contentEl;l&&i.value?t.key==="ArrowDown"?(t.preventDefault(),$(l,"next")):t.key==="ArrowUp"&&(t.preventDefault(),$(l,"prev")):["ArrowDown","ArrowUp"].includes(t.key)&&(i.value=!0,t.preventDefault(),setTimeout(()=>setTimeout(()=>c(t))))}const A=D(()=>V({"aria-haspopup":"menu","aria-expanded":String(i.value),"aria-owns":f.value,onKeydown:c},e.activatorProps));return G(()=>{const t=L.filterProps(e);return P(L,V({ref:s,id:f.value,class:["v-menu",e.class],style:e.style},t,{modelValue:i.value,"onUpdate:modelValue":l=>i.value=l,absolute:!0,activatorProps:A.value,"onClick:outside":h,onKeydown:y},o),{activator:n.activator,default:function(){for(var l=arguments.length,u=new Array(l),v=0;v<l;v++)u[v]=arguments[v];return P(Z,{root:"VMenu"},{default:()=>{var p;return[(p=n.default)==null?void 0:p.call(n,...u)]}})}})}),_({id:f,ΨopenChildren:d},s)}});export{be as V,oe as a,we as w};