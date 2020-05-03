module.exports = {
  settings: {
    skipAudits: [
      'uses-http2', // This will never be the case when testing in CI.
      'canonical', // This is because we're testing using a local server in CI, so the improper domain.
      'redirects-http' // Same as above - not the real production environment.
    ]
  }
}
