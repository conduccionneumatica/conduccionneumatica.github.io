---
---

function checkTime() {
  const mPage = PAGES_AND_TIMES[getPageIndex(getTimeAtGMT(-5))];
  if(!window.location.href.includes(mPage.title)) {
    window.location.replace(`{{ site.baseurl }}/${mPage.title}/`);
  }
}

window.addEventListener('load', () => {
  checkTime();
});

checkTime();
