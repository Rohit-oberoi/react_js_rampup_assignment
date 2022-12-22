import axios from 'axios';
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { DEMO_USER_DATA, FETCH_USER_URL } from '../constants/Constants';
import { ROUTES } from '../constants/routeConstants'; 
import { UserType } from '../interfaces/UserType';

const useFetch = (username: string, setLoader: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }): UserType => {
    const [data, setdata] = useState(DEMO_USER_DATA);
    const navigate = useNavigate();

    useEffect(() => {
        setLoader(true);
        axios.get(`${FETCH_USER_URL}${username}`).then((data) => {setdata(data.data); setLoader(false);})
        .catch(()=>{navigate(ROUTES.USER_NOT_FOUND, {state: { username: username }})});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    return data;
};

export default useFetch;
