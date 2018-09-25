'use strict';

const x = {
  init: ({url, fbAppId}) => {
    window.fbAsyncInit = () => {
      FB.init({
        appId: fbAppId,
        version: 'v2.12',
        autoLogAppEvents: true,
        status: true,
        xfbml: true
      });
    };

    let path = location.pathname;

    if (url !== path) {
      history.replaceState({
        src: path,
        ext: path.startsWith(url) ? path.substring(url.length) : null
      }, document.title, url);
    }

    if (document.readyState !== 'interactive') {
      document.onreadystatechange = () => {
        if (document.readyState === 'interactive') {
          document.onreadystatechange = null;
          x.initFuncs.forEach(func => func());
        }
      };
    }

    console.log('Applying for a technical role?', {
      success: 'Include x.acceptMe() in your application',
    });

    x.extend({
      insanityCount: 0,
      acceptMe: () => {
        if (x.insanityCount++ - 2 < 0 ? 0 : x.insanityCount - 3) {
          console.log('"Don’t Panic."');
          delete x.insanityCount;
          delete x.acceptMe;
        } else {
          console.log('Think you\'re clever eh? Let\'s test the definition of insanity.');
        }
      },
    });
  },

  extend: extensions => {
    Object.assign(x, extensions);
  },

  onPageLoad: readyFunc => {
    /**
     * Do not use `DOMContentLoaded` event here, since it fires *after* scripts
     * with the `defer` attribute (i.e. social SDKs). See HTML spec §12.2.7
     * (The end) for more details.
     */
    if (document.readyState === 'interactive') {
      readyFunc();
    } else {
      x.initFuncs.push(readyFunc);
    }
  },

  initFuncs: [
    () => {
      const header = document.getElementsByTagName('header')[0];
      const main = document.getElementsByTagName('main')[0];
      const threshold = document.querySelector('header .cta').clientHeight;
      const content = document.getElementById('content');
      const padding = header.offsetHeight - threshold;

      x.extend({ headerOverlap: threshold });

      let ticking = false;
      let smallHeader = false;
      let wasSmallHeader = false;

      window.addEventListener('scroll', e => {
        smallHeader = window.scrollY >= threshold;

        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (smallHeader != wasSmallHeader) {
              wasSmallHeader = smallHeader;

              if (smallHeader) {
                header.classList.add('header-small');
                main.style.marginTop = `${padding}px`;
                content.style.paddingTop = `${threshold}px`;
              } else {
                header.classList.remove('header-small');
                main.style.marginTop = null;
                content.style.paddingTop = null;
              }
            }

            ticking = false;
          });

          ticking = true;
        }
      });
    },
  ],
};
