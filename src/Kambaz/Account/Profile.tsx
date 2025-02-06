import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="Username" className="form-control mb-2" />
      <input defaultValue="123" placeholder="Password" type="password" className="form-control mb-2" />
      <input defaultValue="Alice" placeholder="First Name" className="form-control mb-2" />
      <input defaultValue="Wonderland" placeholder="Last Name" className="form-control mb-2" />
      <input defaultValue="2000-01-01" type="date" className="form-control mb-2" />
      <input defaultValue="alice@wonderland" type="email" className="form-control mb-2" />
      <select defaultValue="FACULTY" className="form-select mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      
      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
