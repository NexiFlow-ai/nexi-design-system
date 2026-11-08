import{j as q}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{a as N}from"./ToolSetup-f7FSVUyz.js";import{b as U,a as D}from"./capabilityDoor045Fixtures-D3yTuRAC.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */const a=()=>{},H={onUrl:a,onChooseFile:a,onDropFile:a,onExample:a,onClearFile:a,onAdvanced:a,onRead:a,onTarget:a,onToggleAction:a,onConnectionChoice:a,onSaveKey:a,onNote:a,onRetryRights:a,onOnlyHost:a,onChangeStep:a,onSaveDraft:a,onStepBack:a,onContinue:a,onSend:a},P=D.filter(e=>e.effect==="read").map(e=>e.id),n={url:"https://api.portweather.example/openapi.yaml",parsed:U,target:"new"},W={shape:"ask_admin",note:""},j={title:"Apps/NexChat/Tool setup",component:N,parameters:{ds:"DS-6902",layout:"padded"},args:{agentName:"Port Weather Watch",step:1,source:{url:"",target:"new"},examples:[{id:"open-meteo",label:"Weather (Open-Meteo, no key)"}],actions:D,selected:P,connection:W,...H}};function t(e,s,r){if(!e.querySelector(s))throw new globalThis.Error(`${r} is missing (${s})`)}const i={name:"source-empty",play:async({canvasElement:e})=>{if(t(e,'[data-testid="setup-step-1"][data-state="open"] h2[aria-current="step"]',"the open Source heading"),t(e,'[data-testid="setup-examples"] button[data-testid="setup-example-open-meteo"]',"the weather starter"),t(e,'[data-testid="setup-source-box"] textarea[data-testid="setup-url"]',"the one box"),t(e,'button[data-testid="setup-choose-file"]',"Choose file"),e.querySelector('[data-testid="setup-read"]'))throw new globalThis.Error("a Read button is drawn (: the read happens on its own)");if(e.querySelector('[data-testid="setup-advanced"]'))throw new globalThis.Error("Advanced is drawn before a parse");t(e,'button[data-testid="setup-primary"]',"the footer primary")}},d={name:"source-reading",args:{source:{url:"",fileName:"open-meteo.openapi.json",reading:!0,target:"new"}},play:async({canvasElement:e})=>{if(t(e,'[data-testid="setup-source-box"][data-reading="true"]',"the reading box"),t(e,'[data-testid="setup-file"]',"the file chip"),e.querySelector('[data-testid="setup-examples"]'))throw new globalThis.Error("the starters stay while reading");if(!e.querySelector('[data-testid="setup-primary"]').disabled)throw new globalThis.Error("Continue is live while reading")}},c={name:"source-pasted",args:{source:{url:`{
  "openapi": "3.0.3",
  "info": { "title": "Open-Meteo Weather", "version": "1.0.0" },
  "servers": [{ "url": "https://api.open-meteo.com" }],
  "paths": {}
}`,target:"new"}},play:async({canvasElement:e})=>{const s=e.querySelector('textarea[data-testid="setup-url"]');if(!s||s.rows<6)throw new globalThis.Error("the box did not grow for a document")}},p={name:"source-read",args:{source:n},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="setup-parsed"][aria-live="polite"]')?.textContent?.trim())throw new globalThis.Error("the parse line is empty");if(!e.querySelector('input[data-testid="setup-name"]')?.value)throw new globalThis.Error("the Name is not prefilled ()");const o=e.querySelector('details[data-testid="setup-advanced"]');if(!o||o.open)throw new globalThis.Error("Advanced is missing or open");if(e.querySelector('[data-testid="setup-examples"]'))throw new globalThis.Error("the starters stay after a read");if(e.querySelector('[data-testid="setup-target"]'))throw new globalThis.Error("a target choice without an existing integration")}},l={name:"source-existing-match",args:{source:{...n,existing:{id:"port-weather-ws",name:"Port Weather (workspace)"},target:"existing"}},play:async({canvasElement:e})=>t(e,'[data-testid="setup-target"] input[type="radio"]:checked',"the default target")},u={name:"source-refused",args:{source:{url:"https://10.0.0.8/openapi.json",target:"new",refusal:{message:"This address is private; NexCore reads public addresses only.",code:"SOURCE_HOST_PRIVATE"}}},play:async({canvasElement:e})=>{t(e,'[role="alert"]',"the refusal"),t(e,'[data-testid="setup-refusal-code"]',"the code disclosure")}},h={name:"actions",args:{step:2,source:n},play:async({canvasElement:e})=>{const s=e.querySelectorAll('[data-testid="setup-reads"] input[type="checkbox"]:checked').length,r=e.querySelectorAll('[data-testid="setup-changes"] input[type="checkbox"]:checked').length;if(s!==2||r!==0)throw new globalThis.Error(`reads ticked ${s}, changes ticked ${r}`)}},y={name:"actions-suggested",args:{step:2,source:n,suggested:!0},play:async({canvasElement:e})=>t(e,'[data-testid^="setup-suggested-"]',"the suggested chip")},m={name:"connection-ask-admin",args:{step:3,source:n},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="setup-key"]'))throw new globalThis.Error("a key field for a member");t(e,'[data-testid="setup-note"]',"the note")}},g={name:"connection-add-key",args:{step:3,source:n,connection:{shape:"add_key"}},play:async({canvasElement:e})=>{t(e,'input[type="password"][autocomplete="new-password"]',"the write-only key field"),t(e,'[data-testid="setup-save-key"]',"Save key")}},f={name:"connection-use-existing",args:{step:3,source:n,connection:{shape:"use_existing",name:"Port Weather (workspace)",healthy:!0,alternative:"add_key",choice:"use"}},play:async({canvasElement:e})=>t(e,'[data-testid="setup-connection-shape"] input[value="use"]:checked',"the shared connection as the default")},w={name:"connection-use-existing-key-saved",args:{step:3,source:n,connection:{shape:"use_existing",name:"Port Weather (workspace)",healthy:!0,alternative:"add_key",choice:"alternative",keySaved:!0,keyHealth:"healthy"}},play:async({canvasElement:e})=>{if(t(e,'[data-testid="setup-key-saved"][data-health="healthy"]',"the key saved status beside the shared connection"),e.querySelector('input[type="password"]'))throw new globalThis.Error("the key field is still drawn after Save")}},S={name:"connection-rights-unavailable",args:{step:3,source:n,connection:{shape:"rights_unavailable"}},play:async({canvasElement:e})=>{if(t(e,'[data-testid="setup-rights-unavailable"][role="alert"]',"the rights line"),e.querySelector('[data-testid="setup-key"], input[type="password"]'))throw new globalThis.Error("a key field while rights are unknown")}},v={name:"review",args:{step:4,source:n,onlyHost:!0},play:async({canvasElement:e})=>{t(e,'[data-testid="setup-review"]',"the facts"),t(e,'[data-testid="setup-only-host"]',"the only-address checkbox");const s=e.querySelector('[data-testid="setup-review"] .nexus-cc-fact:last-child'),r=e.querySelector('[data-testid="setup-step-4"]');for(const[o,_]of[[s,"the last fact row"],[r,"the last step"]]){if(!o)throw new globalThis.Error(`${_} is missing`);const O=globalThis.getComputedStyle(o).borderBottomWidth;if(O&&O!=="0px")throw new globalThis.Error(`${_} draws its own rule above the footer (${O})`)}}},E={name:"key-saved",args:{step:3,source:n,connection:{shape:"add_key",keySaved:!0}},play:async({canvasElement:e})=>{if(t(e,'[data-testid="setup-key-saved"]',"the key saved status"),e.querySelector('input[type="password"]'))throw new globalThis.Error("the key field is still drawn after Save")}},b={name:"send-failed",args:{step:4,source:n,onlyHost:!0,error:"Could not send — try again"},play:async({canvasElement:e})=>t(e,'[data-testid="setup-footer"] [role="alert"]',"the send error")},x={name:"send-retry",args:{step:4,source:n,onlyHost:!0,sendFailed:!0},play:async({canvasElement:e})=>{t(e,'[data-testid="setup-send-failed"]',"Could not send");const s=e.querySelector('button[data-testid="setup-primary"]');if(!s||s.hasAttribute("disabled"))throw new globalThis.Error("Retry is not offered after a failed send")}},k={name:"send-refused",args:{step:4,source:n,onlyHost:!0,sendFailed:!0,sendRefusal:{message:"Only an administrator of the organization can register or connect an API. Ask an administrator.",code:"NOT_AN_ADMINISTRATOR"}},play:async({canvasElement:e})=>{if(t(e,'[data-testid="setup-send-failed"]',"Only an administrator"),t(e,'[data-testid="setup-send-refusal-code"] code',"NOT_AN_ADMINISTRATOR"),e.querySelector('[data-testid="setup-send-failed"]')?.textContent?.includes("Could not send"))throw new globalThis.Error("a typed refusal must not read as a bare *Could not send*")}},R={name:"offline",args:{step:2,source:n,offline:!0},play:async({canvasElement:e})=>{t(e,'[data-testid="tool-setup"][data-offline="true"] .nexus-tool-setup-offline[role="status"]',"the offline line"),t(e,'button[data-testid="setup-primary"][disabled]',"Continue waiting while offline")}},A={name:"connection-loading",args:{step:3,source:n,connection:{shape:"loading"}},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="setup-key"], input[type="password"]'))throw new globalThis.Error("a key field before the preflight answered");t(e,'button[data-testid="setup-primary"][disabled]',"Continue waiting for the preflight")}},T={name:"key-saved-unhealthy",args:{step:3,source:n,connection:{shape:"add_key",keySaved:!0,keyHealth:"unhealthy"}},play:async({canvasElement:e})=>t(e,'[data-testid="setup-key-saved"][data-health="unhealthy"]',"the health word")},C={name:"narrow",args:{step:2,source:n},parameters:{viewport:{defaultViewport:"mobile1"}},decorators:[e=>q.jsx("div",{style:{maxWidth:320},children:q.jsx(e,{})})]},L=["SourceEmpty","SourceReading","SourcePasted","SourceRead","SourceExistingMatch","SourceRefused","Actions","ActionsSuggested","ConnectionAskAdmin","ConnectionAddKey","ConnectionUseExisting","ConnectionUseExistingKeySaved","ConnectionRightsUnavailable","Review","KeySaved","SendFailed","SendRetry","SendRefused","Offline","ConnectionLoading","KeySavedUnhealthy","Narrow"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "source-empty",
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-step-1"][data-state="open"] h2[aria-current="step"]', "the open Source heading");
    expectOne(canvasElement, '[data-testid="setup-examples"] button[data-testid="setup-example-open-meteo"]', "the weather starter");
    expectOne(canvasElement, '[data-testid="setup-source-box"] textarea[data-testid="setup-url"]', "the one box");
    expectOne(canvasElement, 'button[data-testid="setup-choose-file"]', "Choose file");
    if (canvasElement.querySelector('[data-testid="setup-read"]')) throw new globalThis.Error("a Read button is drawn (: the read happens on its own)");
    if (canvasElement.querySelector('[data-testid="setup-advanced"]')) throw new globalThis.Error("Advanced is drawn before a parse");
    expectOne(canvasElement, 'button[data-testid="setup-primary"]', "the footer primary");
  }
}`,...i.parameters?.docs?.source},description:{story:"First visit (): the starters, then ONE box — paste the document or its URL, drop or choose a file; no *Read* button, no Name yet.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "source-reading",
  args: {
    source: {
      url: "",
      fileName: "open-meteo.openapi.json",
      reading: true,
      target: "new"
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-source-box"][data-reading="true"]', "the reading box");
    expectOne(canvasElement, '[data-testid="setup-file"]', "the file chip");
    if (canvasElement.querySelector('[data-testid="setup-examples"]')) throw new globalThis.Error("the starters stay while reading");
    if (!(canvasElement.querySelector('[data-testid="setup-primary"]') as HTMLButtonElement).disabled) throw new globalThis.Error("Continue is live while reading");
  }
}`,...d.parameters?.docs?.source},description:{story:"The box is reading what was pasted or dropped (DS-7006 loading): the state word, the box quiet, *Continue* waits.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "source-pasted",
  args: {
    source: {
      url: '{\\n  "openapi": "3.0.3",\\n  "info": { "title": "Open-Meteo Weather", "version": "1.0.0" },\\n  "servers": [{ "url": "https://api.open-meteo.com" }],\\n  "paths": {}\\n}',
      target: "new"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const box = canvasElement.querySelector<HTMLTextAreaElement>('textarea[data-testid="setup-url"]');
    if (!box || box.rows < 6) throw new globalThis.Error("the box did not grow for a document");
  }
}`,...c.parameters?.docs?.source},description:{story:"A document pasted into the box (): the box grows, the read follows on its own.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "source-read",
  args: {
    source: SOURCE_READ
  },
  play: async ({
    canvasElement
  }) => {
    const line = canvasElement.querySelector('[data-testid="setup-parsed"][aria-live="polite"]');
    if (!line?.textContent?.trim()) throw new globalThis.Error("the parse line is empty");
    const name = canvasElement.querySelector<HTMLInputElement>('input[data-testid="setup-name"]');
    if (!name?.value) throw new globalThis.Error("the Name is not prefilled ()");
    const advanced = canvasElement.querySelector<HTMLDetailsElement>('details[data-testid="setup-advanced"]');
    if (!advanced || advanced.open) throw new globalThis.Error("Advanced is missing or open");
    if (canvasElement.querySelector('[data-testid="setup-examples"]')) throw new globalThis.Error("the starters stay after a read");
    if (canvasElement.querySelector('[data-testid="setup-target"]')) throw new globalThis.Error("a target choice without an existing integration");
  }
}`,...p.parameters?.docs?.source},description:{story:"After the read: the parse line (aria-live), the Name prefilled from the document, *Advanced* closed — no existing integration owns the host, the new integration is the quiet default.",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "source-existing-match",
  args: {
    source: {
      ...SOURCE_READ,
      existing: {
        id: "port-weather-ws",
        name: "Port Weather (workspace)"
      },
      target: "existing"
    }
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, '[data-testid="setup-target"] input[type="radio"]:checked', "the default target")
}`,...l.parameters?.docs?.source},description:{story:"An existing integration owns the host: *Add actions to ⟨name⟩* is the default; *Create a new integration* the other card.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "source-refused",
  args: {
    source: {
      url: "https://10.0.0.8/openapi.json",
      target: "new",
      refusal: {
        message: "This address is private; NexCore reads public addresses only.",
        code: "SOURCE_HOST_PRIVATE"
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[role="alert"]', "the refusal");
    expectOne(canvasElement, '[data-testid="setup-refusal-code"]', "the code disclosure");
  }
}`,...u.parameters?.docs?.source},description:{story:"NexCore refused the document: plain words under the field, the code under a disclosure, focus kept on the field.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "actions",
  args: {
    step: 2,
    source: SOURCE_READ
  },
  play: async ({
    canvasElement
  }) => {
    const reads = canvasElement.querySelectorAll('[data-testid="setup-reads"] input[type="checkbox"]:checked').length;
    const changes = canvasElement.querySelectorAll('[data-testid="setup-changes"] input[type="checkbox"]:checked').length;
    if (reads !== 2 || changes !== 0) throw new globalThis.Error(\`reads ticked \${reads}, changes ticked \${changes}\`);
  }
}`,...h.parameters?.docs?.source},description:{story:"Section 2: *Reads data* ticked by default, *Makes changes* off with *Needs review*, *Technical* under each row.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "actions-suggested",
  args: {
    step: 2,
    source: SOURCE_READ,
    suggested: true
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, '[data-testid^="setup-suggested-"]', "the suggested chip")
}`,...y.parameters?.docs?.source},description:{story:"S4 (): the per-action one-liner the model proposed, marked *suggested*.",...y.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "connection-ask-admin",
  args: {
    step: 3,
    source: SOURCE_READ
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="setup-key"]')) throw new globalThis.Error("a key field for a member");
    expectOne(canvasElement, '[data-testid="setup-note"]', "the note");
  }
}`,...m.parameters?.docs?.source},description:{story:"Shape (c) — a member, no connection yet: *Ask an administrator to connect it*, a note, the one hint line; no key field.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "connection-add-key",
  args: {
    step: 3,
    source: SOURCE_READ,
    connection: {
      shape: "add_key"
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, 'input[type="password"][autocomplete="new-password"]', "the write-only key field");
    expectOne(canvasElement, '[data-testid="setup-save-key"]', "Save key");
  }
}`,...g.parameters?.docs?.source},description:{story:"Shape (b) — an administrator, no connection yet: *Add a key* with the write-only field and *Save key*.",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "connection-use-existing",
  args: {
    step: 3,
    source: SOURCE_READ,
    connection: {
      shape: "use_existing",
      name: "Port Weather (workspace)",
      healthy: true,
      alternative: "add_key",
      choice: "use"
    }
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, '[data-testid="setup-connection-shape"] input[value="use"]:checked', "the shared connection as the default")
}`,...f.parameters?.docs?.source},description:{story:'Shape (a) — a shared connection exists: *Use "Port Weather (workspace)" · healthy* is the default.',...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "connection-use-existing-key-saved",
  args: {
    step: 3,
    source: SOURCE_READ,
    connection: {
      shape: "use_existing",
      name: "Port Weather (workspace)",
      healthy: true,
      alternative: "add_key",
      choice: "alternative",
      keySaved: true,
      keyHealth: "healthy"
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-key-saved"][data-health="healthy"]', "the key saved status beside the shared connection");
    if (canvasElement.querySelector('input[type="password"]')) throw new globalThis.Error("the key field is still drawn after Save");
  }
}`,...w.parameters?.docs?.source},description:{story:"Shape (a) with *Add a key* picked and saved (): the same *Key saved* line as shape (b), the field gone.",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "connection-rights-unavailable",
  args: {
    step: 3,
    source: SOURCE_READ,
    connection: {
      shape: "rights_unavailable"
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-rights-unavailable"][role="alert"]', "the rights line");
    if (canvasElement.querySelector('[data-testid="setup-key"], input[type="password"]')) throw new globalThis.Error("a key field while rights are unknown");
  }
}`,...S.parameters?.docs?.source},description:{story:"The preflight could not be read: *Rights could not be read · Retry* — and no key field (fail closed).",...S.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "review",
  args: {
    step: 4,
    source: SOURCE_READ,
    onlyHost: true
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-review"]', "the facts");
    expectOne(canvasElement, '[data-testid="setup-only-host"]', "the only-address checkbox");
    const lastFact = canvasElement.querySelector('[data-testid="setup-review"] .nexus-cc-fact:last-child');
    const lastStep = canvasElement.querySelector('[data-testid="setup-step-4"]');
    for (const [el, what] of [[lastFact, "the last fact row"], [lastStep, "the last step"]] as const) {
      if (!el) throw new globalThis.Error(\`\${what} is missing\`);
      const w = globalThis.getComputedStyle(el).borderBottomWidth;
      if (w && w !== "0px") throw new globalThis.Error(\`\${what} draws its own rule above the footer (\${w})\`);
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Section 4: the facts — API · Hosts (the one host confirmed) · Actions · Connection · Next; the footer says *Send for review*.
 One rule above the footer (the owner, 2026-11-02 13:06: three lines stacked) — the last fact row and the last step lend theirs.`,...v.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "key-saved",
  args: {
    step: 3,
    source: SOURCE_READ,
    connection: {
      shape: "add_key",
      keySaved: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-key-saved"]', "the key saved status");
    if (canvasElement.querySelector('input[type="password"]')) throw new globalThis.Error("the key field is still drawn after Save");
  }
}`,...E.parameters?.docs?.source},description:{story:"Shape (b) after *Save key*: the key is stored and never shown again — the field is gone, the status says so.",...E.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "send-failed",
  args: {
    step: 4,
    source: SOURCE_READ,
    onlyHost: true,
    error: "Could not send — try again"
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, '[data-testid="setup-footer"] [role="alert"]', "the send error")
}`,...b.parameters?.docs?.source},description:{story:"*Send for review* failed: one line above the footer, the draft kept.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "send-retry",
  args: {
    step: 4,
    source: SOURCE_READ,
    onlyHost: true,
    sendFailed: true
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-send-failed"]', "Could not send");
    const primary = canvasElement.querySelector('button[data-testid="setup-primary"]');
    if (!primary || primary.hasAttribute("disabled")) throw new globalThis.Error("Retry is not offered after a failed send");
  }
}`,...x.parameters?.docs?.source},description:{story:"S2 (): *Send for review* failed — *Could not send · Retry*; the footer primary is the retry, the `send_key` kept.",...x.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "send-refused",
  args: {
    step: 4,
    source: SOURCE_READ,
    onlyHost: true,
    sendFailed: true,
    sendRefusal: {
      message: "Only an administrator of the organization can register or connect an API. Ask an administrator.",
      code: "NOT_AN_ADMINISTRATOR"
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="setup-send-failed"]', "Only an administrator");
    expectOne(canvasElement, '[data-testid="setup-send-refusal-code"] code', "NOT_AN_ADMINISTRATOR");
    if (canvasElement.querySelector('[data-testid="setup-send-failed"]')?.textContent?.includes("Could not send")) throw new globalThis.Error("a typed refusal must not read as a bare *Could not send*");
  }
}`,...k.parameters?.docs?.source},description:{story:"S3: a *typed* refusal of Send — her words and the code under *Code* ('s idiom); a member may not register a NEW API ( §2.4 step 1).",...k.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    step: 2,
    source: SOURCE_READ,
    offline: true
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="tool-setup"][data-offline="true"] .nexus-tool-setup-offline[role="status"]', "the offline line");
    expectOne(canvasElement, 'button[data-testid="setup-primary"][disabled]', "Continue waiting while offline");
  }
}`,...R.parameters?.docs?.source},description:{story:"S2 (): offline — the draft is kept on this device; *Save draft* stays, *Continue* waits.",...R.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "connection-loading",
  args: {
    step: 3,
    source: SOURCE_READ,
    connection: {
      shape: "loading"
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="setup-key"], input[type="password"]')) throw new globalThis.Error("a key field before the preflight answered");
    expectOne(canvasElement, 'button[data-testid="setup-primary"][disabled]', "Continue waiting for the preflight");
  }
}`,...A.parameters?.docs?.source},description:{story:"S2 (DS-7019): the preflight in flight on reveal of section 3 — no shape yet, no key field, *Continue* waits.",...A.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "key-saved-unhealthy",
  args: {
    step: 3,
    source: SOURCE_READ,
    connection: {
      shape: "add_key",
      keySaved: true,
      keyHealth: "unhealthy"
    }
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, '[data-testid="setup-key-saved"][data-health="unhealthy"]', "the health word")
}`,...T.parameters?.docs?.source},description:{story:"S2 (shape (b),  (a)): after *Save key* core-api probed the connection — the health word beside *Key saved*.",...T.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  args: {
    step: 2,
    source: SOURCE_READ
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  decorators: [Story => <div style={{
    maxWidth: 320
  }}><Story /></div>]
}`,...C.parameters?.docs?.source}}};export{h as Actions,y as ActionsSuggested,g as ConnectionAddKey,m as ConnectionAskAdmin,A as ConnectionLoading,S as ConnectionRightsUnavailable,f as ConnectionUseExisting,w as ConnectionUseExistingKeySaved,E as KeySaved,T as KeySavedUnhealthy,C as Narrow,R as Offline,v as Review,b as SendFailed,k as SendRefused,x as SendRetry,i as SourceEmpty,l as SourceExistingMatch,c as SourcePasted,p as SourceRead,d as SourceReading,u as SourceRefused,L as __namedExportsOrder,j as default};
