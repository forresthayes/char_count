var app = new Vue({
  el: '#app',
  data: {
    message: "Enter a string and we'll count the characters!",
    input: null,
  },
  computed: {
    charCounter: function () {
      return `${this.input} has ${this.input.length} characters.`
    }
  }
})