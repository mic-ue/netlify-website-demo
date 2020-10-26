import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt,faBook,faHatWizard,faBirthdayCake,faBroom,faFire} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCalendarAlt,faBook,faHatWizard,faBirthdayCake,faBroom,faFire,faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)

import VueParticles from 'vue-particle'
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
