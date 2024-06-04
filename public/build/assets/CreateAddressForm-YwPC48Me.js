import{W as m,j as e,B as c,c as u,n as p}from"./app-DmqRxiIu.js";import{L as g}from"./LoadingOverlay-BIIiT7r6.js";import{T as o}from"./TextInput-CGbfz0VU.js";import{T as h}from"./Textarea-CqDOet4s.js";import{N as _}from"./NumberInput-BvlVKe8s.js";import{C as v}from"./Checkbox-DkngAIMX.js";import"./InputBase-hC2F_Sl6.js";import"./Input-klpkudea.js";import"./use-resolved-styles-api-BlrRsMyN.js";import"./clamp-DTmYCdls.js";import"./CheckIcon-DX_7BVpD.js";const B=()=>{const{data:r,setData:l,post:i,processing:n,errors:s,reset:t}=m({recipient_name:"",phone_number:"",address_name:"",country:"",state:"",city:"",postal_code:"",additional_detail:"",is_default:!1}),d=a=>{a.preventDefault(),i("/addresses",{preserveScroll:!0,onSuccess:()=>{t("recipient_name"),t("phone_number"),t("address_name"),t("country"),t("state"),t("city"),t("postal_code"),t("additional_detail"),t("is_default"),p.show({color:"green",title:"Success notification",message:"Berhasil menambahkan alamat baru!"})}})};return console.log(r),e.jsx(e.Fragment,{children:e.jsxs(c,{pos:"relative",children:[e.jsx(g,{visible:n,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(o,{placeholder:"Masukkan nama penerima",label:"Nama Penerima",size:"lg",value:r.recipient_name,onChange:a=>l("recipient_name",a.target.value),error:s.recipient_name?s.recipient_name:!1}),e.jsx(o,{placeholder:"+6289167761221",label:"Nomor Handphone",size:"lg",value:r.phone_number,onChange:a=>l("phone_number",a.target.value),error:s.phone_number?s.phone_number:!1})]}),e.jsx("div",{className:"mt-4",children:e.jsx(h,{placeholder:"Masukkan alamat",label:"Alamat",size:"lg",value:r.address_name,onChange:a=>l("address_name",a.currentTarget.value),error:s.address_name?s.address_name:!1})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-4",children:[e.jsx(o,{placeholder:"Masukkan negara",label:"Negara",size:"lg",value:r.country,onChange:a=>l("country",a.target.value),error:s.country?s.country:!1}),e.jsx(o,{placeholder:"Masukkan provinsi",label:"Provinsi",size:"lg",value:r.state,onChange:a=>l("state",a.target.value),error:s.state?s.state:!1}),e.jsx(o,{placeholder:"Masukkan kota",label:"Kota",size:"lg",value:r.city,onChange:a=>l("city",a.target.value),error:s.city?s.city:!1})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[e.jsx(_,{placeholder:"Masukkan kode pos",label:"Kode Pos",size:"lg",allowNegative:!1,allowDecimal:!1,value:r.postal_code,onChange:a=>l("postal_code",parseInt(a)),error:s.postal_code?s.postal_code:!1}),e.jsx(o,{placeholder:"Masukkan detail tambahan",label:"Detail Tambahan (optional)",size:"lg",value:r.additional_detail,onChange:a=>l("additional_detail",a.target.value),error:s.additional_detail?s.additional_detail:!1})]}),e.jsx("div",{className:"mt-6",children:e.jsx(v,{label:"Jadikan alamat utama",size:"md",checked:r.is_default,onChange:a=>l("is_default",a.currentTarget.checked)})}),e.jsx("div",{className:"mt-6",children:e.jsx(u,{type:"submit",size:"md",children:"Tambah"})})]})]})})};export{B as default};