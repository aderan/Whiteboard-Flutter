(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"2YZa":function(e,t,n){"use strict";n.r(t);n("pNMO"),n("4Brf"),n("tjZM"),n("3I1R"),n("7+kd"),n("0oug"),n("KhsS"),n("gOCb"),n("a57n"),n("GXvd"),n("I1Gw"),n("gXIK"),n("lEou"),n("gbiT"),n("ma9I"),n("qHT+"),n("piMb"),n("yyme"),n("TeQF"),n("fbCW"),n("x0AG"),n("BIHw"),n("XbcX"),n("QWBl"),n("pjDv"),n("yq1k"),n("yXV3"),n("4mDm"),n("uqXc"),n("2B1R"),n("Xe3L"),n("E9XD"),n("9N29"),n("Junv"),n("+2oP"),n("Rfxz"),n("ToJy"),n("94Xl"),n("pDQq"),n("QGkA"),n("c9m3"),n("wZ/5"),n("gtqK"),n("rOQg"),n("9LPj"),n("7+zs"),n("tW5y"),n("DEfu"),n("Tskq"),n("Uydy"),n("eajv"),n("n/mU"),n("PqOI"),n("QNnp"),n("/5zm"),n("CsgD"),n("9mRW"),n("QFcT"),n("a5NK"),n("yiG3"),n("kNcU"),n("KvGi"),n("AmFO"),n("eJiR"),n("I9xj"),n("tl/u"),n("qePV"),n("NbN+"),n("i6QF"),n("WDsR"),n("r/Vq"),n("5uH8"),n("w1rZ"),n("JevA"),n("zKZe"),n("Eqjn"),n("5xtp"),n("T63A"),n("3KgV"),n("wfmh"),n("5DmW"),n("27RR"),n("cDke"),n("NBAS"),n("yQYn"),n("4h0Y"),n("5D5o"),n("tkto"),n("v5b1"),n("W/eh"),n("zuhW"),n("r5Og"),n("ExoC"),n("07d7"),n("B6y2"),n("rNhl"),n("4l63"),n("5s+n"),n("p532"),n("pv2x"),n("SuFq"),n("PzqY"),n("rBZX"),n("XUE8"),n("nkod"),n("f3jH"),n("x2An"),n("25bX"),n("G/JM"),n("1t3B"),n("ftMj"),n("i5pp"),n("TWNs"),n("rB9j"),n("U3f4"),n("JfAA"),n("YGK4"),n("9bJ7"),n("inlA"),n("9tb/"),n("JTJg"),n("PKPk"),n("Rm1S"),n("hDyC"),n("TZCg"),n("2A+d"),n("OM9Z"),n("UxlC"),n("hByQ"),n("EnZy"),n("LKBx"),n("SYor"),n("HiXI"),n("7ueG"),n("z8NH"),n("SpvK"),n("/Yfv"),n("iwkZ"),n("FDzp"),n("XMab"),n("ilnZ"),n("hMMk"),n("+ywr"),n("moxL"),n("qXVe"),n("c162"),n("waxf"),n("0TkE"),n("Onu3"),n("1dYe"),n("IL/d"),n("gvgV"),n("6R/c"),n("YL0P"),n("X5Zq"),n("MoCz"),n("P8wP"),n("7JcK"),n("ypFw"),n("JaFt"),n("zSZm"),n("KVSy"),n("ZJ55"),n("IZzc"),n("s5qe"),n("cvf0"),n("ENF9"),n("H+LF"),n("FZtP"),n("3bBZ"),n("Ew+T"),n("n5b4"),n("Kz25"),n("vxnP"),n("mGGf"),n("ls82"),n("bZMm");var a,r=n("q1tI"),o=n.n(r),i=n("i8i4"),s=(n("HrR1"),n("dSAS")),c=n.n(s),u=n("3e9Z"),l=n("AitN");function d(e){if(e)return{centerX:e.centerX,centerY:e.centerY,width:e.width,height:e.height,maxContentMode:f(e.maxContentMode),minContentMode:f(e.minContentMode)}}function f(e){if(e){var t=void 0===e.scale?1:e.scale,n=void 0===e.space?0:e.space;a.Scale;switch("string"==typeof e.mode?parseInt(a[e.mode]):e.mode){case a.Scale:return Object(l.contentModeScale)(t);case a.AspectFill:return Object(l.contentModeAspectFill)();case a.AspectFillScale:return Object(l.contentModeAspectFillScale)(t);case a.AspectFit:return Object(l.contentModeAspectFit)();case a.AspectFitScale:return Object(l.contentModeAspectFitScale)(t);case a.AspectFitSpace:return Object(l.contentModeAspectFitSpace)(n);default:return}}}!function(e){e[e.Scale=0]="Scale",e[e.AspectFit=1]="AspectFit",e[e.AspectFitScale=2]="AspectFitScale",e[e.AspectFitSpace=3]="AspectFitSpace",e[e.AspectFill=4]="AspectFill",e[e.AspectFillScale=5]="AspectFillScale"}(a||(a={}));var m=n("wOnQ"),p=n.n(m);function g(e){return void 0===e.roomUUID}function y(e){var t;t={message:e.message,error:e.error},console.log(JSON.stringify(t)),c.a.call("sdk.throwError",t)}function v(e){var t=e.data;"pptImageLoadError"===t.name&&c.a.call("sdk.postMessage",JSON.stringify(t)),"iframe"===t.name&&c.a.call("sdk.postMessage",JSON.stringify(t)),t.shapeId&&t.mediaType&&t.action&&c.a.call("sdk.postMessage",JSON.stringify(t)),t.customMessage&&c.a.call("sdk.postMessage",JSON.stringify(t))}function h(e,t){var n=function(t,n){a(t,e.scenePreview.bind(e),n)},a=function(e,t,n){var a=document.createElement("div");a.setAttribute("class","shadow");var r=document.getElementById("whiteboard-container");if(r){var o=window.getComputedStyle(r).backgroundColor;a.style.background=o}document.body.appendChild(a),t(e,a,a.clientWidth,a.clientHeight),p()(a,{useCORS:!0,onclone:function(e){Array.from(e.getElementsByTagName("svg")).forEach((function(e){e.setAttribute("width","".concat(e.clientWidth)),e.setAttribute("height","".concat(e.clientHeight))}))}}).then((function(e){window.canvas=e;var t=e.toDataURL();document.body.removeChild(a),n(t)}))};c.a.register("displayer",{postMessage:function(e){var n={name:"parentWindow",payload:e},a=document.getElementsByTagName("iframe");if(a.length>0&&a[0].contentWindow){var r=a[0];t("postmessage",n),r.contentWindow.postMessage(n,"*")}else 0==a.length?t("postmessage","no frames exist"):t("postmessage","no conentWindow")},scaleIframeToFit:function(){var t=e.getInvisiblePlugin("IframeBridge");t&&t.scaleIframeToFit()},setDisableCameraTransform:function(t){e.disableCameraTransform=t},getDisableCameraTransform:function(){return e.disableCameraTransform},setCameraBound:function(n){t("setCameraBound nativeBound",n);var a=d(n);t("setCameraBound bound",a),e.setCameraBound(a)},getMemberState:function(t){return JSON.stringify(e.memberState(t))},scenePathType:function(t){return e.scenePathType(t)},entireScenes:function(){return e.entireScenes()},moveCamera:function(n){t("moveCamera: ",n),e.moveCamera(n)},moveCameraToContain:function(n){t("moveCameraToContain: ",n),e.moveCameraToContain(n)},refreshViewSize:function(){t("refreshViewSize"),e.refreshViewSize()},scalePptToFit:function(n){t("scalePptToFit",n),e.scalePptToFit(n)},convertToPointInWorld:function(n,a){return t("convertToPointInWorld",n,a),e.convertToPointInWorld({x:n,y:a})},setBackgroundColor:function(e,n,a,r){var o=document.getElementById("whiteboard-container");t("setBackgroundColor native",e,n,a,r);var i="rgb(".concat(e,", ").concat(n,", ").concat(a,")");t("setBackgroundColor color",i),o.style.background=i},addHighFrequencyEventListener:function(n,a){t("addHighFrequencyEventListener",n,a),e.addMagixEventListener(n,(function(t){var n=e.uuid||e.roomUUID,a=t.map((function(e){return{uuid:n,eventName:e.event,payload:e.payload,scope:e.scope,authorId:e.authorId}}));g(e)?c.a.call("room.fireHighFrequencyEvent",JSON.stringify(a)):c.a.call("player.fireHighFrequencyEvent",JSON.stringify(a))}),a)},addMagixEventListener:function(n){t("addMagixEventListener",n),e.addMagixEventListener(n,(function(n){t("fireMagixEvent",n);var a={uuid:e.uuid||e.roomUUID,eventName:n.event,payload:n.payload,scope:n.scope,authorId:n.authorId};g(e)?c.a.call("room.fireMagixEvent",JSON.stringify(a)):c.a.call("player.fireMagixEvent",JSON.stringify(a))}))},removeMagixEventListener:function(n){t("removeMagixEventListener",n),e.removeMagixEventListener(n)}}),c.a.registerAsyn("displayerAsync",{scenePreview:n,sceneSnapshot:function(t,n){a(t,e.fillSceneSnapshot.bind(e),n)}}),window.html2canvas=p.a,window.pagePreview=n}var b=n("nXzl"),S=n.n(b);function P(e,t,n,a){window.player=e,window.combinePlayer=t,h(e,a),t&&t.setOnStatusChange((function(e,t){switch(n.time=0,e){case b.PublicCombinedStatus.Pause:c.a.call("player.onPhaseChanged",l.PlayerPhase.Pause);break;case b.PublicCombinedStatus.PauseBuffering:case b.PublicCombinedStatus.PauseSeeking:case b.PublicCombinedStatus.PlayingBuffering:case b.PublicCombinedStatus.PlayingSeeking:c.a.call("player.onPhaseChanged",l.PlayerPhase.Buffering);break;case b.PublicCombinedStatus.Ended:c.a.call("player.onPhaseChanged",l.PlayerPhase.Ended);break;case b.PublicCombinedStatus.Playing:c.a.call("player.onPhaseChanged",l.PlayerPhase.Playing);break;case b.PublicCombinedStatus.Disabled:c.a.call("player.onStoppedWithError",JSON.stringify({error:t}))}})),c.a.registerAsyn("player",{play:function(){a("play"),t?t.play():e.play()},pause:function(){a("pause"),t?t.pause():e.pause()},stop:function(){try{a("stop"),e.stop()}catch(e){console.log("stop:",e.message)}},seekToScheduleTime:function(n){a("seekToScheduleTime",n),t?t.seek(n):e.seekToScheduleTime(n)},setObserverMode:function(t){a("setObserverMode",t),e.setObserverMode(t)},setPlaybackSpeed:function(n){a("playbackSpeed",n),t?t.playbackRate=n:e.playbackSpeed=n}}),c.a.register("player.state",{roomUUID:function(){return e.roomUUID},phase:function(){return a("phase",e.phase),e.phase},playerState:function(){try{return a("playerState",e.state),e.state}catch(e){return{}}},isPlayable:function(){return e.isPlayable},playbackSpeed:function(){return t?t.playbackRate:(a("playbackSpeed",e.playbackSpeed),e.playbackSpeed)},timeInfo:function(){var t={scheduleTime:e.scheduleTime,timeDuration:e.timeDuration,framesCount:e.framesCount,beginTimestamp:e.beginTimestamp};return a("timeInfo",t),t}})}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"startCallback",void 0),k(this,"stopCallback",void 0),k(this,"startAudioMixing",(function(e,n,a,r,o){return t.startCallback=o,c.a.call("rtc.startAudioMixing",{filePath:e,loopback:n,replace:a,cycle:r})})),k(this,"stopAudioMixing",(function(e){return t.stopCallback=e,c.a.call("rtc.stopAudioMixing")})),c.a.register("rtc",{callback:function(n,a){switch(n){case e.kStopAudioMixing:t.stopCallback&&t.stopCallback(n,a);break;case e.kStartAudioMixing:t.startCallback&&t.startCallback(n,a);break;default:t.startCallback?t.startCallback(n,a):t.stopCallback&&t.stopCallback(n,a)}}})}var t,n,a;return t=e,(n=[{key:"pauseAudioMixing",value:function(){return c.a.call("rtc.pauseAudioMixing")}},{key:"resumeAudioMixing",value:function(){return c.a.call("rtc.resumeAudioMixing")}},{key:"setAudioMixingPosition",value:function(e){return c.a.call("rtc.setAudioMixingPosition",e)}}])&&w(t.prototype,n),a&&w(t,a),e}();k(C,"kStartAudioMixing",710),k(C,"kStopAudioMixing",713),k(C,"kAudioError",714);var O=n("xU6Y"),I=n("R+TL"),M=n("pFQk"),E=n("Uw/+"),F=n("WURW"),T=n.n(F);function A(e,t,n,a,r,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}var x=["https://scdncloudharestoragev3.herewhite.com","https://expresscloudharestoragev2.herewhite.com"],N=["https://cdncloudroomv2.herewhite.com","https://cdnroom.netless.pro"],R=window.fetch;var W=function(){window.fetch=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J(t)){e.next=2;break}return e.abrupt("return",R.call(this,t,n));case 2:return e.abrupt("return",T()([R.call(this,t,n),R.call(this,j(t),n)]));case 3:case"end":return e.stop()}}),e,this)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){A(o,a,r,i,s,"next",e)}function s(e){A(o,a,r,i,s,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()};function j(e){var t,n=[],a="string"==typeof e?e:e.url;if(-1!==x.findIndex((function(e){return-1!==a.indexOf(e)})))n=x;else{if(-1===N.findIndex((function(e){return-1!==a.indexOf(e)})))return e;n=N}if("string"==typeof e){var r=n.findIndex((function(t){return-1!==e.indexOf(t)})),o=n.length-1-r;t=e.replace(n[r],n[o])}else{var i=n.findIndex((function(t){return-1!==e.url.indexOf(t)})),s=n.length-1-i;t=new Request(e.url.replace(n[i],n[s]),e)}return t}function J(e){var t=x.concat(N);return"string"==typeof e?t.some((function(t){return-1!==e.indexOf(t)})):t.some((function(t){return-1!==e.url.indexOf(t)}))}var B=n("6Dnk");n("Q8kY");function D(e){v({data:{error:e,message:e.message,src:this.currentSrc,customMessage:!0,name:"imageLoadError"}})}function L(e,t){var n={name:"parentWindow",payload:e},a=document.getElementsByTagName("iframe");if(a.length>0&&a[0].contentWindow){var r=a[0];null==t||t("postmessage",n),r.contentWindow.postMessage(n,"*")}else 0==a.length?null==t||t("postmessage","no frames exist"):null==t||t("postmessage","no conentWindow")}function U(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,o=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){i=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(i)throw r}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=!1,G={time:0},V=void 0,K=void 0,Y=void 0,Q=new C;function $(){var e=void 0,t=void 0;function n(e){if(X){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];console.log(JSON.stringify({funName:e,params:Z({},n)})),c.a.call("sdk.logger",{funName:e,params:Z({},n)})}}function a(){e&&e.bindHtmlElement(null),t&&t.bindHtmlElement(null)}function i(e){var t,a=e.enableInterrupterAPI?function(e){var t=c.a.call("sdk.urlInterrupter",e);return t.length>0?t:e}:void 0,r=e.log,o=e.__nativeTags,i=e.__platform,s=(e.initializeOriginsStates,e.userCursor),d=(e.enableInterrupterAPI,e.routeBackup),f=e.enableRtcIntercept,m=e.enableImgErrorCallback,p=e.enableIFramePlugin,g=z(e,["log","__nativeTags","__platform","initializeOriginsStates","userCursor","enableInterrupterAPI","routeBackup","enableRtcIntercept","enableImgErrorCallback","enableIFramePlugin"]);X=!!r,V=e,n("newWhiteSdk",e),i&&(window.__platform=i),m&&((t=document.createElement).toString().includes('addEventListener("error"')||(console.log("interrept document.createElement success"),document.createElement=function(e,n){var a=t.call(this,e,n);return"IMG"===a.nodeName&&a.addEventListener("error",D,{once:!0}),a})),Y=s?new B.CursorTool:void 0,o&&(window.__nativeTags=Z(Z({},window.__nativeTags),o)),d&&W();var y=g.pptParams||{};f&&(y.rtcClient=Q);var v=Object(l.createPlugins)({video:O.videoPlugin,audio:I.audioPlugin,video2:M.videoPlugin2,audio2:E.audioPlugin2});try{K=new l.WhiteWebSdk(Z(Z({},g),{},{invisiblePlugins:p?[u.b]:void 0,wrappedComponents:p?[u.d]:void 0,plugins:v,urlInterrupter:a,onWhiteSetupFailed:function(e){n("onWhiteSetupFailed",e),c.a.call("sdk.setupFail",{message:e.message,jsStack:e.stack})},pptParams:y})),window.sdk=K}catch(e){n("onWhiteSetupFailed",e),c.a.call("sdk.setupFail",{message:e.message,jsStack:e.stack})}}function s(t,r){if(K){a(),n("joinRoom",t);var o=t.timeout,i=void 0===o?45e3:o,s=t.cameraBound,u=z(t,["timeout","cameraBound"]);K.joinRoom(Z(Z({},u),{},{cursorAdapter:Y,disableAutoResize:!0,cameraBound:d(s)}),{onPhaseChanged:function(t){return function(t,n){c.a.call("room.firePhaseChanged",t),setTimeout((function(){e&&e.phase===l.RoomPhase.Reconnecting&&e.disconnect().then((function(){c.a.call("room.fireDisconnectWithError","Reconnect time exceeds ".concat(n," milsceonds, sdk call disconnect automatically"))}))}),n)}(t,i)},onRoomStateChanged:g,onDisconnectWithError:b,onKickedWithReason:w,onCatchErrorWhenAppendFrame:T,onCatchErrorWhenRender:A,onCanRedoStepsUpdate:p,onCanUndoStepsUpdate:m,onPPTLoadProgress:x,onPPTMediaPlay:N,onPPTMediaPause:R}).then((function(t){return a(),e=t,t.bindHtmlElement(j.current),function(e,t){window.room=e,h(e,t),c.a.register("ppt",{nextStep:function(){t("nextStep"),e.pptNextStep()},previousStep:function(){t("previousStep"),e.pptPreviousStep()}}),c.a.register("room.sync",{syncBlockTimstamp:function(t){e.syncBlockTimstamp(t)},disableSerialization:function(t){e.disableSerialization=t},copy:function(){e.copy()},paste:function(){e.paste()},duplicate:function(){e.duplicate()},delete:function(){e.delete()},disableEraseImage:function(t){e.disableEraseImage=t}}),c.a.registerAsyn("room",{redo:function(t){t(e.redo())},undo:function(t){t(e.undo())},canRedoSteps:function(t){t(e.canRedoSteps)},canUndoSteps:function(t){t(e.canUndoSteps)},setGlobalState:function(n){t("setGlobalState",n),e.setGlobalState(n)},setScenePath:function(n,a){try{t("setScenePath",n),e.setScenePath(n),a(JSON.stringify({}))}catch(e){return a(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},setMemberState:function(n){t("setMemberState",n),e.setMemberState(n)},setViewMode:function(n){var a=l.ViewMode[n];void 0===a&&(a=l.ViewMode.Freedom),t("setViewMode",{viewMode:n,mode:a}),e.setViewMode(a)},setWritable:function(t,n){e.setWritable(t).then((function(){n(JSON.stringify({isWritable:e.isWritable,observerId:e.observerId}))})).catch((function(e){n(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))},getMemberState:function(n){return t("getMemberState",e.state.memberState),n(JSON.stringify(e.state.memberState))},getGlobalState:function(n){return t("getGlobalState",e.state.globalState),n(JSON.stringify(e.state.globalState))},getSceneState:function(n){return t("getSceneState",e.state.sceneState),n(JSON.stringify(e.state.sceneState))},getRoomMembers:function(n){return t("getRoomMembers",e.state.roomMembers),n(JSON.stringify(e.state.roomMembers))},getPptImages:function(t){var n=e.state.sceneState.scenes.map((function(e){return e.ppt?e.ppt.src:""}));return t(JSON.stringify(n))},setSceneIndex:function(n,a){t("setSceneIndex",n);try{e.setSceneIndex(n),a(JSON.stringify({}))}catch(e){a(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},getScenes:function(n){return t("getScenes",e.state.sceneState.scenes),n(JSON.stringify(e.state.sceneState.scenes))},getZoomScale:function(n){return t("getZoomScale",e.state.cameraState.scale),n(JSON.stringify(e.state.zoomScale))},getBroadcastState:function(n){return t("getBroadcastState",e.state.broadcastState),n(JSON.stringify(e.state.broadcastState))},getRoomPhase:function(n){return t("getRoomPhase",JSON.stringify(e.phase)),n(e.phase)},disconnect:function(t){e.disconnect().then((function(){t()}))},zoomChange:function(n){t("zoomChange"),e.moveCamera({scale:n})},disableCameraTransform:function(n){t("disableCameraTransform",n),e.disableCameraTransform=n},disableDeviceInputs:function(n){t("disableDeviceInputs",n),e.disableDeviceInputs=n},disableOperations:function(n){t("disableOperations",n),e.disableCameraTransform=n,e.disableDeviceInputs=n},putScenes:function(n,a,r,o){t("putScenes",a),e.putScenes(n,a,r),o(JSON.stringify(e.state.sceneState))},removeScenes:function(n){t("removeScenes",n),e.removeScenes(n)},moveScene:function(n,a){t("moveScene",n,a),e.moveScene(n,a)},cleanScene:function(n){t("cleanCurrentScene: ",n),e.cleanCurrentScene(n)},insertImage:function(n){t("insertImage",n),e.insertImage(n)},insertVideo:function(e){t("insertVideo",e)},completeImageUpload:function(n,a){t("completeImageUpload",n,a),e.completeImageUpload(n,a)},dispatchMagixEvent:function(n){t("dispatchMagixEvent",n),e.dispatchMagixEvent(n.eventName,n.payload)},setTimeDelay:function(n){t("setTimeDelay",n),e.timeDelay=n}}),c.a.register("room.state",{getRoomState:function(){return e.state},getTimeDelay:function(){return e.timeDelay},getPhase:function(){return e.phase},isWritable:function(){return e.isWritable},debugInfo:function(){try{var t=e.screen,n=t.camera,a=t.visionRectangle,r=t.adaptedRectangle,o=t.divElement;return{camera:n,visionRectangle:a,adaptedRectangle:r,divWidth:o.clientWidth,divHeight:o.clientHeight}}catch(e){return{error:e.message}}}})}(t,n),Y&&Y.setRoom(e),r(JSON.stringify({state:t.state,observerId:t.observerId,isWritable:t.isWritable}))})).catch((function(e){return r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}else r(JSON.stringify({__error:{message:"sdk init failed"}}))}function f(e,r){if(K){var o,i=e.step,s=void 0===i?500:i,u=e.cameraBound,f=e.mediaURL,m=z(e,["step","cameraBound","mediaURL"]);a(),n("replayRoom",e),K.replayRoom(Z(Z({},m),{},{cursorAdapter:Y,disableAutoResize:!0,cameraBound:d(u)}),{onPhaseChanged:(o=!!f,function(e){var t=function(e){var t;G.time=0,n("onPhaseChanged:",e),c.a.call("player.onPhaseChanged",e),(null===(t=V)||void 0===t?void 0:t.enableIFramePlugin)&&L({eventName:"onPhaseChanged",params:[e]},n)};o&&e!==l.PlayerPhase.WaitingFirstFrame&&e!==l.PlayerPhase.Stopped||t(e)}),onLoadFirstFrame:k,onPlayerStateChanged:C,onStoppedWithError:F,onProgressTimeChanged:function(e){return function(e,a){var r;(function(e,n,a){n>=G.time?(e(),G.time=Math.ceil(n/a)*a):t&&n+a>t.timeDuration&&(e(),G.time=n)})((function(){c.a.call("player.onScheduleTimeChanged",e)}),e,a),(null===(r=V)||void 0===r?void 0:r.enableIFramePlugin)&&L({eventName:"onProgressTimeChanged",params:[e]},n)}(e,s)},onCatchErrorWhenAppendFrame:T,onCatchErrorWhenRender:A,onPPTLoadProgress:x,onPPTMediaPlay:N,onPPTMediaPause:R}).then((function(e){if(a(),t=e,f){var o=document.createElement("video");o.setAttribute("x5-video-player-type","h5-page"),o.setAttribute("playsInline",""),o.setAttribute("style","display:none;"),o.setAttribute("class","video-js"),document.body.appendChild(o),P(e,new S.a(t,{url:f,videoDOM:o}).create(),G,n)}else P(e,void 0,G,n);var i;(e.bindHtmlElement(j.current),Y)&&(null===(i=Y)||void 0===i||i.setPlayer(t));var s=e.scheduleTime,c=e.timeDuration,u=e.framesCount,l=e.beginTimestamp;return r(JSON.stringify({timeInfo:{scheduleTime:s,timeDuration:c,framesCount:u,beginTimestamp:l}}))})).catch((function(e){return r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}else r(JSON.stringify({__error:{message:"sdk init failed"}}))}window.testRoom=function(){X=!0,i(V={log:!0,userCursor:!0,__platform:"ios",appIdentifier:""}),s({uuid:"",roomToken:"",userPayload:{avatar:"https://white-pan.oss-cn-shanghai.aliyuncs.com/40/image/mask.jpg"}},(function(){}))},window.testReplay=function(){X=!0,i(V={log:!0,userCursor:!0,__platform:"ios",appIdentifier:""}),f({room:"",roomToken:""},(function(){}))};function m(e){c.a.call("room.fireCanUndoStepsUpdate",e)}function p(e){c.a.call("room.fireCanRedoStepsUpdate",e)}function g(e){c.a.call("room.fireRoomStateChanged",JSON.stringify(e))}function b(e){c.a.call("room.fireDisconnectWithError",e.message)}function w(e){c.a.call("room.fireKickedWithReason",e)}function k(){var e;n("onLoadFirstFrame"),c.a.call("player.onPlayerStateChanged",JSON.stringify(t.state)),c.a.call("player.onLoadFirstFrame"),(null===(e=V)||void 0===e?void 0:e.enableIFramePlugin)&&L({eventName:"onLoadFirstFrame",params:[]},n)}function C(e){var t;c.a.call("player.onPlayerStateChanged",JSON.stringify(e)),(null===(t=V)||void 0===t?void 0:t.enableIFramePlugin)&&L({eventName:"onPlayerStateChanged",params:[e]},n)}function F(e){var t;c.a.call("player.onStoppedWithError",JSON.stringify({error:e.message,jsStack:e.stack})),(null===(t=V)||void 0===t?void 0:t.enableIFramePlugin)&&L({eventName:"onStoppedWithError",params:[e]},n)}function T(t,a){n("onCatchErrorWhenAppendFrame",[t,a.message]),e&&c.a.call("room.fireCatchErrorWhenAppendFrame",{userId:t,error:a.message})}function A(t){e||c.a.call("player.onCatchErrorWhenRender",{error:t.message})}function x(e,t){}function N(e,t){n("onPPTMediaPlay",e,t),c.a.call("sdk.onPPTMediaPlay",{shapeId:e,type:t})}function R(e,t){n("onPPTMediaPause",e,t),c.a.call("sdk.onPPTMediaPause",{shapeId:e,type:t})}Object(r.useEffect)((function(){return function(){window.removeEventListener("error",y),window.removeEventListener("message",v)}}),[]),Object(l.setAsyncModuleLoadMode)(l.AsyncModuleLoadMode.StoreAsBase64),window.addEventListener("error",y),window.addEventListener("message",v),c.a.registerAsyn("sdk",{newWhiteSdk:i,joinRoom:s,replayRoom:f,isPlayable:function(e,t){if(K){e.step,e.cameraBound;var n=z(e,["step","cameraBound"]);K.isPlayable(Z({},n)).then((function(e){t(e)}))}else t(!1)},asyncInsertFontFaces:function(e,t){n("aysncInsertFontFaces",e);var a,r=U(e);try{var o=function(){var e=a.value,r=e["font-weight"],o=e["font-style"],i=e["unicode-range"],s=JSON.parse(JSON.stringify({weight:r,style:o,unicodeRange:i})),c=new FontFace(e["font-family"],e.src,s);c.load().then((function(a){n("aysncInsertFontFaces load font success",JSON.stringify(e)),document.fonts.add(c),t({success:!0,fontFace:e})})).catch((function(a){n("aysncInsertFontFaces load font failed",JSON.stringify(e)),t({success:!1,fontFace:e,error:a})}))};for(r.s();!(a=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}},updateNativeFontFaceCSS:function(e){n("insertFontFaces",e);var t=document.getElementById("whiteboard-native-font-face");t||((t=document.createElement("style")).id="whiteboard-native-font-face",document.body.appendChild(t));var a=e.map((function(e){var t=Object.keys(e).reduce((function(t,n){return e[n].includes(" ")?"".concat(t,"\n").concat(n,': "').concat(e[n],'";'):"".concat(t,"\n").concat(n,": ").concat(e[n],";")}),"");return"@font-face {\n                ".concat(t,"\n            }")}));t.innerHTML=a.join("\n")},updateNativeTextareaFont:function(e){n("updateTextFont",e);var t=document.getElementById("whiteboard-native-css");t||((t=document.createElement("style")).id="whiteboard-native-css",document.body.appendChild(t));var a=e.map((function(e){return'"'.concat(e,'"')})).join(",");t.innerHTML=".netless-whiteboard textarea {\n            font-family: ".concat(a,"; \n        }")}});var j=Object(r.useRef)(null);return o.a.createElement("div",{id:"whiteboard-container",ref:j,style:{position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:1}})}i.render(r.createElement($,null),document.getElementById("root"))},3:function(e,t){},4:function(e,t){},Q8kY:function(e,t,n){}},[["2YZa",1,3,2]]]);