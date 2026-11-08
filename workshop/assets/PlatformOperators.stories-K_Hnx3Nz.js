import{j as r,ak as C}from"./iframe-C_4ax-Jm.js";/* empty css                */import{f as M,d as i}from"./platform-BhtOchBX.js";import{P as n,O as G,R as H,a as D}from"./Operators-B8c5w-d2.js";import"./preload-helper-PPVm8Dsz.js";import"./chatApi-DU7mAKQS.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";const Y={title:"Apps/NexCore/Platform Operations/Operators",parameters:{ds:"DS-6806",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform/operators?as=owner"},docs:{description:{component:" S1 — Platform Operations › Operators ( · ) and the reason-coded confirmation every sensitive\nact in the operator scope goes through (revoke · suspend · reinstate, ). Lives under the operator scope banner\n(DS-6806); the ladder is DS-7006. Fixtures: the synthetic bindings of `fixtures/platform.ts`; nothing is real."}}}},c=e=>({state:"ready",data:e}),T=()=>{},a=async()=>{},_=async()=>{throw new globalThis.Error("This person already holds that role.")},o=e=>{throw new globalThis.Error(e)},d=e=>r.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:e});async function s(e,t,j=50){for(let B=0;B<j;B++){if(e())return;await new Promise(A=>setTimeout(A,10))}o(t)}function P(e,t){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))}const u={name:"Operators · as a platform operator (read only)",render:()=>r.jsx(n,{result:c(i)}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="operator-scope-banner"]')||o("every operator screen carries the scope banner (DS-6806)"),e.querySelector('[data-testid="operators-table"]')||o("the bindings are a table"),e.querySelector('[data-testid="operators-grant"]')&&o("grant is drawn only for a provider owner"),/@/.test(e.textContent??"")&&o("principals are ids — no e-mail on an operator screen")}},p={name:"Operators · as the provider owner (grant · revoke)",render:()=>r.jsx(n,{result:c(i),canManage:!0,onGrant:a,onRevoke:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="operators-grant"]')||o("the provider owner sees *Grant*"),e.querySelector('[data-testid^="revoke-"]')||o("an active binding offers *Revoke*")}},m={...p,name:"Operators · українською",globals:{locale:"uk"}},f={name:"Operators · nobody bound yet",render:()=>r.jsx(n,{result:{state:"empty"},canManage:!0,onGrant:a})},g={render:()=>r.jsx(n,{result:{state:"loading"}})},y={render:()=>r.jsx(n,{result:{state:"error",retry:T}})},v={name:"Operators · denied (a URL without the operator scope is a 404 in the app — the view's denied rung)",render:()=>r.jsx(n,{result:{state:"denied"}})},S={render:()=>r.jsx(n,{result:{state:"offline",retry:T}})},h={name:"Operators · Grant form open (principal · role · expiry · approval)",render:()=>r.jsx(n,{result:c(i),canManage:!0,onGrant:a,onRevoke:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="operators-grant"]')?.click(),await s(()=>!!e.querySelector('[data-testid="grant-form"]'),"the grant form opens in the Inspector (R4)");for(const t of["grant-principal","grant-role","grant-expires","grant-approval"])e.querySelector(`[data-testid="${t}"]`)||o(`the grant form asks for ${t}`)}},O={name:"Operators · Grant · submitted empty (principal and approval are required)",render:()=>r.jsx(n,{result:c(i),canManage:!0,onGrant:a,onRevoke:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="operators-grant"]')?.click(),await s(()=>!!e.querySelector('[data-testid="grant-submit"]'),"the grant form opens"),e.querySelector('[data-testid="grant-submit"]')?.click(),await s(()=>e.querySelectorAll('[aria-invalid="true"]').length>=2,"principal and approval reference are marked required")}},k={name:"Operators · Grant refused by the server (shown in the form)",render:()=>r.jsx(n,{result:c(i),canManage:!0,onGrant:_,onRevoke:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="operators-grant"]')?.click(),await s(()=>!!e.querySelector('[data-testid="grant-principal"]'),"the grant form opens"),P(e.querySelector('[data-testid="grant-principal"]'),"usr_new_operator"),P(e.querySelector('[data-testid="grant-approval"]'),"nexus://tasks/approval/apr_0099"),e.querySelector('[data-testid="grant-submit"]')?.click(),await s(()=>!!e.querySelector('[data-testid="grant-form"] [role="alert"]'),"the server's refusal is shown where the grant was taken")}},l={name:"Operators · Revoke · confirmation open (reason required)",render:()=>r.jsx(n,{result:c(i),canManage:!0,onGrant:a,onRevoke:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid^="revoke-"]')?.click(),await s(()=>!!e.querySelector('[data-testid="revoke-panel"]'),"revoke confirms inline, on the page (R4)"),e.querySelector('[data-testid="reason-confirm"]')?.click(),await s(()=>!!e.querySelector('[data-testid="revoke-panel"] [aria-invalid="true"]'),"a revoke without a reason code does not go")}},w={...l,name:"Operators · Revoke · українською",globals:{locale:"uk"}},R={name:"Role chips (the six roles, and one this build does not know)",render:()=>d(r.jsx("p",{className:"nexus-cc-platform-orgname",children:["provider_owner","platform_operator","billing_operator","sre_operator","support_supervisor","support_agent","auditor"].map(e=>r.jsx(H,{role:e},e))}))};function L({onConfirm:e}){const{t}=C();return r.jsx(D,{title:t("core.platform.operators.revoke.title",{principal:i[1].principal}),body:t("core.platform.operators.revoke.effect"),confirmLabel:t("core.platform.operators.revoke"),pendingLabel:t("core.platform.operators.revoke.pending"),onConfirm:e,onCancel:()=>{},testId:"revoke-panel"})}const q={name:"Reason panel · pending (the confirm is disabled while the server answers)",render:()=>d(r.jsx(L,{onConfirm:()=>new Promise(()=>{})})),play:async({canvasElement:e})=>{P(e.querySelector('[data-testid="reason-code"]'),"offboarding"),e.querySelector('[data-testid="reason-confirm"]')?.click(),await s(()=>!!e.querySelector('[data-testid="reason-pending"]'),"the panel shows its pending state"),e.querySelector('[data-testid="reason-confirm"]')?.disabled||o("the confirm is disabled while pending")}},x={name:"Suspend an organization · confirmation ()",render:()=>d(r.jsx(G,{org:M("org_acme"),action:"suspend",onConfirm:a,onCancel:()=>{}}))},b={name:"Reinstate an organization · confirmation",render:()=>d(r.jsx(G,{org:M("org_dnipro"),action:"reinstate",onConfirm:a,onCancel:()=>{}}))},E={name:"Reason panel · the server refused (shown where the action was taken)",render:()=>d(r.jsx(L,{onConfirm:_})),play:async({canvasElement:e})=>{P(e.querySelector('[data-testid="reason-code"]'),"offboarding"),e.querySelector('[data-testid="reason-confirm"]')?.click(),await s(()=>!!e.querySelector('[data-testid="reason-error"]'),"the refusal is a sentence in the panel")}},Z=["Operators","OperatorsOwner","OperatorsUkrainian","OperatorsEmpty","OperatorsLoading","OperatorsError","OperatorsDenied","OperatorsOffline","GrantOpen","GrantRequired","GrantRefused","RevokeOpen","RevokeUkrainian","Roles","ReasonPanelPending","SuspendPanel","ReinstatePanel","ReasonPanelRefused"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Operators · as a platform operator (read only)",
  render: () => <PlatformOperatorsScreen result={ready(OPERATORS)} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="operator-scope-banner"]')) fails("every operator screen carries the scope banner (DS-6806)");
    if (!canvasElement.querySelector('[data-testid="operators-table"]')) fails("the bindings are a table");
    if (canvasElement.querySelector('[data-testid="operators-grant"]')) fails("grant is drawn only for a provider owner");
    if (/@/.test(canvasElement.textContent ?? "")) fails("principals are ids — no e-mail on an operator screen");
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Operators · as the provider owner (grant · revoke)",
  render: () => <PlatformOperatorsScreen result={ready(OPERATORS)} canManage onGrant={noop} onRevoke={noop} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="operators-grant"]')) fails("the provider owner sees *Grant*");
    if (!canvasElement.querySelector('[data-testid^="revoke-"]')) fails("an active binding offers *Revoke*");
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...OperatorsOwner,
  name: "Operators · українською",
  globals: {
    locale: "uk"
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Operators · nobody bound yet",
  render: () => <PlatformOperatorsScreen result={{
    state: "empty"
  }} canManage onGrant={noop} />
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOperatorsScreen result={{
    state: "loading"
  }} />
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOperatorsScreen result={{
    state: "error",
    retry
  }} />
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Operators · denied (a URL without the operator scope is a 404 in the app — the view's denied rung)",
  render: () => <PlatformOperatorsScreen result={{
    state: "denied"
  }} />
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOperatorsScreen result={{
    state: "offline",
    retry
  }} />
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Operators · Grant form open (principal · role · expiry · approval)",
  render: () => <PlatformOperatorsScreen result={ready(OPERATORS)} canManage onGrant={noop} onRevoke={noop} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="operators-grant"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="grant-form"]'), "the grant form opens in the Inspector (R4)");
    for (const id of ["grant-principal", "grant-role", "grant-expires", "grant-approval"]) {
      if (!canvasElement.querySelector(\`[data-testid="\${id}"]\`)) fails(\`the grant form asks for \${id}\`);
    }
  }
}`,...h.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Operators · Grant · submitted empty (principal and approval are required)",
  render: () => <PlatformOperatorsScreen result={ready(OPERATORS)} canManage onGrant={noop} onRevoke={noop} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="operators-grant"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="grant-submit"]'), "the grant form opens");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="grant-submit"]')?.click();
    await until(() => canvasElement.querySelectorAll('[aria-invalid="true"]').length >= 2, "principal and approval reference are marked required");
  }
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Operators · Grant refused by the server (shown in the form)",
  render: () => <PlatformOperatorsScreen result={ready(OPERATORS)} canManage onGrant={refuses} onRevoke={noop} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="operators-grant"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="grant-principal"]'), "the grant form opens");
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="grant-principal"]')!, "usr_new_operator");
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="grant-approval"]')!, "nexus://tasks/approval/apr_0099");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="grant-submit"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="grant-form"] [role="alert"]'), "the server's refusal is shown where the grant was taken");
  }
}`,...k.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Operators · Revoke · confirmation open (reason required)",
  render: () => <PlatformOperatorsScreen result={ready(OPERATORS)} canManage onGrant={noop} onRevoke={noop} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid^="revoke-"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="revoke-panel"]'), "revoke confirms inline, on the page (R4)");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="reason-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="revoke-panel"] [aria-invalid="true"]'), "a revoke without a reason code does not go");
  }
}`,...l.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...RevokeOpen,
  name: "Operators · Revoke · українською",
  globals: {
    locale: "uk"
  }
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Role chips (the six roles, and one this build does not know)",
  render: () => pad(<p className="nexus-cc-platform-orgname">{["provider_owner", "platform_operator", "billing_operator", "sre_operator", "support_supervisor", "support_agent", "auditor"].map(r => <RoleChip key={r} role={r} />)}</p>)
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Reason panel · pending (the confirm is disabled while the server answers)",
  render: () => pad(<RevokePanelAlone onConfirm={() => new Promise(() => undefined)} />),
  play: async ({
    canvasElement
  }) => {
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="reason-code"]')!, "offboarding");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="reason-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="reason-pending"]'), "the panel shows its pending state");
    if (!canvasElement.querySelector<HTMLButtonElement>('[data-testid="reason-confirm"]')?.disabled) fails("the confirm is disabled while pending");
  }
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Suspend an organization · confirmation ()",
  render: () => pad(<OrganizationActionPanel org={fleetOrg("org_acme")} action="suspend" onConfirm={noop} onCancel={() => undefined} />)
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Reinstate an organization · confirmation",
  render: () => pad(<OrganizationActionPanel org={fleetOrg("org_dnipro")} action="reinstate" onConfirm={noop} onCancel={() => undefined} />)
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Reason panel · the server refused (shown where the action was taken)",
  render: () => pad(<RevokePanelAlone onConfirm={refuses} />),
  play: async ({
    canvasElement
  }) => {
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="reason-code"]')!, "offboarding");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="reason-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="reason-error"]'), "the refusal is a sentence in the panel");
  }
}`,...E.parameters?.docs?.source}}};export{h as GrantOpen,k as GrantRefused,O as GrantRequired,u as Operators,v as OperatorsDenied,f as OperatorsEmpty,y as OperatorsError,g as OperatorsLoading,S as OperatorsOffline,p as OperatorsOwner,m as OperatorsUkrainian,q as ReasonPanelPending,E as ReasonPanelRefused,b as ReinstatePanel,l as RevokeOpen,w as RevokeUkrainian,R as Roles,x as SuspendPanel,Z as __namedExportsOrder,Y as default};
