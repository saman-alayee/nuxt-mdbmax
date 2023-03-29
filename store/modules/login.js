import axios from 'axios'


const data = {
    namespaced: true,
    state: {
        username: "",
        email: "",
        password: "",
        productID: "",
        nameID: "",
        respone: "",
        existUsername: '',
        existEmail:'',
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
        },
        setexistUsername(state, existUsername) {
            state.existUsername = existUsername
        },
        setexistEmail(state, existEmail) {
            state.existEmail = existEmail
        },

    },
    actions: {
        checkUsername({ commit, state }) {
            axios
                .get(`https://benameiran.golf/rcp/v1/members?s=${state.username}`, {
                    headers: {
                        Authorization:"Basic c29iaGFuMGEwQGdtYWlsLmNvbTpiNmdiIEt0RnQgWGJYeiAzbWhBIHJ4ZGggV2VROA=="
                    }
                })
                .then((res) => {
                    console.log(res.data)
                    if (res.data[0]){
                        commit('setexistUsername', true)
                        console.log("true")
                    }
                    else{
                        commit('setexistUsername', false)
                        console.log("false")
                    }
                })
                .catch((err) => {
                    console.log(err);
                    state.existUsername == false

                });
        },
        checkEmail({ commit, state }) {
            axios
                .get(`https://benameiran.golf/rcp/v1/members?s=${state.email}`, {
                    headers: {
                        Authorization: "Basic c29iaGFuMGEwQGdtYWlsLmNvbTpiNmdiIEt0RnQgWGJYeiAzbWhBIHJ4ZGggV2VROA=="
                    }
                })
                .then((res) => {

                    if (res.data[0]) {
                        commit('setexistEmail', true)
                        console.log("true")
                    }
                    else {
                        commit('setexistEmail', false)
                        console.log("false")

                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },




        loadItems({ commit, state }) {
            axios
                .post("https://billing.mdbmax.com/test/api/create-checkout-session/", {

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
                .post("https://billing.mdbmax.com/test/api/success/", {

                    password: JSON.parse(localStorage.getItem("password")),
                    username: JSON.parse(localStorage.getItem("username")),
                    email: JSON.parse(localStorage.getItem("email")),
                    productID: JSON.parse(localStorage.getItem("productID")),
                })
                .then((res) => {
                    console.log(res.data)
                    commit('setRespone', res.data.url)
                    


                })
                .catch((err) => {

                    console.log(err);

                });
        },
        sendAuth({ commit, state }) {
            axios
                .post("https://benameiran.golf/wp-json/jwt-auth/v1/token", {

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


        // save auth data in store 
        setItems({ commit }, { email, password, username }) {
            commit('setUsername', username)
            commit('setEmail', email)
            commit('setPassword', password)

        },
        // set product data in store
        setId({ commit }, { productID, nameID }) {
            commit('setproductID', productID)
            commit('setnameID', nameID)


        },

    },
    // getters: {

}
export default data;