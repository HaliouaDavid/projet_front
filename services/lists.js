import axios from "axios";
import {ENDPOINT} from "~/utils/variable"

let option = { 
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
}

export const getListByUserId = async () => {
    let userId = localStorage.getItem('userId')
    return await axios.get(`${ENDPOINT}/listes`, option).then(response => {
        let lists = [];
        for(let element of response.data["hydra:member"]) {
            if(userId == element.User.split('/').pop()) {
                lists.push({
                    id: element.id,
                    name: element.name,
                    tasks: [...element.tasks]
                })
            }
        };
        return lists;
    })
}