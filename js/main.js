// Basic UI: year fill, view toggle (grid/list), category filter
document.addEventListener('DOMContentLoaded', ()=> {
  // set years
  const ys = new Date().getFullYear();
  ['year','year2','year3','year4','year5'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = ys;
  });

  // view toggle
  const gridBtn = document.getElementById('gridView');
  const listBtn = document.getElementById('listView');
  const postsContainer = document.querySelector('.posts-section') || document;
  const postsGrid = document.getElementById('posts') || document.querySelector('#recent-posts');

  function setView(view){
    if(!postsGrid) return;
    if(view === 'list'){
      document.body.classList.add('list-view');
      gridBtn && gridBtn.classList.remove('active');
      listBtn && listBtn.classList.add('active');
      gridBtn && gridBtn.setAttribute('aria-pressed','false');
      listBtn && listBtn.setAttribute('aria-pressed','true');
    } else {
      document.body.classList.remove('list-view');
      gridBtn && gridBtn.classList.add('active');
      listBtn && listBtn.classList.remove('active');
      gridBtn && gridBtn.setAttribute('aria-pressed','true');
      listBtn && listBtn.setAttribute('aria-pressed','false');
    }
  }

  gridBtn && gridBtn.addEventListener('click', ()=> setView('grid'));
  listBtn && listBtn.addEventListener('click', ()=> setView('list'));

  // category filter
  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(b=>{
    b.addEventListener('click', ()=>{
      catBtns.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const cat = b.dataset.cat || 'all';
      filterCategory(cat);
    });
  });

  function filterCategory(cat){
    const cards = (postsGrid || document).querySelectorAll('.card');
    cards.forEach(card=>{
      const c = card.dataset.category || '';
      if(cat === 'all' || c.toLowerCase() === cat.toLowerCase()){
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
});
