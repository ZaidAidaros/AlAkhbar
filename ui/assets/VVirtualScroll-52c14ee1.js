import{E as b,G as H,J as k,bD as z,av as O,M as B,a as m,F as C,p as G,aE as M,ah as V,au as J,aP as Q,be as W,bH as X,aU as _,bj as $,bd as q,bl as K,X as Z,b0 as ee,aT as I,aQ as te,b1 as le}from"./index-0c5a0de1.js";function ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?ne(e):L(e))return e;e=e.parentElement}return document.scrollingElement}function de(e,t){const s=[];if(t&&e&&!t.contains(e))return s;for(;e&&(L(e)&&s.push(e),e!==t);)e=e.parentElement;return s}function L(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function ne(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}const se=b({renderless:Boolean,...H()},"VVirtualScrollItem"),re=k()({name:"VVirtualScrollItem",inheritAttrs:!1,props:se(),emits:{"update:height":e=>!0},setup(e,t){let{attrs:s,emit:c,slots:i}=t;const{resizeRef:n,contentRect:r}=z(void 0,"border");O(()=>{var o;return(o=r.value)==null?void 0:o.height},o=>{o!=null&&c("update:height",o)}),B(()=>{var o,v;return e.renderless?m(C,null,[(o=i.default)==null?void 0:o.call(i,{itemRef:n})]):m("div",G({ref:n,class:["v-virtual-scroll__item",e.class],style:e.style},s),[(v=i.default)==null?void 0:v.call(i)])})}}),N=-1,D=1,oe=b({itemHeight:{type:[Number,String],default:48}},"virtual");function ue(e,t,s){const c=M(0),i=M(e.itemHeight),n=V({get:()=>parseInt(i.value??0,10),set(l){i.value=l}}),r=J(),{resizeRef:o,contentRect:v}=z();Q(()=>{o.value=r.value});const y=W(),g=new Map;let h=Array.from({length:t.value.length});const u=V(()=>{const l=(!v.value||r.value===document.documentElement?y.height.value:v.value.height)-((s==null?void 0:s.value)??0);return Math.ceil(l/n.value*1.7+1)});function p(l,a){n.value=Math.max(n.value,a),h[l]=a,g.set(t.value[l],a)}function f(l){return h.slice(0,l).reduce((a,d)=>a+(d||n.value),0)}function E(l){const a=t.value.length;let d=0,S=0;for(;S<l&&d<a;)S+=h[d++]||n.value;return d-1}let T=0;function U(){if(!r.value||!v.value)return;const l=v.value.height-56,a=r.value.scrollTop,d=a<T?N:D,S=E(a+l/2),x=Math.round(u.value/3),R=S-x,P=c.value+x*2-1;d===N&&S<=P?c.value=_(R,0,t.value.length):d===D&&S>=P&&(c.value=_(R,0,t.value.length-u.value)),T=a}function F(l){if(!r.value)return;const a=f(l);r.value.scrollTop=a}const w=V(()=>Math.min(t.value.length,c.value+u.value)),Y=V(()=>t.value.slice(c.value,w.value).map((l,a)=>({raw:l,index:a+c.value}))),j=V(()=>f(c.value)),A=V(()=>f(t.value.length)-f(w.value));return O(()=>t.value.length,()=>{h=X(t.value.length).map(()=>n.value),g.forEach((l,a)=>{const d=t.value.indexOf(a);d===-1?g.delete(a):h[d]=l})}),{containerRef:r,computedItems:Y,itemHeight:n,paddingTop:j,paddingBottom:A,scrollToIndex:F,handleScroll:U,handleItemResize:p}}const ce=b({items:{type:Array,default:()=>[]},renderless:Boolean,...oe(),...H(),...$()},"VVirtualScroll"),ve=k()({name:"VVirtualScroll",props:ce(),setup(e,t){let{slots:s}=t;const c=q("VVirtualScroll"),{dimensionStyles:i}=K(e),{containerRef:n,handleScroll:r,handleItemResize:o,scrollToIndex:v,paddingTop:y,paddingBottom:g,computedItems:h}=ue(e,Z(e,"items"));return ee(()=>e.renderless,()=>{te(()=>{var u;n.value=ae(c.vnode.el,!0),(u=n.value)==null||u.addEventListener("scroll",r)}),le(()=>{var u;(u=n.value)==null||u.removeEventListener("scroll",r)})}),B(()=>{const u=h.value.map(p=>m(re,{key:p.index,renderless:e.renderless,"onUpdate:height":f=>o(p.index,f)},{default:f=>{var E;return(E=s.default)==null?void 0:E.call(s,{item:p.raw,index:p.index,...f})}}));return e.renderless?m(C,null,[m("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:I(y.value)}},null),u,m("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:I(g.value)}},null)]):m("div",{ref:n,class:["v-virtual-scroll",e.class],onScroll:r,style:[i.value,e.style]},[m("div",{class:"v-virtual-scroll__container",style:{paddingTop:I(y.value),paddingBottom:I(g.value)}},[u])])}),{scrollToIndex:v}}});export{ve as V,ae as a,de as g,L as h};