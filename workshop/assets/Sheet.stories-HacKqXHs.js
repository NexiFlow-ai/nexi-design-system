import{a5 as u,j as e,a6 as i,a7 as h,B as n,a8 as p,a9 as d,aa as g,r as f,A as S}from"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Kit/Sheet",component:u,parameters:{ds:"DS-3067",layout:"fullscreen",docs:{description:{component:"The Sheet (DS-3067): the one modal frame of the suite — a backdrop, a 520 px card (`wide` 640), a kicker, a title,\na body that scrolls on its own and a foot of actions. Esc and the backdrop close it; focus lands on the foot's\nlast button and returns to the opener. A destructive second step is the kit's `ActionPanel` with `danger` inside\nthe same sheet (DS-7004) — never a dialog over a dialog. The shell's Settings, Shortcuts and Connected accounts\nrender through it; NexChat's dialogs adopt it in WP-3."}}},args:{open:!0,onClose:()=>{},kicker:"Acme Logistics",title:"Move the thread",testId:"story-sheet"}},r={name:"plain",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Choose the Project this thread belongs to. Its files and its permissions follow."}),e.jsxs(h,{children:[e.jsx(n,{children:"Cancel"}),e.jsx(n,{variant:"primary",children:"Move"})]})]})},play:async()=>{const t=document.querySelector('[data-testid="story-sheet"]');if(!t)throw new globalThis.Error("no sheet");if(t.getAttribute("role")!=="dialog"||t.getAttribute("aria-modal")!=="true")throw new globalThis.Error("not a modal dialog");if(!document.getElementById(t.getAttribute("aria-labelledby")??""))throw new globalThis.Error("the title does not label the dialog");if(document.activeElement?.textContent!=="Move")throw new globalThis.Error("focus did not land on the foot's last button")}},o={name:"rows",args:{size:"wide",title:"Connected accounts",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Accounts you connected for your agents. Tokens stay on the server."}),e.jsxs("div",{role:"list",children:[e.jsx(d,{title:"Google Workspace",meta:"olena@example.test",lines:["Read mail · Read calendar","Healthy · used 15 min ago"],children:e.jsx(n,{size:"sm",children:"Disconnect"})}),e.jsxs(d,{title:"Microsoft 365",meta:"olena@acme.example.test",lines:["Read mail","Expired · used 9 days ago"],children:[e.jsx(n,{size:"sm",children:"Reconnect"}),e.jsx(n,{size:"sm",children:"Disconnect"})]}),e.jsx(d,{title:"ERP (SQL)",lines:["Not connected"]})]}),e.jsx(g,{children:"An agent uses a connection only inside a Project you are a member of, and only for the scopes you granted."}),e.jsx(h,{children:e.jsx(n,{children:"Close"})})]})}},s={name:"ladder",args:{title:"Connected accounts",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{busy:!0,children:"Loading your accounts…"}),e.jsx(i,{children:"No account connected yet."}),e.jsx(i,{tone:"error",children:"The accounts could not be read."}),e.jsx(i,{children:"You are offline — the list may be stale; actions are disabled."}),e.jsx(h,{children:e.jsx(n,{children:"Close"})})]})}};function y(){const[t,m]=f.useState("confirm");return e.jsxs(u,{open:!0,onClose:()=>{},size:"wide",kicker:"Acme Logistics",title:"Connected accounts",testId:"story-sheet",children:[e.jsx("div",{role:"list",children:e.jsx(d,{title:"Google Workspace",meta:"olena@example.test",lines:["Read mail · Read calendar","Healthy · used 15 min ago"],children:e.jsx(n,{size:"sm",disabled:t==="confirm",onClick:()=>m("confirm"),children:"Disconnect"})})}),t==="confirm"?e.jsx(S,{title:"Disconnect Google Workspace?",danger:!0,primary:{label:"Disconnect",onClick:()=>m("list")},onCancel:()=>m("list"),testId:"story-confirm",children:e.jsx("p",{className:"nexus-sheet-note",children:"Agents stop using this account at once. You can connect it again later."})}):null,e.jsx(h,{children:e.jsx(n,{children:"Close"})})]})}const a={name:"confirmation",args:{children:null},render:()=>e.jsx(y,{}),play:async()=>{const t=document.querySelector('[data-testid="story-confirm"]');if(!t)throw new globalThis.Error("no confirmation panel");if(document.activeElement!==t.querySelector("h3"))throw new globalThis.Error("the confirmation's heading did not take focus")}},c={...r,name:"plain-graphite",globals:{theme:"graphite"}},l={...o,name:"rows-narrow",parameters:{viewport:{defaultViewport:"mobile1"}}},j=["Plain","Rows","Ladder","Confirmation","PlainGraphite","RowsNarrow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "plain",
  args: {
    children: <>
        <SheetNote>Choose the Project this thread belongs to. Its files and its permissions follow.</SheetNote>
        <SheetActions>
          <Button>Cancel</Button>
          <Button variant="primary">Move</Button>
        </SheetActions>
      </>
  },
  play: async () => {
    const sheet = document.querySelector<HTMLElement>('[data-testid="story-sheet"]');
    if (!sheet) throw new globalThis.Error("no sheet");
    if (sheet.getAttribute("role") !== "dialog" || sheet.getAttribute("aria-modal") !== "true") throw new globalThis.Error("not a modal dialog");
    if (!document.getElementById(sheet.getAttribute("aria-labelledby") ?? "")) throw new globalThis.Error("the title does not label the dialog");
    if (document.activeElement?.textContent !== "Move") throw new globalThis.Error("focus did not land on the foot's last button");
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "rows",
  args: {
    size: "wide",
    title: "Connected accounts",
    children: <>
        <SheetNote>Accounts you connected for your agents. Tokens stay on the server.</SheetNote>
        <div role="list">
          <SheetRow title="Google Workspace" meta="olena@example.test" lines={["Read mail · Read calendar", "Healthy · used 15 min ago"]}>
            <Button size="sm">Disconnect</Button>
          </SheetRow>
          <SheetRow title="Microsoft 365" meta="olena@acme.example.test" lines={["Read mail", "Expired · used 9 days ago"]}>
            <Button size="sm">Reconnect</Button>
            <Button size="sm">Disconnect</Button>
          </SheetRow>
          <SheetRow title="ERP (SQL)" lines={["Not connected"]} />
        </div>
        <SheetFootnote>An agent uses a connection only inside a Project you are a member of, and only for the scopes you granted.</SheetFootnote>
        <SheetActions>
          <Button>Close</Button>
        </SheetActions>
      </>
  }
}`,...o.parameters?.docs?.source},description:{story:"`wide`: rows of one thing with its actions at the right; the quiet legal line at the foot.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "ladder",
  args: {
    title: "Connected accounts",
    children: <>
        <SheetState busy>Loading your accounts…</SheetState>
        <SheetState>No account connected yet.</SheetState>
        <SheetState tone="error">The accounts could not be read.</SheetState>
        <SheetState>You are offline — the list may be stale; actions are disabled.</SheetState>
        <SheetActions>
          <Button>Close</Button>
        </SheetActions>
      </>
  }
}`,...s.parameters?.docs?.source},description:{story:"The ladder inside: loading · empty · error · offline are one quiet line each.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "confirmation",
  args: {
    children: null
  },
  render: () => <WithConfirmation />,
  play: async () => {
    const panel = document.querySelector('[data-testid="story-confirm"]');
    if (!panel) throw new globalThis.Error("no confirmation panel");
    if (document.activeElement !== panel.querySelector("h3")) throw new globalThis.Error("the confirmation's heading did not take focus");
  }
}`,...a.parameters?.docs?.source},description:{story:"The destructive second step: the kit's `ActionPanel` with `danger`, inside the sheet (DS-7004).",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Plain,
  name: "plain-graphite",
  globals: {
    theme: "graphite"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Rows,
  name: "rows-narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...l.parameters?.docs?.source}}};export{a as Confirmation,s as Ladder,r as Plain,c as PlainGraphite,o as Rows,l as RowsNarrow,j as __namedExportsOrder,b as default};
