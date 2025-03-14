document.addEventListener('DOMContentLoaded', function() {
  // Default language is English
  let currentLanguage = 'en';
  
  // Language selector element
  const languageSelector = document.getElementById('language-selector');
  
  // All translatable content is managed through this function
  async function loadLanguage(lang) {
    try {
      // In a real implementation, this would fetch from a JSON file
      // For this demo, we'll define some translations inline
      const translations = {
        'en': {
          'hero.title': 'Clone Any Brand\'s Website Style in Seconds',
          'hero.subtitle': 'Enter any brand URL, instantly clone their style, and test your product\'s conversion rates on Cloudflare with minimal effort.',
          'cta.try': 'Try It Now',
          'cta.how': 'How It Works',
          'features.title': 'Powerful Features to Clone Any Brand\'s Style',
          'features.subtitle': 'BrandCloner makes it easy to replicate the look and feel of successful brands for your conversion testing.',
          // Add more translations as needed
        },
        'es': {
          'hero.title': 'Clone Cualquier Estilo de Marca en Segundos',
          'hero.subtitle': 'Ingrese cualquier URL de marca, clone su estilo al instante y pruebe las tasas de conversión de su producto en Cloudflare con un esfuerzo mínimo.',
          'cta.try': 'Pruébalo Ahora',
          'cta.how': 'Cómo Funciona',
          'features.title': 'Funciones Potentes para Clonar el Estilo de Cualquier Marca',
          'features.subtitle': 'BrandCloner facilita la replicación de la apariencia de marcas exitosas para sus pruebas de conversión.',
          // Add more translations as needed
        },
        'fr': {
          'hero.title': 'Clonez le Style de N\'importe Quelle Marque en Quelques Secondes',
          'hero.subtitle': 'Entrez l\'URL d\'une marque, clonez instantanément son style et testez les taux de conversion de votre produit sur Cloudflare avec un minimum d\'effort.',
          'cta.try': 'Essayez Maintenant',
          'cta.how': 'Comment Ça Marche',
          'features.title': 'Fonctionnalités Puissantes pour Cloner le Style de N\'importe Quelle Marque',
          'features.subtitle': 'BrandCloner facilite la réplication de l\'apparence des marques à succès pour vos tests de conversion.',
          // Add more translations as needed
        },
        'de': {
          'hero.title': 'Klonen Sie den Stil Jeder Marke in Sekundenschnelle',
          'hero.subtitle': 'Geben Sie eine beliebige Marken-URL ein, klonen Sie sofort ihren Stil und testen Sie die Konversionsraten Ihres Produkts auf Cloudflare mit minimalem Aufwand.',
          'cta.try': 'Jetzt Ausprobieren',
          'cta.how': 'Wie es Funktioniert',
          'features.title': 'Leistungsstarke Funktionen zum Klonen des Stils Jeder Marke',
          'features.subtitle': 'BrandCloner erleichtert die Nachbildung des Erscheinungsbilds erfolgreicher Marken für Ihre Konversionstests.',
          // Add more translations as needed
        },
        'zh': {
          'hero.title': '几秒钟内克隆任何品牌的网站风格',
          'hero.subtitle': '输入任何品牌网址，立即克隆其风格，并在 Cloudflare 上以最小的努力测试您的产品转化率。',
          'cta.try': '立即尝试',
          'cta.how': '工作原理',
          'features.title': '强大的功能，克隆任何品牌的风格',
          'features.subtitle': 'BrandCloner 使您能够轻松复制成功品牌的外观和感觉，用于转化测试。',
          // Add more translations as needed
        }
      };
      
      // Update all elements with data-i18n attribute
      // In a real implementation, this would be done with actual data-i18n attributes
      // For this demo, we're just simulating the effect
      
      // Update hero section
      if (translations[lang]['hero.title']) {
        document.querySelector('.hero h1').textContent = translations[lang]['hero.title'];
      }
      
      if (translations[lang]['hero.subtitle']) {
        document.querySelector('.hero p').textContent = translations[lang]['hero.subtitle'];
      }
      
      // Update CTA buttons
      if (translations[lang]['cta.try']) {
        const ctaButtons = document.querySelectorAll('.btn-primary');
        ctaButtons.forEach(button => {
          if (button.textContent.includes('Try It') || 
              button.textContent.includes('Pruébalo') || 
              button.textContent.includes('Essayez') ||
              button.textContent.includes('Ausprobieren') ||
              button.textContent.includes('尝试')) {
            button.textContent = translations[lang]['cta.try'];
          }
        });
      }
      
      if (translations[lang]['cta.how']) {
        const howButtons = document.querySelectorAll('.btn-secondary');
        howButtons.forEach(button => {
          if (button.textContent.includes('How It Works') || 
              button.textContent.includes('Cómo Funciona') || 
              button.textContent.includes('Comment Ça Marche') ||
              button.textContent.includes('Wie es Funktioniert') ||
              button.textContent.includes('工作原理')) {
            button.textContent = translations[lang]['cta.how'];
          }
        });
      }
      
      // Update features section
      if (translations[lang]['features.title']) {
        document.querySelector('#features h2').textContent = translations[lang]['features.title'];
      }
      
      if (translations[lang]['features.subtitle']) {
        document.querySelector('#features p').textContent = translations[lang]['features.subtitle'];
      }
      
      // In a real implementation, we would continue updating all elements with data-i18n attributes
      
      // Store the current language
      currentLanguage = lang;
      
      // Update language selector to reflect current language
      if (languageSelector) {
        languageSelector.value = lang;
      }
      
      console.log(`Language changed to ${lang}`);
      
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  }
  
  // Initialize with default language
  loadLanguage(currentLanguage);
  
  // Add event listener to language selector
  if (languageSelector) {
    languageSelector.addEventListener('change', function() {
      loadLanguage(this.value);
    });
  }
});

