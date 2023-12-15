import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import Dashboard from "./pages/Dashboard";
import Purchase from "./pages/PurchasePage";

const App = () => {
  const menuItems = [
    {
      key: "purchase",
      label: <Link to="/purchase">Purchase</Link>,
    },
    {
      key: "dashboard",
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    // Добавьте дополнительные пункты меню здесь
  ];

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ width: 256 }}>
          <Menu items={menuItems} />
        </div>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
