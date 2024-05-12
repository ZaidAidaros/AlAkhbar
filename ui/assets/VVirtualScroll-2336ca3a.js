import{H as w,J as O,M as k,bF as z,ax as D,O as B,a as m,F as C,p as j,aG as M,aj as V,aw as A,aR as G,bg as Z,bJ as $,aW as _,bl as q,bf as K,bn as Q,Z as X,b2 as ee,aV as b,aS as te,b3 as le}from"./index-cef20696.js";function ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?ne(e):F(e))return e;e=e.parentElement}return document.scrollingElement}function de(e,t){const s=[];if(t&&e&&!t.contains(e))return s;for(;e&&(F(e)&&s.push(e),e!==t);)e=e.parentElement;return s}function F(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function ne(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}const se=w({renderless:Boolean,...O()},"VVirtualScrollItem"),re=k()({name:"VVirtualScrollItem",inheritAttrs:!1,props:se(),emits:{"update:height":e=>!0},setup(e,t){let{attrs:s,emit:c,slots:i}=t;const{resizeRef:n,contentRect:r}=z(void 0,"border");D(()=>{var o;return(o=r.value)==null?void 0:o.height},o=>{o!=null&&c("update:height",o)}),B(()=>{var o,v;return e.renderless?m(C,null,[(o=i.default)==null?void 0:o.call(i,{itemRef:n})]):m("div",j({ref:n,class:["v-virtual-scroll__item",e.class],style:e.style},s),[(v=i.default)==null?void 0:v.call(i)])})}}),N=-1,H=1,oe=w({itemHeight:{type:[Number,String],default:48}},"virtual");function ue(e,t,s){const c=M(0),i=M(e.itemHeight),n=V({get:()=>parseInt(i.value??0,10),set(l){i.value=l}}),r=A(),{resizeRef:o,contentRect:v}=z();G(()=>{o.value=r.value});const y=Z(),h=new Map;let g=Array.from({length:t.value.length});const u=V(()=>{const l=(!v.value||r.value===document.documentElement?y.height.value:v.value.height)-((s==null?void 0:s.value)??0);return Math.ceil(l/n.value*1.7+1)});function p(l,a){n.value=Math.max(n.value,a),g[l]=a,h.set(t.value[l],a)}function f(l){return g.slice(0,l).reduce((a,d)=>a+(d||n.value),0)}function I(l){const a=t.value.length;let d=0,S=0;for(;S<l&&d<a;)S+=g[d++]||n.value;return d-1}let E=0;function L(){if(!r.value||!v.value)return;const l=v.value.height-56,a=r.value.scrollTop,d=a<E?N:H,S=I(a+l/2),x=Math.round(u.value/3),R=S-x,P=c.value+x*2-1;d===N&&S<=P?c.value=_(R,0,t.value.length):d===H&&S>=P&&(c.value=_(R,0,t.value.length-u.value)),E=a}function U(l){if(!r.value)return;const a=f(l);r.value.scrollTop=a}const T=V(()=>Math.min(t.value.length,c.value+u.value)),Y=V(()=>t.value.slice(c.value,T.value).map((l,a)=>({raw:l,index:a+c.value}))),J=V(()=>f(c.value)),W=V(()=>f(t.value.length)-f(T.value));return D(()=>t.value.length,()=>{g=$(t.value.length).map(()=>n.value),h.forEach((l,a)=>{const d=t.value.indexOf(a);d===-1?h.delete(a):g[d]=l})}),{containerRef:r,computedItems:Y,itemHeight:n,paddingTop:J,paddingBottom:W,scrollToIndex:U,handleScroll:L,handleItemResize:p}}const ce=w({items:{type:Array,default:()=>[]},renderless:Boolean,...oe(),...O(),...q()},"VVirtualScroll"),ve=k()({name:"VVirtualScroll",props:ce(),setup(e,t){let{slots:s}=t;const c=K("VVirtualScroll"),{dimensionStyles:i}=Q(e),{containerRef:n,handleScroll:r,handleItemResize:o,scrollToIndex:v,paddingTop:y,paddingBottom:h,computedItems:g}=ue(e,X(e,"items"));return ee(()=>e.renderless,()=>{te(()=>{var u;n.value=ae(c.vnode.el,!0),(u=n.value)==null||u.addEventListener("scroll",r)}),le(()=>{var u;(u=n.value)==null||u.removeEventListener("scroll",r)})}),B(()=>{const u=g.value.map(p=>m(re,{key:p.index,renderless:e.renderless,"onUpdate:height":f=>o(p.index,f)},{default:f=>{var I;return(I=s.default)==null?void 0:I.call(s,{item:p.raw,index:p.index,...f})}}));return e.renderless?m(C,null,[m("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:b(y.value)}},null),u,m("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:b(h.value)}},null)]):m("div",{ref:n,class:["v-virtual-scroll",e.class],onScroll:r,style:[i.value,e.style]},[m("div",{class:"v-virtual-scroll__container",style:{paddingTop:b(y.value),paddingBottom:b(h.value)}},[u])])}),{scrollToIndex:v}}});export{ve as V,ae as a,de as g,F as h};