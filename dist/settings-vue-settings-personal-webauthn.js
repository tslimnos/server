/*! For license information please see settings-vue-settings-personal-webauthn.js.LICENSE.txt */
(()=>{"use strict";var e,n={9802:(e,n,i)=>{var r=i(20144),s=i(16453),a=i(10128),o=i.n(a),d=i(66415),c=i.n(d);const l=(0,i(17499).getLoggerBuilder)().setApp("settings").detectUser().build();var u=i(4820),h=i(79753);const p=t=>e=>(l.debug(t),e),g=Object.freeze({READY:1,REGISTRATION:2,NAMING:3,PERSIST:4}),v={name:"AddDevice",props:{httpWarning:Boolean,isHttps:{type:Boolean,default:!1},isLocalhost:{type:Boolean,default:!1}},data:()=>({name:"",credential:{},RegistrationSteps:g,step:g.READY}),methods:{arrayToBase64String:t=>btoa(String.fromCharCode(...t)),start(){return this.step=g.REGISTRATION,console.debug("Starting WebAuthn registration"),o()().then(this.getRegistrationData).then(this.register.bind(this)).then((()=>{this.step=g.NAMING})).catch((t=>{console.error(t.name,t.message),this.step=g.READY}))},getRegistrationData:()=>(console.debug("Fetching webauthn registration data"),async function(){const t=(0,h.generateUrl)("/settings/api/personal/webauthn/registration");return(await u.default.get(t)).data}().then((t=>(console.debug(t),t.challenge=Uint8Array.from(function(t){const e=(t=t.replace(/-/g,"+").replace(/_/g,"/")).length%4;if(e){if(1===e)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");t+=new Array(5-e).join("=")}return window.atob(t)}(t.challenge),(t=>t.charCodeAt(0))),t.user.id=Uint8Array.from(t.user.id,(t=>t.charCodeAt(0))),t))).catch((e=>{throw console.error("Error getting webauthn registration data from server",e),new Error(t("settings","Server error while trying to add WebAuthn device"))}))),register(t){return console.debug("starting webauthn registration"),navigator.credentials.create({publicKey:t}).then((t=>{this.credential={id:t.id,type:t.type,rawId:this.arrayToBase64String(new Uint8Array(t.rawId)),response:{clientDataJSON:this.arrayToBase64String(new Uint8Array(t.response.clientDataJSON)),attestationObject:this.arrayToBase64String(new Uint8Array(t.response.attestationObject))}}}))},submit(){return this.step=g.PERSIST,o()().then(p("confirmed password")).then(this.saveRegistrationData).then(p("registration data saved")).then((()=>this.reset())).then(p("app reset")).catch(console.error.bind(this))},async saveRegistrationData(){try{const t=await async function(t,e){const n=(0,h.generateUrl)("/settings/api/personal/webauthn/registration");return(await u.default.post(n,{name:t,data:e})).data}(this.name,JSON.stringify(this.credential));l.info("new device added",{device:t}),this.$emit("added",t)}catch(e){throw l.error("Error persisting webauthn registration",{error:e}),new Error(t("settings","Server error while trying to complete WebAuthn device registration"))}},reset(){this.name="",this.registrationData={},this.step=g.READY}}};var A=i(93379),b=i.n(A),f=i(65262);b()(f.Z,{insert:"head",singleton:!1}),f.Z.locals;var w=i(51900);const m=(0,w.Z)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isHttps||t.isLocalhost?n("div",[t.step===t.RegistrationSteps.READY?n("div",[n("button",{on:{click:t.start}},[t._v("\n\t\t\t"+t._s(t.t("settings","Add WebAuthn device"))+"\n\t\t")])]):t.step===t.RegistrationSteps.REGISTRATION?n("div",{staticClass:"new-webauthn-device"},[n("span",{staticClass:"icon-loading-small webauthn-loading"}),t._v("\n\t\t"+t._s(t.t("settings","Please authorize your WebAuthn device."))+"\n\t")]):t.step===t.RegistrationSteps.NAMING?n("div",{staticClass:"new-webauthn-device"},[n("span",{staticClass:"icon-loading-small webauthn-loading"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.t("settings","Name your device")},domProps:{value:t.name},on:{":keyup":function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.submit}},[t._v("\n\t\t\t"+t._s(t.t("settings","Add"))+"\n\t\t")])]):t.step===t.RegistrationSteps.PERSIST?n("div",{staticClass:"new-webauthn-device"},[n("span",{staticClass:"icon-loading-small webauthn-loading"}),t._v("\n\t\t"+t._s(t.t("settings","Adding your device …"))+"\n\t")]):n("div",[t._v("\n\t\tInvalid registration step. This should not have happened.\n\t")])]):n("div",[t._v("\n\t"+t._s(t.t("settings","Passwordless authentication requires a secure connection."))+"\n")])}),[],!1,null,"f9b952b4",null).exports;var y=i(79440),R=i.n(y),S=i(56286);const C={name:"Device",components:{ActionButton:i.n(S)(),Actions:R()},props:{name:{type:String,required:!0}}};var T=i(98816);b()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;const D=(0,w.Z)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"webauthn-device"},[n("span",{staticClass:"icon-webauthn-device"}),t._v("\n\t"+t._s(t.name||t.t("settings","Unnamed device"))+"\n\t"),n("Actions",{attrs:{"force-menu":!0}},[n("ActionButton",{attrs:{icon:"icon-delete"},on:{click:function(e){return t.$emit("delete")}}},[t._v("\n\t\t\t"+t._s(t.t("settings","Delete"))+"\n\t\t")])],1)],1)}),[],!1,null,"187f22d4",null).exports,E=c()("name"),_={components:{AddDevice:m,Device:D},props:{initialDevices:{type:Array,required:!0},isHttps:{type:Boolean,default:!1},isLocalhost:{type:Boolean,default:!1},hasPublicKeyCredential:{type:Boolean,default:!1}},data(){return{devices:this.initialDevices}},computed:{sortedDevices(){return E(this.devices)}},methods:{deviceAdded(t){l.debug("adding new device to the list ".concat(t.id)),this.devices.push(t)},async deleteDevice(t){l.info("deleting webauthn device ".concat(t)),await o()(),await async function(t){const e=(0,h.generateUrl)("/settings/api/personal/webauthn/registration/".concat(t));await u.default.delete(e)}(t),this.devices=this.devices.filter((e=>e.id!==t)),l.info("webauthn device ".concat(t," removed successfully"))}}},I=(0,w.Z)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"security-webauthn"}},[n("h2",[t._v(t._s(t.t("settings","Passwordless Authentication")))]),t._v(" "),n("p",{staticClass:"settings-hint hidden-when-empty"},[t._v("\n\t\t"+t._s(t.t("settings","Set up your account for passwordless authentication following the FIDO2 standard."))+"\n\t")]),t._v(" "),0===t.devices.length?n("p",[t._v("\n\t\t"+t._s(t.t("settings","No devices configured."))+"\n\t")]):n("p",[t._v("\n\t\t"+t._s(t.t("settings","The following devices are configured for your account:"))+"\n\t")]),t._v(" "),t._l(t.sortedDevices,(function(e){return n("Device",{key:e.id,attrs:{name:e.name},on:{delete:function(n){return t.deleteDevice(e.id)}}})})),t._v(" "),t.hasPublicKeyCredential?t._e():n("p",{staticClass:"warning"},[t._v("\n\t\t"+t._s(t.t("settings","Your browser does not support WebAuthn."))+"\n\t")]),t._v(" "),t.hasPublicKeyCredential?n("AddDevice",{attrs:{"is-https":t.isHttps,"is-localhost":t.isLocalhost},on:{added:t.deviceAdded}}):t._e()],2)}),[],!1,null,"662cb041",null).exports;i.nc=btoa(OC.requestToken),r.default.prototype.t=t,new(r.default.extend(I))({propsData:{initialDevices:(0,s.loadState)("settings","webauthn-devices"),isHttps:"https:"===window.location.protocol,isLocalhost:"localhost"===window.location.hostname,hasPublicKeyCredential:void 0!==window.PublicKeyCredential}}).$mount("#security-webauthn")},65262:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(94015),r=n.n(i),s=n(23645),a=n.n(s)()(r());a.push([t.id,"\n.webauthn-loading[data-v-f9b952b4] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: 2px;\n\tmargin-right: 2px;\n}\n.new-webauthn-device[data-v-f9b952b4] {\n\tline-height: 300%;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/WebAuthn/AddDevice.vue"],names:[],mappings:";AAgNA;CACA,qBAAA;CACA,mBAAA;CACA,gBAAA;CACA,iBAAA;AACA;AAEA;CACA,iBAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @author Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div v-if=\"!isHttps && !isLocalhost\">\n\t\t{{ t('settings', 'Passwordless authentication requires a secure connection.') }}\n\t</div>\n\t<div v-else>\n\t\t<div v-if=\"step === RegistrationSteps.READY\">\n\t\t\t<button @click=\"start\">\n\t\t\t\t{{ t('settings', 'Add WebAuthn device') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.REGISTRATION\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Please authorize your WebAuthn device.') }}\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.NAMING\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t<input v-model=\"name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\t:placeholder=\"t('settings', 'Name your device')\"\n\t\t\t\t@:keyup.enter=\"submit\">\n\t\t\t<button @click=\"submit\">\n\t\t\t\t{{ t('settings', 'Add') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.PERSIST\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Adding your device …') }}\n\t\t</div>\n\n\t\t<div v-else>\n\t\t\tInvalid registration step. This should not have happened.\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport confirmPassword from '@nextcloud/password-confirmation'\n\nimport logger from '../../logger'\nimport {\n\tstartRegistration,\n\tfinishRegistration,\n} from '../../service/WebAuthnRegistrationSerice'\n\nconst logAndPass = (text) => (data) => {\n\tlogger.debug(text)\n\treturn data\n}\n\nconst RegistrationSteps = Object.freeze({\n\tREADY: 1,\n\tREGISTRATION: 2,\n\tNAMING: 3,\n\tPERSIST: 4,\n})\n\nexport default {\n\tname: 'AddDevice',\n\tprops: {\n\t\thttpWarning: Boolean,\n\t\tisHttps: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t\tisLocalhost: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tname: '',\n\t\t\tcredential: {},\n\t\t\tRegistrationSteps,\n\t\t\tstep: RegistrationSteps.READY,\n\t\t}\n\t},\n\tmethods: {\n\t\tarrayToBase64String(a) {\n\t\t\treturn btoa(String.fromCharCode(...a))\n\t\t},\n\t\tstart() {\n\t\t\tthis.step = RegistrationSteps.REGISTRATION\n\t\t\tconsole.debug('Starting WebAuthn registration')\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(this.getRegistrationData)\n\t\t\t\t.then(this.register.bind(this))\n\t\t\t\t.then(() => { this.step = RegistrationSteps.NAMING })\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error(err.name, err.message)\n\t\t\t\t\tthis.step = RegistrationSteps.READY\n\t\t\t\t})\n\t\t},\n\n\t\tgetRegistrationData() {\n\t\t\tconsole.debug('Fetching webauthn registration data')\n\n\t\t\tconst base64urlDecode = function(input) {\n\t\t\t\t// Replace non-url compatible chars with base64 standard chars\n\t\t\t\tinput = input\n\t\t\t\t\t.replace(/-/g, '+')\n\t\t\t\t\t.replace(/_/g, '/')\n\n\t\t\t\t// Pad out with standard base64 required padding characters\n\t\t\t\tconst pad = input.length % 4\n\t\t\t\tif (pad) {\n\t\t\t\t\tif (pad === 1) {\n\t\t\t\t\t\tthrow new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding')\n\t\t\t\t\t}\n\t\t\t\t\tinput += new Array(5 - pad).join('=')\n\t\t\t\t}\n\n\t\t\t\treturn window.atob(input)\n\t\t\t}\n\n\t\t\treturn startRegistration()\n\t\t\t\t.then(publicKey => {\n\t\t\t\t\tconsole.debug(publicKey)\n\t\t\t\t\tpublicKey.challenge = Uint8Array.from(base64urlDecode(publicKey.challenge), c => c.charCodeAt(0))\n\t\t\t\t\tpublicKey.user.id = Uint8Array.from(publicKey.user.id, c => c.charCodeAt(0))\n\t\t\t\t\treturn publicKey\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('Error getting webauthn registration data from server', err)\n\t\t\t\t\tthrow new Error(t('settings', 'Server error while trying to add WebAuthn device'))\n\t\t\t\t})\n\t\t},\n\n\t\tregister(publicKey) {\n\t\t\tconsole.debug('starting webauthn registration')\n\n\t\t\treturn navigator.credentials.create({ publicKey })\n\t\t\t\t.then(data => {\n\t\t\t\t\tthis.credential = {\n\t\t\t\t\t\tid: data.id,\n\t\t\t\t\t\ttype: data.type,\n\t\t\t\t\t\trawId: this.arrayToBase64String(new Uint8Array(data.rawId)),\n\t\t\t\t\t\tresponse: {\n\t\t\t\t\t\t\tclientDataJSON: this.arrayToBase64String(new Uint8Array(data.response.clientDataJSON)),\n\t\t\t\t\t\t\tattestationObject: this.arrayToBase64String(new Uint8Array(data.response.attestationObject)),\n\t\t\t\t\t\t},\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\n\t\tsubmit() {\n\t\t\tthis.step = RegistrationSteps.PERSIST\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(logAndPass('confirmed password'))\n\t\t\t\t.then(this.saveRegistrationData)\n\t\t\t\t.then(logAndPass('registration data saved'))\n\t\t\t\t.then(() => this.reset())\n\t\t\t\t.then(logAndPass('app reset'))\n\t\t\t\t.catch(console.error.bind(this))\n\t\t},\n\n\t\tasync saveRegistrationData() {\n\t\t\ttry {\n\t\t\t\tconst device = await finishRegistration(this.name, JSON.stringify(this.credential))\n\n\t\t\t\tlogger.info('new device added', { device })\n\n\t\t\t\tthis.$emit('added', device)\n\t\t\t} catch (err) {\n\t\t\t\tlogger.error('Error persisting webauthn registration', { error: err })\n\t\t\t\tthrow new Error(t('settings', 'Server error while trying to complete WebAuthn device registration'))\n\t\t\t}\n\t\t},\n\n\t\treset() {\n\t\t\tthis.name = ''\n\t\t\tthis.registrationData = {}\n\t\t\tthis.step = RegistrationSteps.READY\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: 2px;\n\t\tmargin-right: 2px;\n\t}\n\n\t.new-webauthn-device {\n\t\tline-height: 300%;\n\t}\n</style>\n"],sourceRoot:""}]);const o=a},98816:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(94015),r=n.n(i),s=n(23645),a=n.n(s)()(r());a.push([t.id,"\n.webauthn-device[data-v-187f22d4] {\n\tline-height: 300%;\n\tdisplay: flex;\n}\n.icon-webauthn-device[data-v-187f22d4] {\n\tdisplay: inline-block;\n\tbackground-size: 100%;\n\tpadding: 3px;\n\tmargin: 3px;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/WebAuthn/Device.vue"],names:[],mappings:";AAqDA;CACA,iBAAA;CACA,aAAA;AACA;AAEA;CACA,qBAAA;CACA,qBAAA;CACA,YAAA;CACA,WAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @author 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div class=\"webauthn-device\">\n\t\t<span class=\"icon-webauthn-device\" />\n\t\t{{ name || t('settings', 'Unnamed device') }}\n\t\t<Actions :force-menu=\"true\">\n\t\t\t<ActionButton icon=\"icon-delete\" @click=\"$emit('delete')\">\n\t\t\t\t{{ t('settings', 'Delete') }}\n\t\t\t</ActionButton>\n\t\t</Actions>\n\t</div>\n</template>\n\n<script>\nimport Actions from '@nextcloud/vue/dist/Components/Actions'\nimport ActionButton from '@nextcloud/vue/dist/Components/ActionButton'\n\nexport default {\n\tname: 'Device',\n\tcomponents: {\n\t\tActionButton,\n\t\tActions,\n\t},\n\tprops: {\n\t\tname: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-device {\n\t\tline-height: 300%;\n\t\tdisplay: flex;\n\t}\n\n\t.icon-webauthn-device {\n\t\tdisplay: inline-block;\n\t\tbackground-size: 100%;\n\t\tpadding: 3px;\n\t\tmargin: 3px;\n\t}\n</style>\n"],sourceRoot:""}]);const o=a}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var s=i[t]={id:t,loaded:!1,exports:{}};return n[t].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=n,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=(t,n,i,s)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],s=e[l][2];for(var o=!0,d=0;d<n.length;d++)(!1&s||a>=s)&&Object.keys(r.O).every((t=>r.O[t](n[d])))?n.splice(d--,1):(o=!1,s<a&&(a=s));if(o){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,i,s]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=602,(()=>{var t={602:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var i,s,a=n[0],o=n[1],d=n[2],c=0;if(a.some((e=>0!==t[e]))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(d)var l=d(r)}for(e&&e(n);c<a.length;c++)s=a[c],r.o(t,s)&&t[s]&&t[s][0](),t[a[c]]=0;return r.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var s=r.O(void 0,[820],(()=>r(9802)));s=r.O(s)})();
//# sourceMappingURL=settings-vue-settings-personal-webauthn.js.map?v=a245b9280f201b7c4698