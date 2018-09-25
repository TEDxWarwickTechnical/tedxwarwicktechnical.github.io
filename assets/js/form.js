'use strict';

x.onPageLoad(() => {
  const wrapper = document.getElementById('podio-webform-wrapper');
  const frame = document.getElementById('podio-webform');

  frame.src = frame.dataset.src;
  delete frame.dataset.src;

  window.addEventListener('message', e => {
    if (e.origin !== 'https://podio.com') {
      return false;
    }

    x.resizeFrame(frame, wrapper, e);
  });

  window.setTimeout(() => {
    if (wrapper.classList.contains('loading')) {
      wrapper.classList.add('timeout');
    }
  }, 5000);
});

x.extend({
  resizeFrame: (frame, wrapper, message) => {
    if (!frame.dataset.loaded) {
      wrapper.classList.remove('loading');
      frame.style.paddingTop = x.headerOverlap + 20 + 'px';
      frame.dataset.loaded = true;
    }

    if (!message.data) {
      return;
    }

    let [ senderId, height, error ] = message.data.split(':');

    frame.style.height = parseInt(height, 10) + x.headerOverlap + 20 + 'px';
  },
});
