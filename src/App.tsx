import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import { Dashboard } from "./pages";
import { PurchasePage } from "./pages";
import { useState } from "react";
import { AppHeader, StyledSider, Title } from "./shared/components";
import { AppMenu } from "./shared/components/AppMenu";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("Главная");
  const [activeMenu, setActiveMenu] = useState("1");

  const handleMenuClick = (e: any) => {
    setActiveMenu(e.key);
    switch (e.key) {
      case "purchase":
        setTitle("Purchase");
        break;
      case "dashboard":
        setTitle("Dashboard");
        break;
      default:
        setTitle("");
    }
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader
          activeMenu={activeMenu}
          title={title}
          handleMenu={handleMenuClick}
        />
        <Layout>
          <StyledSider collapsible collapsed={visible} onCollapse={setVisible}>
            <AppMenu activeMenu={activeMenu} handleMenu={handleMenuClick} />
          </StyledSider>
          <Layout className="site-layout">
            <Routes>
              <Route path="/purchase" element={<PurchasePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
