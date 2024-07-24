"use strict";(self.webpackChunkrich_penny_frontend=self.webpackChunkrich_penny_frontend||[]).push([[483],{8593:(e,t,n)=>{n.d(t,{J:()=>r,Z:()=>l});var a=n(2832),o=n(7722),i=n(6417);const r={},l=e=>{const t=t=>{var n;"Enter"===t.key&&(6===Object.keys(e.otp).length&&(null===(n=e.onEnter)||void 0===n||n.call(e,e.otp)))};return(0,i.jsx)(a.Z,{gap:1,flexDirection:"row",alignSelf:"center",children:Array.from(Array(6).keys()).flatMap(((n,a)=>{var r,l;return(0,i.jsx)(o.Z,{id:"otp-erify-".concat(a),variant:"outlined",color:"primary",autoComplete:"off",name:"usename",type:"text",inputMode:"numeric",onChange:(l=a,t=>{var n,a;if(""===(null===(n=t.target.value)||void 0===n?void 0:n.trim()))e.setOtp({...e.otp,[l]:""}),null===(a=document.getElementById("otp-erify-".concat(l-1)))||void 0===a||a.focus();else if(!isNaN(Number(t.target.value))){var o,i;1===(null===(o=t.target.value)||void 0===o?void 0:o.trim().length)&&(e.setOtp({...e.otp,[l]:Number(t.target.value)}),null===(i=document.getElementById("otp-erify-".concat(l+1)))||void 0===i||i.focus())}}),value:null!==(r=e.otp[a])&&void 0!==r?r:"",sx:{".MuiInputBase-input":{textAlign:"center",paddingY:3,fontSize:35,paddingX:0},".MuiInputBase-root":{height:68,fontFamily:"Fira Sans"},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"12px"}},inputProps:{inputMode:"numeric"},onKeyDown:t})}))})}},5043:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(9860),o=n(2832),i=n(5908),r=n(9289),l=n(7825),d=n(7131),s=n(3131),c=n(301),u=n(7313),p=n(2389),m=n(3875),h=n(2703),x=n(6417);const g=e=>{var t,n;const s=(0,a.Z)();return(0,x.jsxs)(o.Z,{flexGrow:1,sx:{background:s.palette.background.default},children:[e.heading&&(0,x.jsx)(f,{children:(0,x.jsx)(i.Z,{sx:{background:s.palette.background.default,height:s.spacing(15),placeContent:"flex-end",boxShadow:"none",flexFlow:"row",...e.subHeading&&{marginTop:2}},children:(0,x.jsxs)(r.Z,{sx:{paddingX:4,gap:1},component:l.Z,maxWidth:"sm",children:[e.handleBack&&(0,x.jsx)(d.Z,{sx:{paddingY:1.5},onClick:e.handleBack,children:(0,x.jsx)(m.Z,{iconName:"ArrowBack",iconProps:{fill:s.palette.common.white}})}),(0,x.jsxs)(o.Z,{flexDirection:"column",children:[e.subHeading&&(0,x.jsx)(p.bY,{variant:"subtitle1",sx:{color:s.palette.common.primaryGreyText},children:e.subHeading}),(0,x.jsx)(p.bY,{variant:"h4",fontSize:"32px",fontWeight:600,sx:{color:s.palette.common.white},children:e.heading})]})]})})}),(0,x.jsx)(l.Z,{maxWidth:"sm",sx:{paddingTop:16,paddingBottom:3,paddingX:4,height:"calc(100% - ".concat(s.spacing(10),")"),overflow:"auto",display:"flex",flexDirection:"column"},children:e.children}),e.controlButtonProps&&(0,x.jsx)(i.Z,{position:"fixed",sx:{top:"auto",bottom:0,backgroundColor:s.palette.background.default,backgroundImage:"none",boxShadow:"none"},children:(0,x.jsx)(r.Z,{component:l.Z,maxWidth:"sm",sx:{height:s.spacing(10),".MuiTabs-flexContainer":{justifyContent:"space-around"},justifyContent:"space-around"},children:e.controlButtonProps&&(0,x.jsx)(h.Z,{variant:"contained",size:"large",color:"primary",fullWidth:!0,onClick:null===(t=e.controlButtonProps)||void 0===t?void 0:t.onClick,loading:e.controlButtonProps.loading,disabled:e.controlButtonProps.disabled,sx:{height:64,alignSelf:"center",borderRadius:"14px"},children:(0,x.jsx)(p.bY,{variant:"h6",fontWeight:600,letterSpacing:.36,children:null===(n=e.controlButtonProps)||void 0===n?void 0:n.content})})})})]})},v=(0,u.memo)(g);function f(e){const t=(0,s.Z)({target:window||void 0});return(0,x.jsx)(c.Z,{appear:!1,direction:"down",in:!t,children:e.children})}},1525:(e,t,n)=>{n.d(t,{D5:()=>c,Ld:()=>l,eb:()=>s,f_:()=>d,km:()=>r,qQ:()=>u,u$:()=>i});var a=n(5662),o=n(56);const i=e=>(0,o.useQuery)(["get_deeplink"],(()=>(0,a.Z)({method:"GET",url:"/get_deeplink",params:{qr_id:e}})),{retry:0}),r=()=>(0,o.useMutation)((e=>(0,a.Z)({method:"POST",url:"/orderId_generate/",data:{...e.request,currency:"INR"}}))),l=e=>(0,o.useQuery)(["get_transaction_details"],(()=>(0,a.Z)({method:"GET",url:"/get_transaction_details/".concat(e,"/")}))),d=()=>(0,o.useMutation)((e=>{const t=new FormData;return Object.keys(e.request).forEach((n=>{t.append(n,e.request[n])})),(0,a.Z)({method:"POST",url:"/verify_payment/",data:t})})),s=()=>(0,o.useMutation)((e=>(0,a.Z)({method:"POST",url:"/update_save_rating/",data:{...e.request}}))),c=()=>(0,o.useMutation)((e=>(0,a.Z)({method:"POST",url:"/add_cash_transaction/",data:e.request}))),u=()=>(0,o.useMutation)((e=>(0,a.Z)({method:"POST",url:"/verify_cash_transaction/",data:e.request})))},483:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C,loadPaymentGateway:()=>P});var a=n(3875),o=n(2030),i=n(2389),r=n(5420),l=n(9860),d=n(2832),s=n(9536),c=n(3827),u=n(6677),p=n(7313),m=n(5043),h=n(4832),x=n(491),g=n(1525),v=n(6417);const f=e=>{var t,n,o,s;const c=(0,l.Z)(),u=(0,g.eb)();return(0,v.jsx)(m.Z,{children:(0,v.jsxs)(d.Z,{gap:1,flexGrow:1,justifyContent:"space-between",sx:{backgroundSize:"contain",backgroundImage:"url(".concat(x.Z,")"),backgroundRepeat:"no-repeat"},children:[(0,v.jsxs)(d.Z,{gap:1,children:[(0,v.jsx)(d.Z,{alignSelf:"center",paddingTop:"30vh",children:(0,v.jsx)(a.Z,{iconName:"SuccessLogo",iconProps:{fill:c.palette.success.main}})}),(0,v.jsx)(i.bY,{variant:"h4",textAlign:"center",fontWeight:600,sx:{color:c.palette.common.white},children:"Payment Successful"}),(0,v.jsx)(i.bY,{variant:"subtitle1",textAlign:"center",sx:{color:c.palette.common.primaryGreyText},children:"Your payment is all done!"})]}),(0,v.jsxs)(d.Z,{flex:"auto",sx:{background:c.palette.common.white,borderRadius:"32px"},alignItems:"center",justifyContent:"space-around",maxHeight:377,children:[(0,v.jsxs)(d.Z,{justifyContent:"space-around",alignItems:"center",gap:"12px",children:[(0,v.jsx)(r.Z,{fieldName:"restaurant_img",sx:{placeContent:"flex-end",height:68,width:68,borderRadius:"16px",justifyContent:"center",alignItems:"center"},file:null!==(t=null===(n=e.data)||void 0===n?void 0:n.restaurant_profile)&&void 0!==t?t:""}),(0,v.jsx)(i.bY,{variant:"h4",fontSize:24,sx:{color:c.palette.common.secondaryGreyText},children:null===(o=e.data)||void 0===o?void 0:o.restaurant_name}),(0,v.jsxs)(i.bY,{variant:"h4",fontWeight:600,fontSize:32,sx:{color:c.palette.common.secondaryGreyText,display:"flex",alignItems:"center",alignSelf:"center",gap:1},children:[(0,v.jsx)(a.Z,{iconName:"RupeeV3",iconProps:{stroke:"#1D1D22"}}),null===(s=e.data)||void 0===s?void 0:s.amount]}),(0,v.jsx)(i.bY,{variant:"subtitle1",sx:{color:"#646470"},children:"Thank You, Visit Again!"})]}),(0,v.jsxs)(d.Z,{alignItems:"center",gap:"12px",children:[(0,v.jsx)(i.bY,{variant:"subtitle1",sx:{color:"#646470"},children:"RATE US"}),(0,v.jsx)(h.Z,{size:"large",sx:{gap:1},emptyIcon:(0,v.jsx)(a.Z,{iconName:"StarV2"}),icon:(0,v.jsx)(a.Z,{iconName:"StarV2",iconProps:{fill:"gold"}}),onChange:(t,n)=>{var a,o;u.mutate({request:{rating:String(n),restaurant_id:null!==(a=null===(o=e.data)||void 0===o?void 0:o.restaurant_id)&&void 0!==a?a:""}})}})]})]})]})})},y=(0,p.memo)(f);var b=n(8467),j=n(2135),Z=n(7154),_=n(8593);const k={amount:""},S={amount:""},w=()=>{var e,t,n;const h=(0,l.Z)(),x=(0,b.s0)(),[f]=(0,j.lr)(),{showAlertDialog:w,hideAlertDialog:C}=(0,Z.ij)(),T=(0,g.u$)(null===f||void 0===f?void 0:f.get("key")),I=(0,g.km)(),Y=(0,g.f_)(),E=(0,g.D5)(),B=(0,g.qQ)(),[O,z]=(0,p.useState)("online"),[M,N]=(0,p.useState)(""),[G,q]=(0,p.useState)(_.J),[D,A]=(0,p.useState)(k),[R,W]=(0,p.useState)(S),F=null===(e=T.data)||void 0===e?void 0:e.data.data,V=Boolean(M),L=()=>{var e,t;E.mutateAsync({request:{amount:D.amount,restaurant_id:null!==(e=null===(t=T.data)||void 0===t?void 0:t.data.data.restaurant_id)&&void 0!==e?e:""}}).then((e=>{var t;N(e.data.transaction_id),w({title:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,buttons:[{children:"ok",variant:"outlined",callback:()=>{C()}}]})})).catch((e=>{var t,n;w({title:null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message,buttons:[{children:"ok",variant:"outlined",callback:()=>{C()}}]})}))},H=()=>{var e,t;I.mutateAsync({request:{amount:D.amount,restaurant_id:null!==(e=null===(t=T.data)||void 0===t?void 0:t.data.data.restaurant_id)&&void 0!==e?e:""}}).then((e=>{var t,n,a,o,i,r;e.data.order_id;const l={key_id:"rzp_test_bKbGnqnewD4zgf",amount:100*Number(e.data.amount),callback_url:"https://api.makemybucks.com/verify_payment_new/?order_id="+"".concat(e.data.order_id)+"&restaurant_id="+"".concat(null!==(t=null===(n=T.data)||void 0===n?void 0:n.data.data.restaurant_id)&&void 0!==t?t:"")+"&amount="+"".concat(e.data.amount)+"&currency=INR&user_id="+"".concat(e.data.user_id)+"&payment_type=online",name:"",description:"","prefill[email]":"","prefill[contact]":e.data.phone_no,order_id:e.data.order_id},d=document.createElement("form");d.method="POST",d.action="https://api.razorpay.com/v1/checkout/embedded";const s=document.createElement("input");s.type="hidden",s.name="key_id",s.value=null===(a=l.key_id)||void 0===a?void 0:a.toString(),d.appendChild(s);const c=document.createElement("input");c.type="hidden",c.name="amount",c.value=null===(o=l.amount)||void 0===o?void 0:o.toString(),d.appendChild(c);const u=document.createElement("input");u.type="hidden",u.name="order_id",u.value=null===(i=l.order_id)||void 0===i?void 0:i.toString(),d.appendChild(u);const p=document.createElement("input");p.type="hidden",p.name="callback_url",p.value=null===(r=l.callback_url)||void 0===r?void 0:r.toString(),d.appendChild(p);const m=document.createElement("input");m.type="hidden",m.name="prefill[email]",m.value="lksh7264@gmail.com",d.appendChild(m);const h=document.createElement("input");h.type="hidden",h.name="prefill[contact]",h.value=e.data.phone_no.toString(),d.appendChild(h),document.body.appendChild(d),d.submit()})).catch((e=>{var t,n;w({title:null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message,buttons:[{children:"ok",variant:"outlined",callback:()=>{C()}}]})}))},Q=()=>{B.mutate({request:{cash_otp:Object.values(G).join(""),transaction_id:M}})};return(0,p.useEffect)((()=>{P()}),[]),Y.isSuccess||B.isSuccess?(0,v.jsx)(y,{data:{amount:D.amount,...null===T||void 0===T||null===(t=T.data)||void 0===t?void 0:t.data.data}}):(0,v.jsx)(m.Z,{controlButtonProps:{content:V?"Verify OTP":"Proceed to Pay",onClick:V?Q:()=>{"online"===O?H():L()},loading:I.isLoading||Y.isLoading,disabled:T.isError},handleBack:()=>{V?(N(""),q({})):x("/payments?key=".concat(null===f||void 0===f?void 0:f.get("key")))},heading:V?(0,v.jsx)(i.bY,{fontSize:"18px",fontWeight:600,letterSpacing:.64,children:"Back"}):(0,v.jsx)(i.bY,{variant:"h4",fontWeight:600,letterSpacing:.64,children:"Paying to"}),children:V?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(d.Z,{gap:5,children:[(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(i.bY,{variant:"h4",fontWeight:600,sx:{color:h.palette.common.white},children:"Verify cash Payment"}),(0,v.jsx)(i.bY,{variant:"subtitle2",sx:{color:h.palette.common.primaryGreyText},display:"flex",gap:1,children:"OTP Sent to Restaurant Manager"})]}),(0,v.jsx)(_.Z,{otp:G,setOtp:q,onEnter:Q})]})}):(0,v.jsxs)(d.Z,{gap:5,paddingTop:"100px",flexGrow:1,children:[(0,v.jsxs)(d.Z,{alignItems:"center",gap:1,children:[(0,v.jsx)(r.Z,{fieldName:"restaurant_img",sx:{placeContent:"flex-end",height:68,width:68,borderRadius:"16px",justifyContent:"center",alignItems:"center"},file:null!==(n=null===F||void 0===F?void 0:F.restaurant_profile)&&void 0!==n?n:""}),(0,v.jsx)(i.bY,{variant:"h4",fontWeight:600,fontSize:24,sx:{color:h.palette.common.white},children:null===F||void 0===F?void 0:F.restaurant_name}),(0,v.jsx)(i.bY,{variant:"subtitle1",sx:{color:h.palette.common.primaryGreyText},children:null===F||void 0===F?void 0:F.address})]}),(0,v.jsxs)(d.Z,{alignItems:"center",gap:1,children:[(0,v.jsx)(o.Z,{fieldName:"amount",value:D.amount,fieldType:"number",fieldProps:{placeholder:"0",size:"medium",inputProps:{inputMode:"numeric"},InputProps:{startAdornment:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Z,{iconName:"RupeeV3",iconProps:{width:"50px"}}),(0,v.jsx)(s.Z,{orientation:"vertical",sx:{borderColor:h.palette.common.white,height:"62px",padding:"inherit"}})]})},error:Boolean(R.amount),helperText:R.amount,sx:{width:130+30*D.amount.length,"& .MuiInputBase-input":{height:44,fontSize:64,fontWeight:900,fontFamily:"Fira Sans"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent !important"},"& .MuiOutlinedInput-input":{paddingLeft:"inherit"}}},onChange:(e,t,n)=>{let a={...D,[e]:t};if("number"===n){const n=(0,u.oE)(String(t));a={...D,[e]:n?t:D[e]}}else a={...D,[e]:t};A(a),W({...R,[e]:(0,u.hz)(t)})}}),(0,v.jsx)(i.bY,{variant:"h6",sx:{color:h.palette.common.primaryGreyText},children:"Enter amount"})]}),(0,v.jsxs)(d.Z,{marginTop:"auto",children:[(0,v.jsx)(i.bY,{variant:"subtitle1",sx:{color:h.palette.common.primaryGreyText},children:"Payment mode"}),(0,v.jsxs)(d.Z,{bgcolor:"#333335",borderRadius:"16px",padding:3,gap:3,children:[(0,v.jsxs)(d.Z,{onClick:()=>z("online"),children:[(0,v.jsxs)(d.Z,{flexDirection:"row",justifyContent:"space-between",children:[(0,v.jsx)(i.bY,{fontSize:"18px",sx:{color:h.palette.common.white},children:"Online"}),(0,v.jsx)(c.Z,{sx:{paddingTop:0},checked:"online"===O})]}),(0,v.jsx)(a.Z,{iconName:"UPIList"})]}),(0,v.jsx)(s.Z,{sx:{borderColor:"#515152"}}),(0,v.jsxs)(d.Z,{flexDirection:"row",justifyContent:"space-between",onClick:()=>z("cash"),children:[(0,v.jsx)(i.bY,{fontSize:"18px",sx:{color:h.palette.common.white},children:"Cash"}),(0,v.jsx)(c.Z,{sx:{paddingTop:0},checked:"cash"===O})]})]})]})]})})},C=(0,p.memo)(w),P=()=>new Promise((e=>{const t=document.createElement("script");t.src="https://checkout.razorpay.com/v1/checkout.js",t.type="text/javascript",t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},document.head.appendChild(t)}))}}]);