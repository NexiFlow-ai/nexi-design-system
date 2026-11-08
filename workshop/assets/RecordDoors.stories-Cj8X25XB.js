import{j as n,r as E,Z as k}from"./iframe-C_4ax-Jm.js";import{a as _}from"./fixtures-B65KySee.js";import{h as x,b as u,s as N,r as S,a as B,c as j}from"./scene-CqiggoaI.js";import{A}from"./AddDocumentForm-CqIPofoy.js";import{C as I,c as O,a as T}from"./CustomFields-Cxf7J07v.js";import{E as F}from"./EditAccountForm-CsxiFfIa.js";import{F as R}from"./FieldsSettings-C6JZFxf3.js";import{N as g}from"./NewContactForm-tbrb7SNh.js";import{N as L}from"./NewQuoteForm-Cso4OZbM.js";import"./preload-helper-PPVm8Dsz.js";import"./personas-BIiIeh3_.js";import"./types-D9fO6RJU.js";import"./SaveLadder-8DhFuzkV.js";const D=u("nazar"),w=u("ihor"),l=B(D).map(e=>({id:e.id,name:e.name})),m=x(w).schemas.find(e=>e.record_type==="account").fields,P=x(w).schemas.find(e=>e.record_type==="contact").fields,s=j(w,"acc_poltava").account;function a({children:e}){return n.jsxs("div",{className:"nexus-cc-split nexus-sales-story-column","data-inspector":"open",children:[n.jsx("div",{className:"nexus-cc-page","data-layout":"dense"}),e]})}const X={title:"Apps/NexSales/Record doors",parameters:{ds:"DS-7002",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/accounts"}}},f={name:"New contact · from the list (the account is a choice)",render:()=>n.jsx(a,{children:n.jsx(g,{accounts:l,fields:P,create:async e=>({id:"ct_new",account_id:e.account_id,name:e.name,role:e.role??"",email:e.email,phone:e.phone,primary:!1,source:{kind:"native"},custom_fields:e.custom_fields}),onClose:()=>{},onCreated:()=>{}})})},h={name:"New contact · on the account page (the account is given)",render:()=>n.jsx(a,{children:n.jsx(g,{accounts:l.slice(0,1),accountId:l[0].id,create:async e=>({id:"ct_new",account_id:e.account_id,name:e.name,role:e.role??"",email:e.email,phone:e.phone,primary:!1,source:{kind:"native"}}),onClose:()=>{},onCreated:()=>{}})})},y={name:"New quote · the header (title · amount · status · valid until · the body's link)",render:()=>n.jsx(a,{children:n.jsx(L,{accounts:l,create:async e=>({id:"q_new",account_id:e.account_id,title:e.title,version:1,status:e.status??"draft",amount:e.amount,currency:e.currency,valid_until:e.valid_until,source:{kind:"native"}}),onClose:()=>{},onCreated:()=>{}})})},v={name:"Add document · name · kind · link",render:()=>n.jsx(a,{children:n.jsx(A,{accountId:l[0].id,create:async e=>({id:"doc_new",account_id:e.account_id,name:e.name,kind:e.kind,at:"2026-10-12T09:00:00Z",href:e.href,source:{kind:"native"}}),onClose:()=>{},onCreated:()=>{}})})},C={name:"Edit details · built-ins and custom fields, prefilled",render:()=>n.jsx(a,{children:n.jsx(F,{account:s,fields:m,save:async(e,t)=>_(s,t),onClose:()=>{},onSaved:()=>{}})})},r={name:"Edit details · the source has a newer version (keep mine · take theirs)",render:()=>{let e=0;return n.jsx(a,{children:n.jsx(F,{account:{...s,city:"Полтава"},fields:m,provider:"BAS",save:async(t,o)=>{if(e+=1,e===1)throw{status:409,body:{code:"CONFLICT",message:"SOURCE_CONFLICT",diff:[{field:"city",mine:o.city??"",theirs:"Львів"}],intent_id:"wi_3",source_revision:"rev9"}};return _(s,o)},resolveConflict:async()=>{},onClose:()=>{},onSaved:()=>{}})})},play:async({canvasElement:e})=>{const t=p=>e.querySelector(`[data-testid="${p}"]`),o=t("account-edit-city");Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(o,"Київ"),o.dispatchEvent(new Event("input",{bubbles:!0})),t("account-edit-save")?.click();for(let p=0;p<50&&!t("account-edit-ladder");p+=1)await new Promise(b=>setTimeout(b,20));if(!t("account-edit-ladder")||!t("ladder-keep-mine")||!t("ladder-take-theirs"))throw new Error("the conflict ladder with keep mine · take theirs did not appear");if(t("ladder-merge"))throw new Error("a record's conflict offers no merge")}},c={name:"Custom fields · inputs (one refused by name)",parameters:{layout:"padded"},render:()=>{const[e,t]=E.useState({edrpou_branch:"x"});return n.jsx("div",{className:"nexus-sales-story-narrow",children:n.jsx(I,{defs:m,values:e,onChange:t,issues:{edrpou_branch:"Expected a number"},testIdPrefix:"story-cf"})})}},i={name:"Custom fields · facts",parameters:{layout:"padded"},render:()=>n.jsxs("div",{className:"nexus-sales-story-narrow",children:[n.jsx(k,{items:O(m,s.custom_fields,"en","Yes","No")}),n.jsx("div",{className:"nexus-inspector-section",children:n.jsx(T,{defs:m,values:s.custom_fields,testIdPrefix:"story-cf-fact"})})]})},d={name:"Settings › Fields · a sales admin",parameters:{layout:"padded",workbench:{ns:"sales",path:"/sales/settings"}},render:()=>n.jsx(R,{fields:S(x(u("yuliia"))),builtin:N(u("yuliia")).fields,put:async e=>({record_type:e.record_type,version:2,fields:e.fields}),apply:async()=>({schemas:x(u("yuliia")).schemas}),onChanged:()=>{}})},ee=["NewContact","NewContactOnAccount","NewQuote","AddDocument","EditAccount","EditAccountConflict","CustomFieldsOnAForm","CustomFieldsRead","SettingsFields"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "New contact · from the list (the account is a choice)",
  render: () => <Column>
      <NewContactForm accounts={accounts} fields={contactFields} create={async i => ({
      id: "ct_new",
      account_id: i.account_id,
      name: i.name,
      role: i.role ?? "",
      email: i.email,
      phone: i.phone,
      primary: false,
      source: {
        kind: "native"
      },
      custom_fields: i.custom_fields
    })} onClose={() => {}} onCreated={() => {}} />
    </Column>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "New contact · on the account page (the account is given)",
  render: () => <Column>
      <NewContactForm accounts={accounts.slice(0, 1)} accountId={accounts[0]!.id} create={async i => ({
      id: "ct_new",
      account_id: i.account_id,
      name: i.name,
      role: i.role ?? "",
      email: i.email,
      phone: i.phone,
      primary: false,
      source: {
        kind: "native"
      }
    })} onClose={() => {}} onCreated={() => {}} />
    </Column>
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "New quote · the header (title · amount · status · valid until · the body's link)",
  render: () => <Column>
      <NewQuoteForm accounts={accounts} create={async i => ({
      id: "q_new",
      account_id: i.account_id,
      title: i.title,
      version: 1,
      status: i.status ?? "draft",
      amount: i.amount,
      currency: i.currency,
      valid_until: i.valid_until,
      source: {
        kind: "native"
      }
    })} onClose={() => {}} onCreated={() => {}} />
    </Column>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Add document · name · kind · link",
  render: () => <Column>
      <AddDocumentForm accountId={accounts[0]!.id} create={async i => ({
      id: "doc_new",
      account_id: i.account_id,
      name: i.name,
      kind: i.kind,
      at: "2026-10-12T09:00:00Z",
      href: i.href,
      source: {
        kind: "native"
      }
    })} onClose={() => {}} onCreated={() => {}} />
    </Column>
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Edit details · built-ins and custom fields, prefilled",
  render: () => <Column>
      <EditAccountForm account={poltava} fields={accountFields} save={async (_id, i) => applyEdit(poltava, i)} onClose={() => {}} onSaved={() => {}} />
    </Column>
}`,...C.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Edit details · the source has a newer version (keep mine · take theirs)",
  render: () => {
    let attempts = 0;
    return <Column>
        <EditAccountForm account={{
        ...poltava,
        city: "Полтава"
      }} fields={accountFields} provider="BAS" save={async (_id, i) => {
        attempts += 1;
        if (attempts === 1) throw {
          status: 409,
          body: {
            code: "CONFLICT",
            message: "SOURCE_CONFLICT",
            diff: [{
              field: "city",
              mine: i.city ?? "",
              theirs: "Львів"
            }],
            intent_id: "wi_3",
            source_revision: "rev9"
          }
        };
        return applyEdit(poltava, i);
      }} resolveConflict={async () => undefined} onClose={() => {}} onSaved={() => {}} />
      </Column>;
  },
  // the workshop runs \`play({ canvasElement })\` (render · play · axe): the person changes the city, saves, meets the
  // source's newer version — the ladder with its two doors is in the footer
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    const city = by("account-edit-city") as HTMLInputElement;
    const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    set?.call(city, "Київ");
    city.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    by("account-edit-save")?.click();
    for (let i = 0; i < 50 && !by("account-edit-ladder"); i += 1) await new Promise(r => setTimeout(r, 20));
    if (!by("account-edit-ladder") || !by("ladder-keep-mine") || !by("ladder-take-theirs")) throw new Error("the conflict ladder with keep mine · take theirs did not appear");
    if (by("ladder-merge")) throw new Error("a record's conflict offers no merge");
  }
}`,...r.parameters?.docs?.source},description:{story:"S4-B ( · ): the source holds a newer version — the ladder in the footer says mine · theirs per field\n and offers *keep mine · take theirs*; the primary waits for the answer. The save answers `SOURCE_CONFLICT` once (the\n double's first attempt), then saves — *keep mine* resubmits against the source's revision.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Custom fields · inputs (one refused by name)",
  parameters: {
    layout: "padded"
  },
  render: () => {
    const [values, setValues] = useState<CustomFields>({
      edrpou_branch: "x"
    });
    return <div className="nexus-sales-story-narrow">
        <CustomFieldInputs defs={accountFields} values={values} onChange={setValues} issues={{
        edrpou_branch: "Expected a number"
      }} testIdPrefix="story-cf" />
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:": the organization's fields on a form (schema order; a choice is a `Select`, a flag a `Switch`) and a refused value said by name",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Custom fields · facts",
  parameters: {
    layout: "padded"
  },
  render: () => <div className="nexus-sales-story-narrow">
      <Facts items={customFieldFacts(accountFields, poltava.custom_fields, "en", "Yes", "No")} />
      <div className="nexus-inspector-section">
        <CustomFieldFacts defs={accountFields} values={poltava.custom_fields} testIdPrefix="story-cf-fact" />
      </div>
    </div>
}`,...i.parameters?.docs?.source},description:{story:": the same fields read — as `Facts` in the rail and as the Inspector's rows",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Settings › Fields · a sales admin",
  parameters: {
    layout: "padded",
    workbench: {
      ns: "sales",
      path: "/sales/settings"
    }
  },
  render: () => <FieldsSettings fields={ready(store.fields(as("yuliia")))} builtin={store.settings(as("yuliia")).fields} put={async i => ({
    record_type: i.record_type,
    version: 2,
    fields: i.fields
  })} apply={async () => ({
    schemas: store.fields(as("yuliia")).schemas
  })} onChanged={() => {}} />
}`,...d.parameters?.docs?.source},description:{story:"Settings › Fields ( · DS-7010): the record type's own fields, then the organization's — Edit · Remove · New field · Apply preset",...d.parameters?.docs?.description}}};export{v as AddDocument,c as CustomFieldsOnAForm,i as CustomFieldsRead,C as EditAccount,r as EditAccountConflict,f as NewContact,h as NewContactOnAccount,y as NewQuote,d as SettingsFields,ee as __namedExportsOrder,X as default};
