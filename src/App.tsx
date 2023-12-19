import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useState } from "react";
import { AppHeader, StyledSider } from "./shared/components";
import { AppMenu } from "./shared/components/AppMenu";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("Home");
  const [activeMenu, setActiveMenu] = useState("1");

  const handleMenuClick = (e: any) => {
    setActiveMenu(e.key);
    switch (e.key) {
      case "home":
        setTitle("Home");
        break;
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
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
