import{H as s}from"./api-COPqCyrr.js";import{E as o}from"./fixtures-B65KySee.js";import{E as n}from"./ExportPanel-CEnfUCSX.js";import"./flags--SfV1VDA.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Apps/NexSales/Parts/ExportPanel",component:n,parameters:{ds:"DS-3040",workbench:{ns:"sales",path:"/sales/accounts"},docs:{description:{component:"Export (DS-3040 `ActionPanel` ·  ·  · P-29): the format, then the run; the receipt names the rows and\nthe file and offers *Download* — the bytes stream through the BFF with the service's headers, nothing is a URL.\nOver the cap the service says so (422 `EXPORT_TOO_LARGE`) and the panel asks for a narrower view."}}},args:{types:["account"],scope:{relationship:["customer"]},run:async()=>o,download:async()=>{},onCancel:()=>{}}},e={name:"The format · Export"},r={name:"Over the cap (EXPORT_TOO_LARGE)",args:{run:async()=>{throw new s(422,{code:"VALIDATION",message:"EXPORT_TOO_LARGE"})}}},a={name:"Refused (not the lead's)",args:{run:async()=>{throw new s(403,{code:"FORBIDDEN"})}}},E=["Ask","TooLarge","Denied"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "The format · Export"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Over the cap (EXPORT_TOO_LARGE)",
  args: {
    run: async () => {
      throw new HttpError(422, {
        code: "VALIDATION",
        message: "EXPORT_TOO_LARGE"
      });
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Refused (not the lead's)",
  args: {
    run: async () => {
      throw new HttpError(403, {
        code: "FORBIDDEN"
      });
    }
  }
}`,...a.parameters?.docs?.source}}};export{e as Ask,a as Denied,r as TooLarge,E as __namedExportsOrder,i as default};
