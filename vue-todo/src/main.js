import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyBsA0FJhFbh3BwGXHeCQXAzJmYdOP17DBg",
    authDomain: "vue-todo-704a7.firebaseapp.com",
    projectId: "vue-todo-704a7",
    storageBucket: "vue-todo-704a7.appspot.com",
    messagingSenderId: "901109413973",
    appId: "1:901109413973:web:7ff3b8f01644459cf57cdc",
    measurementId: "G-W75J3J7DN1"
};

const app = initializeApp(firebaseConfig);
console.log(app)


// const app = createApp(App)
// app.use(router)
// app.mount('#app')

createApp(App).use(router).mount('#app')