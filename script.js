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
    const translations = {
      en: {
        about_paragraph: `Comestibles Zürich invites you on a gastronomic journey, bringing you a curated selection of international flavors.<br>
            Indulge in the art of fine dining with our handpicked delicacies, sourced from the world's culinary hotspots.<br><br>
            We source our products from the world-renowned Patti bakery. Francesco Patti moved from Sicily to the Aosta Valley to learn how to become a baker.<br>
            Then he met Andrea Cavallari, the current head of the Patti bakery, and they started a family business more than 30 years ago.<br>
            The secret of the success of Patti products comes from a combination of various factors: the choice of genuine top-quality ingredients, passion, craftsmanship, and a dough worked by hand, with love and patience, without preservatives and chemical additives.<br>
            Patti now has more than 50 employees and several agents, with three stores in the Biella area and a store in Milan.<br>
            The exquisite breadsticks and pastry products (Baci di dama, Amaretti morbidi, Canestrelli canavesani, Frollini with pine nuts, Torcetti with butter and Paste di meliga) are appreciated and distributed throughout northern Italy, up to overcome the borders reaching some selected shops in Europe.<br>`,
        },
      de: {
        about_paragraph: `Comestibles Zürich lädt Sie auf eine gastronomische Reise ein und bietet Ihnen eine kuratierte Auswahl an internationalen Aromen.<br>
            Gönnen Sie sich die Kunst des feinen Essens mit unseren handverlesenen Köstlichkeiten aus den kulinarischen Hotspots der Welt.<br><br>
            Wir beziehen unsere Produkte von der weltbekannten Bäckerei Patti. Francesco Patti zog von Sizilien ins Aostatal, um Bäcker zu werden.<br>
            Dann lernte er Andrea Cavallari, den jetzigen Leiter der Patty-Bäckerei kennen, und sie gründeten vor mehr als 30 Jahren ein Familienunternehmen.<br>
            Das Geheimnis des Erfolgs der Patti-Produkte liegt in einer Kombination verschiedener Faktoren: der Auswahl echter Zutaten von höchster Qualität, Leidenschaft, Handwerkskunst und einem Teig, der mit Liebe und Geduld von Hand verarbeitet wird, ohne Konservierungsstoffe und chemische Zusätze.<br>
            Patti hat heute mehr als 50 Mitarbeiter und mehrere Agenten, mit drei Filialen in der Gegend von Biella und einer Filiale in Milan.<br>
            Die exquisiten Grissini und Konditoreiprodukte (Baci di dama, Amaretti morbidi, Canestrelli canavesani, Frollini mit Pinienkernen, Torcetti mit Butter und Paste di meliga) werden in ganz Norditalien geschätzt und vertrieben, bis hin zu einigen ausgewählten Geschäften in Europa.<br>`,
        },
    };

    // Get all paragraph elements
    const paragraphs = document.querySelectorAll('p');

    // Loop through each paragraph and update the text
    paragraphs.forEach((paragraph) => {
      const id = paragraph.id;
      if (translations[language] && translations[language][id]) {
        paragraph.textContent = translations[language][id];
      }
    });
  }

  // Event listeners for language buttons
  enBtn.addEventListener('click', setEnglish);
  enBtn.addEventListener('click', translateParagraphs('en'));
  deBtn.addEventListener('click', setGerman);
  enBtn.addEventListener('click', translateParagraphs('de'));

  // Set default language to English
  setEnglish();
  translateParagraphs('en');
});
