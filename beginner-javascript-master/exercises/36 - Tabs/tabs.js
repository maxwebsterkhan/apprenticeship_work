const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the assosiated tabPanel and show it!
  const { id } = event.currentTarget;
  /*
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  // Method 2
  const tabPabel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanels.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
