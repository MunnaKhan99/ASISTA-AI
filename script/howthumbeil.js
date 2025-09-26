document.querySelector('.video-overlay').addEventListener('click', function(){
  // Autoplay by appending &autoplay=1
  const iframe = document.getElementById('ytVideo');
  iframe.src += "&autoplay=1";
  this.style.display = 'none';
});
