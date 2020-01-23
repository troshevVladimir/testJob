// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-inline-svg": {
      paths: ['frontend/assets/svg-icons/'],
      removeFill: true
    },
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
