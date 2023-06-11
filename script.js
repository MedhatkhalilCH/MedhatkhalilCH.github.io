import translations from './translations.js';

document.addEventListener('DOMContentLoaded', function() {
  // Get all tab links
  var tabLinks = document.querySelectorAll('.tab-link');

  // Add event listener to each tab link
  tabLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Get the target tab content ID from the data attribute
      var tabId = this.getAttribute('data-tab');

      // Hide all tab contents
      var tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(function(content) {
        content.style.display = 'none';
      });

      // Show the selected tab content and activate the tab link
      document.getElementById(tabId).style.display = 'block';
      this.classList.add('active');
    });
  });

  // Activate the default tab
  var defaultTab = document.querySelector('.tab-link[data-tab="grissini"]');
  defaultTab.classList.add('active');
  var defaultTabContent = document.getElementById('grissini');
  defaultTabContent.style.display = 'block';
});


document.addEventListener('DOMContentLoaded', function() {
  // Get language buttons
  var enBtn = document.getElementById('en-btn');
  var deBtn = document.getElementById('de-btn');

  // Get all elements that need language switching
  var languageElements = document.querySelectorAll('[data-en], [data-de]');

  // Function to set language to English
  function setEnglish() {
    languageElements.forEach(function(element) {
      element.textContent = element.getAttribute('data-en');
    });
    enBtn.classList.add('active');
    deBtn.classList.remove('active');
  }

  // Function to set language to German
  function setGerman() {
    languageElements.forEach(function(element) {
      element.textContent = element.getAttribute('data-de');
    });
    enBtn.classList.remove('active');
    deBtn.classList.add('active');
  }

  // Function to translate paragraphs
  function translateParagraphs(language) {

    // Get all paragraph elements
    const paragraphs = document.querySelectorAll('p');

    // Loop through each paragraph and update the text
    paragraphs.forEach((paragraph) => {
      const id = paragraph.id;
      if (translations[language] && translations[language][id]) {
        paragraph.innerHTML = translations[language][id];
      }
    });
  }

  // Event listeners for language buttons
  enBtn.addEventListener('click', function() {
    setEnglish();
    translateParagraphs('en');
  });
  deBtn.addEventListener('click', function() {
    setGerman();
    translateParagraphs('de');
  });

  // Set default language to English
  setEnglish();
  translateParagraphs('en');
});
