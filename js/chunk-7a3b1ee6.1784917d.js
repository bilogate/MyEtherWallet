(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a3b1ee6"],{"2bdf":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manage-ens-container"},[n("h3",[t._v(t._s(t.$t("ens.manage"))+" "+t._s(t.domainName))]),n("b-btn",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"},{name:"b-toggle",rawName:"v-b-toggle.multicoinsec",modifiers:{multicoinsec:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.multi-coin")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"multicoinsec",visible:t.resolverMultiCoinSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t.selectedCurrency}},t._l(Object.keys(t.supportedCoins),(function(e,s){return n("b-dd-item",{key:e+s,on:{click:function(n){return t.addCurrencyInput(e)}}},[t._v(t._s(e))])})),1)],1),t._l(t.currencyInputs,(function(e,s){return n("div",{key:s.id,staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(s)+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"v.value"}],attrs:{placeholder:e.name+" address",type:"text",name:"updateResolver"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),n("i",{class:["validity-indication fa",t.isInvalidAddress(e)?"error fa-times-circle-o":"valid fa-check-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeCoinInput(s)}}})])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:t.isValidAddresses?"":"disabled",on:{click:function(e){return e.preventDefault(),t.checkAndSendCurrency(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.textrecords",modifiers:{textrecords:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.txt-record")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"textrecords",visible:!t.resolverMultiCoinSupport&&t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t._f("capitalize")(t.selectedText)}},t._l(Object.keys(t.txtRecords),(function(e,s){return n("b-dd-item",{key:e+s,on:{click:function(n){return t.addTxtInput(e)}}},[t._v(t._s(t._f("capitalize")(e)))])})),1)],1),t._l(t.txtRecordInputs,(function(e,s){return n("div",{key:s.id,staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(t._f("capitalize")(s))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.txtRecordInputs[s],expression:"txtRecordInputs[k]"},{name:"validate",rawName:"v-validate",value:t.getValidation(s),expression:"getValidation(k)"}],attrs:{placeholder:t._f("capitalize")(s),name:s,type:"text"},domProps:{value:t.txtRecordInputs[s]},on:{input:function(e){e.target.composing||t.$set(t.txtRecordInputs,s,e.target.value)}}}),n("i",{class:["validity-indication fa",t.txtRecordInputs[s]&&""!==t.txtRecordInputs[s]&&!t.errors.hasOwnProperty(""+s)?"valid fa-check-circle-o":"error fa-times-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeTxtInput(s)}}})])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:t.validTextRecords?"disabled":"",on:{click:function(e){return e.preventDefault(),t.checkAndSendTxtRecs(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.transferens",modifiers:{transferens:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.transfer-domain")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"transferens",visible:!t.resolverMultiCoinSupport&&!t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-form"},[n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"transferEns"}},[t._v(t._s(t.$t("ens.transfer-to"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:t.transferTo},on:{input:function(e){e.target.composing||(t.transferTo=e.target.value)}}})]),n("div",{staticClass:"submit-container"},[n("button",{class:t.isAddress(t.transferTo)?"":"disabled",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.transferDomain(t.transferTo)}}},[t._v(" "+t._s(t.$t("ens.transfer"))+" ")])])])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},r=[],a=(n("99af"),n("7db0"),n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("159b"),n("f3f3")),i=n("539d"),o=n("b7d3"),c=n("2f62"),u=n("ce96"),l=n("1131"),d=n.n(l),p=n("3c35f"),f={components:{"interface-bottom-text":i["a"]},props:{domainName:{type:String,default:""},setMultiCoin:{type:Function,default:function(){}},setRecord:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},tld:{type:String,default:""},resolverMultiCoinSupport:{type:Boolean,default:!1},resolverTxtSupport:{type:Boolean,default:!1},supportedCoins:{type:Object,default:function(){}},txtRecords:{type:Object,default:function(){}}},data:function(){var t=this.copySupported(),e={};for(var n in t)t[n].hasOwnProperty("value")&&""===t[n].value&&delete t[n];for(var s in this.txtRecords)""!==this.txtRecords[s]&&(e[s]=this.txtRecords[s]);return{transferTo:"",multiCoinSupport:!1,isAddress:o["a"],currencyInputs:t,selectedCurrency:"ETH",selectedText:"Email",hasError:!1,txtRecordInputs:e}},computed:Object(a["a"])({},Object(c["c"])("main",["web3"]),{isValidAddresses:function(){for(var t in this.currencyInputs){if(this.currencyInputs[t].id===this.currencyInputs.ETH.id&&""===this.currencyInputs[t].value)return!1;if(""!==this.currencyInputs[t].value&&!this.currencyInputs[t].validator.validate(this.currencyInputs[t].value))return!1}return!0},validTextRecords:function(){for(var t in this.txtRecordInputs)if(this.txtRecordInputs[t]&&""!==this.txtRecordInputs[t])return!1;return!0}}),watch:{currencyInputs:{handler:function(t){this.currencyInputs=t},deep:!0},txtRecordInputs:{handler:function(t){this.txtRecordInputs=t},deep:!0}},mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")},methods:{isInvalidAddress:function(t){return t.id===this.supportedCoins.ETH.id&&""===t.value||""!==t.value&&!t.validator.validate(t.value)},getValidation:function(t){var e=p["a"].find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));switch(e.type){case"url":return"required|url:require_protocol";case"email":return"email|required";default:return"required"}},copySupported:function(){var t=d.a._.map(this.supportedCoins,d.a._.clone),e={};return t.forEach((function(t){e[t.symbol]=t})),e},addCurrencyInput:function(t){this.selectedCurrency=t;var e=this.copySupported(),n=Object.assign({},this.currencyInputs);n[t]?u["e"].responseHandler("Currency ".concat(t," is already added for ").concat(this.domainName),u["e"].WARN):(n[t]=e[t],this.currencyInputs=n)},addTxtInput:function(t){this.selectedText=t;var e=Object.assign({},this.txtRecordInputs);e[t]?u["e"].responseHandler("Text Record ".concat(t," input is already added for ").concat(this.domainName),u["e"].WARN):(e[t]=this.txtRecordInputs[t],this.txtRecordInputs=e)},removeCoinInput:function(t){var e=Object.assign({},this.currencyInputs);e[t].value="",this.currencyInputs=e},removeTxtInput:function(t){var e=Object.assign({},this.txtRecordInputs);e[t]="",this.txtRecordInputs=e},checkAndSendTxtRecs:function(){var t={},e=Object.assign({},this.txtRecordInputs),n=Object.assign({},this.txtRecords);Object.keys(n).forEach((function(s){e[s]&&n[s]!==e[s]&&(t[s]=e[s])})),Object.keys(t).length>0&&this.setRecord(t)},checkAndSendCurrency:function(){var t=[],e=Object.assign({},this.currencyInputs),n=Object.assign({},this.supportedCoins);Object.keys(n).forEach((function(s){e[s]&&n[s].value!==e[s].value&&t.push(e[s])})),t.length>0&&this.setMultiCoin(t)}}},m=f,v=(n("cc46"),n("2877")),h=Object(v["a"])(m,s,r,!1,null,"2e28c067",null),b=h.exports;n.d(e,"default",(function(){return b}))},"3c35f":function(t,e,n){"use strict";var s=[{name:"email",type:"email"},{name:"url",type:"url"},{name:"avatar",type:"url"},{name:"description",type:"string"},{name:"notice",type:"string"},{name:"keywords",type:"string"},{name:"vnd.twitter",type:"string"},{name:"vnd.github",type:"string"}];e["a"]=s},"8a74":function(t,e,n){},cc46:function(t,e,n){"use strict";var s=n("8a74"),r=n.n(s);r.a}}]);
//# sourceMappingURL=chunk-7a3b1ee6.1784917d.js.map