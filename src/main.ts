import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import router from "./router";
import store from "./store";
import Ripple from "primevue/ripple";


import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import 'primeflex/primeflex.css';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Chart from "primevue/chart";




const app = createApp(App);
app.use(PrimeVue, {ripple: true});
app.use(store);
app.use(router);
app.component('Button', Button);
app.component('Card', Card);
app.component('Chart', Chart);
app.directive('ripple', Ripple)


app.mount("#app");
