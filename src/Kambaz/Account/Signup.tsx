import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-4">
      <h3>Sign up</h3>
      <input placeholder="Username" className="form-control mb-2" />
      <input placeholder="Password" type="password" className="form-control mb-2" />
      <input placeholder="Verify Password" type="password" className="form-control mb-2" />
      <Link to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
