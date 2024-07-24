"use strict";(self.webpackChunkrich_penny_frontend=self.webpackChunkrich_penny_frontend||[]).push([[605],{2030:(e,l,t)=>{t.d(l,{Z:()=>z});var i=t(7313),n=t(9860),a=t(2832),r=t(1113),o=t(3882),s=t(5765),d=t(4758),u=t(7722),m=t(5480),c=t(1727),p=t(7131),v=t(3208),h=t(9550),x=t(302),f=t(7426),g=t(816),P=t.n(g),y=t(3875),b=t(5420),C=t(2389),N=t(3563),j=t(8467),T=t(8173),Z=t(6417);const w=e=>{var l,t,g,w,z,k,O,W,A,S,I;const B=(0,j.TH)(),F=(0,N.yt)(document.getElementById("admin-outlet")),[R,E]=(0,i.useState)(!1),$=(0,n.Z)(),_=B.pathname.includes("/".concat(T.Vh,"/")),[q,H]=(0,i.useState)(null),[M,Y]=(0,i.useState)(0);return(0,i.useEffect)((()=>{q&&Y((()=>{let e=0;var l,t,i;return e=F?null!==(l=Number(null===q||void 0===q?void 0:q.getBoundingClientRect().top)-Number(null===(t=document.getElementById("autocomplete-popper"))||void 0===t?void 0:t.getBoundingClientRect().height))&&void 0!==l?l:0:null!==(i=Number(null===q||void 0===q?void 0:q.getBoundingClientRect().top)+50)&&void 0!==i?i:0,e})())}),[q]),(0,Z.jsxs)(a.Z,{gap:1,className:"inputField-root",sx:{position:"relative",...null===(l=e.fieldProps)||void 0===l?void 0:l.sx},children:[!1!==e.showLabel&&(0,Z.jsxs)(r.Z,{variant:"subtitle1",display:"flex",gap:.5,children:[null===(t=e.fieldProps)||void 0===t?void 0:t.label,(null===(g=e.fieldProps)||void 0===g?void 0:g.required)&&(0,Z.jsx)(r.Z,{className:"required",variant:"subtitle1",sx:{color:$.palette.error.main},children:"*"})]}),"date"===e.fieldType&&(0,Z.jsx)(v._,{dateAdapter:f.Q,children:(0,Z.jsx)(h.C,{components:["DatePicker"],sx:{flexDirection:"column-reverse !important",overflow:"hidden",padding:"inherit"},children:(0,Z.jsx)(x.M,{sx:{flex:"auto",".MuiInputBase-input":{paddingY:1}},value:e.value,onChange:l=>{var t;null===(t=e.onChange)||void 0===t||t.call(e,e.fieldName,P()(l).toISOString(),e.fieldType,l)}})})}),("select"===e.fieldType||"multple-select"===e.fieldType)&&(0,Z.jsx)(o.Z,{disabled:null===(w=e.fieldProps)||void 0===w?void 0:w.disabled,multiple:"multple-select"===e.fieldType,getOptionLabel:e=>{var l;return null!==(l=e.label)&&void 0!==l?l:""},options:null!==(z=null===(k=e.fieldProps)||void 0===k?void 0:k.options)&&void 0!==z?z:[],disableCloseOnSelect:"multple-select"===e.fieldType,value:e.value,defaultValue:e.value,isOptionEqualToValue:(e,l)=>(null===e||void 0===e?void 0:e.value)===(null===l||void 0===l?void 0:l.value),renderOption:(l,t,i)=>{let{selected:n}=i;return(0,Z.jsxs)(s.Z,{...l,disableGutters:!0,children:["multple-select"===e.fieldType&&(0,Z.jsx)(d.Z,{checked:n,sx:{marginRight:1}}),t.label]})},renderInput:l=>(0,Z.jsx)(u.Z,{...l,size:"small",...e.fieldProps,name:e.fieldName,label:"",onClick:e=>H(e.currentTarget)}),ChipProps:{color:"primary",size:"small"},onChange:(l,t,i,n)=>{var a;null===(a=e.onChange)||void 0===a||a.call(e,e.fieldName,t,e.fieldType,{event:l,reason:i,details:n})},onClose:()=>H(null),componentsProps:B.pathname.includes("/sub-admin/")?void 0:{popper:{id:"autocomplete-popper",className:"delayedShow",sx:{maxHeight:"100px",visibility:"hidden",inset:"0px auto auto 0px !important",transform:"translate(".concat(null!==(O=null===q||void 0===q?void 0:q.getBoundingClientRect().x)&&void 0!==O?O:0,"px, ").concat(M,"px) !important")}}}}),"upload"===e.fieldType&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(b.Z,{fieldName:e.fieldName,sx:{gap:1.5,alignItems:"center",placeContent:"center"},file:e.value,onChange:l=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.fieldName,l.target.value,e.fieldType,l)},children:[(0,Z.jsx)(y.Z,{iconName:"Upload"}),(0,Z.jsx)(C.KH,{variant:"subtitle1",sx:{color:$.palette.common.secondaryGreyText},children:"Click to Upload"})]}),(null===(W=e.fieldProps)||void 0===W?void 0:W.helperText)&&(0,Z.jsx)(m.Z,{sx:{color:$.palette.error.main,marginX:"14px",marginTop:"4px"},children:null===(A=e.fieldProps)||void 0===A?void 0:A.helperText})]}),(void 0===e.fieldType||"text"===e.fieldType||"number"===e.fieldType||"mobile-number"===e.fieldType)&&(0,Z.jsx)(u.Z,{size:"small",InputProps:{..."password"===(null===(S=e.fieldProps)||void 0===S?void 0:S.type)&&{endAdornment:(0,Z.jsx)(c.Z,{position:"end",children:(0,Z.jsx)(p.Z,{size:"small",onClick:()=>E(!R),sx:{color:"white"},children:(0,Z.jsx)(y.Z,{iconName:R?"CloseEye":"OpenEye",iconProps:{fill:_?$.palette.common.secondaryGreyText:"white"}})})})}},...e.fieldProps,name:e.fieldName,value:e.value,onChange:l=>{var t;null===(t=e.onChange)||void 0===t||t.call(e,e.fieldName,l.target.value,e.fieldType,l)},label:"",type:"password"===(null===(I=e.fieldProps)||void 0===I?void 0:I.type)?R?"text":"password":"text"}),e.addons&&e.addons]})},z=(0,i.memo)(w)},5420:(e,l,t)=>{t.d(l,{Z:()=>o});var i=t(1806),n=t(7313),a=t(6417);const r=e=>{var l;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("label",{htmlFor:"attatch-files-".concat(e.fieldName),children:(0,a.jsxs)(i.Z,{className:"uploader-container",display:"flex",...e,sx:{...e.onChange&&{cursor:"pointer"},...e.sx,position:"relative",userSelect:"none","& img":{borderRadius:"inherit"}},children:[e.onChange&&(0,a.jsx)("input",{id:"attatch-files-".concat(e.fieldName),name:"attatch-files-".concat(e.fieldName),accept:e.acceptFiles,style:{opacity:0,position:"absolute",width:"inherit",height:"inherit",...void 0!==e.onChange&&{cursor:"pointer"}},type:"file",onChange:e.onChange,onClick:e=>e.currentTarget.value=""}),e.file?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"string"===typeof e.file?e.file:URL.createObjectURL(null===(l=e.file)||void 0===l?void 0:l[0]),alt:"picture",width:"100%",height:"100%"}),e.overlay]}):e.children]})})})},o=(0,n.memo)(r)},8173:(e,l,t)=>{t.d(l,{Vh:()=>a,ks:()=>n,tq:()=>i,x1:()=>r});t(2964);const i=()=>![/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((e=>navigator.userAgent.match(e))),n=(e,l,t)=>(e-1)*l+1+t,a="partner",r=e=>Math.max(...e)>5?5:Math.max(...e)},6677:(e,l,t)=>{t.d(l,{$z:()=>R,CZ:()=>U,DL:()=>B,E2:()=>$,IZ:()=>k,Ii:()=>A,Ix:()=>G,Mj:()=>y,NG:()=>H,OR:()=>T,OX:()=>O,Ol:()=>X,QN:()=>v,SO:()=>b,Tn:()=>N,VN:()=>W,W9:()=>_,Xy:()=>L,Y0:()=>w,Yb:()=>S,Yu:()=>g,ac:()=>Y,ap:()=>j,ce:()=>Q,d3:()=>E,ed:()=>h,f9:()=>P,fX:()=>Z,gO:()=>V,gk:()=>f,hz:()=>q,jp:()=>r,mK:()=>c,oE:()=>o,oH:()=>m,pA:()=>I,rg:()=>M,sb:()=>F,uo:()=>u,vH:()=>x,vw:()=>p,yM:()=>s,yh:()=>z,zO:()=>d,zo:()=>C});const i=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,n=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/gm,a=/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,r=e=>!isNaN(Number(e))&&/^$|^\d+$/.test(e),o=e=>!isNaN(Number(e)),s=e=>r(e)&&e.length<=10,d=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter user name.",u=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter password.",m=e=>null!==e&&void 0!==e&&e.trim()?i.test(e)?"":"Please enter valid email id.":"Please enter email id.",c=(e,l)=>null!==e&&void 0!==e&&e.trim()?i.test(e)?e!==l?"Your email id is not match.":"":"Please enter valid email id.":"Please enter email id.",p=(e,l)=>null!==e&&void 0!==e&&e.trim()?e!==l?"Your password is not match.":"":"Please re-enter password.",v=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter flat no.",h=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter street name.",x=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter city.",f=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter pincode.",g=e=>("string"!==typeof e||null!==e&&void 0!==e&&e.trim())&&e?"":"Please state state.",P=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter first name.",y=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter last name.",b=e=>null!==e&&void 0!==e&&e.trim()?e.startsWith("6")||e.startsWith("7")||e.startsWith("8")||e.startsWith("9")?10!==e.length?"Please enter valid contact number.":"":"Contact number should start with 6, 7, 8, 9.":"Please enter mobile number.",C=e=>null!==e&&void 0!==e&&e.trim()?e.startsWith("6")||e.startsWith("7")||e.startsWith("8")||e.startsWith("9")?10!==e.length?"Please enter valid contact number .":"":"Contact number should start with 6, 7, 8, 9.":"Please enter personal number.",N=e=>null!==e&&void 0!==e&&e.trim()?12!==e.length?"Please enter valid addhar Number .":"":"Please enter addhar Number .",j=e=>e&&0!==(null===e||void 0===e?void 0:e.length)?"":"Please upload image",T=e=>("string"!==typeof e||null!==e&&void 0!==e&&e.trim())&&e?"":"Please select role",Z=e=>("string"!==typeof e||null!==e&&void 0!==e&&e.trim())&&e?"":"Please select work locatiom",w=e=>null!==e&&void 0!==e&&e.trim()?e.startsWith("6")||e.startsWith("7")||e.startsWith("8")||e.startsWith("9")?10!==e.length?"Please enter valid phone number .":"":"Contact number should start with 6, 7, 8, 9.":"Please enter phone number .",z=e=>null!==e&&void 0!==e&&e.trim()?a.test(e)?"":"Please enter valid GST number.":"Please enter gst number.",k=e=>null!==e&&void 0!==e&&e.trim()?n.test(e)?"":"Please enter valid pan number.":"Please enter pan number.",O=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter fssai no.",W=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter account holder name.",A=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter bank name.",S=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter account number.",I=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter IFSC code.",B=e=>("string"!==typeof e||null!==e&&void 0!==e&&e.trim())&&e?"":"Please select category.",F=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter qr received.",R=e=>"string"!==typeof e||null!==e&&void 0!==e&&e.trim()?e?"":"Please select executive.":"Please select executive .",E=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter FAQ quetion.",$=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter FAQ answer.",_=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter offer list.",q=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter amount.",H=e=>null!==e&&void 0!==e&&e.trim()?"":"Please Type Heading.",M=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter information text.",Y=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter message body.",G=e=>("string"!==typeof e||null!==e&&void 0!==e&&e.trim())&&e?"":"Please select body type.",L=e=>"string"!==typeof e||null!==e&&void 0!==e&&e.trim()?e?"":"Please select restaurant type.":"Please select hours.",V=e=>"string"!==typeof e||null!==e&&void 0!==e&&e.trim()?e?"":"Please select restaurant type.":"Please select minute.",Q=e=>"string"!==typeof e||null!==e&&void 0!==e&&e.trim()?e?"":"Please select restaurant type.":"Please select am & pm.",U=e=>null!==e&&void 0!==e&&e.trim()?"":"Please select date & month.",X=e=>null!==e&&void 0!==e&&e.trim()?"":"Please enter name."}}]);