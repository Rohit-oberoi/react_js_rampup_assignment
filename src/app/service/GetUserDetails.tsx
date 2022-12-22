import axios from 'axios';
import { FETCH_USER_URL } from '../constants/Constants';

const GetUserDetails = (username: string) => {
    return axios.get(`${FETCH_USER_URL}${username}`);
}

export default GetUserDetails
