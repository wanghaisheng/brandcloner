document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  const compareUrlInput = document.getElementById('compare-url');
  const compareButton = document.getElementById('compare-button');
  const comparisonResults = document.getElementById('comparison-results');
  const originalUrlElement = document.getElementById('original-url');
  const emptyState = document.querySelector('.results-empty-state');
  const loadingState = document.querySelector('.results-loading');
  const errorState = document.querySelector('.results-error');
  const successState = document.querySelector('.results-success');
  
  if (!compareUrlInput || !compareButton || !comparisonResults) return;
  
  // Helper function to show the appropriate state
  function showState(state) {
    emptyState.style.display = 'none';
    loadingState.style.display = 'none';
    errorState.style.display = 'none';
    successState.style.display = 'none';
    
    if (state === 'empty') emptyState.style.display = 'flex';
    if (state === 'loading') loadingState.style.display = 'flex';
    if (state === 'error') errorState.style.display = 'flex';
    if (state === 'success') successState.style.display = 'block';
  }
  
  // Function to create a preview for a successfully compared services
  function createSuccessfulComparison(url) {
    // For demo purposes, we'll use a sanitized URL
    const sanitizedUrl = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    
    // Update original URL display
    if (originalUrlElement) {
      originalUrlElement.textContent = sanitizedUrl;
    }
    
    // In a real implementation, we would make API calls to different cloning services
    // and display actual results. For this demo, we'll just show placeholders with the URL.
    
    // Update service previews with URL information
    const servicePreviews = document.querySelectorAll('.service-preview .img-placeholder');
    servicePreviews.forEach(preview => {
      const serviceName = preview.textContent.split(' ')[0];
      preview.textContent = `${serviceName} Clone of ${sanitizedUrl}`;
    });
    
    // Update original site preview
    const originalPreview = document.querySelector('.original-site .img-placeholder');
    if (originalPreview) {
      originalPreview.textContent = `Original Site: ${sanitizedUrl}`;
    }
  }
  
  // Compare button click handler
  compareButton.addEventListener('click', function() {
    const url = compareUrlInput.value.trim();
    
    if (!url) {
      showState('empty');
      return;
    }
    
    // Validate URL format
    let isValidUrl;
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      isValidUrl = true;
    } catch (e) {
      isValidUrl = false;
    }
    
    if (!isValidUrl) {
      showState('error');
      return;
    }
    
    // Show loading state
    showState('loading');
    
    // Simulate API calls with timeout (3 seconds)
    setTimeout(() => {
      // For demo purposes, randomly succeed or fail
      const success = Math.random() > 0.1; // 90% success rate
      
      if (success) {
        createSuccessfulComparison(url);
        showState('success');
      } else {
        showState('error');
      }
    }, 3000);
  });
  
  // Allow pressing Enter to trigger comparison
  compareUrlInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      compareButton.click();
    }
  });
  
  // Initialize with empty state
  showState('empty');
});
