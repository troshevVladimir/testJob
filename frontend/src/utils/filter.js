import Vue from 'vue'
import moment from 'moment'

// eslint-disable-next-line no-undef
const LANG = App.page.lang
moment.locale(`${LANG}`)

// for example
Vue.filter('momentFilter', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment.unix(dataStr).format(pattern)
})
