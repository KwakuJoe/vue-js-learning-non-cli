const buttonComponent = {
    template: `
          <button class="btn btn-primary">{{buttonLabel}}</button>
          `,
  
    data() {
      return {
        buttonLabel: "Update",
      };
    },
  };


let app = Vue.createApp({

    components:{
        'button-component':buttonComponent
    }
});



// one way of regsitering

app.component("btn-component", {
  template: `
    <button class="btn btn-primary">{{buttonLabel}}</button>
    `,

  data() {
    return {
      buttonLabel: "Update",
    };
  },
});

app.mount("#app");
