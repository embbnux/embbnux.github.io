(function() {
  var currentScipt = document.currentScript;
  if (!currentScipt) {
    currentScipt = document.querySelector('script[src*="adapter.js"]');
  }
  var rc_s = document.createElement("script");
  rc_s.src = currentScipt || "https://embbnux.github.io/ringcentral-embeddable-voice/adapter.js";
  var rc_s0 = document.getElementsByTagName("script")[0];
  rc_s0.parentNode.insertBefore(rc_s, rcs0);
})();
