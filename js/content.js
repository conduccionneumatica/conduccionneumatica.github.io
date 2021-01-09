let mFrameTop, mFrameMiddle, mFrameBottom, mPageWrapper;

function setElements() {
  mFrameTop = document.getElementById('my-frame-top');
  mFrameMiddle = document.getElementById('my-frame-middle');
  mFrameBottom = document.getElementById('my-frame-bottom');
  mPageWrapper = document.getElementById('my-page-wrapper');
}

function setPaddings() {
  const topHeight = mFrameTop.offsetHeight;
  const bottomHeight = mFrameBottom.offsetHeight;
  mPageWrapper.style.paddingTop = `${topHeight}px`;
  mPageWrapper.style.paddingBottom = `${bottomHeight}px`;
}

window.addEventListener('load', () => {
  setElements();
  setPaddings();
});

window.addEventListener('resize', () => {
  setPaddings();
});

setElements();
setPaddings();
