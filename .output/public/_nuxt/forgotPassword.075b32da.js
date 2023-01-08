import{u as p}from"./pocketbase.889dfe32.js";import{_}from"./pocketnuxt.c883b8eb.js";import{a as b,r as a,b as x,e as g,f as e,h as l,u as n,i as h,j as i,o as w}from"./entry.f3bd7100.js";const v={class:"justify-content-center align-content-center display: flex flex-wrap fill-height mt-8"},k={class:"surface-card p-4 shadow-2 border-round md:w-6 lg:w-3"},y=e("div",{class:"text-center mb-5"},[e("img",{src:_,alt:"Image",height:"50",class:"mb-3"}),e("div",{class:"text-900 text-3xl font-medium mb-3"},"Reset Password"),e("a",{class:"font-medium no-underline ml-2 text-blue-500 cursor-pointer",href:"/auth/login"},"Back to Login")],-1),B=e("label",{for:"email",class:"block text-900 font-medium mb-2"},"Email",-1),T=b({__name:"forgotPassword",setup(P){const r=p(),s=a(null),t=a(!1),c=x();async function u(){t.value=!0,s&&await r.collection("users").requestPasswordReset(s.value).then(()=>{c.add({severity:"success",summary:"Success",detail:"Password reset email sent",life:3e3})}),t.value=!1}return(V,o)=>{const m=i("InputText"),d=i("Button");return w(),g("div",v,[e("div",k,[y,e("div",null,[B,l(m,{id:"email",type:"text",class:"w-full mb-3",modelValue:n(s),"onUpdate:modelValue":o[0]||(o[0]=f=>h(s)?s.value=f:null)},null,8,["modelValue"]),l(d,{label:"Submit",icon:"pi pi-user",class:"w-full",onClick:u,loading:n(t)},null,8,["loading"])])])])}}});export{T as default};