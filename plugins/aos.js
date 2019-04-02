import AOS from 'aos'
import Vue from 'vue'
Vue.mixin({
  created: function () {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true
      })
    }, 400)
  },
  updated: function () {
    AOS.refreshHard()
  }
})
