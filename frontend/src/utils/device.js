import enquireJs from 'enquire.js'

export const DeviceType = {
    desktop: 'desktop',
    tablet: 'tablet',
    mobile: 'mobile'
}

export const deviceEnquire = function (callback) {
    const matchDesktop = {
        match: () => {
            callback && callback(DeviceType.desktop)
        }
    }

    const matchTablet = {
        match: () => {
            callback && callback(DeviceType.tablet)
        }
    }

    const matchMobile = {
        match: () => {
            callback && callback(DeviceType.mobile)
        }
    }

    enquireJs
        .register('screen and (max-width: 768px)', matchMobile)
        .register('screen and (min-width: 768px) and (max-width: 1024px)', matchTablet)
        .register('screen and (min-width: 1024px)', matchDesktop)
}
