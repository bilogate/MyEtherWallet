(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9616bdb4"],{4820:function(e,t,n){"use strict";var a=n("69b7"),r=n.n(a);r.a},"69b7":function(e,t,n){},c1be:function(e,t,n){"use strict";var a=function(e,t){var n=t._c;return n("div",[n("div",{class:[t.props.color,"loading-container","loading-sign"]},[t._m(0),""!=t.props.loadingmessage1?n("p",{staticClass:"loading-message1"},[t._v(" "+t._s(t.props.loadingmessage1)+" ")]):t._e(),""!=t.props.loadingmessage2?n("p",{staticClass:"loading-message2"},[t._v(" "+t._s(t.props.loadingmessage2)+" ")]):t._e()])])},r=[function(e,t){var n=t._c;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],s={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},i=s,o=(n("4820"),n("2877")),c=Object(o["a"])(i,a,r,!0,null,"3944612c",null),u=c.exports;n.d(t,"a",(function(){return u}))},de5c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"max-width":"500px"}},[e.ready?e._e():n("div",[n("loading-sign")],1),e.ready?n("div",{staticClass:"currency-ops-new"},[n("h3",{staticClass:"mb-3"},[e._v(" "+e._s(e.$t("dappsMCDMaker.earn-with-dai"))+" ")]),n("div",[e._v(" "+e._s(e.$t("dappsMCDMaker.dai-savings-rate",{value:e.displayPercentValue(e.yearlyRate)}))+" ")]),n("div",[e._v(" "+e._s(e.$t("dappsMCDMaker.deposited-amount",{value:e.deposited}))+" ")]),n("div",{staticClass:"currency-picker-container"},[e.showSetupScreen?n("div",[n("div",[n("p",[n("b",[e._v(" "+e._s(e.$t("dappsMCDMaker.create-vault-proxy")))])]),n("p",[e._v(e._s(e.$t("dappsMCDMaker.create-proxy-info-message")))]),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.proxyPresent?"disabled":"","submit-button large-round-button-green-filled"],on:{click:e.BuildProxy}},[e._v(" "+e._s(e.$t("dappsMCDMaker.setup"))+" ")])])]),n("p",[n("b",[e._v(" "+e._s(e.$t("dappsMCDMaker.savings-set-allowance")))])]),n("p",[e._v(e._s(e.$t("dappsMCDMaker.savings-set-allowance-info")))]),n("div",{staticClass:"buttons-container"},[n("div",{class:[!e.hasAllowance&&e.proxyPresent?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.setAllowance}},[e._v(" "+e._s(e.$t("dappsMCDMaker.set"))+" ")])])]):e._e(),e.showSetupScreen?e._e():n("div",[n("div",{staticClass:"mt-3 mb-5"},[n("b-button-group",{attrs:{size:"lg"}},[n("b-button",{class:["submit-btn",e.showDepositDisplay?"active":""],on:{click:function(t){return e.showDeposit(!0)}}},[e._v(e._s(e.$t("dappsMCDMaker.deposit"))+" ")]),n("b-button",{class:["submit-btn",e.showDepositDisplay?"":"active"],on:{click:function(t){return e.showDeposit(!1)}}},[e._v(e._s(e.$t("dappsMCDMaker.withdraw"))+" ")])],1)],1),e.showDepositDisplay?n("div",[n("div",{staticClass:"interface__block-title"},[n("span",[e._v(" "+e._s(e.$t("dappsMCDMaker.deposit")))]),n("div",{staticClass:"top-buttons",on:{click:e.setMaxDeposit}},[n("p",[e._v(e._s(e.$t("dappsMCDMaker.entire-dai-balance")))])])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon}}),e._v(" "+e._s(e.$t("dappsMCDMaker.dai"))+" "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMCDMaker.dai-stable-coin"))+" ")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:e.daiQty},on:{input:function(t){t.target.composing||(e.daiQty=t.target.value)}}}),e.showErrorInfoOrOther?n("div",{staticClass:"input-block-message"},[n("p",[e._v(" Some Error, info, or instructions ")])]):e._e(),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs&&e.canDeposit?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.deposit}},[e._v(" "+e._s(e.$t("dappsMCDMaker.deposit"))+" ")])])]):e._e(),e.showDepositDisplay?e._e():n("div",[n("div",{staticClass:"interface__block-title"},[n("span",[e._v(" "+e._s(e.$t("dappsMCDMaker.withdraw")))]),n("div",{staticClass:"top-buttons",on:{click:e.setMaxWithdraw}},[n("p",[e._v(e._s(e.$t("dappsMCDMaker.entire-deposit-balance")))])])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon}}),e._v(" "+e._s(e.$t("dappsMCDMaker.dai"))+" "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMCDMaker.dai-stable-coin"))+" ")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:e.daiQty},on:{input:function(t){t.target.composing||(e.daiQty=t.target.value)}}}),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs&&e.canWithdraw?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.withdraw}},[e._v(" "+e._s(e.$t("dappsMCDMaker.withdraw"))+" ")])])])])])]):e._e()])},r=[],s=(n("a15b"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("c964")),i=n("f3f3"),o=n("2f62"),c=n("901e"),u=n.n(c),d=n("d1fb"),p=n("c1be"),l=n("9b76"),v=n.n(l),h=n("c52a"),b={components:{"loading-sign":p["a"]},props:{ethPrice:{type:u.a,default:function(){return new u.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1},getValueOrFunction:{type:Function,default:function(){}}},data:function(){return{DaiIcon:v.a,showDepositDisplay:!0,setupComplete:!1,userHasProxy:!1,showErrorInfoOrOther:!1,proxyAddress:null,daiQty:0,gasLimit:-1,yearlyRate:0,daiBalance:0,deposited:0,maxWithdrawable:0,allowance:0,daiAllowance:0,proxyChecked:!1,allowanceChecked:!1,depositedValue:0}},computed:Object(i["a"])({},Object(o["c"])("main",["account","gasPrice","web3","network","ens"]),{showSetupScreen:function(){return!this.hasAllowance||!this.proxyPresent},validInputs:function(){return Object(d["F"])(this.daiQty).gt(0)&&this.hasEnough&&this.proxyPresent},hasEnough:function(){return this.showDepositDisplay?Object(d["F"])(this.daiBalance).gte(this.daiQty):Object(d["F"])(this.maxWithdrawable).gte(this.daiQty)},proxyPresent:function(){return null!=this.proxyAddress},proxyAllowance:function(){return null!=this.proxyAddress},hasAllowance:function(){return Object(d["F"])(this.daiAllowance).gt(0)},canWithdraw:function(){return!!this.deposited&&Object(d["F"])(this.deposited.toBigNumber()).gte(this.daiQty)},canDeposit:function(){return Object(d["F"])(this.daiBalance).gte(this.daiQty)},ready:function(){return this.proxyChecked&&this.allowanceChecked}}),watch:{makerActive:function(e){e&&this.setup()}},beforeDestroy:function(){this.makerSaver={}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new e.web3.eth.Contract(d["e"],d["h"].PROXY_REGISTRY),t.next=3,n.methods.proxies(e.account.address).call();case 3:e.proxyAddress=t.sent,"0x0000000000000000000000000000000000000000"===e.proxyAddress&&(e.proxyAddress=null),e.proxyChecked=!0,e.setup();case 7:case"end":return t.stop()}}),t)})))()},methods:{setup:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.makerSaver=e.getValueOrFunction("_mcdSaving"),e.setupComplete=void 0!==e.makerSaver,t.next=4,e.getValues();case 4:case"end":return t.stop()}}),t)})))()},getValues:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.setupComplete){t.next=11;break}return t.t0=d["F"],t.next=4,e.makerSaver.getYearlyRate();case 4:return t.t1=t.sent,e.yearlyRate=(0,t.t0)(t.t1).minus(1).toFixed(10),e.hasProxy(),e.checkBalance(),t.next=10,e.depositBalance();case 10:e.getAllowance();case 11:return t.abrupt("return",0);case 12:case"end":return t.stop()}}),t)})))()},setMaxDeposit:function(){this.daiQty=this.daiBalance},setMaxWithdraw:function(){this.maxWithdrawable&&(this.daiQty=this.maxWithdrawable)},showDeposit:function(e){this.showDepositDisplay=e,this.daiQty=0},deposit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.setupComplete){t.next=3;break}return t.next=3,e.makerSaver.join(Object(h["MDAI"])(e.daiQty));case 3:case"end":return t.stop()}}),t)})))()},withdraw:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.setupComplete){t.next=3;break}return t.next=3,e.makerSaver.exit(Object(h["MDAI"])(e.daiQty));case 3:case"end":return t.stop()}}),t)})))()},depositBalance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.setupComplete){t.next=6;break}return t.next=3,e.makerSaver.balance();case 3:e.deposited=t.sent,e.depositedValue=e.deposited._amount.toFixed(2),e.deposited&&(e.maxWithdrawable=e.deposited.toBigNumber().toString());case 6:case"end":return t.stop()}}),t)})))()},checkBalance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.setupComplete){t.next=11;break}if(n=e.getValueOrFunction("balances"),!n){t.next=11;break}if(a=n["MDAI"],a){t.next=6;break}return t.abrupt("return",Object(d["F"])(0));case 6:if(e.daiBalance=a.toString(),!e.proxyAddress){t.next=11;break}return t.next=10,e.getAllowance();case 10:e.daiAllowance=t.sent;case 11:return t.abrupt("return",Object(d["F"])(0));case 12:case"end":return t.stop()}}),t)})))()},hasProxy:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.setupComplete){t.next=13;break}return t.next=3,e.getValueOrFunction("getProxy")();case 3:if(e.proxyAddress=t.sent,e.proxyAddress){t.next=8;break}return e.proxyChecked=!0,e.proxyAddress=null,t.abrupt("return",null);case 8:return t.next=10,e.getAllowance();case 10:return e.daiAllowance=t.sent,e.proxyChecked=!0,t.abrupt("return",e.proxyAddress);case 13:return e.proxyChecked=!0,t.abrupt("return",null);case 15:case"end":return t.stop()}}),t)})))()},BuildProxy:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.setupComplete){t.next=5;break}return t.next=3,e.getValueOrFunction("getProxy")();case 3:e.proxyAddress=t.sent,e.proxyAddress||e.getValueOrFunction("_proxyService").build().then((function(){return e.getValueOrFunction("_proxyService").currentProxy()})).then((function(t){e.proxyAddress=t}));case 5:case"end":return t.stop()}}),t)})))()},adapterAddress:function(e){var t="MCD_JOIN_"+e.replace(/-/g,"_");return this.get("smartContract").getContractAddress(t)},getAllowance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.proxyAddress){t.next=13;break}if(!e.setupComplete||!e.getValueOrFunction("tokens")){t.next=7;break}return t.next=4,e.getValueOrFunction("tokens")["MDAI"]._contract.allowance(e.getValueOrFunction("account").address,e.proxyAddress);case 4:return n=t.sent,e.allowanceChecked=!0,t.abrupt("return",n);case 7:return a=new e.web3.eth.Contract(d["c"],d["h"].MCD_DAI),t.next=10,a.methods.allowance(e.getValueOrFunction("account").address,e.proxyAddress).call();case 10:return r=t.sent,e.allowanceChecked=!0,t.abrupt("return",r);case 13:return e.allowanceChecked=!0,t.abrupt("return",0);case 15:case"end":return t.stop()}}),t)})))()},setAllowance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setupComplete&&e.getValueOrFunction("tokens")&&e.getValueOrFunction("tokens")["MDAI"].approveUnlimited(e.proxyAddress);case 1:case"end":return t.stop()}}),t)})))()},displayPercentValue:function(e){return u.a.isBigNumber(e)||(e=new u.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return u.a.isBigNumber(e)||(e=new u.a(e)),e.toFixed(t).toString()}}},w=b,f=(n("eaf4"),n("2877")),g=Object(f["a"])(w,a,r,!1,null,"5e77457d",null),m=g.exports;t["default"]=m},eaf4:function(e,t,n){"use strict";var a=n("fe1a"),r=n.n(a);r.a},fe1a:function(e,t,n){}}]);
//# sourceMappingURL=chunk-9616bdb4.35e80d8a.js.map