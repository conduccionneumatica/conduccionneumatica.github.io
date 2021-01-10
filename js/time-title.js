const PAGES_AND_TIMES = [
  { title: 'este', time: '04:00 a 10:00' },
  { title: 'suelo', time: '10:00 a 16:00' },
  { title: 'oeste', time: '16:00 a 22:00' },
  { title: 'cielo', time: '22:00 a 04:00' }
];

let mFooterTitle, mFooterTime;

function setElements() {
  mFooterTitle = document.getElementById('my-footer-title');
  mFooterTime = document.getElementById('my-footer-time');
}

function getTimeAtGMT(gmtOffset) {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;

  const utc = localTime + localOffset;
  return (new Date(utc + (3600000 * gmtOffset)));
}

function setTitle() {
  const GMTm5 = getTimeAtGMT(-5);
  const GMTm5Secs = GMTm5.getHours() * 60 * 60 + GMTm5.getMinutes() * 60 + GMTm5.getSeconds();
  const GMTm5Index = Math.floor((GMTm5Secs - 4 * 60 * 60) / (6 * 60 * 60));
  const GMTm5FixedIndex = (GMTm5Index + 4) % 4;

  mFooterTitle.innerHTML = PAGES_AND_TIMES[GMTm5FixedIndex].title;
  mFooterTime.innerHTML = `abierto de ${PAGES_AND_TIMES[GMTm5FixedIndex].time} GMT-5`;
}

window.addEventListener('load', () => {
  setElements();
  setTitle();
});

setElements();
setTitle();
