(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{339:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("2065bca8",content,!0,{sourceMap:!1})},340:function(t,e,r){(e=r(10)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},341:function(t,e,r){var content=r(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("b1bed018",content,!0,{sourceMap:!1})},342:function(t,e,r){(e=r(10)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=e},352:function(t,e,r){var content=r(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("ca3ba768",content,!0,{sourceMap:!1})},353:function(t,e,r){var content=r(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("f38dcad4",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";r(12),r(7),r(5),r(4),r(8),r(38),r(39);var o=r(2),n=(r(16),r(339),r(543)),c=r(344),l=r(142),d=r(350),v=r(149),m=r(355),h=r(356),f=r(40),_=r(143),x=r(6),y=r(9),w=r(0);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(x.a)(c.a,l.a,d.a,v.a,m.a,h.a,f.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.v.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var r=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');r.length&&r[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(n.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k({},data.style,{maxWidth:"none"===this.maxWidth?void 0:Object(w.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(w.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},370:function(t,e,r){"use strict";r(12),r(7),r(5),r(4),r(8);var o=r(2),n=(r(341),r(41)),c=r(6);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(c.a)(n.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(o.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d({},data,{attrs:d({},data.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=r(0),h=Object(m.i)("v-breadcrumbs__divider","li"),f=r(23);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var o=this.items[i];r.push(o.text),e?t.push(this.$scopedSlots.item({item:o})):t.push(this.$createElement(v,{key:r.join("."),props:o},[o.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},381:function(t,e,r){"use strict";var o=r(352);r.n(o).a},382:function(t,e,r){(e=r(10)(!1)).push([t.i,".overline{color:#336882;font-size:25px}",""]),t.exports=e},383:function(t,e,r){"use strict";var o=r(353);r.n(o).a},384:function(t,e,r){(e=r(10)(!1)).push([t.i,".blueSection{display:block;width:100%;background-color:#dceaf5}",""]),t.exports=e},404:function(t,e,r){var content=r(524);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("746c9f46",content,!0,{sourceMap:!1})},410:function(t,e,r){"use strict";r(55);var o=r(13),n={data:function(){return{the_customer:{},dialog:!1}},props:["customerId","customer","state"],watch:{customerId:function(t){Object.assign(this.the_customer,this.customer)},state:function(t){this.dialog=t}},methods:{saveUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/customers",t.the_customer).then((function(e){console.log(e),t.$emit("updated"),t.dialog=!1,t.the_customer={}})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},editUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.setToken(t.$auth.getToken("local"));case 2:return r=t.customer,e.next=5,t.$axios.$patch("/customers/".concat(r._id),t.the_customer).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(r),t.$emit("UserEdited"),t.dialog=!1,t.the_customer={};case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}));case 5:case"end":return e.stop()}}),e)})))()},close:function(){this.the_customer={},this.$emit("close"),this.dialog=!1}}},c=(r(381),r(34)),l=r(37),d=r.n(l),v=r(144),m=r(132),h=r(118),f=r(377),_=r(325),x=r(368),y=r(316),w=r(379),O=r(328),k=r(414),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[t._v("Add user Profile")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("p",{staticClass:"overline"},[t._v("Personal informations")]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Name*",placeholder:"Customer full name",outlined:"",color:"#336882"},model:{value:t.the_customer.customername,callback:function(e){t.$set(t.the_customer,"customername",e)},expression:"the_customer.customername"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Org-nummer",placeholder:"YYYYMMDD-NNNN",outlined:"",type:"number",color:"#336882"},model:{value:t.the_customer.orgnummer,callback:function(e){t.$set(t.the_customer,"orgnummer",e)},expression:"the_customer.orgnummer"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"VAT-nummer",placeholder:"VAT-nummer",outlined:"",color:"#336882"},model:{value:t.the_customer.vatnummer,callback:function(e){t.$set(t.the_customer,"vatnummer",e)},expression:"the_customer.vatnummer"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Kundnummer",placeholder:"Kundnummer",outlined:"",type:"number",color:"#336882"},model:{value:t.the_customer.kundnummer,callback:function(e){t.$set(t.the_customer,"kundnummer",e)},expression:"the_customer.kundnummer"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-divider"),t._v(" "),r("h1",{staticClass:"overline pt-4 pb-4"},[t._v("Contact informations")])],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Postadress",placeholder:"Postadress",outlined:"",color:"#336882"},model:{value:t.the_customer.postadress,callback:function(e){t.$set(t.the_customer,"postadress",e)},expression:"the_customer.postadress"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Postadress 2",placeholder:"Postadress 2",outlined:"",color:"#336882"},model:{value:t.the_customer.postadress2,callback:function(e){t.$set(t.the_customer,"postadress2",e)},expression:"the_customer.postadress2"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{dense:"",label:"Postnummer",placeholder:"Postnummer",outlined:"",type:"number",color:"#336882"},model:{value:t.the_customer.postnummer,callback:function(e){t.$set(t.the_customer,"postnummer",e)},expression:"the_customer.postnummer"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{dense:"",label:"stad",placeholder:"stad",outlined:"",color:"#336882"},model:{value:t.the_customer.stad,callback:function(e){t.$set(t.the_customer,"stad",e)},expression:"the_customer.stad"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Kontaktperson",placeholder:"Kontaktperson",outlined:"",color:"#336882"},model:{value:t.the_customer.kontaktperson,callback:function(e){t.$set(t.the_customer,"kontaktperson",e)},expression:"the_customer.kontaktperson"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"E-post",placeholder:"E-post",type:"email",outlined:"",color:"#336882"},model:{value:t.the_customer.epost,callback:function(e){t.$set(t.the_customer,"epost",e)},expression:"the_customer.epost"}}),t._v(" "),r("v-divider")],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"overline"},[t._v("Term")]),t._v(" "),r("v-text-field",{attrs:{dense:"",label:"Dagar*",placeholder:"Dagar",outlined:"",type:"number",color:"#336882"},model:{value:t.the_customer.dagar,callback:function(e){t.$set(t.the_customer,"dagar",e)},expression:"the_customer.dagar"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Dröjsmålsränta (%)",placeholder:"Dröjsmålsränta",outlined:"",color:"#336882"},model:{value:t.the_customer.overdueinterest,callback:function(e){t.$set(t.the_customer,"overdueinterest",e)},expression:"the_customer.overdueinterest"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Country",placeholder:"Country",outlined:"",color:"#336882"},model:{value:t.the_customer.country,callback:function(e){t.$set(t.the_customer,"country",e)},expression:"the_customer.country"}})],1)],1)],1),t._v(" "),r("small",[t._v("*indicates required field")])],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{depressed:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),r("v-spacer"),t._v(" "),t.customerId?r("v-btn",{attrs:{color:"success",depressed:""},on:{click:t.editUser}},[t._v("update")]):r("v-btn",{attrs:{color:"primary",depressed:""},on:{click:t.saveUser}},[t._v("Save")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VContainer:_.a,VDialog:x.a,VDivider:y.a,VRow:w.a,VSpacer:O.a,VTextField:k.a})},411:function(t,e,r){"use strict";var o={props:["allItems"],data:function(){return{search:"",state:[{text:"All states",value:"All"}],States:[{text:"All states",value:"All"},{text:"Paid",value:"Paid"},{text:"Published",value:"Published"},{text:"Overdue",value:"Overdue"},{text:"Drafts",value:"Draft"}],types:[{text:"All types",value:"All"},{text:"Invoice",value:"Invoice"},{text:"Cash invoice",value:"cash"},{text:"Credit invoice",value:"credit"}],activeclass:"primary",allclass:"normal",headers:[{text:"Invoice number",align:"start",sortable:!1,value:"ocrid"},{text:"Customer",value:"customername"},{text:"Invoice amount (inc VAT)",value:"summa"},{text:"status",value:"status"},{text:"Date of invoice",value:"fromDate"},{text:"Due date",value:"duedate"},{text:"Delivery  date",value:"deliveryDate"}],displaiedInvoices:[]}},watch:{allItems:function(t){this.displaiedInvoices=t}},methods:{getColor:function(t){return"Paid"==t?"green":"Overdue"==t?"red":"Draft"==t?"black":"Published"==t?"blue":void 0},filterstate:function(a){this.displaiedInvoices="All"==a?this.allItems:this.allItems.filter((function(t){return t.status==a}))},activeinvoices:function(){this.displaiedInvoices=this.allItems.filter((function(t){return"Paid"!=t.status})),this.activeclass="primary",this.allclass="normal"},allinvoices:function(){this.displaiedInvoices=this.allItems.filter((function(t){return"Draft"!=t.status})),this.allclass="primary",this.activeclass="normal"},handleClick:function(a){"Draft"==a.status?this.$router.push("/invoices/draft/"+a._id):"Overdue"==a.status?this.$router.push("/invoices/overdue/"+a._id):"Published"==a.status?this.$router.push("/invoices/published/"+a._id):this.$router.push("/invoices/paid/"+a._id)}},mounted:function(){this.displaiedInvoices=this.allItems,this.allinvoices()}},n=r(34),c=r(37),l=r.n(c),d=r(144),v=r(132),m=r(419),h=r(377),f=r(563),_=r(379),x=r(413),y=r(414),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-btn",{attrs:{text:"",small:"",color:t.activeclass},on:{click:t.activeinvoices}},[t._v("Active invoices")]),t._v(" "),r("v-btn",{attrs:{text:"",small:"",color:t.allclass},on:{click:t.allinvoices}},[t._v("All invoices")])],1),t._v(" "),r("v-card",{staticClass:"pa-8"},[r("v-row",{staticClass:"pa-4"},[r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-text-field",{attrs:{label:"Search","append-icon":"mdi-magnify","single-line":"","hide-details":"",solo:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-select",{attrs:{items:t.States,"item-text":"text","item-value":"value",label:"All states",solo:"",dense:""},on:{change:t.filterstate},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-select",{attrs:{items:t.types,"item-text":"text","item-value":"value",label:"All types",solo:"",dense:""}})],1)],1),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.displaiedInvoices,search:t.search},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"item.ocrid",fn:function(e){var o=e.item;return[r("P",{staticClass:"blue--text"},[t._v("#"+t._s(o.ocrid))])]}},{key:"item.status",fn:function(e){var o=e.item;return[r("v-chip",{attrs:{color:t.getColor(o.status),dark:""}},[t._v(t._s(o.status))])]}}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VChip:m.a,VCol:h.a,VDataTable:f.a,VRow:_.a,VSelect:x.a,VTextField:y.a})},412:function(t,e,r){"use strict";var o={props:["overpaid","overdue","outstanding"]},n=(r(383),r(34)),c=r(37),l=r.n(c),d=r(377),v=r(379),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("div",{staticClass:"blueSection pa-5"},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"4"}},[r("h6",{staticClass:"grey--text text-center subtitle-1 my-4 my-md-0"},[t._v("Overpaid (inc VAT)")]),t._v(" "),r("h6",{staticClass:"display-1 text-center"},[t._v(t._s(t.overpaid||0)+"kr")])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("h6",{staticClass:"grey--text text-center subtitle-1 my-4 my-md-0"},[t._v("Overdue (inc VAT)")]),t._v(" "),r("h6",{staticClass:"display-1 text-center"},[t._v(t._s(t.overdue||0)+" kr")])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("h6",{staticClass:"grey--text text-center subtitle-1 my-4 my-md-0"},[t._v("Outstanding (inc VAT)")]),t._v(" "),r("h6",{staticClass:"display-1 text-center"},[t._v(t._s(t.outstanding||0)+"  kr")])])],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:d.a,VRow:v.a})},523:function(t,e,r){"use strict";var o=r(404);r.n(o).a},524:function(t,e,r){(e=r(10)(!1)).push([t.i,".v-list-item[data-v-447ec03e]{cursor:pointer!important}",""]),t.exports=e},577:function(t,e,r){"use strict";r.r(e);r(55);var o=r(13),n=r(411),c=r(410),l=r(412),d={middleware:"auth",layout:"admin",components:{dateTable:n.a,UserModal:c.a,calculations:l.a},data:function(){return{customer:{},deleteDialog:!1,editUserDialog:!1,customerInvoices:[],overdueSum:0}},computed:{IndividualsOrCorporations:function(){return this.customer.orgnummer?"2":"1"},items:function(){return[{text:"customers",href:"/customer"},{text:this.customer.customername,disabled:!0,href:"breadcrumbs_link_1"}]}},methods:{getCustomer:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/customers/".concat(t.$route.params.id)).then((function(e){return t.customer=e[0]}));case 2:case"end":return e.stop()}}),e)})))()},deleteCustomer:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$delete("/customers/".concat(t.$route.params.id)).then((function(e){return t.$router.push("/customer")})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},addInvoiceWithCustomer:function(){this.$store.commit("setCustomer",this.customer),this.$router.push("/newinvoice")},downloadData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var element;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(element=document.createElement("a")).setAttribute("href","data:json/application;charset=utf-8,"+encodeURIComponent(JSON.stringify(t.customer))),element.setAttribute("download","".concat(t.customer.customername,".json")),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element);case 7:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCustomer();case 2:return e.next=4,t.$axios.$get("/invoices").then((function(e){var r=e.filter((function(e){return e.customername==t.customer.customername}));r.forEach((function(e){e.published&&!e.invoicepaid&&new Date(e.duedate)>Date.now()?e.status="Published":e.published&&!e.invoicepaid&&new Date(e.duedate)<Date.now()?(e.status="Overdue",t.overdueSum+=e.summa):e.published&&e.invoicepaid?e.status="Paid":e.published||(e.status="Draft"),e.duedate&&(e.duedate=new Date(e.duedate).toISOString().substring(0,10)),e.fromDate="-",e.deliveryDate="-"})),t.customerInvoices=r})).catch((function(t){return console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()}},v=(r(523),r(34)),m=r(37),h=r.n(m),f=r(370),_=r(144),x=r(132),y=r(118),w=r(377),O=r(368),k=r(316),C=r(129),j=r(544),$=r(130),D=r(83),I=r(56),A=r(420),V=r(379),P=r(328),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-breadcrumbs",{staticClass:"pa-0 ma-0",attrs:{items:t.items}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"justify-space-between"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("h3",[t._v(t._s(t.customer.customername))])]),t._v(" "),r("UserModal",{attrs:{state:t.editUserDialog,customerId:t.customer._id,customer:t.customer},on:{UserEdited:t.getCustomer,close:function(e){t.editUserDialog=!1}}}),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[r("v-card",[r("v-card-title",[t._v("Deleting customer "+t._s(t.customer.customername))]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"py-3"},[t._v("Are you sure you want to remove customer Marika Bengtsson? This cannot be undone!")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{depressed:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("close")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"error",depressed:""},on:{click:t.deleteCustomer}},[t._v("Yes, delete")])],1)],1)],1),t._v(" "),r("v-col",{staticClass:"justify-end d-flex",attrs:{cols:"12",md:"8"}},[r("v-btn",{attrs:{color:"success"},on:{click:t.addInvoiceWithCustomer}},[t._v("New Invoice")]),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"ml-2",attrs:{outlined:""}},o),[r("v-icon",{staticClass:"font1"},[t._v("mdi mdi-dots-horizontal")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",[r("v-list-item-title",{on:{click:function(e){t.editUserDialog=!0}}},[t._v("Edit User")])],1),t._v(" "),r("v-list-item",[r("v-list-item-title",{on:{click:function(e){t.deleteDialog=!0}}},[t._v("Delete Customer")])],1),t._v(" "),r("v-list-item",[r("v-list-item-title",{on:{click:t.downloadData}},[t._v("Download Data")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-card",{staticClass:"pa-3",attrs:{outlined:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Customer type")]),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.orgnummer?"Company":"Individuals"))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[t.customer.orgnummer?r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Org-number")]):t._e(),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.orgnummer))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[t.customer.epost?r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Email")]):t._e(),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.epost))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[t.customer.postadress?r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Address")]):t._e(),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.postadress))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[t.customer.vatnummer?r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("VAT number")]):t._e(),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.vatnummer))])])],1)],1),t._v(" "),r("calculations",{attrs:{overdue:t.overdueSum}}),t._v(" "),r("dateTable",{attrs:{allItems:t.customerInvoices}})],1)}),[],!1,null,"447ec03e",null);e.default=component.exports;h()(component,{VBreadcrumbs:f.a,VBtn:_.a,VCard:x.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:w.a,VDialog:O.a,VDivider:k.a,VIcon:C.a,VLayout:j.a,VList:$.a,VListItem:D.a,VListItemTitle:I.b,VMenu:A.a,VRow:V.a,VSpacer:P.a})}}]);