import{ak as S,j as r,I as j,F,B as q,v as P}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import"./ChatApiProvider-Dp0rzuLn.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */function b({projectName:e,agentName:t,note:u,onNote:f,sending:s,error:y,onSend:w,onCancel:k,onClose:T,returnFocusTo:x}){const{t:n}=S(),v=g=>{g.preventDefault(),w()};return r.jsx(j,{kind:n("agent.tools.ask.kind"),title:n("project.configure.tools.ask_admin"),subtitle:t?n("agent.tools.ask.for_agent",{agent:t,project:e}):e,onClose:T,returnFocusTo:x,testId:"ask-administrator",footer:r.jsxs("div",{className:"nexus-ask-admin-actions",children:[r.jsx(q,{type:"submit",form:"ask-administrator-form",variant:"primary",size:"toolbar",disabled:s,"data-testid":"tools-ask-send",children:n(s?"agent.tools.setup.footer.sending":"agent.tools.setup.footer.send")}),r.jsx(P,{tone:"meta",onClick:k,disabled:s,"data-testid":"tools-ask-cancel",children:n("action.cancel")})]}),children:r.jsx("form",{id:"ask-administrator-form",className:"nexus-ask-admin",onSubmit:v,noValidate:!0,"aria-busy":s?"true":void 0,"data-testid":"tools-ask-admin-form",children:r.jsx(F,{id:"tools-ask-note",label:n("agent.tools.setup.ask.note_label"),hint:n("agent.tools.ask.hint"),required:!0,error:y??null,children:g=>r.jsx("textarea",{...g,className:"nexus-input",rows:4,maxLength:1e3,value:u,onChange:E=>f(E.target.value),disabled:s,autoFocus:!0,"data-testid":"tools-ask-note"})})})})}b.__docgenInfo={description:"The panel as drawn (DS-6919) — the story's subject; `AskAdministrator` below wires it to chat-api.",methods:[],displayName:"AskAdministratorPanel",props:{projectName:{required:!0,tsType:{name:"string"},description:""},agentName:{required:!1,tsType:{name:"string"},description:"The agent the door belonged to — the subtitle names it and *Approve* binds to it; absent on the Project's tab."},note:{required:!0,tsType:{name:"string"},description:""},onNote:{required:!0,tsType:{name:"signature",type:"function",raw:"(note: string) => void",signature:{arguments:[{type:{name:"string"},name:"note"}],return:{name:"void"}}},description:""},sending:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusTo:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""}}};const D={title:"Apps/NexChat/Ask administrator",component:b,parameters:{ds:"DS-6919",layout:"fullscreen",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:`DS-6919 Ask an administrator ( S3 ·  amended · ): one field where the person is — the kit's
Inspector with the eyebrow *Request*, the Project (or *for ⟨agent⟩ · ⟨Project⟩*) as the subtitle, one required
textarea and the footer *Send for review · Cancel*. Beside the Tools tab's list, or as the agent door's own content.
Never a page, never an agent picker (). Synthetic names only.`}}},args:{projectName:"Harbour operations",note:"",onNote:()=>{},onSend:()=>{},onCancel:()=>{},onClose:()=>{}}};function A({children:e,narrow:t}){return r.jsx("div",{style:t?{display:"flex",minHeight:420,maxWidth:320}:{display:"flex",minHeight:420,justifyContent:"flex-end"},children:e})}const o=e=>t=>r.jsx(A,{narrow:e,children:r.jsx(t,{})});function a(e,t){const u=e.querySelector(`[data-testid="${t}"]`);if(!u)throw new globalThis.Error(`${t} is missing`);return u}const i={name:"populated",args:{note:"We need the port weather API (tide tables and wind) for the watch."},decorators:[o()],play:async({canvasElement:e})=>{if(a(e,"tools-ask-note"),a(e,"tools-ask-send"),a(e,"tools-ask-cancel"),e.querySelector("select, [role='combobox']"))throw new globalThis.Error("an agent picker is drawn ()");const t=a(e,"ask-administrator").textContent??"";if(!/Harbour operations/.test(t))throw new globalThis.Error("the subtitle names the Project")}},d={name:"for-agent",args:{agentName:"Port Weather Watch",note:"Tide tables for the watch, please."},decorators:[o()],play:async({canvasElement:e})=>{const t=a(e,"ask-administrator").textContent??"";if(!/for Port Weather Watch · Harbour operations/.test(t))throw new globalThis.Error(`the subtitle: ${t}`)}},l={name:"required",args:{error:"Say what you need"},decorators:[o()],play:async({canvasElement:e})=>{if(a(e,"tools-ask-note").getAttribute("aria-invalid")!=="true")throw new globalThis.Error("the field is not marked invalid")}},m={name:"sending",args:{note:"Tide tables, please.",sending:!0},decorators:[o()],play:async({canvasElement:e})=>{if(!a(e,"tools-ask-send").disabled)throw new globalThis.Error("Send is live while sending")}},c={name:"send-failed",args:{note:"Tide tables, please.",error:"No administrator can decide this yet"},decorators:[o()]},p={name:"uk",globals:{locale:"uk"},args:{agentName:"Портова варта",note:"Потрібен API погоди порту."},decorators:[o()]},h={name:"narrow",parameters:{viewport:{defaultViewport:"mobile1"}},args:{note:"Tide tables, please."},decorators:[o(!0)]},H=["Populated","ForAgent","Required","Sending","SendFailed","Uk","Narrow"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "populated",
  args: {
    note: "We need the port weather API (tide tables and wind) for the watch."
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    byTestId(canvasElement, "tools-ask-note");
    byTestId(canvasElement, "tools-ask-send");
    byTestId(canvasElement, "tools-ask-cancel");
    if (canvasElement.querySelector("select, [role='combobox']")) throw new globalThis.Error("an agent picker is drawn ()");
    const text = byTestId(canvasElement, "ask-administrator").textContent ?? "";
    if (!/Harbour operations/.test(text)) throw new globalThis.Error("the subtitle names the Project");
  }
}`,...i.parameters?.docs?.source},description:{story:"The Project's Tools tab opened it: the subtitle is the Project; no agent anywhere.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "for-agent",
  args: {
    agentName: "Port Weather Watch",
    note: "Tide tables for the watch, please."
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    const text = byTestId(canvasElement, "ask-administrator").textContent ?? "";
    if (!/for Port Weather Watch · Harbour operations/.test(text)) throw new globalThis.Error(\`the subtitle: \${text}\`);
  }
}`,...d.parameters?.docs?.source},description:{story:"The agent's door asked: *for ⟨agent⟩ · ⟨Project⟩* — Approve binds to that agent too.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "required",
  args: {
    error: "Say what you need"
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    const field = byTestId(canvasElement, "tools-ask-note");
    if (field.getAttribute("aria-invalid") !== "true") throw new globalThis.Error("the field is not marked invalid");
  }
}`,...l.parameters?.docs?.source},description:{story:"Sent empty: the field's own word, focus kept (DS-7006 error).",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "sending",
  args: {
    note: "Tide tables, please.",
    sending: true
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    if (!(byTestId(canvasElement, "tools-ask-send") as HTMLButtonElement).disabled) throw new globalThis.Error("Send is live while sending");
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "send-failed",
  args: {
    note: "Tide tables, please.",
    error: "No administrator can decide this yet"
  },
  decorators: [inFrame()]
}`,...c.parameters?.docs?.source},description:{story:"The server refused *Send* — its word under the field; the note stays.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "uk",
  globals: {
    locale: "uk"
  },
  args: {
    agentName: "Портова варта",
    note: "Потрібен API погоди порту."
  },
  decorators: [inFrame()]
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  args: {
    note: "Tide tables, please."
  },
  decorators: [inFrame(true)]
}`,...h.parameters?.docs?.source}}};export{d as ForAgent,h as Narrow,i as Populated,l as Required,c as SendFailed,m as Sending,p as Uk,H as __namedExportsOrder,D as default};
