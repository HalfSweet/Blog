function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vidstack-CmqqnRgc-CHPJw6F5.js","assets/vidstack-BeyDmEgV-DK6K5w61.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var je=Object.getPrototypeOf;var ze=Reflect.get;var yt=(e,t,s)=>ze(je(e),s,t);import{x as _,p as Dt,h as S,r as ie,o as H,a4 as Ze,w as K,A as y,a5 as oe,C as le,k as re,s as w,a6 as ue,a7 as Ye,t as Y,a8 as ce,y as de,a9 as x,aa as Pt,ab as pe,q as j,u as me,ac as Xe,ad as ve,ae as fe,af as nt,ag as Je,W as ts,U as es,ah as ss,i as L,H as Mt,B as ns,a1 as Ot,l as st,Y as as,ai as is,aj as os,ak as ls,al as rs,_ as $e,a2 as It}from"./vidstack-BeyDmEgV-DK6K5w61.js";import{_ as he}from"./app-Flo2gZk8.js";import{A as F,T as us,D as Jt,x as i,s as cs,$ as ds,L as Gt}from"./vidstack-D2YigfqZ-BLArkuQb.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=e=>e??F;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},X=e=>(...t)=>({_$litDirective$:e,values:t});let Bt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let it=class extends Bt{constructor(t){if(super(t),this.et=F,t.type!==at.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===F||t==null)return this.ft=void 0,this.et=t;if(t===us)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}};it.directiveName="unsafeHTML",it.resultType=1;const be=X(it);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Tt extends it{}Tt.directiveName="unsafeSVG",Tt.resultType=2;const ps=X(Tt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=e=>e.strings===void 0,vs={},fs=(e,t=vs)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(e,t)=>{var s,n;const a=e._$AN;if(a===void 0)return!1;for(const l of a)(n=(s=l)._$AO)===null||n===void 0||n.call(s,t,!1),z(l,t);return!0},ot=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},ye=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),bs(t)}};function $s(e){this._$AN!==void 0?(ot(this),this._$AM=e,ye(this)):this._$AM=e}function hs(e,t=!1,s=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(n))for(let l=s;l<n.length;l++)z(n[l],!1),ot(n[l]);else n!=null&&(z(n,!1),ot(n));else z(this,e)}const bs=e=>{var t,s,n,a;e.type==at.CHILD&&((t=(n=e)._$AP)!==null&&t!==void 0||(n._$AP=hs),(s=(a=e)._$AQ)!==null&&s!==void 0||(a._$AQ=$s))};class ge extends Bt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),ye(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,a;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(a=this.disconnected)===null||a===void 0||a.call(this)),s&&(z(this,t),ot(this))}setValue(t){if(ms(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}class ys extends ge{constructor(t){super(t),this.h=null,this.w=!1,this.$=null,this.w=t.type===at.ATTRIBUTE||t.type===at.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Gl()),this.h?this.x(Dt(this.h)):F}reconnected(){this.Gl()}disconnected(){var t;(t=this.$)==null||t.call(this),this.$=null}Gl(){this.h&&(this.$=S(this.l.bind(this)))}x(t){return this.w?Lt(t):t}y(t){this.setValue(this.x(t))}l(){var t;this.y((t=this.h)==null?void 0:t.call(this))}}function o(e){return X(ys)(_(e))}class _e{constructor(t,s){this._m=t,this.La=s,this.elements=new Set,this.Gc=ie(this.Ha.bind(this))}connect(){this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0,subtree:!0});H(()=>t.disconnect()),H(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){Ze(t)?(s.textContent="",s.append(t)):(Jt(null,s),Jt(t,s)),s.style.display||(s.style.display="contents");const n=s.firstElementChild;if(!n)return;const a=s.getAttribute("data-class");a&&n.classList.add(...a.split(" "))}Ha(t){if(t&&!t.some(a=>a.addedNodes.length))return;let s=!1,n=this._m.flatMap(a=>[...a.querySelectorAll("slot")]);for(const a of n)!a.hasAttribute("name")||this.elements.has(a)||(this.elements.add(a),s=!0);s&&this.La(this.elements)}}let gs=0,et="data-slot-id";class Nt{constructor(t){this._m=t,this.Gc=ie(this.Ha.bind(this)),this.slots=new _e(t,this.Ha.bind(this))}connect(){this.slots.connect(),this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0});H(()=>t.disconnect())}Ha(){for(const t of this._m)for(const s of t.children){if(s.nodeType!==1)continue;const n=s.getAttribute("slot");if(!n)continue;s.style.display="none";let a=s.getAttribute(et);a||s.setAttribute(et,a=++gs+"");for(const l of this.slots.elements){if(l.getAttribute("name")!==n||l.getAttribute(et)===a)continue;const r=document.importNode(s,!0);n.includes("-icon")&&r.classList.add("vds-icon"),r.style.display="",r.removeAttribute("slot"),this.slots.assign(r,l),l.setAttribute(et,a)}}}}function xe({name:e,class:t,state:s,paths:n,viewBox:a="0 0 32 32"}){return i`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${a}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${Lt(e??s)}
  >
    ${K(n)?ps(n):o(n)}
  </svg>`}class _s{constructor(t){this._m=t,this.dn={},this.gn=!1,this.slots=new _e(t,this.hn.bind(this))}connect(){this.slots.connect()}load(){this.Pf().then(t=>{this.dn=t,this.gn=!0,this.hn()})}*jn(){for(const t of Object.keys(this.dn)){const s=`${t}-icon`;for(const n of this.slots.elements)n.name===s&&(yield{icon:this.dn[t],slot:n})}}hn(){if(this.gn)for(const{icon:t,slot:s}of this.jn())this.slots.assign(t,s)}}class Te extends _s{connect(){super.connect();const{player:t}=y();if(!t.el)return;let s,n=new IntersectionObserver(a=>{var l;(l=a[0])!=null&&l.isIntersecting&&(s==null||s(),s=void 0,this.load())});n.observe(t.el),s=H(()=>n.disconnect())}}const gt=new WeakMap,ct=X(class extends ge{render(e){return F}update(e,[t]){var s;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),F}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=gt.get(s);n===void 0&&(n=new WeakMap,gt.set(s,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=gt.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),we=ce();function c(){return oe(we)}const xs={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var Ts=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,ke=(e,t,s,n)=>{for(var a=ws(t,s),l=e.length-1,r;l>=0;l--)(r=e[l])&&(a=r(t,s,a)||a);return a&&Ts(t,s,a),a};const jt=class jt extends le{constructor(){super(...arguments),this.cn=_(()=>{const t=this.$props.when();return this.fn(t)}),this.$m=_(()=>{const t=this.$props.smallWhen();return this.fn(t)})}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=y(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),re(we,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:w(!0),userPrefersKeyboardAnimations:w(!0),menuPortal:w(null)})}onAttach(t){ue(t,this.$props.colorScheme)}fn(t){return t!=="never"&&(Ye(t)?t:_(()=>t(this.a.player.state))())}};jt.props=xs;let Q=jt;ke([de],Q.prototype,"isMatch");ke([de],Q.prototype,"isSmallLayout");function Se(e,t){S(()=>{const{player:s}=y(),n=s.el;return n&&j(n,"data-layout",t()&&e),()=>n==null?void 0:n.removeAttribute("data-layout")})}function C(e,t){var s;return((s=e())==null?void 0:s[t])??t}function Ft(){return o(()=>{const{translations:e,userPrefersAnnouncements:t}=c();return t()?i`<media-announcer .translations=${o(e)}></media-announcer>`:null})}function A(e,t=""){return i`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function J(e){return e.map(t=>A(t))}function d(e,t){return o(()=>C(e,t))}function Rt({tooltip:e}){const{translations:t}=c(),{remotePlaybackState:s}=x(),n=o(()=>{const l=C(t,"AirPlay"),r=me(s());return`${l} ${r}`}),a=d(t,"AirPlay");return i`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${A("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ce({tooltip:e}){const{translations:t}=c(),{remotePlaybackState:s}=x(),n=o(()=>{const l=C(t,"Google Cast"),r=me(s());return`${l} ${r}`}),a=d(t,"Google Cast");return i`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${A("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function dt({tooltip:e}){const{translations:t}=c(),s=d(t,"Play"),n=d(t,"Pause");return i`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${J(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function te({tooltip:e,ref:t=ts}){const{translations:s}=c(),n=d(s,"Mute"),a=d(s,"Unmute");return i`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${ct(t)}
        >
          ${J(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${a}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Vt({tooltip:e}){const{translations:t}=c(),s=d(t,"Closed-Captions On"),n=d(t,"Closed-Captions Off");return i`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${J(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ks(){const{translations:e}=c(),t=d(e,"Enter PiP"),s=d(e,"Exit PiP");return i`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${J(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ae({tooltip:e}){const{translations:t}=c(),s=d(t,"Enter Fullscreen"),n=d(t,"Exit Fullscreen");return i`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${J(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ee({backward:e,tooltip:t}){const{translations:s,seekStep:n}=c(),a=e?"Seek Backward":"Seek Forward",l=d(s,a);return i`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${o(()=>(e?-1:1)*n())}
          aria-label=${l}
        >
          ${A(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(s,a)}
      </media-tooltip-content>
    </media-tooltip>
  `}function De(){const{translations:e}=c(),{live:t}=x(),s=d(e,"Skip To Live"),n=d(e,"LIVE");return t()?i`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function Et(){return o(()=>{const{download:e,translations:t}=c(),s=e();if(Xe(s))return null;const{source:n,title:a}=x(),l=n(),r=ve({title:a(),src:l,download:s});return r?i`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(t,"Download")}
                href=${r.url+`?download=${r.name}`}
                download=${r.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function Wt(){const{translations:e}=c();return i`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function O(){return i`<div class="vds-controls-spacer"></div>`}function Pe(e,t){return i`
    <media-menu-portal .container=${o(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Me(e,t,s,n){let a=K(t)?document.querySelector(t):t;a||(a=e==null?void 0:e.closest("dialog")),a||(a=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(s),a.append(l),S(()=>{if(!l)return;const{viewType:p}=x(),u=n();j(l,"data-view-type",p()),j(l,"data-sm",u),j(l,"data-lg",!u),j(l,"data-size",u?"sm":"lg")});const{colorScheme:r}=c();return ue(l,r),l}function Oe({placement:e,tooltip:t,portal:s}){const{textTracks:n}=y(),{viewType:a,clipStartTime:l,clipEndTime:r}=x(),{translations:p,thumbnails:u,menuPortal:v,noModal:f,menuGroup:m,smallWhen:$}=c();if(_(()=>{var Yt;const M=l(),q=r()||1/0,U=w(null);fe(n,"chapters",U.set);const W=(Yt=U())==null?void 0:Yt.cues.filter(Xt=>Xt.startTime<=q&&Xt.endTime>=M);return!(W!=null&&W.length)})())return null;const T=_(()=>f()?nt(e):$()?null:nt(e)),P=_(()=>!$()&&m()==="bottom"&&a()==="video"?26:0),k=w(!1);function G(){k.set(!0)}function B(){k.set(!1)}const E=i`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${o(T)}
      offset=${o(P)}
    >
      ${o(()=>k()?i`
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
    <media-menu class="vds-chapters-menu vds-menu" @open=${G} @close=${B}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${A("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${Pt(t)?o(t):t}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?Pe(v,E):E}
    </media-menu>
  `}function _t(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const Ht={type:"color"},Ss={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},Cs={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},As={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},Ds={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},lt={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},R=Object.keys(lt).reduce((e,t)=>({...e,[t]:w(lt[t])}),{});for(const e of Object.keys(R)){const t=localStorage.getItem(`vds-player:${Y(e)}`);K(t)&&R[e].set(t)}function Ps(){for(const e of Object.keys(R)){const t=lt[e];R[e].set(t)}}let se=!1,xt=new Set;function Ms(){const{player:e}=y();xt.add(e),H(()=>xt.delete(e)),se||(es(()=>{for(const t of ss(R)){const s=R[t],n=lt[t],a=`--media-user-${Y(t)}`,l=`vds-player:${Y(t)}`;S(()=>{var v;const r=s(),p=r===n,u=p?null:Os(e,t,r);for(const f of xt)(v=f.el)==null||v.style.setProperty(a,u);p?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),se=!0)}function Os(e,t,s){var n;switch(t){case"fontFamily":const a=s==="capitals"?"small-caps":"";return(n=e.el)==null||n.style.setProperty("--media-user-font-variant",a),Gs(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return Is(s);case"textColor":return`rgb(${_t(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return Ls(s);case"textBg":return`rgb(${_t(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${_t(s)} / var(--media-user-display-bg-opacity, 1))`}}function Is(e){return(parseInt(e)/100).toString()}function Gs(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Ls(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let Bs=0;function D({label:e="",value:t="",children:s}){if(!e)return i`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++Bs}`;return i`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?i`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function tt({label:e,children:t}){return i`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function V({label:e,icon:t,hint:s}){return i`
    <media-menu-button class="vds-menu-item">
      ${A("menu-arrow-left","vds-menu-close-icon")}
      ${t?A(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${o(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?o(s):null} </span>
      ${A("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function Ns({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:a=null}){function l(r){const{value:p,label:u}=r;return i`
      <media-radio class="vds-radio" value=${p}>
        ${A("menu-radio-check")}
        ${s?null:i`
              <span class="vds-radio-label" data-part="label">
                ${K(u)?u:o(u)}
              </span>
            `}
        ${Pt(n)?n(r):n}
      </media-radio>
    `}return i`
    <media-radio-group
      class="vds-radio-group"
      value=${K(e)?e:e?o(e):""}
      @change=${a}
    >
      ${L(t)?t.map(l):o(()=>t().map(l))}
    </media-radio-group>
  `}function Fs(e){return L(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function pt(){return i`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function mt(){return i`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function vt({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:a,isMin:l,isMax:r}){const p=e||t,u=[n?A(n,"down"):null,a,s?A(s,"up"):null];return i`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${o(()=>l()?"":null)}
      data-max=${o(()=>r()?"":null)}
    >
      ${p?i`
            <div class="vds-menu-slider-title">
              ${[e?i`<div>${e}</div>`:null,t?i`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${u}</div>
          `:u}
    </div>
  `}const Rs={...Cs,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},Kt={...As,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function Vs(){return o(()=>{const{hasCaptions:e}=x(),{translations:t}=c();return e()?i`
      <media-menu class="vds-font-menu vds-menu">
        ${V({label:()=>C(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[D({label:d(t,"Font"),children:[Es(),Ws()]}),D({label:d(t,"Text"),children:[Hs(),Qs(),Ks()]}),D({label:d(t,"Text Background"),children:[qs(),Us()]}),D({label:d(t,"Display Background"),children:[js(),zs()]}),D({children:[Zs()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Es(){return I({label:"Family",option:Ss,type:"fontFamily"})}function Ws(){return I({label:"Size",option:Rs,type:"fontSize"})}function Hs(){return I({label:"Color",option:Ht,type:"textColor"})}function Ks(){return I({label:"Opacity",option:Kt,type:"textOpacity"})}function Qs(){return I({label:"Shadow",option:Ds,type:"textShadow"})}function qs(){return I({label:"Color",option:Ht,type:"textBg"})}function Us(){return I({label:"Opacity",option:Kt,type:"textBgOpacity"})}function js(){return I({label:"Color",option:Ht,type:"displayBg"})}function zs(){return I({label:"Opacity",option:Kt,type:"displayBgOpacity"})}function Zs(){const{translations:e}=c();return i`
    <button class="vds-menu-item" role="menuitem" @click=${Ps}>
      <span class="vds-menu-item-label">${o(()=>C(e,"Reset"))}</span>
    </button>
  `}function I({label:e,option:t,type:s}){const{player:n}=y(),{translations:a}=c(),l=R[s],r=()=>C(a,e);function p(){ns(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let f=function(m){l.set(m.target.value),p()};return tt({label:o(r),children:i`
        <input
          class="vds-color-picker"
          type="color"
          .value=${o(l)}
          @input=${f}
        />
      `})}if(t.type==="slider"){let f=function(k){l.set(k.detail+"%"),p()};const{min:m,max:$,step:g,upIcon:T,downIcon:P}=t;return vt({label:o(r),value:o(l),upIcon:T,downIcon:P,isMin:()=>l()===m+"%",isMax:()=>l()===$+"%",children:i`
        <media-slider
          class="vds-slider"
          min=${m}
          max=${$}
          step=${g}
          key-step=${g}
          .value=${o(()=>parseInt(l()))}
          aria-label=${o(r)}
          @value-change=${f}
          @drag-value-change=${f}
        >
          ${pt()}${mt()}
        </media-slider>
      `})}const u=Fs(t.values),v=()=>{var $;const f=l(),m=(($=u.find(g=>g.value===f))==null?void 0:$.label)||"";return C(a,K(m)?m:m())};return i`
    <media-menu class=${`vds-${Y(s)}-menu vds-menu`}>
      ${V({label:r,hint:v})}
      <media-menu-items class="vds-menu-items">
        ${Ns({value:l,options:u,onChange({detail:f}){l.set(f),p()}})}
      </media-menu-items>
    </media-menu>
  `}function ft({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:a}){const{translations:l}=c(),r=n?localStorage.getItem(n):null,p=w(!!(r??s)),u=w(!1),v=o(ds(p)),f=d(l,e);n&&a(Dt(p)),t&&S(()=>void p.set(t()));function m(T){(T==null?void 0:T.button)!==1&&(p.set(P=>!P),n&&localStorage.setItem(n,p()?"1":""),a(p(),T),u.set(!1))}function $(T){Mt(T)&&m()}function g(T){T.button===0&&u.set(!0)}return i`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${f}
      aria-checked=${v}
      data-active=${o(()=>u()?"":null)}
      @pointerup=${m}
      @pointerdown=${g}
      @keydown=${$}
    ></div>
  `}function Ys(){return o(()=>{const{translations:e}=c();return i`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${V({label:()=>C(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:[Xs(),Js()]}),D({children:[Vs()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Xs(){const{userPrefersAnnouncements:e,translations:t}=c(),s="Announcements";return tt({label:d(t,s),children:ft({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function Js(){return o(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=c(),{viewType:n}=x();if(_(()=>n()!=="video"||s())())return null;const l="Keyboard Animations";return tt({label:d(e,l),children:ft({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function tn(){return o(()=>{const{noAudioGain:e,translations:t}=c(),{audioTracks:s,canSetAudioGain:n}=x();return _(()=>!(n()&&!e())&&s().length<=1)()?null:i`
      <media-menu class="vds-audio-menu vds-menu">
        ${V({label:()=>C(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[en(),sn()]}
        </media-menu-items>
      </media-menu>
    `})}function en(){return o(()=>{const{translations:e}=c(),{audioTracks:t}=x(),s=d(e,"Default");return _(()=>t().length<=1)()?null:D({children:i`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${V({label:()=>C(e,"Track")})}
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
      `})})}function sn(){return o(()=>{const{noAudioGain:e,translations:t}=c(),{canSetAudioGain:s}=x();if(_(()=>!s()||e())())return null;const{audioGain:a}=x();return D({label:d(t,"Boost"),value:o(()=>Math.round(((a()??1)-1)*100)+"%"),children:[vt({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:nn(),isMin:()=>((a()??1)-1)*100<=Ie(),isMax:()=>((a()??1)-1)*100===Ge()})]})})}function nn(){const{translations:e}=c(),t=d(e,"Boost"),s=Ie,n=Ge,a=an;return i`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${o(s)}
      max=${o(n)}
      step=${o(a)}
      key-step=${o(a)}
    >
      ${pt()}${mt()}
    </media-audio-gain-slider>
  `}function Ie(){const{audioGains:e}=c(),t=e();return L(t)?t[0]??0:t.min}function Ge(){const{audioGains:e}=c(),t=e();return L(t)?t[t.length-1]??300:t.max}function an(){const{audioGains:e}=c(),t=e();return L(t)?t[1]-t[0]||25:t.step}function on(){return o(()=>{const{translations:e}=c(),{hasCaptions:t}=x(),s=d(e,"Off");return t()?i`
      <media-menu class="vds-captions-menu vds-menu">
        ${V({label:()=>C(e,"Captions"),icon:"menu-captions"})}
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
    `:null})}function ln(){return o(()=>{const{translations:e}=c();return i`
      <media-menu class="vds-playback-menu vds-menu">
        ${V({label:()=>C(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:rn()}),un(),mn()]}
        </media-menu-items>
      </media-menu>
    `})}function rn(){const{remote:e}=y(),{translations:t}=c(),s="Loop";return tt({label:d(t,s),children:ft({label:s,storageKey:"vds-player::user-loop",onChange(n,a){e.userPrefersLoopChange(n,a)}})})}function un(){return o(()=>{const{translations:e}=c(),{canSetPlaybackRate:t,playbackRate:s}=x();return t()?D({label:d(e,"Speed"),value:o(()=>s()===1?C(e,"Normal"):s()+"x"),children:[vt({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:dn(),isMin:()=>s()===Le(),isMax:()=>s()===Be()})]}):null})}function Le(){const{playbackRates:e}=c(),t=e();return L(t)?t[0]??0:t.min}function Be(){const{playbackRates:e}=c(),t=e();return L(t)?t[t.length-1]??2:t.max}function cn(){const{playbackRates:e}=c(),t=e();return L(t)?t[1]-t[0]||.25:t.step}function dn(){const{translations:e}=c(),t=d(e,"Speed"),s=Le,n=Be,a=cn;return i`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${o(s)}
      max=${o(n)}
      step=${o(a)}
      key-step=${o(a)}
    >
      ${pt()}${mt()}
    </media-speed-slider>
  `}function pn(){const{remote:e,qualities:t}=y(),{autoQuality:s,canSetQuality:n,qualities:a}=x(),{translations:l}=c(),r="Auto";return _(()=>!n()||a().length<=1)()?null:tt({label:d(l,r),children:ft({label:r,checked:s,onChange(u,v){u?e.requestAutoQuality(v):e.changeQuality(t.selectedIndex,v)}})})}function mn(){return o(()=>{const{hideQualityBitrate:e,translations:t}=c(),{canSetQuality:s,qualities:n,quality:a}=x(),l=_(()=>!s()||n().length<=1),r=_(()=>cs(n()));return l()?null:D({label:d(t,"Quality"),value:o(()=>{var m,$;const p=(m=a())==null?void 0:m.height,u=e()?null:($=a())==null?void 0:$.bitrate,v=u&&u>0?`${(u/1e6).toFixed(2)} Mbps`:null,f=C(t,"Auto");return p?`${p}p${v?` (${v})`:""}`:f}),children:[vt({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:vn(),isMin:()=>r()[0]===a(),isMax:()=>r().at(-1)===a()}),pn()]})})}function vn(){const{translations:e}=c(),t=d(e,"Quality");return i`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${pt()}${mt()}
    </media-quality-slider>
  `}function Ne({placement:e,portal:t,tooltip:s}){return o(()=>{const{viewType:n}=x(),{translations:a,menuPortal:l,noModal:r,menuGroup:p,smallWhen:u}=c(),v=_(()=>r()?nt(e):u()?null:nt(e)),f=_(()=>!u()&&p()==="bottom"&&n()==="video"?26:0),m=w(!1);Ms();function $(){m.set(!0)}function g(){m.set(!1)}const T=i`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${o(v)}
        offset=${o(f)}
      >
        ${o(()=>m()?[ln(),Ys(),tn(),on()]:null)}
      </media-menu-items>
    `;return i`
      <media-menu class="vds-settings-menu vds-menu" @open=${$} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(a,"Settings")}
            >
              ${A("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${Pt(s)?o(s):s}
          >
            ${d(a,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?Pe(l,T):T}
      </media-menu>
    `})}function Qt({orientation:e,tooltip:t}){return o(()=>{const{pointer:s,muted:n,canSetVolume:a}=x();if(s()==="coarse"&&!n())return null;if(!a())return te({tooltip:t});const l=w(void 0),r=Je(l);return i`
      <div class="vds-volume" ?data-active=${o(r)} ${ct(l.set)}>
        ${te({tooltip:t})}
        <div class="vds-volume-popup">${fn({orientation:e})}</div>
      </div>
    `})}function fn({orientation:e}={}){const{translations:t}=c(),s=d(t,"Volume");return i`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${Lt(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function qt(){const e=w(void 0),t=w(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:a,disableTimeSlider:l,seekStep:r,noScrubGesture:p}=c(),u=d(n,"Seek"),v=o(l),f=o(()=>t()<a()),m=o(s);return pe(e,()=>{const $=e();$&&t.set($.clientWidth)}),i`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${u}
      key-step=${o(r)}
      ?disabled=${v}
      ?no-swipe-gesture=${o(p)}
      ${ct(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${f}>
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
  `}function $n(){return i`
    <div class="vds-time-group">
      ${o(()=>{const{duration:e}=x();return e()?[i`<media-time class="vds-time" type="current"></media-time>`,i`<div class="vds-time-divider">/</div>`,i`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function hn(){return o(()=>{const{live:e,duration:t}=x();return e()?De():t()?i`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function Fe(){return o(()=>{const{live:e}=x();return e()?De():$n()})}function Re(){return o(()=>{const{textTracks:e}=y(),{title:t,started:s}=x(),n=w(null);return fe(e,"chapters",n.set),n()&&(s()||!t())?Ve():i`<media-title class="vds-chapter-title"></media-title>`})}function Ve(){return i`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Ee extends Te{async Pf(){const t=(await he(()=>import("./vidstack-CmqqnRgc-CHPJw6F5.js"),__vite__mapDeps([0,1]))).icons,s={};for(const n of Object.keys(t))s[n]=xe({name:n,paths:t[n]});return s}}var N;let bn=(N=class extends Q{},N.props={...yt(N,N,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},N);function yn(){return[Ft(),Wt(),i`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[ee({backward:!0,tooltip:"top start"}),dt({tooltip:"top"}),ee({tooltip:"top"}),gn(),qt(),hn(),Qt({orientation:"vertical",tooltip:"top"}),Vt({tooltip:"top"}),Et(),Rt({tooltip:"top"}),_n()]}
        </media-controls-group>
      </media-controls>
    `]}function gn(){return o(()=>{let e=w(void 0),t=w(!1),s=y(),{title:n,started:a,currentTime:l,ended:r}=x(),{translations:p}=c(),u=is(e),v=()=>a()||l()>0;const f=()=>{const g=r()?"Replay":v()?"Continue":"Play";return`${C(p,g)}: ${n()}`};S(()=>{var g;u()&&document.activeElement===document.body&&((g=s.player.el)==null||g.focus())});function m(){const g=e(),T=!!g&&!u()&&g.clientWidth<g.children[0].clientWidth;g&&os(g,"vds-marquee",T),t.set(T)}function $(){return i`
        <span class="vds-title-text">
          ${o(f)}${o(()=>v()?Ve():null)}
        </span>
      `}return pe(e,m),n()?i`
          <span class="vds-title" title=${o(f)} ${ct(e.set)}>
            ${[$(),o(()=>t()&&!u()?$():null)]}
          </span>
        `:O()})}function _n(){const e="top end";return[Oe({tooltip:"top",placement:e,portal:!0}),Ne({tooltip:"top end",placement:e,portal:!0})]}const rt=class rt extends Ot(Gt,bn){constructor(){super(...arguments),this.en=w(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=y(),this.classList.add("vds-audio-layout"),this.Fn()}onConnect(){Se("audio",()=>this.isMatch),this.En()}render(){return o(this.Zm.bind(this))}Zm(){return this.isMatch?yn():null}En(){const{menuPortal:t}=c();S(()=>{if(!this.isMatch)return;const s=Me(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Nt(n):new Ee(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})}Fn(){const{pointer:t}=this.a.$state;S(()=>{t()==="coarse"&&S(this.rn.bind(this))})}rn(){if(!this.en()){st(this,"pointerdown",this.sn.bind(this),{capture:!0});return}st(this,"pointerdown",t=>t.stopPropagation()),st(window,"pointerdown",this.tn.bind(this))}sn(t){const{target:s}=t;as(s)&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}};rt.tagName="media-audio-layout",rt.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let wt=rt;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn=X(class extends Bt{constructor(){super(...arguments),this.key=F}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(fs(e),this.key=t),s}}),Z=class Z extends Q{};Z.props={...yt(Z,Z,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380};let kt=Z;function We(){return o(()=>{const e=y(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=c();if(_(()=>t()||!s())())return null;const a=w(!1),{lastKeyboardAction:l}=e.$state;S(()=>{a.set(!!l());const m=setTimeout(()=>a.set(!1),500);return()=>{a.set(!1),window.clearTimeout(m)}});const r=_(()=>{var $;const m=($=l())==null?void 0:$.action;return m&&a()?Y(m):null}),p=_(()=>`vds-kb-action${a()?"":" hidden"}`),u=_(Tn),v=_(()=>{const m=wn();return m?ls(m):null});function f(){const m=v();return m?i`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return i`
      <div class=${o(p)} data-action=${o(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${o(u)}</div>
        </div>
        ${o(()=>xn(l(),f()))}
      </div>
    `})}function Tn(){var n;const{$state:e}=y(),t=(n=e.lastKeyboardAction())==null?void 0:n.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":ne(e.volume(),s);case"volumeUp":case"volumeDown":return ne(e.volume(),s);default:return""}}function ne(e,t){return`${Math.round(e*t*100)}%`}function wn(){var s;const{$state:e}=y();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function kn(){return[Ft(),He(),$t(),We(),Wt(),i`<div class="vds-scrim"></div>`,i`
      <media-controls class="vds-controls">
        ${[Cn(),O(),i`<media-controls-group class="vds-controls-group"></media-controls-group>`,O(),i`
            <media-controls-group class="vds-controls-group">
              ${qt()}
            </media-controls-group>
          `,i`
            <media-controls-group class="vds-controls-group">
              ${[dt({tooltip:"top start"}),Qt({orientation:"horizontal",tooltip:"top"}),Fe(),Re(),Vt({tooltip:"top"}),Sn(),Rt({tooltip:"top"}),Ce({tooltip:"top"}),Et(),ks(),Ae({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Sn(){return o(()=>{const{menuGroup:e}=c();return e()==="bottom"?Ut():null})}function Cn(){return i`
    <media-controls-group class="vds-controls-group">
      ${o(()=>{const{menuGroup:e}=c();return e()==="top"?[O(),Ut()]:null})}
    </media-controls-group>
  `}function An(){return[Ft(),He(),$t(),Wt(),We(),i`<div class="vds-scrim"></div>`,i`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Rt({tooltip:"top start"}),Ce({tooltip:"bottom start"}),O(),Vt({tooltip:"bottom"}),Et(),Ut(),Qt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${O()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[O(),dt({tooltip:"top"}),O()]}
        </media-controls-group>

        ${O()}

        <media-controls-group class="vds-controls-group">
          ${[Fe(),Re(),Ae({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${qt()}
        </media-controls-group>
      </media-controls>
    `,Pn()]}function Dn(){return i`
    <div class="vds-load-container">
      ${[$t(),dt({tooltip:"top"})]}
    </div>
  `}function Pn(){return o(()=>{const{duration:e}=x();return e()===0?null:i`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function $t(){return i`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Ut(){const{menuGroup:e,smallWhen:t}=c(),s=()=>e()==="top"||t()?"bottom":"top",n=_(()=>`${s()} ${e()==="top"?"end":"center"}`),a=_(()=>`${s()} end`);return[Oe({tooltip:n,placement:a,portal:!0}),Ne({tooltip:n,placement:a,portal:!0})]}function He(){return o(()=>{const{noGestures:e}=c();return e()?null:i`
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
    `})}const ut=class ut extends Ot(Gt,kt){onSetup(){this.forwardKeepAlive=!1,this.a=y(),this.classList.add("vds-video-layout")}onConnect(){Se("video",()=>this.isMatch),this.En()}render(){return o(this.Zm.bind(this))}En(){const{menuPortal:t}=c();S(()=>{if(!this.isMatch)return;const s=Me(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Nt(n):new Ee(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})}Zm(){const{load:t}=this.a.$props,{canLoad:s,streamType:n,nativeControls:a}=this.a.$state;return!a()&&this.isMatch?t()==="play"&&!s()?Dn():n()==="unknown"?$t():this.isSmallLayout?An():kn():null}};ut.tagName="media-video-layout",ut.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let St=ut;const Ke=ce();function h(){return oe(Ke)}const Mn={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]},zt=class zt extends le{onSetup(){this.a=y(),re(Ke,{...this.$props,previewTime:w(0)})}};zt.props=Mn;let Ct=zt;function On(e,t){const{canAirPlay:s,canFullscreen:n,canPictureInPicture:a,controlsHidden:l,currentTime:r,fullscreen:p,hasCaptions:u,isAirPlayConnected:v,paused:f,pictureInPicture:m,playing:$,pointer:g,poster:T,textTrack:P,viewType:k,waiting:G}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");const B={"plyr--airplay-active":v,"plyr--airplay-supported":s,"plyr--fullscreen-active":p,"plyr--fullscreen-enabled":n,"plyr--hide-controls":l,"plyr--is-touch":()=>g()==="coarse","plyr--loading":G,"plyr--paused":f,"plyr--pip-active":m,"plyr--pip-enabled":a,"plyr--playing":$,"plyr__poster-enabled":T,"plyr--stopped":()=>f()&&r()===0,"plyr--captions-active":P,"plyr--captions-enabled":u},E=rs();for(const M of Object.keys(B))E.add(S(()=>void e.classList.toggle(M,!!B[M]())));return E.add(S(()=>{const M=`plyr--${k()}`;return e.classList.add(M),()=>e.classList.remove(M)}),S(()=>{var W;const{$provider:M}=t,q=(W=M())==null?void 0:W.type,U=`plyr--${In(q)?"html5":q}`;return e.classList.toggle(U,!!q),()=>e.classList.remove(U)})),()=>E.empty()}function In(e){return e==="audio"||e==="video"}class Gn extends Te{async Pf(){const t=(await he(()=>import("./vidstack-DXxIKXmd-Dge3KT8k.js"),__vite__mapDeps([]))).icons,s={};for(const n of Object.keys(t))s[n]=xe({name:n,paths:t[n],viewBox:"0 0 18 18"});return s}}function ht(e,t){var s;return((s=e())==null?void 0:s[t])??t}function Ln(){return Rn()}function Bn(){const e=y(),{load:t}=e.$props,{canLoad:s}=e.$state;return _(()=>t()==="play"&&!s())()?[Qe(),ae()]:[Nn(),Fn(),ae(),Vn(),ea(),sa()]}function Qe(){const e=y(),{translations:t}=h(),{title:s}=e.$state,n=o(()=>`${ht(t,"Play")}, ${s()}`);return i`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Nn(){const{controls:e}=h();return o(()=>e().includes("play-large")?Qe():null)}function Fn(){const{thumbnails:e,previewTime:t}=h();return i`
    <media-thumbnail
      .src=${o(e)}
      class="plyr__preview-scrubbing"
      time=${o(()=>t())}
    ></media-thumbnail>
  `}function ae(){const e=y(),{poster:t}=e.$state,s=o(()=>`background-image: url("${t()}");`);return i`<div class="plyr__poster" style=${s}></div>`}function Rn(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=h(),s=o(()=>t().filter(n=>!e.has(n)).map(qe));return i`<div class="plyr__controls">${s}</div>`}function Vn(){const{controls:e}=h(),t=o(()=>e().map(qe));return i`<div class="plyr__controls">${t}</div>`}function qe(e){switch(e){case"airplay":return En();case"captions":return Wn();case"current-time":return Jn();case"download":return ta();case"duration":return Ue();case"fast-forward":return zn();case"fullscreen":return Hn();case"mute":case"volume":case"mute+volume":return Yn(e);case"pip":return Qn();case"play":return qn();case"progress":return Zn();case"restart":return Un();case"rewind":return jn();case"settings":return na();default:return null}}function En(){const{translations:e}=h();return i`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${b(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function Wn(){const{translations:e}=h(),t=b(e,"Disable captions"),s=b(e,"Enable captions");return i`
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
  `}function Hn(){const{translations:e}=h(),t=b(e,"Enter Fullscreen"),s=b(e,"Exit Fullscreen");return i`
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
  `}function Kn(){const{translations:e}=h(),t=b(e,"Mute"),s=b(e,"Unmute");return i`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Qn(){const{translations:e}=h(),t=b(e,"Enter PiP"),s=b(e,"Exit PiP");return i`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function qn(){const{translations:e}=h(),t=b(e,"Play"),s=b(e,"Pause");return i`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function Un(){const{translations:e}=h(),{remote:t}=y(),s=b(e,"Restart");function n(a){$e(a)&&!Mt(a)||t.seek(0,a)}return i`
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
  `}function jn(){const{translations:e,seekTime:t}=h(),s=o(()=>`${ht(e,"Rewind")} ${t()}s`),n=o(()=>-1*t());return i`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function zn(){const{translations:e,seekTime:t}=h(),s=o(()=>`${ht(e,"Forward")} ${t()}s`),n=o(t);return i`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function Zn(){let e=y(),{duration:t,viewType:s}=e.$state,{translations:n,markers:a,thumbnails:l,seekTime:r,previewTime:p}=h(),u=b(n,"Seek"),v=w(null),f=o(()=>{const k=v();return k?i`<span class="plyr__progress__marker-label">${be(k.label)}<br /></span>`:null});function m(k){p.set(k.detail)}function $(){v.set(this)}function g(){v.set(null)}function T(){const k=l(),G=o(()=>s()==="audio");return k?i`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${G}>
            <media-slider-thumbnail .src=${k} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${f}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:i`
          <span class="plyr__tooltip">
            ${f}
            <media-slider-value></media-slider-value>
          </span>
        `}function P(){var G;const k=t();return Number.isFinite(k)?(G=a())==null?void 0:G.map(B=>i`
        <span
          class="plyr__progress__marker"
          @mouseenter=${$.bind(B)}
          @mouseleave=${g}
          style=${`left: ${B.time/k*100}%;`}
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
          ${o(T)}${o(P)}
        </media-time-slider>
      </div>
    </div>
  `}function Yn(e){return o(()=>{const t=e==="mute"||e==="mute+volume",s=e==="volume"||e==="mute+volume";return i`
      <div class="plyr__controls__item plyr__volume">
        ${[t?Kn():null,s?Xn():null]}
      </div>
    `})}function Xn(){const{translations:e}=h(),t=b(e,"Volume");return i`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function Jn(){const e=y(),{translations:t,invertTime:s,toggleTime:n,displayDuration:a}=h(),l=w(Dt(s));function r(u){!n()||a()||$e(u)&&!Mt(u)||l.set(v=>!v)}function p(){return o(()=>a()?Ue():null)}return o(()=>{const{streamType:u}=e.$state,v=b(t,"LIVE"),f=b(t,"Current time"),m=o(()=>!a()&&l());return u()==="live"||u()==="ll-live"?i`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${v}</span>
          </media-live-button>
        `:i`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${f}
            ?remainder=${m}
            @pointerup=${r}
            @keydown=${r}
          ></media-time>
          ${p()}
        `})}function Ue(){const{translations:e}=h(),t=b(e,"Duration");return i`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function ta(){return o(()=>{const e=y(),{translations:t,download:s}=h(),{title:n,source:a}=e.$state,l=a(),r=s(),p=ve({title:n(),src:l,download:r}),u=b(t,"Download");return p?i`
          <a
            class="plyr__controls__item plyr__control"
            href=${p.url+`?download=${p.name}`}
            download=${p.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${u}</span>
          </a>
        `:null})}function ea(){return o(()=>{const{clickToPlay:e,clickToFullscreen:t}=h();return[e()?i`
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
          `:null]})}function sa(){const e=y(),t=w(void 0),s=o(()=>{var n;return be((n=t())==null?void 0:n.text)});return S(()=>{const n=e.$state.textTrack();if(!n)return;function a(){t.set(n==null?void 0:n.activeCues[0])}return a(),st(n,"cue-change",a)}),i`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function na(){const{translations:e}=h(),t=b(e,"Settings");return i`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[ia(),ua(),da(),la()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function bt({label:e,children:t}){const s=w(!1);return i`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${aa({label:e,open:s})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function aa({open:e,label:t}){const{translations:s}=h(),n=o(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function a(){const l=b(s,"Go back to previous menu");return o(()=>e()?i`<span class="plyr__sr-only">${l}</span>`:null)}return i`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${ma(e)}>
        ${b(s,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${a()}
    </media-menu-button>
  `}function ia(){return bt({label:"Audio",children:oa()})}function oa(){const{translations:e}=h();return i`
    <media-audio-radio-group empty-label=${b(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function la(){return bt({label:"Speed",children:ra()})}function ra(){const{translations:e,speed:t}=h();return i`
    <media-speed-radio-group .rates=${t} normal-label=${b(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function ua(){return bt({label:"Captions",children:ca()})}function ca(){const{translations:e}=h();return i`
    <media-captions-radio-group off-label=${b(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function da(){return bt({label:"Quality",children:pa()})}function pa(){const{translations:e}=h();return i`
    <media-quality-radio-group auto-label=${b(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function ma(e){return o(()=>e()?"true":"false")}function b(e,t){return o(()=>ht(e,t))}const Zt=class Zt extends Ot(Gt,Ct){onSetup(){this.forwardKeepAlive=!1,this.a=y()}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","plyr"),H(()=>{var s;return(s=this.a.player.el)==null?void 0:s.removeAttribute("data-layout")}),On(this,this.a),S(()=>{this.$props.customIcons()?new Nt([this]).connect():new Gn([this]).connect()})}render(){return o(this.Zm.bind(this))}Zm(){const{viewType:t}=this.a.$state;return t()==="audio"?Ln():t()==="video"?Bn():null}};Zt.tagName="media-plyr-layout";let At=Zt;It(wt);It(St);It(At);
