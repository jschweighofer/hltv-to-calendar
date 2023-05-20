import { alertThrowError } from './helper';
import { createEvent } from '../../node_modules/ics/dist/index';
import { nanoid } from '../../node_modules/nanoid/nanoid';

export default async function handleDownload() {
  // Get appointment details
  const timeAndEventInfos = document.querySelector('.timeAndEvent');
  if (!timeAndEventInfos) alertThrowError('Cannot get time and event information element.');

  const time = timeAndEventInfos.querySelector('.time');
  if (!time) alertThrowError('Cannot get time element.');

  const date = new Date(+time.getAttribute('data-unix'));
  if (!date) alertThrowError('Cannot extract time.');

  const description = document.querySelector('.maps .veto-box');
  if (!description) alertThrowError('Cannot get description element.');

  const team1 = document.querySelector('.team1 .teamName');
  let team1Name = 'undef';
  if (team1) {
    team1Name = team1.textContent;
  }

  const team2 = document.querySelector('.team2 .teamName');
  let team2Name = 'undef';
  if (team2) {
    team1Name = team1.textContent;
  }

  const event = {
    uid: nanoid() + '@hltv-to-calendar',
    start: [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()],
    duration: { hours: 2, minutes: 0 },
    title: document.title.replace(' | HLTV.org', ''),
    description: description.textContent.trim(),
    url: location.href,
    alarms: [{ action: 'display', description: 'Reminder', trigger: { hours: 0, minutes: 15, before: true } }],
    productId: 'hltv-to-calendar'
  };

  const filename =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    '-' +
    team1Name.toLocaleLowerCase().trim().replace(/\s/g, '_') +
    '-vs-' +
    team2Name.toLocaleLowerCase().trim().replace(/\s/g, '_') +
    '.ics';

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
