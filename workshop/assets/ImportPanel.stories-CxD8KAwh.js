import{j as s}from"./iframe-C_4ax-Jm.js";import{p as C,t as f,u as B,v as S,w as v,a as j,x as E,y as I}from"./scene-BIkkuSa8.js";import{I as i}from"./ImportPanel-CuMtHPop.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./format-CwKZ7-7k.js";import"./ReadinessPolicyEditor-DYkxE-mE.js";import"./arrow-up-bnIz7tua.js";import"./arrow-down-CEX2ZLRK.js";const k=["sku,title,uom,price,shelf_life_days","CF-T300,Carbon sheet 1.0 mm,m²,44.0,365","GL-E200,Glass sheet 0.5 mm,m²,12.5,730","EP-420,Epoxy resin fast,kg,19.9,180",",Nameless row,kg,1,10"].join(`
`);JSON.stringify([{code:"BD-11-AF",name:"BD-11 airframe",family:"BD-11"},{code:"BD-7-AF",name:"BD-7 airframe (renamed)",family:"BD-7"}]);const o=()=>I(new URLSearchParams({as:"olena",world:"native"})),a=()=>({preview:async(r,e,t)=>E(o(),{filename:r.name,media_type:r.type||"text/csv",text:await r.text(),entity:e,project_id:t}),rows:async(r,e)=>B(o(),r,0,100,e),commit:async(r,e)=>f(o(),r,e),rollback:async r=>v(o(),r)});function c(){j("olena","native");const r=o(),e=E(r,{filename:"materials.csv",media_type:"text/csv",text:k,entity:"material",project_id:"airframes"});return{batch:e,rows:B(r,e.id).rows}}const G={title:"Apps/NexFactory/Import",component:i,parameters:{ds:"DS-6710",workbench:{ns:"factory",path:"/factory/settings?section=import"}},args:{batches:[],canImport:!0,connected:!1,projects:["airframes","avionics"],personName:C},decorators:[r=>s.jsx("div",{className:"nexus-factory-story-pad",children:s.jsx(r,{})})]},d={name:"File · nothing imported yet",args:{doors:a()}},m={name:"File · reading…",args:{initialBusy:"preview"}},l={name:"Review · the proposal · one row rejected",render:r=>{const{batch:e,rows:t}=c();return s.jsx(i,{...r,doors:a(),initialBatch:e,initialRows:t})},play:async({canvasElement:r})=>{const e=t=>r.querySelector(`[data-testid="${t}"]`);if(!e("import-review"))throw new globalThis.Error("the review step");if(!e("import-counts")?.textContent?.includes("2 new")||!e("import-counts")?.textContent?.includes("1 update")||!e("import-counts")?.textContent?.includes("1 rejected"))throw new globalThis.Error("2 new · 1 update · 1 rejected");if(!e("import-target-sku")?.textContent?.includes("code"))throw new globalThis.Error("sku → code, proposed by the ranker");if(!e("import-rejected")?.textContent?.includes("Row 4"))throw new globalThis.Error("the nameless row is rejected, with its reason")}},p={name:"Review · after a dry run (nothing written)",render:r=>{const{batch:e}=c(),t=o(),n=f(t,e.id,{dry_run:!0});return s.jsx(i,{...r,doors:a(),initialBatch:n,initialRows:B(t,e.id).rows})}},h={name:"Review · Commit asks once",render:r=>{const{batch:e,rows:t}=c();return s.jsx(i,{...r,doors:a(),initialBatch:e,initialRows:t,initialConfirming:!0})}},u={name:"Committed · the batch in the recent list · Undo",render:r=>{const{batch:e}=c(),t=o(),n=f(t,e.id,{});return s.jsx(i,{...r,doors:a(),batches:[n],initialBatch:n})},play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid^="import-batch-imp_"]');if(!e?.textContent?.includes("committed"))throw new globalThis.Error("the batch reads committed");if(!e?.querySelector('[data-testid^="import-undo-"]'))throw new globalThis.Error("Undo on a committed batch")}},w={name:"Undo refused in part · the edited record is named ()",render:r=>{const{batch:e}=c(),t=o(),n=f(t,e.id,{});S(n.created_refs[0]);let x=n;try{v(t,e.id)}catch(R){x=R.body?.details?.batch??n}return s.jsx(i,{...r,doors:a(),batches:[x],initialBatch:x,initialError:"1 records were edited since and stayed; the rest were undone."})}},g={name:"Connected world · the owner is external (DS-0004)",args:{connected:!0,doors:a()}},b={name:"A planner reads (Dmytro) · Restriction",args:{canImport:!1}},y={name:"Refused · the file is larger than 2 MB",args:{doors:a(),initialError:"The file is larger than 2 MB."}},L=["FileStep","Reading","Review","DryRun","Confirming","Committed","PartlyUndone","External","Reader","Refused"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "File · nothing imported yet",
  args: {
    doors: doors()
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "File · reading…",
  args: {
    initialBusy: "preview"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Review · the proposal · one row rejected",
  render: args => {
    const {
      batch,
      rows
    } = previewed();
    return <ImportPanel {...args} doors={doors()} initialBatch={batch} initialRows={rows} />;
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("import-review")) throw new globalThis.Error("the review step");
    if (!by("import-counts")?.textContent?.includes("2 new") || !by("import-counts")?.textContent?.includes("1 update") || !by("import-counts")?.textContent?.includes("1 rejected")) throw new globalThis.Error("2 new · 1 update · 1 rejected");
    if (!by("import-target-sku")?.textContent?.includes("code")) throw new globalThis.Error("sku → code, proposed by the ranker");
    if (!by("import-rejected")?.textContent?.includes("Row 4")) throw new globalThis.Error("the nameless row is rejected, with its reason");
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Review · after a dry run (nothing written)",
  render: args => {
    const {
      batch
    } = previewed();
    const c = native();
    const after = records.commitImport(c, batch.id, {
      dry_run: true
    });
    return <ImportPanel {...args} doors={doors()} initialBatch={after} initialRows={records.importRows(c, batch.id).rows} />;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Review · Commit asks once",
  render: args => {
    const {
      batch,
      rows
    } = previewed();
    return <ImportPanel {...args} doors={doors()} initialBatch={batch} initialRows={rows} initialConfirming />;
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Committed · the batch in the recent list · Undo",
  render: args => {
    const {
      batch
    } = previewed();
    const c = native();
    const after = records.commitImport(c, batch.id, {});
    return <ImportPanel {...args} doors={doors()} batches={[after]} initialBatch={after} />;
  },
  play: async ({
    canvasElement
  }) => {
    const li = canvasElement.querySelector('[data-testid^="import-batch-imp_"]');
    if (!li?.textContent?.includes("committed")) throw new globalThis.Error("the batch reads committed");
    if (!li?.querySelector('[data-testid^="import-undo-"]')) throw new globalThis.Error("Undo on a committed batch");
  }
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Undo refused in part · the edited record is named ()",
  render: args => {
    const {
      batch
    } = previewed();
    const c = native();
    const after = records.commitImport(c, batch.id, {});
    records.markEdited(after.created_refs[0]!);
    let partial: ImportBatch = after;
    try {
      records.rollbackImport(c, batch.id);
    } catch (e) {
      partial = ((e as {
        body?: {
          details?: {
            batch?: ImportBatch;
          };
        };
      }).body?.details?.batch ?? after) as ImportBatch;
    }
    return <ImportPanel {...args} doors={doors()} batches={[partial]} initialBatch={partial} initialError="1 records were edited since and stayed; the rest were undone." />;
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Connected world · the owner is external (DS-0004)",
  args: {
    connected: true,
    doors: doors()
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "A planner reads (Dmytro) · Restriction",
  args: {
    canImport: false
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Refused · the file is larger than 2 MB",
  args: {
    doors: doors(),
    initialError: "The file is larger than 2 MB."
  }
}`,...y.parameters?.docs?.source}}};export{u as Committed,h as Confirming,p as DryRun,g as External,d as FileStep,w as PartlyUndone,b as Reader,m as Reading,y as Refused,l as Review,L as __namedExportsOrder,G as default};
