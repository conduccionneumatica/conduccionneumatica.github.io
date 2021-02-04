---
layout: none
---

const PAGES_AND_TIMES = [
  { title: 'este' },
  { title: 'suelo' },
  { title: 'oeste' },
  { title: 'cielo' }
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

function checkTime(navigate) {
  navigate = navigate || false;
  const mPage = PAGES_AND_TIMES[getPageIndex(getTimeAtGMT(-5))];
  const newUrl = `{{ site.baseurl }}/${mPage.title}/`;
  if(!window.location.href.includes(`/${mPage.title}`)) {
    if (navigate) {
      window.location.href = newUrl;
    } else {
      window.location.replace(newUrl);
    }
  }
}

function goHome() {
  window.location.replace('{{ site.baseurl }}/');
}
