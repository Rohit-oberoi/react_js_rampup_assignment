import axios from 'axios';

const GetUserDetails = async (username: string) => {
    return await axios.get(`https://api.github.com/users/${username}`);
}

export default GetUserDetails
