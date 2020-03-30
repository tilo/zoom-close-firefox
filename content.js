const DEFAULT_DELAY_SECONDS = 3;

function onConfigLoaded(config) {
  const seconds = (config.delay_seconds || DEFAULT_DELAY_SECONDS) * 1000;
  setTimeout(function() {
    browser.runtime.sendMessage({}, function() {});
  }, seconds);
}

function onError(error) {
  // Note, this is not the Web Console, this is the
  // Browser console.  In the Browser console itself
  // you'll also need to make sure the Show Content
  // Messages option is enabled.
  console.log('Error loading browser config: ');
  console.log(error);

  // We still want to trigger closing the window
  onConfigLoaded({});
}

browser.storage.sync.get().then(onConfigLoaded, onError);