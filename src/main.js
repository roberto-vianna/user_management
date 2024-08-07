import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

// Importar o BootstrapVue e os plugins de ícones
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Importar os arquivos CSS do Bootstrap e BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Importar os ícones do Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Tornar o BootstrapVue disponível em todo o projeto
Vue.use(BootstrapVue)
// Instalar opcionalmente o plugin de componentes de ícones do BootstrapVue
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
