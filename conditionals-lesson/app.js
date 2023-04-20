let app = Vue.createApp({
  data() {
    return {
      hobbies: [],
      enteredHobbyValue: "",
      key: 0,
    };
  },

  methods: {
    addHobby() {
      if (this.enteredHobbyValue == "") {
        alert("Empty");
      } else {
        this.hobbies.push({ id: this.key++, hobby: this.enteredHobbyValue });
        this.enteredHobbyValue = "";
      }
    },

    removeHobby(index){
        this.hobbies.splice(index, 1);
    }
  },
});

app.mount("body");
