import{ak as V,r as B,j as a,v as $,a as ae,h as M,B as K,w as Y}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */const ne=Date.UTC(2024,0,1);function U(e,r){return new Date(ne+(e%7+7)%7*864e5).toLocaleDateString(r,{weekday:"long",timeZone:"UTC"})}function te(e){const[r,h]=e.time.split(":"),o=String(Number(r)),t=String(Number(h));switch(e.cadence){case"daily":return`${t} ${o} * * *`;case"weekdays":return`${t} ${o} * * 1-5`;case"weekly":return`${t} ${o} * * ${((e.weekday??0)+1)%7}`;case"monthly":return`${t} ${o} ${e.day_of_month??1} * *`;default:return e.cron??""}}function oe(e){return e.kind==="custom"?{cadence:"cron",time:e.time,timezone:e.tz,cron:e.cron}:{cadence:e.kind,time:e.time,timezone:e.tz,...e.kind==="weekly"?{weekday:e.weekday??0}:{},...e.kind==="monthly"?{day_of_month:e.dayOfMonth??1}:{}}}const re=["daily","weekdays","weekly","monthly","custom"],se=[0,1,2,3,4,5,6],ie=Array.from({length:28},(e,r)=>r+1);function H({view:e,onAction:r,onConfirm:h,testId:o="automation-card"}){const{t,locale:p}=V(),c=B.useId(),u=`${c}-title`,m=`${c}-review`,[W,Z]=B.useState(e.face==="reviewing"),[d,A]=B.useState(e.schedule),G=n=>A(l=>({...l,weekday:n,day:U(n,p)})),J=n=>A(l=>({...l,dayOfMonth:n})),[q,L]=B.useState(e.tells),Q=e.role==="builder",D=n=>()=>r?.(n),F=e.face==="proposed"||e.face==="reviewing",X=e.face==="unexpressible"||e.face==="nothing_to_use",I=n=>`${n.kind==="daily"?t("automation.schedule.daily",{time:n.time}):n.kind==="weekdays"?t("automation.schedule.weekdays",{time:n.time}):n.kind==="weekly"?t("automation.schedule.weekly",{day:n.day??"",time:n.time}):n.kind==="monthly"?t("automation.schedule.monthly",{day:String(n.dayOfMonth??1),time:n.time}):t("automation.schedule.custom",{time:n.time})} · ${n.tz}`,ee=n=>n.me&&n.everyone?t("automation.tells.both",{project:e.projectName}):n.everyone?t("automation.tells.everyone",{project:e.projectName}):t("automation.tells.me"),z=ce(e,t);return a.jsxs("section",{className:"nexus-flow-turn nexus-turn-card nexus-automation-card",role:"region","aria-labelledby":u,"data-testid":o,"data-face":e.face,"data-role":e.role,"data-offline":e.offline?"true":void 0,"data-run-id":e.messageId,children:[a.jsx("div",{className:"nexus-live-head nexus-turn-head",children:a.jsx("strong",{id:u,className:"nexus-flow-turn-name","data-testid":`${o}-title`,children:t("automation.card.title")})}),a.jsxs("dl",{className:"nexus-automation-lines","data-testid":`${o}-lines`,children:[a.jsxs("div",{className:"nexus-automation-line","data-line":"what",children:[a.jsx("dt",{className:"nexus-sr-only",children:t("automation.card.what")}),a.jsx("dd",{className:"nexus-turn-line",children:e.what})]}),e.face==="unexpressible"?null:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"nexus-automation-line","data-line":"when",children:[a.jsx("dt",{children:t("automation.card.when")}),a.jsx("dd",{className:"nexus-turn-line","data-testid":`${o}-when`,children:I(d)})]}),a.jsxs("div",{className:"nexus-automation-line","data-line":"using",children:[a.jsx("dt",{children:t("automation.card.using")}),a.jsx("dd",{className:"nexus-turn-line","data-testid":`${o}-using`,children:e.face==="nothing_to_use"?a.jsxs(a.Fragment,{children:[t("automation.nothing_to_use")," ",a.jsxs($,{tone:"quiet",href:"#add-tool",onClick:D("add_tool"),"data-testid":`${o}-action-add_tool`,children:[t("automation.card.add_tool")," →"]})]}):a.jsxs(a.Fragment,{children:[e.using.name,a.jsxs("span",{className:"nexus-live-meta",children:[" · ",e.using.connected?t("automation.card.connected"):t("automation.card.not_connected")]}),e.using.connected?null:a.jsxs(a.Fragment,{children:[" ",a.jsxs($,{tone:"quiet",href:"#connect",onClick:D("connect"),"data-testid":`${o}-action-connect`,children:[t("automation.card.connect",{name:e.using.name})," →"]})]})]})})]}),a.jsxs("div",{className:"nexus-automation-line","data-line":"tells",children:[a.jsx("dt",{children:t("automation.card.tells")}),a.jsx("dd",{className:"nexus-turn-line","data-testid":`${o}-tells`,children:ee(q)})]})]})]}),e.face==="unexpressible"?a.jsx("p",{className:"nexus-turn-line",role:"status","data-testid":`${o}-unexpressible`,children:t("automation.unexpressible")}):null,z?a.jsx("p",{className:"nexus-automation-face",role:"status","data-testid":`${o}-face`,children:a.jsx(ae,{tone:z.tone,children:z.text})}):null,F&&W?a.jsxs("div",{id:m,className:"nexus-automation-review","data-testid":`${o}-review`,children:[a.jsxs("div",{className:"nexus-automation-review-row",children:[a.jsx("label",{htmlFor:`${c}-runs`,className:"nexus-label",children:t("automation.review.runs")}),a.jsx(M,{id:`${c}-runs`,label:t("automation.review.runs"),value:d.kind,onChange:n=>A(l=>({...l,kind:n,...n==="weekly"&&l.day===void 0?{day:U(l.weekday??0,p)}:{}})),options:re.map(n=>({value:n,label:t(`automation.review.kind.${n}`)})),size:"toolbar",testId:`${o}-runs`}),d.kind==="weekly"?a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:`${c}-weekday`,className:"nexus-label",children:t("automation.review.on")}),a.jsx(M,{id:`${c}-weekday`,label:t("automation.review.weekday"),value:String(d.weekday??0),onChange:n=>G(Number(n)),options:se.map(n=>({value:String(n),label:U(n,p)})),size:"toolbar",testId:`${o}-weekday`})]}):null,d.kind==="monthly"?a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:`${c}-day`,className:"nexus-label",children:t("automation.review.on_day")}),a.jsx(M,{id:`${c}-day`,label:t("automation.review.day_of_month"),value:String(d.dayOfMonth??1),onChange:n=>J(Number(n)),options:ie.map(n=>({value:String(n),label:String(n)})),size:"toolbar",testId:`${o}-day`})]}):null,a.jsx("label",{htmlFor:`${c}-time`,className:"nexus-label",children:t("automation.review.at")}),a.jsx("input",{id:`${c}-time`,type:"time",className:"nexus-input nexus-automation-time",value:d.time,onChange:n=>A(l=>({...l,time:n.target.value})),"data-testid":`${o}-time`})]}),a.jsxs("details",{className:"nexus-automation-technical","data-testid":`${o}-technical`,children:[a.jsx("summary",{children:t("automation.review.technical")}),a.jsxs("p",{className:"nexus-turn-line nexus-live-meta",children:["cron ",a.jsx("code",{children:d.kind==="custom"?d.cron:te(oe(d))})]})]}),a.jsxs("fieldset",{className:"nexus-automation-tells",children:[a.jsx("legend",{className:"nexus-label",children:t("automation.card.tells")}),a.jsxs("label",{className:"nexus-check-row",children:[a.jsx("input",{type:"checkbox",checked:q.me,onChange:n=>L(l=>({...l,me:n.target.checked})),"data-testid":`${o}-tells-me`}),a.jsx("span",{children:t("automation.review.tells_me")})]}),a.jsxs("label",{className:"nexus-check-row",children:[a.jsx("input",{type:"checkbox",checked:q.everyone,onChange:n=>L(l=>({...l,everyone:n.target.checked})),"data-testid":`${o}-tells-everyone`}),a.jsx("span",{children:t("automation.review.tells_everyone",{project:e.projectName})})]})]}),e.offline?a.jsx("p",{className:"nexus-turn-line nexus-live-meta",id:`${c}-offline`,"data-testid":`${o}-offline`,children:t("automation.offline")}):null,a.jsxs("div",{className:"nexus-automation-confirm",children:[a.jsx(K,{size:"toolbar",onClick:D("not_now"),"data-testid":`${o}-action-not_now`,children:t("automation.card.not_now")}),a.jsx(K,{size:"toolbar",variant:"primary","aria-disabled":e.offline||void 0,"aria-describedby":e.offline?`${c}-offline`:void 0,onClick:e.offline?void 0:()=>{h?.({schedule:d,tells:q}),r?.("confirm")},"data-testid":`${o}-action-confirm`,children:t(Q?"automation.card.confirm_enable":"automation.card.confirm")})]})]}):null,e.receipts?.length?a.jsx("ul",{className:"nexus-automation-receipts","aria-label":t("automation.receipts"),"data-testid":`${o}-receipts`,children:e.receipts.map(n=>a.jsxs("li",{className:"nexus-turn-line nexus-automation-receipt","data-testid":`${o}-receipt-${n.id}`,children:[a.jsx("span",{className:"nexus-live-meta",children:n.time}),a.jsx("span",{className:"nexus-turn-actions-sep","aria-hidden":!0,children:"·"}),a.jsx("span",{children:n.summary}),n.href?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"nexus-turn-actions-sep","aria-hidden":!0,children:"·"}),a.jsx("a",{className:"nexus-turn-link",href:n.href,"data-testid":`${o}-receipt-${n.id}-view`,children:t("automation.receipt.view")})]}):null]},n.id))}):null,F&&!W?a.jsxs(Y,{className:"is-flush",label:t("automation.card.title"),testId:`${o}-actions`,children:[a.jsx($,{tone:"quiet","aria-expanded":!1,"aria-controls":m,onClick:()=>{Z(!0),r?.("review")},"data-testid":`${o}-action-review`,children:t("automation.card.review")}),a.jsx($,{tone:"quiet",onClick:D("not_now"),"data-testid":`${o}-action-not_now`,children:t("automation.card.not_now")})]}):null,!F&&!X&&e.face!=="template_unavailable"?a.jsx(le,{view:e,testId:o,onAction:r}):null]})}function ce(e,r){switch(e.face){case"draft":case"needs_connection":return{text:r("automation.face.draft"),tone:"muted"};case"awaiting":return{text:r("automation.face.awaiting"),tone:"warn"};case"enabled":return{text:r("automation.face.enabled",{when:e.nextRun??""}),tone:"ok"};case"paused":return{text:r("automation.face.paused"),tone:"muted"};case"paused_archived":return{text:r("automation.face.paused_archived",{who:e.archivedBy??""}),tone:"muted"};case"needs_changes":return{text:r("automation.face.changes",{note:e.note??""}),tone:"warn"};case"template_unavailable":return{text:r("automation.face.unavailable"),tone:"muted"};default:return null}}function le({view:e,testId:r,onAction:h}){const{t:o}=V(),t=e.role==="builder",p=e.face==="awaiting"||e.face==="needs_changes",c=e.face==="paused_archived",u=[];return t&&e.face==="enabled"&&u.push({id:"pause",label:o("automation.action.pause")}),c||u.push({id:"change",label:o("automation.action.change")}),t&&u.push({id:"open_configure",label:o("automation.action.open_configure")}),!t&&p&&u.push({id:"stop_asking",label:o("automation.action.stop_asking")}),u.length?a.jsx(Y,{className:"is-flush",label:o("automation.card.title"),testId:`${r}-actions`,children:u.map(m=>a.jsx($,{tone:"quiet",onClick:()=>h?.(m.id),"data-testid":`${r}-action-${m.id}`,children:m.label},m.id))}):null}H.__docgenInfo={description:` S0 (DS-5019 proposed ·  · draft §15.4 ·  · ): **the one automation card** — *Set up an
automation?* with its four lines (what · When · Using · Tells), *Review setup · Not now*, the disclosure with the
schedule as a \`Select\`, the time, *Technical* (the cron), the recipients, and *Confirm* (*Confirm and enable* for a
builder). After the word it is the summary everyone sees: the face as a status chip (Draft · Awaiting a builder ·
Enabled · Paused · Needs changes), the run receipts beneath, the doors by role. An unexpressible schedule is said
and nothing is drafted; a missing connection is named with its door; Auto never enables ( kept).
Presentational: a view model in, actions out.`,methods:[],displayName:"AutomationCard",props:{view:{required:!0,tsType:{name:"AutomationCardView"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: AutomationCardAction) => void",signature:{arguments:[{type:{name:"union",raw:'"review" | "not_now" | "confirm" | "change" | "pause" | "open_configure" | "stop_asking" | "connect" | "add_tool"',elements:[{name:"literal",value:'"review"'},{name:"literal",value:'"not_now"'},{name:"literal",value:'"confirm"'},{name:"literal",value:'"change"'},{name:"literal",value:'"pause"'},{name:"literal",value:'"open_configure"'},{name:"literal",value:'"stop_asking"'},{name:"literal",value:'"connect"'},{name:"literal",value:'"add_tool"'}]},name:"action"}],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: AutomationConfirmPayload) => void",signature:{arguments:[{type:{name:"AutomationConfirmPayload"},name:"payload"}],return:{name:"void"}}},description:"S4: *Confirm* with the schedule as reviewed and the recipients — the wire payload's source"},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"automation-card"',computed:!1}}}};const i={what:"Checks active shipments and reports ETA changes",schedule:{kind:"daily",time:"07:00",tz:"Europe/Kyiv",cron:"0 7 * * *",day:"Monday"},using:{name:"Shipments (1C)",connected:!0},tells:{me:!0,everyone:!1},role:"builder",projectName:"Operations"},de=[{id:"r1",time:"07:02",summary:"3 changes",href:"#run-r1"},{id:"r2",time:"yesterday 07:01",summary:"no changes",href:"#run-r2"},{id:"r3",time:"Fri 07:03",summary:"1 change",href:"#run-r3"}];function ue(e){switch(e){case"unexpressible":return{...i,face:"unexpressible",what:"Checks active shipments every full moon"};case"nothing-to-use":return{...i,face:"nothing_to_use",what:"Checks the warehouse temperature",using:{name:"—",connected:!0}};case"monthly":return{...i,face:"proposed",schedule:{kind:"monthly",time:"09:00",tz:"Europe/Kyiv",cron:"0 9 1 * *",dayOfMonth:1}};case"reviewing":return{...i,face:"reviewing",role:"member"};case"reviewing-weekly":return{...i,face:"reviewing",schedule:{kind:"weekly",time:"09:00",tz:"Europe/Kyiv",cron:"0 9 * * 1",day:"Monday",weekday:0}};case"draft":return{...i,face:"draft"};case"needs-connection":return{...i,face:"needs_connection",using:{name:"Shipments (1C)",connected:!1}};case"awaiting":return{...i,face:"awaiting",role:"member"};case"enabled":return{...i,face:"enabled",nextRun:"tomorrow 07:00"};case"with-receipts":return{...i,face:"enabled",nextRun:"tomorrow 07:00",receipts:de,tells:{me:!0,everyone:!0}};case"paused":return{...i,face:"paused"};case"paused-archived":return{...i,face:"paused_archived",archivedBy:"Taras M.",role:"member"};case"needs-changes":return{...i,face:"needs_changes",note:"weekdays only",role:"member"};case"template-unavailable":return{...i,face:"template_unavailable"};case"offline":return{...i,face:"reviewing",offline:!0};default:return{...i,face:"proposed"}}}function me({face:e="proposed",narrow:r=!1}){return a.jsx("div",{className:"nexus-automation-s0-frame",style:r?{maxWidth:320}:void 0,children:a.jsx(H,{view:ue(e),onAction:()=>{}})})}const ye={title:"Conversation/Automation card",component:me,parameters:{ds:"DS-5019",layout:"padded"}},s=(e,r)=>!!e.querySelector(r),he=e=>{const r=e.querySelector('[role="region"][aria-labelledby]');if(!r)throw new globalThis.Error("the card is not a labelled region");return r},f={name:"proposed",args:{face:"proposed"},play:async({canvasElement:e})=>{if(he(e),e.querySelector('[data-testid="automation-card-action-review"]')?.getAttribute("aria-expanded")!=="false")throw new globalThis.Error("Review setup is not a closed disclosure");if(!s(e,'[data-testid="automation-card-action-not_now"]'))throw new globalThis.Error("no Not now")}},g={name:"unexpressible",args:{face:"unexpressible"},play:async({canvasElement:e})=>{if(!s(e,'[data-testid="automation-card-unexpressible"]'))throw new globalThis.Error("no ask for a time");if(s(e,'[data-testid="automation-card-action-review"]')||s(e,'[data-testid="automation-card-action-confirm"]'))throw new globalThis.Error("a draft door on an unexpressible schedule")}},w={name:"nothing-to-use",args:{face:"nothing-to-use"},play:async({canvasElement:e})=>{if(!s(e,'[data-testid="automation-card-action-add_tool"]'))throw new globalThis.Error("no Add a tool door");if(s(e,'[data-testid="automation-card-action-review"]')||s(e,'[data-testid="automation-card-action-confirm"]'))throw new globalThis.Error("a draft door with nothing to use")}},y={name:"monthly",args:{face:"monthly"},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="automation-card-when"]')?.textContent?.includes("month"))throw new globalThis.Error("the monthly schedule is not in words")}},b={name:"reviewing",args:{face:"reviewing"},play:async({canvasElement:e})=>{if(!s(e,'[data-testid="automation-card-runs"] [role="combobox"]'))throw new globalThis.Error("no schedule Select");if(!s(e,'input[type="time"]'))throw new globalThis.Error("no time field");if(!s(e,'[data-testid="automation-card-technical"]'))throw new globalThis.Error("no Technical disclosure");if(!s(e,'[data-testid="automation-card-action-confirm"]'))throw new globalThis.Error("no Confirm")}},x={name:"reviewing-weekly",args:{face:"reviewing-weekly"},play:async({canvasElement:e})=>{if(!s(e,'[data-testid="automation-card-weekday"] [role="combobox"]'))throw new globalThis.Error("no weekday Select");if(s(e,'[data-testid="automation-card-day"]'))throw new globalThis.Error("a day-of-month control on a weekly schedule");const r=e.querySelector('[data-testid="automation-card-technical"] > summary');if(!r||r.classList.contains("nexus-turn-link"))throw new globalThis.Error("Technical is not a disclosure")}},v={name:"draft",args:{face:"draft"}},k={name:"needs-connection",args:{face:"needs-connection"},play:async({canvasElement:e})=>{if(!s(e,'[data-testid="automation-card-action-connect"]'))throw new globalThis.Error("no Connect door")}},E={name:"awaiting",args:{face:"awaiting"},play:async({canvasElement:e})=>{if(!s(e,'[data-testid="automation-card-action-stop_asking"]'))throw new globalThis.Error("no Stop asking for a member");if(s(e,'[data-testid="automation-card-action-open_configure"]'))throw new globalThis.Error("Open in Configure for a member")}},j={name:"enabled",args:{face:"enabled"},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="automation-card-face"]')?.getAttribute("role")!=="status")throw new globalThis.Error("the face is not a status");if(!s(e,'[data-testid="automation-card-action-pause"]'))throw new globalThis.Error("no Pause for a builder")}},T={name:"with-receipts",args:{face:"with-receipts"},play:async({canvasElement:e})=>{if(e.querySelectorAll('[data-testid="automation-card-receipts"] li').length!==3)throw new globalThis.Error("not three receipts")}},O={name:"paused",args:{face:"paused"}},S={name:"paused-archived",args:{face:"paused-archived"}},_={name:"needs-changes",args:{face:"needs-changes"},play:async({canvasElement:e})=>{if(!s(e,'[data-testid="automation-card-action-change"]'))throw new globalThis.Error("no Change")}},N={name:"template-unavailable",args:{face:"template-unavailable"},play:async({canvasElement:e})=>{if(s(e,'[data-testid="automation-card-actions"]'))throw new globalThis.Error("a door on an unavailable template")}},C={name:"offline",args:{face:"offline"},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="automation-card-action-confirm"]')?.getAttribute("aria-disabled")!=="true")throw new globalThis.Error("Confirm is not aria-disabled offline");if(!s(e,'[data-testid="automation-card-offline"]'))throw new globalThis.Error("no reason line")}},R={name:"uk",args:{face:"reviewing"},globals:{locale:"uk"}},P={name:"narrow",args:{face:"with-receipts",narrow:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},be=["Proposed","Unexpressible","NothingToUse","Monthly","Reviewing","ReviewingWeekly","Draft","NeedsConnection","Awaiting","Enabled","WithReceipts","Paused","PausedArchived","NeedsChanges","TemplateUnavailable","Offline","Uk","Narrow"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "proposed",
  args: {
    face: "proposed"
  },
  play: async ({
    canvasElement
  }) => {
    region(canvasElement);
    const review = canvasElement.querySelector('[data-testid="automation-card-action-review"]');
    if (review?.getAttribute("aria-expanded") !== "false") throw new globalThis.Error("Review setup is not a closed disclosure");
    if (!has(canvasElement, '[data-testid="automation-card-action-not_now"]')) throw new globalThis.Error("no Not now");
  }
}`,...f.parameters?.docs?.source},description:{story:"the four lines, *Review setup · Not now*",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "unexpressible",
  args: {
    face: "unexpressible"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="automation-card-unexpressible"]')) throw new globalThis.Error("no ask for a time");
    if (has(canvasElement, '[data-testid="automation-card-action-review"]') || has(canvasElement, '[data-testid="automation-card-action-confirm"]')) throw new globalThis.Error("a draft door on an unexpressible schedule");
  }
}`,...g.parameters?.docs?.source},description:{story:"*every full moon* — the card asks for a time it can run; nothing drafted",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "nothing-to-use",
  args: {
    face: "nothing-to-use"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="automation-card-action-add_tool"]')) throw new globalThis.Error("no Add a tool door");
    if (has(canvasElement, '[data-testid="automation-card-action-review"]') || has(canvasElement, '[data-testid="automation-card-action-confirm"]')) throw new globalThis.Error("a draft door with nothing to use");
  }
}`,...w.parameters?.docs?.source},description:{story:"S4: no read tool of the Project's projection fits the sentence — said on the *Using* line with *Add a tool →*; nothing drafted",...w.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "monthly",
  args: {
    face: "monthly"
  },
  play: async ({
    canvasElement
  }) => {
    const when = canvasElement.querySelector('[data-testid="automation-card-when"]');
    if (!when?.textContent?.includes("month")) throw new globalThis.Error("the monthly schedule is not in words");
  }
}`,...y.parameters?.docs?.source},description:{story:"S4: a monthly cadence — *Every month on day 1 at 09:00*",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "reviewing",
  args: {
    face: "reviewing"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="automation-card-runs"] [role="combobox"]')) throw new globalThis.Error("no schedule Select");
    if (!has(canvasElement, 'input[type="time"]')) throw new globalThis.Error("no time field");
    if (!has(canvasElement, '[data-testid="automation-card-technical"]')) throw new globalThis.Error("no Technical disclosure");
    if (!has(canvasElement, '[data-testid="automation-card-action-confirm"]')) throw new globalThis.Error("no Confirm");
  }
}`,...b.parameters?.docs?.source},description:{story:"the disclosure open — the schedule `Select`, the time, *Technical*, the recipients, *Not now · Confirm*",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "reviewing-weekly",
  args: {
    face: "reviewing-weekly"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="automation-card-weekday"] [role="combobox"]')) throw new globalThis.Error("no weekday Select");
    if (has(canvasElement, '[data-testid="automation-card-day"]')) throw new globalThis.Error("a day-of-month control on a weekly schedule");
    const summary = canvasElement.querySelector('[data-testid="automation-card-technical"] > summary');
    if (!summary || summary.classList.contains("nexus-turn-link")) throw new globalThis.Error("Technical is not a disclosure");
  }
}`,...x.parameters?.docs?.source},description:{story:`a weekly proposal under review — the weekday is a control beside the cadence (the owner's walk, 2026-11-04: *Weekly*
read with no day); *Monthly* shows the day of month the same way; *Technical* is a disclosure with its marker`,...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "draft",
  args: {
    face: "draft"
  }
}`,...v.parameters?.docs?.source},description:{story:"a builder who chose *Confirm* only — *Draft — enable in Configure*",...v.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "needs-connection",
  args: {
    face: "needs-connection"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="automation-card-action-connect"]')) throw new globalThis.Error("no Connect door");
  }
}`,...k.parameters?.docs?.source},description:{story:"the connection is missing — named with its door, the face stays Draft",...k.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "awaiting",
  args: {
    face: "awaiting"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="automation-card-action-stop_asking"]')) throw new globalThis.Error("no Stop asking for a member");
    if (has(canvasElement, '[data-testid="automation-card-action-open_configure"]')) throw new globalThis.Error("Open in Configure for a member");
  }
}`,...E.parameters?.docs?.source},description:{story:"a member's confirm — *Awaiting a builder* · Change · Stop asking",...E.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "enabled",
  args: {
    face: "enabled"
  },
  play: async ({
    canvasElement
  }) => {
    const face = canvasElement.querySelector('[data-testid="automation-card-face"]');
    if (face?.getAttribute("role") !== "status") throw new globalThis.Error("the face is not a status");
    if (!has(canvasElement, '[data-testid="automation-card-action-pause"]')) throw new globalThis.Error("no Pause for a builder");
  }
}`,...j.parameters?.docs?.source},description:{story:"*Enabled · next run tomorrow 07:00* · Pause · Change · Open in Configure",...j.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "with-receipts",
  args: {
    face: "with-receipts"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll('[data-testid="automation-card-receipts"] li').length !== 3) throw new globalThis.Error("not three receipts");
  }
}`,...T.parameters?.docs?.source},description:{story:"enabled, with the runs' receipts beneath — *07:02 · 3 changes · View*",...T.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "paused",
  args: {
    face: "paused"
  }
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "paused-archived",
  args: {
    face: "paused-archived"
  }
}`,...S.parameters?.docs?.source},description:{story:"the Flow was archived in Configure — *Paused — archived by Taras M.*",...S.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "needs-changes",
  args: {
    face: "needs-changes"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="automation-card-action-change"]')) throw new globalThis.Error("no Change");
  }
}`,..._.parameters?.docs?.source},description:{story:`the builder's word — *Needs changes — "weekdays only"* · Change`,..._.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "template-unavailable",
  args: {
    face: "template-unavailable"
  },
  play: async ({
    canvasElement
  }) => {
    if (has(canvasElement, '[data-testid="automation-card-actions"]')) throw new globalThis.Error("a door on an unavailable template");
  }
}`,...N.parameters?.docs?.source},description:{story:"the organization has no automation template — said, no door",...N.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    face: "offline"
  },
  play: async ({
    canvasElement
  }) => {
    const confirm = canvasElement.querySelector('[data-testid="automation-card-action-confirm"]');
    if (confirm?.getAttribute("aria-disabled") !== "true") throw new globalThis.Error("Confirm is not aria-disabled offline");
    if (!has(canvasElement, '[data-testid="automation-card-offline"]')) throw new globalThis.Error("no reason line");
  }
}`,...C.parameters?.docs?.source},description:{story:"offline — Confirm disabled in words, the reason beside it",...C.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "uk",
  args: {
    face: "reviewing"
  },
  globals: {
    locale: "uk"
  }
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  args: {
    face: "with-receipts",
    narrow: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...P.parameters?.docs?.source}}};export{E as Awaiting,v as Draft,j as Enabled,y as Monthly,P as Narrow,_ as NeedsChanges,k as NeedsConnection,w as NothingToUse,C as Offline,O as Paused,S as PausedArchived,f as Proposed,b as Reviewing,x as ReviewingWeekly,N as TemplateUnavailable,R as Uk,g as Unexpressible,T as WithReceipts,be as __namedExportsOrder,ye as default};
