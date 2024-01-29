console.log('Vue OK', Vue);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Attivo Vue
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        emails: []
    }),
    methods: {
        getRandomEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get(endpoint).then((res) => {
                    this.emails.push(res.data.response)
                    console.log(this.emails)
                })
            }
        }
    },
    created() {
        this.getRandomEmail()
    }
});
app.mount('#root');