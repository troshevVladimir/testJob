function getLang () {
    return document.querySelector('html').getAttribute('lang')
};

function localize (obj) {
    if (typeof obj === 'object') {
        return obj[document.querySelector('html').getAttribute('lang')]
    }
};

export { getLang, localize }
