import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom';
import GetUserDetails from "../service/GetUserDetails";
import { UserType } from "../Types";

export const User = (props: { username: string; }): JSX.Element => {
    const demoUserData: UserType = {
        avatar_url: "https://avatars.githubusercontent.com/u/97114554?v=4",
        login: "Undefined",
        location: "Undefined",
        followers: 0,
        following: 0,
        bio: "Undefined",
        html_url: "Undefined",
        email: "Undefined"
    }
    const [response, setResponse] = useState<UserType>(demoUserData);
    const navigate = useNavigate();
    async function fetchData(username: string) {
        await GetUserDetails(username).then(data => setResponse(data.data))
        .catch(()=>{navigate("/errorComponent", {state: { username: username }})});
    }
    let { username } = useParams();

    useEffect(() => {
        fetchData(username? username:props.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.username, username]);

    return (
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
    )
}

User.defaultProps = {
    username: "imrohitoberoi"
}
User.propTypes = {
    username: PropTypes.string.isRequired
}
