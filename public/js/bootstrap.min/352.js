"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[352],{5352:(s,t,e)=>{e.r(t),e.d(t,{default:()=>i});e(7700);const a={name:"ns-best-customers",mounted:function(){var s=this;this.hasLoaded=!1,this.subscription=Dashboard.bestCustomers.subscribe((function(t){s.hasLoaded=!0,s.customers=t}))},methods:{__:e(3632).__},data:function(){return{customers:[],subscription:null,hasLoaded:!1}},destroyed:function(){this.subscription.unsubscribe()}};const i=(0,e(1900).Z)(a,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"flex flex-auto flex-col shadow rounded-lg overflow-hidden",attrs:{id:"ns-best-customers"}},[e("div",{staticClass:"flex-auto"},[e("div",{staticClass:"head text-center border-b w-full py-2"},[e("h5",[s._v(s._s(s.__("Best Customers")))])]),s._v(" "),e("div",{staticClass:"body"},[s.hasLoaded?s._e():e("div",{staticClass:"h-56 w-full flex items-center justify-center"},[e("ns-spinner",{attrs:{size:"12",border:"4"}})],1),s._v(" "),s.hasLoaded&&0===s.customers.length?e("div",{staticClass:"h-56 flex items-center justify-center flex-col"},[e("i",{staticClass:"las la-grin-beam-sweat text-6xl"}),s._v(" "),e("p",{staticClass:"text-sm"},[s._v(s._s(s.__("Well.. nothing to show for the meantime")))])]):s._e(),s._v(" "),s.customers.length>0?e("table",{staticClass:"table w-full"},[e("thead",s._l(s.customers,(function(t){return e("tr",{key:t.id,staticClass:"entry border-b text-sm"},[e("th",{staticClass:"p-2"},[e("div",{staticClass:"-mx-1 flex justify-start items-center"},[s._m(0,!0),s._v(" "),e("div",{staticClass:"px-1 justify-center"},[e("h3",{staticClass:"font-semibold items-center"},[s._v(s._s(t.name))])])])]),s._v(" "),e("th",{staticClass:"flex justify-end amount p-2"},[s._v(s._s(s._f("currency")(t.purchases_amount)))])])})),0)]):s._e()])])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"px-1"},[t("div",{staticClass:"rounded-full"},[t("i",{staticClass:"las la-user-circle text-xl"})])])}],!1,null,null,null).exports}}]);