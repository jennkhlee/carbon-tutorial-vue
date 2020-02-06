import Vue from 'vue';
import App from './App.vue';
import router from './router';

import CarbonComponentsVue from '@carbon/vue';
import '@carbon/charts/styles.css';
import chartsVue from '@carbon/charts-vue';

Vue.use(CarbonComponentsVue);
Vue.use(chartsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
