import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>

      <Link to="/user-login">Login</Link>
    </div>
  );
}