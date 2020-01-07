'use strict'

const defaults = {
  allowMultiLoading: false,
};

class BackendError extends Error {
  retry = null;

  constructor(message, retry = false) {
    super(message);

    this.retry = retry;
  }
}

class Backend {
  constructor(services, options) {
    this.init(services, options);
  }

  type = 'backend'

  static type = 'backend'

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
      let lng = __platformGetI18N(language);
      callback(null, __platformGetI18N(language));
    }

    // load via fetch: /_special/locale/<lng>.json
    fetch("/_special/locale/"+language+".json")
      .then(function(res) {
        if (!res.ok) {
          const retry = res.status >= 500 && res.status < 600; // don't retry for 4xx codes
          throw new BackendError(`failed loading ${url}`, retry);
        }
        return res.json();
      })
      .then(function(res) { callback(null, res); })
      .catch(function(err) {
        if (e instanceof BackendError) {
          callback(e.message, e.retry);
        } else {
          callback(e, false);
        }
      });
  }

  readMulti(languages, namespaces, callback) {
  }
}

export default Backend;
