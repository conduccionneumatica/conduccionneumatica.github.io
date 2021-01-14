let mFrameTop, mFrameMiddle, mFrameBottom, mPageWrapper, mContentText;

function setContentElements() {
  mFrameTop = document.getElementById('my-frame-top');
  mFrameMiddle = document.getElementById('my-frame-middle');
  mFrameBottom = document.getElementById('my-frame-bottom');
  mPageWrapper = document.getElementById('my-page-wrapper');
  mContentText = document.getElementById('my-content-text');
}

function setPaddings() {
  const topHeight = mFrameTop.offsetHeight;
  const bottomHeight = mFrameBottom.offsetHeight;
  mPageWrapper.style.paddingTop = `${topHeight}px`;
  mPageWrapper.style.paddingBottom = `${bottomHeight}px`;
}

function sizeVideos() {
  const maxW = mContentText.offsetWidth;
  const maxH = mFrameMiddle.offsetHeight;

  for(const v of document.getElementsByClassName('video-wrapper-sizer')) {
    if((maxW / maxH) > (16 / 9)) {
      v.style.height = `${maxH}px`;
      v.style.width = `${maxH * 16 / 9}px`;
    } else {
      v.style.width = `${maxW}px`;
      v.style.height = `${maxW * 9 / 16}px`;
    }
  }
}

window.addEventListener('load', () => {
  setContentElements();
  setPaddings();
  sizeVideos();
});

window.addEventListener('resize', () => {
  setPaddings();
  sizeVideos();
});

setContentElements();
setPaddings();
sizeVideos();
