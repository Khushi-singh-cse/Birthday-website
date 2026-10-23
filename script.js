const slides=[...document.querySelectorAll('.slide')];
const counter=document.getElementById('counter');
let current=0;
function showSlide(index){
  current=Math.max(0,Math.min(slides.length-1,index));
  slides.forEach((s,i)=>s.classList.toggle('active',i===current));
  counter.textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  document.getElementById('prevBtn').style.visibility=current===0?'hidden':'visible';
  document.getElementById('nextBtn').style.visibility=current===slides.length-1?'hidden':'visible';
}
document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>showSlide(current+1)));
document.getElementById('prevBtn').addEventListener('click',()=>showSlide(current-1));
document.getElementById('nextBtn').addEventListener('click',()=>showSlide(current+1));
document.getElementById('restartBtn').addEventListener('click',()=>{showSlide(0);document.getElementById('voiceReveal').classList.add('hidden')});

const music=document.getElementById('backgroundMusic');
const musicToggle=document.getElementById('musicToggle');
const musicLabel=document.getElementById('musicLabel');
musicToggle.addEventListener('click',async()=>{
  if(music.paused){
    try{await music.play();musicLabel.textContent='pause';musicToggle.classList.add('playing')}
    catch(e){musicLabel.textContent='add song.mp3 first'}
  }else{music.pause();musicLabel.textContent='play Khat';musicToggle.classList.remove('playing')}
});
const yes=document.getElementById('yesBtn'), no=document.getElementById('noBtn');
const msg=document.getElementById('choiceMsg'), cont=document.getElementById('continueBtn');
yes.addEventListener('click',()=>{msg.textContent='I knew you would say yes!! 💗';cont.classList.remove('hidden')});
no.addEventListener('click',()=>{msg.textContent='Oops, that button is broken… try YES 😌';no.textContent='TRY AGAIN';});
document.getElementById('voiceGift').addEventListener('click',()=>{
  const reveal=document.getElementById('voiceReveal');reveal.classList.toggle('hidden');
  if(!reveal.classList.contains('hidden')) reveal.scrollIntoView({behavior:'smooth',block:'nearest'});
});
showSlide(0);

