import axios from 'axios'


const data = {
    namespaced: true,
    state: {
        username: "",
        email: "",
        password: "",
        productID: "",
        nameID: "",
        respone: ""
    },
    mutations: {
        setUsername(state, username) {
            state.username = username
        },
        setEmail(state, email) {
            state.email = email
        },
        setPassword(state, password) {
            state.password = password
        },
        setproductID(state, productID) {
            state.productID = productID
        },
        setnameID(state, nameID) {
            state.nameID = nameID
        },
        setRespone(state, respone) {
            state.respone = respone
        }

    },
    actions: {
        loadItems({ commit, state }) {
            axios
                .post("http://217.160.144.202:8080/api/create-checkout-session/", {

                    nameID: state.nameID,
                })
                .then((res) => {
                    console.log(res.data.url)
                    commit('setRespone', res.data.url)
                    window.location.href = res.data.url;

                })
                .catch((err) => {

                    console.log(err);

                });
        },


        sendData({ commit, state }) {
            axios
                .post("http://217.160.144.202:8080/api/success/", {

                    password: JSON.parse(localStorage.getItem('password')),
                    username: JSON.parse(localStorage.getItem('username')),
                    email: JSON.parse(localStorage.getItem('email')),
                    productID: JSON.parse(localStorage.getItem('productID')),
                })
                .then((res) => {
                    console.log(res.data)
                    commit('setRespone', res.data.url)
                    window.location.href = 'https://urlg.eu/';


                })
                .catch((err) => {

                    console.log(err);

                });
        },
        sendAuth({ commit, state }) {
            axios
                .post("https://urlg.eu/wp-json/jwt-auth/v1/token", {

                    username: JSON.parse(localStorage.getItem('username')),
                    password: JSON.parse(localStorage.getItem('password')),

                })
                .then((res) => {
                    console.log(res.data)
                    commit('setRespone', res.data.url)

                })
                .catch((err) => {

                    console.log(err);

                });
        },


        // save in store 
        setItems({ commit }, { email, password, username }) {
            commit('setUsername', username)
            commit('setEmail', email)
            commit('setPassword', password)

        },
        setId({ commit }, { productID, nameID }) {
            commit('setproductID', productID)
            commit('setnameID', nameID)


        },

    },
    // getters: {
    //     loadedToken(state) {
    //         return state.token
    //     },

    // }
    // axios
    //             .post("https://urlg.eu/wp-json/jwt-auth/v1/token", {

    //     username: JSON.parse(localStorage.getItem('username')),
    //     password: JSON.parse(localStorage.getItem('password')),

    // })
    //     .then((res) => {
    //         console.log(res.data)
    //         commit('setRespone', res.data.url)

    //     })
    //     .catch((err) => {

    //         console.log(err);

    //     });
}
export default data;