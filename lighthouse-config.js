module.exports = {
  settings: {
    skipAudits: [
      'uses-http2' // This will never be the case when testing in CI.
    ]
  }
}
