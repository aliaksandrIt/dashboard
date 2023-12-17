import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Dashboard } from "./pages";
import { PurchasePage } from "./pages";
import GlobalStyle from "./app/GlobalStyle";
import { StyledContent, StyledHeader, StyledSider } from "./shared/common";
import { useState } from "react";
import { TableOutlined, BarChartOutlined } from "@ant-design/icons";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = [
    {
      key: "purchase",
      label: <Link to="/purchase">Purchase</Link>,
      icon: <TableOutlined />,
    },
    {
      key: "dashboard",
      label: <Link to="/dashboard">Dashboard</Link>,
      icon: <BarChartOutlined />,
    },
  ];

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <GlobalStyle />
        <StyledSider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={menuItems}
          />
        </StyledSider>
        <Layout className="site-layout">
          <Routes>
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
