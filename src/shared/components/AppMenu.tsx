import {
  TableOutlined,
  BarChartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { breakpoints } from "../../app/styles/breakPoints";

type Menu = {
  handleMenu: (e: any) => void;
  activeMenu: string;
};

export function AppMenu({ handleMenu, activeMenu }: Menu) {
  const menuItems = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
    },
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
    <Menu
      onClick={handleMenu}
      theme={window.innerWidth <= breakpoints.md ? "light" : "dark"}
      activeKey=""
      selectedKeys={[activeMenu]}
      mode="inline"
      items={menuItems}
    />
  );
}
