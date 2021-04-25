import axios from "axios";

import {ENDPOINT} from "~/utils/variable"
const URL = ENDPOINT.split('/api')[0];

export const getUserId = async(email) => {
    return await axios.get(`${URL}/getid/${email}`)
}