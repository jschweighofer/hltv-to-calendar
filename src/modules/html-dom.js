export default function() {
  const container = document.createElement('div');
  container.classList.add('htoc-container');

  const button = document.createElement('a');
  button.classList.add('htoc-button');
  button.text = 'Add To Calendar';

  container.insertAdjacentElement('afterbegin', button);

  const targetPosition = document.querySelector('.match-page .teamsBox');

  insertAfter(container, targetPosition);

  return button;

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
}