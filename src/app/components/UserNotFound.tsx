import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";

const ErrorComponent = (): JSX.Element => {
    const location = useLocation();
    return (
        <div style={{minHeight: "56.3vh"}}>
            {location.state? 
                <div className="col px-md-5">
                    <div className="p-3 border bg-light mt-4">
                        <h5>Profile with below username doesn't exist! <p style={{color:"red"}}>{location.state.username}</p></h5>
                        <h5>
                            <Link to={ROUTES.HOME}>Go to Home</Link>
                        </h5>
                    </div>
                </div> :
                <div className="col px-md-5">
                    <div className="p-3 border bg-light mt-4">
                        <h5>
                            <Link to={ROUTES.HOME}>Go to Home</Link>
                        </h5>
                    </div>
                </div>
            }
        </div>
    )
}

export default ErrorComponent
