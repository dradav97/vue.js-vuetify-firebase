import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize'
Vue.use(VueTextareaAutosize)

import firebase from 'firebase/app'
import 'firebase/firestore'


 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyA-G97yk5eiSodlLnbN26d--sPY3yDxF1k",
  authDomain: "vue-calendario-e2495.firebaseapp.com",
  databaseURL: "https://vue-calendario-e2495.firebaseio.com",
  projectId: "vue-calendario-e2495",
  storageBucket: "vue-calendario-e2495.appspot.com",
  messagingSenderId: "337663128520",
  appId: "1:337663128520:web:3ce325c6e32da658e506fd"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
