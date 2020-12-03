(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{396:function(t,e){},397:function(t,e){},398:function(t,e){},399:function(t,e){},401:function(t,e,n){var content=n(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("a2f692b0",content,!0,{sourceMap:!1})},517:function(t,e,n){"use strict";var o=n(401);n.n(o).a},518:function(t,e,n){(e=n(10)(!1)).push([t.i,".pdf_container{position:relative!important}.pdf_container a{position:absolute!important;z-index:7!important;right:0!important}",""]),t.exports=e},573:function(t,e,n){"use strict";n.r(e);n(55);var o=n(13),c={name:"overdueInvoice",middleware:"auth",layout:"admin",components:{vuePDF:n(409).default},data:function(){return{invoice:{},overdueDays:0,amendInvoiceModalState:!1,undoModalState:!1}},computed:{items:function(){return[{text:"invoices",href:"/invoices"},{text:this.invoice._id,disabled:!0}]}},methods:{undo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.undoModalState=!1,t.invoice.published=!1,e.next=4,t.$axios.$patch("/invoices/".concat(t.$route.params.id),t.invoice).then((function(e){return t.$router.push("/invoices/draft/".concat(t.$route.params.id))})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/invoices/".concat(t.$route.params.id)).then((function(e){e[0].createdate=new Date(e[0].createdate).toISOString().substring(0,10),t.overdueDays=Math.round(new Date(e[0].createdate)-new Date(e[0].duedate)),t.invoice=e[0]}));case 2:case"end":return e.stop()}}),e)})))()}},r=(n(517),n(34)),v=n(37),d=n.n(v),l=n(370),_=n(144),m=n(132),f=n(118),h=n(419),x=n(377),w=n(368),C=n(316),y=n(129),k=n(130),M=n(83),S=n(420),V=n(379),D=n(328),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-breadcrumbs",{staticClass:"pa-0 ma-0",attrs:{items:t.items}})],1),t._v(" "),n("div",[n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.amendInvoiceModalState,callback:function(e){t.amendInvoiceModalState=e},expression:"amendInvoiceModalState"}},[n("v-card",[n("v-card-title",[t._v("Amend invoice")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("div",{staticClass:"py-5"},[n("h3",{staticClass:"text--primary"},[t._v("Undo publish")]),t._v(" "),n("p",[t._v("You may undo the latest published invoice. The invoice is not deleted but saved as a draft.")]),t._v(" "),n("v-btn",{attrs:{outlined:""},on:{click:function(e){t.undoModalState=!t.undoModalState}}},[t._v("Undo now")])],1),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"py-5"},[n("h3",{staticClass:"text--primary"},[t._v("Edit invoice")]),t._v(" "),n("p",[t._v("The invoice can be edited as long as it hasn't been recorded.")]),t._v(" "),n("v-btn",{attrs:{outlined:"",to:"/invoices/draft/"+t.invoice._id}},[t._v("Edit")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:function(e){t.amendInvoiceModalState=!1}}},[t._v("Done")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.undoModalState,callback:function(e){t.undoModalState=e},expression:"undoModalState"}},[n("v-card",[n("v-card-title",[t._v("Undo publish?")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"py-5"},[t._v("The invoice will be reverted to a draft. You will then be able to edit or delete it.")]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{depressed:""},on:{click:function(e){t.undoModalState=!1}}},[t._v("Cancel")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"success"},on:{click:t.undo}},[t._v("Continue")])],1)],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-row",{staticClass:"justify-space-between"},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("h3",{staticClass:"d-inline-block"},[t._v(t._s(t.invoice.customername))]),t._v(" "),n("v-chip",{staticClass:"mt-3 mx-2",attrs:{small:"",color:"error"}},[t._v("\n\t\t\t\t\t\tOverdue "+t._s(t.overdueDays)+" days ago\n\t\t\t\t\t")])],1),t._v(" "),n("v-col",{staticClass:"justify-end d-flex",attrs:{cols:"12",md:"8"}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ml-2",attrs:{outlined:""}},o),[t._v("\n\t\t\t\t\t\t\t\tMore\n\t\t\t\t\t\t\t\t"),n("v-icon",{staticClass:"font1"},[t._v("mdi mdi-chevron-down")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){t.amendInvoiceModalState=!0}}},[t._v("Amend invoice")]),t._v(" "),n("v-list-item",{attrs:{target:"_blank",href:t.invoice.pdf_link}},[t._v("Download")])],1)],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12 d-flex"}},[n("v-icon",{staticClass:"d-none d-sm-flex text--black mr-8"},[t._v("mdi mdi-file-document-outline")]),t._v(" "),n("v-card",{staticClass:"px-5 flex-grow-1",attrs:{outlined:"",tile:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h4",{staticClass:"text--primary d-inline"},[t._v("Invoice was published:")]),t._v(" "),n("span",[t._v(t._s(t.invoice.createdate))])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("h4",{staticClass:"text--primary d-inline"},[t._v("Invoice amount (inc VAT):")]),t._v(" "),n("span",[t._v(t._s(t.invoice.total))])])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12 d-flex"}},[n("v-icon",{staticClass:"d-none d-sm-flex text--black mr-8"},[t._v(" mdi mdi-email-outline ")]),t._v(" "),n("v-card",{staticClass:"px-5 flex-grow-1",attrs:{outlined:"",tile:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h4",{staticClass:"text--primary d-inline"},[t._v("Emailed to eric@dk.se")]),t._v(" "),n("span",[t._v("2020-05-14, 17:05")])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("h4",{staticClass:"text--primary d-inline"},[t._v("Delivery status:")]),t._v(" "),n("span",[t._v("Invoice opened")])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("h4",{staticClass:"text--primary d-inline"},[t._v("Invoice sent as ")]),t._v(" "),n("span",[t._v(" Link and attached PDF")])])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"pdf_container"},[n("v-btn",{staticClass:"ma-5",attrs:{outlined:"",small:"",target:"_blank",href:t.invoice.pdf_link}},[n("v-icon",{staticClass:"font1"},[t._v("mdi mdi-download")])],1),t._v(" "),n("no-ssr",[n("vuePDF",{attrs:{src:t.invoice.pdf_link}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBreadcrumbs:l.a,VBtn:_.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VChip:h.a,VCol:x.a,VDialog:w.a,VDivider:C.a,VIcon:y.a,VList:k.a,VListItem:M.a,VMenu:S.a,VRow:V.a,VSpacer:D.a})}}]);