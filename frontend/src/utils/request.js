import axios from 'axios'
import { VueAxios } from './axios'
import { showNotyfications } from '@/utils/notifications'

// eslint-disable-next-line no-undef
// const LANG = App.page.lang

// Create an axios instance

const service = axios.create({
    baseURL: `/api` // api base_url
})

const err = (error) => {
    const response = error.response

    if (response) {
        if (response.status < 200 || response.status >= 300) {
            console.error(`Url: ${response.config.baseURL + response.config.url}\nStatus: ${response.status}\nText: ${response.statusText}`)
            showNotyfications(`Url: ${response.config.baseURL + response.config.url}<br>Status: ${response.status}<br>Text: ${response.statusText}`, {
                type: 'error'
            })
        };
    }

    return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
    config.headers['Test-Header'] = 'test'
    return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
    return response.data
}, err)

const installer = {
    vm: {},
    install (Vue) {
        Vue.use(VueAxios, service)
    }
}

export {
    installer as VueAxios,
    service as axios
}
