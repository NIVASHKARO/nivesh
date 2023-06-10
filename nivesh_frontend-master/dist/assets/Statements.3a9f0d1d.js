import{m as P,S as l,B as R,u as J,d as K,e as Q,r as p,f as U,a as X,j as r,b as t,H as v,c as b,M as Z,C as $,D as q,F as ee,G as te,T as S,q as oe,J as se,K as ie,I as B,N as ae,g as re,E as ne,A as ce,h as le,i as de,k as ue,n as he,O as pe,o as ge,p as me,P as Se,a2 as fe,x as ye,y as Ce,a3 as we}from"./index.9689f1a6.js";import{A as be}from"./index.esm.a1830a40.js";import{S as D}from"./index.esm.f6ed9a34.js";const xe=P(l),N=P(R),ve={hidden:{scale:0},animate:{scale:1,transition:{staggerChildren:.5,delayChildren:.4}}},Me={hidden:{opacity:0},animate:{opacity:1}},Ie=()=>{var T;const u=J(),g=K();Q();const[M,_]=p.exports.useState(1),[A,F]=p.exports.useState(10),{isOpen:W,onOpen:E,onClose:L}=U(),{user:d}=X(),[z,Ae]=p.exports.useState([]),[y,Y]=p.exports.useState([]),[ze,O]=p.exports.useState(null);p.exports.useState(0);const[Re,m]=p.exports.useState(!1),[h,C]=p.exports.useState([]),x=async()=>{var e,s;try{const{data:i}=await fe(M,A);return i.error?u({title:"Error",description:i.message,status:"error",duration:3e3,isClosable:!0,position:"top-right"}):(Y(i==null?void 0:i.data),u({title:"Success",description:i.message,status:"success",duration:3e3,isClosable:!0,position:"bottom-right"}))}catch(i){console.error(i),u({title:"Error",description:((s=(e=i==null?void 0:i.response)==null?void 0:e.data)==null?void 0:s.message)||"Something went wrong",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}},H=async e=>{var s,i;try{m(!0);const{data:o}=await ye({id:e});if(m(!1),o.error)return u({title:"Error",description:o.message,status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});x(),u({title:"Success",description:o.message,status:"success",duration:3e3,isClosable:!0,position:"bottom-right"})}catch(o){m(!1),console.error(o),u({title:"Error",description:((i=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:i.message)||"Something went wrong",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}},V=async e=>{var s,i;try{m(!0);const{data:o}=await Ce({id:e});if(m(!1),o.error)return u({title:"Error",description:o.message,status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});x(),u({title:"Success",description:o.message,status:"success",duration:3e3,isClosable:!0,position:"bottom-right"})}catch(o){m(!1),console.error(o),u({title:"Error",description:((i=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:i.message)||"Something went wrong",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}},G=async()=>{var s,i;if(!h||(h==null?void 0:h.length)===0)return u({title:"Error",description:"Invalid details entered!",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});let e=!1;if(h.forEach(o=>{const{fund:f,dateType:a,date:n}=o;if(!f||!a||a==="custom"&&(!n||!n.from||!n.to))return e=!0}),e)return u({title:"Error",description:"Invalid details entered!",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});m(!0);try{const{data:o}=await we({requested:h});if(m(!1),o.error)return u({title:"Error",description:o.message,status:"error",duration:3e3,isClosable:!0,position:"top-right"});x(),L(),u({title:"Success",description:o.message,status:"success",duration:3e3,isClosable:!0,position:"bottom-right"})}catch(o){m(!1),console.error(o),u({title:"Error",description:((i=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:i.message)||"Something went wrong",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}};return p.exports.useEffect(()=>{x()},[M,A]),p.exports.useEffect(()=>{var e,s;!((e=g==null?void 0:g.state)!=null&&e.fund)||(O((s=g==null?void 0:g.state)==null?void 0:s.fund),E())},[(T=g==null?void 0:g.state)==null?void 0:T.fund]),r(R,{sx:{minHeight:"90vh",display:"flex",flexDirection:"column",pb:4,py:4,px:2},children:[r(l,{direction:"row",justifyContent:"space-between",children:[t(v,{color:"gray.600",children:"Request Statements"}),!(d!=null&&d.isAdmin)&&t(b,{colorScheme:"blue",onClick:E,children:"Request New Statement"})]}),r(Z,{onClose:L,isOpen:W,isCentered:!0,scrollBehavior:"inside",size:$({base:"sm",sm:"md",md:"md",lg:"3xl",xl:"3xl"}),sx:{mx:2},children:[t(q,{}),r(ee,{children:[t(te,{children:r(l,{direction:"row",spacing:3,children:[t(S,{alignSelf:"center",children:"Request New Account Statement "}),t(oe,{icon:t(be,{}),"aria-label":"new-request",variant:"outline",onClick:()=>{C(e=>[...e,{fund:null,dateType:"Last 1 Month"}])}})]})}),t(se,{}),t(ie,{children:t(l,{spacing:3,children:h.map((e,s)=>{var i,o,f;return r(l,{direction:"column",spacing:3,children:[t(D,{placeholder:"Select Fund",onChange:a=>{const n=[...h];n[s].fund=a.target.value,C(n)},children:(i=d==null?void 0:d.funds)==null?void 0:i.map(a=>{var n,w,c;return t("option",{value:(n=a==null?void 0:a.id)==null?void 0:n._id,children:(w=a==null?void 0:a.id)==null?void 0:w.name},(c=a==null?void 0:a.id)==null?void 0:c._id)})}),r(l,{direction:"row",spacing:3,justifyContent:"space-around",children:[r(l,{direction:"column",spacing:1,children:[t(S,{children:"Range:"}),r(D,{placeholder:"Select Date Range",onChange:a=>{const n=[...h];n[s].dateType=a.target.value,C(n)},children:[t("option",{value:"Last 1 Month",children:"Last 1 Month"}),t("option",{value:"Last 3 Months",children:"Last 3 Months"}),t("option",{value:"Last 6 Months",children:"Last 6 Months"}),t("option",{value:"Last 1 Year",children:"Last 1 Year"}),t("option",{value:"custom",children:"Custom"})]})]}),e.dateType==="custom"&&r(l,{direction:"row",spacing:1,alignSelf:"center",children:[r(l,{spacing:0,children:[t(S,{children:"From:"}),t(B,{type:"date",value:(o=e==null?void 0:e.date)==null?void 0:o.from,onChange:a=>{const n=[...h];n[s].date={...n[s].date,from:a.target.value},C(n)}})]}),r(l,{spacing:0,children:[t(S,{children:"To:"}),t(B,{type:"date",value:(f=e==null?void 0:e.date)==null?void 0:f.to,onChange:a=>{const n=[...h];n[s].date={...n[s].date,to:a.target.value},C(n)}})]})]})]}),t(l,{direction:"row",spacing:3,alignSelf:"end",children:t(b,{colorScheme:"red",onClick:()=>{const a=[...h];a.splice(s,1),C(a)},children:"Discard"})})]},s*2)})})}),t(ae,{children:t(b,{colorScheme:"blue",onClick:G,children:"Submit"})})]})]}),r(xe,{variants:ve,initial:"hidden",animate:"animate",direction:"column",spacing:2,sx:{px:{sm:2,lg:6},pt:4},children:[(y==null?void 0:y.length)===0&&r(l,{direction:"column",spacing:3,justifyContent:"center",alignItems:"center",h:"80vh",children:[t(re,{animationData:ne,autoPlay:!0,loop:!0,style:{height:"60vh",width:"60vw"}}),t(v,{children:"No Statements Requested!"})]}),t(ce,{defaultIndex:[0],children:t(l,{spacing:3,children:y==null?void 0:y.map((e,s)=>{var i,o,f,a,n,w;return r(le,{children:[t(N,{variants:Me,px:8,py:4,rounded:"lg",shadow:"lg",bg:de("white","gray.800"),maxW:"100%",children:t(ue,{_focus:{border:"0px"},children:t(l,{direction:"row",spacing:2,justifyContent:"space-evenly",children:t(l,{ml:2,w:"100%",direction:"row",spacing:4,alignItems:"center",justifyContent:"space-between",children:r(l,{direction:"row",spacing:2,divider:t(he,{}),children:[r(l,{spacing:1,children:[r(v,{size:"md",alignSelf:"center",color:"gray.600",children:[(i=e==null?void 0:e.user)==null?void 0:i.firstName," ",(o=e==null?void 0:e.user)==null?void 0:o.lastName]}),r(S,{size:"sm",alignSelf:"center",color:"gray.600",noOfLines:2,children:["PAN: ",(a=(f=e==null?void 0:e.user)==null?void 0:f.pan)==null?void 0:a.id]})]}),r(S,{color:"gray.600",size:"md",alignSelf:"center",children:["Created At:"," ",pe(e==null?void 0:e.createdAt).format("DD-MM-YYYY")]}),r(S,{color:"gray.500",size:"md",alignSelf:"center",children:["Requested For: ",(n=e==null?void 0:e.requested)==null?void 0:n.length," Statements"]}),t(ge,{size:"lg",colorScheme:"gray",children:e==null?void 0:e.status})]})})})})},e._id),t(me,{pb:4,border:"1px",rounded:"lg",borderTop:"0px",borderColor:"gray.400",children:r(N,{px:2,py:2,children:[t(l,{direction:"column",spacing:3,children:(w=e==null?void 0:e.requested)==null?void 0:w.map((c,Ee)=>{var j,I,k;return r(l,{direction:"row",spacing:3,children:[t(v,{color:"gray.600",fontSize:"sm",children:(j=c==null?void 0:c.fund)==null?void 0:j.name}),r(S,{color:"gray.400",fontSize:"xs",children:["Range: ",c==null?void 0:c.dateType]}),(c==null?void 0:c.dateType)==="custom"&&r(S,{color:"gray.600",fontSize:"sm",children:[(I=c==null?void 0:c.date)==null?void 0:I.from," ","<==>"," ",(k=c==null?void 0:c.date)==null?void 0:k.to]})]},c==null?void 0:c._id)})}),r(l,{direction:"row",spacing:1,pt:4,children:[(e==null?void 0:e.status)==="pending"&&(d==null?void 0:d.isAdmin)&&t(b,{alignSelf:"center",onClick:()=>H(e==null?void 0:e._id),colorScheme:"green",size:"sm",variant:"solid",children:"Complete"}),(e==null?void 0:e.status)==="pending"&&(d==null?void 0:d.isAdmin)&&t(l,{direction:"row",spacing:1,children:(d==null?void 0:d.isAdmin)&&t(b,{onClick:()=>V(e==null?void 0:e._id),colorScheme:"red",size:"sm",variant:"solid",children:"Reject"})})]})]})})]})})})})]}),t(R,{sx:{},children:(z==null?void 0:z.length)>0&&t(Se,{defaultPageSize:A,defaultPage:M,total:500,paginationProps:{display:"flex",justifyContent:"center",marginTop:"2em"},pageNeighbours:1,showQuickJumper:!0,responsive:!0,onChange:e=>_(e),onShowSizeChange:(e,s)=>F(parseInt(s)),showSizeChanger:!0})})]})};export{Ie as default};