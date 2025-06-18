// store.js
import { reactive } from 'vue'

export const store = reactive({
  showPopup:false,
  popupSuccess:false,
  showProductPopup:false,
  popupProductPartners:[]
})