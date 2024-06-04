import{r as v,W as y,j as e,B as S,G as L,b as o,c as I,n as P}from"./app-DmqRxiIu.js";import{D as U,P as C}from"./PageTitle-BN4IiloJ.js";import{u as R,S as D,U as N,L as T,P as G,R as r,D as c,I as z,a as w}from"./IconUpload-DJcXPDvx.js";import{I as B}from"./Image-Dibl8nEN.js";import{L as M}from"./LoadingOverlay-BIIiT7r6.js";import{T as _}from"./TextInput-CGbfz0VU.js";import{S as E}from"./Select-Db4dMEDr.js";import{N as O}from"./NumberInput-BvlVKe8s.js";import{I as H}from"./IconX-cbccF7EB.js";import{T as u}from"./Text-Dfu3fWJ2.js";import{S as A}from"./SimpleGrid-BALoqe34.js";import"./iconBase-DizHYFA0.js";import"./index-ChQUk7TW.js";import"./AccordionChevron-NDiPJtmq.js";import"./Menu-KItRysSi.js";import"./use-resolved-styles-api-BlrRsMyN.js";import"./Popover-BliU6b8N.js";import"./DirectionProvider-r1f_A9N0.js";import"./use-disclosure-C_Ssd4Ot.js";import"./get-sorted-breakpoints-DIK6QMLZ.js";import"./index-BURL4FG3.js";import"./ColorSwatch-Cjy1PkOQ.js";import"./ColorPicker-Dk9Lae66.js";import"./Input-klpkudea.js";import"./use-move-Aq8pIR0U.js";import"./clamp-DTmYCdls.js";import"./ActionIcon-ChSDut15.js";import"./createReactComponent-2jTeNtNB.js";import"./InputBase-hC2F_Sl6.js";import"./CheckIcon-DX_7BVpD.js";import"./ScrollArea-BRioxJZT.js";import"./get-base-value-JqT_q0U7.js";const ve=({selectCategoriesData:h,auth:j})=>{const[m,g]=v.useState(""),{data:l,setData:i,post:f,processing:d,errors:a,reset:t}=y({name:"",category_id:"",price:"",image:[],description:""}),k=s=>{s.preventDefault(),f("/dashboard/product",{preserveScroll:!0,onSuccess:()=>{t("name"),t("category_id"),t("price"),t("image"),t("description"),P.show({color:"green",title:"Success notification",message:"Berhasil menambahkan produk baru!"})}})},p=l.image.map((s,n)=>{const x=URL.createObjectURL(s);return e.jsx(B,{src:x,onLoad:()=>URL.revokeObjectURL(x)},n)}),b=R({extensions:[D,N,T,G.configure({placeholder:"Masukkan deskripsi produk"})],content:l.description,onUpdate:({editor:s})=>{i("description",s.getHTML())}});return e.jsxs(U,{authenticatedUser:j.user,children:[e.jsx(C,{children:"Tambah Produk"}),e.jsxs(S,{pos:"relative",children:[e.jsx(M,{visible:d,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),e.jsxs("form",{className:"flex flex-col gap-4 mt-6",onSubmit:k,children:[e.jsx(_,{placeholder:"Masukkan nama produk",label:"Nama Produk",size:"md",value:l.name,onChange:s=>i("name",s.target.value),error:a.name?a.name:!1}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(E,{label:"Kategori",size:"md",placeholder:"Pilih kategori",data:h,value:m?m.value:"",onChange:(s,n)=>{g(n),i("category_id",n.value)},error:a.category_id?a.category_id:!1}),e.jsx(O,{size:"md",label:"Harga",placeholder:"Masukkan harga produk",prefix:"Rp",allowNegative:!1,allowDecimal:!1,thousandSeparator:".",decimalSeparator:",",value:l.price,onChange:s=>i("price",parseInt(s)),error:a.price?a.price:!1})]}),e.jsxs("div",{children:[e.jsx("label",{className:" font-medium",children:"Deskripsi Produk"}),e.jsxs(r,{editor:b,children:[e.jsxs(r.Toolbar,{sticky:!0,stickyOffset:60,children:[e.jsxs(r.ControlsGroup,{children:[e.jsx(r.Bold,{}),e.jsx(r.Italic,{}),e.jsx(r.Underline,{}),e.jsx(r.Strikethrough,{}),e.jsx(r.ClearFormatting,{})]}),e.jsx(r.ControlsGroup,{children:e.jsx(r.H3,{})}),e.jsxs(r.ControlsGroup,{children:[e.jsx(r.BulletList,{}),e.jsx(r.OrderedList,{})]}),e.jsxs(r.ControlsGroup,{children:[e.jsx(r.Link,{}),e.jsx(r.Unlink,{})]}),e.jsxs(r.ControlsGroup,{children:[e.jsx(r.Undo,{}),e.jsx(r.Redo,{})]})]}),e.jsx(r.Content,{})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:" font-medium",children:"Gambar Produk (Maks 5MB)"}),e.jsx(c,{onDrop:s=>i("image",s),onReject:s=>console.log("rejected files",s),maxSize:5*1024**2,accept:["image/png","image/jpeg","image/jpg"],children:e.jsxs(L,{justify:"center",gap:"xl",mih:220,style:{pointerEvents:"none"},className:a.image?"border border-red-400 rounded":"",children:[e.jsx(c.Accept,{children:e.jsx(z,{style:{width:o(52),height:o(52),color:"var(--mantine-color-blue-6)"},stroke:1.5})}),e.jsx(c.Reject,{children:e.jsx(H,{style:{width:o(52),height:o(52),color:"var(--mantine-color-red-6)"},stroke:1.5})}),e.jsx(c.Idle,{children:e.jsx(w,{style:{width:o(52),height:o(52),color:a.image?"var(--mantine-color-red-6)":"var(--mantine-color-dimmed)"},stroke:1.5})}),e.jsxs("div",{children:[e.jsx(u,{size:"xl",inline:!0,c:a.image?"red":"",children:"Drag images here or click to select files"}),e.jsx(u,{size:"sm",c:a.image?"red":"dimmed",inline:!0,mt:7,children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:a.image}),e.jsx(A,{cols:{base:1,sm:4},mt:p.length>0?"xl":0,children:p})]}),e.jsx("div",{children:e.jsx(I,{type:"submit",disabled:!!d,children:"Tambah"})})]})]})]})};export{ve as default};