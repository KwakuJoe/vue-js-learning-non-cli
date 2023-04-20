let app = Vue.createApp({
    data(){
        return {
            count:0
        }
    },
    

    methods: {
        updateCount(){
            this.count ++;
        }
    },

    // before create
    beforeCreate() {
         console.log('Before create method executing...');
    },

    created(){
        console.log(' created method executing...');
    },

    // mounted
    beforeMount() {
        console.log(' before Mount method executing...');
    },

    mounted() {
        console.log(' Mount method executing...');
    },

    beforeUpdate() {
        alert('Before updated uppdate')

        console.log(' Before Updated method executing...');
    },

    updated() {
        alert('Updated uppdate')
        console.log('  Updated method executing...');
        
    },
})

app.mount("#app");

