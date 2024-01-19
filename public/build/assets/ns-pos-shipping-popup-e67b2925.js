import{F as v,p as x,a as w}from"./bootstrap-0380d638.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{an as c,af as n,G as l,H as s,F as m,al as h,c as b,aH as F,M as S}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as p,z as f}from"./npm~@vue~shared_-951a29c4.js";import"./npm~lodash-3db1c062.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-f450d610.js";import"./currency-dc6217f5.js";import"./npm~numeral-304d6dd9.js";import"./npm~currency.js-57f74176.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";const k={name:"ns-pos-shipping-popup",props:["popup"],computed:{activeTabFields(){if(this.tabs!==null){for(let t in this.tabs)if(this.tabs[t].active)return this.tabs[t].fields}return[]},useBillingInfo(){return this.tabs!==null?this.tabs.billing.fields[0].value:new Object},useShippingInfo(){return this.tabs!==null?this.tabs.shipping.fields[0].value:new Object}},unmounted(){this.orderSubscription.unsubscribe()},mounted(){this.orderSubscription=POS.order.subscribe(t=>this.order=t),this.loadForm()},data(){return{tabs:null,orderSubscription:null,order:null,formValidation:new v}},watch:{useBillingInfo(t){t===1&&this.tabs.billing.fields.forEach(e=>{e.name!=="_use_customer_billing"&&(e.value=this.order.customer.billing?this.order.customer.billing[e.name]:e.value)})},useShippingInfo(t){t===1&&this.tabs.shipping.fields.forEach(e=>{e.name!=="_use_customer_shipping"&&(e.value=this.order.customer.shipping?this.order.customer.shipping[e.name]:e.value)})}},methods:{__,resolveIfQueued:x,submitInformations(){const t=this.formValidation.extractForm({tabs:this.tabs});for(let e in t.general)["shipping","shipping_rate"].includes(e)&&(t.general[e]=parseFloat(t.general[e]));this.order={...this.order,...t.general},delete t.general,delete t.shipping._use_customer_shipping,delete t.billing._use_customer_billing,this.order.addresses=t,POS.order.next(this.order),POS.refreshCart(),this.resolveIfQueued(!0)},closePopup(){this.resolveIfQueued(!1)},toggle(t){for(let e in this.tabs)this.tabs[e].active=!1;this.tabs[t].active=!0},loadForm(){w.get("/api/forms/ns.pos-addresses").subscribe(({tabs:t})=>{for(let e in t)e==="general"?t[e].fields.forEach(o=>{o.value=this.order[o.name]||""}):t[e].fields.forEach(o=>{o.value=this.order.addresses[e]?this.order.addresses[e][o.name]:""});this.tabs=this.formValidation.initializeTabs(t)})}}},C={class:"ns-box w-6/7-screen md:w-4/5-screen lg:w-3/5-screen h-6/7-screen md:h-4/5-screen shadow-lg flex flex-col overflow-hidden"},V={class:"p-2 border-b ns-box-header flex justify-between items-center"},I={class:"font-bold text-primary"},B={class:"tools"},P=s("i",{class:"las la-times"},null,-1),j=[P],E={class:"flex-auto ns-box-body p-2 overflow-y-auto ns-tab"},O={id:"tabs-container"},T={class:"header flex",style:{"margin-bottom":"-1px"}},z=["onClick"],H={class:"border ns-tab-item"},N={class:"px-4"},Q={class:"-mx-4 flex flex-wrap"},D={class:"p-2 flex justify-between border-t ns-box-footer"},G=s("div",null,null,-1);function L(t,e,o,M,d,r){const _=c("ns-field"),g=c("ns-button");return n(),l("div",C,[s("div",V,[s("h3",I,p(r.__("Shipping & Billing")),1),s("div",B,[s("button",{onClick:e[0]||(e[0]=i=>r.closePopup()),class:"ns-close-button rounded-full h-8 w-8 border items-center justify-center"},j)])]),s("div",E,[s("div",O,[s("div",T,[(n(!0),l(m,null,h(d.tabs,(i,a)=>(n(),l("div",{key:a,onClick:u=>r.toggle(a),class:f([i.active?"border-b-0 active":"inactive","tab rounded-tl rounded-tr border tab px-3 py-2 text-primary cursor-pointer"]),style:{"margin-right":"-1px"}},p(i.label),11,z))),128))]),s("div",H,[s("div",N,[s("div",Q,[(n(!0),l(m,null,h(r.activeTabFields,(i,a)=>(n(),l("div",{key:a,class:f("p-4 w-full md:w-1/2 lg:w-1/3")},[b(_,{onBlur:u=>d.formValidation.checkField(i),onChange:u=>d.formValidation.checkField(i),field:i},null,8,["onBlur","onChange","field"])]))),128))])])])])]),s("div",D,[G,s("div",null,[b(g,{onClick:e[1]||(e[1]=i=>r.submitInformations()),type:"info"},{default:F(()=>[S(p(r.__("Save")),1)]),_:1})])])])}const we=y(k,[["render",L]]);export{we as default};
