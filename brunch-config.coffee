module.exports = config:
  npm: enabled: true
  files:
    javascripts:
      joinTo:
        'vendor.js': /node_modules/
        'app.js': /app/
    stylesheets:
      joinTo:
        'styles.css': 'app/styles/main.less'
  server:
    hostname: "0.0.0.0"
  conventions:
    ignored: /^test/
    assets: /^(app(\/|\\)(views|assets))/
