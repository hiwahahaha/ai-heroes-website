function openDouyinModal(){document.getElementById('douyinModal').classList.add('show');document.body.style.overflow='hidden'}
function closeDouyinModal(){document.getElementById('douyinModal').classList.remove('show');document.body.style.overflow=''}
function openLink(url){window.open(url,'_blank')}
function carouselScrollLeft(){document.getElementById('track').scrollBy({left:-320,behavior:'smooth'})}
function carouselScrollRight(){document.getElementById('track').scrollBy({left:320,behavior:'smooth'})}
window.addEventListener('keydown',function(e){if(e.key==='Escape')closeDouyinModal()});