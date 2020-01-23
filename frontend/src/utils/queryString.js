const qs = require('query-string')

function queryString (params) {
    let url = window.location.pathname
    let keys = Object.keys(params)
    let string = ''

    delete params.page

    if (Object.keys(params).length) {
        url += `?`
    }

    if (keys.length > 0) string = qs.stringify(params, { arrayFormat: 'bracket' })

    url += `${string}`

    if (history.pushState) {
        try {
            history.pushState({}, '', url)
            return
        } catch (err) {
            console.error('Error in queryString!')
        }
    } else {
        document.location.href = url
    }
}

export { queryString }
