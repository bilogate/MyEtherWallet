(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba344d30"],{"10b7":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"initial-state-ens"},[t("form",{staticClass:"send-form"},[t("div",{staticClass:"title-container"},[t("div",{staticClass:"title"},[t("h4",[e._v(" "+e._s(e.$t("ens.title"))+" ")]),t("p",[e._v(e._s(e.$t("ens.search-domain-desc")))])])]),t("div",{staticClass:"the-form domain-name"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.localDomainName,expression:"localDomainName"}],class:[e.domainNameErr?"errored":""],attrs:{placeholder:e.$t("ens.ph.three-char"),type:"text",name:""},domProps:{value:e.localDomainName},on:{input:function(a){a.target.composing||(e.localDomainName=a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.multiTld,expression:"!multiTld"}]},[e._v("."+e._s(e.tld))])]),t("div",{staticClass:"error-message-container"},[t("p",{directives:[{name:"show",rawName:"v-show",value:!1===e.contractInitiated,expression:"contractInitiated === false"}],staticClass:"contract-loading-warning"},[e._v(" "+e._s(e.$t("ens.warning.contract-not-ready"))+" ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.domainNameErr,expression:"domainNameErr"}],staticClass:"erroredMsg"},[e.isValidLength||""===e.localDomainName?t("span",[e._v(" "+e._s(e.$t("ens.warning.invalid-symbol"))+" ")]):t("span",[e._v(" "+e._s(e.$t("ens.warning.not-enough-char"))+" ")])])]),t("div",{staticClass:"submit-button-container"},[t("button",{class:[e.domainNameErr||""===e.localDomainName?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:function(a){return a.preventDefault(),e.checkDomain(a)}}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(" "+e._s(e.$t("ens.check-domain"))+" ")]),t("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),t("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=(t("ac1f"),t("5319"),t("f3f3")),o=t("539d"),l=t("2f62"),r={components:{"interface-bottom-text":o["a"]},props:{checkDomain:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},contractInitiated:{type:Boolean,default:!1},hostName:{type:String,default:""},tld:{type:String,default:""},domainNameErr:{type:Boolean,default:!1},multiTld:{type:Boolean,default:!1}},data:function(){return{localDomainName:this.hostName}},computed:Object(s["a"])({},Object(l["c"])("main",["network"]),{isValidLength:function(){return this.localDomainName.replace("."+this.network.type.ens.registrarTLD,"").length>=3}}),watch:{localDomainName:function(e){this.$emit("domainNameChange",e)},domainName:function(e){this.localDomainName=e}},methods:{expendDomainCheckForm:function(){this.$refs["checkForm"].classList.toggle("hidden"),this.$refs["domainList"].classList.add("hidden")},domainAvailabilityCheck:function(){this.$refs["domainList"].classList.add("hidden")}}},c=r,m=(t("45b7"),t("2877")),d=Object(m["a"])(c,n,i,!1,null,"b2677426",null),u=d.exports;t.d(a,"default",(function(){return u}))},"45b7":function(e,a,t){"use strict";var n=t("6cfb"),i=t.n(n);i.a},"6cfb":function(e,a,t){}}]);
//# sourceMappingURL=chunk-ba344d30.8e690c4f.js.map