(function () {
  if (window.hasRunHltvToCalendar) return;

  window.hasRunHltvToCalendar = true;

  // Put HTML into DOM
  const container = document.createElement('div');
  container.classList.add('htoc-container');

  const button = document.createElement('a');
  button.classList.add('htoc-button');
  button.text = 'Add To Calendar';

  container.insertAdjacentElement('afterbegin', button);

  const targetPosition = document.querySelector('.match-page .teamsBox');

  insertAfter(container, targetPosition);

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  // Add event listener to button and trigger action
  button.addEventListener('click', () => {
    alert('lets g2o');
  });
})();
