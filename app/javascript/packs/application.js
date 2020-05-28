require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import "../plugins/flatpickr"
import { initMapbox } from '../plugins/init_mapbox';


document.addEventListener('turbolinks:load', () => {
  initMapbox();
})
