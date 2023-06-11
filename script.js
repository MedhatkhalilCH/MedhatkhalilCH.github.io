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
