const DEFAULT_REGEX = '(j|s|postattendee)';

browser.runtime.onMessage.addListener(
  function (req, sender) {
    function onConfigLoaded(config) {
      const url_pattern = config.url_pattern || DEFAULT_REGEX;
      const zoomUrls = new RegExp('https:\/\/([^\/]+\.)*zoom.us\/' + url_pattern, 'gi');

      if (sender.tab.url.match(zoomUrls)) {
        browser.tabs.remove(sender.tab.id);
      }
    }

    function onError(error) {
      // Note, this is not the Web Console, this is the
      // Browser console.  In the Browser console itself
      // you'll also need to make sure the Show Content
      // Messages option is enabled.
      console.log(error);
    }

    browser.storage.sync.get().then(onConfigLoaded, onError);
  }
);
