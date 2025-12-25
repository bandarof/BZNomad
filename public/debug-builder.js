document.addEventListener('DOMContentLoaded', function() {
  console.log('=== Builder.io Debug ===');
  console.log('Window.Builder:', window.Builder);
  console.log('Builder.apiKey:', window.Builder?.apiKey);
  
  // Check if component is trying to fetch
  setTimeout(() => {
    const components = document.querySelectorAll('[builder-model]');
    console.log('Builder components found:', components.length);
  }, 1000);
});
