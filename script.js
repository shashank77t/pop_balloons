let popped=0;
document.addEventListener("click",function(e){
    if(e.target.className==="balloon"){
        e.target.classList.remove('balloon'); // Remove the 'balloon' class
        e.target.classList.add('popped');
       e.target.style.background="#19172e";
        e.target.innerHTML='🎈';
        e.target.style.fontSize = '60px';
        popped++;
        checkAllPopped();
    }
});
function checkAllPopped() {
    if (popped === 10) {
     
      let gallery = document.querySelector('#balloon-gallery');
      let message = document.querySelector('#yay');
      gallery.innerHTML = '';
      message.style.display = 'block';
    }
  };