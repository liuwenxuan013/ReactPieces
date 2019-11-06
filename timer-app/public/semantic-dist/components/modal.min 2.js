/*!
 * # Semantic UI 2.2.7 - Modal
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,n,i,t){"use strict";n="undefined"!=typeof n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.modal=function(o){var a,r=e(this),s=e(n),c=e(i),l=e("body"),d=r.selector||"",u=(new Date).getTime(),m=[],f=arguments[0],g="string"==typeof f,h=[].slice.call(arguments,1),v=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,b,p,y,k,w,M,S,C,F=e.isPlainObject(o)?e.extend(!0,{},e.fn.modal.settings,o):e.extend({},e.fn.modal.settings),A=F.selector,D=F.className,H=F.namespace,T=F.error,x="."+H,z="module-"+H,O=e(this),q=e(F.context),E=O.find(A.close),j=this,P=O.data(z);C={initialize:function(){C.verbose("Initializing dimmer",q),C.create.id(),C.create.dimmer(),C.refreshModals(),C.bind.events(),F.observeChanges&&C.observeChanges(),C.instantiate()},instantiate:function(){C.verbose("Storing instance of modal"),P=C,O.data(z,P)},create:{dimmer:function(){var n={debug:F.debug,dimmerName:"modals",duration:{show:F.duration,hide:F.duration}},i=e.extend(!0,n,F.dimmerSettings);return F.inverted&&(i.variation=i.variation!==t?i.variation+" inverted":"inverted"),e.fn.dimmer===t?void C.error(T.dimmer):(C.debug("Creating dimmer with settings",i),y=q.dimmer(i),F.detachable?(C.verbose("Modal is detachable, moving content into dimmer"),y.dimmer("add content",O)):C.set.undetached(),F.blurring&&y.addClass(D.blurring),void(k=y.dimmer("get dimmer")))},id:function(){M=(Math.random().toString(16)+"000000000").substr(2,8),w="."+M,C.verbose("Creating unique id for element",M)}},destroy:function(){C.verbose("Destroying previous modal"),O.removeData(z).off(x),s.off(w),k.off(w),E.off(x),q.dimmer("destroy")},observeChanges:function(){"MutationObserver"in n&&(S=new MutationObserver(function(e){C.debug("DOM tree modified, refreshing"),C.refresh()}),S.observe(j,{childList:!0,subtree:!0}),C.debug("Setting up mutation observer",S))},refresh:function(){C.remove.scrolling(),C.cacheSizes(),C.set.screenHeight(),C.set.type(),C.set.position()},refreshModals:function(){b=O.siblings(A.modal),r=b.add(O)},attachEvents:function(n,i){var t=e(n);i=e.isFunction(C[i])?C[i]:C.toggle,t.length>0?(C.debug("Attaching modal events to element",n,i),t.off(x).on("click"+x,i)):C.error(T.notFound,n)},bind:{events:function(){C.verbose("Attaching events"),O.on("click"+x,A.close,C.event.close).on("click"+x,A.approve,C.event.approve).on("click"+x,A.deny,C.event.deny),s.on("resize"+w,C.event.resize)}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){return F.onApprove.call(j,e(this))===!1?void C.verbose("Approve callback returned false cancelling hide"):void C.hide()},deny:function(){return F.onDeny.call(j,e(this))===!1?void C.verbose("Deny callback returned false cancelling hide"):void C.hide()},close:function(){C.hide()},click:function(n){var t=e(n.target),o=t.closest(A.modal).length>0,a=e.contains(i.documentElement,n.target);!o&&a&&(C.debug("Dimmer clicked, hiding all modals"),C.is.active()&&(C.remove.clickaway(),F.allowMultiple?C.hide():C.hideAll()))},debounce:function(e,n){clearTimeout(C.timer),C.timer=setTimeout(e,n)},keyboard:function(e){var n=e.which,i=27;n==i&&(F.closable?(C.debug("Escape key pressed hiding modal"),C.hide()):C.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){y.dimmer("is active")&&v(C.refresh)}},toggle:function(){C.is.active()||C.is.animating()?C.hide():C.show()},show:function(n){n=e.isFunction(n)?n:function(){},C.refreshModals(),C.showModal(n)},hide:function(n){n=e.isFunction(n)?n:function(){},C.refreshModals(),C.hideModal(n)},showModal:function(n){n=e.isFunction(n)?n:function(){},C.is.animating()||!C.is.active()?(C.showDimmer(),C.cacheSizes(),C.set.position(),C.set.screenHeight(),C.set.type(),C.set.clickaway(),!F.allowMultiple&&C.others.active()?C.hideOthers(C.showModal):(F.onShow.call(j),F.transition&&e.fn.transition!==t&&O.transition("is supported")?(C.debug("Showing modal with css animations"),O.transition({debug:F.debug,animation:F.transition+" in",queue:F.queue,duration:F.duration,useFailSafe:!0,onComplete:function(){F.onVisible.apply(j),F.keyboardShortcuts&&C.add.keyboardShortcuts(),C.save.focus(),C.set.active(),F.autofocus&&C.set.autofocus(),n()}})):C.error(T.noTransition))):C.debug("Modal is already visible")},hideModal:function(n,i){return n=e.isFunction(n)?n:function(){},C.debug("Hiding modal"),F.onHide.call(j,e(this))===!1?void C.verbose("Hide callback returned false cancelling hide"):void((C.is.animating()||C.is.active())&&(F.transition&&e.fn.transition!==t&&O.transition("is supported")?(C.remove.active(),O.transition({debug:F.debug,animation:F.transition+" out",queue:F.queue,duration:F.duration,useFailSafe:!0,onStart:function(){C.others.active()||i||C.hideDimmer(),F.keyboardShortcuts&&C.remove.keyboardShortcuts()},onComplete:function(){F.onHidden.call(j),C.restore.focus(),n()}})):C.error(T.noTransition)))},showDimmer:function(){y.dimmer("is animating")||!y.dimmer("is active")?(C.debug("Showing dimmer"),y.dimmer("show")):C.debug("Dimmer already visible")},hideDimmer:function(){return y.dimmer("is animating")||y.dimmer("is active")?void y.dimmer("hide",function(){C.remove.clickaway(),C.remove.screenHeight()}):void C.debug("Dimmer is not visible cannot hide")},hideAll:function(n){var i=r.filter("."+D.active+", ."+D.animating);n=e.isFunction(n)?n:function(){},i.length>0&&(C.debug("Hiding all visible modals"),C.hideDimmer(),i.modal("hide modal",n))},hideOthers:function(n){var i=b.filter("."+D.active+", ."+D.animating);n=e.isFunction(n)?n:function(){},i.length>0&&(C.debug("Hiding other modals",b),i.modal("hide modal",n,!0))},others:{active:function(){return b.filter("."+D.active).length>0},animating:function(){return b.filter("."+D.animating).length>0}},add:{keyboardShortcuts:function(){C.verbose("Adding keyboard shortcuts"),c.on("keyup"+x,C.event.keyboard)}},save:{focus:function(){p=e(i.activeElement).blur()}},restore:{focus:function(){p&&p.length>0&&p.focus()}},remove:{active:function(){O.removeClass(D.active)},clickaway:function(){F.closable&&k.off("click"+w)},bodyStyle:function(){""===l.attr("style")&&(C.verbose("Removing style attribute"),l.removeAttr("style"))},screenHeight:function(){C.debug("Removing page height"),l.css("height","")},keyboardShortcuts:function(){C.verbose("Removing keyboard shortcuts"),c.off("keyup"+x)},scrolling:function(){y.removeClass(D.scrolling),O.removeClass(D.scrolling)}},cacheSizes:function(){var o=O.outerHeight();C.cache!==t&&0===o||(C.cache={pageHeight:e(i).outerHeight(),height:o+F.offset,contextHeight:"body"==F.context?e(n).height():y.height()}),C.debug("Caching modal and container sizes",C.cache)},can:{fit:function(){return C.cache.height+2*F.padding<C.cache.contextHeight}},is:{active:function(){return O.hasClass(D.active)},animating:function(){return O.transition("is supported")?O.transition("is animating"):O.is(":visible")},scrolling:function(){return y.hasClass(D.scrolling)},modernBrowser:function(){return!(n.ActiveXObject||"ActiveXObject"in n)}},set:{autofocus:function(){var e=O.find("[tabindex], :input").filter(":visible"),n=e.filter("[autofocus]"),i=n.length>0?n.first():e.first();i.length>0&&i.focus()},clickaway:function(){F.closable&&k.on("click"+w,C.event.click)},screenHeight:function(){C.can.fit()?l.css("height",""):(C.debug("Modal is taller than page content, resizing page height"),l.css("height",C.cache.height+2*F.padding))},active:function(){O.addClass(D.active)},scrolling:function(){y.addClass(D.scrolling),O.addClass(D.scrolling)},type:function(){C.can.fit()?(C.verbose("Modal fits on screen"),C.others.active()||C.others.animating()||C.remove.scrolling()):(C.verbose("Modal cannot fit on screen setting to scrolling"),C.set.scrolling())},position:function(){C.verbose("Centering modal on page",C.cache),C.can.fit()?O.css({top:"",marginTop:-(C.cache.height/2)}):O.css({marginTop:"",top:c.scrollTop()})},undetached:function(){y.addClass(D.undetached)}},setting:function(n,i){if(C.debug("Changing setting",n,i),e.isPlainObject(n))e.extend(!0,F,n);else{if(i===t)return F[n];e.isPlainObject(F[n])?e.extend(!0,F[n],i):F[n]=i}},internal:function(n,i){if(e.isPlainObject(n))e.extend(!0,C,n);else{if(i===t)return C[n];C[n]=i}},debug:function(){!F.silent&&F.debug&&(F.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,F.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!F.silent&&F.verbose&&F.debug&&(F.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,F.name+":"),C.verbose.apply(console,arguments)))},error:function(){F.silent||(C.error=Function.prototype.bind.call(console.error,console,F.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var n,i,t;F.performance&&(n=(new Date).getTime(),t=u||n,i=n-t,u=n,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:j,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var n=F.name+":",i=0;u=!1,clearTimeout(C.performance.timer),e.each(m,function(e,n){i+=n["Execution Time"]}),n+=" "+i+"ms",d&&(n+=" '"+d+"'"),(console.group!==t||console.table!==t)&&m.length>0&&(console.groupCollapsed(n),console.table?console.table(m):e.each(m,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(n,i,o){var r,s,c,l=P;return i=i||h,o=j||o,"string"==typeof n&&l!==t&&(n=n.split(/[\. ]/),r=n.length-1,e.each(n,function(i,o){var a=i!=r?o+n[i+1].charAt(0).toUpperCase()+n[i+1].slice(1):n;if(e.isPlainObject(l[a])&&i!=r)l=l[a];else{if(l[a]!==t)return s=l[a],!1;if(!e.isPlainObject(l[o])||i==r)return l[o]!==t&&(s=l[o],!1);l=l[o]}})),e.isFunction(s)?c=s.apply(o,i):s!==t&&(c=s),e.isArray(a)?a.push(c):a!==t?a=[a,c]:c!==t&&(a=c),s}},g?(P===t&&C.initialize(),C.invoke(f)):(P!==t&&P.invoke("destroy"),C.initialize())}),a!==t?a:this},e.fn.modal.settings={name:"Modal",namespace:"modal",silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,offset:0,transition:"scale",padding:50,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",scrolling:"scrolling",undetached:"undetached"}}}(jQuery,window,document);
