let mGroups;

function setHomeElements() {
  mGroups = Array.from(document.getElementsByClassName('home-group'));
}

function setHovers() {
  const GMTm5 = getTimeAtGMT(-5);
  const mIndex = getPageIndex(GMTm5);
  const currentPageSlug = PAGES_AND_TIMES['es'][mIndex];

  mGroups.forEach(el => {
    const mHoverPath = el.getElementsByClassName('home-path-hover')[0];
    const mSlug = el.getAttribute('data-slug');
    const mPathClass = `home-path-${mSlug}`;
    const currentPaths = Array.from(document.getElementsByClassName(mPathClass));
    const currentLabel = document.getElementById(`my-page-label-${mSlug}`);
    const hoverEls = [mHoverPath, currentLabel];

    if(el.classList.contains(`home-group-${currentPageSlug}`) || 0) {
      currentPaths.forEach(p => {
        p.classList.add('current');
      });
      currentLabel.classList.add('current');

      hoverEls.forEach(mhe => {
        mhe.addEventListener('click', () => {
          checkTime(true);
        });

        mhe.addEventListener('mouseover', () => {
          currentPaths.forEach(p => {
            p.classList.add('hover');
          });
          currentLabel.classList.add('hover');
        });

        mhe.addEventListener('mouseout', () => {
          currentPaths.forEach(p => {
            p.classList.remove('hover');
          });
          currentLabel.classList.remove('hover');
        });
      });
    } else {
      const mTitle = currentLabel.getElementsByClassName('label-title')[0];
      const mTime = currentLabel.getElementsByClassName('label-time')[0];

      currentPaths.forEach(p => {
        p.classList.remove('current');
      });

      hoverEls.forEach(mhe => {
        mhe.addEventListener('mouseover', () => {
          mTitle.classList.add('hide');
          mTime.classList.add('show');
        });

        mhe.addEventListener('mouseout', () => {
          mTitle.classList.remove('hide');
          mTime.classList.remove('show');
        });
      });
    }
  });
}

window.addEventListener('load', () => {
  setHomeElements();
  setHovers();
});

setHomeElements();
setHovers();
