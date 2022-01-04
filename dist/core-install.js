/*! For license information please see core-install.js.LICENSE.txt */
!function(){var e,t={85375:function(e,t,n){var r,o=n(19755);o.prototype.tooltip=(r=o.prototype.tooltip,function(e){try{return r.call(this,e)}catch(t){if(t instanceof TypeError&&"destroy"===e)return void 0===window.TESTING&&console.error("Deprecated call $.tooltip('destroy') has been deprecated and should be removed"),r.call(this,"dispose");if(t instanceof TypeError&&"fixTitle"===e)return void 0===window.TESTING&&console.error("Deprecated call $.tooltip('fixTitle') has been deprecated and should be removed"),r.call(this,"_fixTitle")}})},8439:function(e,t,n){"use strict";var r,o,a,i=n(19755),s=n.n(i),d=n(9944),l=n(74854),c=(r=document,o=l.emit,a=r.getElementsByTagName("head")[0].getAttribute("data-requesttoken"),{getToken:function(){return a},setToken:function(e){o("csrf-token-update",{token:a=e})}}).getToken;s().fn.extend({showPassword:function(e){var t={fn:null,args:{}};t.fn=e;var n=function(e,t){t.val(e.val())},r=function(e,t,r){e.is(":checked")?(n(t,r),r.show(),t.hide()):(n(r,t),r.hide(),t.show())};return this.each((function(){var e=s()(this),o=s()(e.data("typetoggle")),a=function(e){var t=s()(e),n=s()("<input />");return n.attr({type:"text",class:t.attr("class"),style:t.attr("style"),size:t.attr("size"),name:t.attr("name")+"-clone",tabindex:t.attr("tabindex"),autocomplete:"off"}),void 0!==t.attr("placeholder")&&n.attr("placeholder",t.attr("placeholder")),n}(e);a.insertAfter(e),t.fn&&(t.args.input=e,t.args.checkbox=o,t.args.clone=a),o.bind("click",(function(){r(o,e,a)})),e.bind("keyup",(function(){n(e,a)})),a.bind("keyup",(function(){n(a,e),e.trigger("keyup")})),a.bind("blur",(function(){e.trigger("focusout")})),r(o,e,a),a.closest("form").submit((function(e){a.prop("type","password")})),t.fn&&t.fn(t.args)}))}}),n(79366),n(75289),n(56396),n(33824),n(85375),n(99205),n(38554),window.addEventListener("DOMContentLoaded",(function(){var e=!!s()("#hasSQLite").val();s()("#hasMySQL").val(),s()("#hasPostgreSQL").val(),s()("#hasOracle").val(),s()("#selectDbType").buttonset(),s()("#selectDbType p.info a").button("destroy"),s()("#hasSQLite").val()?(s()("#use_other_db").hide(),s()("#use_oracle_db").hide()):s()("#sqliteInformation").hide(),s()("#adminlogin").change((function(){s()("#adminlogin").val(s().trim(s()("#adminlogin").val()))})),s()("#sqlite").click((function(){s()("#use_other_db").slideUp(250),s()("#use_oracle_db").slideUp(250),s()("#sqliteInformation").show(),s()("#dbname").attr("pattern","[0-9a-zA-Z$_-]+")})),s()("#mysql,#pgsql").click((function(){s()("#use_other_db").slideDown(250),s()("#use_oracle_db").slideUp(250),s()("#sqliteInformation").hide(),s()("#dbname").attr("pattern","[0-9a-zA-Z$_-]+")})),s()("#oci").click((function(){s()("#use_other_db").slideDown(250),s()("#use_oracle_db").show(250),s()("#sqliteInformation").hide(),s()("#dbname").attr("pattern","[0-9a-zA-Z$_-.]+")})),s()("#showAdvanced").click((function(e){e.preventDefault(),s()("#datadirContent").slideToggle(250),s()("#databaseBackend").slideToggle(250),s()("#databaseField").slideToggle(250)})),s()("form").submit((function(){var e=s()(this).serializeArray();s()(".float-spinner").show(250),s()(":submit",this).attr("disabled","disabled").val(s()(":submit",this).data("finishing")),s()("input",this).addClass("ui-state-disabled").attr("disabled","disabled"),s()("#selectDbType").find(".ui-button").length>0&&s()("#selectDbType").buttonset("disable"),s()(".strengthify-wrapper, .tipsy").css("-ms-filter",'"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)"').css("filter","alpha(opacity=30)").css("opacity",.3);var t=s()("<form>");t.attr("action",s()(this).attr("action")),t.attr("method","POST");for(var n=0;n<e.length;n++){var r=s()('<input type="hidden">');r.attr(e[n]),t.append(r)}var o=decodeURIComponent((new RegExp("[?|&]redirect_url=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||"";if(o){var a=s()('<input type="hidden">');a.attr({name:"redirect_url",value:o}),t.append(a)}return t.appendTo(document.body),t.submit(),!1}));var t=s()('input[type="radio"]:checked').val();void 0===t&&s()('input[type="radio"]').first().click(),("sqlite"===t||e&&void 0===t)&&(s()("#datadirContent").hide(250),s()("#databaseBackend").hide(250),s()("#databaseField").hide(250),s()(".float-spinner").hide(250)),s()("#adminpass").strengthify({zxcvbn:OC.linkTo("core","vendor/zxcvbn/dist/zxcvbn.js"),titles:[(0,d.translate)("core","Very weak password"),(0,d.translate)("core","Weak password"),(0,d.translate)("core","So-so password"),(0,d.translate)("core","Good password"),(0,d.translate)("core","Strong password")],drawTitles:!0,nonce:btoa(c())}),s()("#dbpass").showPassword().keyup(),s()("#adminpass").showPassword().keyup()}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[d])}))?n.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.j=998,function(){var e={998:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],d=n[2],l=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var c=d(r);for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return r.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[874],(function(){return r(8439)}));o=r.O(o)}();
//# sourceMappingURL=core-install.js.map?v=183da532ee95faef41e1