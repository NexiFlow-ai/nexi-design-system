import{j as n,r as X}from"./iframe-C_4ax-Jm.js";/* empty css                */import{o as ue,P as de,a as te}from"./organizationRequests-CxMYSAGe.js";import{O as le}from"./OperatorGate-wGq4uD0w.js";import{O as i,a as re,R as ne}from"./OrganizationRequests-Ce3y0R7r.js";import"./preload-helper-PPVm8Dsz.js";import"./navigation-BPhnWcXc.js";import"./chatApi-DU7mAKQS.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./store-C-il-aT_.js";import"./runtime-Cwmke1Hn.js";import"./Segmented-C4lbw349.js";import"./country-Dr6T60nu.js";import"./nav-C8-c-HcF.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";const ze={title:"Apps/NexCore/Platform Operations/Organization requests",parameters:{ds:"DS-6608",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform/organizations?tab=requests&as=owner"},docs:{description:{component:" S0 (UAT-1) — Platform Operations › Organizations › **Requests** (DS-6608, proposed;  · 08-UX §5):\nthe tab beside the registry, the status scope (DS-3065), the table (DS-3030), the inspector (DS-3031 · DS-7001)\nwith *Request · Organization · Their words · Timeline*, and the two confirmations in place (DS-3034 · DS-7004) —\nat every rung of the ladder (DS-7005), en and uk. The operator-scope banner (DS-6806) is on. `provider_owner`\nonly (): the denied rung is the 404 face of `OperatorGate`, never a tab that says what it hides. Fixtures:\nthe seven synthetic requests of `fixtures/organizationRequests.ts`."}}}},t=r=>{throw new globalThis.Error(r)},ae=()=>{},ee=async()=>{},W=async()=>{throw new globalThis.Error("This request was already decided.")},c={globals:{locale:"uk"}};function se(r){return te.filter(e=>r==="all"||e.status===r).sort((e,a)=>a.confirmedAt.localeCompare(e.confirmedAt))}const N=Object.fromEntries(ne.map(r=>[r,se(r).length])),V=r=>({state:"ready",data:se(r)});function o({scope:r="pending",open:e,panel:a=null,outcome:p="ok"}){const[L,oe]=X.useState(r),[Z,$]=X.useState(e??null),[M,J]=X.useState([...de,...te]),ie=M.filter(s=>L==="all"||s.status===L).sort((s,u)=>u.confirmedAt.localeCompare(s.confirmedAt)),pe=Object.fromEntries(ne.map(s=>[s,M.filter(u=>s==="all"||u.status===s).length])),K=(s,u,H)=>J(ce=>ce.map(G=>G.id===s?{...G,status:u,decidedAt:new Date().toISOString(),decidedBy:"usr_provider_owner_01",organizationId:H}:G)),Y=M.find(s=>s.id===Z)??null;return n.jsx(i,{result:{state:"ready",data:ie},scope:L,onScope:oe,counts:pe,selected:Z,onSelect:s=>$(s.id),inspector:Y?n.jsx(re,{request:Y,onClose:()=>$(null),initialPanel:a,onApprove:p==="refused"?W:async s=>K(s,"approved","org_new"),onDecline:p==="refused"?W:async s=>K(s,"declined",null),onRevoke:p==="refused"?W:async s=>{J(u=>u.filter(H=>H.id!==s)),$(null)}}):null})}const d={name:"Populated · pending (the default scope)",render:()=>n.jsx(i,{result:V("pending"),scope:"pending",counts:N,onScope:()=>{}}),play:async({canvasElement:r})=>{r.querySelector('[data-testid="operator-scope-banner"]')||t("every operator screen carries the scope banner (DS-6806)"),r.querySelectorAll("tbody tr").length!==3&&t("three pending requests in the synthetic queue"),r.querySelector('[data-testid="requests-scope"]')||t("the status scope is one segmented line (DS-3065)");const e=r.textContent??"";/Ми ведемо облік|Dispatchers answer/.test(e)&&t("the goal text never appears in the table — the inspector is its only reader ()"),/Verkhovyna Agro/.test(e)||t("the organization column names the organization")}},S={...d,name:"Populated · українською",...c},g={name:"Populated · all statuses",render:()=>n.jsx(i,{result:V("all"),scope:"all",counts:N,onScope:()=>{}})},w={name:"Populated · approved",render:()=>n.jsx(i,{result:V("approved"),scope:"approved",counts:N,onScope:()=>{}})},x={name:"Empty · no requests yet",render:()=>n.jsx(i,{result:{state:"ready",data:[]},scope:"pending",counts:{pending:0,approved:0,declined:0,all:0}}),play:async({canvasElement:r})=>{/No requests yet|Запитів поки немає/.test(r.textContent??"")||t("the empty state says new ones arrive once the address is confirmed (08-UX §5)")}},k={name:"Empty · none declined (the scope, not the queue, is empty)",render:()=>n.jsx(i,{result:{state:"ready",data:[]},scope:"declined",counts:{...N,declined:0}})},E={render:()=>n.jsx(i,{result:{state:"loading"},scope:"pending"})},D={render:()=>n.jsx(i,{result:{state:"error",retry:ae},scope:"pending"})},A={render:()=>n.jsx(i,{result:{state:"offline",retry:ae},scope:"pending"})},l={name:"Permission denied · not a provider owner → the 404 face; the tab is absent ()",render:()=>n.jsx(le,{access:{state:"denied"},children:()=>n.jsx(i,{result:V("pending"),scope:"pending"})}),play:async({canvasElement:r})=>{const e=(r.textContent??"").toLowerCase();/request|запит|operator|platform operations/.test(e)&&t("a denied page must not name what it hides ( · )"),r.querySelector('[data-testid="not-found-state"]')||t("denied is the not-found rung")}},b={...l,name:"Permission denied · українською",...c},m={name:"Inspector · Olena's request (pending)",render:()=>n.jsx(o,{open:"oreq_01j9z1"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-inspector"]');if(!e)return t("a selected row opens the inspector on the right (DS-7001)");for(const a of["request","organization","words","timeline"])e.querySelector(`[data-testid="request-section-${a}"]`)||t(`the inspector has the ${a} section`);e.querySelector('[data-testid="request-goal"]')?.textContent?.includes("Ми ведемо облік")||t("*Their words* is the goal, read-only"),(!e.querySelector('[data-testid="request-approve"]')||!e.querySelector('[data-testid="request-decline"]'))&&t("a pending request offers Approve and Decline"),e.querySelectorAll(".nexus-btn-primary").length!==1&&t("Approve is the one primary")}},C={...m,name:"Inspector · українською",...c},f={name:"Approve · the confirmation in place (name and region editable, )",render:()=>n.jsx(o,{open:"oreq_01j9z1",panel:"approve"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-approve-panel"]');if(!e)return t("Approve confirms where it was taken — an ActionPanel in the inspector, never a modal (DS-7004)");/Verkhovyna Agro/.test(e.querySelector("h3")?.textContent??"")||t("the title names the organization"),/olena\.kravets@/.test(e.textContent??"")||t("the title names the address that becomes the Owner"),e.querySelector('[data-testid="approve-name"]')?.value!=="Verkhovyna Agro"&&t("the name is pre-filled and editable ()"),e.querySelector('[data-testid="approve-region"]')||t("the region is pre-filled from the country ()"),e.querySelector('[data-testid="approve-confirm"]')||t("one primary — Create and invite")}},P={...f,name:"Approve · українською",...c},R={name:"Approve · refused by the server (409 shown where it was taken)",render:()=>n.jsx(o,{open:"oreq_01j9z2",panel:"approve",outcome:"refused"}),play:async({canvasElement:r})=>{r.querySelector('[data-testid="approve-confirm"]')?.click();for(let e=0;e<50&&!r.querySelector('[data-testid="approve-error"]');e++)await new Promise(a=>setTimeout(a,10));r.querySelector('[data-testid="approve-error"]')||t("the server's refusal is shown in the panel")}},y={name:"Decline · the reason stays with the record",render:()=>n.jsx(o,{open:"oreq_01j9z3",panel:"decline"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-decline-panel"]');if(!e)return t("Decline confirms in place with a reason ()");e.querySelector('[data-testid="decline-reason"]')||t("the reason field is there"),e.querySelector('[data-testid="decline-confirm"]')?.click(),await new Promise(a=>setTimeout(a,0)),e.querySelector('[role="alert"]')||t("an empty reason is refused before anything is sent")}},z={...y,name:"Decline · українською",...c},j={name:"Approved · Open organization →",render:()=>n.jsx(o,{scope:"approved",open:"oreq_01j9y4"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-inspector"]');if(!e)return t("the approved request opens");e.querySelector('[data-testid="request-approved-row"]')||t("the footer says *Approved*");const a=e.querySelector('[data-testid="request-open-organization"]');(!a||!(a.getAttribute("href")??"").includes("org_dnipro"))&&t("*Open organization →* leads to the registry page of the organization it created"),e.querySelector('[data-testid="request-approve"]')&&t("a decided request has no Approve"),/usr_provider_owner_01/.test(e.querySelector('[data-testid="request-timeline"]')?.textContent??"")||t("the timeline names the decider by id")}},O={name:"Declined · the record with its decider; the person saw no reason",render:()=>n.jsx(o,{scope:"declined",open:"oreq_01j9x6"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-inspector"]');e?.querySelector('[data-testid="request-declined-row"]')||t("the footer says *Declined*"),e?.querySelector('[data-testid="request-decline"]')&&t("a decided request has no Decline")}},B={name:"Walkthrough · pick a row, approve, see it move",render:()=>n.jsx(o,{}),play:async({canvasElement:r})=>{r.querySelector("tbody tr")?.click();for(let a=0;a<50&&!r.querySelector('[data-testid="request-inspector"]');a++)await new Promise(p=>setTimeout(p,10));r.querySelector('[data-testid="request-inspector"]')||t("a click on a row opens the inspector")}},_={name:"Inspector · alone (Marta, pending)",render:()=>n.jsx(re,{request:ue("oreq_01j9z2"),onClose:()=>{},onApprove:ee,onDecline:ee})},h={name:"Prepared · the scope of invitations not yet opened (S3)",render:()=>n.jsx(o,{scope:"prepared"}),play:async({canvasElement:r})=>{const e=r.querySelectorAll('[data-testid="requests-table"] tbody tr');e.length!==1&&t(`one prepared row waits for its person, got ${e.length}`),r.querySelector('[data-testid="request-status-prepared"]')||t("the status cell reads *Prepared*"),/ruta@/.test(r.querySelector('[data-testid="requests-table"]')?.textContent??"")&&t("the list never shows the address ()")}},T={...h,name:"Prepared · українською",...c},q={name:"Inspector · a prepared row: who, the pack, the credits, your line, Revoke",render:()=>n.jsx(o,{scope:"prepared",open:"oreq_01jb01"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-inspector"]');if(!e)return t("the inspector opens");for(const p of["request","organization","note","timeline"])e.querySelector(`[data-testid="request-section-${p}"]`)||t(`the ${p} section`);e.querySelector('[data-testid="request-section-words"]')&&t("no *Their words* — nobody asked them anything yet"),/NexSales/.test(e.querySelector('[data-testid="request-section-organization"]')?.textContent??"")||t("the starter pack by name"),/200 NXC/.test(e.textContent??"")||t("the welcome credits"),e.querySelector('[data-testid="request-note"]')?.textContent?.includes("Vilnius forum")||t("the owner's line in the invitation"),e.querySelector('[data-testid="request-revoke"]')||t("Revoke is the one action"),e.querySelector('[data-testid="request-approve"]')&&t("never Approve — the person's click approves ()");const a=e.querySelector('[data-testid="request-timeline"]')?.textContent??"";(!/invitation sent|запрошення надіслано/.test(a)||!/stops working|перестає діяти/.test(a))&&t("the timeline: prepared · sent · the link's end")}},I={...q,name:"Inspector · prepared · українською",...c},v={name:"Revoke · the confirmation in place (DS-3034)",render:()=>n.jsx(o,{scope:"prepared",open:"oreq_01jb01",panel:"revoke"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-revoke-panel"]');if(!e)return t("Revoke confirms where it was taken — never a modal (DS-7004)");/ruta@baltic-fleet\.example/.test(e.querySelector("h3")?.textContent??"")||t("the title names the address the link went to"),/Nothing was created|нічого не створено/i.test(e.textContent??"")||t("the effect: nothing was created"),e.querySelector('[data-testid="revoke-confirm"]')||t("one destructive primary")}},U={...v,name:"Revoke · українською",...c},Q={name:"Revoke · refused by the server (the person already opened it)",render:()=>n.jsx(o,{scope:"prepared",open:"oreq_01jb01",panel:"revoke",outcome:"refused"}),play:async({canvasElement:r})=>{r.querySelector('[data-testid="revoke-confirm"]')?.click(),await new Promise(e=>setTimeout(e,60)),r.querySelector('[data-testid="revoke-error"]')||t("the refusal is shown in the panel, the row stays")}},F={name:"Inspector · a prepared row the person opened (approved by their click, )",render:()=>n.jsx(o,{scope:"approved",open:"oreq_01jb02"}),play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="request-inspector"]');if(!e)return t("the inspector opens");e.querySelector('[data-testid="request-approved-row"]')||t("approved, with the organization to open"),e.querySelector('[data-testid="request-open-organization"]')||t("the organization exists — open it"),/opened the invitation|відкрив\(ла\) запрошення/.test(e.querySelector('[data-testid="request-timeline"]')?.textContent??"")||t("the timeline says their click created it"),/Prepared by|Підготував/.test(e.querySelector('[data-testid="request-section-request"]')?.textContent??"")||t("the origin stays visible after approval")}},je=["Populated","PopulatedUkrainian","PopulatedAll","PopulatedApproved","Empty","EmptyScope","Loading","Error","Offline","Denied","DeniedUkrainian","InspectorOpen","InspectorUkrainian","ApproveDialog","ApproveDialogUkrainian","ApproveRefused","DeclineDialog","DeclineDialogUkrainian","ApprovedRow","DeclinedRow","Walkthrough","InspectorAlone","PreparedScope","PreparedScopeUkrainian","InspectorPrepared","InspectorPreparedUkrainian","RevokeDialog","RevokeDialogUkrainian","RevokeRefused","InspectorPreparedOpened"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Populated · pending (the default scope)",
  render: () => <OrganizationRequestsPage result={ready("pending")} scope="pending" counts={COUNTS} onScope={() => undefined} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="operator-scope-banner"]')) fails("every operator screen carries the scope banner (DS-6806)");
    if (canvasElement.querySelectorAll("tbody tr").length !== 3) fails("three pending requests in the synthetic queue");
    if (!canvasElement.querySelector('[data-testid="requests-scope"]')) fails("the status scope is one segmented line (DS-3065)");
    const text = canvasElement.textContent ?? "";
    if (/Ми ведемо облік|Dispatchers answer/.test(text)) fails("the goal text never appears in the table — the inspector is its only reader ()");
    if (!/Verkhovyna Agro/.test(text)) fails("the organization column names the organization");
  }
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Populated,
  name: "Populated · українською",
  ...uk
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Populated · all statuses",
  render: () => <OrganizationRequestsPage result={ready("all")} scope="all" counts={COUNTS} onScope={() => undefined} />
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Populated · approved",
  render: () => <OrganizationRequestsPage result={ready("approved")} scope="approved" counts={COUNTS} onScope={() => undefined} />
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Empty · no requests yet",
  render: () => <OrganizationRequestsPage result={{
    state: "ready",
    data: []
  }} scope="pending" counts={{
    pending: 0,
    approved: 0,
    declined: 0,
    all: 0
  }} />,
  play: async ({
    canvasElement
  }) => {
    if (!/No requests yet|Запитів поки немає/.test(canvasElement.textContent ?? "")) fails("the empty state says new ones arrive once the address is confirmed (08-UX §5)");
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Empty · none declined (the scope, not the queue, is empty)",
  render: () => <OrganizationRequestsPage result={{
    state: "ready",
    data: []
  }} scope="declined" counts={{
    ...COUNTS,
    declined: 0
  }} />
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <OrganizationRequestsPage result={{
    state: "loading"
  }} scope="pending" />
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <OrganizationRequestsPage result={{
    state: "error",
    retry
  }} scope="pending" />
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <OrganizationRequestsPage result={{
    state: "offline",
    retry
  }} scope="pending" />
}`,...A.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Permission denied · not a provider owner → the 404 face; the tab is absent ()",
  render: () => <OperatorGateView access={{
    state: "denied"
  }}>{() => <OrganizationRequestsPage result={ready("pending")} scope="pending" />}</OperatorGateView>,
  play: async ({
    canvasElement
  }) => {
    const text = (canvasElement.textContent ?? "").toLowerCase();
    if (/request|запит|operator|platform operations/.test(text)) fails("a denied page must not name what it hides ( · )");
    if (!canvasElement.querySelector('[data-testid="not-found-state"]')) fails("denied is the not-found rung");
  }
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Denied,
  name: "Permission denied · українською",
  ...uk
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Inspector · Olena's request (pending)",
  render: () => <Queue open="oreq_01j9z1" />,
  play: async ({
    canvasElement
  }) => {
    const insp = canvasElement.querySelector('[data-testid="request-inspector"]');
    if (!insp) return fails("a selected row opens the inspector on the right (DS-7001)");
    for (const s of ["request", "organization", "words", "timeline"]) if (!insp.querySelector(\`[data-testid="request-section-\${s}"]\`)) fails(\`the inspector has the \${s} section\`);
    if (!insp.querySelector('[data-testid="request-goal"]')?.textContent?.includes("Ми ведемо облік")) fails("*Their words* is the goal, read-only");
    if (!insp.querySelector('[data-testid="request-approve"]') || !insp.querySelector('[data-testid="request-decline"]')) fails("a pending request offers Approve and Decline");
    if (insp.querySelectorAll(".nexus-btn-primary").length !== 1) fails("Approve is the one primary");
  }
}`,...m.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...InspectorOpen,
  name: "Inspector · українською",
  ...uk
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Approve · the confirmation in place (name and region editable, )",
  render: () => <Queue open="oreq_01j9z1" panel="approve" />,
  play: async ({
    canvasElement
  }) => {
    const panel = canvasElement.querySelector('[data-testid="request-approve-panel"]');
    if (!panel) return fails("Approve confirms where it was taken — an ActionPanel in the inspector, never a modal (DS-7004)");
    if (!/Verkhovyna Agro/.test(panel.querySelector("h3")?.textContent ?? "")) fails("the title names the organization");
    if (!/olena\\.kravets@/.test(panel.textContent ?? "")) fails("the title names the address that becomes the Owner");
    const name = panel.querySelector<HTMLInputElement>('[data-testid="approve-name"]');
    if (name?.value !== "Verkhovyna Agro") fails("the name is pre-filled and editable ()");
    if (!panel.querySelector('[data-testid="approve-region"]')) fails("the region is pre-filled from the country ()");
    if (!panel.querySelector('[data-testid="approve-confirm"]')) fails("one primary — Create and invite");
  }
}`,...f.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...ApproveDialog,
  name: "Approve · українською",
  ...uk
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Approve · refused by the server (409 shown where it was taken)",
  render: () => <Queue open="oreq_01j9z2" panel="approve" outcome="refused" />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approve-confirm"]')?.click();
    for (let i = 0; i < 50 && !canvasElement.querySelector('[data-testid="approve-error"]'); i++) await new Promise(r => setTimeout(r, 10));
    if (!canvasElement.querySelector('[data-testid="approve-error"]')) fails("the server's refusal is shown in the panel");
  }
}`,...R.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Decline · the reason stays with the record",
  render: () => <Queue open="oreq_01j9z3" panel="decline" />,
  play: async ({
    canvasElement
  }) => {
    const panel = canvasElement.querySelector('[data-testid="request-decline-panel"]');
    if (!panel) return fails("Decline confirms in place with a reason ()");
    if (!panel.querySelector('[data-testid="decline-reason"]')) fails("the reason field is there");
    panel.querySelector<HTMLButtonElement>('[data-testid="decline-confirm"]')?.click();
    await new Promise(r => setTimeout(r, 0));
    if (!panel.querySelector('[role="alert"]')) fails("an empty reason is refused before anything is sent");
  }
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...DeclineDialog,
  name: "Decline · українською",
  ...uk
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Approved · Open organization →",
  render: () => <Queue scope="approved" open="oreq_01j9y4" />,
  play: async ({
    canvasElement
  }) => {
    const insp = canvasElement.querySelector('[data-testid="request-inspector"]');
    if (!insp) return fails("the approved request opens");
    if (!insp.querySelector('[data-testid="request-approved-row"]')) fails("the footer says *Approved*");
    const open = insp.querySelector<HTMLAnchorElement>('[data-testid="request-open-organization"]');
    if (!open || !(open.getAttribute("href") ?? "").includes("org_dnipro")) fails("*Open organization →* leads to the registry page of the organization it created");
    if (insp.querySelector('[data-testid="request-approve"]')) fails("a decided request has no Approve");
    if (!/usr_provider_owner_01/.test(insp.querySelector('[data-testid="request-timeline"]')?.textContent ?? "")) fails("the timeline names the decider by id");
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Declined · the record with its decider; the person saw no reason",
  render: () => <Queue scope="declined" open="oreq_01j9x6" />,
  play: async ({
    canvasElement
  }) => {
    const insp = canvasElement.querySelector('[data-testid="request-inspector"]');
    if (!insp?.querySelector('[data-testid="request-declined-row"]')) fails("the footer says *Declined*");
    if (insp?.querySelector('[data-testid="request-decline"]')) fails("a decided request has no Decline");
  }
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Walkthrough · pick a row, approve, see it move",
  render: () => <Queue />,
  play: async ({
    canvasElement
  }) => {
    const first = canvasElement.querySelector<HTMLTableRowElement>("tbody tr");
    first?.click();
    for (let i = 0; i < 50 && !canvasElement.querySelector('[data-testid="request-inspector"]'); i++) await new Promise(r => setTimeout(r, 10));
    if (!canvasElement.querySelector('[data-testid="request-inspector"]')) fails("a click on a row opens the inspector");
  }
}`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Inspector · alone (Marta, pending)",
  render: () => <OrganizationRequestInspector request={organizationRequest("oreq_01j9z2")} onClose={() => undefined} onApprove={noop} onDecline={noop} />
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Prepared · the scope of invitations not yet opened (S3)",
  render: () => <Queue scope="prepared" />,
  play: async ({
    canvasElement
  }) => {
    const rows = canvasElement.querySelectorAll('[data-testid="requests-table"] tbody tr');
    if (rows.length !== 1) fails(\`one prepared row waits for its person, got \${rows.length}\`);
    if (!canvasElement.querySelector('[data-testid="request-status-prepared"]')) fails("the status cell reads *Prepared*");
    if (/ruta@/.test(canvasElement.querySelector('[data-testid="requests-table"]')?.textContent ?? "")) fails("the list never shows the address ()");
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...PreparedScope,
  name: "Prepared · українською",
  ...uk
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Inspector · a prepared row: who, the pack, the credits, your line, Revoke",
  render: () => <Queue scope="prepared" open="oreq_01jb01" />,
  play: async ({
    canvasElement
  }) => {
    const insp = canvasElement.querySelector('[data-testid="request-inspector"]');
    if (!insp) return fails("the inspector opens");
    for (const s of ["request", "organization", "note", "timeline"]) if (!insp.querySelector(\`[data-testid="request-section-\${s}"]\`)) fails(\`the \${s} section\`);
    if (insp.querySelector('[data-testid="request-section-words"]')) fails("no *Their words* — nobody asked them anything yet");
    if (!/NexSales/.test(insp.querySelector('[data-testid="request-section-organization"]')?.textContent ?? "")) fails("the starter pack by name");
    if (!/200 NXC/.test(insp.textContent ?? "")) fails("the welcome credits");
    if (!insp.querySelector('[data-testid="request-note"]')?.textContent?.includes("Vilnius forum")) fails("the owner's line in the invitation");
    if (!insp.querySelector('[data-testid="request-revoke"]')) fails("Revoke is the one action");
    if (insp.querySelector('[data-testid="request-approve"]')) fails("never Approve — the person's click approves ()");
    const tl = insp.querySelector('[data-testid="request-timeline"]')?.textContent ?? "";
    if (!/invitation sent|запрошення надіслано/.test(tl) || !/stops working|перестає діяти/.test(tl)) fails("the timeline: prepared · sent · the link's end");
  }
}`,...q.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...InspectorPrepared,
  name: "Inspector · prepared · українською",
  ...uk
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Revoke · the confirmation in place (DS-3034)",
  render: () => <Queue scope="prepared" open="oreq_01jb01" panel="revoke" />,
  play: async ({
    canvasElement
  }) => {
    const panel = canvasElement.querySelector('[data-testid="request-revoke-panel"]');
    if (!panel) return fails("Revoke confirms where it was taken — never a modal (DS-7004)");
    if (!/ruta@baltic-fleet\\.example/.test(panel.querySelector("h3")?.textContent ?? "")) fails("the title names the address the link went to");
    if (!/Nothing was created|нічого не створено/i.test(panel.textContent ?? "")) fails("the effect: nothing was created");
    if (!panel.querySelector('[data-testid="revoke-confirm"]')) fails("one destructive primary");
  }
}`,...v.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...RevokeDialog,
  name: "Revoke · українською",
  ...uk
}`,...U.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Revoke · refused by the server (the person already opened it)",
  render: () => <Queue scope="prepared" open="oreq_01jb01" panel="revoke" outcome="refused" />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="revoke-confirm"]')?.click();
    await new Promise(r => setTimeout(r, 60));
    if (!canvasElement.querySelector('[data-testid="revoke-error"]')) fails("the refusal is shown in the panel, the row stays");
  }
}`,...Q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Inspector · a prepared row the person opened (approved by their click, )",
  render: () => <Queue scope="approved" open="oreq_01jb02" />,
  play: async ({
    canvasElement
  }) => {
    const insp = canvasElement.querySelector('[data-testid="request-inspector"]');
    if (!insp) return fails("the inspector opens");
    if (!insp.querySelector('[data-testid="request-approved-row"]')) fails("approved, with the organization to open");
    if (!insp.querySelector('[data-testid="request-open-organization"]')) fails("the organization exists — open it");
    if (!/opened the invitation|відкрив\\(ла\\) запрошення/.test(insp.querySelector('[data-testid="request-timeline"]')?.textContent ?? "")) fails("the timeline says their click created it");
    if (!/Prepared by|Підготував/.test(insp.querySelector('[data-testid="request-section-request"]')?.textContent ?? "")) fails("the origin stays visible after approval");
  }
}`,...F.parameters?.docs?.source}}};export{f as ApproveDialog,P as ApproveDialogUkrainian,R as ApproveRefused,j as ApprovedRow,y as DeclineDialog,z as DeclineDialogUkrainian,O as DeclinedRow,l as Denied,b as DeniedUkrainian,x as Empty,k as EmptyScope,D as Error,_ as InspectorAlone,m as InspectorOpen,q as InspectorPrepared,F as InspectorPreparedOpened,I as InspectorPreparedUkrainian,C as InspectorUkrainian,E as Loading,A as Offline,d as Populated,g as PopulatedAll,w as PopulatedApproved,S as PopulatedUkrainian,h as PreparedScope,T as PreparedScopeUkrainian,v as RevokeDialog,U as RevokeDialogUkrainian,Q as RevokeRefused,B as Walkthrough,je as __namedExportsOrder,ze as default};
