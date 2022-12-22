import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { UserType } from "../interfaces/UserType";
import { DEMO_USER_DATA, CURRENT_USER } from '../constants/Constants';
import useFetch from "../hooks/useFetch";
import Loader from "../Loader";

export const User = (props: { username: string; }): JSX.Element => {
    const [response, setResponse] = useState<UserType>(DEMO_USER_DATA);
    const [loader, setLoader] = useState(true);
    let { username } = useParams();
    const data: UserType = useFetch(username? username:props.username, setLoader);

    useEffect(() => {
        setResponse(data);
    }, [data]);

    return (
        <>
        {loader ? <Loader /> :
            <div className="mx-auto mt-3" style={{width: "300px"}}>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={response.avatar_url} alt="User Profile Pic" />
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href={response.html_url} className="card-link">{response.login}</a>
                        </h5>
                        {response.bio?<p className="card-text">{response.bio}</p>:''}
                    </div>
                    <ul className="list-group list-group-flush">
                        {response.email?<li className="list-group-item active">Email: {response.email}</li>:''}
                        <li className="list-group-item">Following: {response.following}</li>
                        <li className="list-group-item">Followers: {response.followers}</li>
                        {response.location?<li className="list-group-item">Location: {response.location}</li>:''}
                    </ul>
                </div>
            </div>
        }
        </>
    )
}

User.defaultProps = {
    username: CURRENT_USER
}
User.propTypes = {
    username: PropTypes.string.isRequired
}
