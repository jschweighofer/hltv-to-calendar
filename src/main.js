import htmlDom from './modules/html-dom';
import handleDownload from './modules/handle-download';

(() => {
  if (window.hasRunHltvToCalendar) return;

  window.hasRunHltvToCalendar = true;

  // Put HTML into DOM
  const button = htmlDom();

  // Add event listener to button and trigger download
  button.addEventListener('click', () => {
    handleDownload();
  });
})();
