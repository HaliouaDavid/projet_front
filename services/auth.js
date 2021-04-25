import axios from "axios";

import {ENDPOINT} from "~/utils/variable";

export const loginWithEmailAndPassword = async(username, password) => {
    return await axios.post(`${ENDPOINT}/login`, {username, password})
}