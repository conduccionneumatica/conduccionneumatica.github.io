let mFrameTop, mFrameMiddle, mFrameBottom, mPageWrapper;

function setPaddings() {
  console.log('hi');
  const topHeight = mFrameTop.offsetHeight;
  const bottomHeight = mFrameBottom.offsetHeight;
  mPageWrapper.style.paddingTop = `${topHeight}px`;
  mPageWrapper.style.paddingBottom = `${bottomHeight}px`;
}

window.addEventListener('load', () => {
  mFrameTop = document.getElementById('my-frame-top');
  mFrameMiddle = document.getElementById('my-frame-middle');
  mFrameBottom = document.getElementById('my-frame-bottom');
  mPageWrapper = document.getElementById('my-page-wrapper');
  setPaddings();
});

window.addEventListener('resize', () => {
  setPaddings();
});
