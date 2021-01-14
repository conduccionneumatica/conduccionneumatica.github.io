let mFooterTitle, mFooterTime;

function setFooterElements() {
  mFooterTitle = document.getElementById('my-footer-title');
  mFooterTime = document.getElementById('my-footer-time');
}

function setTitle() {
  const GMTm5 = getTimeAtGMT(-5);
  const mIndex = getPageIndex(GMTm5);

  mFooterTitle.innerHTML = PAGES_AND_TIMES[mIndex].title;
  mFooterTime.innerHTML = `abierto de ${PAGES_AND_TIMES[mIndex].time} GMT-5`;
}

window.addEventListener('load', () => {
  setFooterElements();
  setTitle();
});

setFooterElements();
setTitle();
