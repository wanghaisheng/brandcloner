document.addEventListener('DOMContentLoaded', function() {
  const brandUrlInput = document.getElementById('brand-url');
  const cloneButton = document.getElementById('clone-button');
  const playgroundResults = document.getElementById('playground-results');
  const emptyState = document.querySelector('.results-empty-state');
  const loadingState = document.querySelector('.results-loading');
  const errorState = document.querySelector('.results-error');
  const successState = document.querySelector('.results-success');
  const editPreviewButton = document.getElementById('edit-preview');
  const downloadFilesButton = document.getElementById('download-files');
  const deployToCloudflareButton = document.getElementById('deploy-to-cloudflare');
  const previewIframe = document.getElementById('preview-iframe');
  const colorPalette = document.getElementById('color-palette');
  const typographyPreview = document.getElementById('typography-preview');
  const componentsList = document.getElementById('components-list');
  
  if (!brandUrlInput || !cloneButton || !playgroundResults) return;
  
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
  
  // Sample color data for demonstration
  const sampleColorData = [
    { name: 'Primary', hex: '#4f46e5' },
    { name: 'Secondary', hex: '#f59e0b' },
    { name: 'Accent', hex: '#06b6d4' },
    { name: 'Background', hex: '#ffffff' },
    { name: 'Text', hex: '#1f2937' },
    { name: 'Border', hex: '#e5e7eb' }
  ];
  
  // Sample font data for demonstration
  const sampleFontData = [
    { name: 'Headings', family: 'Inter, sans-serif', weight: '700' },
    { name: 'Body', family: 'Inter, sans-serif', weight: '400' },
    { name: 'Button', family: 'Inter, sans-serif', weight: '500' }
  ];
  
  // Sample component data for demonstration
  const sampleComponentData = [
    'Header', 'Footer', 'Buttons', 'Cards', 'Hero Section', 'Testimonials'
  ];
  
  // Function to create a preview for a successfully cloned site
  function createSuccessfulPreview(url) {
    // For demo purposes, we'll use a sanitized URL
    const sanitizedUrl = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    
    // Update iframe (in a real app, this would show an actual preview)
    // For demo purposes, we'll use a data URI with a simple HTML structure
    const previewHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Inter, sans-serif; color: #1f2937; margin: 0; padding: 0; }
          .header { background-color: #4f46e5; color: white; padding: 1rem; }
          .content { padding: 2rem; }
          h1 { margin-top: 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Cloned from ${sanitizedUrl}</h2>
        </div>
        <div class="content">
          <h1>Style Preview</h1>
          <p>This is a preview of the cloned style from ${sanitizedUrl}. In the actual product, this would be a more accurate representation of the original site's style.</p>
          <button style="background-color: #4f46e5; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">Sample Button</button>
        </div>
      </body>
      </html>
    `;
    
    previewIframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewHtml);
    
    // Create color swatches
    colorPalette.innerHTML = '';
    sampleColorData.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch';
      swatch.style.backgroundColor = color.hex;
      swatch.title = `${color.name}: ${color.hex}`;
      colorPalette.appendChild(swatch);
    });
    
    // Create typography preview
    typographyPreview.innerHTML = '';
    sampleFontData.forEach(font => {
      const fontPreview = document.createElement('div');
      fontPreview.style.fontFamily = font.family;
      fontPreview.style.fontWeight = font.weight;
      fontPreview.style.marginBottom = '0.5rem';
      fontPreview.textContent = `${font.name}: ${font.family} (${font.weight})`;
      typographyPreview.appendChild(fontPreview);
    });
    
    // Create components list
    componentsList.innerHTML = '';
    sampleComponentData.forEach(component => {
      const componentItem = document.createElement('div');
      componentItem.className = 'component-item';
      componentItem.textContent = component;
      componentsList.appendChild(componentItem);
    });
  }
  
  // Clone button click handler
  cloneButton.addEventListener('click', function() {
    const url = brandUrlInput.value.trim();
    
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
    
    // Simulate API call with timeout (3 seconds)
    setTimeout(() => {
      // For demo purposes, randomly succeed or fail
      const success = Math.random() > 0.2; // 80% success rate
      
      if (success) {
        createSuccessfulPreview(url);
        showState('success');
      } else {
        showState('error');
      }
    }, 3000);
  });
  
  // Edit preview button handler
  if (editPreviewButton) {
    editPreviewButton.addEventListener('click', function() {
      alert('In the full version, this would open an editor to customize the cloned styles.');
    });
  }
  
  // Download files button handler
  if (downloadFilesButton) {
    downloadFilesButton.addEventListener('click', function() {
      alert('In the full version, this would download a zip file with all the cloned style files.');
    });
  }
  
  // Deploy to Cloudflare button handler
  if (deployToCloudflareButton) {
    deployToCloudflareButton.addEventListener('click', function() {
      alert('In the full version, this would initiate the deployment process to Cloudflare Pages.');
    });
  }
  
  // Initialize with empty state
  showState('empty');
  
  // Add some basic input validation and enhancement
  brandUrlInput.addEventListener('input', function() {
    let url = this.value.trim();
    
    // If user didn't include http/https, add it for them in the background
    if (url && !/^https?:\/\//i.test(url)) {
      // We don't modify the input value directly, but when they submit,
      // the validation will handle this
    }
  });
  
  // Allow pressing Enter to trigger clone
  brandUrlInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      cloneButton.click();
    }
  });
});

