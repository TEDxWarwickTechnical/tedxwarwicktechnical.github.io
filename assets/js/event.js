'use strict';

x.onPageLoad(() => {
  const cards = document.getElementsByClassName('speakers')[0]
                        .getElementsByClassName('card');

  for (let card of cards) {
    card.addEventListener('click', e => {
      x.presentSpeaker(e.target.dataset.slug);
    });
  }
});

x.extend({
  presentSpeaker: speaker => {
    console.log('Presenting:', speaker);
    document.body.classList.add('blur');
  },
});
