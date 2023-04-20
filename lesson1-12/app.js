const app = Vue.createApp({

  data() {
    return {
      test:'test data',
      message:'',
      link:'https://vuejs.org/',
      pages: [
        {
          title: "Home Page",
          description: "Welcome to the wonderful vue js journey",
          link: { text: "Home", url: "index.html" },
        },
        {
          title: "About",
          description: "Welcome to the wonderful vue js journey",
          link: { text: "Home", url: "about.html" },
        },
        {
          title: "Hello",
          description: "Welcome to the wonderful vue js journey",
          link: { text: "Home", url: "contact.html" },
        },
      ],

      // lesson4
      count:0,

      // lesson5
      name:'',
      lastName:'',
      confirmedName:'',
      // fullName:''
    
    };
  },

  // watchers
  watch:{
    count(){
      if(this.count > 10){
        alert('Count has exceed maximum');
        this.count = 0;
      }
    }
  },

  // computed
  computed:{
    fullName(){
      console.log('Executing computed');
      return this.name + this.lastName;
    }
  },

  // methods
  methods:{
    getText(){
      return 'This is a text from a function';
    },

    setFullName(){
      console.log('Executing method 1');
      return this.name +' Web Dev 1';
    },

    onIncrement(){
      this.count++;
    },

    onDecrement(){
      this.count--;
    },

    setName($event){
      this.name = $event.target.value;
      console.log($event.target.value);
    },
    setLastName($event){
      this.lastName = $event.target.value;
      console.log($event.target.value);
    },

    setConfirmedName(){
      this.confirmedName = this.name;
    }
  }
  
});

app.mount('body')
