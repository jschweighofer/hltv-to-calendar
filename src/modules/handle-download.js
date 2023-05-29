import createIcsFile from './create-ics-file';

export default function () {
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
    team2Name = team2.textContent;
  }

  const fileName = createFileName({ date, team1: team1Name, team2: team2Name });
  const file = createIcsFile({ fileName, date, description });

  const url = URL.createObjectURL(file);

  // trying to assign the file URL to a window could cause cross-site
  // issues so this is a workaround using HTML5
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  URL.revokeObjectURL(url);
}

function createFileName(data) {
  return (
    data.date.getFullYear() +
    '-' +
    (data.date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    data.date.getDate().toString().padStart(2, '0') +
    '-' +
    data.team1.toLocaleLowerCase().trim().replace(/\s/g, '_') +
    '-vs-' +
    data.team2.toLocaleLowerCase().trim().replace(/\s/g, '_') +
    '.ics'
  );
}

function alertThrowError(msg) {
  alert(msg);
  throw new Error(msg);
}