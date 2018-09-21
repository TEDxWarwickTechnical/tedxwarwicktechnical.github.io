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

  popover: param => {
    // if (param instanceof string)
  },

  initFuncs: [
    () => {
      const header = document.getElementsByTagName('header')[0];
      const main = document.getElementsByTagName('main')[0];
      const threshold = document.querySelector('header .cta').clientHeight;
      const content = document.getElementById('content');
      const padding = header.offsetHeight - threshold;

      x.extend({ headerOverlap: threshold });

      console.log('padding', padding);

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
    // () => {
    //   const body = document.body;
    //   const content = document.getElementById('content');
    //   const header = document.getElementsByTagName('header')[0];
    //
    //   content.addEventListener('transitionend', e => {
    //     if (e.target === content) {
    //       if (body.classList.contains('blur')) {
    //         if (header.classList.contains('header-small')) {
    //           header.style.position = 'absolute';
    //           header.style.top = `${window.scrollY}px`;
    //         }
    //       } else {
    //         header.style.position = null;
    //         header.style.top = null;
    //       }
    //     }
    //   });
    // },
  ],
};

// function init({url, fbAppId}) {
//     window.fbAsyncInit = () => {
//         FB.init({
//             appId: fbAppId,
//             version: 'v2.12',
//             autoLogAppEvents: true,
//             status: true,
//             xfbml: true
//         });
//     };
//
//     let path = location.pathname;
//
//     if (url !== path) {
//         history.replaceState({
//             src: path,
//             ext: path.startsWith(url) ? path.substring(url.length) : null
//         }, document.title, url);
//     }
//
//     /**
//      * Do not use `DOMContentLoaded` event here, since it fires *after* scripts
//      * with the `defer` attribute (i.e. social SDKs).  See HTML spec §12.2.7
//      * (The end) for more details.
//      */
//     if (document.readyState === 'interactive') {
//         ready();
//     } else {
//         document.onreadystatechange = () => {
//             if (document.readyState === 'interactive') {
//                 document.onreadystatechange = null;
//                 ready();
//             }
//         }
//     }
// }
//
// function ready() {
//     const header = document.getElementsByTagName('header')[0];
//     const main = document.getElementsByTagName('main')[0];
//     const threshold = document.querySelector('header .cta').clientHeight;
//     const content = document.getElementById('content');
//     const padding = header.offsetHeight - threshold;
//
//     console.log('padding', padding);
//
//     let ticking = false;
//     let smallHeader = false;
//     let wasSmallHeader = false;
//
//     window.addEventListener('scroll', e => {
//         smallHeader = window.scrollY >= threshold;
//
//         if (!ticking) {
//             window.requestAnimationFrame(() => {
//                 if (smallHeader != wasSmallHeader) {
//                     wasSmallHeader = smallHeader;
//
//                     if (smallHeader) {
//                         header.classList.add('header-small');
//                         main.style.marginTop = `${padding}px`;
//                         content.style.paddingTop = `${threshold}px`;
//                     } else {
//                         header.classList.remove('header-small');
//                         main.style.marginTop = null;
//                         content.style.paddingTop = null;
//                     }
//                 }
//
//                 ticking = false;
//             });
//
//             ticking = true;
//         }
//     });
// }
