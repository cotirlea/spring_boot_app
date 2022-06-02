import axios from "axios";

function status(response) {
    console.log('response status '+response.status);
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}

const url = 'http://localhost:8080/proba';

export const getProba = async () =>{
    return await axios.get(url).then((response) => response.data);
}


export const removeProba = async(nume_proba,nume_participant) =>{
    let removeUrl = url + '/remove/' + nume_proba + "+" + nume_participant
    await axios.delete(removeUrl)
}

export const addProba = async(nume_proba,nume_participant) =>{
    let addUrl = url + '/add/' + nume_proba + "+" + nume_participant
    await axios.post(addUrl)
}

