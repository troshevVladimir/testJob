// import Vue from 'vue'
import { deviceEnquire, DeviceType } from '@/utils/device'
import { mapState } from 'vuex'

// const mixinsComputed = Vue.config.optionMergeStrategies.computed
// const mixinsMethods = Vue.config.optionMergeStrategies.methods

const mixinDevice = {
    computed: {
        ...mapState({
            device: state => state.app.device
        })
    },
    methods: {
        isMobile () {
            return this.device === DeviceType.mobile
        },
        isDesktop () {
            return this.device === DeviceType.desktop
        },
        isTablet () {
            return this.device === DeviceType.tablet
        }
    }
}

const AppDeviceEnquire = {
    mounted () {
        const { $store } = this
        deviceEnquire(deviceType => {
            switch (deviceType) {
            case DeviceType.desktop:
                $store.commit('ToggleDevice', 'desktop')
                break
            case DeviceType.tablet:
                $store.commit('ToggleDevice', 'tablet')
                break
            case DeviceType.mobile:
            default:
                $store.commit('ToggleDevice', 'mobile')
                break
            }
        })
    }
}

export { mixinDevice, AppDeviceEnquire }
