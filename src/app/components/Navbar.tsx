import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const submit = (event: { preventDefault: () => void; }) => {
    if (!username) {
      alert("Please add username");
    }
    else {
      event.preventDefault();
      navigate("/", {state: { username: username }});
      setUsername("");
    }
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/profile">My Profile</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>  
          </ul>
          <form className="d-flex" onSubmit={submit}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control me-2" type="search" placeholder="Enter Username" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
