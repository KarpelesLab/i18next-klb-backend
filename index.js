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
    if (language.length != 5) {
      // ignore this (tip: you should set load: 'currentOnly' in i18next options)
      // this can happen if i18next attempts to load spepcial language "dev" or "en" instead of "en-US"
      callback(null, {});
      return;
    }
    if ((typeof FW !== "undefined") && (language == FW.Locale) && (typeof FW.i18n !== "undefined")) {
      // we already know about this language, use it
      callback(null, FW.i18n);
      return;
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

module.exports.Backend = Backend;
