# Vuegic

## Props

| Prop name | Description | Type | Values | Default |
| --------- | ----------- | ---- | ------ | ------- |
| doc       |             |      | -      |         |

---

<a href="https://github.com/albreis/vueder/edit/master/documentation/src/wrapper.js" class="docgen-edit-link">Algo errado? Avise-nos!</a>

// Import vue component
import component from './Vuegic.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
if (install.installed) return;
install.installed = true;
Vue.component('Vuegic', component);
}

// Create module definition for Vue.use()
const plugin = {
install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
GlobalVue = global.Vue;
}
if (GlobalVue) {
GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;
