import{D as z,a1 as q,J as L,bQ as Q,U as O,X,a as S,F as $,m as re,bD as se,aP as I,a_ as C,Q as W,P as M,b6 as J,b3 as B,bT as oe,W as ue,aW as ce,E as ie,bA as ve,K as de,aa as fe,bp as me,b2 as F,a$ as he}from"./index-41c6c65a.js";import{a as ge}from"./getScrollParent-6bb6c202.js";const pe=z({renderless:Boolean,...q()},"VVirtualScrollItem"),Se=L()({name:"VVirtualScrollItem",inheritAttrs:!1,props:pe(),emits:{"update:height":l=>!0},setup(l,a){let{attrs:i,emit:s,slots:t}=a;const{resizeRef:n,contentRect:v}=Q(void 0,"border");O(()=>{var u;return(u=v.value)==null?void 0:u.height},u=>{u!=null&&s("update:height",u)}),X(()=>{var u,o;return l.renderless?S($,null,[(u=t.default)==null?void 0:u.call(t,{itemRef:n})]):S("div",re({ref:n,class:["v-virtual-scroll__item",l.class],style:l.style},i),[(o=t.default)==null?void 0:o.call(t)])})}}),Ve=-1,Te=1,E=100,ye=z({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function be(l,a){const i=se(),s=I(0);C(()=>{s.value=parseFloat(l.itemHeight||0)});const t=I(0),n=I(Math.ceil((parseInt(l.height)||i.height.value)/(s.value||16))||1),v=I(0),u=I(0),o=W(),g=W();let R=0;const{resizeRef:_,contentRect:x}=Q();C(()=>{_.value=o.value});const y=M(()=>{var e;return o.value===document.documentElement?i.height.value:((e=x.value)==null?void 0:e.height)||parseInt(l.height)||0}),V=M(()=>!!(o.value&&g.value&&y.value&&s.value));let d=Array.from({length:a.value.length}),c=Array.from({length:a.value.length});const m=I(0);let T=-1;function K(e){return d[e]||s.value}const A=oe(()=>{const e=performance.now();c[0]=0;const r=a.value.length;for(let f=1;f<=r-1;f++)c[f]=(c[f-1]||0)+K(f-1);m.value=Math.max(m.value,performance.now()-e)},m),j=O(V,e=>{e&&(j(),R=g.value.offsetTop,A.immediate(),b(),~T&&ue(()=>{ce&&window.requestAnimationFrame(()=>{U(T),T=-1})}))});J(()=>{A.clear()});function G(e,r){const f=d[e],h=s.value;s.value=h?Math.min(s.value,r):r,(f!==r||h!==s.value)&&(d[e]=r,A())}function p(e){return e=B(e,0,a.value.length-1),c[e]||0}function H(e){return Ie(c,e)}let k=0,w=0,D=0;O(y,(e,r)=>{r&&(b(),e<r&&requestAnimationFrame(()=>{w=0,b()}))});function Y(){if(!o.value||!g.value)return;const e=o.value.scrollTop,r=performance.now();r-D>500?(w=Math.sign(e-k),R=g.value.offsetTop):w=e-k,k=e,D=r,b()}function Z(){!o.value||!g.value||(w=0,D=0,b())}let N=-1;function b(){cancelAnimationFrame(N),N=requestAnimationFrame(ee)}function ee(){if(!o.value||!y.value)return;const e=k-R,r=Math.sign(w),f=Math.max(0,e-E),h=B(H(f),0,a.value.length),le=e+y.value+E,P=B(H(le)+1,h+1,a.value.length);if((r!==Ve||h<t.value)&&(r!==Te||P>n.value)){const ae=p(t.value)-p(h),ne=p(P)-p(n.value);Math.max(ae,ne)>E?(t.value=h,n.value=P):(h<=0&&(t.value=h),P>=a.value.length&&(n.value=P))}v.value=p(t.value),u.value=p(a.value.length)-p(n.value)}function U(e){const r=p(e);!o.value||e&&!r?T=e:o.value.scrollTop=r}const te=M(()=>a.value.slice(t.value,n.value).map((e,r)=>({raw:e,index:r+t.value})));return O(a,()=>{d=Array.from({length:a.value.length}),c=Array.from({length:a.value.length}),A.immediate(),b()},{deep:!0}),{containerRef:o,markerRef:g,computedItems:te,paddingTop:v,paddingBottom:u,scrollToIndex:U,handleScroll:Y,handleScrollend:Z,handleItemResize:G}}function Ie(l,a){let i=l.length-1,s=0,t=0,n=null,v=-1;if(l[i]<a)return i;for(;s<=i;)if(t=s+i>>1,n=l[t],n>a)i=t-1;else if(n<a)v=t,s=t+1;else return n===a?t:s;return v}const Re=z({items:{type:Array,default:()=>[]},renderless:Boolean,...ye(),...q(),...ie()},"VVirtualScroll"),xe=L()({name:"VVirtualScroll",props:Re(),setup(l,a){let{slots:i}=a;const s=ve("VVirtualScroll"),{dimensionStyles:t}=de(l),{containerRef:n,markerRef:v,handleScroll:u,handleScrollend:o,handleItemResize:g,scrollToIndex:R,paddingTop:_,paddingBottom:x,computedItems:y}=be(l,fe(l,"items"));return me(()=>l.renderless,()=>{function V(){var m,T;const c=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";n.value===document.documentElement?(document[c]("scroll",u,{passive:!0}),document[c]("scrollend",o)):((m=n.value)==null||m[c]("scroll",u,{passive:!0}),(T=n.value)==null||T[c]("scrollend",o))}he(()=>{n.value=ge(s.vnode.el,!0),V(!0)}),J(V)}),X(()=>{const V=y.value.map(d=>S(Se,{key:d.index,renderless:l.renderless,"onUpdate:height":c=>g(d.index,c)},{default:c=>{var m;return(m=i.default)==null?void 0:m.call(i,{item:d.raw,index:d.index,...c})}}));return l.renderless?S($,null,[S("div",{ref:v,class:"v-virtual-scroll__spacer",style:{paddingTop:F(_.value)}},null),V,S("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:F(x.value)}},null)]):S("div",{ref:n,class:["v-virtual-scroll",l.class],onScrollPassive:u,onScrollend:o,style:[t.value,l.style]},[S("div",{ref:v,class:"v-virtual-scroll__container",style:{paddingTop:F(_.value),paddingBottom:F(x.value)}},[V])])}),{scrollToIndex:R}}});export{xe as V};