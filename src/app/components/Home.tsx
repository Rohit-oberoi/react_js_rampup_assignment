import { useLocation } from 'react-router-dom';
import { User } from './User';

function Home(): JSX.Element {
    const location = useLocation();
    return (
        <div style={{minHeight: "56.3vh"}}>
            {location.state?<User username={location.state.username as string}/>:
                <div className="col px-md-5">
                    <div className="p-3 border bg-light mt-4">Home</div>
                </div>
            }
        </div>
    )
}

export default Home
