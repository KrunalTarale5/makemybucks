"use strict";(self.webpackChunkrich_penny_frontend=self.webpackChunkrich_penny_frontend||[]).push([[286],{3286:(e,a,t)=>{t.r(a),t.d(a,{default:()=>_});var n=t(9620),r=t(3875),o=t(4014),i=t(9860),l=t(2832),d=t(7131),s=t(7722),c=t(7313),u=t(2097),v=t(8606),p=t(7154),g=t(8467),f=t(3563),h=t(2389),x=t(5531),C=t(6359),b=t(6417);const m=()=>{var e,a,t,m,_,j,k,w,F,A,D,Z,y,E,P,S,H;(0,C.Q)(C.D.restaurantManagement);const K=(0,g.s0)(),N=(0,i.Z)(),{showAlertDialog:z,hideAlertDialog:I}=(0,p.ij)(),{showSnackbar:R,hideSnackbar:L}=(0,x.Ds)(),B=(0,f.y3)(),O=(0,c.useRef)(null),Y=(0,v.$_)(),q=(0,v.B1)(),[M,Q]=(0,c.useState)({page:1,size:10}),[T,G]=(0,c.useState)({}),W=(0,v.j0)({...M,...T,search:null===(e=O.current)||void 0===e?void 0:e.value}),$=e=>{O.current.value=e,W.refetch()},J=null!==(a=null===(t=W.data)||void 0===t?void 0:t.data.data)&&void 0!==a?a:[],U=[{field:"restaurant_id",renderHeader:()=>"Id",renderCell:e=>{let{row:a}=e;return a.restaurant_id},sortable:!0},{field:"restaurant_name",renderHeader:()=>"Name",renderCell:e=>{let{row:a}=e;return a.restaurant_name},sortable:!0},{field:"location",renderHeader:()=>"Location",renderCell:e=>{let{row:a}=e;return a.location},sortable:!0},{field:"address",renderHeader:()=>"City",renderCell:e=>{let{row:a}=e;return a.address},sortable:!0,tableCellProps:{sx:{maxWidth:150}}},{field:"offer_list",renderHeader:()=>"Active Offer",renderCell:e=>{let{row:a}=e;return a.active_offer?"".concat(a.active_offer,"%"):""},tableCellTypographySx:{paddingLeft:N.spacing(1)}},{field:"qr_assign",renderHeader:()=>"QR Ass",renderCell:e=>{let{row:a}=e;return a.qr_assign},sortable:!0},{field:"status",renderHeader:()=>"Status",renderCell:e=>{let{row:a}=e;const t=B(a.status);return(0,b.jsx)(h.KH,{variant:"subtitle1",sx:t.sx,children:t.lable})},sortable:!0},{field:"action",renderHeader:()=>"Quick Action",renderCell:e=>{let{row:a}=e;return(0,b.jsxs)(l.Z,{flexDirection:"row",gap:1,children:[(0,b.jsx)(r.Z,{iconName:"OpenEye",iconProps:{fill:N.palette.secondary.main,cursor:"pointer",onClick:()=>K("/admin/restaurants/".concat(a.restaurant_id))}}),(0,b.jsx)(d.Z,{disabled:"5"===a.status,sx:{padding:"0px"},children:(0,b.jsx)(r.Z,{iconName:"DashCircle",iconProps:{cursor:"pointer",onClick:()=>(e=>{z({title:"".concat("4"!==e.status?"De-active":"Active"," ").concat(e.restaurant_name,"?"),content:"Are your sure ? You want to ".concat("4"!==e.status?"de-active":"active"," restaurant."),buttons:[{children:"Cancel",variant:"outlined",callback:()=>{I()}},{children:"4"!==e.status?"Yes, Deactivate":"Yes, Activate",variant:"contained",loading:q.isLoading,callback:()=>{q.mutateAsync({request:{restaurant_id:e.restaurant_id,status:"4"!==e.status?"disabled":"active"}}).then((e=>{var a;I(),R({title:"Success!",variant:"sucess",content:null===(a=e.data)||void 0===a?void 0:a.message,onCancel:()=>L()}),Y.refetch(),W.refetch()})).catch((e=>{var a,t;R({title:"Error!",variant:"error",content:null===(a=e.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message,onCancel:()=>L()})}))}}]})})(a)}})}),(0,b.jsx)(r.Z,{iconName:"Pen",iconProps:{cursor:"pointer",onClick:()=>{return e=a.restaurant_id,void z({title:"Edit Restaurant Details",content:"Are your sure you want to edit restaurant Details?",buttons:[{children:"Cancel",variant:"outlined",callback:()=>{I()}},{children:"Yes, Continue",variant:"contained",callback:()=>{K("/admin/restaurants/update/".concat(e)),I()}}]});var e}}})]})}}];return(0,b.jsxs)(l.Z,{gap:1,flexGrow:"inherit",children:[(0,b.jsxs)(l.Z,{flexDirection:"row",gap:12,children:[(0,b.jsxs)(l.Z,{gap:2,flexDirection:"row",children:[(0,b.jsx)(n.fK,{heading:"Total Restaurant",content:null!==(m=null===(_=Y.data)||void 0===_?void 0:_.data.data.added_restaurant_count)&&void 0!==m?m:0,onClick:()=>$("")}),(0,b.jsx)(n.fK,{heading:"Currently Active",content:null!==(j=null===(k=Y.data)||void 0===k?void 0:k.data.data.active_restaurant_count)&&void 0!==j?j:0,sx:{background:"#F5FFF4",borderColor:"#B8E5B6"},onClick:()=>$("active")})]}),(0,b.jsxs)(l.Z,{gap:2,flexDirection:"row",children:[(0,b.jsx)(n.fK,{heading:"Settlement Amount",content:"\u20b9".concat(null!==(w=null===(F=Y.data)||void 0===F?void 0:F.data.data.settlement_amount)&&void 0!==w?w:"NA"),sx:{background:"#F0F6FF",borderColor:"#D3E1F5"}}),(0,b.jsx)(n.fK,{heading:"Investment Amount",content:"\u20b9".concat(null!==(A=null===(D=Y.data)||void 0===D?void 0:D.data.data.total_investment)&&void 0!==A?A:"NA"),sx:{background:"#F0F6FF",borderColor:"#D3E1F5"}})]}),(0,b.jsxs)(l.Z,{gap:2,flexDirection:"row",children:[(0,b.jsx)(n.fK,{heading:"Pending Approval",content:null!==(Z=null===(y=Y.data)||void 0===y?void 0:y.data.data.pending_approval_count)&&void 0!==Z?Z:0,sx:{background:"#FFF7E8",borderColor:"#F6EAD4"},onClick:()=>$("approval pending")}),(0,b.jsx)(n.fK,{heading:"Pending Activation",content:null!==(E=null===(P=Y.data)||void 0===P?void 0:P.data.data.pending_activation_count)&&void 0!==E?E:0,sx:{background:"#FFF7E8",borderColor:"#F6EAD4"},onClick:()=>$("activation pending")})]})]}),(0,b.jsx)(l.Z,{gap:2,flexDirection:"row",alignSelf:"self-end",children:(0,b.jsx)(s.Z,{size:"small",placeholder:"Search...",autoComplete:"off",InputProps:{startAdornment:(0,b.jsx)(r.Z,{iconName:"Search"}),endAdornment:(0,b.jsx)(d.Z,{size:"small",sx:{padding:"4px"},onClick:()=>{var e,a;(null!==(e=O.current)&&void 0!==e&&e.value||""!==(null===(a=O.current)||void 0===a?void 0:a.value))&&(O.current.value="",W.refetch())},children:(0,b.jsx)(r.Z,{iconName:"Cancel"})})},inputRef:O,onKeyDown:e=>{"Enter"===e.key&&W.refetch()},sx:{".MuiInputBase-input":{paddingLeft:1},".MuiOutlinedInput-notchedOutline":{borderColor:"#E9ECEF"}}})}),(0,b.jsxs)(l.Z,{gap:2,flexGrow:"inherit",children:[(0,b.jsx)(o.Z,{rows:J,columns:U,rowId:e=>e.id,tableProps:{size:"small",stickyHeader:!1},tableRowProps:{hover:!0},onSortChange:e=>{G({sort_by:null===e||void 0===e?void 0:e.field,order:null===e||void 0===e?void 0:e.order})},loading:W.isLoading}),(0,b.jsx)(u.Z,{page:M.page,size:null===(S=W.data)||void 0===S?void 0:S.data.size,totalPages:null===(H=W.data)||void 0===H?void 0:H.data.pagesTotal,onPageChange:e=>{Q({...M,page:e})}})]})]})},_=(0,c.memo)(m)}}]);