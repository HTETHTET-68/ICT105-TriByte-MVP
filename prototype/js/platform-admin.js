document.addEventListener("DOMContentLoaded", () => {
  seedUsers();
  renderReports();
  renderUsers();
  document.getElementById("userSearch")?.addEventListener("input", renderUsers);
  document.getElementById("clearUserSearch")?.addEventListener("click", () => {
    const search = document.getElementById("userSearch");
    search.value = "";
    search.focus();
    renderUsers();
  });
  document.getElementById("reportsBody")?.addEventListener("click", handleReportAction);
  document.getElementById("usersBody")?.addEventListener("click", handleUserAction);
});

function seedUsers() {
  if (localStorage.getItem("hallpassAccounts")) return;
  localStorage.setItem("hallpassAccounts", JSON.stringify([
    {id:"user-admin-hallpass-com",name:"Primary Administrator",email:"admin@hallpass.com",password:"Admin123!",role:"super_admin",status:"Active",reports:[]},
    {id:"user-student-hallpass-com",name:"Student",studentId:"DEMO001",email:"student@hallpass.com",password:"Student123!",role:"student",status:"Active",reports:[]}
  ]));
}
function getAccounts(){ return JSON.parse(localStorage.getItem("hallpassAccounts") || "[]"); }
function saveAccounts(items){ localStorage.setItem("hallpassAccounts", JSON.stringify(items)); }
function getReports(){ return JSON.parse(localStorage.getItem("hallpassReports") || "[]"); }
function roleLabel(role){ return ({super_admin:"Super Admin",content_admin:"Content Admin",user_admin:"User Admin",student:"Student"})[role] || role; }
function safe(value){ const div=document.createElement("div"); div.textContent=String(value??""); return div.innerHTML; }

function renderReports() {
  const reports=getReports(), body=document.getElementById("reportsBody");
  if (!body) return;
  body.innerHTML=reports.length ? reports.map(r=>`<tr><td><strong>${safe(r.title)}</strong><br><small>#${safe(r.reviewId)} · ${safe(r.category)}</small></td><td>${safe(r.reason)}<br><small>${safe(r.details)}</small></td><td>${safe(r.reportedBy)}</td><td><span class="badge ${r.status==="Open"?"badge-warning":"badge-success"}">${safe(r.status)}</span></td><td><button class="btn outline" data-investigate="${safe(r.id)}">${r.status==="Open"?"Investigate":"View decision"}</button></td></tr>`).join("") : `<tr><td colspan="5" class="empty-state">No student reports yet.</td></tr>`;
  const open=reports.filter(r=>r.status==="Open").length;
  const count=document.getElementById("openReportCount"); if(count) count.textContent=open;
}
function handleReportAction(event) {
  const button=event.target.closest("[data-investigate]"); if(!button)return;
  const reports=getReports(), report=reports.find(r=>r.id===button.dataset.investigate); if(!report)return;
  const review=getReviews().find(r=>String(r.id)===String(report.reviewId));
  const modal=document.createElement("div"); modal.className="admin-review-modal";
  modal.innerHTML=`<div class="admin-review-modal-backdrop" data-close-investigation></div><div class="admin-review-dialog report-dialog" role="dialog" aria-modal="true"><div class="admin-review-dialog-header"><div><span class="badge">${safe(report.id)}</span><h2>Investigate report</h2></div><button class="icon-button" data-close-investigation>×</button></div><div class="investigation-grid"><div><h3>Student’s report</h3><p><strong>${safe(report.reason)}</strong></p><p>${safe(report.details)}</p><small>Reported by ${safe(report.reportedBy)} on ${new Date(report.createdAt).toLocaleString()}</small></div><div><h3>Original review</h3><p><strong>${safe(review?.title||report.title)} · ★ ${safe(review?.rating||"—")}</strong></p><p>${safe(review?.text||"Review no longer available")}</p><small>Written by ${safe(review?.author||"Student")}</small></div></div>${report.status==="Open"?`<div class="admin-review-modal-actions"><button class="btn danger" data-report-decision="Incorrect">Report is not correct</button><button class="btn primary" data-report-decision="Confirmed">Report is correct</button></div>`:`<div class="decision-banner"><strong>Decision: ${safe(report.status)}</strong><p>${safe(report.decisionNote||"No note provided.")}</p></div>`}</div>`;
  document.body.appendChild(modal);
  modal.querySelectorAll("[data-close-investigation]").forEach(x=>x.addEventListener("click",()=>modal.remove()));
  modal.querySelectorAll("[data-report-decision]").forEach(x=>x.addEventListener("click",()=>{
    const note=prompt("Add a short decision note for the audit record:")||"Decision recorded by administrator.";
    report.status=x.dataset.reportDecision; report.decisionNote=note; report.resolvedAt=new Date().toISOString();
    localStorage.setItem("hallpassReports",JSON.stringify(reports)); modal.remove(); renderReports(); toast("Report decision saved");
  }));
}
function renderUsers(){
  const users=getAccounts(), body=document.getElementById("usersBody"); if(!body)return;
  const searchInput=document.getElementById("userSearch"), query=(searchInput?.value||"").trim().toLowerCase();
  const filtered=users.filter(u=>[u.name,u.email,roleLabel(u.role),u.status].some(value=>String(value||"").toLowerCase().includes(query)));
  body.innerHTML=filtered.length ? filtered.map(u=>`<tr><td><strong>${safe(u.name||u.email)}</strong><br><small>${safe(u.email)}</small></td><td>${safe(roleLabel(u.role))}</td><td><span class="badge ${u.status==="Active"?"badge-success":"badge-warning"}">${safe(u.status||"Active")}</span></td><td>${(u.reports||[]).length}</td><td>${u.role==="student"?`<div class="table-actions"><button class="btn outline" data-report-user="${safe(u.email)}">Report</button><button class="btn outline" data-suspend-user="${safe(u.email)}">${u.status==="Suspended"?"Restore":"Suspend"}</button><button class="btn danger" data-delete-user="${safe(u.email)}">Delete</button></div>`:"Administrator account"}</td></tr>`).join("") : `<tr><td colspan="5" class="empty-state"><i class="fa-solid fa-user-slash"></i><strong>No users found</strong><span>Try a different name, email, role, or status.</span></td></tr>`;
  const clear=document.getElementById("clearUserSearch"); if(clear)clear.hidden=!query;
  const result=document.getElementById("userSearchResult"); if(result)result.textContent=query?`${filtered.length} ${filtered.length===1?"user":"users"} found`:"";
  const count=document.getElementById("registeredUserCount"); if(count)count.textContent=users.length;
}
function handleUserAction(event){
  const accounts=getAccounts();
  const report=event.target.closest("[data-report-user]"), suspend=event.target.closest("[data-suspend-user]"), remove=event.target.closest("[data-delete-user]");
  if(report){const user=accounts.find(u=>u.email===report.dataset.reportUser),reason=prompt("Describe the inappropriate behaviour:");if(!reason)return;user.reports=user.reports||[];user.reports.push({reason,createdAt:new Date().toISOString()});saveAccounts(accounts);renderUsers();toast("Student behaviour report recorded");}
  if(suspend){const user=accounts.find(u=>u.email===suspend.dataset.suspendUser);user.status=user.status==="Suspended"?"Active":"Suspended";saveAccounts(accounts);renderUsers();toast(`Student account ${user.status.toLowerCase()}`);}
  if(remove){if(!confirm(`Permanently delete ${remove.dataset.deleteUser}?`))return;saveAccounts(accounts.filter(u=>u.email!==remove.dataset.deleteUser));renderUsers();toast("Student account deleted");}
}
