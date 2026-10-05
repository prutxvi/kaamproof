export function checkJob(job) {
  const gaps=[];
  if(!job.scope?.trim()) gaps.push({id:'scope',label:'Agreed scope is missing',question:'What work was agreed with the customer?'});
  for(const kind of ['before','after']) if(!job.photos?.some(p=>p.kind===kind)) gaps.push({id:kind,label:`${kind==='before'?'Before':'After'} photo is missing`,question:`Attach a ${kind} photo for this job.`});
  if(!job.notes?.trim()) gaps.push({id:'notes',label:'Work observations are missing',question:'Describe what you did and what remains unresolved.'});
  const value=String(job.reading??'').trim();
  if(!value || !Number.isFinite(Number(value)) || Number(value)<-20 || Number(value)>80) gaps.push({id:'reading',label:'Valid post-service reading is missing',question:'Enter the technician-measured outlet air temperature (-20 to 80 °C).'});
  if(!job.acknowledged) gaps.push({id:'acknowledgement',label:'Customer acknowledgement is missing',question:'Record whether the customer acknowledged this service record.'});
  return {gaps,ready:gaps.length===0,status:gaps.length?'Needs evidence':job.approved?'Reviewed':'Ready for review'};
}
export function validateDraft(raw,notes) {
  if(!raw || !Array.isArray(raw.claims) || raw.claims.length>12) throw new Error('Model returned an invalid claim list.');
  const claims=raw.claims.map(x=>{
    if(typeof x.quote!=='string' || !x.quote.trim() || x.quote.length>1000 || !notes.includes(x.quote)) throw new Error('Model returned a claim without an exact source quote.');
    return {text:x.quote,quote:x.quote,source:'Technician note',verification:'Human review required'};
  });
  return {claims};
}
export function buildReport(job) {
  const check=checkJob(job);
  return {format:'kaamproof-service-record',version:1,generatedAt:new Date().toISOString(),job,review:check,disclaimer:'Completeness checks do not certify workmanship, safety or truthful completion. Photos are supplied evidence, not independently verified proof. AI claims require human review.'};
}
