<<<<<<< HEAD:public/build/assets/ns-stock-combined-report-a84a72f6.js
import{h}from"./npm~moment-a9aaa855.js";import{_ as l}from"./currency-dc6217f5.js";import{s as p}from"./select-api-entities-d30ca741.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{an as b,af as a,G as _,H as s,c as y,F as x,al as f,A as v}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as t}from"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./ns-prompt-popup-804e7a93.js";import"./npm~@ckeditor~ckeditor5-vue_-f12da425.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./bootstrap-46bb2692.js";import"./npm~lodash-3db1c062.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./join-array-567f2575.js";const g={props:["storeLogo","storeName"],data(){return{__:l,ns,moment:h,categoriesNames:"",unitsNames:"",categories:[],products:[],units:[],selectedCategories:[],selectedUnits:[],categoryField:{value:[],label:l("Filter by Category")},unitField:{value:[],label:l("Filter by Units")},datePicker:{type:"datetimepicker",name:"date",value:"",validation:"required"}}},methods:{loadReport(){nsHttpClient.post("/api/reports/product-history-combined",{date:this.datePicker.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:o=>{this.products=o},error:o=>{nsSnackBar.error(o.message).subscribe()}})},printSaleReport(){this.$htmlToPaper("combined-report")},async generateReport(){try{const o=await new Promise((n,c)=>{nsHttpClient.get("/api/reports/compute-combined-report").subscribe({next:d=>{n(d)},error:d=>{c(d)}})});nsSnackBar.success(o.message).subscribe()}catch(o){nsSnackBar.error(o.message).subscribe()}},async selectCategories(){try{const o=await p("/api/categories",this.categoryField.label,this.categoryField.value);this.categoryField.value=o.values,this.categoriesNames=o.labels,this.loadReport()}catch(o){if(o!==!1)return nsSnackBar.error(l("An error has occured while loading the categories")).subscribe()}},async selectUnits(){try{const o=await p("/api/units",this.unitField.label,this.unitField.value);this.unitField.value=o.values,this.unitsNames=o.labels,this.loadReport()}catch(o){if(o!==!1)return nsSnackBar.error(l("An error has occured while loading the units")).subscribe()}}}},k={id:"report-section",class:"px-4"},w={class:"flex -mx-2"},C={class:"px-2 flex -mx-2"},F={class:"px-2"},N={class:"px-2"},S={class:"ns-button"},Q=s("i",{class:"las la-sync-alt text-xl"},null,-1),R={class:"pl-2"},B={class:"px-2"},A={class:"ns-button"},P=s("i",{class:"las la-print text-xl"},null,-1),j={class:"pl-2"},q={class:"px-2 flex -mx-2"},H={class:"px-2"},L={class:"ns-button"},U=s("i",{class:"las la-filter text-xl"},null,-1),D={class:"pl-2"},V={class:"px-2"},T={class:"ns-button"},E=s("i",{class:"las la-filter text-xl"},null,-1),G={class:"pl-2"},I={class:"px-2"},M={class:"ns-button"},z=s("i",{class:"las la-sync-alt"},null,-1),J={class:"pl-2"},K={id:"combined-report"},O={class:"flex w-full mb-4"},W={class:"flex justify-between w-full"},X={class:"text-secondary"},Y=["innerHTML"],Z={class:"pb-1 border-b border-dashed"},$={class:"pb-1 border-b border-dashed"},ss=["src","alt"],es={class:"box bg-box-background"},ts={class:"box-body text-primary"},os={class:"min-w-fit w-full table-auto"},is={class:"text-sm"},rs={class:"font-bold"},ls={class:"border p-2 w-1/3"},cs={class:"border p-2"},ds={class:"hidden md:inline-block"},as={class:"inline-block md:hidden"},_s={class:"border p-2"},ps={class:"hidden md:inline-block"},ms={class:"inline-block md:hidden"},hs={class:"border p-2"},us={class:"hidden md:inline-block"},bs={class:"inline-block md:hidden"},ys={class:"border p-2"},xs={class:"hidden md:inline-block"},fs={class:"inline-block md:hidden"},vs={class:"border p-2"},gs={class:"hidden md:inline-block"},ks={class:"inline-block md:hidden"},ws={class:"text-xs"},Cs={class:"border p-2"},Fs={class:"border p-2"},Ns={class:"border p-2"},Ss={class:"border p-2"},Qs={class:"border p-2"},Rs={class:"border p-2"},Bs={key:0},As={colspan:"6",class:"border p-2 text-center"};function Ps(o,n,c,d,e,r){const m=b("ns-field");return a(),_("div",k,[s("div",w,[s("div",C,[s("div",F,[y(m,{field:e.datePicker},null,8,["field"])]),s("div",N,[s("div",S,[s("button",{onClick:n[0]||(n[0]=i=>r.loadReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[Q,s("span",R,t(e.__("Load")),1)])])]),s("div",B,[s("div",A,[s("button",{onClick:n[1]||(n[1]=i=>r.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[P,s("span",j,t(e.__("Print")),1)])])])]),s("div",q,[s("div",H,[s("div",L,[s("button",{onClick:n[2]||(n[2]=i=>r.selectCategories()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[U,s("span",D,t(e.__("Categories"))+": "+t(e.categoriesNames||e.__("All Categories")),1)])])]),s("div",V,[s("div",T,[s("button",{onClick:n[3]||(n[3]=i=>r.selectUnits()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[E,s("span",G,t(e.__("Units"))+": "+t(e.unitsNames||e.__("All Units")),1)])])]),s("div",I,[s("div",M,[s("button",{onClick:n[4]||(n[4]=i=>r.generateReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[z,s("span",J,t(e.__("Generate Report")),1)])])])])]),s("div",K,[s("div",O,[s("div",W,[s("div",X,[s("ul",null,[s("li",{class:"pb-1 border-b border-dashed",innerHTML:e.__("Date : {date}").replace("{date}",e.moment(e.datePicker.value).format(e.ns.date.format))},null,8,Y),s("li",Z,t(e.__("Document : Combined Products History")),1),s("li",$,t(e.__("By : {user}").replace("{user}",e.ns.user.username)),1)])]),s("div",null,[s("img",{class:"w-24",src:c.storeLogo,alt:c.storeName},null,8,ss)])])]),s("div",es,[s("div",ts,[s("table",os,[s("thead",is,[s("tr",rs,[s("td",ls,t(e.__("Name")),1),s("td",cs,[s("span",ds,t(e.__("Initial Quantity")),1),s("span",as,t(e.__("Ini. Qty")),1)]),s("td",_s,[s("span",ps,t(e.__("Added Quantity")),1),s("span",ms,t(e.__("Add. Qty")),1)]),s("td",hs,[s("span",us,t(e.__("Sold Quantity")),1),s("span",bs,t(e.__("Sold Qty")),1)]),s("td",ys,[s("span",xs,t(e.__("Defective Quantity")),1),s("span",fs,t(e.__("Defec. Qty")),1)]),s("td",vs,[s("span",gs,t(e.__("Final Quantity")),1),s("span",ks,t(e.__("Final Qty")),1)])])]),s("tbody",ws,[(a(!0),_(x,null,f(e.products,i=>(a(),_("tr",{key:i.id},[s("td",Cs,t(i.history_name)+" ("+t(i.unit_name)+")",1),s("td",Fs,t(i.history_initial_quantity),1),s("td",Ns,t(i.history_procured_quantity),1),s("td",Ss,t(i.history_sold_quantity),1),s("td",Qs,t(i.history_defective_quantity),1),s("td",Rs,t(i.history_final_quantity),1)]))),128)),e.products.length===0?(a(),_("tr",Bs,[s("td",As,t(e.__("No data available")),1)])):v("",!0)])])])])])])}const ue=u(g,[["render",Ps]]);export{ue as default};
=======
import{h}from"./npm~moment-a9aaa855.js";import{_ as l}from"./currency-dc6217f5.js";import{s as p}from"./select-api-entities-72ac854e.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{an as b,af as a,G as _,H as s,c as y,F as x,al as f,A as v}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as t}from"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./ns-prompt-popup-1fe5a6aa.js";import"./npm~@ckeditor~ckeditor5-vue_-f12da425.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./bootstrap-0380d638.js";import"./npm~lodash-3db1c062.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./join-array-567f2575.js";const g={props:["storeLogo","storeName"],data(){return{__:l,ns,moment:h,categoriesNames:"",unitsNames:"",categories:[],products:[],units:[],selectedCategories:[],selectedUnits:[],categoryField:{value:[],label:l("Filter by Category")},unitField:{value:[],label:l("Filter by Units")},datePicker:{type:"datetimepicker",name:"date",value:"",validation:"required"}}},methods:{loadReport(){nsHttpClient.post("/api/reports/product-history-combined",{date:this.datePicker.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:o=>{this.products=o},error:o=>{nsSnackBar.error(o.message).subscribe()}})},printSaleReport(){this.$htmlToPaper("combined-report")},async generateReport(){try{const o=await new Promise((n,c)=>{nsHttpClient.get("/api/reports/compute-combined-report").subscribe({next:d=>{n(d)},error:d=>{c(d)}})});nsSnackBar.success(o.message).subscribe()}catch(o){nsSnackBar.error(o.message).subscribe()}},async selectCategories(){try{const o=await p("/api/categories",this.categoryField.label,this.categoryField.value);this.categoryField.value=o.values,this.categoriesNames=o.labels,this.loadReport()}catch(o){if(o!==!1)return nsSnackBar.error(l("An error has occured while loading the categories")).subscribe()}},async selectUnits(){try{const o=await p("/api/units",this.unitField.label,this.unitField.value);this.unitField.value=o.values,this.unitsNames=o.labels,this.loadReport()}catch(o){if(o!==!1)return nsSnackBar.error(l("An error has occured while loading the units")).subscribe()}}}},k={id:"report-section",class:"px-4"},w={class:"flex -mx-2"},C={class:"px-2 flex -mx-2"},F={class:"px-2"},N={class:"px-2"},S={class:"ns-button"},Q=s("i",{class:"las la-sync-alt text-xl"},null,-1),R={class:"pl-2"},B={class:"px-2"},A={class:"ns-button"},P=s("i",{class:"las la-print text-xl"},null,-1),j={class:"pl-2"},q={class:"px-2 flex -mx-2"},H={class:"px-2"},L={class:"ns-button"},U=s("i",{class:"las la-filter text-xl"},null,-1),D={class:"pl-2"},V={class:"px-2"},T={class:"ns-button"},E=s("i",{class:"las la-filter text-xl"},null,-1),G={class:"pl-2"},I={class:"px-2"},M={class:"ns-button"},z=s("i",{class:"las la-sync-alt"},null,-1),J={class:"pl-2"},K={id:"combined-report"},O={class:"flex w-full mb-4"},W={class:"flex justify-between w-full"},X={class:"text-secondary"},Y=["innerHTML"],Z={class:"pb-1 border-b border-dashed"},$={class:"pb-1 border-b border-dashed"},ss=["src","alt"],es={class:"box bg-box-background"},ts={class:"box-body text-primary"},os={class:"min-w-fit w-full table-auto"},is={class:"text-sm"},rs={class:"font-bold"},ls={class:"border p-2 w-1/3"},cs={class:"border p-2"},ds={class:"hidden md:inline-block"},as={class:"inline-block md:hidden"},_s={class:"border p-2"},ps={class:"hidden md:inline-block"},ms={class:"inline-block md:hidden"},hs={class:"border p-2"},us={class:"hidden md:inline-block"},bs={class:"inline-block md:hidden"},ys={class:"border p-2"},xs={class:"hidden md:inline-block"},fs={class:"inline-block md:hidden"},vs={class:"border p-2"},gs={class:"hidden md:inline-block"},ks={class:"inline-block md:hidden"},ws={class:"text-xs"},Cs={class:"border p-2"},Fs={class:"border p-2"},Ns={class:"border p-2"},Ss={class:"border p-2"},Qs={class:"border p-2"},Rs={class:"border p-2"},Bs={key:0},As={colspan:"6",class:"border p-2 text-center"};function Ps(o,n,c,d,e,r){const m=b("ns-field");return a(),_("div",k,[s("div",w,[s("div",C,[s("div",F,[y(m,{field:e.datePicker},null,8,["field"])]),s("div",N,[s("div",S,[s("button",{onClick:n[0]||(n[0]=i=>r.loadReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[Q,s("span",R,t(e.__("Load")),1)])])]),s("div",B,[s("div",A,[s("button",{onClick:n[1]||(n[1]=i=>r.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[P,s("span",j,t(e.__("Print")),1)])])])]),s("div",q,[s("div",H,[s("div",L,[s("button",{onClick:n[2]||(n[2]=i=>r.selectCategories()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[U,s("span",D,t(e.__("Categories"))+": "+t(e.categoriesNames||e.__("All Categories")),1)])])]),s("div",V,[s("div",T,[s("button",{onClick:n[3]||(n[3]=i=>r.selectUnits()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[E,s("span",G,t(e.__("Units"))+": "+t(e.unitsNames||e.__("All Units")),1)])])]),s("div",I,[s("div",M,[s("button",{onClick:n[4]||(n[4]=i=>r.generateReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[z,s("span",J,t(e.__("Generate Report")),1)])])])])]),s("div",K,[s("div",O,[s("div",W,[s("div",X,[s("ul",null,[s("li",{class:"pb-1 border-b border-dashed",innerHTML:e.__("Date : {date}").replace("{date}",e.moment(e.datePicker.value).format(e.ns.date.format))},null,8,Y),s("li",Z,t(e.__("Document : Combined Products History")),1),s("li",$,t(e.__("By : {user}").replace("{user}",e.ns.user.username)),1)])]),s("div",null,[s("img",{class:"w-24",src:c.storeLogo,alt:c.storeName},null,8,ss)])])]),s("div",es,[s("div",ts,[s("table",os,[s("thead",is,[s("tr",rs,[s("td",ls,t(e.__("Name")),1),s("td",cs,[s("span",ds,t(e.__("Initial Quantity")),1),s("span",as,t(e.__("Ini. Qty")),1)]),s("td",_s,[s("span",ps,t(e.__("Added Quantity")),1),s("span",ms,t(e.__("Add. Qty")),1)]),s("td",hs,[s("span",us,t(e.__("Sold Quantity")),1),s("span",bs,t(e.__("Sold Qty")),1)]),s("td",ys,[s("span",xs,t(e.__("Defective Quantity")),1),s("span",fs,t(e.__("Defec. Qty")),1)]),s("td",vs,[s("span",gs,t(e.__("Final Quantity")),1),s("span",ks,t(e.__("Final Qty")),1)])])]),s("tbody",ws,[(a(!0),_(x,null,f(e.products,i=>(a(),_("tr",{key:i.id},[s("td",Cs,t(i.history_name)+" ("+t(i.unit_name)+")",1),s("td",Fs,t(i.history_initial_quantity),1),s("td",Ns,t(i.history_procured_quantity),1),s("td",Ss,t(i.history_sold_quantity),1),s("td",Qs,t(i.history_defective_quantity),1),s("td",Rs,t(i.history_final_quantity),1)]))),128)),e.products.length===0?(a(),_("tr",Bs,[s("td",As,t(e.__("No data available")),1)])):v("",!0)])])])])])])}const ue=u(g,[["render",Ps]]);export{ue as default};
>>>>>>> 66a0139385a0675be45b95668a66fc529c93220f:public/build/assets/ns-stock-combined-report-b52cc011.js
