import{c,r as m}from"./index-BGAObx-X.js";import{F as l}from"./activity-Bbi6NIpG.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],T=c("send",d);function f(a){return[...a].sort((t,e)=>{var i,u;const n=((i=t.lastRun)==null?void 0:i.status)==="failed"?1:0,s=((u=e.lastRun)==null?void 0:u.status)==="failed"?1:0;if(n!==s)return s-n;const o=t.lastRun?new Date(t.lastRun.timestamp).getTime():0,r=e.lastRun?new Date(e.lastRun.timestamp).getTime():0;return o!==r?r-o:t.name.localeCompare(e.name)})}function g(){return{agents:m.useMemo(()=>f(l),[])}}export{T as S,g as u};
