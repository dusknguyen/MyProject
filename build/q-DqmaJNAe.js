import{j as de,c as _e,_ as b,C as ve,d as pe,D as me,R as fe,e as ye,f as Se,h as he,i as Ce,k as be,m as X,l as ne,n as g,r as we,o as re,Q as se,q as ie,t as Ee,v as K,w as D,x as k,y as ge,z as qe,A as Pe,B as Re,E as i,F as T}from"./q-Du2RK_kH.js";import{x as Le,i as Ie,a as M,y as ke,t as B,v as y,z as Oe,e as Ae,S as De,q as N,p as ae,A as Te,B as le,n as $e,C as xe,_hW as G}from"./q-DnUmCcGy.js";const je=s=>{Le(N(()=>b(()=>Promise.resolve().then(()=>Me),void 0),"s_i0OX5Main1M"));const n=de();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const S=Ie("url");if(!S)throw new Error("Missing Qwik URL Env Data");const v=new URL(S),a=M({url:v,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),q={},d=ke(M(n.response.loaders,{deep:!1})),m=B({type:"initial",dest:v,forceReload:!1,replaceState:!1,scroll:!0}),h=M(_e),P=M({headings:void 0,menu:void 0}),l=B(),t=n.response.action,_=t?n.response.loaders[t]:void 0,c=B(_?{id:t,data:n.response.formData,output:{result:_,status:n.response.status}}:void 0),R=N(()=>b(()=>Promise.resolve().then(()=>Be),void 0),"s_SNVSoEmabck"),$=N(()=>b(()=>Promise.resolve().then(()=>He),void 0),"s_Aqeo8lKe3IU",[c,q,m,a]);return y(ve,P),y(pe,l),y(me,h),y(fe,a),y(ye,$),y(Se,d),y(he,c),y(Ce,m),y(be,R),Oe(N(()=>b(()=>Promise.resolve().then(()=>Qe),void 0),"s_RZOV0QbO60Y",[c,P,l,h,n,$,d,q,s,m,a])),Ae(De,null,3,"P4_3")},Ke=Object.freeze(Object.defineProperty({__proto__:null,s_8X6hWgnQRxE:je},Symbol.toStringTag,{value:"Module"}));const W=()=>b(()=>import("./q-CfhRCMGH.js").then(s=>s.l),[]),Y=[["/",[W,()=>b(()=>import("./q-DlISHKK5.js"),[])]],["demo/flower/",[W,()=>b(()=>import("./q-CF1XIQ1T.js"),[])]],["demo/todolist/",[W,()=>b(()=>import("./q-DWNgQJCT.js").then(s=>s.i),[])]]],Z=[];const F=!0;const Ve=({track:s})=>{const[n,S,v,a,q,d,m,h,P,l,t]=ae();async function _(){var J;const[c,R]=s(()=>[l.value,n.value]),$=Te(""),L=t.url,f=R?"form":c.type,ce=c.replaceState;let r,O,H=null,x;{r=new URL(c.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let j=X(Y,Z,F,r.pathname);x=le();const V=O=await ne(r,x,{action:R,clearCache:!0});if(!V){l.untrackedValue={type:f,dest:r};return}const Q=V.href,U=new URL(Q,r);g(U,r)||(r=U,j=X(Y,Z,F,r.pathname));try{H=await j}catch{window.location.href=Q;return}}if(H){const[j,V,Q,U]=H,A=Q,ue=A[A.length-1],ee=f==="form"&&!g(r,L);c.dest.search&&!ee&&(r.search=c.dest.search),g(r,L)||(t.prevUrl=L),t.url=r,t.params={...V},l.untrackedValue={type:f,dest:r};const I=we(O,t,A,$);S.headings=ue.headings,S.menu=U,v.value=$e(A),a.links=I.links,a.meta=I.meta,a.styles=I.styles,a.scripts=I.scripts,a.title=I.title,a.frontmatter=I.frontmatter;{P.viewTransition!==!1&&(document.__q_view_transition__=!0);let te;f==="popstate"&&(te=re());const w=document.getElementById(se)??document.documentElement;(c.scroll&&(!c.forceReload||!g(r,L))&&(f==="link"||f==="popstate")||ee)&&(document.__q_scroll_restore__=()=>ie(f,r,L,w,te));const oe=O==null?void 0:O.loaders,e=window;if(oe&&Object.assign(m,oe),Ee.clear(),!e._qCitySPA){if(e._qCitySPA=!0,history.scrollRestoration="manual",e.addEventListener("popstate",()=>{e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),d(location.href,{type:"popstate"})}),e.removeEventListener("popstate",e._qCityInitPopstate),e._qCityInitPopstate=void 0,!e._qCityHistoryPatch){e._qCityHistoryPatch=!0;const u=history.pushState,C=history.replaceState,E=o=>(o===null||typeof o>"u"?o={}:(o==null?void 0:o.constructor)!==Object&&(o={_data:o}),o._qCityScroll=o._qCityScroll||k(w),o);history.pushState=(o,p,z)=>(o=E(o),u.call(history,o,p,z)),history.replaceState=(o,p,z)=>(o=E(o),C.call(history,o,p,z))}document.body.addEventListener("click",u=>{if(u.defaultPrevented)return;const C=u.target.closest("a[href]");if(C&&!C.hasAttribute("preventdefault:click")){const E=C.getAttribute("href"),o=new URL(location.href),p=new URL(E,o);if(K(p,o)&&g(p,o)){if(u.preventDefault(),!p.hash&&!p.href.endsWith("#")){p.href!==o.href&&history.pushState(null,"",p),e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),D({...k(w),x:0,y:0}),location.reload();return}d(C.getAttribute("href"))}}}),document.body.removeEventListener("click",e._qCityInitAnchors),e._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(e._qCityScrollEnabled&&document.visibilityState==="hidden"){const u=k(w);D(u)}},{passive:!0}),document.removeEventListener("visibilitychange",e._qCityInitVisibility),e._qCityInitVisibility=void 0),e.addEventListener("scroll",()=>{e._qCityScrollEnabled&&(clearTimeout(e._qCityScrollDebounce),e._qCityScrollDebounce=setTimeout(()=>{const u=k(w);D(u),e._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",e._qCityInitScroll),e._qCityInitScroll=void 0,(J=e._qCityBootstrap)==null||J.remove(),e._qCityBootstrap=void 0,ge.resolve()}if(f!=="popstate"){e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce);const u=k(w);D(u)}qe(window,f,L,r,ce),xe(x).then(()=>{var E;Pe(x).setAttribute("q:route",j);const C=k(w);D(C),e._qCityScrollEnabled=!0,t.isNavigating=!1,(E=h.r)==null||E.call(h)})}}}_()},Qe=Object.freeze(Object.defineProperty({__proto__:null,_hW:G,s_RZOV0QbO60Y:Ve},Symbol.toStringTag,{value:"Module"})),Ue=":root{view-transition-name:none}",Me=Object.freeze(Object.defineProperty({__proto__:null,s_i0OX5Main1M:Ue},Symbol.toStringTag,{value:"Module"})),Ne=async(s,n)=>{const[S,v,a,q]=ae(),{type:d="link",forceReload:m=s===void 0,replaceState:h=!1,scroll:P=!0}=typeof n=="object"?n:{forceReload:n};T.navCount++;const l=a.value.dest,t=s===void 0?l:typeof s=="number"?s:Re(s,q.url);if(i.$cbs$&&(m||typeof t=="number"||!g(t,l)||!K(t,l))){const _=T.navCount,c=await Promise.all([...i.$cbs$.values()].map(R=>R(t)));if(_!==T.navCount||c.some(Boolean)){_===T.navCount&&d==="popstate"&&history.pushState(null,"",l);return}}if(typeof t=="number"){history.go(t);return}if(!K(t,l)){location.href=t.href;return}if(!m&&g(t,l)){{d==="link"&&t.href!==location.href&&history.pushState(null,"",t);const _=document.getElementById(se)??document.documentElement;ie(d,t,new URL(location.href),_,re()),d==="popstate"&&(window._qCityScrollEnabled=!0)}return}return a.value={type:d,dest:t,forceReload:m,replaceState:h,scroll:P},ne(t,le()),X(Y,Z,F,t.pathname),S.value=void 0,q.isNavigating=!0,new Promise(_=>{v.r=_})},He=Object.freeze(Object.defineProperty({__proto__:null,_hW:G,s_Aqeo8lKe3IU:Ne},Symbol.toStringTag,{value:"Module"})),ze=s=>(i.$handler$||(i.$handler$=n=>{if(T.navCount++,!i.$cbs$)return;[...i.$cbs$.values()].map(v=>v.resolved?v.resolved():v()).some(Boolean)&&(n.preventDefault(),n.returnValue=!0)}),(i.$cbs$||(i.$cbs$=new Set)).add(s),s.resolve(),window.addEventListener("beforeunload",i.$handler$),()=>{i.$cbs$&&(i.$cbs$.delete(s),i.$cbs$.size||(i.$cbs$=void 0,window.removeEventListener("beforeunload",i.$handler$)))}),Be=Object.freeze(Object.defineProperty({__proto__:null,_hW:G,s_SNVSoEmabck:ze},Symbol.toStringTag,{value:"Module"}));export{Ue as a,Ne as b,ze as c,Ke as i,Ve as s,je as s_8X6hWgnQRxE};
