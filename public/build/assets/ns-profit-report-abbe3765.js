<<<<<<< HEAD:public/build/assets/ns-profit-report-20821806.js
import{h as c}from"./npm~moment-a9aaa855.js";import{c as b,e as g}from"./components-186debed.js";import{b as d,a as x}from"./bootstrap-46bb2692.js";import{_ as l,n as f}from"./currency-dc6217f5.js";import{s as h}from"./select-api-entities-d30ca741.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{an as v,af as u,G as _,H as t,c as m,F as w,al as D}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as s,z as F}from"./npm~@vue~shared_-951a29c4.js";import"./ns-alert-popup-be66b889.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./ns-avatar-image-e829aee2.js";import"./npm~@dicebear~avatars_-24df7cd3.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-59868252.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1f1b3f66.js";import"./npm~eventemitter3-e2795b41.js";import"./npm~xml-lexer-a4e87e97.js";import"./npm~@dicebear~avatars-avataaars-sprites_-796ded10.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./ns-prompt-popup-804e7a93.js";import"./npm~@ckeditor~ckeditor5-vue_-f12da425.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~vue2-daterange-picker-c3e32574.js";import"./npm~vuedraggable-b77cc769.js";import"./npm~sortablejs-1952ed83.js";import"./npm~vue-upload-component-5c82cdcf.js";import"./npm~lodash-3db1c062.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./join-array-567f2575.js";const C={name:"ns-profit-report",props:["storeLogo","storeName"],data(){return{categoryNames:"",unitNames:"",startDateField:{type:"datetimepicker",value:c(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:c(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss")},categoryField:{value:[],label:l("Filter by Category")},unitField:{value:[],label:l("Filter by Units")},products:[],ns:window.ns}},components:{nsDatepicker:b,nsDateTimePicker:g},computed:{totalQuantities(){return this.products.length>0?this.products.map(e=>e.quantity).reduce((e,o)=>e+o):0},totalPurchasePrice(){return this.products.length>0?this.products.map(e=>e.total_purchase_price).reduce((e,o)=>e+o):0},totalSalePrice(){return this.products.length>0?this.products.map(e=>e.total_price).reduce((e,o)=>e+o):0},totalProfit(){return this.products.length>0?this.products.map(e=>e.total_price-e.total_purchase_price).reduce((e,o)=>e+o):0},totalTax(){return this.products.length>0?this.products.map(e=>e.tax_value).reduce((e,o)=>e+o):0}},methods:{__:l,nsCurrency:f,printSaleReport(){this.$htmlToPaper("profit-report")},setStartDate(e){this.startDate=e.format()},async selectCategories(){try{const e=await h("/api/categories",this.categoryField.label,this.categoryField.value);this.categoryField.value=e.values,this.categoryNames=e.labels,this.loadReport()}catch(e){if(e!==!1)return d.error(l("An error has occured while loading the categories")).subscribe()}},async selectUnit(){try{const e=await h("/api/units",this.unitField.label,this.unitField.value);this.unitField.value=e.values,this.unitNames=e.labels,this.loadReport()}catch(e){if(e!==!1)return d.error(l("An error has occured while loading the units")).subscribe()}},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(l("Unable to proceed. Select a correct time range.")).subscribe();const e=c(this.startDateField.value);if(c(this.endDateField.value).isBefore(e))return d.error(l("Unable to proceed. The current time range is not valid.")).subscribe();x.post("/api/reports/profit-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:n=>{this.products=n},error:n=>{d.error(n.message).subscribe()}})},setEndDate(e){this.endDate=e.format()}}},k={id:"report-section",class:"px-4"},P={class:"flex -mx-2"},N={class:"px-2"},R={class:"px-2"},S={class:"px-2"},U=t("i",{class:"las la-sync-alt text-xl"},null,-1),Y={class:"pl-2"},M={class:"px-2"},B=t("i",{class:"las la-print text-xl"},null,-1),H={class:"pl-2"},T={class:"px-2"},j=t("i",{class:"las la-filter text-xl"},null,-1),A={class:"pl-2"},L={class:"px-2"},E=t("i",{class:"las la-filter text-xl"},null,-1),Q={class:"pl-2"},V={id:"profit-report",class:"anim-duration-500 fade-in-entrance"},q={class:"flex w-full"},z={class:"my-4 flex justify-between w-full"},O={class:"text-secondary"},G={class:"pb-1 border-b border-dashed"},I={class:"pb-1 border-b border-dashed"},J={class:"pb-1 border-b border-dashed"},K=["src","alt"],W={class:"shadow rounded my-4"},X={class:"ns-box"},Z={class:"border-b ns-box-body"},$={class:"table ns-table w-full"},tt={class:"border p-2 text-left"},et={width:"150",class:"text-right border p-2"},rt={width:"150",class:"text-right border p-2"},st={width:"150",class:"text-right border p-2"},ot={width:"150",class:"text-right border p-2"},it={width:"150",class:"text-right border p-2"},at={width:"150",class:"text-right border p-2"},lt={class:"p-2 border border-box-edge"},nt={class:"p-2 border text-right border-box-edge"},dt={class:"p-2 border text-right border-box-edge"},ct={class:"p-2 border text-right border-box-edge"},ut={class:"p-2 border text-right border-box-edge"},_t={class:"p-2 border text-right border-box-edge"},pt={class:"p-2 border text-right border-box-edge"},ht={class:"font-semibold"},mt=t("td",{colspan:"2",class:"p-2 border"},null,-1),bt={class:"p-2 border text-right"},gt={class:"p-2 border text-right"},xt={class:"p-2 border text-right"},ft={class:"p-2 border text-right"},yt={class:"p-2 border text-right"};function vt(e,o,n,wt,a,r){const p=v("ns-field");return u(),_("div",k,[t("div",P,[t("div",N,[m(p,{field:a.startDateField},null,8,["field"])]),t("div",R,[m(p,{field:a.endDateField},null,8,["field"])]),t("div",S,[t("button",{onClick:o[0]||(o[0]=i=>r.loadReport()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[U,t("span",Y,s(r.__("Load")),1)])]),t("div",M,[t("button",{onClick:o[1]||(o[1]=i=>r.printSaleReport()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[B,t("span",H,s(r.__("Print")),1)])]),t("div",T,[t("button",{onClick:o[2]||(o[2]=i=>r.selectCategories()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[j,t("span",A,s(r.__("Category"))+": "+s(a.categoryNames||r.__("All Categories")),1)])]),t("div",L,[t("button",{onClick:o[3]||(o[3]=i=>r.selectUnit()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[E,t("span",Q,s(r.__("Unit"))+": "+s(a.unitNames||r.__("All Units")),1)])])]),t("div",V,[t("div",q,[t("div",z,[t("div",O,[t("ul",null,[t("li",G,s(r.__("Range : {date1} — {date2}").replace("{date1}",a.startDateField.value).replace("{date2}",a.endDateField.value)),1),t("li",I,s(r.__("Document : Profit Report")),1),t("li",J,s(r.__("By : {user}").replace("{user}",a.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:n.storeLogo,alt:n.storeName},null,8,K)])])]),t("div",W,[t("div",X,[t("div",Z,[t("table",$,[t("thead",null,[t("tr",null,[t("th",tt,s(r.__("Product")),1),t("th",et,s(r.__("Unit")),1),t("th",rt,s(r.__("Quantity")),1),t("th",st,s(r.__("Purchase Price")),1),t("th",ot,s(r.__("Sale Price")),1),t("th",it,s(r.__("Taxes")),1),t("th",at,s(r.__("Profit")),1)])]),t("tbody",null,[(u(!0),_(w,null,D(a.products,i=>(u(),_("tr",{key:i.id,class:F(i.total_price-i.total_purchase_price<0?"bg-error-primary":"bg-box-background")},[t("td",lt,s(i.name),1),t("td",nt,s(i.unit_name),1),t("td",dt,s(i.quantity),1),t("td",ct,s(r.nsCurrency(i.total_purchase_price)),1),t("td",ut,s(r.nsCurrency(i.total_price)),1),t("td",_t,s(r.nsCurrency(i.tax_value)),1),t("td",pt,s(r.nsCurrency(i.total_price-i.total_purchase_price)),1)],2))),128))]),t("tfoot",ht,[t("tr",null,[mt,t("td",bt,s(r.totalQuantities),1),t("td",gt,s(r.nsCurrency(r.totalPurchasePrice)),1),t("td",xt,s(r.nsCurrency(r.totalSalePrice)),1),t("td",ft,s(r.nsCurrency(r.totalTax)),1),t("td",yt,s(r.nsCurrency(r.totalProfit)),1)])])])])])])])])}const De=y(C,[["render",vt]]);export{De as default};
=======
import{h as c}from"./npm~moment-a9aaa855.js";import{c as b,e as g}from"./components-c18bb6a7.js";import{b as d,a as x}from"./bootstrap-0380d638.js";import{_ as l,n as f}from"./currency-dc6217f5.js";import{s as h}from"./select-api-entities-72ac854e.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{an as v,af as u,G as _,H as t,c as m,F as w,al as D}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as s,z as F}from"./npm~@vue~shared_-951a29c4.js";import"./ns-alert-popup-be66b889.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./ns-avatar-image-e829aee2.js";import"./npm~@dicebear~avatars_-24df7cd3.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-59868252.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1f1b3f66.js";import"./npm~eventemitter3-e2795b41.js";import"./npm~xml-lexer-a4e87e97.js";import"./npm~@dicebear~avatars-avataaars-sprites_-796ded10.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./ns-prompt-popup-1fe5a6aa.js";import"./npm~@ckeditor~ckeditor5-vue_-f12da425.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~vue2-daterange-picker-c3e32574.js";import"./npm~vuedraggable-b77cc769.js";import"./npm~sortablejs-1952ed83.js";import"./npm~vue-upload-component-5c82cdcf.js";import"./npm~lodash-3db1c062.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./join-array-567f2575.js";const C={name:"ns-profit-report",props:["storeLogo","storeName"],data(){return{categoryNames:"",unitNames:"",startDateField:{type:"datetimepicker",value:c(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:c(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss")},categoryField:{value:[],label:l("Filter by Category")},unitField:{value:[],label:l("Filter by Units")},products:[],ns:window.ns}},components:{nsDatepicker:b,nsDateTimePicker:g},computed:{totalQuantities(){return this.products.length>0?this.products.map(e=>e.quantity).reduce((e,o)=>e+o):0},totalPurchasePrice(){return this.products.length>0?this.products.map(e=>e.total_purchase_price).reduce((e,o)=>e+o):0},totalSalePrice(){return this.products.length>0?this.products.map(e=>e.total_price).reduce((e,o)=>e+o):0},totalProfit(){return this.products.length>0?this.products.map(e=>e.total_price-e.total_purchase_price).reduce((e,o)=>e+o):0},totalTax(){return this.products.length>0?this.products.map(e=>e.tax_value).reduce((e,o)=>e+o):0}},methods:{__:l,nsCurrency:f,printSaleReport(){this.$htmlToPaper("profit-report")},setStartDate(e){this.startDate=e.format()},async selectCategories(){try{const e=await h("/api/categories",this.categoryField.label,this.categoryField.value);this.categoryField.value=e.values,this.categoryNames=e.labels,this.loadReport()}catch(e){if(e!==!1)return d.error(l("An error has occured while loading the categories")).subscribe()}},async selectUnit(){try{const e=await h("/api/units",this.unitField.label,this.unitField.value);this.unitField.value=e.values,this.unitNames=e.labels,this.loadReport()}catch(e){if(e!==!1)return d.error(l("An error has occured while loading the units")).subscribe()}},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(l("Unable to proceed. Select a correct time range.")).subscribe();const e=c(this.startDateField.value);if(c(this.endDateField.value).isBefore(e))return d.error(l("Unable to proceed. The current time range is not valid.")).subscribe();x.post("/api/reports/profit-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:n=>{this.products=n},error:n=>{d.error(n.message).subscribe()}})},setEndDate(e){this.endDate=e.format()}}},k={id:"report-section",class:"px-4"},P={class:"flex -mx-2"},N={class:"px-2"},R={class:"px-2"},S={class:"px-2"},U=t("i",{class:"las la-sync-alt text-xl"},null,-1),Y={class:"pl-2"},M={class:"px-2"},B=t("i",{class:"las la-print text-xl"},null,-1),H={class:"pl-2"},T={class:"px-2"},j=t("i",{class:"las la-filter text-xl"},null,-1),A={class:"pl-2"},L={class:"px-2"},E=t("i",{class:"las la-filter text-xl"},null,-1),Q={class:"pl-2"},V={id:"profit-report",class:"anim-duration-500 fade-in-entrance"},q={class:"flex w-full"},z={class:"my-4 flex justify-between w-full"},O={class:"text-secondary"},G={class:"pb-1 border-b border-dashed"},I={class:"pb-1 border-b border-dashed"},J={class:"pb-1 border-b border-dashed"},K=["src","alt"],W={class:"shadow rounded my-4"},X={class:"ns-box"},Z={class:"border-b ns-box-body"},$={class:"table ns-table w-full"},tt={class:"border p-2 text-left"},et={width:"150",class:"text-right border p-2"},rt={width:"150",class:"text-right border p-2"},st={width:"150",class:"text-right border p-2"},ot={width:"150",class:"text-right border p-2"},it={width:"150",class:"text-right border p-2"},at={width:"150",class:"text-right border p-2"},lt={class:"p-2 border border-box-edge"},nt={class:"p-2 border text-right border-box-edge"},dt={class:"p-2 border text-right border-box-edge"},ct={class:"p-2 border text-right border-box-edge"},ut={class:"p-2 border text-right border-box-edge"},_t={class:"p-2 border text-right border-box-edge"},pt={class:"p-2 border text-right border-box-edge"},ht={class:"font-semibold"},mt=t("td",{colspan:"2",class:"p-2 border"},null,-1),bt={class:"p-2 border text-right"},gt={class:"p-2 border text-right"},xt={class:"p-2 border text-right"},ft={class:"p-2 border text-right"},yt={class:"p-2 border text-right"};function vt(e,o,n,wt,a,r){const p=v("ns-field");return u(),_("div",k,[t("div",P,[t("div",N,[m(p,{field:a.startDateField},null,8,["field"])]),t("div",R,[m(p,{field:a.endDateField},null,8,["field"])]),t("div",S,[t("button",{onClick:o[0]||(o[0]=i=>r.loadReport()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[U,t("span",Y,s(r.__("Load")),1)])]),t("div",M,[t("button",{onClick:o[1]||(o[1]=i=>r.printSaleReport()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[B,t("span",H,s(r.__("Print")),1)])]),t("div",T,[t("button",{onClick:o[2]||(o[2]=i=>r.selectCategories()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[j,t("span",A,s(r.__("Category"))+": "+s(a.categoryNames||r.__("All Categories")),1)])]),t("div",L,[t("button",{onClick:o[3]||(o[3]=i=>r.selectUnit()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[E,t("span",Q,s(r.__("Unit"))+": "+s(a.unitNames||r.__("All Units")),1)])])]),t("div",V,[t("div",q,[t("div",z,[t("div",O,[t("ul",null,[t("li",G,s(r.__("Range : {date1} — {date2}").replace("{date1}",a.startDateField.value).replace("{date2}",a.endDateField.value)),1),t("li",I,s(r.__("Document : Profit Report")),1),t("li",J,s(r.__("By : {user}").replace("{user}",a.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:n.storeLogo,alt:n.storeName},null,8,K)])])]),t("div",W,[t("div",X,[t("div",Z,[t("table",$,[t("thead",null,[t("tr",null,[t("th",tt,s(r.__("Product")),1),t("th",et,s(r.__("Unit")),1),t("th",rt,s(r.__("Quantity")),1),t("th",st,s(r.__("Purchase Price")),1),t("th",ot,s(r.__("Sale Price")),1),t("th",it,s(r.__("Taxes")),1),t("th",at,s(r.__("Profit")),1)])]),t("tbody",null,[(u(!0),_(w,null,D(a.products,i=>(u(),_("tr",{key:i.id,class:F(i.total_price-i.total_purchase_price<0?"bg-error-primary":"bg-box-background")},[t("td",lt,s(i.name),1),t("td",nt,s(i.unit_name),1),t("td",dt,s(i.quantity),1),t("td",ct,s(r.nsCurrency(i.total_purchase_price)),1),t("td",ut,s(r.nsCurrency(i.total_price)),1),t("td",_t,s(r.nsCurrency(i.tax_value)),1),t("td",pt,s(r.nsCurrency(i.total_price-i.total_purchase_price)),1)],2))),128))]),t("tfoot",ht,[t("tr",null,[mt,t("td",bt,s(r.totalQuantities),1),t("td",gt,s(r.nsCurrency(r.totalPurchasePrice)),1),t("td",xt,s(r.nsCurrency(r.totalSalePrice)),1),t("td",ft,s(r.nsCurrency(r.totalTax)),1),t("td",yt,s(r.nsCurrency(r.totalProfit)),1)])])])])])])])])}const De=y(C,[["render",vt]]);export{De as default};
>>>>>>> 66a0139385a0675be45b95668a66fc529c93220f:public/build/assets/ns-profit-report-abbe3765.js
