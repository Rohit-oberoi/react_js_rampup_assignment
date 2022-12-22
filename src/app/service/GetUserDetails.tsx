import axios from 'axios';
import { FETCHUSERURL } from '../Constants';

const GetUserDetails = (username: string) => {
    return axios.get(`${FETCHUSERURL}${username}`);
}

export default GetUserDetails
