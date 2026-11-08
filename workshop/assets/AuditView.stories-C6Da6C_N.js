import{j as i,r as Q}from"./iframe-C_4ax-Jm.js";/* empty css                */import{A as R,b as L,c as W}from"./platform-BhtOchBX.js";import{m as N,a as k}from"./chatApi-DU7mAKQS.js";import{A as $,a as F,S as Z,b as U}from"./AuditView-D8IvIDRI.js";import"./preload-helper-PPVm8Dsz.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./format-DO9OmoTM.js";import"./runtime-Cwmke1Hn.js";import"./navigation-BPhnWcXc.js";const ce={title:"Apps/NexCore/Platform Operations/Organization · Audit",parameters:{ds:"DS-6805",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform/organizations/org_acme?tab=audit&as=owner"},docs:{description:{component:" S5 — the **audit view** (S5-ARCHITECTURE §2, ): Organization › Audit reads two doors — core-api's\ngovernance and platform families for the organization and billing-api's `GET /platform/billing/audit?org_id=` —\nand shows them merged by time with one row of closed filters (family · decision · actor · action · from · to);\n`resource_uri` is a column only when a row has one. A door that did not answer is named above the rows the other\ndoor gave (*partial*), never silently dropped; both missing is the honest *not available* face. `DS-6805`'s\ntable idiom (append-only; nothing edited here); every rung of the ladder (`DS-7006`), en and uk.\n\nWP-7 (owner 2026-10-20): the filters are **one toolbar line** (`DS-3019` · `DS-7010` — `Select compact` · the\ntoolbar text input · `DatePicker compact` · `Button size=\"toolbar\"`; labels as placeholders, a hint as `title`, no\nsentence under a field); the table shows the action code **once** (the doors fold a PEP verdict into the act it\ndecided), the reason code or `—`, the actor id truncated with a `title`, the reference whenever a row carries one."}}}},V=e=>({state:"ready",data:e}),O=()=>{},t=e=>{throw new globalThis.Error(e)},B=e=>i.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:e}),J=/^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/;function z(e,r){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(e,r),e.dispatchEvent(new Event("input",{bubbles:!0}))}async function G(e,r){for(let o=0;o<50;o++){if(e())return;await new Promise(l=>setTimeout(l,10))}t(r)}const H=W.filter(e=>e.targetOrgId==="org_acme"),c=N(H,L,R);function n({rows:e=c,missing:r=[],initial:o={},state:l="ready",hasMore:u=!1}){const[s,j]=Q.useState(o),m=e.filter(d=>(!s.family||d.family===s.family)&&(!s.decision||d.decision===s.decision)&&(!s.actor||d.actorId===s.actor)&&(!s.action||d.action===s.action||d.action.startsWith(`${s.action}.`))),a=l==="ready"?V(m):l==="empty"||l==="loading"||l==="denied"?{state:l}:{state:l,retry:O};return B(i.jsx($,{result:a,families:k,query:s,onQuery:j,missing:r,caption:"merged",hasMore:u,onMore:u?()=>{}:void 0,retry:O,testId:"org-audit-view"}))}const f={name:"ACME · three families merged by time (resource shown where present)",render:()=>i.jsx(n,{}),play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="audit-filters"]')??t("the filters are one closed row");r.querySelectorAll(".nexus-cc-toolbar").length!==1&&t("the filters are one toolbar (DS-3019)"),r.querySelector(".nexus-cc-field, .nexus-cc-hint, label")&&t("no stacked label, no helper sentence under a field (owner 2026-10-20)");for(const a of["audit-actor","audit-action"]){const d=r.querySelector(`[data-testid="${a}"]`);(!d?.getAttribute("aria-label")||!d.placeholder||!d.title)&&t(`${a} is named by aria-label + placeholder, its hint is the title`)}r.querySelector('[data-testid="audit-apply"].nexus-btn-toolbar')||t("Apply is the toolbar-size button, aligned with the controls (DS-3001)"),(!r.querySelector('[data-testid="audit-from-trigger"]')||!r.querySelector('[data-testid="audit-to-trigger"]'))&&t("from · to are the kit's DatePicker (DS-3064)");const o=Array.from(e.querySelectorAll('[data-testid="audit-table"] time')).map(a=>a.getAttribute("datetime")??"");o.length!==c.length&&t("every row of every door is listed");for(let a=1;a<o.length;a++)o[a-1]<o[a]&&t("merged newest first ()");new Set(Array.from(e.querySelectorAll('[data-testid^="family-"]')).map(a=>a.textContent)).size!==3&&t("the three families are told apart by their chip");const u=Array.from(e.querySelectorAll('[data-testid^="action-"]')).map(a=>a.textContent??"");(u.length!==c.length||u.some(a=>!J.test(a)))&&t("every action cell is one dotted code"),u.some(a=>a.startsWith("platform.pep."))&&t("a PEP verdict arrives folded into the act it decided");const s=c.find(a=>a.id==="aud_p_0005");(!s||e.querySelector(`[data-testid="reason-${s.id}"]`)?.textContent!=="ROLE_NOT_PERMITTED")&&t("a deny keeps the PEP's reason code"),e.querySelector('[data-testid="reason-aud_p_0008"]')&&t("an allow has no reason — the cell is a dash, never the act repeated"),e.querySelectorAll('[data-testid^="resource-"]').length!==c.filter(a=>a.resourceUri).length&&t("a resource is shown whenever the row carries one");const m=e.querySelector(".nexus-cc-audit-actor > code");(!m?.title||m.title!==m.textContent)&&t("the actor id truncates with a title"),e.querySelector('[data-testid^="operator-scope-"]')||t("an operator's own act is flagged ()"),/@/.test(e.textContent??"")&&t("actors are ids — no e-mail")}},y={...f,name:"ACME · українською",globals:{locale:"uk"}},h={name:"Rows without a resource — the column is not drawn",render:()=>i.jsx(n,{rows:c.filter(e=>e.resourceUri===null)}),play:async({canvasElement:e})=>{e.querySelector('[data-testid^="resource-"]')&&t("no resource, no column")}},g={name:"Filtered · billing family, denied decisions",render:()=>i.jsx(n,{initial:{family:"billing",decision:"deny"}}),play:async({canvasElement:e})=>{const r=Array.from(e.querySelectorAll('[data-testid^="family-"]'));(!r.length||r.some(o=>o.textContent!==r[0].textContent))&&t("only the chosen family remains"),e.querySelector('[data-testid="audit-clear"]')||t("a filtered view offers *Clear*")}},w={name:"Filtered · nothing matches (the filtered-empty line, not the not-available one)",render:()=>i.jsx(n,{initial:{actor:"usr_nobody"}}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="audit-table"] time')&&t("no row matches"),e.querySelector('[data-testid="audit-clear"]')||t("the way back is *Clear*")}},S={name:"Filtered · the action prefix `platform.org` (a folded PEP row matches its act)",render:()=>i.jsx(n,{}),play:async({canvasElement:e})=>{z(e.querySelector('[data-testid="audit-action"]'),"platform.org"),e.querySelector('[data-testid="audit-apply"]')?.click(),await G(()=>Array.from(e.querySelectorAll('[data-testid^="action-"]')).some(o=>o.textContent==="platform.org.read"),"the folded `platform.org.read` row answers the prefix"),Array.from(e.querySelectorAll('[data-testid^="action-"]')).map(o=>o.textContent??"").some(o=>o!=="platform.org"&&!o.startsWith("platform.org."))&&t("only the prefix's rows remain (a dot-boundary prefix, never `platform.organization.*`)"),e.querySelector('[data-testid="audit-action-error"]')&&t("a valid prefix says nothing")}},b={name:"Filter · an action that is not a dotted prefix — said once under the line, nothing sent (DS-7014)",render:()=>i.jsx(n,{}),play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="audit-action"]');z(r,"Platform Org"),e.querySelector('[data-testid="audit-apply"]')?.click(),await G(()=>!!e.querySelector('[data-testid="audit-action-error"]'),"the refusal is one line under the toolbar"),(r.getAttribute("aria-invalid")!=="true"||!r.getAttribute("aria-describedby"))&&t("the field is marked invalid and linked to its line"),e.querySelector('[data-testid="audit-action-error"] [role="alert"]')||t("the line is announced"),e.querySelectorAll('[data-testid="audit-table"] time').length!==c.length&&t("nothing was sent — the rows are unchanged")}},A={name:"Partial · billing-api did not answer (core's rows shown, the gap named)",render:()=>i.jsx(n,{rows:N(H,L),missing:["billing"]}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="audit-partial"]')||t("the door that did not answer is named above the rows"),e.querySelector('[data-testid="audit-table"]')||t("the other door's rows are still shown")}},x={name:"Partial · core-api did not answer (billing's rows shown, the gap named)",render:()=>i.jsx(n,{rows:R,missing:["core"]})},E={name:"Neither door answered — not available, with a retry",render:()=>i.jsx(n,{rows:[],missing:["core","billing"]}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="audit-table"]')&&t("no door, no table — never an empty one"),e.querySelector('[data-testid="audit-retry"]')||t("the honest face offers a retry")}},q={name:"Older records (a cursor remains)",render:()=>i.jsx(n,{hasMore:!0})},v={name:"Nothing recorded yet",render:()=>i.jsx(n,{state:"empty"})},M={render:()=>i.jsx(n,{state:"loading"})},P={render:()=>i.jsx(n,{state:"error"})},C={name:"Denied (the organization's audit is not this operator's — the view's denied rung)",render:()=>i.jsx(n,{state:"denied"})},T={render:()=>i.jsx(n,{state:"offline"})},p={name:"Part · AuditFilters (two families · three families with a query applied · a period)",render:()=>B(i.jsxs("div",{className:"nexus-cc-platform-stack",children:[i.jsx(F,{families:Z,query:{},onQuery:()=>{}}),i.jsx(F,{families:k,query:{actor:"usr_ihor",decision:"deny"},onQuery:()=>{}}),i.jsx(F,{families:k,query:{from:"2026-11-01T00:00:00.000Z",to:"2026-11-14T23:59:00.000Z"},onQuery:()=>{}})]})),play:async({canvasElement:e})=>{const r=e.querySelectorAll('[data-testid="audit-filters"]');r.length!==3&&t("three filter lines"),r[0].querySelector('[data-testid="audit-family"]')?.textContent!==r[1].querySelector('[data-testid="audit-family"]')?.textContent&&t("the family select reads *All families* on both"),(!r[1].querySelector('[data-testid="audit-clear"]')||r[0].querySelector('[data-testid="audit-clear"]'))&&t("*Clear* only while a filter is in use"),/2026/.test(r[2].querySelector('[data-testid="audit-from-trigger"]')?.textContent??"")||t("a period shows its dates on the triggers")}},D={...p,name:"Part · AuditFilters · українською",globals:{locale:"uk"}},_={name:"Part · AuditTable",render:()=>B(i.jsx(U,{rows:c,caption:"merged"}))},I={name:"Part · AuditTable · empty",render:()=>B(i.jsx(U,{rows:[],caption:"merged"}))},ue=["Populated","PopulatedUkrainian","NoResource","Filtered","FilteredEmpty","FilteredByActionPrefix","InvalidActionPrefix","BillingMissing","CoreMissing","AllMissing","More","Empty","Loading","Error","Denied","Offline","PartFilters","PartFiltersUkrainian","PartTable","PartTableEmpty"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "ACME · three families merged by time (resource shown where present)",
  render: () => <Merged />,
  play: async ({
    canvasElement
  }) => {
    const filters = canvasElement.querySelector('[data-testid="audit-filters"]') ?? fails("the filters are one closed row");
    // WP-7: one toolbar line — compact controls, labels as placeholders / aria-labels, nothing under a field
    if (filters.querySelectorAll(".nexus-cc-toolbar").length !== 1) fails("the filters are one toolbar (DS-3019)");
    if (filters.querySelector(".nexus-cc-field, .nexus-cc-hint, label")) fails("no stacked label, no helper sentence under a field (owner 2026-10-20)");
    for (const id of ["audit-actor", "audit-action"]) {
      const input = filters.querySelector<HTMLInputElement>(\`[data-testid="\${id}"]\`);
      if (!input?.getAttribute("aria-label") || !input.placeholder || !input.title) fails(\`\${id} is named by aria-label + placeholder, its hint is the title\`);
    }
    if (!filters.querySelector('[data-testid="audit-apply"].nexus-btn-toolbar')) fails("Apply is the toolbar-size button, aligned with the controls (DS-3001)");
    if (!filters.querySelector('[data-testid="audit-from-trigger"]') || !filters.querySelector('[data-testid="audit-to-trigger"]')) fails("from · to are the kit's DatePicker (DS-3064)");
    const times = Array.from(canvasElement.querySelectorAll('[data-testid="audit-table"] time')).map(el => el.getAttribute("datetime") ?? "");
    if (times.length !== MERGED.length) fails("every row of every door is listed");
    for (let i = 1; i < times.length; i++) if (times[i - 1] < times[i]) fails("merged newest first ()");
    const families = new Set(Array.from(canvasElement.querySelectorAll('[data-testid^="family-"]')).map(c => c.textContent));
    if (families.size !== 3) fails("the three families are told apart by their chip");
    // WP-7: the action cell is the code once — no humanised twin, no \`platform.pep.*\` for a named act (folded by the doors)
    const actions = Array.from(canvasElement.querySelectorAll('[data-testid^="action-"]')).map(c => c.textContent ?? "");
    if (actions.length !== MERGED.length || actions.some(a => !ACTION_CODE.test(a))) fails("every action cell is one dotted code");
    if (actions.some(a => a.startsWith("platform.pep."))) fails("a PEP verdict arrives folded into the act it decided");
    const folded = MERGED.find(r => r.id === "aud_p_0005");
    if (!folded || canvasElement.querySelector(\`[data-testid="reason-\${folded.id}"]\`)?.textContent !== "ROLE_NOT_PERMITTED") fails("a deny keeps the PEP's reason code");
    if (canvasElement.querySelector('[data-testid="reason-aud_p_0008"]')) fails("an allow has no reason — the cell is a dash, never the act repeated");
    const refs = canvasElement.querySelectorAll('[data-testid^="resource-"]');
    if (refs.length !== MERGED.filter(r => r.resourceUri).length) fails("a resource is shown whenever the row carries one");
    const actor = canvasElement.querySelector<HTMLElement>(".nexus-cc-audit-actor > code");
    if (!actor?.title || actor.title !== actor.textContent) fails("the actor id truncates with a title");
    if (!canvasElement.querySelector('[data-testid^="operator-scope-"]')) fails("an operator's own act is flagged ()");
    if (/@/.test(canvasElement.textContent ?? "")) fails("actors are ids — no e-mail");
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Populated,
  name: "ACME · українською",
  globals: {
    locale: "uk"
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Rows without a resource — the column is not drawn",
  render: () => <Merged rows={MERGED.filter(r => r.resourceUri === null)} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid^="resource-"]')) fails("no resource, no column");
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Filtered · billing family, denied decisions",
  render: () => <Merged initial={{
    family: "billing",
    decision: "deny"
  }} />,
  play: async ({
    canvasElement
  }) => {
    const chips = Array.from(canvasElement.querySelectorAll('[data-testid^="family-"]'));
    if (!chips.length || chips.some(c => c.textContent !== chips[0].textContent)) fails("only the chosen family remains");
    if (!canvasElement.querySelector('[data-testid="audit-clear"]')) fails("a filtered view offers *Clear*");
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Filtered · nothing matches (the filtered-empty line, not the not-available one)",
  render: () => <Merged initial={{
    actor: "usr_nobody"
  }} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="audit-table"] time')) fails("no row matches");
    if (!canvasElement.querySelector('[data-testid="audit-clear"]')) fails("the way back is *Clear*");
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Filtered · the action prefix \`platform.org\` (a folded PEP row matches its act)",
  render: () => <Merged />,
  play: async ({
    canvasElement
  }) => {
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="audit-action"]')!, "platform.org");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="audit-apply"]')?.click();
    await until(() => Array.from(canvasElement.querySelectorAll('[data-testid^="action-"]')).some(c => c.textContent === "platform.org.read"), "the folded \`platform.org.read\` row answers the prefix");
    const actions = Array.from(canvasElement.querySelectorAll('[data-testid^="action-"]')).map(c => c.textContent ?? "");
    if (actions.some(a => a !== "platform.org" && !a.startsWith("platform.org."))) fails("only the prefix's rows remain (a dot-boundary prefix, never \`platform.organization.*\`)");
    if (canvasElement.querySelector('[data-testid="audit-action-error"]')) fails("a valid prefix says nothing");
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Filter · an action that is not a dotted prefix — said once under the line, nothing sent (DS-7014)",
  render: () => <Merged />,
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector<HTMLInputElement>('[data-testid="audit-action"]')!;
    typeInto(input, "Platform Org");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="audit-apply"]')?.click();
    await until(() => Boolean(canvasElement.querySelector('[data-testid="audit-action-error"]')), "the refusal is one line under the toolbar");
    if (input.getAttribute("aria-invalid") !== "true" || !input.getAttribute("aria-describedby")) fails("the field is marked invalid and linked to its line");
    if (!canvasElement.querySelector('[data-testid="audit-action-error"] [role="alert"]')) fails("the line is announced");
    if (canvasElement.querySelectorAll('[data-testid="audit-table"] time').length !== MERGED.length) fails("nothing was sent — the rows are unchanged");
  }
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Partial · billing-api did not answer (core's rows shown, the gap named)",
  render: () => <Merged rows={mergeAuditRows(PLATFORM_ACME, AUDIT_GOVERNANCE_ACME)} missing={["billing"]} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="audit-partial"]')) fails("the door that did not answer is named above the rows");
    if (!canvasElement.querySelector('[data-testid="audit-table"]')) fails("the other door's rows are still shown");
  }
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Partial · core-api did not answer (billing's rows shown, the gap named)",
  render: () => <Merged rows={AUDIT_BILLING_ACME} missing={["core"]} />
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Neither door answered — not available, with a retry",
  render: () => <Merged rows={[]} missing={["core", "billing"]} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="audit-table"]')) fails("no door, no table — never an empty one");
    if (!canvasElement.querySelector('[data-testid="audit-retry"]')) fails("the honest face offers a retry");
  }
}`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Older records (a cursor remains)",
  render: () => <Merged hasMore />
}`,...q.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Nothing recorded yet",
  render: () => <Merged state="empty" />
}`,...v.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Merged state="loading" />
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Merged state="error" />
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Denied (the organization's audit is not this operator's — the view's denied rung)",
  render: () => <Merged state="denied" />
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Merged state="offline" />
}`,...T.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Part · AuditFilters (two families · three families with a query applied · a period)",
  render: () => pad(<div className="nexus-cc-platform-stack"><AuditFilters families={SETTINGS_AUDIT_FAMILIES} query={{}} onQuery={() => undefined} /><AuditFilters families={AUDIT_FAMILIES} query={{
      actor: "usr_ihor",
      decision: "deny"
    }} onQuery={() => undefined} /><AuditFilters families={AUDIT_FAMILIES} query={{
      from: "2026-11-01T00:00:00.000Z",
      to: "2026-11-14T23:59:00.000Z"
    }} onQuery={() => undefined} /></div>),
  play: async ({
    canvasElement
  }) => {
    const forms = canvasElement.querySelectorAll('[data-testid="audit-filters"]');
    if (forms.length !== 3) fails("three filter lines");
    if (forms[0].querySelector('[data-testid="audit-family"]')?.textContent !== forms[1].querySelector('[data-testid="audit-family"]')?.textContent) fails("the family select reads *All families* on both");
    if (!forms[1].querySelector('[data-testid="audit-clear"]') || forms[0].querySelector('[data-testid="audit-clear"]')) fails("*Clear* only while a filter is in use");
    if (!/2026/.test(forms[2].querySelector('[data-testid="audit-from-trigger"]')?.textContent ?? "")) fails("a period shows its dates on the triggers");
  }
}`,...p.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...PartFilters,
  name: "Part · AuditFilters · українською",
  globals: {
    locale: "uk"
  }
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Part · AuditTable",
  render: () => pad(<AuditTable rows={MERGED} caption="merged" />)
}`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Part · AuditTable · empty",
  render: () => pad(<AuditTable rows={[]} caption="merged" />)
}`,...I.parameters?.docs?.source}}};export{E as AllMissing,A as BillingMissing,x as CoreMissing,C as Denied,v as Empty,P as Error,g as Filtered,S as FilteredByActionPrefix,w as FilteredEmpty,b as InvalidActionPrefix,M as Loading,q as More,h as NoResource,T as Offline,p as PartFilters,D as PartFiltersUkrainian,_ as PartTable,I as PartTableEmpty,f as Populated,y as PopulatedUkrainian,ue as __namedExportsOrder,ce as default};
