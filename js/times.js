const PAGES_AND_TIMES = [
  { title: 'este', time: '04:00 a 10:00' },
  { title: 'suelo', time: '10:00 a 16:00' },
  { title: 'oeste', time: '16:00 a 22:00' },
  { title: 'cielo', time: '22:00 a 04:00' }
];

function getTimeAtGMT(gmtOffset) {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;

  const utc = localTime + localOffset;
  return (new Date(utc + (3600000 * gmtOffset)));
}

function getPageIndex(gmt) {
  const GMTsecs = gmt.getHours() * 60 * 60 + gmt.getMinutes() * 60 + gmt.getSeconds();
  const GMTindex = Math.floor((GMTsecs - 4 * 60 * 60) / (6 * 60 * 60));
  return (GMTindex + PAGES_AND_TIMES.length) % PAGES_AND_TIMES.length;
}
