import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false


// mixin
Vue.mixin({

  computed:{

      currentRouteName() {
        return this.$route.name;
    }


  }

})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
