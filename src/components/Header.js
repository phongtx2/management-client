import { Layout } from "antd";
import logo from "../assets/logo.webp";

export const Header = () => {
  return (
    <Layout.Header
      style={{
        lineHeight: "0px",
        height: "100px",
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "rgba(255,176,81,1)",
        display: "flex",
        alignItems: "center",
      }}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" height="60px" />
      </a>
    </Layout.Header>
  );
};
