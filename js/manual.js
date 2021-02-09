let mForm, mFormButton, mShowFormButton, mStatus;
const FORM_MAX_HEIGHT = '250px';
const FORM_SCROLL_DELAY = 300;

function setManualElements() {
  mForm = document.getElementById('my-form');
  mFormButton = document.getElementById('my-form-button');
  mStatus = document.getElementById('my-form-status');
  mShowFormButton = document.getElementById('my-manual-table-info-button');
}

window.addEventListener('DOMContentLoaded', function() {
  setManualElements();

  mShowFormButton.addEventListener('click', () => {
    if(mForm.style.maxHeight === FORM_MAX_HEIGHT) {
      mForm.style.maxHeight = '0';
    } else {
      mForm.style.maxHeight = FORM_MAX_HEIGHT;
      setTimeout(() => mForm.scrollIntoView({ behavior: 'smooth' }), FORM_SCROLL_DELAY);
    }
  });
  
  function success() {
    mForm.reset();
    mStatus.style.display = 'block';
    mStatus.innerHTML = (PAGE_LANG === 'en') ? 'Thank you!' : '¡Gracias!';
    setTimeout(() => mForm.scrollIntoView({ behavior: 'smooth' }), FORM_SCROLL_DELAY);
  }

  function error() {
    mStatus.style.display = 'block';
    mStatus.innerHTML = (PAGE_LANG === 'en') ? 'Ooops! There was a problem.' : '¡Oops! Hubo un problema.';
    setTimeout(() => mForm.scrollIntoView({ behavior: 'smooth' }), FORM_SCROLL_DELAY);
  }

  mForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    ajax(mForm.method, mForm.action, (new FormData(mForm)), success, error);
  });
});

function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
