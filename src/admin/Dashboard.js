// src/admin/Dashboard.jsx
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", padding: "20px", background: "#f0f0f0" }}>
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="products">Products</Link></li>
            <li><Link to="orders">Orders</Link></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
