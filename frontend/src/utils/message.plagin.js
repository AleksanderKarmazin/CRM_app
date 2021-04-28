export default {
    install(Vue, options){
        Vue.prototype.$messages = function (text) {
            M.toast({html:text})
        }
        Vue.prototype.$error = function (text) {
            M.toast({html: `[Ошибка]: ${text}`})
        }
    }
};
