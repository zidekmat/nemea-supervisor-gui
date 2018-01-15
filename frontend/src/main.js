import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router'

import ConfComponent from './components/Conf.vue'
import ConfForm from './components/ConfForm.vue'
import ConfListing from './components/Listing.vue'

require('../node_modules/font-awesome/css/font-awesome.min.css')

Vue.use(Vuetify)
Vue.component('conf-component', ConfComponent)
Vue.component('conf-form-component', ConfForm)
Vue.component('conf-listing-component', ConfListing)

const app = new Vue({
  router,
  render: h => h(App),
  mounted () {
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}).$mount('#app')
