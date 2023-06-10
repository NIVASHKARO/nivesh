import{aO as L,a9 as Z,aP as z,$ as O,aM as Q,r as i,R as _,Y,aQ as J,Z as W,ag as ee}from"./index.9689f1a6.js";var ne=(...t)=>t.filter(Boolean).join(" "),te=t=>t?!0:void 0;function y(...t){return function(a){t.some(r=>(r==null||r(a),a==null?void 0:a.defaultPrevented))}}var[se,Ie,oe,ae]=L(),[ue,re]=Z({name:"PinInputContext",errorMessage:"usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"}),G=t=>t==null?void 0:t.split("");function U(t,u){return(u==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(t)}function ie(t={}){const{autoFocus:u,value:a,defaultValue:r,onChange:c,onComplete:l,placeholder:v="\u25CB",manageFocus:x=!0,otp:k=!1,id:E,isDisabled:N,isInvalid:D,type:I="number",mask:M}=t,X=i.exports.useId(),A=E!=null?E:`pin-input-${X}`,s=oe(),[V,F]=i.exports.useState(!0),[w,B]=i.exports.useState(-1),[m,d]=J({defaultValue:G(r)||[],value:G(a),onChange:n=>c==null?void 0:c(n.join(""))});i.exports.useEffect(()=>{if(u){const n=s.first();n&&requestAnimationFrame(()=>{n.node.focus()})}},[s]);const $=i.exports.useCallback(n=>{if(!V||!x)return;const e=s.next(n,!1);e&&requestAnimationFrame(()=>{e.node.focus()})},[s,V,x]),P=i.exports.useCallback((n,e,o=!0)=>{const p=[...m];p[e]=n,d(p),n!==""&&p.length===s.count()&&p.every(C=>C!=null&&C!=="")?l==null||l(p.join("")):o&&$(e)},[m,d,$,l,s]),H=i.exports.useCallback(()=>{var n;const e=Array(s.count()).fill("");d(e);const o=s.first();(n=o==null?void 0:o.node)==null||n.focus()},[s,d]),S=i.exports.useCallback((n,e)=>{let o=e;return(n==null?void 0:n.length)>0&&(n[0]===e.charAt(0)?o=e.charAt(1):n[0]===e.charAt(1)&&(o=e.charAt(0))),o},[]);return{getInputProps:i.exports.useCallback(n=>{const{index:e,...o}=n,p=g=>{const f=g.target.value,h=m[e],b=S(h,f);if(b===""){P("",e);return}if(f.length>2){if(U(f,I)){const R=f.split("").filter((xe,q)=>q<s.count());d(R),R.length===s.count()&&(l==null||l(R.join("")))}}else U(b,I)&&P(b,e),F(!0)},j=g=>{var f;if(g.key==="Backspace"&&x)if(g.target.value===""){const h=s.prev(e,!1);h&&(P("",e-1,!1),(f=h.node)==null||f.focus(),F(!0))}else F(!1)},C=()=>{B(e)},K=()=>{B(-1)},T=w===e;return{"aria-label":"Please enter your pin code",inputMode:I==="number"?"numeric":"text",type:M?"password":I==="number"?"tel":"text",...o,id:`${A}-${e}`,disabled:N,"aria-invalid":te(D),onChange:y(o.onChange,p),onKeyDown:y(o.onKeyDown,j),onFocus:y(o.onFocus,C),onBlur:y(o.onBlur,K),value:m[e]||"",autoComplete:k?"one-time-code":"off",placeholder:T?"":v}},[s,w,S,A,N,M,D,x,l,k,v,P,d,I,m]),id:A,descendants:s,values:m,setValue:P,setValues:d,clear:H}}function le(t={},u=null){const{getInputProps:a}=re(),{index:r,register:c}=ae();return a({...t,ref:ee(c,u),index:r})}function ce(t){const u=z("PinInput",t),{children:a,...r}=O(t),{descendants:c,...l}=ie(r),v=Q(a).map(x=>i.exports.cloneElement(x,{__css:u}));return _.createElement(se,{value:c},_.createElement(ue,{value:l},v))}ce.displayName="PinInput";var de=Y(function(u,a){const r=le(u,a);return _.createElement(W.input,{...r,className:ne("chakra-pin-input",u.className)})});de.displayName="PinInputField";export{ce as P,de as a};