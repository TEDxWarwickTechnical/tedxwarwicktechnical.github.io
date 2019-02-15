'use strict';

x.onPageLoad(() => {
  const cards = document.getElementsByClassName('speakers')[0]
                        .getElementsByClassName('card');

  for (let card of cards) {
    card.addEventListener('click', e => {
      const popoverId = `popover-${e.target.dataset.slug}`;
      x.presentPopover(document.getElementById(popoverId));
    });
  }

  document.getElementById('overlay').addEventListener('click', () => {
    x.dismissPopover();
  });

  document.querySelectorAll('.popover .close').forEach(btn => {
    btn.addEventListener('click', () => {
      x.dismissPopover();
    });
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      x.dismissPopover();
    }
  })
});

x.extend({
  activePopover: null,
  presentPopover: popover => {
    if (!x.activePopover) {
      x.activePopover = popover;

      popover.querySelectorAll('.ytembed').forEach(vid => {
        vid.src = vid.dataset.src;
      });

      popover.classList.remove('popover-hidden');
      document.body.classList.add('blur');
    }
  },
  dismissPopover: () => {
    if (x.activePopover) {
      x.activePopover.querySelectorAll('.ytembed').forEach(vid => {
        vid.src = '';
      });

      document.body.classList.remove('blur');
      x.activePopover.classList.add('popover-hidden');
      x.activePopover = null;
    }
  },
});
