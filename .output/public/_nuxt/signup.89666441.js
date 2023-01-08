import{u as g}from"./pocketbase.889dfe32.js";import{a as h,r,b as x,e as y,f as n,h as i,u as d,i as f,k as V,l as k,j as w,o as P}from"./entry.f3bd7100.js";import{_ as B}from"./pocketnuxt.c883b8eb.js";const E={class:"justify-content-center align-content-center display: flex flex-wrap fill-height mt-8"},U={class:"surface-card p-4 shadow-2 border-round md:w-6 lg:w-3"},C=V('<div class="text-center mb-5"><img src="'+B+'" alt="Image" height="50" class="mb-3"><div class="text-900 text-3xl font-medium mb-3">Join Now!</div><span class="text-600 font-medium line-height-3">Already have an account?</span><a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/auth/login">Back to login</a></div>',1),I=n("label",{for:"email",class:"block text-900 font-medium mb-2"},"Email",-1),N=n("label",{for:"password",class:"block text-900 font-medium mb-2"},"Password",-1),T=n("label",{for:"password",class:"block text-900 font-medium mb-2"},"Confirm Password",-1),L=h({__name:"signup",setup(j){const p=g(),s=r(null),e=r(null),l=r(null),u=r(!1),c=x();async function v(){u.value=!0,s&&e&&e.value===l.value?await p.collection("users").create({email:s.value,password:e.value,passwordConfirm:l.value}).then(o=>{b()}).catch(o=>{console.log(o),c.add({severity:"error",summary:"Error",detail:o.data||"Unknown Error",life:3e3})}):c.add({severity:"error",summary:"Error",detail:"Password confirmation does not match",life:3e3}),u.value=!1}async function b(){await p.collection("users").authWithPassword(s.value,e.value).then(o=>{k("/")}).catch(o=>{console.log(o),c.add({severity:"error",summary:"Error",detail:"Invalid email or password",life:3e3})})}return(o,a)=>{const m=w("InputText"),_=w("Button");return P(),y("div",E,[n("div",U,[C,n("div",null,[I,i(m,{id:"email",type:"text",class:"w-full mb-3",modelValue:d(s),"onUpdate:modelValue":a[0]||(a[0]=t=>f(s)?s.value=t:null)},null,8,["modelValue"]),N,i(m,{id:"password",type:"password",class:"w-full mb-3",modelValue:d(e),"onUpdate:modelValue":a[1]||(a[1]=t=>f(e)?e.value=t:null)},null,8,["modelValue"]),T,i(m,{id:"confirmPassword",type:"password",class:"w-full mb-3",modelValue:d(l),"onUpdate:modelValue":a[2]||(a[2]=t=>f(l)?l.value=t:null)},null,8,["modelValue"]),i(_,{label:"Sign In",icon:"pi pi-user",class:"w-full",onClick:v,loading:d(u)},null,8,["loading"])])])])}}});export{L as default};