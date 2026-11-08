import{j as i}from"./iframe-C_4ax-Jm.js";import{S as l,a as c}from"./SettingsSheet-Bu5CIwR-.js";import"./preload-helper-PPVm8Dsz.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";const m={title:"Layout/Settings sheet",component:l,parameters:{ds:"DS-2010",layout:"fullscreen",docs:{description:{component:`Settings and shortcuts are sheets (DS-2010 ·  · ): *Settings…* from the account menu opens the kit's \`Sheet\`
(DS-3067) with the sections that exist — Appearance (theme; Graphite listed but disabled until the  audit) and
Language — as a vertical tab list; *Keyboard shortcuts* opens the five that exist. Device preferences, applied at
once, nothing sent to a server. Esc closes; *Close* takes focus on open.`}}},args:{open:!0,onClose:()=>{}}},n=e=>document.querySelector(`[data-testid="${e}"]`),t={name:"appearance",play:async()=>{const e=n("settings-sheet");if(!e)throw new globalThis.Error("no settings sheet");if(e.getAttribute("role")!=="dialog"||!e.getAttribute("aria-labelledby"))throw new globalThis.Error("the sheet is not a labelled dialog");if(document.activeElement!==e.querySelector('[data-testid="settings-close"]'))throw new globalThis.Error("Close did not take focus on open");if(!e.querySelector('[data-testid="theme-graphite"]:disabled'))throw new globalThis.Error("Graphite is not the disabled promise")}},r={name:"language",args:{initialSection:"language"}},s={name:"appearance-graphite",globals:{theme:"graphite"}},a={name:"appearance-narrow",parameters:{viewport:{defaultViewport:"mobile1"}}},o={name:"shortcuts",render:e=>i.jsx(c,{open:e.open,onClose:e.onClose}),play:async()=>{const e=n("shortcuts-sheet");if(!e)throw new globalThis.Error("no shortcuts sheet");if(e.querySelectorAll("kbd").length<8)throw new globalThis.Error("the shortcuts list is short")}},b=["Appearance","Language","AppearanceGraphite","AppearanceNarrow","Shortcuts"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "appearance",
  play: async () => {
    const s = sheet("settings-sheet");
    if (!s) throw new globalThis.Error("no settings sheet");
    if (s.getAttribute("role") !== "dialog" || !s.getAttribute("aria-labelledby")) throw new globalThis.Error("the sheet is not a labelled dialog");
    if (document.activeElement !== s.querySelector('[data-testid="settings-close"]')) throw new globalThis.Error("Close did not take focus on open");
    if (!s.querySelector('[data-testid="theme-graphite"]:disabled')) throw new globalThis.Error("Graphite is not the disabled promise");
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "language",
  args: {
    initialSection: "language"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "appearance-graphite",
  globals: {
    theme: "graphite"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "appearance-narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "shortcuts",
  render: args => <ShortcutsSheet open={args.open} onClose={args.onClose} />,
  play: async () => {
    const s = sheet("shortcuts-sheet");
    if (!s) throw new globalThis.Error("no shortcuts sheet");
    if (s.querySelectorAll("kbd").length < 8) throw new globalThis.Error("the shortcuts list is short");
  }
}`,...o.parameters?.docs?.source}}};export{t as Appearance,s as AppearanceGraphite,a as AppearanceNarrow,r as Language,o as Shortcuts,b as __namedExportsOrder,m as default};
