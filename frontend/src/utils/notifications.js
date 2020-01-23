import Noty from 'noty'

Noty.overrideDefaults({
    layout: 'topRight',
    type: 'alert',
    text: '',
    dismissQueue: true,
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    timeout: 5000,
    force: false,
    modal: false,
    maxVisible: 10,
    killer: false,
    closeWith: ['click'],
    callback: {
        onShow: function () {},
        afterShow: function () {},
        onClose: function () {},
        afterClose: function () {},
        onCloseClick: function () {}
    },
    buttons: false
})

function showNotyfications (messageN, optionsN) {
    let notyOpt = {}
    if (typeof optionsN !== 'undefined') {
        notyOpt = Object.assign(optionsN)
        if (optionsN.type === undefined) {
            notyOpt.type = 'alert'
        }
        if (optionsN.layout === undefined) {
            notyOpt.layout = 'topRight'
        }
    }
    notyOpt.text = messageN
    new Noty(notyOpt).show()
};

export { showNotyfications }
