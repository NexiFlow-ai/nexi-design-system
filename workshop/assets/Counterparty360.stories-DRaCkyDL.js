import{j as e}from"./iframe-C_4ax-Jm.js";import{p as s,a as B,b as E,c as V}from"./scene-CqiggoaI.js";import{C as P,a as L,b as D,G as Z,M as O,N as H,R as d,c as S,T as G}from"./Requisites-DiZXmvJx.js";import{E as X}from"./EditAccountForm-CsxiFfIa.js";import"./preload-helper-PPVm8Dsz.js";import"./fixtures-B65KySee.js";import"./personas-BIiIeh3_.js";import"./format-BBzwDLam.js";import"./flags--SfV1VDA.js";import"./SourceChip-DFGcc6Vx.js";import"./routes-DgN3bgVk.js";import"./types-D9fO6RJU.js";import"./CustomFields-Cxf7J07v.js";import"./SaveLadder-8DhFuzkV.js";const F=E("nazar"),c=(n,r=F)=>V(r,n),a=c("acc_horizon"),i=a.contracts[0],M=c("acc_bukovel").contracts[0],U=(()=>{const n=c("acc_horizon"),{bank_accounts:r,...I}=n.account;return{...n,account:I,changes:n.changes.map(q=>q.field==="bank_accounts"?{...q,from:null,to:null,masked:!0}:q)}})();function t({children:n}){return e.jsxs("div",{className:"nexus-cc-split nexus-sales-story-column","data-inspector":"open",children:[e.jsx("div",{className:"nexus-cc-page","data-layout":"dense"}),n]})}function o({children:n}){return e.jsx("aside",{className:"nexus-sales-rail nexus-sales-story-narrow nexus-sales-story-pad",children:n})}const de={title:"Apps/NexSales/Counterparty 360",parameters:{ds:"DS-3031",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/accounts/acc_horizon"}}},m={name:"Requisites · head of sales (bank accounts, one unverified with Verify)",render:()=>e.jsx(o,{children:e.jsx(S,{account:a.account,personName:s,canVerify:!0,personaId:"nazar",verify:async(n,r)=>({...a.account,bank_accounts:a.account.bank_accounts.map(I=>({...I,verification:{state:"verified",by_id:"nazar",at:"2026-10-09T09:30:00+03:00"}}))})})})},u={name:"Requisites · the one who typed it (no Verify — )",render:()=>e.jsx(o,{children:e.jsx(S,{account:a.account,personName:s,canVerify:!0,personaId:"marta",verify:async()=>a.account})})},p={name:"Requisites · a reader (the bank accounts are absent, P-19)",render:()=>e.jsx(o,{children:e.jsx(S,{account:U.account,personName:s,canVerify:!1,personaId:"oksana"})})},l={name:"Requisites · empty",render:()=>e.jsx(o,{children:e.jsx(S,{account:c("acc_dim").account,personName:s,canVerify:!0,personaId:"nazar"})})},h={name:"Team · populated and empty",render:()=>e.jsxs(o,{children:[e.jsx(G,{members:a.team,personName:s}),e.jsx(G,{members:[],personName:s})]})},Y=[...a.contracts,M,...c("acc_steppe",E("ihor")).contracts],y={name:"Contract rows · active ending soon · draft · expired",render:()=>e.jsx("div",{className:"nexus-sales-story-pad",children:e.jsx(D,{rows:Y,onSelect:()=>{},empty:{title:"No contracts"}})})},C={name:"Contract rows · empty",render:()=>e.jsx("div",{className:"nexus-sales-story-pad",children:e.jsx(D,{rows:[],onSelect:()=>{},empty:{title:"No contracts",body:"A contract names our entity, the currency and the terms a quote will inherit."}})})},g={name:"Contract Inspector · active (Terminate)",render:()=>e.jsx(t,{children:e.jsx(L,{contract:i,personName:s,canTransition:!0,transition:async(n,r)=>({...i,status:r.to}),onClose:()=>{}})})},x={name:"Contract Inspector · draft → Mark signed (the door open)",render:()=>e.jsx(t,{children:e.jsx(L,{contract:M,personName:s,canTransition:!0,transition:async(n,r)=>({...M,status:r.to,signed_at:r.signed_at}),onClose:()=>{},initialDoor:"activate"})})},_={name:"Contract Inspector · Terminate (the door open)",render:()=>e.jsx(t,{children:e.jsx(L,{contract:i,personName:s,canTransition:!0,transition:async(n,r)=>({...i,status:r.to}),onClose:()=>{},initialDoor:"terminate"})})},f={name:"Contract Inspector · a reader (no doors)",render:()=>e.jsx(t,{children:e.jsx(L,{contract:i,personName:s,canTransition:!1,onClose:()=>{}})})},R={name:"New contract (FormInspector)",render:()=>e.jsx(t,{children:e.jsx(H,{accountId:"acc_horizon",defaults:{our_entity:"lystva",currency:"UAH"},create:async n=>({id:"con_new",account_id:n.account_id,number:n.number,our_entity:n.our_entity,currency:n.currency,settlement_kind:n.settlement_kind??"postpayment",payment_terms_days:n.payment_terms_days??0,auto_renew:!!n.auto_renew,status:"draft",source:{kind:"native"}}),onClose:()=>{},onCreated:()=>{}})})},v={name:"Changes · head of sales (the bank-account change says *restricted*, never the value)",render:()=>e.jsx(t,{children:e.jsx(P,{account:a.account,rows:a.changes,personName:s,onClose:()=>{}})})},b={name:"Changes · empty",render:()=>e.jsx(t,{children:e.jsx(P,{account:c("acc_dim").account,rows:[],personName:s,onClose:()=>{}})})},N={name:"Changes · loading",render:()=>e.jsx(t,{children:e.jsx(P,{account:a.account,rows:[],state:"loading",personName:s,onClose:()=>{}})})},j={name:"Merge · pick the other account (ActionPanel)",render:()=>e.jsx("div",{className:"nexus-sales-story-pad",children:e.jsx(O,{keep:a.account,candidates:B(F).filter(n=>n.id!=="acc_horizon"),provider:null,merge:async()=>({...a.account,revision:2}),onMerged:()=>{},onCancel:()=>{}})})},w={name:"Merge · an ERP-owned account is refused (MERGE_EXTERNAL)",render:()=>e.jsx("div",{className:"nexus-sales-story-pad",children:e.jsx(O,{keep:V(E("ihor"),"acc_agrolan").account,candidates:B(E("ihor")).filter(n=>n.id!=="acc_agrolan"),provider:"BAS",merge:async()=>{throw{body:{code:"CONFLICT",message:"MERGE_EXTERNAL"}}},onMerged:()=>{},onCancel:()=>{}})})},k={name:"Edit details · the requisites sections (lead: bank accounts and team)",render:()=>e.jsx(t,{children:e.jsx(X,{account:a.account,fields:[],parents:B(F).filter(n=>n.id!=="acc_horizon").map(n=>({id:n.id,name:n.name})),people:[{id:"nazar",name:"Nazar Holub"},{id:"marta",name:"Marta Yarema"}],canBank:!0,canTeam:!0,team:a.team,save:async(n,r)=>({...a.account,...r.notes!==void 0?{notes:r.notes??void 0}:{}}),onClose:()=>{},onSaved:()=>{}})})},z={name:"About · Part of … (a parent above, members below — )",render:()=>e.jsx(o,{children:e.jsx(Z,{group:{parents:[{id:"acc_agrolan",name:"Agro-Lan"}],members:[]},members:2})})},T={name:"About · Part of … (a parent of two, no parent of its own)",render:()=>e.jsx(o,{children:e.jsx(Z,{group:{parents:[],members:[]},members:2})})},A={name:"About · the registry chip, every state ()",render:()=>e.jsxs(o,{children:[e.jsx(d,{status:{status:"active",checked_at:"2026-10-01T09:00:00Z",source:"person"}})," ",e.jsx(d,{status:{status:"in_liquidation",checked_at:"2026-10-01T09:00:00Z",source:"person"}})," ",e.jsx(d,{status:{status:"terminated",checked_at:"2026-10-01T09:00:00Z",source:"person"}})," ",e.jsx(d,{status:{status:"unknown",checked_at:"2026-10-01T09:00:00Z",source:"person"}})]})},me=["RequisitesLead","RequisitesAuthor","RequisitesReader","RequisitesEmpty","Team","Contracts","ContractsEmpty","ContractActive","ContractDraftActivate","ContractTerminate","ContractReader","NewContract","ChangesLead","ChangesEmpty","ChangesLoading","Merge","MergeExternal","EditRequisites","GroupLineParentAndMembers","GroupLineMembersOnly","RegistryChips"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Requisites · head of sales (bank accounts, one unverified with Verify)",
  render: () => <Rail>
      <Requisites account={horizonLead.account} personName={personName} canVerify personaId="nazar" verify={async (_a, _b) => ({
      ...horizonLead.account,
      bank_accounts: horizonLead.account.bank_accounts!.map(b => ({
        ...b,
        verification: {
          state: "verified",
          by_id: "nazar",
          at: "2026-10-09T09:30:00+03:00"
        }
      }))
    })} />
    </Rail>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Requisites · the one who typed it (no Verify — )",
  render: () => <Rail>
      <Requisites account={horizonLead.account} personName={personName} canVerify personaId="marta" verify={async () => horizonLead.account} />
    </Rail>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Requisites · a reader (the bank accounts are absent, P-19)",
  render: () => <Rail>
      <Requisites account={horizonRep.account} personName={personName} canVerify={false} personaId="oksana" />
    </Rail>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Requisites · empty",
  render: () => <Rail>
      <Requisites account={read("acc_dim").account} personName={personName} canVerify personaId="nazar" />
    </Rail>
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Team · populated and empty",
  render: () => <Rail>
      <TeamSection members={horizonLead.team} personName={personName} />
      <TeamSection members={[]} personName={personName} />
    </Rail>
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Contract rows · active ending soon · draft · expired",
  render: () => <div className="nexus-sales-story-pad">
      <ContractRows rows={contracts} onSelect={() => {}} empty={{
      title: "No contracts"
    }} />
    </div>
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Contract rows · empty",
  render: () => <div className="nexus-sales-story-pad">
      <ContractRows rows={[]} onSelect={() => {}} empty={{
      title: "No contracts",
      body: "A contract names our entity, the currency and the terms a quote will inherit."
    }} />
    </div>
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Contract Inspector · active (Terminate)",
  render: () => <Column>
      <ContractInspector contract={horizonActive} personName={personName} canTransition transition={async (_id, i) => ({
      ...horizonActive,
      status: i.to
    })} onClose={() => {}} />
    </Column>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Contract Inspector · draft → Mark signed (the door open)",
  render: () => <Column>
      <ContractInspector contract={bukovelDraft} personName={personName} canTransition transition={async (_id, i) => ({
      ...bukovelDraft,
      status: i.to,
      signed_at: i.signed_at
    })} onClose={() => {}} initialDoor="activate" />
    </Column>
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Contract Inspector · Terminate (the door open)",
  render: () => <Column>
      <ContractInspector contract={horizonActive} personName={personName} canTransition transition={async (_id, i) => ({
      ...horizonActive,
      status: i.to
    })} onClose={() => {}} initialDoor="terminate" />
    </Column>
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Contract Inspector · a reader (no doors)",
  render: () => <Column>
      <ContractInspector contract={horizonActive} personName={personName} canTransition={false} onClose={() => {}} />
    </Column>
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "New contract (FormInspector)",
  render: () => <Column>
      <NewContractForm accountId="acc_horizon" defaults={{
      our_entity: "lystva",
      currency: "UAH"
    }} create={async i => ({
      id: "con_new",
      account_id: i.account_id,
      number: i.number,
      our_entity: i.our_entity,
      currency: i.currency,
      settlement_kind: i.settlement_kind ?? "postpayment",
      payment_terms_days: i.payment_terms_days ?? 0,
      auto_renew: !!i.auto_renew,
      status: "draft",
      source: {
        kind: "native"
      }
    })} onClose={() => {}} onCreated={() => {}} />
    </Column>
}`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Changes · head of sales (the bank-account change says *restricted*, never the value)",
  render: () => <Column>
      <ChangesInspector account={horizonLead.account} rows={horizonLead.changes} personName={personName} onClose={() => {}} />
    </Column>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Changes · empty",
  render: () => <Column>
      <ChangesInspector account={read("acc_dim").account} rows={[]} personName={personName} onClose={() => {}} />
    </Column>
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Changes · loading",
  render: () => <Column>
      <ChangesInspector account={horizonLead.account} rows={[]} state="loading" personName={personName} onClose={() => {}} />
    </Column>
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Merge · pick the other account (ActionPanel)",
  render: () => <div className="nexus-sales-story-pad">
      <MergePanel keep={horizonLead.account} candidates={store.accounts(lead).filter(a => a.id !== "acc_horizon")} provider={null} merge={async () => ({
      ...horizonLead.account,
      revision: 2
    })} onMerged={() => {}} onCancel={() => {}} />
    </div>
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Merge · an ERP-owned account is refused (MERGE_EXTERNAL)",
  render: () => <div className="nexus-sales-story-pad">
      <MergePanel keep={store.account(as("ihor"), "acc_agrolan").account} candidates={store.accounts(as("ihor")).filter(a => a.id !== "acc_agrolan")} provider="BAS" merge={async () => {
      throw {
        body: {
          code: "CONFLICT",
          message: "MERGE_EXTERNAL"
        }
      };
    }} onMerged={() => {}} onCancel={() => {}} />
    </div>
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Edit details · the requisites sections (lead: bank accounts and team)",
  render: () => <Column>
      <EditAccountForm account={horizonLead.account} fields={[]} parents={store.accounts(lead).filter(a => a.id !== "acc_horizon").map(a => ({
      id: a.id,
      name: a.name
    }))} people={[{
      id: "nazar",
      name: "Nazar Holub"
    }, {
      id: "marta",
      name: "Marta Yarema"
    }]} canBank canTeam team={horizonLead.team} save={async (_id, i) => ({
      ...horizonLead.account,
      ...(i.notes !== undefined ? {
        notes: i.notes ?? undefined
      } : {})
    })} onClose={() => {}} onSaved={() => {}} />
    </Column>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "About · Part of … (a parent above, members below — )",
  render: () => <Rail>
      <GroupLine group={{
      parents: [{
        id: "acc_agrolan",
        name: "Agro-Lan"
      }],
      members: []
    }} members={2} />
    </Rail>
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "About · Part of … (a parent of two, no parent of its own)",
  render: () => <Rail>
      <GroupLine group={{
      parents: [],
      members: []
    }} members={2} />
    </Rail>
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "About · the registry chip, every state ()",
  render: () => <Rail>
      <RegistryChip status={{
      status: "active",
      checked_at: "2026-10-01T09:00:00Z",
      source: "person"
    }} />{" "}
      <RegistryChip status={{
      status: "in_liquidation",
      checked_at: "2026-10-01T09:00:00Z",
      source: "person"
    }} />{" "}
      <RegistryChip status={{
      status: "terminated",
      checked_at: "2026-10-01T09:00:00Z",
      source: "person"
    }} />{" "}
      <RegistryChip status={{
      status: "unknown",
      checked_at: "2026-10-01T09:00:00Z",
      source: "person"
    }} />
    </Rail>
}`,...A.parameters?.docs?.source}}};export{b as ChangesEmpty,v as ChangesLead,N as ChangesLoading,g as ContractActive,x as ContractDraftActivate,f as ContractReader,_ as ContractTerminate,y as Contracts,C as ContractsEmpty,k as EditRequisites,T as GroupLineMembersOnly,z as GroupLineParentAndMembers,j as Merge,w as MergeExternal,R as NewContract,A as RegistryChips,u as RequisitesAuthor,l as RequisitesEmpty,m as RequisitesLead,p as RequisitesReader,h as Team,me as __namedExportsOrder,de as default};
