/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{378:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(18),o=n(77),c=n(67),l=n(83);class f{constructor(e,t){this._delegate=e,this.firebase=t,Object(c._addComponent)(e,new o.a("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Object(c.deleteApp)(this._delegate))))}_getService(e,t=c._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=c._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(component){Object(c._addComponent)(this._delegate,component)}_addOrOverwriteComponent(component){Object(c._addOrOverwriteComponent)(this._delegate,component)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const d={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},m=new r.b("app-compat","Firebase",d);const w=function e(){const t=function(e){const t={},n={__esModule:!0,initializeApp:function(o,l={}){const f=c.initializeApp(o,l);if(Object(r.m)(t,f.name))return t[f.name];const d=new e(f,n);return t[f.name]=d,d},app:o,registerVersion:c.registerVersion,setLogLevel:c.setLogLevel,onLog:c.onLog,apps:null,SDK_VERSION:c.SDK_VERSION,INTERNAL:{registerComponent:function(component){const t=component.name,l=t.replace("-compat","");if(c._registerComponent(component)&&"PUBLIC"===component.type){const c=(e=o())=>{if("function"!=typeof e[l])throw m.create("invalid-app-argument",{appName:t});return e[l]()};void 0!==component.serviceProps&&Object(r.r)(c,component.serviceProps),n[l]=c,e.prototype[l]=function(...e){return this._getService.bind(this,t).apply(this,component.multipleInstances?e:[])}}return"PUBLIC"===component.type?n[l]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:c}};function o(e){if(e=e||c._DEFAULT_ENTRY_NAME,!Object(r.m)(t,e))throw m.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),o.App=e,n}(f);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(r.r)(t,e)},createSubscribe:r.o,ErrorFactory:r.b,deepExtend:r.r}),t}(),h=new l.b("@firebase/app-compat");if(Object(r.x)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=w;var y;Object(c.registerVersion)("@firebase/app-compat","0.1.27",y)},382:function(e,t,n){"use strict";var r=n(67),o=n(77),c=n(18),l=n(207);const f="@firebase/installations",d="0.5.10",m=1e4,w="w:0.5.10",h="FIS_v2",v=36e5,y={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},C=new c.b("installations","Installations",y);function I(e){return e instanceof c.c&&e.code.includes("request-failed")}function S({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function j(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function O(e,t){const n=(await t.json()).error;return C.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function _({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T(e,{refreshToken:t}){const n=_(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}(t)),n}async function E(e){const t=await e();return t.status>=500&&t.status<600?e():t}function P(e){return new Promise((t=>{setTimeout(t,e)}))}const N=/^[cdef][\w-]{21}$/;function k(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return N.test(t)?t:""}catch(e){return""}}function A(e){return`${e.appName}!${e.appId}`}const D=new Map;function F(e,t){const n=A(e);L(n,t),function(e,t){const n=V();n&&n.postMessage({key:e,fid:t});R()}(n,t)}function L(e,t){const n=D.get(e);if(n)for(const e of n)e(t)}let $=null;function V(){return!$&&"BroadcastChannel"in self&&($=new BroadcastChannel("[Firebase] FID Change"),$.onmessage=e=>{L(e.data.key,e.data.fid)}),$}function R(){0===D.size&&$&&($.close(),$=null)}const x="firebase-installations-store";let M=null;function U(){return M||(M=Object(l.b)("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(x)}})),M}async function z(e,t){const n=A(e),r=(await U()).transaction(x,"readwrite"),o=r.objectStore(x),c=await o.get(n);return await o.put(t,n),await r.done,c&&c.fid===t.fid||F(e,t.fid),t}async function K(e){const t=A(e),n=(await U()).transaction(x,"readwrite");await n.objectStore(x).delete(t),await n.done}async function B(e,t){const n=A(e),r=(await U()).transaction(x,"readwrite"),o=r.objectStore(x),c=await o.get(n),l=t(c);return void 0===l?await o.delete(n):await o.put(l,n),await r.done,!l||c&&c.fid===l.fid||F(e,l.fid),l}async function H(e){let t;const n=await B(e.appConfig,(n=>{const r=function(e){return W(e||{fid:k(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(C.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=S(e),o=_(e),c=t.getImmediate({optional:!0});if(c){const e=await c.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const body={fid:n,authVersion:h,appId:e.appId,sdkVersion:w},l={method:"POST",headers:o,body:JSON.stringify(body)},f=await E((()=>fetch(r,l)));if(f.ok){const e=await f.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:j(e.authToken)}}throw await O("Create Installation",f)}(e,t);return z(e.appConfig,n)}catch(n){throw I(n)&&409===n.customData.serverCode?await K(e.appConfig):await z(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:J(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function J(e){let t=await Y(e.appConfig);for(;1===t.registrationStatus;)await P(100),t=await Y(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await H(e);return n||t}return t}function Y(e){return B(e,(e=>{if(!e)throw C.create("installation-not-found");return W(e)}))}function W(e){return 1===(t=e).registrationStatus&&t.registrationTime+m<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function G({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${S(e)}/${t}/authTokens:generate`}(e,n),o=T(e,n),c=t.getImmediate({optional:!0});if(c){const e=await c.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const body={installation:{sdkVersion:w,appId:e.appId}},l={method:"POST",headers:o,body:JSON.stringify(body)},f=await E((()=>fetch(r,l)));if(f.ok){return j(await f.json())}throw await O("Generate Auth Token",f)}async function X(e,t=!1){let n;const r=await B(e.appConfig,(r=>{if(!Z(r))throw C.create("not-registered");const o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+v}(e)}(o))return r;if(1===o.requestStatus)return n=async function(e,t){let n=await Q(e.appConfig);for(;1===n.authToken.requestStatus;)await P(100),n=await Q(e.appConfig);const r=n.authToken;return 0===r.requestStatus?X(e,t):r}(e,t),r;{if(!navigator.onLine)throw C.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await G(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await z(e.appConfig,r),n}catch(n){if(!I(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await z(e.appConfig,n)}else await K(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Q(e){return B(e,(e=>{if(!Z(e))throw C.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+m<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n}))}function Z(e){return void 0!==e&&2===e.registrationStatus}async function ee(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await H(e);t&&await t}(n);return(await X(n,t)).token}function te(e){return C.create("missing-app-config-values",{valueName:e})}const ne="installations",ae=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw te("App Configuration");if(!e.name)throw te("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw te(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Object(r._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},ie=e=>{const t=e.getProvider("app").getImmediate(),n=Object(r._getProvider)(t,ne).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await H(t);return r?r.catch(console.error):X(t).catch(console.error),n.fid}(n),getToken:e=>ee(n,e)}};Object(r._registerComponent)(new o.a(ne,ae,"PUBLIC")),Object(r._registerComponent)(new o.a("installations-internal",ie,"PRIVATE")),Object(r.registerVersion)(f,d),Object(r.registerVersion)(f,d,"esm2017")}}]);