import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faExpand, faCompress);

import './style/main.scss'

const app = createApp(App)
app.mount('#app')
app.component("font-awesome-icon", FontAwesomeIcon);
