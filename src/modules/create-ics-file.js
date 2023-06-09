import { nanoid } from '../../node_modules/nanoid/nanoid';

/**
 * Creates a text file with file ending .ics
 * @param {Object} data
 * @param {string} data.fileName
 * @param {Date} data.date
 * @param {string} data.description
 * @return {File} .ics File
 */
export default function createIcsFile(data) {
  const fileContent = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:hltv-to-calendar
METHOD:PUBLISH
X-PUBLISHED-TTL:PT1H
BEGIN:VEVENT
UID:${nanoid()}@hltv-to-calendar
SUMMARY:${document.title.replace(' | HLTV.org', '')}
DTSTAMP:${createICalendarDate(new Date())}
DTSTART:${createICalendarDate(data.date)}
DESCRIPTION:${data.description.textContent.trim()}
URL:${location.href}
DURATION:PT2H
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Reminder
TRIGGER:-PT15M
END:VALARM
END:VEVENT
END:VCALENDAR`;

  return new File([fileContent], data.fileName, { type: 'plain/text' });
}

function createICalendarDate(date) {
  return (
    date.getFullYear() +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    date.getDate().toString().padStart(2, '0') +
    'T' +
    date.getHours().toString().padStart(2, '0') +
    date.getMinutes().toString().padStart(2, '0') +
    date.getSeconds().toString().padStart(2, '0')
  );
}
