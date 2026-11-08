import{j as v}from"./iframe-C_4ax-Jm.js";import{a as I}from"./ShellDock-HLKM_5B0.js";import{w as e,i as o}from"./fixtures-DBR6MuXP.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";const K={title:"Layout/Dock",component:I,parameters:{ds:"DS-2002",layout:"padded",docs:{description:{component:`The dock (DS-2002 ·  · ): *me* on the left and the bell at the right edge of one row in the expanded nav;
two 32 px icons in the rail. The bell opens the inbox (DS-4005,  TBD-712 (a)) — identifiers and statuses
only, newest first, the unread count as a badge; *me* opens the account menu, which lists only destinations that
exist. Menus open upward (expanded) or beside (rail), follow the WAI-ARIA menu pattern and return focus.`}}},args:{variant:"expanded"},decorators:[(a,{parameters:r})=>v.jsx("div",{className:r.rail?"nexus-shell-rail":"nexus-chat-sidebar",style:{width:r.rail?void 0:"var(--nexus-sidebar-width)",padding:"var(--nexus-sidebar-pad)",minHeight:640,display:"flex",flexDirection:"column",justifyContent:"flex-end",background:"var(--nexus-bg-subtle)"},children:v.jsx(a,{})})]},n=a=>async({canvasElement:r})=>{const k=r.querySelector(`[data-testid="${a}"]`);if(!k)throw new globalThis.Error(`no ${a}`);if(k.click(),await new Promise(E=>setTimeout(E,30)),k.getAttribute("aria-expanded")!=="true")throw new globalThis.Error(`${a} did not open`)},p={name:"expanded",decorators:[e({notifications:o("ready",[])})]},m={name:"expanded-unread",decorators:[e({notifications:o()})],play:async({canvasElement:a})=>{const r=a.querySelector('[data-testid="shell-notifications-count"]');if(r?.textContent!=="2")throw new globalThis.Error(`the badge reads ${r?.textContent}, not 2`)}},s={name:"session-loading",decorators:[e({session:null,sessionState:"loading"})]},t={name:"session-unavailable",decorators:[e({session:null,sessionState:"unavailable",workspaces:[]})]},u={name:"rail",args:{variant:"rail"},parameters:{rail:!0},decorators:[e({notifications:o()})]},f={name:"account-menu",decorators:[e({notifications:o()})],play:n("shell-profile")},i={name:"account-menu-minimal",decorators:[e({onSignOut:void 0,accountHref:void 0,workspaces:["Acme Logistics"],connectedAccountsEnabled:!1},!1)],play:n("shell-profile")},h={name:"account-menu-rail",args:{variant:"rail"},parameters:{rail:!0},decorators:[e()],play:n("shell-profile")},c={name:"inbox",decorators:[e({notifications:o()})],play:n("shell-notifications")},b={name:"inbox-empty",decorators:[e({notifications:o("ready",[])})],play:n("shell-notifications")},x={name:"inbox-loading",decorators:[e({notifications:o("loading",[])})],play:n("shell-notifications")},g={name:"inbox-error",decorators:[e({notifications:o("error",[])})],play:n("shell-notifications")},y={name:"inbox-offline",decorators:[e({notifications:o("offline")})],play:n("shell-notifications")},w={name:"inbox-reconnecting",decorators:[e({notifications:o("reconnecting")})],play:n("shell-notifications")},d={name:"inbox-browser-on",decorators:[e({notifications:o("ready",void 0,"granted")})],play:n("shell-notifications")},S={name:"inbox-browser-denied",decorators:[e({notifications:o("ready",void 0,"denied")})],play:n("shell-notifications")},l={name:"inbox-no-feed",decorators:[e()],play:n("shell-notifications")},D={name:"inbox-graphite",globals:{theme:"graphite"},decorators:[e({notifications:o()})],play:n("shell-notifications")},Q=["Expanded","ExpandedUnread","SessionLoading","SessionUnavailable","Rail","AccountMenu","AccountMenuMinimal","AccountMenuRail","Inbox","InboxEmpty","InboxLoading","InboxError","InboxOffline","InboxReconnecting","InboxBrowserOn","InboxBrowserDenied","InboxNoFeed","InboxGraphite"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "expanded",
  decorators: [withDock({
    notifications: inbox("ready", [])
  })]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "expanded-unread",
  decorators: [withDock({
    notifications: inbox()
  })],
  play: async ({
    canvasElement
  }) => {
    const badge = canvasElement.querySelector('[data-testid="shell-notifications-count"]');
    if (badge?.textContent !== "2") throw new globalThis.Error(\`the badge reads \${badge?.textContent}, not 2\`);
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "session-loading",
  decorators: [withDock({
    session: null,
    sessionState: "loading"
  })]
}`,...s.parameters?.docs?.source},description:{story:"The session is still loading: a skeleton where the name goes, the control still named (`aria-label`).",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "session-unavailable",
  decorators: [withDock({
    session: null,
    sessionState: "unavailable",
    workspaces: []
  })]
}`,...t.parameters?.docs?.source},description:{story:"`GET /session` failed: a `?` avatar and *Signed in* — never an invented name.",...t.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "rail",
  args: {
    variant: "rail"
  },
  parameters: {
    rail: true
  },
  decorators: [withDock({
    notifications: inbox()
  })]
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "account-menu",
  decorators: [withDock({
    notifications: inbox()
  })],
  play: open("shell-profile")
}`,...f.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "account-menu-minimal",
  decorators: [withDock({
    onSignOut: undefined,
    accountHref: undefined,
    workspaces: ["Acme Logistics"],
    connectedAccountsEnabled: false
  }, false)],
  play: open("shell-profile")
}`,...i.parameters?.docs?.source},description:{story:"Without Sign out, Account or a second workspace the menu is shorter — a row that cannot act is absent (DS-0004).",...i.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "account-menu-rail",
  args: {
    variant: "rail"
  },
  parameters: {
    rail: true
  },
  decorators: [withDock()],
  play: open("shell-profile")
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "inbox",
  decorators: [withDock({
    notifications: inbox()
  })],
  play: open("shell-notifications")
}`,...c.parameters?.docs?.source},description:{story:"The inbox (DS-4005): unread first, *Mark all read* as a link, the browser-notification offer at the foot.",...c.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "inbox-empty",
  decorators: [withDock({
    notifications: inbox("ready", [])
  })],
  play: open("shell-notifications")
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "inbox-loading",
  decorators: [withDock({
    notifications: inbox("loading", [])
  })],
  play: open("shell-notifications")
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "inbox-error",
  decorators: [withDock({
    notifications: inbox("error", [])
  })],
  play: open("shell-notifications")
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "inbox-offline",
  decorators: [withDock({
    notifications: inbox("offline")
  })],
  play: open("shell-notifications")
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "inbox-reconnecting",
  decorators: [withDock({
    notifications: inbox("reconnecting")
  })],
  play: open("shell-notifications")
}`,...w.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "inbox-browser-on",
  decorators: [withDock({
    notifications: inbox("ready", undefined, "granted")
  })],
  play: open("shell-notifications")
}`,...d.parameters?.docs?.source},description:{story:"Browser notifications already on — the foot states it; denied — the foot says so and offers nothing.",...d.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "inbox-browser-denied",
  decorators: [withDock({
    notifications: inbox("ready", undefined, "denied")
  })],
  play: open("shell-notifications")
}`,...S.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "inbox-no-feed",
  decorators: [withDock()],
  play: open("shell-notifications")
}`,...l.parameters?.docs?.source},description:{story:"No host feed: the honest empty popover of  — the bell never invents a count.",...l.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "inbox-graphite",
  globals: {
    theme: "graphite"
  },
  decorators: [withDock({
    notifications: inbox()
  })],
  play: open("shell-notifications")
}`,...D.parameters?.docs?.source}}};export{f as AccountMenu,i as AccountMenuMinimal,h as AccountMenuRail,p as Expanded,m as ExpandedUnread,c as Inbox,S as InboxBrowserDenied,d as InboxBrowserOn,b as InboxEmpty,g as InboxError,D as InboxGraphite,x as InboxLoading,l as InboxNoFeed,y as InboxOffline,w as InboxReconnecting,u as Rail,s as SessionLoading,t as SessionUnavailable,Q as __namedExportsOrder,K as default};
