import{h as n}from"./npm~moment-a9aaa855.js";import{c as h,e as f}from"./components-c18bb6a7.js";import{b as l,a as x}from"./bootstrap-0380d638.js";import{_ as d,n as y}from"./currency-dc6217f5.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{an as D,af as p,G as m,H as t,c as u,F as g,al as k}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as r}from"./npm~@vue~shared_-951a29c4.js";import"./ns-alert-popup-be66b889.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./ns-avatar-image-e829aee2.js";import"./npm~@dicebear~avatars_-24df7cd3.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-59868252.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1f1b3f66.js";import"./npm~eventemitter3-e2795b41.js";import"./npm~xml-lexer-a4e87e97.js";import"./npm~@dicebear~avatars-avataaars-sprites_-796ded10.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./ns-prompt-popup-1fe5a6aa.js";import"./npm~@ckeditor~ckeditor5-vue_-f12da425.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~vue2-daterange-picker-c3e32574.js";import"./npm~vuedraggable-b77cc769.js";import"./npm~sortablejs-1952ed83.js";import"./npm~vue-upload-component-5c82cdcf.js";import"./npm~lodash-3db1c062.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";const w={name:"ns-payment-types-report",props:["storeName","storeLogo"],data(){return{startDateField:{type:"datetimepicker",value:n(ns.date.current).startOf("day").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:n(ns.date.current).endOf("day").format("YYYY-MM-DD HH:mm:ss")},report:[],ns:window.ns,field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:h,nsDateTimePicker:f},computed:{},mounted(){},methods:{__:d,nsCurrency:y,printSaleReport(){this.$htmlToPaper("sale-report")},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return l.error(d("Unable to proceed. Select a correct time range.")).subscribe();const c=n(this.startDateField.value);if(n(this.endDateField.value).isBefore(c))return l.error(d("Unable to proceed. The current time range is not valid.")).subscribe();x.post("/api/reports/payment-types",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:s=>{this.report=s},error:s=>{l.error(s.message).subscribe()}})}}},F={id:"report-section",class:"px-4"},Y={class:"flex -mx-2"},C={class:"px-2"},M={class:"px-2"},T={class:"px-2"},B=t("i",{class:"las la-sync-alt text-xl"},null,-1),H={class:"pl-2"},S={class:"px-2"},P=t("i",{class:"las la-print text-xl"},null,-1),R={class:"pl-2"},L={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},N={class:"flex w-full"},j={class:"my-4 flex justify-between w-full"},V={class:"text-secondary"},O={class:"pb-1 border-b border-dashed"},U={class:"pb-1 border-b border-dashed"},E={class:"pb-1 border-b border-dashed"},G=["src","alt"],q={class:"bg-box-background shadow rounded my-4"},z={class:"border-b border-box-edge"},A={class:"table ns-table w-full"},I={class:"text-primary"},J={class:"text-primary border p-2 text-left"},K={width:"150",class:"text-primary border p-2 text-right"},Q={class:"text-primary"},W={class:"p-2 border border-box-edge"},X={class:"p-2 border text-right"},Z={class:"text-primary font-semibold"},$={class:"p-2 border border-box-edge text-primary"},tt={class:"p-2 border text-right"};function et(c,i,s,rt,o,e){const _=D("ns-field");return p(),m("div",F,[t("div",Y,[t("div",C,[u(_,{field:o.startDateField},null,8,["field"])]),t("div",M,[u(_,{field:o.endDateField},null,8,["field"])]),t("div",T,[t("button",{onClick:i[0]||(i[0]=a=>e.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[B,t("span",H,r(e.__("Load")),1)])]),t("div",S,[t("button",{onClick:i[1]||(i[1]=a=>e.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[P,t("span",R,r(e.__("Print")),1)])])]),t("div",L,[t("div",N,[t("div",j,[t("div",V,[t("ul",null,[t("li",O,r(e.__("Date : {date}").replace("{date}",o.ns.date.current)),1),t("li",U,r(e.__("Document : Payment Type")),1),t("li",E,r(e.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:s.storeLogo,alt:s.storeName},null,8,G)])])]),t("div",q,[t("div",z,[t("table",A,[t("thead",I,[t("tr",null,[t("th",J,r(e.__("Summary")),1),t("th",K,r(e.__("Total")),1)])]),t("tbody",Q,[(p(!0),m(g,null,k(o.report.summary,(a,b)=>(p(),m("tr",{key:b,class:"font-semibold"},[t("td",W,r(a.label),1),t("td",X,r(e.nsCurrency(a.total)),1)]))),128))]),t("tfoot",Z,[t("tr",null,[t("td",$,r(e.__("Total")),1),t("td",tt,r(e.nsCurrency(o.report.total)),1)])])])])])])])}const ee=v(w,[["render",et]]);export{ee as default};
