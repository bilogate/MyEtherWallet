(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e8dd5ea"],{"038f":function(e,t,n){e.exports=n.p+"img/Address.d40b8287.svg"},"0b5e":function(e,t,n){"use strict";var a=n("9e940"),s=n.n(a);s.a},1113:function(e,t,n){e.exports=n.p+"img/wallet.66b8433e.svg"},"15f0":function(e,t,n){"use strict";var a=n("6071"),s=n.n(a);s.a},"240d":function(e,t,n){e.exports=n.p+"img/printer-white.f359e248.svg"},"4da0":function(e,t,n){e.exports=n.p+"img/qr-code-white.6d0e26cd.svg"},"4fca":function(e,t,n){"use strict";var a=n("d9cf"),s=n.n(a);s.a},6071:function(e,t,n){},"7d3a":function(e,t,n){"use strict";var a=n("81ed"),s=n.n(a);s.a},"81ed":function(e,t,n){},"820b":function(e,t,n){},"8e17":function(e,t,n){},"91d9":function(e,t,n){"use strict";var a=n("f50b"),s=n.n(a);s.a},"9e940":function(e,t,n){},"9ef6":function(e,t,n){"use strict";var a=n("820b"),s=n.n(a);s.a},bd8c:function(e,t,n){"use strict";var a=n("8e17"),s=n.n(a);s.a},cbe1:function(e,t,n){},d9cf:function(e,t,n){},eff8:function(e,t,n){"use strict";var a=n("cbe1"),s=n.n(a);s.a},f50b:function(e,t,n){},f955:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-layout"},[n("wallet-password-modal"),n("enter-pin-number-modal"),n("ledger-app-modal",{ref:"ledgerAppModal",attrs:{networks:e.Networks},on:{hardwareWalletOpen:e.toggleNetworkAddrModal}}),n("mnemonic-modal",{ref:"mnemonicPhraseModal",attrs:{"hardware-wallet-open":e.toggleNetworkAddrModal}}),n("mnemonic-password-modal",{ref:"mnemonicPhrasePassword",attrs:{"hardware-wallet-open":e.toggleNetworkAddrModal,phrase:e.phrase}}),n("network-and-address-modal",{ref:"networkAddress",attrs:{"hardware-wallet":e.hwInstance}}),n("hardware-password-modal",{ref:"hardwareModal",attrs:{"wallet-constructor":e.walletConstructor,"hardware-brand":e.hardwareBrand},on:{hardwareWalletOpen:e.toggleNetworkAddrModal}}),n("print-modal",{ref:"printModal",attrs:{"priv-key":!e.wallet,address:e.account.address}}),n("address-qrcode-modal",{ref:"addressQrcodeModal",attrs:{address:e.account.address}}),n("div",{staticClass:"mobile-interface-address-block"},[n("mobile-interface-address",{attrs:{address:e.address,print:e.print,"switch-addr":e.switchAddress}})],1),n("div",{staticClass:"wrap"},[n("div",{staticClass:"sidemenu"},[n("div",{staticClass:"side-nav-background",class:e.isSidemenuOpen&&"side-nav-open",on:{click:function(t){e.startToggleSideMenu}}}),n("div",{staticClass:"side-nav",class:e.isSidemenuOpen&&"side-nav-open"},[n("interface-side-menu")],1)]),n("div",{staticClass:"contents"},[n("div",{staticClass:"tx-contents"},[n("div",{staticClass:"content-container mobile-hide"},[e.wallet?n("interface-address",{attrs:{address:e.address,print:e.print,"switch-addr":e.switchAddress,"display-addr":e.wallet.displayAddress,qrcode:e.openAddressQrcode}}):e._e()],1),n("div",{staticClass:"content-container mobile-hide"},[n("interface-balance",{attrs:{balance:e.balance,"get-balance":e.getBalance}})],1),n("div",{staticClass:"content-container mobile-hide"},[n("interface-network",{attrs:{"block-number":e.blockNumber}})],1),n("router-view",{attrs:{"tokens-with-balance":e.tokensWithBalance,"get-balance":e.getBalance,tokens:e.tokens,"highest-gas":e.highestGas,nonce:e.nonce,value:e.value,data:e.data,to:e.to,gaslimit:e.gaslimit,gas:e.gas,tokensymbol:e.tokensymbol,"is-prefilled":e.prefilled,"clear-prefilled":e.clearPrefilled,"check-prefilled":e.checkPrefilled}}),n("div",{staticClass:"tokens"},[n("interface-tokens",{attrs:{"fetch-tokens":e.setTokens,"get-token-balance":e.getTokenBalance,tokens:e.tokens,"received-tokens":e.receivedTokens,"reset-token-selection":e.setTokensWithBalance}})],1)],1)])])],1)},s=[],r=(n("99af"),n("4de4"),n("4160"),n("d81d"),n("45fc"),n("b0c0"),n("a9e3"),n("b680"),n("b64b"),n("d3b7"),n("25f0"),n("3ca3"),n("159b"),n("ddb0"),n("96cf"),n("c964")),o=n("f3f3"),i=n("2f62"),c=n("3297"),d=n.n(c),l=n("6035"),u=n("7416"),p=n("6d89b"),h=n("ae88"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"password",staticClass:"bootstrap-modal modal-software nopadding",attrs:{title:e.$t("accessWallet.password"),"hide-footer":"",centered:"",static:"",lazy:""},on:{shown:e.focusInput}},[a("div",{staticClass:"warning"},[a("warning-message")],1),a("div",{staticClass:"modal-content-block"},[a("form",{staticClass:"password-form"},[a("div",{staticClass:"input-container"},["checkbox"===(e.show?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"mnemonicPasswordInput",attrs:{name:"Password",autocomplete:"off",placeholder:"Enter password",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var n=e.password,a=t.target,s=!!a.checked;if(Array.isArray(n)){var r=null,o=e._i(n,r);a.checked?o<0&&(e.password=n.concat([r])):o>-1&&(e.password=n.slice(0,o).concat(n.slice(o+1)))}else e.password=s}}}):"radio"===(e.show?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"mnemonicPasswordInput",attrs:{name:"Password",autocomplete:"off",placeholder:"Enter password",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"mnemonicPasswordInput",attrs:{name:"Password",autocomplete:"off",placeholder:"Enter password",type:e.show?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.show?a("img",{attrs:{alt:"",src:n("5de7")},on:{click:function(t){return t.preventDefault(),e.switchViewPassword(t)}}}):e._e(),e.show?e._e():a("img",{attrs:{alt:"",src:n("31de")},on:{click:function(t){return t.preventDefault(),e.switchViewPassword(t)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:""!==e.error,expression:"error !== ''"}],staticClass:"error"},[e._v(e._s(e.error))]),a("button",{staticClass:"submit-button large-round-button-green-filled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.unlockWallet(t)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.spinner,expression:"!spinner"}]},[e._v(" "+e._s(e.$t("common.continue"))+" ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.spinner,expression:"spinner"}],staticClass:"fa fa-spin fa-spinner fa-lg"})])]),a("div",{staticClass:"support-block"},[a("customer-support")],1)])])},m=[],w=n("20fe"),b=n("e3b9"),v=n("ce96"),k=n("20be"),g={components:{"warning-message":k["a"],"customer-support":w["a"]},props:{hardwareWalletOpen:{type:Function,default:function(){}},phrase:{type:String,default:""}},data:function(){return{show:!1,password:"",error:"",spinner:!1}},watch:{password:function(){this.error=""}},methods:{unlockWallet:function(){var e=this;this.spinner=!0,Object(b["e"])(this.phrase,this.password).then((function(t){e.password="",e.spinner=!1,e.hardwareWalletOpen(t)})).catch((function(t){e.password="",e.spinner=!1,e.error=t,v["e"].responseHandler(t,v["e"].ERROR)}))},switchViewPassword:function(){this.show=!this.show},focusInput:function(){this.$refs.mnemonicPasswordInput.focus()}}},C=g,y=(n("bd8c"),n("2877")),N=Object(y["a"])(C,f,m,!1,null,"bf779efc",null),O=N.exports,_=n("9dbe"),A=n("f73c"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"interface-address"},[a("div",{staticClass:"info-block address"},[a("div",{staticClass:"block-image"},[a("blockie",{staticClass:"blockie-image",attrs:{address:e.address,size:8,scale:16,width:"64px",height:"64px"}}),a("input",{ref:"copyAddress",staticClass:"hidden-input",attrs:{autocomplete:"off"},domProps:{value:e.address}})],1),a("div",{staticClass:"block-content"},[a("div",{staticClass:"information-container"},[a("h2",[e._v(e._s(e.$t("common.addr")))]),a("p",{staticClass:"address"},[e._v(e._s(e.address))])]),a("div",{staticClass:"icon-container"},[e.hasMultipleAddr?a("button",{staticClass:"change-button",attrs:{id:"popover-ref-switch"},on:{click:e.switchAddr}},[e._v(" "+e._s(e.$t("interface.addr.button-switch"))+" ")]):e._e(),a("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-qrcode"},on:{click:e.qrcode}},[a("img",{attrs:{alt:"",src:n("4da0")}})]),a("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-print"},on:{click:e.print}},[a("img",{attrs:{alt:"",src:n("240d")}})]),a("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-copy"},on:{click:e.copy}},[a("img",{attrs:{alt:"",src:n("fd74")}})]),a("b-btn",{directives:[{name:"show",rawName:"v-show",value:e.displayAddr,expression:"displayAddr"}],staticClass:"custom-tooltip button-address",attrs:{id:"popover-ref-address"},on:{click:e.displayAddr}},[a("img",{attrs:{alt:"",src:n("038f")}})]),a("b-popover",{attrs:{content:e.$t("popover.addr-switch"),target:"popover-ref-address",placement:"top",triggers:"hover",title:""}}),a("b-popover",{attrs:{content:e.$t("popover.print"),target:"popover-ref-print",placement:"top",triggers:"hover",title:""}}),a("b-popover",{attrs:{content:e.$t("common.copy"),target:"popover-ref-copy",placement:"top",triggers:"hover",title:""}}),a("b-popover",{attrs:{content:e.$t("popover.addr-switch"),target:"popover-ref-switch",placement:"top",triggers:"hover",title:""}}),a("b-popover",{attrs:{content:e.$t("popover.addr-display"),target:"popover-ref-address",placement:"top",triggers:"hover",title:""}}),a("b-popover",{attrs:{content:e.$t("popover.addr-qr"),target:"popover-ref-qrcode",placement:"top",triggers:"hover",title:""}})],1)])])])},x=[],B=n("c8e5"),M=n("59c3"),P={components:{blockie:B["a"]},props:{address:{type:String,default:""},print:{type:Function,default:function(){}},switchAddr:{type:Function,default:function(){}},displayAddr:{type:Function,default:void 0},qrcode:{type:Function,default:function(){}}},data:function(){return{hasMultipleAddr:!1}},computed:Object(o["a"])({},Object(i["c"])("main",["account"])),mounted:function(){null!==this.account.address&&(this.account.identifier!==M["c"]&&this.account.identifier!==M["g"]&&this.account.identifier!==M["e"]&&this.account.identifier!==M["j"]?this.hasMultipleAddr=!0:this.hasMultipleAddr=!1)},methods:{copy:function(){this.$refs.copyAddress.select(),document.execCommand("copy"),v["e"].responseHandler(this.$t("common.copied"),v["e"].INFO)}}},j=P,I=(n("4fca"),Object(y["a"])(j,$,x,!1,null,"25e848a8",null)),T=I.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-block-container"},[a("interface-balance-modal",{ref:"balance",attrs:{balance:e.balance}}),a("div",{staticClass:"info-block balance"},[e._m(0),a("div",{staticClass:"block-content"},[a("div",{staticClass:"information-container"},[a("h2",[e._v(e._s(e.$t("common.balance.string")))]),a("div",{staticClass:"balance-text-container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.balance,expression:"balance !== undefined"}],staticClass:"balance-text"},[a("p",[e._v(" "+e._s(e.balance)+" "),a("span",[e._v(" "+e._s(e.network.type.currencyName)+" ")])])]),a("i",{directives:[{name:"show",rawName:"v-show",value:void 0===e.balance,expression:"balance === undefined"}],staticClass:"fa fa-spin fa-spinner"})])]),a("div",{staticClass:"icon-container"},[a("b-btn",{staticClass:"custom-tooltip",attrs:{id:"balanceCheck"},on:{click:e.balanceModalOpen}},[a("img",{attrs:{alt:"",src:n("617f")}})]),a("b-btn",{staticClass:"custom-tooltip",attrs:{id:"refreshBalance"},on:{click:e.fetchBalance}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!e.fetchingBalance,expression:"!fetchingBalance"}],attrs:{alt:"",src:n("acfc")}}),a("i",{directives:[{name:"show",rawName:"v-show",value:e.fetchingBalance,expression:"fetchingBalance"}],staticClass:"fa fa-lg fa-spinner fa-spin"})]),a("b-popover",{attrs:{content:e.$t("interface.check-balance.string"),target:"balanceCheck",placement:"top",triggers:"hover",title:""}}),a("b-popover",{attrs:{content:e.$t("interface.check-balance.refresh"),target:"refreshBalance",placement:"top",triggers:"hover",title:""}})],1)])])],1)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block-image"},[a("div",{staticClass:"icon-border"},[a("img",{staticClass:"icon",attrs:{alt:"",src:n("1113")}})])])}],W=n("0598"),E={components:{"interface-balance-modal":W["a"]},props:{balance:{type:String,default:"0"},getBalance:{type:Function,default:function(){}}},data:function(){return{fetchingBalance:!1}},computed:Object(o["a"])({},Object(i["c"])("main",["network"])),watch:{balance:function(){this.fetchingBalance=!1}},methods:{balanceModalOpen:function(){this.$refs.balance.$refs.balance.show()},fetchBalance:function(){var e=this;this.fetchingBalance=!0,setTimeout((function(){e.getBalance(),e.fetchingBalance=!1}),1e3)}}},H=E,q=(n("15f0"),Object(y["a"])(H,R,S,!1,null,"7a426128",null)),Q=q.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-block-container"},[n("interface-network-modal",{ref:"network"}),n("div",{staticClass:"info-block network"},[n("div",{staticClass:"block-image"},[n("div",{staticClass:"network-type"},[n("div",{staticClass:"icon-block"},[n("img",{staticClass:"icon",attrs:{src:e.network.type.icon,alt:""}})])])]),n("div",{staticClass:"block-content"},[n("div",{staticClass:"information-container"},[n("div",{staticClass:"title-and-helper"},[n("h2",[e._v(e._s(e.$t("common.network")))])]),e.account.identifier!==e.identifier?n("p",[e._v(" "+e._s(e.network.service+"("+e.network.type.name+")")+" ")]):n("p",[e._v(e._s("Web3 Provider("+e.network.type.name+")"))]),n("p",[e._v(" "+e._s(e.$t("interface.network-modal.last-block"))+"# : "),n("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.parsedNetwork,expression:"parsedNetwork !== ''"}]},[e._v(" "+e._s(e.parsedNetwork))]),n("i",{directives:[{name:"show",rawName:"v-show",value:""===e.parsedNetwork,expression:"parsedNetwork === ''"}],staticClass:"fa fa-spinner fa-spin"})])]),n("div",{staticClass:"icon-container"},[e.account.identifier!==e.identifier?n("button",{staticClass:"change-button",attrs:{id:"networkModal"},on:{click:e.networkModalOpen}},[e._v(" "+e._s(e.$t("interface.network-modal.button-change"))+" ")]):e._e(),n("b-popover",{attrs:{content:e.$t("interface.network-modal.popup-open-networks"),target:"networkModal",placement:"top",triggers:"hover",title:""}})],1)])])],1)},F=[],U=n("37ea"),z={components:{"interface-network-modal":U["a"]},props:{blockNumber:{type:Number,default:0}},data:function(){return{parsedNetwork:0,identifier:M["j"]}},computed:Object(o["a"])({},Object(i["c"])("main",["network","account","web3"])),watch:{blockNumber:function(e){this.parsedNetwork=parseInt(e)}},mounted:function(){this.blockNumber&&void 0!==this.blockNumber&&(this.parsedNetwork=parseInt(this.blockNumber))},methods:{networkModalOpen:function(){this.account.identifier!==this.identifier&&this.$refs.network.$refs.network.show()}}},G=z,L=(n("7d3a"),Object(y["a"])(G,D,F,!1,null,"670b0364",null)),V=L.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"transactions-side-menu"},[a("div",{staticClass:"side-menu-header"},[a("img",{attrs:{alt:"",src:n("9d64")}}),a("div",{on:{click:e.startToggleSideMenu}},[a("i",{staticClass:"fa fa-lg fa-times"})])]),a("div",{staticClass:"side-menu"},[a("ul",e._l(e.tabData,(function(t,n){return a("li",{key:t.name+n,class:t.onlineOnly&&!e.online?"disabled-item":""},[t.onlineOnly&&!e.online?a("div",{staticClass:"dash"}):e._e(),a("div",{class:[e.isTabActive(t.routes)?"active":"","menu-group-title"],on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[a("img",{attrs:{src:e.isTabActive(t.routes)?t.icons.active:t.icons.inactive,alt:""}}),a("p",[e._v(e._s(e.$t(t.titleKey)))]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"tab.children.length"}],class:["fa",e.isTabActive(t.routes)?"fa-angle-up":"fa-angle-down"],attrs:{"aria-hidden":"true"}})]),t.children.length?a("ul",{class:[t.name,e.isTabActive(t.routes)?"show-child":"","child-tab"]},e._l(t.children,(function(t,n){return a("li",{key:t.name+n,class:[e.isTabActive(t.routes)?"active":"",t.onlineOnly&&!e.online?"disabled-item":""],on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[e._v(" "+e._s(e.$t(t.titleKey))+" ")])})),0):e._e()])})),0)])])},K=[],X=(n("caad"),n("2532"),n("2c51")),Y={data:function(){return{tabData:X["a"].tabs}},computed:Object(o["a"])({},Object(i["c"])("main",["online"])),methods:Object(o["a"])({},Object(i["b"])("main",["toggleSideMenu"]),{startToggleSideMenu:function(){this.toggleSideMenu()},isTabActive:function(e){return e.includes(this.$route.path)},tabAction:function(e){e.hasOwnProperty("children")&&0!==e.children.length?this.$router.push({path:e.children[0].routes[0]}):(this.startToggleSideMenu(),this.$router.push({path:e.routes[0]}))}})},Z=Y,ee=(n("9ef6"),Object(y["a"])(Z,J,K,!1,null,"b506a99a",null)),te=ee.exports,ne=n("2480"),ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mobile-interface-address"},[a("address-qrcode-modal",{ref:"qrcode",attrs:{address:e.account.address}}),a("div",{staticClass:"wrap"},[a("div",{staticClass:"top-block"},[a("div",{staticClass:"blockie-container"},[a("blockie",{staticClass:"blockie-image",attrs:{address:e.address,size:8,scale:16}})],1),a("div",{staticClass:"address"},[e._v(e._s(e.address))]),a("input",{ref:"copyAddress",staticClass:"hidden-input",attrs:{autocomplete:"off"},domProps:{value:e.address}}),a("div",{staticClass:"address-end"},[e._v(" "+e._s(""!==e.address?e.address.substring(e.address.length-4,e.address.length):"")+" ")]),a("div",{staticClass:"buttons-container"},[a("button",{on:{click:e.openQrcode}},[a("img",{attrs:{alt:"",src:n("4da0")}}),e._m(0)]),a("button",{on:{click:e.print}},[a("img",{attrs:{alt:"",src:n("240d")}})]),a("button",{on:{click:e.copy}},[a("img",{attrs:{alt:"",src:n("fd74")}})])])]),e.hasMultipleAddr?a("div",{staticClass:"bottom-block"},[a("button",{on:{click:e.switchAddr}},[e._v(e._s(e.$t("interface.change-addr")))])]):e._e()])],1)},se=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"floating-barcode"},[n("div",{staticClass:"barcode-image"})])}],re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"address-qrcode-modal"},[n("b-modal",{ref:"addressQrcode",staticClass:"bootstrap-modal nopadding",attrs:{title:e.$t("common.addr"),"hide-footer":"",centered:"",static:"",lazy:""}},[n("div",{staticClass:"modal-contents"},[n("qrcode",{attrs:{value:e.address,options:{size:160}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],ref:"addressInput",staticClass:"address",attrs:{readonly:""},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),n("button",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])],1)])],1)},oe=[],ie={name:"AddressQrcodeModal",props:{address:{type:String,default:""}},data:function(){return{}},methods:{copyToClipboard:function(){this.$refs.addressInput.select(),document.execCommand("copy")}}},ce=ie,de=(n("91d9"),Object(y["a"])(ce,re,oe,!1,null,"15c3af6c",null)),le=de.exports,ue={components:{blockie:B["a"],"address-qrcode-modal":le},props:{address:{type:String,default:""},print:{type:Function,default:function(){}},switchAddr:{type:Function,default:function(){}}},data:function(){return{hasMultipleAddr:!1}},computed:Object(o["a"])({},Object(i["c"])("main",["account"])),mounted:function(){null!==this.account.address&&(this.account.identifier!==M["c"]&&this.account.identifier!==M["g"]&&this.account.identifier!==M["e"]&&this.account.identifier!==M["j"]?this.hasMultipleAddr=!0:this.hasMultipleAddr=!1)},methods:{copy:function(){this.$refs.copyAddress.select(),document.execCommand("copy"),v["e"].responseHandler(this.$t("common.copied"),v["e"].INFO)},openQrcode:function(){this.$refs.qrcode.$refs.addressQrcode.show()}}},pe=ue,he=(n("eff8"),Object(y["a"])(pe,ae,se,!1,null,"cded920c",null)),fe=he.exports,me=n("8f2d"),we=n("dce7"),be=n("b7d3"),ve=n("8761"),ke=n("901e"),ge=n("8ded"),Ce=n.n(ge),ye=n("3578"),Ne=n.n(ye),Oe=n("cb38"),_e=n("1131"),Ae=n.n(_e),$e={name:"Interface",components:{"interface-side-menu":te,"interface-address":T,"interface-balance":Q,"interface-network":V,"interface-tokens":ne["a"],"wallet-password-modal":l["a"],"print-modal":me["a"],"network-and-address-modal":p["a"],"hardware-password-modal":h["a"],"mnemonic-modal":_["a"],"mnemonic-password-modal":O,"enter-pin-number-modal":u["a"],"mobile-interface-address":fe,"address-qrcode-modal":le,"ledger-app-modal":A["a"]},data:function(){return{balance:"0",blockNumber:0,tokens:[],receivedTokens:!1,tokensWithBalance:[],pollBlock:function(){},pollNetwork:function(){},pollddress:function(){},highestGas:"0",alert:{show:!1,msg:""},hws:{ledger:b["c"],trezor:b["g"],bitbox:b["a"],secalot:b["f"]},hwInstance:{},walletConstructor:function(){},hardwareBrand:"",phrase:"",nonce:"0",value:"0",data:"",to:"",gaslimit:"21000",gas:0,tokensymbol:"",prefilled:!1}},computed:Object(o["a"])({isSidemenuOpen:function(){return this.sidemenuOpen},address:function(){return null!==this.wallet?Object(be["b"])(this.account.address):null}},Object(i["c"])("main",["network","account","online","web3","Networks","sidemenuOpen","wallet","linkQuery"])),watch:{web3:function(){this.setupOnlineEnvironment()},address:function(e){e&&this.setupOnlineEnvironment()}},mounted:function(){this.setupOnlineEnvironment()},destroyed:function(){this.clearIntervals()},methods:Object(o["a"])({},Object(i["b"])("main",["switchNetwork","setWeb3Instance","saveQueryVal","updateBlockNumber","setAccountBalance","switchNetwork","setENS","decryptWallet","toggleSideMenu"]),{checkPrefilled:function(){var e=this,t=Object.keys(e.linkQuery).length;if(t>0){e.prefilled=!0;var n=e.linkQuery,a=n.value,s=n.data,r=n.to,o=n.gaslimit,i=n.gas,c=n.tokensymbol,d=n.network;if(e.value=a&&new ke["BigNumber"](a).gt(0)?new ke["BigNumber"](a).toFixed():"0",e.data=s&&Ae.a.isHexStrict(s)?s:"",e.to=r&&Object(be["a"])(r)?r:"",e.gaslimit=o&&new ke["BigNumber"](o).gt(0)?o:"21000",e.gas=i&&new ke["BigNumber"](i).gt(0)?new ke["BigNumber"](i):0,e.tokensymbol=c||"",d){var l=e.Networks[d.toUpperCase()];l&&e.switchNetwork(l[0]).then((function(){e.setWeb3Instance()}))}e.saveQueryVal({})}},clearPrefilled:function(){this.value="0",this.data="",this.to="",this.gaslimit="21000",this.gas=0,this.tokensymbol="",this.prefilled=!1},openAddressQrcode:function(){this.$refs.addressQrcodeModal.$refs.addressQrcode.show()},mnemonicphrasePasswordModalOpen:function(e){this.phrase=e,this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.hide(),this.$refs.mnemonicPhrasePassword.$refs.password.show()},toggleNetworkAddrModal:function(e){this.$refs.hardwareModal.$refs.password.hide(),this.$refs.mnemonicPhrasePassword.$refs.password.hide(),this.hwInstance=e,this.$refs.networkAddress.$refs.networkAndAddress.show()},togglePasswordModal:function(e,t){this.walletConstructor=e,this.hardwareBrand=t,this.$refs.hardwareModal.$refs.password.show()},ledgerAppModalOpen:function(){this.$refs.ledgerAppModal.$refs.ledgerApp.show()},switchAddress:function(){var e=this;switch(this.account.identifier){case M["d"]:this.ledgerAppModalOpen();break;case M["i"]:Object(b["g"])().then((function(t){e.toggleNetworkAddrModal(t)})).catch(b["g"].errorHandler);break;case M["a"]:this.togglePasswordModal(b["a"],"BitBox");break;case M["h"]:this.togglePasswordModal(b["f"],"Secalot");break;case M["f"]:this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.show();break;case M["b"]:Object(b["b"])(!1,this.$eventHub).then((function(t){e.toggleNetworkAddrModal(t)})).catch(b["b"].errorHandler);break;default:v["e"].responseHandler(new Error("Wallet type ".concat(this.account.identifier," can't switch addresses")),!1)}},print:function(){this.$refs.printModal.$refs.print.show()},startToggleSideMenu:function(){this.toggleSideMenu()},fetchTokens:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.receivedTokens=!1,n=[],1!==e.network.type.chainID&&3!==e.network.type.chainID){t.next=16;break}return a=new Ne.a(e.web3.currentProvider),t.prev=4,t.next=7,a.getBalance(e.account.address,!0,!0,!0,0,{gas:"0x11e1a300"});case 7:n=t.sent,n=n.map((function(e){return e.address=e.addr,delete e.addr,e})),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](4),n=e.network.type.tokens.map((function(e){return e.balance="Load",e}));case 14:t.next=17;break;case 16:n=e.network.type.tokens.map((function(e){return e.balance="Load",e}));case 17:return t.abrupt("return",n);case 18:case"end":return t.stop()}}),t,null,[[4,11]])})))()},setNonce:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Ce.a.set(e.web3.utils.sha3(e.account.address),{nonce:"0x00",timestamp:0}),t.next=3,e.web3.eth.getTransactionCount(e.account.address).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}));case 3:n=t.sent,e.nonce=new ke["BigNumber"](n).toString();case 5:case"end":return t.stop()}}),t)})))()},getTokenBalance:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,s,r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,a=t.web3,s=[{name:"balanceOf",type:"function",constant:!0,inputs:[{name:"address",type:"address"}],outputs:[{name:"out",type:"uint256"}]}],r=new a.eth.Contract(s),o=r.methods.balanceOf(t.account.address).encodeABI(),n.next=7,a.eth.call({to:e.address,data:o}).then((function(t){var n;if(0===Number(t)||"0x"===t)n=0;else{var a=new ke["BigNumber"](10).pow(e.decimals);n=new ke["BigNumber"](t).div(a).toString()}return n})).catch((function(e){v["e"].responseHandler(e,!1)}));case 7:return i=n.sent,n.abrupt("return",i);case 11:n.prev=11,n.t0=n["catch"](0),v["e"].responseHandler(n.t0,v["e"].ERROR);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},setCustomTokenStore:function(){var e=Ce.a.get("customTokens");Object.keys(ve).forEach((function(t){void 0===e[ve[t].name]&&(e[ve[t].name]=[])})),Ce.a.set("customTokens",e)},setTokens:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tokens=[],t.next=3,e.fetchTokens();case 3:n=t.sent,n=n.sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:e.name.toUpperCase()>t.name.toUpperCase()?1:0})).map((function(e){var t=new ke["BigNumber"](e.balance),n=t.isNaN()?e.balance:t.div(new ke["BigNumber"](10).pow(e.decimals)).toFixed(),a={address:e.address,balance:n,decimals:e.decimals,email:e.email,name:e.name,symbol:e.symbol,website:e.website};return a})),e.tokens=n.sort(Oe["a"]),e.setTokensWithBalance();case 7:case"end":return t.stop()}}),t)})))()},setTokensWithBalance:function(){var e=this,t=Ce.a.get("customTokens");void 0!==t&&void 0!==t[this.network.type.name]&&t[this.network.type.name].length>0?new Promise((function(n){var a=t[e.network.type.name].map(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTokenBalance(n);case 2:return n.balance=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());Promise.all(a).then((function(a){t[e.network.type.name]=a,Ce.a.set("customTokens",t),n(a)}))})).then((function(t){var n=e.tokens.filter((function(e){return e.balance>0})).concat(t.filter((function(e){return e.balance>0})));e.tokensWithBalance=n,e.receivedTokens=!0})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)})):(this.receivedTokens=!0,this.tokensWithBalance=this.tokens.filter((function(e){return e.balance>0})))},getBlock:function(){var e=this;this.web3.eth.getBlockNumber().then((function(t){e.blockNumber=t,e.updateBlockNumber(t)})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}))},getBalance:function(){var e=this,t=this.web3;t.eth.getBalance(this.address.toLowerCase()).then((function(n){e.balance=t.utils.fromWei(n,"ether"),e.setAccountBalance(n)})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}))},checkWeb3WalletAddrChange:function(){var e=this,t=this.web3;window.ethereum.on("accountsChanged",(function(n){if(n.length>1){var a=new we["b"](n[0]);e.decryptWallet([a,t])}}))},checkAndSetNetwork:function(e){var t=this;this.network.type.chainID.toString()!=="".concat(e)&&Object.keys(ve).some((function(n){if(ve[n].chainID.toString()==="".concat(e)&&t.Networks[n])return t.switchNetwork(t.Networks[n][0]),!0}))},matchWeb3WalletNetwork:function(){var e=this;this.web3.eth.net.getId().then((function(t){e.checkAndSetNetwork(t)})),window.ethereum.on("networkChanged",(function(t){e.setupOnlineEnvironment(),e.checkAndSetNetwork(t)}))},setupOnlineEnvironment:Ae.a._.debounce((function(){var e=this;this.clearIntervals(),void 0===Ce.a.get("customTokens")?(Ce.a.set("customTokens",{}),this.setCustomTokenStore()):this.setCustomTokenStore(),this.online&&null!==this.account.address&&(this.account.identifier===M["j"]&&(window.ethereum.isMetaMask||window.ethereum.isMew?(this.checkWeb3WalletAddrChange(),this.matchWeb3WalletNetwork()):(this.web3WalletPollNetwork(),this.web3WalletPollAddress())),this.callSetENS(),this.getBlock(),this.getBalance(),this.setTokens(),this.setNonce(),this.getHighestGas(),this.getBlockUpdater().then((function(t){e.pollBlock=t})))})),getBlockUpdater:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=e.web3.eth.subscribe("newBlockHeaders",(function(a){a&&(n=setInterval(e.getBlock,14e3)),t(n)})).on("data",(function(t){e.blockNumber=t.number}))})));case 1:case"end":return t.stop()}}),t)})))()},getHighestGas:function(){var e=this;this.web3.eth.getGasPrice().then((function(t){e.highestGas=new ke["BigNumber"](e.web3.utils.fromWei(t,"gwei")).toString()})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}))},callSetENS:function(){if(this.network.type.ens){var e=new d.a(this.web3.currentProvider,this.network.type.ens.registry);this.setENS(e)}else this.setENS(null)},clearIntervals:function(){this.pollBlock.unsubscribe?this.pollBlock.unsubscribe():clearInterval(this.pollBlock),clearInterval(this.pollNetwork),clearInterval(this.pollAddress)},web3WalletPollNetwork:function(){var e=this;window.web3.eth.net&&"function"===typeof window.web3.eth.net.getId&&(this.pollNetwork=setInterval((function(){window.web3.eth.net.getId().then((function(t){e.network.type.chainID.toString()!==t&&Object.keys(ve).some((function(n){if(ve[n].chainID===t&&e.Networks[n])return e.switchNetwork(e.Networks[n]),clearInterval(e.pollNetwork),!0}))})).catch((function(e){v["e"].responseHandler(e,!1)}))}),500))},web3WalletPollAddress:function(){var e=this;this.pollAddress=setInterval((function(){window.web3.eth||(v["e"].responseHandler(new Error("Web3 Instance not found!"),v["e"].ERROR),clearInterval(e.pollAddress)),window.web3.eth.getAccounts((function(t,n){t&&(v["e"].responseHandler(t,!1),clearInterval(e.pollAddress)),n.length||(v["e"].responseHandler(new Error("Please make sure that your Web3 Wallet is unlocked"),v["e"].ERROR),clearInterval(e.pollAddress));var a=n[0];if(null!==e.account.address&&a.toLowerCase()!==e.account.address.toLowerCase()){var s=new we["b"](a);e.decryptWallet([s,window.web3.currentProvider]),clearInterval(e.pollAddress)}}))}),500)}})},xe=$e,Be=(n("0b5e"),Object(y["a"])(xe,a,s,!1,null,"2d8c769e",null)),Me=Be.exports;n.d(t,"default",(function(){return Me}))},fd74:function(e,t,n){e.exports=n.p+"img/copy.ec4723ca.svg"}}]);
//# sourceMappingURL=chunk-8e8dd5ea.2005c071.js.map