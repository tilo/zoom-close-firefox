const DEFAULT_REGEX = '(j|s|postattendee)';
const DEFAULT_DELAY_SECONDS = 3;

function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    url_pattern  : document.querySelector("#url_pattern").value,
    delay_seconds: document.querySelector("#delay_seconds").value
  });
}

function restoreOptions() {
  function setCurrentChoice(config) {
    document.querySelector("#url_pattern").value = config.url_pattern || DEFAULT_REGEX;
    document.querySelector("#delay_seconds").value = config.delay_seconds || DEFAULT_DELAY_SECONDS;
  }

  function onError(error) {
    // Note, this is not the Web Console, this is the
    // Browser console.  In the Browser console itself
    // you'll also need to make sure the Show Content
    // Messages option is enabled.
    console.log(error);
  }

  browser.storage.sync.get().then(setCurrentChoice, onError);
}

function resetDefaults() {
  document.querySelector("#url_pattern"),value = DEFAULT_REGEX;
  document.querySelector("#delay_seconds").value = DEFAULT_DELAY_SECONDS;
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.querySelector("#reset").addEventListener("click", resetDefaults);