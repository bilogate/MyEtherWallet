(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0509390f"],{"03c4":function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage-cdp"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.finishMigration,expression:"!finishMigration"}],staticClass:"manage-container"},[a("div",{staticClass:"title-content-container"},[a("p",{staticClass:"cpd-title"},[t._v(t._s(t.$t("dappsMCDMaker.vault-portal")))]),a("p",{staticClass:"cdp-id"},[t._v(" "+t._s(t.$t("dappsMCDMaker.vault-position-label",{value:t.cdpIdDisplay,symbol:t.vaultType}))+" ")])]),a("div",{staticClass:"information-blocks"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.liquid-price"))+" ("+t._s(t.collateralType)+"/"+t._s(t.$t("common.currency.usd"))+") ")]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMCDMaker.what-is-dashes-vault")}})],1):t._e()]),a("div",{staticClass:"blue"},[a("span",{staticClass:"blue-bold"},[t._v(t._s(t.liquidationPriceDisplay))]),t._v(" "+t._s(t.$t("common.currency.usd"))+" ")])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.current-price"))+"("+t._s(t.collateralType)+"/"+t._s(t.$t("common.currency.usd"))+") ")]),a("div",[t._v(" "+t._s(t.ethPriceDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.liquidation-penalty")))]),a("div",[t._v(t._s(t.liquidationPenaltyDisplay)+"%")])])])]),a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.collateral-ratio")))]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMCDMaker.what-is-dashes-vault")}})],1):t._e()]),a("div",{class:t.collateralRatioColoring},[a("span",[t._v(t._s(t.collaterlizationRatioDisplay)+"%")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.minimum-ratio")))]),a("div",[t._v(t._s(t.liquidationRatioDisplay)+"%")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.stability-fee")))]),a("div",[t._v(t._s(t.stabilityFeeDisplay)+"%")])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.collateral-label",{symbol:t.collateralType}))+" ")])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.deposited")))]),a("div",[t._v(" "+t._s(t.ethCollateral)+" "),a("span",[t._v(t._s(t.collateralType))])]),a("div",[t._v(" "+t._s(t.usdCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showDeposit}},[t._v(" "+t._s(t.$t("dappsMCDMaker.deposit"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.max-available")))]),a("div",[t._v(" "+t._s(t.maxEthDrawDisplay)+" "),a("span",[t._v(t._s(t.collateralType))])]),a("div",[t._v(" "+t._s(t.maxUsdDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showWithdraw}},[t._v(" "+t._s(t.$t("dappsMCDMaker.withdraw"))+" > ")])])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.dai-position")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.generated")))]),a("div",[t._v(" "+t._s(t.debtValue)+" "),a("span",[t._v(t._s(t.$t("dappsMCDMaker.dai")))])]),a("div",[t._v(" "+t._s(t.debtValueDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showPayback}},[t._v(" "+t._s(t.$t("dappsMCDMaker.payback"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.max-available-gen")))]),a("div",[t._v(" "+t._s(t.maxDai)+" "),a("span",[t._v(t._s(t.$t("dappsMCDMaker.dai")))])]),a("div",[t._v(" "+t._s(t.maxUsd)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showGenerate}},[t._v(" "+t._s(t.$t("dappsMCDMaker.generate"))+" > ")])])])])])])]),a("help-link")],1)},n=[],r=(a("a9e3"),a("d3b7"),a("ddb0"),a("96cf"),a("c964")),c=a("fc11"),d=a("f3f3"),o=a("2f62"),l=a("8e13"),u=a("901e"),p=a.n(u),h=a("d1fb"),v={components:{"help-link":l["a"]},props:{openCloseModal:{type:Boolean,default:!1},openMoveModal:{type:Boolean,default:!1},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},valuesUpdated:{type:Number,default:0},getCdp:{type:Function,default:function(){}},hasCdp:{type:Function,default:function(){}},getValueOrFunction:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",liquidationPenalty:"",targetPrice:""}}},ethPrice:{type:p.a,default:Object(h["F"])(0)},liquidationPenalty:{type:p.a,default:Object(h["F"])(0)},stabilityFee:{type:p.a,default:Object(h["F"])(0)},liquidationRatio:{type:p.a,default:Object(h["F"])(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}},updated:{type:Number,default:0}},data:function(){return{currentCdpLoaded:!1,activeCdp:{},loaded:!1,ethQty:0,daiQty:0,selectedCdp:"",cdpId:"",cdp:{},maxDaiDraw:Object(h["F"])(0),maxWithDraw:Object(h["F"])(0),maxWithDrawUSD:Object(h["F"])(0),maxEthDraw:Object(h["F"])(0),vaultType:"ETH-A",updatedValue:0}},computed:Object(d["a"])({},Object(o["c"])("main",["account","gasPrice","web3","network","ens"]),{noProxy:function(){return this.activeCdp?this.activeCdp.noProxy:null},finishMigration:function(){return this.activeCdp?this.activeCdp.needToFinishMigrating:null},collateralRatioColoring:function(){return this.currentCdpLoaded&&this.updatedValue>-1?this.currentCdp.collateralStatus:""},liquidationPriceDisplay:function(){if(this.currentCdpLoaded&&this.updatedValue>-1){var t=Object(h["p"])(this.currentCdp.liquidationPrice,2);return new p.a(t).gt(0)?t:"--"}return"--"},collaterlizationRatioDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["o"])(this.getCollateralizationRatio()):"--"},cdpIdDisplay:function(){return this.values?this.values.cdpId:"--"},liquidationRatioDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(Object(h["q"])(this.currentCdp.liquidationRatio)):"--"},liquidationPenaltyDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(Object(h["q"])(this.currentCdp.liquidationPenalty)):"--"},stabilityFeeDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(Object(h["q"])(this.currentCdp.stabilityFee)):"--"},ethPriceDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.currentCdp.currentPrice,2):"--"},zeroDebt:function(){return Object(h["F"])(this.values.debtValue).eq(0)},maxEthDrawDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.currentCdp.maxEthDraw,5):"--"},maxUsdDrawDisplay:function(){return this.values?Object(h["p"])(this.values.maxUsdDraw,2):"--"},ethCollateral:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.getCollateralAmount(),5):"--"},collateralType:function(){return this.currentCdpLoaded&&this.updatedValue>-1?this.currentCdp.cdpCollateralType:"ETH"},usdCollateral:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.currentCdp.collateralValue,2):"--"},debtValueDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.currentCdp.debtValue,2):"--"},debtValue:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.currentCdp.debtValue,5,!0,!0,!0):"--"},maxDai:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.currentCdp.maxDai,5):"--"},maxUsd:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(h["p"])(this.currentCdp.maxDai,2):"--"}}),watch:(i={},Object(c["a"])(i,"activeCdp.ready",(function(){this.isReady()})),Object(c["a"])(i,"valuesUpdated",(function(){this.updatedValue++})),Object(c["a"])(i,"openCloseModal",(function(t){t&&this.showClose()})),Object(c["a"])(i,"openMoveModal",(function(t){t&&this.showMove()})),Object(c["a"])(i,"makerActive",(function(t){t&&this.getActiveCdp()})),Object(c["a"])(i,"$route.params",(function(){this.updatedValue++,this.getActiveCdp()})),i),beforeDestroy:function(){this.makerCDP={}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.activeCdp={},t.cdpId=t.$route.params.cdpId,t.makerActive&&(t.loaded=!0,t.cdpId&&t.$emit("activeCdpId",t.cdpId)),t.cdpId&&void 0!==t.cdpId&&t.getActiveCdp();case 4:case"end":return e.stop()}}),e)})))()},methods:{getActiveCdp:function(){this.cdpId=this.$route.params.cdpId;var t="number"===typeof this.cdpId?this.cdpId:this.cdpId.id;this.currentCdp=this.getValueOrFunction("getCdp")(t),this.currentCdp&&(this.currentCdpLoaded=!0,this.$forceUpdate(),this.vaultType=this.currentCdp.cdpType),this.getTotalDebt()},getTotalDebt:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.currentCdp&&(t.currentCdpLoaded=!0),t.currentCdp){e.next=3;break}return e.abrupt("return",Object(h["F"])(0));case 3:return e.next=5,t.currentCdp.getCombinedDebtValue();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},getCollateralAmount:function(){return this.currentCdp&&(this.currentCdpLoaded=!0),this.currentCdp?this.currentCdp.collateralAmount:0},getCollateralValue:function(){return this.currentCdp&&(this.currentCdpLoaded=!0),this.currentCdp?this.currentCdp.getCollateralValue:Object(h["F"])(0)},getCollateralizationRatio:function(){return this.currentCdp&&(this.currentCdpLoaded=!0),this.currentCdp?this.currentCdp.collateralizationRatio:Object(h["F"])(0)},showDeposit:function(){this.$emit("showDeposit")},showWithdraw:function(){this.$emit("showWithdraw")},showPayback:function(){this.$emit("showPayback")},showGenerate:function(){this.$emit("showGenerate")},displayPercentValue:h["q"],displayFixedValue:h["p"],isReady:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},C=v,f=(a("8f6d"),a("2877")),b=Object(f["a"])(C,s,n,!1,null,"36f180f2",null),m=b.exports;e["default"]=m},"60fe":function(t,e,a){},"7f58":function(t,e,a){"use strict";var i=a("bc56"),s=a.n(i);s.a},"8e13":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bottom-help-link"},["issues"==t.type?a("div",{staticClass:"issues"},[t._v(" "+t._s(t.$t("common.having-issues"))+" "),a("a",{attrs:{href:"https://kb.myetherwallet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("common.help-center")))])]):t._e()])},s=[],n={props:{type:{type:String,default:"issues"}},data:function(){return{popOverId:"popoverid"+String(Math.floor(1e8*Math.random()))}}},r=n,c=(a("7f58"),a("2877")),d=Object(c["a"])(r,i,s,!1,null,"16b84c17",null),o=d.exports;a.d(e,"a",(function(){return o}))},"8f6d":function(t,e,a){"use strict";var i=a("60fe"),s=a.n(i);s.a},bc56:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0509390f.090916b3.js.map