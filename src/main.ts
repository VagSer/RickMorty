import { createApp } from 'vue'

import './style.css'
import 'primevue/resources/themes/saga-blue/theme.css'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import TreeSelect from 'primevue/treeselect';

const app = createApp(App)

app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('TreeSelect', TreeSelect)

app
    .use(PrimeVue)
    .mount('#app')