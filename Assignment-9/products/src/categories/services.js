import axios from "axios";

const endpoint = "http://localhost:3030/categories/";

function getAll(){
    return axios.get(endpoint)
        .then(response => response.data);
}

function save(category){
    return axios.post(endpoint, category)
            .then(response => response.data);
}

export default {
    getAll,
    save,
}