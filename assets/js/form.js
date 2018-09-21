'use strict';

x.onPageLoad(() => {
  const iframe = document.getElementById('podio-webform');

  iframe.src = iframe.dataset.src;
  delete iframe.dataset.src;

  window.addEventListener('message', e => {
    if (e.origin !== 'https://podio.com') {
      return false;
    }

    x.resizeFrame(iframe, e);
  });
});

x.extend({
  resizeFrame: (frame, message) => {
    if (!frame.dataset.loaded) {
      const wrapper = document.getElementById('podio-webform-wrapper');
      wrapper.classList.remove('loading');
      frame.style.paddingTop = x.headerOverlap + 20 + 'px';
      frame.dataset.loaded = true;
    }

    if (!message.data) {
      return;
    }

    let [ senderId, height, error ] = message.data.split(':');

    frame.style.height = parseInt(height, 10) + x.headerOverlap + 20 + 'px';

    // Scroll to iframe if there is an error message
    // if (error === 'true') {
    //   let posY = 0;
    //
    //   while (iframe !== null){
    //     posY += iframe.offsetTop;
    //     iframe = iframe.offsetParent;
    //   }
    //
    //   window.scrollTo(0, posY);
    // }
  },
});
