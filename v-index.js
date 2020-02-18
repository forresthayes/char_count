var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    message: "Character Counter",
    input: null,
  },
  computed: {
    charCounter: function () {
      return `${this.input} has ${this.input.length} characters.`
    }
  }
})