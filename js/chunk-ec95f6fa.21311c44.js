(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec95f6fa"],{"0b9b":function(t,e,s){"use strict";var a=s("6541"),n=s.n(a);n.a},"102f":function(t,e,s){},"15a0":function(t,e,s){},1768:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"expanding-option",class:t.hidebottomborder?"hide-bottom-border":""},[s("div",{staticClass:"title-bar-container"},[s("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),t.popover?s("popover",{attrs:{popcontent:t.popover}}):t._e(),""===t.buttonText||t.showEnable?t._e():s("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]),t.showEnable&&!t.expanded?s("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),t.showEnable&&t.expanded?s("div",{staticClass:"button-text"},[t._v(" "+t._s(t.$t("common.yes"))+" ")]):t._e(),s("div",{staticClass:"switch sliding-switch-white"},[s("label",{staticClass:"switch"},[s("input",{attrs:{type:"checkbox"},on:{click:t.optionExpanded}}),s("span",{staticClass:"slider round"})])])],1),s("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[s("div",{staticClass:"content-block"},[t._t("default")],2)])])},n=[],o={props:{title:{type:String,default:""},buttonText:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1},popover:{type:String,default:""},showEnable:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},methods:{optionExpanded:function(){this.expanded=!this.expanded,this.$emit("expanded",this.expanded)}}},c=o,i=(s("a158"),s("2877")),r=Object(i["a"])(c,a,n,!1,null,"0fe729f8",null),l=r.exports;s.d(e,"a",(function(){return l}))},"20be":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warning-message"},[s("div",{staticClass:"left"},[t._v("⚠️")]),s("div",{staticClass:"right"},[s("p",{staticClass:"title"},[t._v(t._s(this.$t("common.not-recommended.string")))]),s("p",{staticClass:"message"},[t._v(" "+t._s(this.$tc("common.not-recommended.warning1",t.getString))+" "+t._s(this.$tc("common.not-recommended.warning2"))+" ")]),s("div",{staticClass:"link"},[t._v(" > "+t._s(t.$t("common.read"))+": "),s("a",{attrs:{href:"https://kb.myetherwallet.com/posts/offline/using-mew-offline/",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(this.$t("common.article.using-mew-offline")))])])])])},n=[],o={props:{warningType:{type:String,default:"access"}},data:function(){return{warningTypes:["access","create"]}},computed:{getString:function(){return"access"===this.warningType?1:2}}},c=o,i=(s("deaa"),s("2877")),r=Object(i["a"])(c,a,n,!1,null,"725d7db3",null),l=r.exports;s.d(e,"a",(function(){return l}))},"27a0":function(t,e,s){},"2ab9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAAXNSR0IArs4c6QAAAVNJREFUaAXtmLFqAkEQhm8tFIS0KazTpE2lKdKkEAshdSBg4RukS5nWF1DTCD6Fha2dYmFvmTeI6c5vwy4sySYQrrmdnYGf3RtOmW//ueG4oqh5lGXZQBP0jnboruYlVysPwDEK48RFv9q/1vjXwM1CWreXCw3gYwTYpkRDv2UFDaxBCh24LrO9c3Z6HrgbbkU7rdCB1ep0jd+t/leaG2Ta3r+1t/HnyQ0X7Ifo0ucSWxvU+4w6kbo/yT0YY1ZfwMC2SBzQVeRmKSkLfeuBb7jYSiH7g2Np2yCnKL3DTaj36Fow/Qm2bji02iQGKOWh9UL9saFlYYcMrTVr+sHQtd+9FigWHyTv06d0BMAorLNZnU22rbWNXQ+zaBtrG6dwArk9s/abdB4vFbb7gH1CsZA1oPyjBuk0QisT1jk8+gYsF9YB22f4FR3RBvW8+7rqCfw8gTMZu333xRPRkQAAAABJRU5ErkJggg=="},"31de":function(t,e,s){t.exports=s.p+"img/hide-password.d5e2dc64.svg"},"3ad4":function(t,e,s){"use strict";var a=s("48e0"),n=s.n(a);n.a},"48e0":function(t,e,s){},"5de7":function(t,e,s){t.exports=s.p+"img/show-password.8f7643d8.svg"},6035:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wallet-password-modal"},[s("b-modal",{ref:"walletPassword",staticClass:"bootstrap-modal nopadding",attrs:{title:t.$t("common.wallet.passphrase"),"hide-footer":"",centered:"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",{staticClass:"passphrase-container"},[s("div",{staticClass:"input-container"},[s("div",{staticClass:"input-headers"},[s("p",[t._v(t._s(t.$t("common.wallet.passphrase")))]),s("span",{on:{click:t.clear}},[t._v(t._s(t.$t("common.clear")))])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passphrase,expression:"passphrase"}],attrs:{type:"password"},domProps:{value:t.passphrase},on:{input:function(e){e.target.composing||(t.passphrase=e.target.value)}}})])]),s("div",{staticClass:"button-block"},[s("button",{on:{click:t.submitPassword}},[t._v(" "+t._s(t.$t("common.wallet.access-my"))+" ")])])])])],1)},n=[],o={name:"WalletPassword",data:function(){return{passphrase:"",callback:function(){},identifier:{}}},mounted:function(){var t=this;this.$eventHub.$on("showHardwarePassword",(function(e,s){t.$refs.walletPassword.show(),t.callback=s,t.identifier=e}))},beforeDestroy:function(){this.$eventHub.$off("showHardwarePassword")},methods:{submitPassword:function(){this.callback(this.passphrase),this.passphrase=""},clear:function(){this.passphrase=""}}},c=o,i=(s("7e9c"),s("2877")),r=Object(i["a"])(c,a,n,!1,null,"6700a6da",null),l=r.exports;s.d(e,"a",(function(){return l}))},6541:function(t,e,s){},6799:function(t,e,s){},"6d89b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{ref:"networkAndAddress",staticClass:"bootstrap-modal nopadding modal-network-and-address",attrs:{title:t.$t("accessWallet.network-addr.string"),"hide-footer":"",centered:"",static:"",lazy:""}},[s("div",{staticClass:"modal-content-container"},[s("div",{staticClass:"collapse-container"},[s("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[s("p",{staticClass:"button-number"},[t._v("1")]),s("div",{staticClass:"network"},[s("p",[t._v(t._s(t.$t("common.network")))]),s("p",{staticClass:"network-name monospace"},[t._v(" ("+t._s(t.selectedNetwork.type.name)+" - "+t._s(t.selectedNetwork.service)+") ")])])]),s("b-collapse",{staticClass:"collapse-content",attrs:{id:"collapse1",accordion:"networkaddraccordion"}},[s("ul",{staticClass:"networks"},t._l(Object.keys(t.reorderNetworkList),(function(e,a){return s("li",{key:t.$router.path+e+a},[s("div",{staticClass:"network-title"},[s("div",{staticClass:"network-icon-container"},[t.Networks[e][0].type.icon?s("img",{attrs:{src:t.Networks[e][0].type.icon,alt:""}}):s("div",{staticClass:"no-icon"},[s("p",[t._v(t._s(t.$t("common.no-icon")))])])]),s("p",[t._v(t._s(e))])]),s("div",{staticClass:"network-content"},t._l(t.Networks[e],(function(e){return s("p",{key:e.service,class:e.service===t.selectedNetwork.service&&e.type&&e.type.name===t.selectedNetwork.type.name?"current-network":"",on:{click:function(s){return t.locSwitchNetwork(e)}}},[t._v(" "+t._s(e.service)+" ")])})),0)])})),0)])],1),s("div",{staticClass:"collapse-container"},[s("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2",modifiers:{collapse2:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[s("p",{staticClass:"button-number"},[t._v("2")]),s("p",[t._v(t._s(t.$t("common.addr")))])]),s("b-collapse",{staticClass:"collapse-content",attrs:{id:"collapse2",accordion:"networkaddraccordion",visible:""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.hardwareWallet.identifier!==t.ledgerType,expression:"hardwareWallet.identifier !== ledgerType"}],staticClass:"content-container-1"},[s("div",{staticClass:"hd-derivation"},[s("h4",[t._v(t._s(t.$t("accessWallet.path.hd-derivation")))]),s("div",{staticClass:"dropdown-button-container"},[s("b-dropdown",{staticClass:"dropdown-button-2",attrs:{id:"hd-derivation-path",text:t.getPathLabel(t.selectedPath)+" ("+t.selectedPath,right:""}},[t._l(t.availablePaths,(function(e,a){return s("b-dropdown-item",{key:"base"+a,class:[t.selectedPath===e.path?"active":"","dropdown-paths"],on:{click:function(e){return t.changePath(a)}}},[t._v(" "+t._s(e.label)+" "),s("span",[t._v("("+t._s(e.path)+")")])])})),s("b-dropdown-divider"),s("b-dropdown-item",[t._v(t._s(t.$t("accessWallet.path.custom")))]),t._l(t.customPaths,(function(e,a){return s("b-dropdown-item",{key:a,class:t.selectedPath===e.path?"active":""},[s("div",{staticClass:"custom-networks"},[s("div",{on:{click:function(e){return t.changePath(a)}}},[t._v(" "+t._s(e.label)+" "),s("span",[t._v("("+t._s(e.path)+")")])]),s("span",[s("i",{staticClass:"fa fa-times-circle",on:{click:function(s){return s.preventDefault(),t.removeCustomPath(e)}}})])])])})),s("b-dropdown-item",{on:{click:t.showCustomPathInput}},[t._v(t._s(t.$t("accessWallet.path.add-custom")))])],2)],1)]),s("p",{directives:[{name:"show",rawName:"v-show",value:""!==t.invalidPath&&t.customPathInput,expression:"invalidPath !== '' && customPathInput"}],staticClass:"error-message-container"},[t._v(" "+t._s(t.$t("accessWallet.path.invalid-desc",{path:t.invalidPath.path}))+" ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.customPathInput,expression:"!customPathInput"}],staticClass:"derivation-brands monospace"},[t._v(" "+t._s(t.getPathLabel(t.selectedPath))+" ("+t._s(t.selectedPath)+") ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.customPathInput,expression:"customPathInput"}],staticClass:"custom-path-container"},[s("label",{attrs:{for:"customPathLabel"}},[t._v(t._s(t.$t("accessWallet.path.alias")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customPath.label,expression:"customPath.label"}],attrs:{id:"customPathLabel",placeholder:"my custom path"},domProps:{value:t.customPath.label},on:{input:function(e){e.target.composing||t.$set(t.customPath,"label",e.target.value)}}}),s("label",{attrs:{for:"customPathInput"}},[t._v(t._s(t.$t("accessWallet.path.string")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customPath.path,expression:"customPath.path"}],attrs:{id:"customPathInput",placeholder:"m/44'/1'/0'/0"},domProps:{value:t.customPath.path},on:{input:function(e){e.target.composing||t.$set(t.customPath,"path",e.target.value)}}}),s("button",{staticClass:"submit-button cancel",on:{click:t.showCustomPathInput}},[t._v(" "+t._s(t.$t("common.cancel"))+" ")]),s("button",{staticClass:"submit-button submit",on:{click:t.locAddCustomPath}},[t._v(" "+t._s(t.$t("accessWallet.path.add-custom"))+" ")])])]),s("div",{staticClass:"content-container-2"},[s("div",{staticClass:"address-block-container"},[s("div",{staticClass:"block-title"},[s("h4",[t._v(t._s(t.$t("accessWallet.network-addr.addr-to-interact")))])]),s("ul",{staticClass:"address-block table-header fours"},[s("li",[t._v(t._s(t.$t("accessWallet.network-addr.id")))]),s("li",[t._v(t._s(t.$t("common.addr")))]),s("li",[t._v(t._s(t.$t("common.balance.string")))])]),t._l(t.HDAccounts,(function(e){return s("ul",{key:e.index,class:[t.selectedId==="address"+e.index?"selected":"","address-block address-data fours"],attrs:{"data-address":"address"+e.index},on:{click:function(s){return t.setAccount(e)}}},[s("li",[s("blockie",{attrs:{address:e.account.getChecksumAddressString(),size:8,scale:16,width:"30px",height:"30px"}})],1),s("li",{staticClass:"monospace"},[t._v(" "+t._s(t._f("concatAddr")(e.account.getChecksumAddressString()))+" ")]),s("li",{staticClass:"monospace"},[t._v(t._s(t.convertBalance(e.balance)))]),s("li",{staticClass:"user-input-checkbox"},[s("label",{staticClass:"checkbox-container checkbox-container-small"},[s("input",{attrs:{id:"address"+e.index,type:"checkbox"},on:{click:t.unselectAllAddresses}}),s("span",{staticClass:"checkmark checkmark-small"})])])])}))],2),s("div",{staticClass:"address-nav"},[s("span",{on:{click:function(e){return t.previousAddressSet()}}},[t._v("< "+t._s(t.$t("common.previous")))]),s("span",{on:{click:function(e){return t.nextAddressSet()}}},[t._v(t._s(t.$t("common.next"))+" >")])])])]),s("div",{staticClass:"accept-terms"},[s("label",{staticClass:"checkbox-container"},[s("i18n",{attrs:{path:"accessWallet.accept-terms"}},[s("router-link",{attrs:{slot:"terms",to:"/terms-of-service"},slot:"terms"},[t._v(t._s(t.$t("common.terms"))+".")])],1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.acceptTerms,expression:"acceptTerms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.acceptTerms)?t._i(t.acceptTerms,null)>-1:t.acceptTerms},on:{change:function(e){var s=t.acceptTerms,a=e.target,n=!!a.checked;if(Array.isArray(s)){var o=null,c=t._i(s,o);a.checked?c<0&&(t.acceptTerms=s.concat([o])):c>-1&&(t.acceptTerms=s.slice(0,c).concat(s.slice(c+1)))}else t.acceptTerms=n}}}),s("span",{staticClass:"checkmark"})],1)]),s("div",{staticClass:"button-container"},[s("b-btn",{staticClass:"mid-round-button-green-filled close-button",attrs:{disabled:!t.isDisabled},on:{click:function(e){return e.preventDefault(),t.unlockWallet(e)}}},[t._v(t._s(t.$t("common.wallet.access-my")))])],1),s("customer-support")],1)])])},n=[],o=(s("4160"),s("caad"),s("b680"),s("ac1f"),s("2532"),s("1276"),s("159b"),s("96cf"),s("c964")),c=s("f3f3"),i=s("20fe"),r=s("2f62"),l=s("ce96"),d=s("1131"),u=s.n(d),p=s("901e"),h=s.n(p),m=s("c8e5"),f=s("59c3"),v=5,w={components:{"customer-support":i["a"],blockie:m["a"]},props:{hardwareWallet:{type:Object,default:function(){return{}}}},data:function(){return{selectedId:"",currentIndex:0,HDAccounts:[],availablePaths:{},selectedPath:"",invalidPath:"",customPathInput:!1,currentWallet:null,customPath:{label:"",dpath:""},showCollapse:!1,ledgerType:f["d"],acceptTerms:!1}},computed:Object(c["a"])({},Object(r["c"])("main",["network","Networks","customPaths","path","web3","wallets"]),{selectedNetwork:function(){return this.network},reorderNetworkList:function(){return l["d"].reorderNetworks()},isDisabled:function(){return""!==this.selectedId&&this.acceptTerms}}),watch:{hardwareWallet:function(){this.getPaths(),this.setHDAccounts()}},mounted:function(){var t=this;this.$refs.networkAndAddress.$on("hidden",(function(){t.availablePaths={},t.selectedPath="",t.invalidPath="",t.customPathInput=!1,t.currentWallet=null,t.customPath={label:"",path:""},t.resetPaginationValues()}))},methods:Object(c["a"])({},Object(r["b"])("main",["switchNetwork","setWeb3Instance","removeCustomPath","addCustomPath","decryptWallet"]),{locSwitchNetwork:function(t){var e=this;this.switchNetwork(t).then((function(){e.setWeb3Instance(),e.currentIndex=0,e.setHDAccounts()}))},unselectAllAddresses:function(t){document.querySelectorAll(".user-input-checkbox input").forEach((function(e){e.checked=e.id===t}))},setAccount:function(t){this.selectedId="address"+t.index,this.unselectAllAddresses("address"+t.index),this.currentWallet=t.account},resetPaginationValues:function(){this.currentIndex=0},showCustomPathInput:function(){this.customPath={label:"",path:""},this.customPathInput=!this.customPathInput},convertBalance:function(t){return"loading"===t?t:new h.a(u.a.fromWei(t,"ether")).toFixed(3)},removeCustomPath:function(t){var e=this;this.removeCustomPath(t).then((function(){e.getPaths()}))},locAddCustomPath:function(){var t=this,e=l["g"].checkCustomPath(this.customPath.path);e?(this.customPath.path=e,this.addCustomPath({label:this.customPath.label,path:e}).then((function(){t.getPaths()})),this.showCustomPathInput()):this.invalidPath=this.customPath},changePath:function(t){var e,s=this;this.resetPaginationValues(),e=this.availablePaths[t]?this.availablePaths[t].path:this.customPaths[t]?this.customPaths[t].path:this.selectedPath,this.hardwareWallet.init(e).then((function(){s.getPaths(),s.currentIndex=0,s.setHDAccounts(),s.$refs.networkAndAddress.show()})).catch((function(t){s.HDAccounts=[],l["e"].responseHandler(t,l["e"].ERROR)})),this.selectedPath=this.hardwareWallet.getCurrentPath()},setBalances:u.a._.debounce((function(){var t=this;this.HDAccounts.forEach((function(e){e.account?t.web3.eth.getBalance(e.account.getAddressString()).then((function(t){e.balance=t})).catch((function(t){l["e"].responseHandler(t,l["e"].ERROR)})):e.balance=0}))}),1e3),unlockWallet:function(){var t=this;this.decryptWallet([this.currentWallet]).then((function(){null!==t.wallet&&(t.$route.path.split("/").includes("interface")||t.$router.push({path:"interface"})),t.$refs.networkAndAddress.hide()})).catch((function(t){l["e"].responseHandler(t,l["e"].ERROR)}))},setHDAccounts:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.web3.eth||t.setWeb3Instance(),t.HDAccounts=[],s=t.currentIndex;case 3:if(!(s<t.currentIndex+v)){e.next=12;break}return e.next=6,t.hardwareWallet.getAccount(s);case 6:a=e.sent,t.HDAccounts.push({index:s,account:a,balance:"loading"}),t.setBalances();case 9:s++,e.next=3;break;case 12:t.currentIndex+=v;case 13:case"end":return e.stop()}}),e)})))()},nextAddressSet:function(){this.setHDAccounts()},previousAddressSet:function(){this.currentIndex=this.currentIndex-2*v<0?0:this.currentIndex-2*v,this.setHDAccounts()},getPathLabel:function(t){for(var e in this.customPaths)if(this.customPaths[e].path===t)return this.customPaths[e].label;for(var s in this.availablePaths)if(this.availablePaths[s].path===t)return this.availablePaths[s].label;return"Unknown"},getPaths:function(){this.selectedPath=this.hardwareWallet.getCurrentPath(),this.availablePaths=this.hardwareWallet.getSupportedPaths()}})},b=w,g=(s("9806"),s("829e"),s("2877")),k=Object(g["a"])(b,a,n,!1,null,"0104f2b4",null),P=k.exports;s.d(e,"a",(function(){return P}))},7416:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"enter-pin-number-modal"},[s("b-modal",{ref:"enterpin",staticClass:"bootstrap-modal nopadding",attrs:{title:t.$t("common.password.string"),"hide-footer":"",centered:"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",{staticClass:"pin-input-block"},[s("i18n",{staticClass:"main-title",attrs:{path:"accessWallet.pin.enter",tag:"p"}},[s("span",{attrs:{slot:"device"},slot:"device"},[t._v(" "+t._s(t.deviceInfo.name)+" ")])]),s("p",{staticClass:"sub-title"},[t._v(" "+t._s(t.$t("accessWallet.pin.layout"))+" ")]),s("div",{staticClass:"input-container"},[s("div",{staticClass:"input-headers"},[s("p",[t._v(t._s(t.$t("accessWallet.pin.string")))]),s("span",{on:{click:t.clear}},[t._v(t._s(t.$t("common.clear")))])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pin,expression:"pin"}],attrs:{type:"password",readonly:"true"},domProps:{value:t.pin},on:{input:function(e){e.target.composing||(t.pin=e.target.value)}}})])],1),s("div",{staticClass:"button-matrix-block"},t._l(t.positions,(function(e,a){return s("button",{key:e+a,on:{click:function(s){t.pin+=e}}})})),0),s("div",{staticClass:"button-block"},[s("div",{staticClass:"checkbox-container"},[s("label",{attrs:{for:"terms"},on:{click:function(e){t.acknowledgedTerms=!t.acknowledgedTerms}}},[s("span",{class:[t.acknowledgedTerms?"enable":"","custom-marker"]},[t.acknowledgedTerms?s("i",{staticClass:"fa fa-check"}):t._e()]),s("input",{attrs:{name:"terms",type:"checkbox"}}),t._v(t._s(t.$t("accessWallet.pin.access"))+" "),s("br"),t._v(" "+t._s(t.$t("accessWallet.pin.accept"))+" "),s("router-link",{attrs:{to:"/terms-of-service"}},[t._v(" "+t._s(t.$t("accessWallet.pin.terms"))+" ")])],1)]),s("button",{attrs:{disabled:!t.acknowledgedTerms},on:{click:t.actualClick}},[t._v(" "+t._s(t.$t("common.wallet.access-my"))+" ")])])])])],1)},n=[],o={name:"WalletPassword",data:function(){return{deviceInfo:{},pin:"",acknowledgedTerms:!1,positions:["7","8","9","4","5","6","1","2","3"],callback:function(){}}},mounted:function(){var t=this;this.$eventHub.$on("showHardwarePinMatrix",(function(e,s){t.$refs.enterpin.show(),t.deviceInfo=e,t.callback=s}))},beforeDestroy:function(){this.$eventHub.$off("showHardwarePinMatrix")},methods:{clear:function(){this.pin="",this.acknowledgedTerms=!1},actualClick:function(){this.callback(this.pin),this.$refs.enterpin.hide(),this.pin="",this.acknowledgedTerms=!1}}},c=o,i=(s("bb11"),s("2877")),r=Object(i["a"])(c,a,n,!1,null,"4cad4857",null),l=r.exports;s.d(e,"a",(function(){return l}))},"7a51":function(t,e,s){},"7e9c":function(t,e,s){"use strict";var a=s("6799"),n=s.n(a);n.a},"7fcc":function(t,e,s){},"829e":function(t,e,s){"use strict";var a=s("7a51"),n=s.n(a);n.a},"82e0":function(t,e,s){"use strict";var a=s("7fcc"),n=s.n(a);n.a},"832a":function(t,e,s){"use strict";var a=s("15a0"),n=s.n(a);n.a},9347:function(t,e,s){},9806:function(t,e,s){"use strict";var a=s("9347"),n=s.n(a);n.a},"9dbe":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{ref:"mnemonicPhrase",staticClass:"bootstrap-modal modal-metamask nopadding",attrs:{title:t.$t("accessWallet.mnemonic.modal.title"),"hide-footer":"",centered:"",static:"",lazy:""},on:{shown:t.focusInput,hide:t.clearInputs}},[s("div",{staticClass:"warning"},[s("warning-message")],1),s("div",{staticClass:"contents"},[s("p",{staticClass:"instruction"},[t._v(" "+t._s(t.$t("accessWallet.mnemonic.modal.text"))+" ")]),s("div",{staticClass:"tools"},[s("div",{staticClass:"value-switch noselect"},[s("div",{staticClass:"sliding-switch"},[s("label",{staticClass:"switch"},[s("input",{attrs:{type:"checkbox"}}),s("span",{staticClass:"slider round",on:{click:t.mnemonicValueBitSizeChange}})]),s("div",{staticClass:"labels"},[s("span",{class:[t.mnemonic24?"":"white","label-left"]},[t._v("12")]),s("span",{class:[t.mnemonic24?"white":"","label-right"]},[t._v("24")])])]),s("span",{staticClass:"text__base link switch-label"},[t._v(t._s(t.$t("accessWallet.mnemonic.value")))])])]),s("form",[s("div",{staticClass:"phrases"},[s("ul",t._l(t.mnemonicSize,(function(e){return s("li",{key:e},[s("span",[t._v(t._s(e)+".")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mnemonicPhrase[e-1],expression:"mnemonicPhrase[index - 1]"}],ref:"mnemonicInput"+(e-1),refInFor:!0,attrs:{type:"text",name:""},domProps:{value:t.mnemonicPhrase[e-1]},on:{input:function(s){s.target.composing||t.$set(t.mnemonicPhrase,e-1,s.target.value)}}})])})),0)]),s("div",{staticClass:"option-container-block"},[s("expanding-option",{attrs:{title:t.$t("createWallet.mnemonic.do-you-extra-word"),popover:t.$t("createWallet.mnemonic.access-wallet-extra-word-popover"),"button-text":t.$t("common.no"),"show-enable":!0},on:{expanded:t.passwordInputViewChange}},[s("div",{staticClass:"option-container"},[s("create-wallet-input",{attrs:{"show-button":!1,"full-width":!0,"placeholder-text":t.$t("createWallet.mnemonic.type-in")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])],1),s("p",{directives:[{name:"show",rawName:"v-show",value:""!==t.error,expression:"error !== ''"}],staticClass:"error"},[t._v(t._s(t.error))]),s("div",{staticClass:"button-container-block"},[s("standard-button",{attrs:{options:{title:t.$t("common.continue"),buttonStyle:"green",noMinWidth:!0,fullWidth:!0},spinner:t.spinner,"click-function":t.unlockWallet}})],1)]),s("customer-support")],1)])},n=[],o=(s("cb29"),s("c975"),s("a15b"),s("ac1f"),s("1276"),s("20fe")),c=s("20be"),i=s("a8f0"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"user-input"},[a("div",{staticClass:"mew-custom-form mew-custom-form__password ",class:t.fullWidth?"full-width":""},[a("div",{staticClass:"user-input-field"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"Json"===t.param?"required|min:9":"",expression:"param === 'Json' ? 'required|min:9' : ''"}],attrs:{type:t.password.showPassword?"text":"password",placeholder:t.placeholderText?t.placeholderText:t.$t("common.password.enter"),name:"password",autocomplete:"off"},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}})]),a("div",{staticClass:"password-icons",on:{click:function(e){t.password.showPassword=!t.password.showPassword}}},[t.password.showPassword?t._e():a("img",{staticClass:"hide-password",attrs:{alt:"",src:s("31de")}}),t.password.showPassword?a("img",{staticClass:"show-password",attrs:{alt:"",src:s("5de7")}}):t._e()])]),t.showButton?a("button",{class:[t.errors.has("password")||0===t.value.length||"strong"!==t.strengthClass?"disabled":"","large-round-button-green-filled next-button"],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.switcher(t.param)}}},[t._v(" "+t._s(t.$t("common.next"))+" "),a("img",{attrs:{alt:"",src:s("2ab9")}})]):t._e()])},l=[],d=(s("96cf"),s("c964")),u={props:{value:{type:String,default:""},switcher:{type:Function,default:function(){}},param:{type:String,default:""},showButton:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!1},placeholderText:{type:String,default:""}},data:function(){return{strength:"",strengthClass:"",password:{showPassword:!1}}},methods:{updateValue:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:e.$emit("input",t);case 1:case"end":return s.stop()}}),s)})))()}}},p=u,h=(s("3ad4"),s("2877")),m=Object(h["a"])(p,r,l,!1,null,"3e14ea89",null),f=m.exports,v=s("1768"),w=s("e3b9"),b=s("ce96"),g={components:{"customer-support":o["a"],"warning-message":c["a"],"standard-button":i["a"],"create-wallet-input":f,"expanding-option":v["a"]},props:{hardwareWalletOpen:{type:Function,default:function(){}}},data:function(){return{spinner:!1,error:"",mnemonicPhrase:new Array(this.mnemonicSize).fill(""),mnemonic24:!1,mnemonicSize:12,password:""}},watch:{mnemonicPhrase:function(t){" "!==t[0]&&t[0].indexOf(" ")>=0&&(12!==t[0].split(" ").length&&24!==t[0].split(" ").length||(this.mnemonic24=24===t[0].split(" ").length,this.mnemonicSize=t[0].split(" ").length,this.mnemonicPhrase=t[0].split(" ")))}},methods:{passwordInputViewChange:function(){this.password=""},unlockWallet:function(t){var e=this;t.preventDefault(),t.stopPropagation(),this.spinner=!0,Object(w["e"])(this.mnemonicPhrase.join(" "),this.password).then((function(t){e.password="",e.spinner=!1,e.$refs.mnemonicPhrase.hide(),e.hardwareWalletOpen(t)})).catch((function(t){e.password="",e.spinner=!1,e.error=t,b["e"].responseHandler(t,b["e"].ERROR)}))},clearInputs:function(){this.mnemonicPhrase=new Array(this.mnemonicSize).fill("")},mnemonicValueBitSizeChange:function(){this.mnemonic24=!this.mnemonic24,this.mnemonic24?this.mnemonicSize=24:this.mnemonicSize=12,this.mnemonicPhrase=new Array(this.mnemonicSize).fill("")},openPasswordModal:function(){this.mnemonicPhrasePasswordModalOpen(this.mnemonicPhrase.join(" "))},focusInput:function(){this.$refs.mnemonicInput0[0].focus()}}},k=g,P=(s("82e0"),Object(h["a"])(k,a,n,!1,null,"738d6c9b",null)),_=P.exports;s.d(e,"a",(function(){return _}))},a158:function(t,e,s){"use strict";var a=s("102f"),n=s.n(a);n.a},ae88:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"password",staticClass:"bootstrap-modal modal-software",attrs:{title:t.$t("common.password.string"),"hide-footer":"",centered:"",static:"",lazy:""},on:{shown:t.focusInput}},[a("form",{staticClass:"password-form"},[a("div",{staticClass:"input-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],ref:"passwordInput",attrs:{placeholder:t.$t("common.password.enter"),name:"Password",autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.show?a("img",{attrs:{alt:"",src:s("5de7")},on:{click:function(e){return e.preventDefault(),t.switchViewPassword(e)}}}):t._e(),t.show?t._e():a("img",{attrs:{alt:"",src:s("31de")},on:{click:function(e){return e.preventDefault(),t.switchViewPassword(e)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:""!==t.error,expression:"error !== ''"}],staticClass:"error"},[t._v(t._s(t.error))]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password"),expression:"errors.has('password')"}],staticClass:"error"},[t._v(" "+t._s(t.errors.first("password"))+" ")]),a("button",{class:[t.errors.has("password")||0===t.password.length?"disabled":"","submit-button large-round-button-green-filled"],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.unlockWallet(e)}}},[t._v(" "+t._s(t.$t("common.wallet.unlock"))+" "+t._s(t.hardwareBrand)+" ")])])])},n=[],o={props:{walletConstructor:{type:Function,default:function(){}},hardwareBrand:{type:String,default:""}},data:function(){return{show:!1,password:"",error:""}},watch:{password:function(){this.error=""}},methods:{focusInput:function(){this.password,this.$refs.passwordInput.focus()},unlockWallet:function(){var t=this;this.walletConstructor("",this.password).then((function(e){t.$emit("hardwareWalletOpen",e)})).catch(this.walletConstructor.errorHandler)},switchViewPassword:function(){this.show=!this.show}}},c=o,i=(s("0b9b"),s("2877")),r=Object(i["a"])(c,a,n,!1,null,"3e082dea",null),l=r.exports;s.d(e,"a",(function(){return l}))},bb11:function(t,e,s){"use strict";var a=s("27a0"),n=s.n(a);n.a},c6ab:function(t,e,s){},cb29:function(t,e,s){var a=s("23e7"),n=s("81d5"),o=s("44d2");a({target:"Array",proto:!0},{fill:n}),o("fill")},deaa:function(t,e,s){"use strict";var a=s("c6ab"),n=s.n(a);n.a},f73c:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-modal",{ref:"ledgerApp",staticClass:"bootstrap-modal",attrs:{title:t.$t("accessWallet.ledger.modal.title"),"hide-footer":"",centered:"",static:"",lazy:""},on:{hidden:t.reset}},[s("div",{staticClass:"ledger-app-selection-container"},[s("h4",[t._v(t._s(t.$t("accessWallet.ledger.modal.text")))]),s("div",{staticClass:"ledger-app-info"},[s("div",{staticClass:"selected-app-icon"},[s("img",{attrs:{src:t.selectedApp.network.icon,alt:""}})]),s("div",{staticClass:"toggle-apps",on:{click:function(e){t.toggled=!t.toggled}}},[s("div",[s("h2",[t._v(t._s(t.selectedApp.network.name_long))])]),s("div",{staticClass:"toggle-indicator-container"},[s("i",{class:[t.toggled?"fa-chevron-up":"fa-chevron-down","fa"]})])]),s("div",{class:[t.toggled?"shown":"hide-box","app-selection-container"]},t._l(t.apps,(function(e){return s("div",{key:e.network.name,class:[t.selectedApp.network.name_long===e.network.name_long?"selected":"","item"],on:{click:function(s){return t.selectDapp(e)}}},[s("i",{staticClass:"fa fa-check-circle"}),s("span",[t._v(" "+t._s(e.network.name_long)+" ")])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:"custom"===t.selectedPath.path,expression:"selectedPath.path === 'custom'"}],staticClass:"custom-path-inputs"},[s("div",{staticClass:"path-input"},[s("label",{attrs:{for:"custom-label"}},[t._v(" "+t._s(t.$t("accessWallet.path.allias")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customLabel,expression:"customLabel"}],attrs:{name:"custom-label",placeholder:"my custom path"},domProps:{value:t.customLabel},on:{input:function(e){e.target.composing||(t.customLabel=e.target.value)}}})]),s("div",{staticClass:"path-input"},[s("label",{attrs:{for:"custom-path"}},[t._v(t._s(t.$t("accessWallet.path.string")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customPath,expression:"customPath"}],attrs:{name:"custom-path",placeholder:"m/44'/1'/0'/0"},domProps:{value:t.customPath},on:{input:function(e){e.target.composing||(t.customPath=e.target.value)}}})]),s("div",{staticClass:"custom-path-actions"},[s("div",{staticClass:"cancel",on:{click:t.cancel}},[t._v(" "+t._s(t.$t("common.cancel"))+" ")]),s("div",{staticClass:"proceed",on:{click:t.locAddCustomPath}},[t._v(" "+t._s(t.$t("accessWallet.path.add-custom"))+" ")])])]),s("b-dropdown",{staticClass:"dropdown-button-3",attrs:{"no-caret":!0}},[s("template",{slot:"button-content"},[s("span",[t._v(" "+t._s(t.dropDownDefaultText)+" ")]),s("i",{class:[t.flipButton?"fa-chevron-up":"fa-chevron-down","fa"]})]),t._l(t.selectedApp.paths,(function(e,a){return s("b-dropdown-item",{key:e.label,ref:"pathDropdown",refInFor:!0,attrs:{active:e.path===t.selectedPath.path},on:{click:function(s){return t.setPath(e,a)}}},[t._v(" "+t._s(e.label)+" - "+t._s(e.path)+" "),s("i",{directives:[{name:"show",rawName:"v-show",value:"Custom Paths"===t.selectedApp.network.name_long&&!e.hasOwnProperty("default"),expression:"\n                selectedApp.network.name_long === 'Custom Paths' &&\n                  !path.hasOwnProperty('default')\n              "}],staticClass:"fa fa-times remove-custom",on:{click:function(s){return s.stopPropagation(),t.remove(e,a)}}})])}))],2),s("button",{class:["custom"===t.selectedPath.path?"disabled":"","mid-round-button-green-filled next-button"],on:{click:t.next}},[t._v(" "+t._s(t.$t("common.next"))+" ")])],1)])])],1)},n=[],o=(s("99af"),s("4de4"),s("4160"),s("d81d"),s("b64b"),s("159b"),s("f3f3")),c=s("8761"),i=s("e4d6"),r=[{network:c["ETH"],prefixes:["m/44'/60'"],paths:[i["s"],i["u"]]},{network:c["ELLA"],prefixes:["m/44'/163'"],paths:[i["e"]]},{network:c["ETC"],prefixes:["m/44'/61'","m/44'/60'"],paths:[i["t"],i["v"]]},{network:c["ESN"],prefixes:["m/44'/31102'"],paths:[i["i"]]},{network:c["ETHO"],prefixes:["m/44'/1313114'"],paths:[i["g"]]},{network:c["EXP"],prefixes:["m/44'/40'"],paths:[i["n"]]},{network:c["PIRL"],prefixes:["m/44'/164'"],paths:[i["B"]]},{network:c["POA"],prefixes:["m/44'/60'"],paths:[i["C"]]},{network:c["RSK"],prefixes:["m/44'/137'"],paths:[i["F"]]},{network:c["RSKTEST"],prefixes:["m/44'/37310'"],paths:[i["G"]]},{network:c["UBQ"],prefixes:["m/44'/108'"],paths:[i["L"]]},{network:c["AKA"],prefixes:["m/44'/200625'"],paths:[i["a"]]},{network:c["MUSIC"],prefixes:["m/44'/184'"],paths:[i["A"]]},{network:c["CLO"],prefixes:["m/44'/820'"],paths:[i["c"]]},{network:c["EGEM"],prefixes:["m/44'/1987'"],paths:[i["h"]]},{network:c["ATH"],prefixes:["m/44'/1620'"],paths:[i["b"]]},{network:c["GO"],prefixes:["m/44'/6060'"],paths:[i["o"]]},{network:c["MIX"],prefixes:["m/44'/76'"],paths:[i["z"]]},{network:c["REOSC"],prefixes:["m/44'/2894'"],paths:[i["D"]]},{network:c["TOMO"],prefixes:["m/44'/889'"],paths:[i["K"]]},{network:c["ROP"],prefixes:["m/44'/1'"],paths:[i["E"]]},{network:c["TT"],prefixes:["m/44'/1001'"],paths:[i["J"]]},{network:c["PHT"],prefixes:["m/44'/60'"],paths:[i["w"]]},{network:c["ERE"],prefixes:["m/44'/466'"],paths:[i["j"]]}],l=r,d=s("de4e"),u=s.n(d),p=s("ce96"),h=s("e3b9"),m=s("2f62"),f={props:{networks:{type:Object,default:function(){return{}}}},data:function(){return{apps:l,selectedApp:{network:{name_long:l[0].network.name_long,icon:l[0].network.icon},paths:l[0].paths},toggled:!1,selectedPath:l[0].paths[0],flipButton:!1,customLabel:"",customPath:""}},computed:Object(o["a"])({fieldsFilled:function(){var t=Object.keys(this.selectedApp).length;return""===this.selected&&0===t&&"Select Path"===this.selectedPathText&&""===this.selectedPath},dropDownDefaultText:function(){return"".concat(this.selectedPath.label," - ").concat(this.selectedPath.path)}},Object(m["c"])("main",["customPaths"])),watch:{selectedApp:{handler:function(t){this.selectedPath=t.paths[0]},deep:!0},customPaths:function(){this.setupCustomPaths()}},mounted:function(){var t=this;this.setupCustomPaths(),this.$root.$on("bv::dropdown::show",(function(){t.flipButton=!0})),this.$root.$on("bv::dropdown::hide",(function(){t.flipButton=!1}))},methods:Object(o["a"])({},Object(m["b"])("main",["removeCustomPath","addCustomPath"]),{remove:function(t,e){var s=this.selectedApp.paths.filter((function(t,s){if(s!==e)return t}));this.removeCustomPath(t),this.setupCustomPaths(),this.selectedApp.paths=s,this.selectedPath=this.selectedApp.paths.length>1?this.selectedApp.paths[0]:l[0].paths[0],this.$refs.pathDropdown[0].closeDropdown()},setupCustomPaths:function(){var t=this,e=l.map((function(t){return t})),s=Object.keys(this.customPaths),a={paths:[{label:"Ethereum (Trezor)",path:i["k"].path,default:!0},{label:"Add Custom Paths",path:"custom",default:!0}],network:{icon:u.a,name_long:"Custom Paths",name:"Custom"}};s.forEach((function(e){a.paths.unshift(t.customPaths[e])})),e.push(a),this.apps=e},locAddCustomPath:function(){var t=this,e=p["g"].checkCustomPath(this.customPath);e?(this.selectedPath={path:e,label:this.customLabel},this.addCustomPath({label:this.customLabel,path:e}).then((function(){t.setupCustomPaths(),t.selectedApp.paths.unshift(t.selectedPath)}))):p["e"].responseHandler(this.$t("access-wallet.path.ivalid-custom"),p["e"].ERROR)},cancel:function(){this.customLabel="",this.customPath="",this.selectedPath=this.selectedApp.paths.length>1?this.selectedApp.paths[0]:l[0].paths[0]},selectDapp:function(t){this.selectedApp=t},setPath:function(t){this.selectedPath=t},next:function(){var t=this;this.$refs.ledgerApp.hide(),Object(h["c"])(this.selectedPath.path).then((function(e){t.$emit("hardwareWalletOpen",e)})).catch((function(t){h["c"].errorHandler(t)}))},reset:function(){this.selectedApp=this.apps[0],this.selectedPath=this.apps[0].paths[0]}})},v=f,w=(s("832a"),s("2877")),b=Object(w["a"])(v,a,n,!1,null,"7eb1be17",null),g=b.exports;s.d(e,"a",(function(){return g}))}}]);
//# sourceMappingURL=chunk-ec95f6fa.21311c44.js.map