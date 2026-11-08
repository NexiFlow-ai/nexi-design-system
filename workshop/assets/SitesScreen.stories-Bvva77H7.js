import{m as x,F as v,a as S,n as d}from"./scene-BIkkuSa8.js";import{ak as q,r as j,j as t,S as T,V as L,ac as $,L as O,D as V,a as z,I as A,m as _,n as c}from"./iframe-C_4ax-Jm.js";import{a as C}from"./format-CwKZ7-7k.js";import{S as K}from"./SiteTree-Coz_hSMl.js";import{S as D}from"./SourceChip-ME9pM3wu.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./preload-helper-PPVm8Dsz.js";const I={running:"ok",idle:"neutral",down:"danger",unknown:"muted"};function E({view:a,initialTab:F="tree",initialSelected:B=null}){const{t:e}=q(),[n,N]=j.useState(F),[k,b]=j.useState(B),o=a.state==="ready"?a.data:null,r=o?.work_centers.find(s=>s.id===k),R=[{key:"tree",label:e("factory.sites.tree"),count:o?.sites.length},{key:"centers",label:e("factory.sites.workCenters"),count:o?.work_centers.length}],W=[{key:"code",header:e("factory.field.code"),width:"110px",render:s=>t.jsx("span",{className:"nexus-factory-code",children:s.code})},{key:"name",header:e("factory.field.workCenter"),render:s=>s.name},{key:"site",header:e("factory.field.site"),width:"160px",render:s=>s.site_name},{key:"area",header:e("factory.field.area"),width:"160px",render:s=>s.area_name??t.jsx("span",{className:"nexus-factory-muted",children:"—"})},{key:"status",header:e("factory.field.state"),width:"200px",render:s=>t.jsxs("span",{"data-testid":`wc-status-${s.id}`,children:[t.jsx(T,{tone:I[s.status],size:"sm",children:e(`factory.workCenter.${s.status}`)}),s.status_observed_at?t.jsxs("span",{className:"nexus-factory-muted",children:[" · ",e("factory.sites.recorded",{age:C(s.status_observed_at,e)})]}):null]})},{key:"source",header:e("factory.field.source"),width:"190px",render:s=>t.jsx(D,{source:s.source,testId:`source-${s.id}`})}];return t.jsxs("div",{className:"nexus-cc-split","data-inspector":r?"open":"closed",children:[t.jsx(L,{layout:"dense",width:"wide",title:e("factory.nav.sites"),meta:o?t.jsx(z,{children:e("factory.count.n",{n:String(o.work_centers.length)})}):void 0,testId:"sites-page",children:t.jsx("div",{className:"nexus-factory-split-main",children:t.jsx($,{result:a,empty:{title:e("factory.sites.emptyTitle"),body:e("factory.sites.emptyBody")},deniedBody:e("factory.state.denied.body"),children:s=>t.jsxs(t.Fragment,{children:[t.jsx(O,{tabs:R,current:n,onChange:i=>N(i),label:e("factory.sites.views"),id:"sites",layout:"page"}),t.jsxs("div",{id:`sites-panel-${n}`,role:"tabpanel","aria-labelledby":`sites-tab-${n}`,className:"nexus-factory-stream-body",children:[n==="tree"?t.jsx(K,{sites:s.sites,testId:"sites-tree"}):null,n==="centers"?t.jsx(V,{rows:s.work_centers,columns:W,rowKey:i=>i.id,caption:e("factory.sites.workCenters"),selected:k,onOpen:i=>b(i.id),testId:"work-centers-table",empty:{title:e("factory.sites.emptyTitle")}}):null]})]})})})}),r?t.jsxs(A,{kind:e("factory.field.workCenter"),title:r.name,subtitle:t.jsx(D,{source:r.source}),onClose:()=>b(null),testId:"work-center-inspector",children:[t.jsxs(_,{title:e("factory.product.identity"),idiom:"rule",children:[t.jsx(c,{label:e("factory.field.code"),children:r.code}),t.jsx(c,{label:e("factory.field.site"),children:r.site_name}),t.jsx(c,{label:e("factory.field.area"),children:r.area_name??"—"})]}),t.jsxs(_,{title:e("factory.field.state"),idiom:"rule",children:[t.jsx(c,{label:e("factory.field.state"),children:t.jsx(T,{tone:I[r.status],size:"sm",children:e(`factory.workCenter.${r.status}`)})}),t.jsx(c,{label:e("factory.sites.recordedLabel"),children:r.status_observed_at?C(r.status_observed_at,e):e("factory.sites.neverRecorded")})]})]}):null]})}E.__docgenInfo={description:`Sites & work centers ( · ): the plant as the owner holds it — the **tree** (DS-6704: site › area ›
work center with the recorded status in words; a status nobody recorded reads *unknown*, never a guess, )
and the **work centers** as a list (code · name · site · area · status *as recorded n ago* · source). The row opens
the Inspector.  records the status from the edge; until then a person does, or the Import door.`,methods:[],displayName:"SitesScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"SitesView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},initialTab:{required:!1,tsType:{name:"union",raw:'"tree" | "centers"',elements:[{name:"literal",value:'"tree"'},{name:"literal",value:'"centers"'}]},description:"",defaultValue:{value:'"tree"',computed:!1}},initialSelected:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const Y={title:"Apps/NexFactory/Sites",component:E,parameters:{ds:"DS-6704",layout:"fullscreen",workbench:{ns:"factory",path:"/factory/sites"},docs:{description:{component:`Sites & work centers (DS-6704 the tree · DS-7001 the list): the plant as the owner holds it; a status nobody recorded
reads *unknown*, never a guess ().`}}},args:{}},l={name:"The plant tree (DS-6704)",args:{view:x(v(S("olena")))}},u={name:"Work centers · the list · the Test cell unknown",args:{view:x(v(S("olena"))),initialTab:"centers"},play:async({canvasElement:a})=>{if(!a.querySelector('[data-testid="wc-status-wc_test"]')?.textContent?.includes("unknown"))throw new globalThis.Error("the Test cell has no recorded status — unknown, never a guess")}},m={name:"Row selected · the Inspector",args:{view:x(v(S("olena"))),initialTab:"centers",initialSelected:"wc_airframe_a"}},p={name:"Build mode (native)",args:{view:x(v(S("olena","native")))}},y={args:{view:d("empty")}},h={args:{view:d("loading")}},f={args:{view:d("error")}},w={args:{view:d("denied")}},g={args:{view:d("offline")}},Z=["Tree","WorkCenters","WithInspector","Build","Empty","Loading","Error","Denied","Offline"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "The plant tree (DS-6704)",
  args: {
    view: ready(records.sites(as("olena")))
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Work centers · the list · the Test cell unknown",
  args: {
    view: ready(records.sites(as("olena"))),
    initialTab: "centers"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="wc-status-wc_test"]')?.textContent?.includes("unknown")) throw new globalThis.Error("the Test cell has no recorded status — unknown, never a guess");
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Row selected · the Inspector",
  args: {
    view: ready(records.sites(as("olena"))),
    initialTab: "centers",
    initialSelected: "wc_airframe_a"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Build mode (native)",
  args: {
    view: ready(records.sites(as("olena", "native")))
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...g.parameters?.docs?.source}}};export{p as Build,w as Denied,y as Empty,f as Error,h as Loading,g as Offline,l as Tree,m as WithInspector,u as WorkCenters,Z as __namedExportsOrder,Y as default};
