import Vue from 'nativescript-vue'
import App from './App'
import Home from './views/Home'
import DrawerContent from './components/DrawerContent'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
Vue.use(RadSideDrawer)

// Vue.config.silent = TNS_ENV === 'production'
Vue.config.silent = false

new Vue({
  render(h) {
    return h(App, [h(DrawerContent, { slot: 'drawerContent' }), h(Home, { slot: 'mainContent' })])
  }
}).$start()
