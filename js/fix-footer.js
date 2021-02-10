let mFooterTitle, mFooterTime;

function setFooterElements() {
  mFooterTitle = document.getElementById('my-footer-title');
  mFooterTime = document.getElementById('my-footer-time');
}

function setTitle() {
  const GMTm5 = getTimeAtGMT(-5);
  const mIndex = getPageIndex(GMTm5);
  const slug = PAGES_AND_TIMES['es'][mIndex];

  mFooterTitle.classList.add(slug);
  mFooterTime.classList.add(slug);
}

window.addEventListener('load', () => {
  setFooterElements();
  setTitle();
});

setFooterElements();
setTitle();
