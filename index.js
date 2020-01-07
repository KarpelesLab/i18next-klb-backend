'use strict'

const defaults = {
  allowMultiLoading: false,
};

class Backend {
  constructor(services, options) {
    this.init(services, options);

    this.type = 'backend';
  }

  init(services, options = {}) {
    this.services = services;

    this.options = {
      ...defaults,
      ...this.options,
      ...options,
    };
  }

  read(language, namespace, callback) {
    if (typeof __platformGetI18N !== "undefined") {
      callback(null, __platformGetI18N(language));
    }

    // load via fetch: /_special/locale/<lng>.json
    fetch("/_special/locale/"+language+".json")
      .then(function(res) {
        if (!res.ok) {
          const retry = res.status >= 500 && res.status < 600; // don't retry for 4xx codes
	  callback(`failed loading ${url}`, retry);
	  return;
        }
        return res.json();
      })
      .then(function(res) { callback(null, res); })
      .catch(function(err) {
        callback(e, false);
      });
  }
}

Backend.type = 'backend';

export default Backend;
