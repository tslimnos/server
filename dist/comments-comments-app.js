/*! For license information please see comments-comments-app.js.LICENSE.txt */
(()=>{var n,e={93365:(n,t,e)=>{var s={"./af":36026,"./af.js":36026,"./ar":28093,"./ar-dz":41943,"./ar-dz.js":41943,"./ar-kw":23969,"./ar-kw.js":23969,"./ar-ly":40594,"./ar-ly.js":40594,"./ar-ma":18369,"./ar-ma.js":18369,"./ar-sa":32579,"./ar-sa.js":32579,"./ar-tn":76442,"./ar-tn.js":76442,"./ar.js":28093,"./az":86425,"./az.js":86425,"./be":22004,"./be.js":22004,"./bg":42982,"./bg.js":42982,"./bm":21067,"./bm.js":21067,"./bn":8366,"./bn.js":8366,"./bo":95040,"./bo.js":95040,"./br":521,"./br.js":521,"./bs":83242,"./bs.js":83242,"./ca":73046,"./ca.js":73046,"./cs":25794,"./cs.js":25794,"./cv":28231,"./cv.js":28231,"./cy":10927,"./cy.js":10927,"./da":42832,"./da.js":42832,"./de":29415,"./de-at":3331,"./de-at.js":3331,"./de-ch":45524,"./de-ch.js":45524,"./de.js":29415,"./dv":44700,"./dv.js":44700,"./el":88752,"./el.js":88752,"./en-SG":16706,"./en-SG.js":16706,"./en-au":90444,"./en-au.js":90444,"./en-ca":65959,"./en-ca.js":65959,"./en-gb":62762,"./en-gb.js":62762,"./en-ie":40909,"./en-ie.js":40909,"./en-il":79909,"./en-il.js":79909,"./en-nz":75200,"./en-nz.js":75200,"./eo":27447,"./eo.js":27447,"./es":86756,"./es-do":47049,"./es-do.js":47049,"./es-us":57133,"./es-us.js":57133,"./es.js":86756,"./et":72182,"./et.js":72182,"./eu":14419,"./eu.js":14419,"./fa":2916,"./fa.js":2916,"./fi":49964,"./fi.js":49964,"./fo":26094,"./fo.js":26094,"./fr":35833,"./fr-ca":56994,"./fr-ca.js":56994,"./fr-ch":2740,"./fr-ch.js":2740,"./fr.js":35833,"./fy":69542,"./fy.js":69542,"./ga":93264,"./ga.js":93264,"./gd":77457,"./gd.js":77457,"./gl":83043,"./gl.js":83043,"./gom-latn":28379,"./gom-latn.js":28379,"./gu":406,"./gu.js":406,"./he":73219,"./he.js":73219,"./hi":99834,"./hi.js":99834,"./hr":28754,"./hr.js":28754,"./hu":93945,"./hu.js":93945,"./hy-am":81319,"./hy-am.js":81319,"./id":24875,"./id.js":24875,"./is":23724,"./is.js":23724,"./it":79906,"./it-ch":34303,"./it-ch.js":34303,"./it.js":79906,"./ja":77105,"./ja.js":77105,"./jv":15026,"./jv.js":15026,"./ka":67416,"./ka.js":67416,"./kk":79734,"./kk.js":79734,"./km":60757,"./km.js":60757,"./kn":58369,"./kn.js":58369,"./ko":77687,"./ko.js":77687,"./ku":95544,"./ku.js":95544,"./ky":85431,"./ky.js":85431,"./lb":13613,"./lb.js":13613,"./lo":34252,"./lo.js":34252,"./lt":84619,"./lt.js":84619,"./lv":93760,"./lv.js":93760,"./me":93393,"./me.js":93393,"./mi":12369,"./mi.js":12369,"./mk":48664,"./mk.js":48664,"./ml":23099,"./ml.js":23099,"./mn":98539,"./mn.js":98539,"./mr":778,"./mr.js":778,"./ms":39970,"./ms-my":82625,"./ms-my.js":82625,"./ms.js":39970,"./mt":15714,"./mt.js":15714,"./my":53055,"./my.js":53055,"./nb":73945,"./nb.js":73945,"./ne":63645,"./ne.js":63645,"./nl":4829,"./nl-be":12823,"./nl-be.js":12823,"./nl.js":4829,"./nn":23756,"./nn.js":23756,"./pa-in":97877,"./pa-in.js":97877,"./pl":53066,"./pl.js":53066,"./pt":28677,"./pt-br":81592,"./pt-br.js":81592,"./pt.js":28677,"./ro":32722,"./ro.js":32722,"./ru":59138,"./ru.js":59138,"./sd":32568,"./sd.js":32568,"./se":49753,"./se.js":49753,"./si":58024,"./si.js":58024,"./sk":31058,"./sk.js":31058,"./sl":43452,"./sl.js":43452,"./sq":2795,"./sq.js":2795,"./sr":26976,"./sr-cyrl":38819,"./sr-cyrl.js":38819,"./sr.js":26976,"./ss":7467,"./ss.js":7467,"./sv":42787,"./sv.js":42787,"./sw":80298,"./sw.js":80298,"./ta":57532,"./ta.js":57532,"./te":76076,"./te.js":76076,"./tet":40452,"./tet.js":40452,"./tg":64794,"./tg.js":64794,"./th":48245,"./th.js":48245,"./tl-ph":36056,"./tl-ph.js":36056,"./tlh":15249,"./tlh.js":15249,"./tr":22053,"./tr.js":22053,"./tzl":39871,"./tzl.js":39871,"./tzm":39574,"./tzm-latn":19210,"./tzm-latn.js":19210,"./tzm.js":39574,"./ug-cn":91532,"./ug-cn.js":91532,"./uk":11432,"./uk.js":11432,"./ur":88523,"./ur.js":88523,"./uz":54958,"./uz-latn":68735,"./uz-latn.js":68735,"./uz.js":54958,"./vi":83398,"./vi.js":83398,"./x-pseudo":56665,"./x-pseudo.js":56665,"./yo":11642,"./yo.js":11642,"./zh-cn":5462,"./zh-cn.js":5462,"./zh-hk":92530,"./zh-hk.js":92530,"./zh-tw":97333,"./zh-tw.js":97333};function o(n){var t=a(n);return e(t)}function a(n){if(!e.o(s,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return s[n]}o.keys=function(){return Object.keys(s)},o.resolve=a,n.exports=o,o.id=93365},83715:(n,e,s)=>{"use strict";var o=s(17499),a=s(9944),i=s(79753),r=s(22200),m=s(16453),c=s(4820),l=s(34741),d=s(20144),u=s(97e3),p=s.n(u),h=s(80351),A=s.n(h),g=s(56286),C=s.n(g),f=s(79440),j=s.n(f),v=s(33521),_=s.n(v),y=s(28017),b=s.n(y),x=s(11243),w=s.n(x),k=s(13408),D=s.n(k);const E={name:"Moment",props:{timestamp:{type:Number,required:!0},format:{type:String,default:"LLL"}},computed:{title(){return A().unix(this.timestamp).format(this.format)},formatted(){return A().unix(this.timestamp).fromNow()}}};var O=s(51900);const T=(0,O.Z)(E,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("span",{staticClass:"live-relative-timestamp",attrs:{"data-timestamp":1e3*n.timestamp,title:n.title}},[n._v(n._s(n.formatted))])}),[],!1,null,null,null).exports,M=function(){return(0,i.generateRemoteUrl)("dav/comments")};var I=s(81063);c.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",(0,I.getPatcher)().patch("request",c.default);const S=(0,I.createClient)(M());var z=s(26932);const B={props:{id:{type:Number,default:null},message:{type:String,default:""},ressourceId:{type:[String,Number],required:!0}},data:()=>({deleted:!1,editing:!1,loading:!1}),methods:{onEdit(){this.editing=!0},onEditCancel(){this.editing=!1,this.updateLocalMessage(this.message)},async onEditComment(n){this.loading=!0;try{await async function(n,t,e,s){const o=["",n,t,e].join("/");return await S.customRequest(o,Object.assign({method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>'.concat(s,"</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>")}))}(this.commentsType,this.ressourceId,this.id,n),this.logger.debug("Comment edited",{commentsType:this.commentsType,ressourceId:this.ressourceId,id:this.id,message:n}),this.$emit("update:message",n),this.editing=!1}catch(n){(0,z.x2)(t("comments","An error occurred while trying to edit the comment")),console.error(n)}finally{this.loading=!1}},onDeleteWithUndo(){this.deleted=!0;const n=setTimeout(this.onDelete,z.et);(0,z.yl)(t("comments","Comment deleted"),(()=>{clearTimeout(n),this.deleted=!1}))},async onDelete(){try{await async function(n,t,e){const s=["",n,t,e].join("/");await S.deleteFile(s)}(this.commentsType,this.ressourceId,this.id),this.logger.debug("Comment deleted",{commentsType:this.commentsType,ressourceId:this.ressourceId,id:this.id}),this.$emit("delete",this.id)}catch(n){(0,z.x2)(t("comments","An error occurred while trying to delete the comment")),console.error(n),this.deleted=!1}},async onNewComment(n){this.loading=!0;try{const t=await async function(n,t,e){const s=["",n,t].join("/"),o=await c.default.post(M()+s,{actorDisplayName:(0,r.getCurrentUser)().displayName,actorId:(0,r.getCurrentUser)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:e,objectType:"files",verb:"comment"}),a=s+"/"+parseInt(o.headers["content-location"].split("/").pop());return(await S.stat(a,{details:!0})).data}(this.commentsType,this.ressourceId,n);this.logger.debug("New comment posted",{commentsType:this.commentsType,ressourceId:this.ressourceId,newComment:t}),this.$emit("new",t),this.$emit("update:message",""),this.localMessage=""}catch(n){(0,z.x2)(t("comments","An error occurred while trying to create the comment")),console.error(n)}finally{this.loading=!1}}}},N={name:"Comment",components:{ActionButton:C(),Actions:j(),ActionSeparator:_(),Avatar:b(),Moment:T,RichContenteditable:w()},mixins:[D(),B],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0}},data:()=>({expanded:!1,localMessage:""}),computed:{isOwnComment(){return(0,r.getCurrentUser)().uid===this.actorId},renderedContent(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage(){return!this.localMessage||""===this.localMessage.trim()},timestamp(){return parseInt(A()(this.creationDateTime).format("x"),10)/1e3}},watch:{message(n){this.updateLocalMessage(n)}},beforeMount(){this.updateLocalMessage(this.message)},methods:{updateLocalMessage(n){this.localMessage=n.toString()},onSubmit(){if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((()=>{this.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand(){this.expanded=!0}}};var q=s(93379),R=s.n(q),U=s(38155);R()(U.Z,{insert:"head",singleton:!1}),U.Z.locals;const P=(0,O.Z)(N,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:!n.deleted,expression:"!deleted"}],staticClass:"comment",class:{"comment--loading":n.loading}},[e("div",{staticClass:"comment__header"},[e("Avatar",{staticClass:"comment__avatar",attrs:{"display-name":n.actorDisplayName,user:n.actorId,size:32}}),n._v(" "),e("span",{staticClass:"comment__author"},[n._v(n._s(n.actorDisplayName))]),n._v(" "),n.isOwnComment&&n.id&&!n.loading?e("Actions",{staticClass:"comment__actions"},[n.editing?e("ActionButton",{attrs:{icon:"icon-close"},on:{click:n.onEditCancel}},[n._v("\n\t\t\t\t"+n._s(n.t("comments","Cancel edit"))+"\n\t\t\t")]):[e("ActionButton",{attrs:{"close-after-click":!0,icon:"icon-rename"},on:{click:n.onEdit}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Edit comment"))+"\n\t\t\t\t")]),n._v(" "),e("ActionSeparator"),n._v(" "),e("ActionButton",{attrs:{"close-after-click":!0,icon:"icon-delete"},on:{click:n.onDeleteWithUndo}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Delete comment"))+"\n\t\t\t\t")])]],2):n._e(),n._v(" "),n.id&&n.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):n.creationDateTime?e("Moment",{staticClass:"comment__timestamp",attrs:{timestamp:n.timestamp}}):n._e()],1),n._v(" "),n.editor||n.editing?e("div",{staticClass:"comment__editor "},[e("RichContenteditable",{ref:"editor",attrs:{"auto-complete":n.autoComplete,contenteditable:!n.loading,value:n.localMessage},on:{"update:value":n.updateLocalMessage,submit:n.onSubmit}}),n._v(" "),e("input",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.t("comments","Post comment"),expression:"t('comments', 'Post comment')"}],staticClass:"comment__submit",class:n.loading?"icon-loading-small":"icon-confirm",attrs:{type:"submit",disabled:n.isEmptyMessage,value:""},on:{click:n.onSubmit}})],1):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":n.expanded},domProps:{innerHTML:n._s(n.renderedContent)},on:{click:n.onExpand}})])}),[],!1,null,"6ae467e9",null).exports;var $=s(7582),L=s(18635);async function F(n){let{commentsType:t,ressourceId:e}=n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null;const a=["",t,e].join("/");return await S.customRequest(a,Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>'.concat(20,"</oc:limit>\n\t\t\t\t<oc:offset>").concat(s.offset||0,"</oc:offset>\n\t\t\t</oc:filter-comments>")},s)).then((n=>(o=n,n.data))).then($.parseXML).then((n=>G(n,!0))).then((n=>(0,L.processResponsePayload)(o,n,!0))).then((n=>n.data))}function G(n){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:e}}=n;return e.map((n=>{const{propstat:{prop:e}}=n,s={...e,actorDisplayName:Z(e.actorDisplayName,2),message:Z(e.message,2)};return(0,$.prepareFileFromProps)(s,s.id.toString(),t)}))}function Z(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const e=new DOMParser;let s=n;for(let n=0;n<t;n++)s=e.parseFromString(s,"text/html").documentElement.textContent;return s}d.default.use(l.default);const W={name:"Comments",components:{Comment:P,EmptyContent:p()},data:()=>({error:"",loading:!1,done:!1,ressourceId:null,offset:0,comments:[],cancelRequest:()=>{},editorData:{actorDisplayName:(0,r.getCurrentUser)().displayName,actorId:(0,r.getCurrentUser)().uid,key:"editor"},Comment:P}),computed:{hasComments(){return this.comments.length>0},isFirstLoading(){return this.loading&&0===this.offset}},methods:{async update(n){this.ressourceId=n,this.resetState(),this.getComments()},onScrollBottomReached(){this.error||this.done||this.loading||this.getComments()},genMentionsData:n=>Object.values(n).flat().reduce(((n,t)=>(n[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,r.getCurrentUser)().uid===t.mentionId},n)),{}),async getComments(){this.cancelRequest("cancel");try{this.loading=!0,this.error="";const{request:n,cancel:t}=function(n){const t=c.default.CancelToken.source();return{request:async function(e,s){return n(e,Object.assign({cancelToken:t.token},s))},cancel:t.cancel}}(F);this.cancelRequest=t;const e=await n({commentsType:this.commentsType,ressourceId:this.ressourceId},{offset:this.offset});this.logger.debug("Processed ".concat(e.length," comments"),{comments:e}),e.length<20&&(this.done=!0),this.comments.push(...e),this.offset+=20}catch(n){if("cancel"===n.message)return;this.error=t("comments","Unable to load the comments list"),console.error("Error loading the comments list",n)}finally{this.loading=!1}},async autoComplete(n,t){return t((await c.default.get((0,i.generateOcsUrl)("core/autocomplete/get"),{params:{search:n,itemType:"files",itemId:this.ressourceId,sorter:"commenters|share-recipients",limit:(0,m.loadState)("comments","maxAutoCompleteResults")}})).data.ocs.data)},onNewComment(n){this.comments.unshift(n)},onDelete(n){const t=this.comments.findIndex((t=>t.props.id===n));t>-1?this.comments.splice(t,1):console.error("Could not find the deleted comment in the list",n)},resetState(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}};var H=s(56282);R()(H.Z,{insert:"head",singleton:!1}),H.Z.locals;const V=(0,O.Z)(W,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"comments",class:{"icon-loading":n.isFirstLoading}},[e("Comment",n._b({staticClass:"comments__writer",attrs:{"auto-complete":n.autoComplete,editor:!0,"ressource-id":n.ressourceId},on:{new:n.onNewComment}},"Comment",n.editorData,!1)),n._v(" "),n.isFirstLoading?n._e():[!n.hasComments&&n.done?e("EmptyContent",{attrs:{icon:"icon-comment"}},[n._v("\n\t\t\t"+n._s(n.t("comments","No comments yet, start the conversation!"))+"\n\t\t")]):n._l(n.comments,(function(t){return e("Comment",n._b({key:t.props.id,staticClass:"comments__list",attrs:{"auto-complete":n.autoComplete,message:t.props.message,"ressource-id":n.ressourceId,"user-data":n.genMentionsData(t.props.mentions)},on:{"update:message":function(e){return n.$set(t.props,"message",e)},delete:n.onDelete}},"Comment",t.props,!1))})),n._v(" "),n.loading&&!n.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):n.hasComments&&n.done?e("div",{staticClass:"comments__info"},[n._v("\n\t\t\t"+n._s(n.t("comments","No more messages"))+"\n\t\t")]):n.error?e("EmptyContent",{staticClass:"comments__error",attrs:{icon:"icon-error"},scopedSlots:n._u([{key:"desc",fn:function(){return[e("button",{attrs:{icon:"icon-history"},on:{click:n.getComments}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Retry"))+"\n\t\t\t\t")])]},proxy:!0}],null,!1,1182580137)},[n._v("\n\t\t\t"+n._s(n.error)+"\n\t\t\t")]):n._e()]],2)}),[],!1,null,"3808dce0",null).exports,X=(0,o.getLoggerBuilder)().setApp("comments").detectUser().build();d.default.mixin({data:()=>({logger:X}),methods:{t:a.translate,n:a.translatePlural}}),window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:class{constructor(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",t=arguments.length>1?arguments[1]:void 0;return d.default.mixin({data:()=>({commentsType:n})}),new(d.default.extend(V))(t)}}}),console.debug("OCA.Comments.View initialized")},38155:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var s=e(94015),o=e.n(s),a=e(23645),i=e.n(a)()(o());i.push([n.id,".comment[data-v-6ae467e9]{position:relative;padding:10px 0 15px}.comment__header[data-v-6ae467e9]{display:flex;align-items:center;min-height:44px;padding:5px 0}.comment__author[data-v-6ae467e9],.comment__actions[data-v-6ae467e9]{margin-left:10px !important}.comment__author[data-v-6ae467e9]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-6ae467e9],.comment__timestamp[data-v-6ae467e9]{margin-left:auto;color:var(--color-text-maxcontrast)}.comment__editor[data-v-6ae467e9],.comment__message[data-v-6ae467e9]{position:relative;padding-left:42px}.comment__submit[data-v-6ae467e9]{position:absolute;right:0;bottom:0;width:44px;height:44px;margin:1px;cursor:pointer;opacity:.7;border:none;background-color:transparent !important}.comment__submit[data-v-6ae467e9]:disabled{cursor:not-allowed;opacity:.5}.comment__submit[data-v-6ae467e9]:focus,.comment__submit[data-v-6ae467e9]:hover{opacity:1}.comment__message[data-v-6ae467e9]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden}.comment__message--expanded[data-v-6ae467e9]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-6ae467e9]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AA4PA,0BACC,iBAAA,CACA,mBAAA,CAEA,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CACA,aAAA,CAGD,qEAEC,2BAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,gBAAA,CACA,mCAAA,CAGD,qEAEC,iBAAA,CAEA,iBAAA,CAGD,kCACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CAEA,UAAA,CACA,cAAA,CACA,UAAA,CACA,WAAA,CACA,uCAAA,CAEA,2CACC,kBAAA,CACA,UAAA,CAGD,gFAEC,SAAA,CAIF,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA7EiB",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tposition: relative;\n\tpadding: $comment-padding 0 $comment-padding * 1.5;\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t\tpadding: math.div($comment-padding, 2) 0;\n\t}\n\n\t&__author,\n\t&__actions {\n\t\tmargin-left: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-left: auto;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__editor,\n\t&__message {\n\t\tposition: relative;\n\t\t// Avatar size, align with author name\n\t\tpadding-left: 32px + $comment-padding;\n\t}\n\n\t&__submit {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\twidth: 44px;\n\t\theight: 44px;\n\t\t// Align with input border\n\t\tmargin: 1px;\n\t\tcursor: pointer;\n\t\topacity: .7;\n\t\tborder: none;\n\t\tbackground-color: transparent !important;\n\n\t\t&:disabled {\n\t\t\tcursor: not-allowed;\n\t\t\topacity: .5;\n\t\t}\n\n\t\t&:focus,\n\t\t&:hover {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]);const r=i},56282:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var s=e(94015),o=e.n(s),a=e(23645),i=e.n(a)()(o());i.push([n.id,".comments__error[data-v-3808dce0]{margin-top:0}.comments__info[data-v-3808dce0]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AAsRC,kCACC,YAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.comments {\n\t// Do not add emptycontent top margin\n\t&__error{\n\t\tmargin-top: 0;\n\t}\n\n\t&__info {\n\t\theight: 60px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t\ttext-align: center;\n\t\tline-height: 60px;\n\t}\n}\n"],sourceRoot:""}]);const r=i},52361:()=>{},94616:()=>{}},s={};function o(n){var t=s[n];if(void 0!==t)return t.exports;var a=s[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=e,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},n=[],o.O=(t,e,s,a)=>{if(!e){var i=1/0;for(l=0;l<n.length;l++){e=n[l][0],s=n[l][1],a=n[l][2];for(var r=!0,m=0;m<e.length;m++)(!1&a||i>=a)&&Object.keys(o.O).every((n=>o.O[n](e[m])))?e.splice(m--,1):(r=!1,a<i&&(i=a));if(r){n.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[e,s,a]},o.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return o.d(t,{a:t}),t},o.d=(n,t)=>{for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),o.j=335,(()=>{var n={335:0};o.O.j=t=>0===n[t];var t=(t,e)=>{var s,a,i=e[0],r=e[1],m=e[2],c=0;if(i.some((t=>0!==n[t]))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(m)var l=m(o)}for(t&&t(e);c<i.length;c++)a=i[c],o.o(n,a)&&n[a]&&n[a][0](),n[i[c]]=0;return o.O(l)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})();var a=o.O(void 0,[820],(()=>o(83715)));a=o.O(a)})();
//# sourceMappingURL=comments-comments-app.js.map?v=e991c20744f84c7bac27