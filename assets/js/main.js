// Somos Hermanos — nav toggle + scroll reveal + click-to-load video facades
(function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
    });
  }

  // Click-to-load video: nothing is fetched until the user presses play.
  document.querySelectorAll('.vfacade').forEach(function(f){
    var btn = f.querySelector('.vfacade__play');
    var v = f.querySelector('video');
    if(!btn || !v) return;
    btn.addEventListener('click', function(){
      v.setAttribute('controls','');   // native controls appear once playing
      f.classList.add('is-playing');
      var p = v.play();
      if(p && p.catch){ p.catch(function(){}); }
    });
  });

  var els = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:0.14, rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
})();
