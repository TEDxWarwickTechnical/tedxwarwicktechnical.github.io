'use strict';

//var SpeakerPopover = document.getElementById("{{ speaker.slug }}");
var currentSpeaker;

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
    //background = (body > div:not(#speaker));

    // var allElements = document.getElementsById("*");
    // for (var i = 0, len = allElements.length; i < len; i++) {
    //   if (allElements[i] != speaker){
    //     allElements[i].classList.add('blur');
    //   }
    // }
    //

    //document.getElementById(overlay).classList.add('blur');
    document.body.classList.add('blur');
    //console.log(document.body.classList);
    document.getElementById(speaker).style.display = "block";
    // console.log(document.getElementById(speaker).classList);
    // document.getElementById(speaker).classList.remove('blur');
    // console.log(document.getElementById(speaker).classList);
    currentSpeaker = speaker;
  },
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log("Window Clicked");
  console.log(event.target);
  if (event.target == overlay) {
    console.log("Remove popover");
    document.body.classList.remove('blur');
    console.log(currentSpeaker);
    document.getElementById(currentSpeaker).style.display = "none";
  }
}
