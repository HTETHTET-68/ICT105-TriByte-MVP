document.addEventListener('DOMContentLoaded',()=>{
  const dialog=document.createElement('div');
  dialog.className='privacy-modal';
  dialog.setAttribute('role','dialog');
  dialog.setAttribute('aria-modal','true');
  dialog.setAttribute('aria-labelledby','privacyTitle');
  dialog.hidden=true;
  dialog.innerHTML=`
    <div class="privacy-dialog">
      <div class="privacy-dialog-head"><div><span class="badge">HallPass Prototype</span><h2 id="privacyTitle">Privacy Notice</h2></div><button class="modal-close" type="button" aria-label="Close privacy notice">×</button></div>
      <p class="muted"><strong>Last updated:</strong> July 2026</p>
      <p>HallPass is an ICT105 frontend prototype. This notice explains what information the demonstration uses and why.</p>
      <h3>Information used</h3>
      <ul>
        <li><strong>Account information entered:</strong> name, student ID, email address, role, and prototype password. In this version, only the email and role are retained; the other signup inputs are demonstrations and are not saved.</li>
        <li><strong>Review information:</strong> category, place name, rating, price, location, review text, submission time, and moderation status. A selected photo is not uploaded or retained in this frontend prototype.</li>
        <li><strong>Consent record:</strong> whether consent was accepted, the notice version, and acceptance time.</li>
      </ul>
      <h3>Why it is used</h3>
      <p>Information is used to demonstrate account access, connect submissions to a student dashboard, moderate reviews, display approved campus information, prevent misuse, and test HallPass features.</p>
      <h3>Storage and sharing</h3>
      <p>This version has no real backend. Prototype records are stored only in this browser using <code>localStorage</code>. They are not sent to HallPass servers. Anyone using the same browser profile may be able to view the stored demonstration data.</p>
      <h3>Your choices</h3>
      <p>Do not enter real or sensitive personal information. Consent is required to create a prototype account or submit a review. You may remove a pending review from My Submissions or clear the browser's site data to remove locally stored prototype records.</p>
      <div class="privacy-callout"><strong>Prototype limitation:</strong> This notice is for the student prototype and must be reviewed and expanded before any real deployment.</div>
      <button class="btn primary modal-done" type="button">I understand</button>
    </div>`;
  document.body.appendChild(dialog);
  let opener;
  const close=()=>{dialog.hidden=true;document.body.classList.remove('modal-open');opener?.focus();};
  document.querySelectorAll('[data-privacy-notice]').forEach(button=>button.addEventListener('click',()=>{opener=button;dialog.hidden=false;document.body.classList.add('modal-open');dialog.querySelector('.modal-close').focus();}));
  dialog.querySelector('.modal-close').onclick=close;
  dialog.querySelector('.modal-done').onclick=close;
  dialog.addEventListener('click',e=>{if(e.target===dialog)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!dialog.hidden)close();});
});
