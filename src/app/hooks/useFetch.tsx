import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { DEMOUSERDATA, ERRORURL, FETCHUSERURL } from '../Constants';
import { UserType } from '../interfaces/UserType';

const useFetch = (username: string): UserType => {
    const [data, setdata] = useState(DEMOUSERDATA);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${FETCHUSERURL}${username}`).then(data => setdata(data.data))
        .catch(()=>{navigate(ERRORURL, {state: { username: username }})});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    return data;
};

export default useFetch;
