// Debug Builder.io initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== Builder.io Debug ===');
  
  if (window.Builder) {
    console.log('Builder global exists');
    console.log('Builder.apiKey:', window.Builder.apiKey);
    
    if (!window.Builder.apiKey) {
      window.Builder.init('2fcfe1b955134aacad7b3c67770584fe');
      console.log('Initialized Builder.io via debug script');
    }
  } else {
    console.error('Builder global NOT found');
  }
});
