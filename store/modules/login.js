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
                .post("http://127.0.0.1:8000/create-checkout-session/", {

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
                .post("http://127.0.0.1:8000/success/", {

                    username: JSON.parse(localStorage.getItem('username')),
                    password: JSON.parse(localStorage.getItem('password')),
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
}
export default data;