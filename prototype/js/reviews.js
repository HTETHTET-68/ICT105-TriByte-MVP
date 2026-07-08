document.addEventListener('DOMContentLoaded',()=>{
  const f=document.getElementById('reviewForm');

  // Access rule: everyone can read reviews, but only logged-in users can write reviews.
  if(f && !localStorage.getItem('hallpassUser')){
    localStorage.setItem('hallpassRedirectAfterLogin','write-review.html');
    document.querySelector('main').innerHTML=`
      <div class="container">
        <div class="auth-card" style="width:min(620px,100%);margin:auto;text-align:center">
          <span class="badge">Login Required</span>
          <h2>Please login to write a review</h2>
          <p class="muted">You can read dorm reviews, cafeteria reviews, and survival guides without logging in. Login is only required when you want to submit a review.</p>
          <a class="btn primary" href="login.html">Login to Continue</a>
          <a class="btn outline" href="dorms.html" style="margin-left:.5rem">Read Reviews</a>
        </div>
      </div>`;
    return;
  }

  if(f){
    f.onsubmit=e=>{
      e.preventDefault();
      saveReview({
        type:document.getElementById('type').value,
        title:document.getElementById('title').value,
        rating:document.getElementById('rating').value,
        price:document.getElementById('price').value,
        distance:document.getElementById('location').value,
        tag:'Student Review',
        emoji:document.getElementById('type').value==='Dorm'?'🏢':'🍽️',
        text:document.getElementById('comment').value
      });
      f.reset();
      toast('Review submitted. It is now pending admin approval.');
    };
  }
});
