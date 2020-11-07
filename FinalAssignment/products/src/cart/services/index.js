import axios from "axios";

const endpoint = "http://localhost:3030/cart/";

function getAll(){
    return axios.get(endpoint)
        .then(response => response.data);
}

function save(item){
    if (item.id === 0){
        return axios.put(endpoint,item).then(response => response.data);
    }
    if (item.quantity === 0){
        return axios.delete(endpoint,item.id)
    }
    return axios.post(endpoint,item).then(response => response.data);
}

export default {
    getAll,
    save,
}