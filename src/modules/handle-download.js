import { createEvent } from '../../node_modules/ics/dist/index';

export default async function handleDownload() {
  // Get appointment details

  const timeAndEventInfos = document.querySelector('.timeAndEvent');
  const time = timeAndEventInfos.querySelector('.time');
  const date = new Date(+time.getAttribute('data-unix'));

  console.log(date);

  console.log([date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()]);

  const event = {
    start: [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()],
    duration: { hours: 6, minutes: 30 },
    title: document.title,
    description: document.querySelector("meta[name='description']").getAttribute('content'),
    location: 'Folsom Field, University of Colorado (finish line)',
    url: 'http://www.bolderboulder.com/',
    status: 'CONFIRMED',
  };

  const filename = 'ExampleEvent.ics';
  const file = await new Promise((resolve, reject) => {
    createEvent(event, (error, value) => {
      if (error) {
        reject(error);
      }

      resolve(new File([value], filename, { type: 'plain/text' }));
    });
  });
  const url = URL.createObjectURL(file);

  // trying to assign the file URL to a window could cause cross-site
  // issues so this is a workaround using HTML5
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  URL.revokeObjectURL(url);
}
