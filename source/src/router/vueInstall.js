import $ajax from '../util/ajax'


var vueInstall = {};

vueInstall.install = function (Vue) {
    Vue.prototype.$ajax = $ajax;
}

export default vueInstall;