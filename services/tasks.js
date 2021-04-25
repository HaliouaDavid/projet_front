import axios from "axios";
import {ENDPOINT} from "~/utils/variable"

let option = { 
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
}

let listID;

export const getTaskByListId = async (listId) => {
    listID = listId
    let tasks = []
    return await axios.get(`${ENDPOINT}/tasks/`, option).then(response => {
        for(let element of response.data["hydra:member"]) {
            if(listId == element.liste.split('/').pop()) {
                tasks.push({
                    name: element.Name,
                    date: element.date,
                    id: element.id,
                    note: element.note,
                    checked: element.fait
                })
            }
        }
        return tasks
    })
}

export const updateCheckTask = (taskid) => {
    return axios.put(`${ENDPOINT}/tasks/${taskid}`, option).then(response => {
        console.log(response)
    })
}

export const deleteTask = (taskid) => {
    return axios.delete(`${ENDPOINT}/tasks/${taskid}`, option).then(response => {
        console.log(response)
    })  
}

export const addNewTask = (taskValue) => {
    console.log(listID)
    let task = {
        Name: taskValue,
        date: new Date(),
        fait: false,
        note: taskValue,
        liste_id: listID
    }
    return axios.post(`${ENDPOINT}/tasks`, task, option).then(response => {
        console.log(response)
    })  
}