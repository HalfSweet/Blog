function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vidstack-H72EDyqs-B41uODwL.js","assets/vidstack-Ds_q5BGO-BmIdNEue.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Ys=Object.defineProperty;var Zs=Object.getPrototypeOf;var Xs=Reflect.get;var Js=(e,t,s)=>t in e?Ys(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var I=(e,t,s)=>(Js(e,typeof t!="symbol"?t+"":t,s),s),ie=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var v=(e,t,s)=>(ie(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},M=(e,t,s,n)=>(ie(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s);var y=(e,t,s)=>(ie(e,t,"access private method"),s),oe=(e,t,s)=>Xs(Zs(e),s,t);import{A as w,p as ye,t as D,o as ot,w as He,a5 as tn,k as K,B as x,a6 as Ue,C as ze,q as je,s as C,a7 as Ye,a8 as en,h as Ze,y as pt,a9 as Xe,v as ut,aa as k,x as Je,ab as sn,ac as ts,ad as es,ae as ss,af as Dt,ag as ge,ah as nn,ai as ns,X as an,W as on,aj as ln,i as Q,J as _e,D as rn,a2 as xe,l as Ct,Z as un,ak as cn,al as dn,am as pn,an as mn,$ as as,a3 as Te}from"./vidstack-Ds_q5BGO-BmIdNEue.js";import{_ as is}from"./app-BvW9zp2N.js";import{A as U,T as vn,D as Re,x as i,s as fn,$ as $n,L as we}from"./vidstack-CwTj4H1w-J1suOE4C.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=e=>e??U;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tt=e=>(...t)=>({_$litDirective$:e,values:t});let Se=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pt=class extends Se{constructor(t){if(super(t),this.et=U,t.type!==Mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||t==null)return this.ft=void 0,this.et=t;if(t===vn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Pt.directiveName="unsafeHTML",Pt.resultType=1;const os=Tt(Pt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ce extends Pt{}ce.directiveName="unsafeSVG",ce.resultType=2;const hn=Tt(ce);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn=e=>e.strings===void 0,yn={},gn=(e,t=yn)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=(e,t)=>{var s,n;const a=e._$AN;if(a===void 0)return!1;for(const l of a)(n=(s=l)._$AO)===null||n===void 0||n.call(s,t,!1),ct(l,t);return!0},It=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},ls=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Tn(t)}};function _n(e){this._$AN!==void 0?(It(this),this._$AM=e,ls(this)):this._$AM=e}function xn(e,t=!1,s=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(n))for(let l=s;l<n.length;l++)ct(n[l],!1),It(n[l]);else n!=null&&(ct(n,!1),It(n));else ct(this,e)}const Tn=e=>{var t,s,n,a;e.type==Mt.CHILD&&((t=(n=e)._$AP)!==null&&t!==void 0||(n._$AP=xn),(s=(a=e)._$AQ)!==null&&s!==void 0||(a._$AQ=_n))};class rs extends Se{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),ls(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,a;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(a=this.disconnected)===null||a===void 0||a.call(this)),s&&(ct(this,t),It(this))}setValue(t){if(bn(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}var N,mt,X,vt,de,ft,pe,Lt,us,Bt,cs;class wn extends rs{constructor(s){super(s);f(this,vt);f(this,ft);f(this,Lt);f(this,Bt);f(this,N,null);f(this,mt,!1);f(this,X,null);M(this,mt,s.type===Mt.ATTRIBUTE||s.type===Mt.BOOLEAN_ATTRIBUTE)}render(s){return s!==v(this,N)&&(this.disconnected(),M(this,N,s),this.isConnected&&y(this,vt,de).call(this)),v(this,N)?y(this,ft,pe).call(this,ye(v(this,N))):U}reconnected(){y(this,vt,de).call(this)}disconnected(){var s;(s=v(this,X))==null||s.call(this),M(this,X,null)}}N=new WeakMap,mt=new WeakMap,X=new WeakMap,vt=new WeakSet,de=function(){v(this,N)&&M(this,X,D(y(this,Bt,cs).bind(this)))},ft=new WeakSet,pe=function(s){return v(this,mt)?ke(s):s},Lt=new WeakSet,us=function(s){this.setValue(y(this,ft,pe).call(this,s))},Bt=new WeakSet,cs=function(){var s;y(this,Lt,us).call(this,(s=v(this,N))==null?void 0:s.call(this))};function o(e){return Tt(wn)(w(e))}var J,$t,Gt,ht,me;class ds{constructor(t,s){f(this,ht);f(this,J,void 0);f(this,$t,void 0);I(this,"elements",new Set);f(this,Gt,He(y(this,ht,me).bind(this)));M(this,J,t),M(this,$t,s)}connect(){y(this,ht,me).call(this);const t=new MutationObserver(v(this,Gt));for(const s of v(this,J))t.observe(s,{childList:!0,subtree:!0});ot(()=>t.disconnect()),ot(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){tn(t)?(s.textContent="",s.append(t)):(Re(null,s),Re(t,s)),s.style.display||(s.style.display="contents");const n=s.firstElementChild;if(!n)return;const a=s.getAttribute("data-class");a&&n.classList.add(...a.split(" "))}}J=new WeakMap,$t=new WeakMap,Gt=new WeakMap,ht=new WeakSet,me=function(t){if(t&&!t.some(a=>a.addedNodes.length))return;let s=!1,n=v(this,J).flatMap(a=>[...a.querySelectorAll("slot")]);for(const a of n)!a.hasAttribute("name")||this.elements.has(a)||(this.elements.add(a),s=!0);s&&v(this,$t).call(this,this.elements)};let kn=0,St="data-slot-id";var tt,Nt,et,At;class Ce{constructor(t){f(this,et);f(this,tt,void 0);I(this,"slots");f(this,Nt,He(y(this,et,At).bind(this)));M(this,tt,t),this.slots=new ds(t,y(this,et,At).bind(this))}connect(){this.slots.connect(),y(this,et,At).call(this);const t=new MutationObserver(v(this,Nt));for(const s of v(this,tt))t.observe(s,{childList:!0});ot(()=>t.disconnect())}}tt=new WeakMap,Nt=new WeakMap,et=new WeakSet,At=function(){for(const t of v(this,tt))for(const s of t.children){if(s.nodeType!==1)continue;const n=s.getAttribute("slot");if(!n)continue;s.style.display="none";let a=s.getAttribute(St);a||s.setAttribute(St,a=++kn+"");for(const l of this.slots.elements){if(l.getAttribute("name")!==n||l.getAttribute(St)===a)continue;const r=document.importNode(s,!0);n.includes("-icon")&&r.classList.add("vds-icon"),r.style.display="",r.removeAttribute("slot"),this.slots.assign(r,l),l.setAttribute(St,a)}}};function ps({name:e,class:t,state:s,paths:n,viewBox:a="0 0 32 32"}){return i`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${a}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${ke(e??s)}
  >
    ${K(n)?hn(n):o(n)}
  </svg>`}var st,bt,Ft,ms,yt,ve;class Sn{constructor(t){f(this,Ft);f(this,yt);f(this,st,{});f(this,bt,!1);I(this,"slots");this.slots=new ds(t,y(this,yt,ve).bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(t=>{M(this,st,t),M(this,bt,!0),y(this,yt,ve).call(this)})}}st=new WeakMap,bt=new WeakMap,Ft=new WeakSet,ms=function*(){for(const t of Object.keys(v(this,st))){const s=`${t}-icon`;for(const n of this.slots.elements)n.name===s&&(yield{icon:v(this,st)[t],slot:n})}},yt=new WeakSet,ve=function(){if(v(this,bt))for(const{icon:t,slot:s}of y(this,Ft,ms).call(this))this.slots.assign(t,s)};class vs extends Sn{connect(){super.connect();const{player:t}=x();if(!t.el)return;let s,n=new IntersectionObserver(a=>{var l;(l=a[0])!=null&&l.isIntersecting&&(s==null||s(),s=void 0,this.load())});n.observe(t.el),s=ot(()=>n.disconnect())}}const le=new WeakMap,jt=Tt(class extends rs{render(e){return U}update(e,[t]){var s;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),U}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=le.get(s);n===void 0&&(n=new WeakMap,le.set(s,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=le.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),fs=Xe();function c(){return Ue(fs)}const Cn={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var gt,nt,E,_t,fe;class Yt extends ze{constructor(){super(...arguments);f(this,_t);f(this,gt,void 0);f(this,nt,w(()=>{const s=this.$props.when();return y(this,_t,fe).call(this,s)}));f(this,E,w(()=>{const s=this.$props.smallWhen();return y(this,_t,fe).call(this,s)}))}get isMatch(){return v(this,nt).call(this)}get isSmallLayout(){return v(this,E).call(this)}onSetup(){M(this,gt,x()),this.setAttributes({"data-match":v(this,nt),"data-sm":()=>v(this,E).call(this)?"":null,"data-lg":()=>v(this,E).call(this)?null:"","data-size":()=>v(this,E).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),je(fs,{...this.$props,when:v(this,nt),smallWhen:v(this,E),userPrefersAnnouncements:C(!0),userPrefersKeyboardAnimations:C(!0),menuPortal:C(null)})}onAttach(s){Ye(s,this.$props.colorScheme)}}gt=new WeakMap,nt=new WeakMap,E=new WeakMap,_t=new WeakSet,fe=function(s){return s!=="never"&&(en(s)?s:w(()=>s(v(this,gt).player.state))())},I(Yt,"props",Cn);const $s=Yt.prototype;Ze($s,"isMatch");Ze($s,"isSmallLayout");function hs(e,t){D(()=>{const{player:s}=x(),n=s.el;return n&&ut(n,"data-layout",t()&&e),()=>n==null?void 0:n.removeAttribute("data-layout")})}function P(e,t){var s;return((s=e())==null?void 0:s[t])??t}function Ae(){return o(()=>{const{translations:e,userPrefersAnnouncements:t}=c();return t()?i`<media-announcer .translations=${o(e)}></media-announcer>`:null})}function O(e,t=""){return i`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function wt(e){return e.map(t=>O(t))}function p(e,t){return o(()=>P(e,t))}function De({tooltip:e}){const{translations:t}=c(),{remotePlaybackState:s}=k(),n=o(()=>{const l=P(t,"AirPlay"),r=Je(s());return`${l} ${r}`}),a=p(t,"AirPlay");return i`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${O("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function bs({tooltip:e}){const{translations:t}=c(),{remotePlaybackState:s}=k(),n=o(()=>{const l=P(t,"Google Cast"),r=Je(s());return`${l} ${r}`}),a=p(t,"Google Cast");return i`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${O("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Zt({tooltip:e}){const{translations:t}=c(),s=p(t,"Play"),n=p(t,"Pause");return i`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${p(t,"Play")}
        >
          ${wt(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ee({tooltip:e,ref:t=an}){const{translations:s}=c(),n=p(s,"Mute"),a=p(s,"Unmute");return i`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${p(s,"Mute")}
          ${jt(t)}
        >
          ${wt(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${a}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Me({tooltip:e}){const{translations:t}=c(),s=p(t,"Closed-Captions On"),n=p(t,"Closed-Captions Off");return i`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${p(t,"Captions")}
        >
          ${wt(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function An(){const{translations:e}=c(),t=p(e,"Enter PiP"),s=p(e,"Exit PiP");return i`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${p(e,"PiP")}
        >
          ${wt(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ys({tooltip:e}){const{translations:t}=c(),s=p(t,"Enter Fullscreen"),n=p(t,"Exit Fullscreen");return i`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${p(t,"Fullscreen")}
        >
          ${wt(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function We({backward:e,tooltip:t}){const{translations:s,seekStep:n}=c(),a=e?"Seek Backward":"Seek Forward",l=p(s,a);return i`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${o(()=>(e?-1:1)*n())}
          aria-label=${l}
        >
          ${O(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${p(s,a)}
      </media-tooltip-content>
    </media-tooltip>
  `}function gs(){const{translations:e}=c(),{live:t}=k(),s=p(e,"Skip To Live"),n=p(e,"LIVE");return t()?i`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function Pe(){return o(()=>{const{download:e,translations:t}=c(),s=e();if(sn(s))return null;const{source:n,title:a}=k(),l=n(),r=ts({title:a(),src:l,download:s});return K(r==null?void 0:r.url)?i`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${p(t,"Download")}
                href=${es(r.url,{download:r.name})}
                download=${r.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${p(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function Ie(){const{translations:e}=c();return i`
    <media-captions
      class="vds-captions"
      .exampleText=${p(e,"Captions look like this")}
    ></media-captions>
  `}function F(){return i`<div class="vds-controls-spacer"></div>`}function _s(e,t){return i`
    <media-menu-portal .container=${o(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function xs(e,t,s,n){let a=K(t)?document.querySelector(t):t;a||(a=e==null?void 0:e.closest("dialog")),a||(a=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(s),a.append(l),D(()=>{if(!l)return;const{viewType:d}=k(),u=n();ut(l,"data-view-type",d()),ut(l,"data-sm",u),ut(l,"data-lg",!u),ut(l,"data-size",u?"sm":"lg")});const{colorScheme:r}=c();return Ye(l,r),l}function Ts({placement:e,tooltip:t,portal:s}){const{textTracks:n}=x(),{viewType:a,seekableStart:l,seekableEnd:r}=k(),{translations:d,thumbnails:u,menuPortal:$,noModal:h,menuGroup:m,smallWhen:b}=c();if(w(()=>{var Fe;const G=l(),lt=r(),rt=C(null);ss(n,"chapters",rt.set);const Z=(Fe=rt())==null?void 0:Fe.cues.filter(Ve=>Ve.startTime<=lt&&Ve.endTime>=G);return!(Z!=null&&Z.length)})())return null;const S=w(()=>h()?Dt(e):b()?null:Dt(e)),B=w(()=>!b()&&m()==="bottom"&&a()==="video"?26:0),A=C(!1);function R(){A.set(!0)}function q(){A.set(!1)}const Y=i`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${o(S)}
      offset=${o(B)}
    >
      ${o(()=>A()?i`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${o(u)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return i`
    <media-menu class="vds-chapters-menu vds-menu" @open=${R} @close=${q}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${p(d,"Chapters")}
          >
            ${O("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ge(t)?o(t):t}
        >
          ${p(d,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?_s($,Y):Y}
    </media-menu>
  `}function re(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const Oe={type:"color"},Dn={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},Mn={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},Pn={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},In={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},Ot={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},z=Object.keys(Ot).reduce((e,t)=>({...e,[t]:C(Ot[t])}),{});for(const e of Object.keys(z)){const t=localStorage.getItem(`vds-player:${pt(e)}`);K(t)&&z[e].set(t)}function On(){for(const e of Object.keys(z)){const t=Ot[e];z[e].set(t)}}let Ke=!1,ue=new Set;function Ln(){const{player:e}=x();ue.add(e),ot(()=>ue.delete(e)),Ke||(on(()=>{for(const t of ln(z)){const s=z[t],n=Ot[t],a=`--media-user-${pt(t)}`,l=`vds-player:${pt(t)}`;D(()=>{var $;const r=s(),d=r===n,u=d?null:Bn(e,t,r);for(const h of ue)($=h.el)==null||$.style.setProperty(a,u);d?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),Ke=!0)}function Bn(e,t,s){var n;switch(t){case"fontFamily":const a=s==="capitals"?"small-caps":"";return(n=e.el)==null||n.style.setProperty("--media-user-font-variant",a),Nn(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return Gn(s);case"textColor":return`rgb(${re(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return Fn(s);case"textBg":return`rgb(${re(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${re(s)} / var(--media-user-display-bg-opacity, 1))`}}function Gn(e){return(parseInt(e)/100).toString()}function Nn(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Fn(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let Vn=0;function L({label:e="",value:t="",children:s}){if(!e)return i`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++Vn}`;return i`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?i`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function kt({label:e,children:t}){return i`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function j({label:e,icon:t,hint:s}){return i`
    <media-menu-button class="vds-menu-item">
      ${O("menu-arrow-left","vds-menu-close-icon")}
      ${t?O(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${o(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?o(s):null} </span>
      ${O("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function Rn({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:a=null}){function l(r){const{value:d,label:u}=r;return i`
      <media-radio class="vds-radio" value=${d}>
        ${O("menu-radio-check")}
        ${s?null:i`
              <span class="vds-radio-label" data-part="label">
                ${K(u)?u:o(u)}
              </span>
            `}
        ${ge(n)?n(r):n}
      </media-radio>
    `}return i`
    <media-radio-group
      class="vds-radio-group"
      value=${K(e)?e:e?o(e):""}
      @change=${a}
    >
      ${Q(t)?t.map(l):o(()=>t().map(l))}
    </media-radio-group>
  `}function En(e){return Q(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Xt(){return i`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Jt(){return i`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function te({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:a,isMin:l,isMax:r}){const d=e||t,u=[n?O(n,"down"):null,a,s?O(s,"up"):null];return i`
    <div
      class=${`vds-menu-item vds-menu-slider-item${d?" group":""}`}
      data-min=${o(()=>l()?"":null)}
      data-max=${o(()=>r()?"":null)}
    >
      ${d?i`
            <div class="vds-menu-slider-title">
              ${[e?i`<div>${e}</div>`:null,t?i`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${u}</div>
          `:u}
    </div>
  `}const Wn={...Mn,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},Le={...Pn,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function Kn(){return o(()=>{const{hasCaptions:e}=k(),{translations:t}=c();return e()?i`
      <media-menu class="vds-font-menu vds-menu">
        ${j({label:()=>P(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[L({label:p(t,"Font"),children:[Qn(),qn()]}),L({label:p(t,"Text"),children:[Hn(),zn(),Un()]}),L({label:p(t,"Text Background"),children:[jn(),Yn()]}),L({label:p(t,"Display Background"),children:[Zn(),Xn()]}),L({children:[Jn()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Qn(){return V({label:"Family",option:Dn,type:"fontFamily"})}function qn(){return V({label:"Size",option:Wn,type:"fontSize"})}function Hn(){return V({label:"Color",option:Oe,type:"textColor"})}function Un(){return V({label:"Opacity",option:Le,type:"textOpacity"})}function zn(){return V({label:"Shadow",option:In,type:"textShadow"})}function jn(){return V({label:"Color",option:Oe,type:"textBg"})}function Yn(){return V({label:"Opacity",option:Le,type:"textBgOpacity"})}function Zn(){return V({label:"Color",option:Oe,type:"displayBg"})}function Xn(){return V({label:"Opacity",option:Le,type:"displayBgOpacity"})}function Jn(){const{translations:e}=c();return i`
    <button class="vds-menu-item" role="menuitem" @click=${On}>
      <span class="vds-menu-item-label">${o(()=>P(e,"Reset"))}</span>
    </button>
  `}function V({label:e,option:t,type:s}){const{player:n}=x(),{translations:a}=c(),l=z[s],r=()=>P(a,e);function d(){rn(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let h=function(m){l.set(m.target.value),d()};return kt({label:o(r),children:i`
        <input
          class="vds-color-picker"
          type="color"
          .value=${o(l)}
          @input=${h}
        />
      `})}if(t.type==="slider"){let h=function(A){l.set(A.detail+"%"),d()};const{min:m,max:b,step:T,upIcon:S,downIcon:B}=t;return te({label:o(r),value:o(l),upIcon:S,downIcon:B,isMin:()=>l()===m+"%",isMax:()=>l()===b+"%",children:i`
        <media-slider
          class="vds-slider"
          min=${m}
          max=${b}
          step=${T}
          key-step=${T}
          .value=${o(()=>parseInt(l()))}
          aria-label=${o(r)}
          @value-change=${h}
          @drag-value-change=${h}
        >
          ${Xt()}${Jt()}
        </media-slider>
      `})}const u=En(t.values),$=()=>{var b;const h=l(),m=((b=u.find(T=>T.value===h))==null?void 0:b.label)||"";return P(a,K(m)?m:m())};return i`
    <media-menu class=${`vds-${pt(s)}-menu vds-menu`}>
      ${j({label:r,hint:$})}
      <media-menu-items class="vds-menu-items">
        ${Rn({value:l,options:u,onChange({detail:h}){l.set(h),d()}})}
      </media-menu-items>
    </media-menu>
  `}function ee({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:a}){const{translations:l}=c(),r=n?localStorage.getItem(n):null,d=C(!!(r??s)),u=C(!1),$=o($n(d)),h=p(l,e);n&&a(ye(d)),t&&D(()=>void d.set(t()));function m(S){(S==null?void 0:S.button)!==1&&(d.set(B=>!B),n&&localStorage.setItem(n,d()?"1":""),a(d(),S),u.set(!1))}function b(S){_e(S)&&m()}function T(S){S.button===0&&u.set(!0)}return i`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${h}
      aria-checked=${$}
      data-active=${o(()=>u()?"":null)}
      @pointerup=${m}
      @pointerdown=${T}
      @keydown=${b}
    ></div>
  `}function ta(){return o(()=>{const{translations:e}=c();return i`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${j({label:()=>P(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[L({children:[ea(),sa()]}),L({children:[Kn()]})]}
        </media-menu-items>
      </media-menu>
    `})}function ea(){const{userPrefersAnnouncements:e,translations:t}=c(),s="Announcements";return kt({label:p(t,s),children:ee({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function sa(){return o(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=c(),{viewType:n}=k();if(w(()=>n()!=="video"||s())())return null;const l="Keyboard Animations";return kt({label:p(e,l),children:ee({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function na(){return o(()=>{const{noAudioGain:e,translations:t}=c(),{audioTracks:s,canSetAudioGain:n}=k();return w(()=>!(n()&&!e())&&s().length<=1)()?null:i`
      <media-menu class="vds-audio-menu vds-menu">
        ${j({label:()=>P(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[aa(),ia()]}
        </media-menu-items>
      </media-menu>
    `})}function aa(){return o(()=>{const{translations:e}=c(),{audioTracks:t}=k(),s=p(e,"Default");return w(()=>t().length<=1)()?null:L({children:i`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${j({label:()=>P(e,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function ia(){return o(()=>{const{noAudioGain:e,translations:t}=c(),{canSetAudioGain:s}=k();if(w(()=>!s()||e())())return null;const{audioGain:a}=k();return L({label:p(t,"Boost"),value:o(()=>Math.round(((a()??1)-1)*100)+"%"),children:[te({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:oa(),isMin:()=>((a()??1)-1)*100<=ws(),isMax:()=>((a()??1)-1)*100===ks()})]})})}function oa(){const{translations:e}=c(),t=p(e,"Boost"),s=ws,n=ks,a=la;return i`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${o(s)}
      max=${o(n)}
      step=${o(a)}
      key-step=${o(a)}
    >
      ${Xt()}${Jt()}
    </media-audio-gain-slider>
  `}function ws(){const{audioGains:e}=c(),t=e();return Q(t)?t[0]??0:t.min}function ks(){const{audioGains:e}=c(),t=e();return Q(t)?t[t.length-1]??300:t.max}function la(){const{audioGains:e}=c(),t=e();return Q(t)?t[1]-t[0]||25:t.step}function ra(){return o(()=>{const{translations:e}=c(),{hasCaptions:t}=k(),s=p(e,"Off");return t()?i`
      <media-menu class="vds-captions-menu vds-menu">
        ${j({label:()=>P(e,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function ua(){return o(()=>{const{translations:e}=c();return i`
      <media-menu class="vds-playback-menu vds-menu">
        ${j({label:()=>P(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[L({children:ca()}),da(),fa()]}
        </media-menu-items>
      </media-menu>
    `})}function ca(){const{remote:e}=x(),{translations:t}=c(),s="Loop";return kt({label:p(t,s),children:ee({label:s,storageKey:"vds-player::user-loop",onChange(n,a){e.userPrefersLoopChange(n,a)}})})}function da(){return o(()=>{const{translations:e}=c(),{canSetPlaybackRate:t,playbackRate:s}=k();return t()?L({label:p(e,"Speed"),value:o(()=>s()===1?P(e,"Normal"):s()+"x"),children:[te({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:ma(),isMin:()=>s()===Ss(),isMax:()=>s()===Cs()})]}):null})}function Ss(){const{playbackRates:e}=c(),t=e();return Q(t)?t[0]??0:t.min}function Cs(){const{playbackRates:e}=c(),t=e();return Q(t)?t[t.length-1]??2:t.max}function pa(){const{playbackRates:e}=c(),t=e();return Q(t)?t[1]-t[0]||.25:t.step}function ma(){const{translations:e}=c(),t=p(e,"Speed"),s=Ss,n=Cs,a=pa;return i`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${o(s)}
      max=${o(n)}
      step=${o(a)}
      key-step=${o(a)}
    >
      ${Xt()}${Jt()}
    </media-speed-slider>
  `}function va(){const{remote:e,qualities:t}=x(),{autoQuality:s,canSetQuality:n,qualities:a}=k(),{translations:l}=c(),r="Auto";return w(()=>!n()||a().length<=1)()?null:kt({label:p(l,r),children:ee({label:r,checked:s,onChange(u,$){u?e.requestAutoQuality($):e.changeQuality(t.selectedIndex,$)}})})}function fa(){return o(()=>{const{hideQualityBitrate:e,translations:t}=c(),{canSetQuality:s,qualities:n,quality:a}=k(),l=w(()=>!s()||n().length<=1),r=w(()=>fn(n()));return l()?null:L({label:p(t,"Quality"),value:o(()=>{var m,b;const d=(m=a())==null?void 0:m.height,u=e()?null:(b=a())==null?void 0:b.bitrate,$=u&&u>0?`${(u/1e6).toFixed(2)} Mbps`:null,h=P(t,"Auto");return d?`${d}p${$?` (${$})`:""}`:h}),children:[te({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:$a(),isMin:()=>r()[0]===a(),isMax:()=>r().at(-1)===a()}),va()]})})}function $a(){const{translations:e}=c(),t=p(e,"Quality");return i`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${Xt()}${Jt()}
    </media-quality-slider>
  `}function As({placement:e,portal:t,tooltip:s}){return o(()=>{const{viewType:n}=k(),{translations:a,menuPortal:l,noModal:r,menuGroup:d,smallWhen:u}=c(),$=w(()=>r()?Dt(e):u()?null:Dt(e)),h=w(()=>!u()&&d()==="bottom"&&n()==="video"?26:0),m=C(!1);Ln();function b(){m.set(!0)}function T(){m.set(!1)}const S=i`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${o($)}
        offset=${o(h)}
      >
        ${o(()=>m()?[ua(),ta(),na(),ra()]:null)}
      </media-menu-items>
    `;return i`
      <media-menu class="vds-settings-menu vds-menu" @open=${b} @close=${T}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${p(a,"Settings")}
            >
              ${O("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${ge(s)?o(s):s}
          >
            ${p(a,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?_s(l,S):S}
      </media-menu>
    `})}function Be({orientation:e,tooltip:t}){return o(()=>{const{pointer:s,muted:n,canSetVolume:a}=k();if(s()==="coarse"&&!n())return null;if(!a())return Ee({tooltip:t});const l=C(void 0),r=nn(l);return i`
      <div class="vds-volume" ?data-active=${o(r)} ${jt(l.set)}>
        ${Ee({tooltip:t})}
        <div class="vds-volume-popup">${ha({orientation:e})}</div>
      </div>
    `})}function ha({orientation:e}={}){const{translations:t}=c(),s=p(t,"Volume");return i`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${ke(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function Ge(){const e=C(void 0),t=C(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:a,disableTimeSlider:l,seekStep:r,noScrubGesture:d}=c(),u=p(n,"Seek"),$=o(l),h=o(()=>t()<a()),m=o(s);return ns(e,()=>{const b=e();b&&t.set(b.clientWidth)}),i`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${u}
      key-step=${o(r)}
      ?disabled=${$}
      ?no-swipe-gesture=${o(d)}
      ${jt(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${h}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${m}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function ba(){return i`
    <div class="vds-time-group">
      ${o(()=>{const{duration:e}=k();return e()?[i`<media-time class="vds-time" type="current"></media-time>`,i`<div class="vds-time-divider">/</div>`,i`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function ya(){return o(()=>{const{live:e,duration:t}=k();return e()?gs():t()?i`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function Ds(){return o(()=>{const{live:e}=k();return e()?gs():ba()})}function Ms(){return o(()=>{const{textTracks:e}=x(),{title:t,started:s}=k(),n=C(null);return ss(e,"chapters",n.set),n()&&(s()||!t())?Ps():i`<media-title class="vds-chapter-title"></media-title>`})}function Ps(){return i`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Is extends vs{async loadIcons(){const t=(await is(()=>import("./vidstack-H72EDyqs-B41uODwL.js"),__vite__mapDeps([0,1]))).icons,s={};for(const n of Object.keys(t))s[n]=ps({name:n,paths:t[n]});return s}}var H;let ga=(H=class extends Yt{},I(H,"props",{...oe(H,H,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576}),H);function _a(){return[Ae(),Ie(),i`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[We({backward:!0,tooltip:"top start"}),Zt({tooltip:"top"}),We({tooltip:"top"}),xa(),Ge(),ya(),Be({orientation:"vertical",tooltip:"top"}),Me({tooltip:"top"}),Pe(),De({tooltip:"top"}),Ta()]}
        </media-controls-group>
      </media-controls>
    `]}function xa(){return o(()=>{let e=C(void 0),t=C(!1),s=x(),{title:n,started:a,currentTime:l,ended:r}=k(),{translations:d}=c(),u=cn(e),$=()=>a()||l()>0;const h=()=>{const T=r()?"Replay":$()?"Continue":"Play";return`${P(d,T)}: ${n()}`};D(()=>{var T;u()&&document.activeElement===document.body&&((T=s.player.el)==null||T.focus({preventScroll:!0}))});function m(){const T=e(),S=!!T&&!u()&&T.clientWidth<T.children[0].clientWidth;T&&dn(T,"vds-marquee",S),t.set(S)}function b(){return i`
        <span class="vds-title-text">
          ${o(h)}${o(()=>$()?Ps():null)}
        </span>
      `}return ns(e,m),n()?i`
          <span class="vds-title" title=${o(h)} ${jt(e.set)}>
            ${[b(),o(()=>t()&&!u()?b():null)]}
          </span>
        `:F()})}function Ta(){const e="top end";return[Ts({tooltip:"top",placement:e,portal:!0}),As({tooltip:"top end",placement:e,portal:!0})]}var xt,at,Vt,Os,Rt,Ls,Et,Bs,Wt,Gs,Kt,Ns,Qt,Fs;class $e extends xe(we,ga){constructor(){super(...arguments);f(this,Vt);f(this,Rt);f(this,Et);f(this,Wt);f(this,Kt);f(this,Qt);f(this,xt,void 0);f(this,at,C(!1))}onSetup(){this.forwardKeepAlive=!1,M(this,xt,x()),this.classList.add("vds-audio-layout"),y(this,Et,Bs).call(this)}onConnect(){hs("audio",()=>this.isMatch),y(this,Rt,Ls).call(this)}render(){return o(y(this,Vt,Os).bind(this))}}xt=new WeakMap,at=new WeakMap,Vt=new WeakSet,Os=function(){return this.isMatch?_a():null},Rt=new WeakSet,Ls=function(){const{menuPortal:s}=c();D(()=>{if(!this.isMatch)return;const n=xs(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),a=n?[this,n]:[this];return(this.$props.customIcons()?new Ce(a):new Is(a)).connect(),s.set(n),()=>{n.remove(),s.set(null)}})},Et=new WeakSet,Bs=function(){const{pointer:s}=v(this,xt).$state;D(()=>{s()==="coarse"&&D(y(this,Wt,Gs).bind(this))})},Wt=new WeakSet,Gs=function(){if(!v(this,at).call(this)){Ct(this,"pointerdown",y(this,Kt,Ns).bind(this),{capture:!0});return}Ct(this,"pointerdown",s=>s.stopPropagation()),Ct(window,"pointerdown",y(this,Qt,Fs).bind(this))},Kt=new WeakSet,Ns=function(s){const{target:n}=s;un(n)&&n.closest(".vds-time-slider")&&(s.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),v(this,at).set(!0))},Qt=new WeakSet,Fs=function(){v(this,at).set(!1),this.removeAttribute("data-scrubbing")},I($e,"tagName","media-audio-layout"),I($e,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wa=Tt(class extends Se{constructor(){super(...arguments),this.key=U}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(gn(e),this.key=t),s}}),dt=class dt extends Yt{};I(dt,"props",{...oe(dt,dt,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380});let he=dt;function Vs(){return o(()=>{const e=x(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=c();if(w(()=>t()||!s())())return null;const a=C(!1),{lastKeyboardAction:l}=e.$state;D(()=>{a.set(!!l());const m=setTimeout(()=>a.set(!1),500);return()=>{a.set(!1),window.clearTimeout(m)}});const r=w(()=>{var b;const m=(b=l())==null?void 0:b.action;return m&&a()?pt(m):null}),d=w(()=>`vds-kb-action${a()?"":" hidden"}`),u=w(ka),$=w(()=>{const m=Sa();return m?pn(m):null});function h(){const m=$();return m?i`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return i`
      <div class=${o(d)} data-action=${o(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${o(u)}</div>
        </div>
        ${o(()=>wa(l(),h()))}
      </div>
    `})}function ka(){var n;const{$state:e}=x(),t=(n=e.lastKeyboardAction())==null?void 0:n.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":Qe(e.volume(),s);case"volumeUp":case"volumeDown":return Qe(e.volume(),s);default:return""}}function Qe(e,t){return`${Math.round(e*t*100)}%`}function Sa(){var s;const{$state:e}=x();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Ca(){return[Ae(),Rs(),se(),Vs(),Ie(),i`<div class="vds-scrim"></div>`,i`
      <media-controls class="vds-controls">
        ${[Da(),F(),i`<media-controls-group class="vds-controls-group"></media-controls-group>`,F(),i`
            <media-controls-group class="vds-controls-group">
              ${Ge()}
            </media-controls-group>
          `,i`
            <media-controls-group class="vds-controls-group">
              ${[Zt({tooltip:"top start"}),Be({orientation:"horizontal",tooltip:"top"}),Ds(),Ms(),Me({tooltip:"top"}),Aa(),De({tooltip:"top"}),bs({tooltip:"top"}),Pe(),An(),ys({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Aa(){return o(()=>{const{menuGroup:e}=c();return e()==="bottom"?Ne():null})}function Da(){return i`
    <media-controls-group class="vds-controls-group">
      ${o(()=>{const{menuGroup:e}=c();return e()==="top"?[F(),Ne()]:null})}
    </media-controls-group>
  `}function Ma(){return[Ae(),Rs(),se(),Ie(),Vs(),i`<div class="vds-scrim"></div>`,i`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[De({tooltip:"top start"}),bs({tooltip:"bottom start"}),F(),Me({tooltip:"bottom"}),Pe(),Ne(),Be({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${F()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[F(),Zt({tooltip:"top"}),F()]}
        </media-controls-group>

        ${F()}

        <media-controls-group class="vds-controls-group">
          ${[Ds(),Ms(),ys({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Ge()}
        </media-controls-group>
      </media-controls>
    `,Ia()]}function Pa(){return i`
    <div class="vds-load-container">
      ${[se(),Zt({tooltip:"top"})]}
    </div>
  `}function Ia(){return o(()=>{const{duration:e}=k();return e()===0?null:i`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function se(){return i`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Ne(){const{menuGroup:e,smallWhen:t}=c(),s=()=>e()==="top"||t()?"bottom":"top",n=w(()=>`${s()} ${e()==="top"?"end":"center"}`),a=w(()=>`${s()} end`);return[Ts({tooltip:n,placement:a,portal:!0}),As({tooltip:n,placement:a,portal:!0})]}function Rs(){return o(()=>{const{noGestures:e}=c();return e()?null:i`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var it,qt,Es,Ht,Ws;class be extends xe(we,he){constructor(){super(...arguments);f(this,qt);f(this,Ht);f(this,it,void 0)}onSetup(){this.forwardKeepAlive=!1,M(this,it,x()),this.classList.add("vds-video-layout")}onConnect(){hs("video",()=>this.isMatch),y(this,qt,Es).call(this)}render(){return o(y(this,Ht,Ws).bind(this))}}it=new WeakMap,qt=new WeakSet,Es=function(){const{menuPortal:s}=c();D(()=>{if(!this.isMatch)return;const n=xs(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),a=n?[this,n]:[this];return(this.$props.customIcons()?new Ce(a):new Is(a)).connect(),s.set(n),()=>{n.remove(),s.set(null)}})},Ht=new WeakSet,Ws=function(){const{load:s}=v(this,it).$props,{canLoad:n,streamType:a,nativeControls:l}=v(this,it).$state;return!l()&&this.isMatch?s()==="play"&&!n()?Pa():a()==="unknown"?se():this.isSmallLayout?Ma():Ca():null},I(be,"tagName","media-video-layout"),I(be,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});const Ks=Xe();function g(){return Ue(Ks)}const Oa={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]};var Ut;class Qs extends ze{constructor(){super(...arguments);f(this,Ut,void 0)}onSetup(){M(this,Ut,x()),je(Ks,{...this.$props,previewTime:C(0)})}}Ut=new WeakMap,I(Qs,"props",Oa);function La(e,t){const{canAirPlay:s,canFullscreen:n,canPictureInPicture:a,controlsHidden:l,currentTime:r,fullscreen:d,hasCaptions:u,isAirPlayConnected:$,paused:h,pictureInPicture:m,playing:b,pointer:T,poster:S,textTrack:B,viewType:A,waiting:R}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");const q={"plyr--airplay-active":$,"plyr--airplay-supported":s,"plyr--fullscreen-active":d,"plyr--fullscreen-enabled":n,"plyr--hide-controls":l,"plyr--is-touch":()=>T()==="coarse","plyr--loading":R,"plyr--paused":h,"plyr--pip-active":m,"plyr--pip-enabled":a,"plyr--playing":b,"plyr__poster-enabled":S,"plyr--stopped":()=>h()&&r()===0,"plyr--captions-active":B,"plyr--captions-enabled":u},Y=mn();for(const G of Object.keys(q))Y.add(D(()=>void e.classList.toggle(G,!!q[G]())));return Y.add(D(()=>{const G=`plyr--${A()}`;return e.classList.add(G),()=>e.classList.remove(G)}),D(()=>{var Z;const{$provider:G}=t,lt=(Z=G())==null?void 0:Z.type,rt=`plyr--${Ba(lt)?"html5":lt}`;return e.classList.toggle(rt,!!lt),()=>e.classList.remove(rt)})),()=>Y.empty()}function Ba(e){return e==="audio"||e==="video"}class Ga extends vs{async loadIcons(){const t=(await is(()=>import("./vidstack-DXxIKXmd-Dge3KT8k.js"),__vite__mapDeps([]))).icons,s={};for(const n of Object.keys(t))s[n]=ps({name:n,paths:t[n],viewBox:"0 0 18 18"});return s}}function ne(e,t){var s;return((s=e())==null?void 0:s[t])??t}function Na(){return Ea()}function Fa(){const e=x(),{load:t}=e.$props,{canLoad:s}=e.$state;return w(()=>t()==="play"&&!s())()?[qs(),qe()]:[Va(),Ra(),qe(),Wa(),ni(),ai()]}function qs(){const e=x(),{translations:t}=g(),{title:s}=e.$state,n=o(()=>`${ne(t,"Play")}, ${s()}`);return i`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Va(){const{controls:e}=g();return o(()=>e().includes("play-large")?qs():null)}function Ra(){const{thumbnails:e,previewTime:t}=g();return i`
    <media-thumbnail
      .src=${o(e)}
      class="plyr__preview-scrubbing"
      time=${o(()=>t())}
    ></media-thumbnail>
  `}function qe(){const e=x(),{poster:t}=e.$state,s=o(()=>`background-image: url("${t()}");`);return i`<div class="plyr__poster" style=${s}></div>`}function Ea(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=g(),s=o(()=>t().filter(n=>!e.has(n)).map(Hs));return i`<div class="plyr__controls">${s}</div>`}function Wa(){const{controls:e}=g(),t=o(()=>e().map(Hs));return i`<div class="plyr__controls">${t}</div>`}function Hs(e){switch(e){case"airplay":return Ka();case"captions":return Qa();case"current-time":return ei();case"download":return si();case"duration":return Us();case"fast-forward":return Za();case"fullscreen":return qa();case"mute":case"volume":case"mute+volume":return Ja(e);case"pip":return Ua();case"play":return za();case"progress":return Xa();case"restart":return ja();case"rewind":return Ya();case"settings":return ii();default:return null}}function Ka(){const{translations:e}=g();return i`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${_(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function Qa(){const{translations:e}=g(),t=_(e,"Disable captions"),s=_(e,"Enable captions");return i`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${t}</span>
      <span class="label--not-pressed plyr__tooltip">${s}</span>
    </media-caption-button>
  `}function qa(){const{translations:e}=g(),t=_(e,"Enter Fullscreen"),s=_(e,"Exit Fullscreen");return i`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}function Ha(){const{translations:e}=g(),t=_(e,"Mute"),s=_(e,"Unmute");return i`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Ua(){const{translations:e}=g(),t=_(e,"Enter PiP"),s=_(e,"Exit PiP");return i`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function za(){const{translations:e}=g(),t=_(e,"Play"),s=_(e,"Pause");return i`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function ja(){const{translations:e}=g(),{remote:t}=x(),s=_(e,"Restart");function n(a){as(a)&&!_e(a)||t.seek(0,a)}return i`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${n}
      @keydown=${n}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </button>
  `}function Ya(){const{translations:e,seekTime:t}=g(),s=o(()=>`${ne(e,"Rewind")} ${t()}s`),n=o(()=>-1*t());return i`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function Za(){const{translations:e,seekTime:t}=g(),s=o(()=>`${ne(e,"Forward")} ${t()}s`),n=o(t);return i`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function Xa(){let e=x(),{duration:t,viewType:s}=e.$state,{translations:n,markers:a,thumbnails:l,seekTime:r,previewTime:d}=g(),u=_(n,"Seek"),$=C(null),h=o(()=>{const A=$();return A?i`<span class="plyr__progress__marker-label">${os(A.label)}<br /></span>`:null});function m(A){d.set(A.detail)}function b(){$.set(this)}function T(){$.set(null)}function S(){const A=l(),R=o(()=>s()==="audio");return A?i`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${R}>
            <media-slider-thumbnail .src=${A} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${h}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:i`
          <span class="plyr__tooltip">
            ${h}
            <media-slider-value></media-slider-value>
          </span>
        `}function B(){var R;const A=t();return Number.isFinite(A)?(R=a())==null?void 0:R.map(q=>i`
        <span
          class="plyr__progress__marker"
          @mouseenter=${b.bind(q)}
          @mouseleave=${T}
          style=${`left: ${q.time/A*100}%;`}
        ></span>
      `):null}return i`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${o(r)}
          aria-label=${u}
          @media-seeking-request=${m}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${o(S)}${o(B)}
        </media-time-slider>
      </div>
    </div>
  `}function Ja(e){return o(()=>{const t=e==="mute"||e==="mute+volume",s=e==="volume"||e==="mute+volume";return i`
      <div class="plyr__controls__item plyr__volume">
        ${[t?Ha():null,s?ti():null]}
      </div>
    `})}function ti(){const{translations:e}=g(),t=_(e,"Volume");return i`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function ei(){const e=x(),{translations:t,invertTime:s,toggleTime:n,displayDuration:a}=g(),l=C(ye(s));function r(u){!n()||a()||as(u)&&!_e(u)||l.set($=>!$)}function d(){return o(()=>a()?Us():null)}return o(()=>{const{streamType:u}=e.$state,$=_(t,"LIVE"),h=_(t,"Current time"),m=o(()=>!a()&&l());return u()==="live"||u()==="ll-live"?i`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${$}</span>
          </media-live-button>
        `:i`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${h}
            ?remainder=${m}
            @pointerup=${r}
            @keydown=${r}
          ></media-time>
          ${d()}
        `})}function Us(){const{translations:e}=g(),t=_(e,"Duration");return i`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function si(){return o(()=>{const e=x(),{translations:t,download:s}=g(),{title:n,source:a}=e.$state,l=a(),r=s(),d=ts({title:n(),src:l,download:r}),u=_(t,"Download");return K(d==null?void 0:d.url)?i`
          <a
            class="plyr__controls__item plyr__control"
            href=${es(d.url,{download:d.name})}
            download=${d.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${u}</span>
          </a>
        `:null})}function ni(){return o(()=>{const{clickToPlay:e,clickToFullscreen:t}=g();return[e()?i`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?i`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function ai(){const e=x(),t=C(void 0),s=o(()=>{var n;return os((n=t())==null?void 0:n.text)});return D(()=>{const n=e.$state.textTrack();if(!n)return;function a(){t.set(n==null?void 0:n.activeCues[0])}return a(),Ct(n,"cue-change",a)}),i`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function ii(){const{translations:e}=g(),t=_(e,"Settings");return i`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[li(),di(),mi(),ui()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function ae({label:e,children:t}){const s=C(!1);return i`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${oi({label:e,open:s})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function oi({open:e,label:t}){const{translations:s}=g(),n=o(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function a(){const l=_(s,"Go back to previous menu");return o(()=>e()?i`<span class="plyr__sr-only">${l}</span>`:null)}return i`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${fi(e)}>
        ${_(s,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${a()}
    </media-menu-button>
  `}function li(){return ae({label:"Audio",children:ri()})}function ri(){const{translations:e}=g();return i`
    <media-audio-radio-group empty-label=${_(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function ui(){return ae({label:"Speed",children:ci()})}function ci(){const{translations:e,speed:t}=g();return i`
    <media-speed-radio-group .rates=${t} normal-label=${_(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function di(){return ae({label:"Captions",children:pi()})}function pi(){const{translations:e}=g();return i`
    <media-captions-radio-group off-label=${_(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function mi(){return ae({label:"Quality",children:vi()})}function vi(){const{translations:e}=g();return i`
    <media-quality-radio-group auto-label=${_(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function fi(e){return o(()=>e()?"true":"false")}function _(e,t){return o(()=>ne(e,t))}var W,zt,js;class zs extends xe(we,Qs){constructor(){super(...arguments);f(this,zt);f(this,W,void 0)}onSetup(){this.forwardKeepAlive=!1,M(this,W,x())}onConnect(){var s;(s=v(this,W).player.el)==null||s.setAttribute("data-layout","plyr"),ot(()=>{var n;return(n=v(this,W).player.el)==null?void 0:n.removeAttribute("data-layout")}),La(this,v(this,W)),D(()=>{this.$props.customIcons()?new Ce([this]).connect():new Ga([this]).connect()})}render(){return o(y(this,zt,js).bind(this))}}W=new WeakMap,zt=new WeakSet,js=function(){const{viewType:s}=v(this,W).$state;return s()==="audio"?Na():s()==="video"?Fa():null},I(zs,"tagName","media-plyr-layout");Te($e);Te(be);Te(zs);
